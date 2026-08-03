import { toJpeg } from "html-to-image"
import jsPDF from "jspdf"

export const generatePdfFromReport = async (reportContainerRef, setExportingState) => {
  if (!reportContainerRef || !reportContainerRef.current) return

  try {
    if (setExportingState) setExportingState(true)

    const container = reportContainerRef.current

    // 1. Ensure all web fonts are 100% loaded
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready
    }

    // 2. Preload all images
    const images = Array.from(container.querySelectorAll("img"))
    await Promise.all(
      images.map((img) => {
        if (img.complete) return Promise.resolve()
        return new Promise((resolve) => {
          img.onload = resolve
          img.onerror = resolve
        })
      })
    )

    await new Promise((resolve) => setTimeout(resolve, 300))

    // Measure DOM element bounding boxes relative to container BEFORE snapshot
    const containerRect = container.getBoundingClientRect()
    const blockEls = Array.from(
      container.querySelectorAll(".bg-\\[\\#F6F6F6\\], .bg-white, tr, .card-container")
    )

    // 3. Capture continuous full report image at 2x retina sharpness
    const pixelRatio = 2
    const dataUrl = await toJpeg(container, {
      quality: 0.90,
      pixelRatio: pixelRatio,
      backgroundColor: "#ffffff",
      cacheBust: false,
      filter: (node) => {
        return !(node.classList && node.classList.contains("no-print"))
      },
    })

    const img = new Image()
    img.src = dataUrl
    await new Promise((resolve, reject) => {
      img.onload = resolve
      img.onerror = (err) => reject(new Error("Image decode failed: " + err))
    })

    // 4. Calculate A4 page dimensions & smart non-breaking block boundaries
    const pdf = new jsPDF({
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    })

    const pdfWidth = pdf.internal.pageSize.getWidth() // 210mm
    const pdfHeight = pdf.internal.pageSize.getHeight() // 297mm
    const margin = 6 // 6mm margin

    const renderWidth = pdfWidth - margin * 2 // 198mm
    const usablePageHeightMm = pdfHeight - margin * 2 // 285mm
    const pxToMm = renderWidth / containerRect.width

    // Map DOM element blocks to MM coordinates relative to container top
    const blocks = blockEls
      .map((el) => {
        const r = el.getBoundingClientRect()
        const top = (r.top - containerRect.top) * pxToMm
        const bottom = (r.bottom - containerRect.top) * pxToMm
        const height = r.height * pxToMm
        return { top, bottom, height }
      })
      .filter((b) => b.height > 5 && b.height < usablePageHeightMm)
      .sort((a, b) => a.top - b.top)

    const totalRenderHeightMm = (img.height * renderWidth) / img.width

    let currentY = 0
    let pageCount = 0

    while (currentY < totalRenderHeightMm - 2) {
      if (pageCount > 0) {
        pdf.addPage("a4", "portrait")
      }

      let targetY = currentY + usablePageHeightMm

      // If near the end of the document, capture remaining content
      if (targetY >= totalRenderHeightMm) {
        targetY = totalRenderHeightMm
      } else {
        // Check if any card, chart, or table-row block straddles the page break line
        const straddlingBlock = blocks.find(
          (b) => b.top < targetY - 2 && b.bottom > targetY + 2 && b.top > currentY + 15
        )

        if (straddlingBlock) {
          // Smart Break: Push page break line UP to top edge of straddling block
          targetY = straddlingBlock.top
        }
      }

      // Add image slice to PDF page
      pdf.addImage(
        dataUrl,
        "JPEG",
        margin,
        margin - currentY,
        renderWidth,
        totalRenderHeightMm,
        undefined,
        "FAST"
      )

      // -------------------------------------------------------------
      // FIX: Mask the overflown cut-off portion at the bottom of page
      // -------------------------------------------------------------
      const printedHeightOnThisPage = targetY - currentY
      const maskTopY = margin + printedHeightOnThisPage

      if (maskTopY < pdfHeight) {
        pdf.setFillColor(255, 255, 255)
        // Cover bottom area with white rectangle up to page boundary
        pdf.rect(0, maskTopY, pdfWidth, pdfHeight - maskTopY, "F")
      }

      currentY = targetY
      pageCount++
    }

    pdf.save("School_Report_2026.pdf")
  } catch (error) {
    console.error("PDF generation failed:", error)
    alert("PDF export failed: " + (error.message || error))
  } finally {
    if (setExportingState) setExportingState(false)
  }
}