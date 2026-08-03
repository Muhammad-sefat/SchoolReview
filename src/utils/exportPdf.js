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

    const containerRect = container.getBoundingClientRect()

    // Select block elements
    const blockEls = Array.from(
      container.querySelectorAll(
        "h1, h2, h3, h4, h5, tr, .bg-\\[\\#F6F6F6\\], .bg-white, .card-container, section"
      )
    )

    // 3. Capture report image at 2x retina sharpness
    const pixelRatio = 2
    const dataUrl = await toJpeg(container, {
      quality: 0.95,
      pixelRatio: pixelRatio,
      backgroundColor: "#ffffff",
      cacheBust: false,
      filter: (node) => !(node.classList && node.classList.contains("no-print")),
    })

    const loadedImg = new Image()
    loadedImg.src = dataUrl
    await new Promise((resolve, reject) => {
      loadedImg.onload = resolve
      loadedImg.onerror = (err) => reject(new Error("Image decode failed: " + err))
    })

    // 4. PDF Setup
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

    // Calculate block coordinates in MM
    const blocks = blockEls
      .map((el) => {
        const r = el.getBoundingClientRect()
        const top = (r.top - containerRect.top) * pxToMm
        const bottom = (r.bottom - containerRect.top) * pxToMm
        const height = r.height * pxToMm
        const isHeading = /^H[1-5]$/i.test(el.tagName)
        return { top, bottom, height, isHeading }
      })
      .filter((b) => b.height > 1 && b.height < usablePageHeightMm)
      .sort((a, b) => a.top - b.top)

    const totalRenderHeightMm = (loadedImg.height * renderWidth) / loadedImg.width
    const mmToCanvasPx = loadedImg.height / totalRenderHeightMm

    let currentY = 0
    let pageCount = 0

    while (currentY < totalRenderHeightMm - 1) {
      if (pageCount > 0) {
        pdf.addPage("a4", "portrait")
      }

      let targetY = currentY + usablePageHeightMm

      if (targetY >= totalRenderHeightMm) {
        targetY = totalRenderHeightMm
      } else {
        // Smart Break with 3mm Safety Gap
        const straddlingBlock = blocks.find((b) => {
          const isSpanning = b.top < targetY && b.bottom > targetY
          const isTooClose = b.top < targetY && b.top > targetY - 15
          return (isSpanning || isTooClose) && b.top > currentY + 12
        })

        if (straddlingBlock) {
          // Push break point 3mm ABOVE the block start to avoid hitting text/borders
          const safeTop = straddlingBlock.top - 3
          targetY = Math.max(currentY + 10, safeTop)
        }
      }

      const sliceHeightMm = targetY - currentY

      // ================================================================
      // STRICT CROP: Crop image precisely to canvas
      // ================================================================
      const cropCanvas = document.createElement("canvas")
      cropCanvas.width = loadedImg.width
      cropCanvas.height = Math.round(sliceHeightMm * mmToCanvasPx)

      const ctx = cropCanvas.getContext("2d")

      ctx.fillStyle = "#ffffff"
      ctx.fillRect(0, 0, cropCanvas.width, cropCanvas.height)

      ctx.drawImage(
        loadedImg,
        0,
        Math.round(currentY * mmToCanvasPx),
        loadedImg.width,
        cropCanvas.height,
        0,
        0,
        cropCanvas.width,
        cropCanvas.height
      )

      const slicedImageDataUrl = cropCanvas.toDataURL("image/jpeg", 0.95)

      pdf.addImage(
        slicedImageDataUrl,
        "JPEG",
        margin,
        margin,
        renderWidth,
        sliceHeightMm,
        undefined,
        "FAST"
      )

      // ================================================================
      // MASKING FIX: Cover bottom margin completely to wipe off bleeds
      // ================================================================
      const currentPrintedY = margin + sliceHeightMm
      pdf.setFillColor(255, 255, 255)
      // Cover from cut line to bottom of page
      pdf.rect(0, currentPrintedY, pdfWidth, pdfHeight - currentPrintedY, "F")

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