import React from "react";
import { Users, Check } from "lucide-react";

// Table 1: Parents & Students Data (Blue theme)
const table1Columns = [
  {
    header: "Learning",
    items: [
      "Learning Support",
      "Individual Support",
      "Homework Load",
      "Future Readiness",
    ],
  },
  {
    header: "Wellbeing",
    items: ["Safety", "Student Wellbeing", "", ""],
  },
  {
    header: "Teaching",
    items: [
      "Teaching Quality",
      "School Communication",
      "Leadership",
      "Classroom Management",
    ],
  },
  {
    header: "Community",
    items: ["Fairness", "Inclusion", "Voice", ""],
  },
  {
    header: "Facilities",
    items: ["Activities", "Facilities", "Value for Money (Private only)", ""],
  },
];

// Table 2: Teachers Data (Grey theme)
const table2Columns = [
  {
    header: "Wellbeing",
    items: ["Workload", "Staff Wellbeing", "Safety", "Staff Wellbeing"],
  },
  {
    header: "Leadership",
    items: ["Leadership", "Voice", "Voice", "Voice"],
  },
  {
    header: "Culture",
    items: [
      "Team Culture",
      "Fairness & Inclusion",
      "Teaching Quality",
      "Teaching Quality",
    ],
  },
  {
    header: "Resources & Growth",
    items: ["Resources", "Professional Growth", "Compensation", "Facilities"],
  },
];

// Helper to zip columns into rows for grid-table rendering
const getRowsFromColumns = (columns) => {
  const rowCount = 4;
  const rows = [];
  for (let r = 0; r < rowCount; r++) {
    const row = [];
    columns.forEach((col) => {
      row.push(col.items[r] || "");
    });
    rows.push(row);
  }
  return rows;
};

function MeasureMatters() {
  const table1Rows = getRowsFromColumns(table1Columns);
  const table2Rows = getRowsFromColumns(table2Columns);

  return (
    <section className="relative w-full bg-[#FAFAFA] py-16 lg:py-24 overflow-hidden font-urbanist select-none">
      <div className="section-padding-x w-full flex flex-col">
        {/* Header Title Section */}
        <div className="flex flex-col gap-2 mb-8 lg:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-textPrimary leading-tight">
            Measure What Matters
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-textSecondary max-w-[720px] leading-relaxed font-medium">
            These insights help you understand how your community experiences
            your school.
          </p>
        </div>

        {/* Legend Row containing filters and alignment key */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 w-full pb-6">
          {/* Left Legend: Target Audiences */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-8">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-secondary">
                Parents & Students Questions
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-200 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-secondary">
                Teachers Questions
              </span>
            </div>
          </div>

          {/* Right Legend: Alignment Checks */}
          <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Checks Alignment
            </span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-[9px] text-white font-bold">
                  ✕
                </span>
                <span className="text-xs font-semibold text-secondary">
                  Misaligned
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center text-[9px] text-white font-bold">
                  !
                </span>
                <span className="text-xs font-semibold text-secondary">
                  Partially Aligned
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[9px] text-white font-bold">
                  ✓
                </span>
                <span className="text-xs font-semibold text-secondary">
                  Aligned
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TABLE 1: Parents & Students Questions (Blue Theme) */}
        {/* ========================================================================= */}

        {/* Desktop Grid Layout */}
        <div className="hidden md:block w-full border border-gray-200/80 rounded-xl overflow-hidden shadow-2xs bg-white mb-10 lg:mb-12">
          {/* Header Row */}
          <div className="grid grid-cols-5 bg-primary divide-x divide-white/10 select-none">
            {table1Columns.map((col, index) => (
              <div
                key={index}
                className="py-4 px-6 text-sm sm:text-base font-semibold text-white text-center leading-tight"
              >
                {col.header}
              </div>
            ))}
          </div>

          {/* Body Rows */}
          <div className="divide-y divide-gray-100">
            {table1Rows.map((row, rIdx) => (
              <div
                key={rIdx}
                className="grid grid-cols-5 bg-white divide-x divide-gray-100 hover:bg-gray-50/50 transition-colors"
              >
                {row.map((cell, cIdx) => (
                  <div
                    key={cIdx}
                    className="px-6 py-4.5 text-xs sm:text-sm font-semibold text-secondary min-h-[58px]"
                  >
                    {cell === "Value for Money (Private only)" ? (
                      <>
                        Value for Money{" "}
                        <span className="text-[10px] text-gray-400 font-medium block lg:inline lg:ml-1">
                          (Private only)
                        </span>
                      </>
                    ) : (
                      cell
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mb-10 lg:mb-12">
          {table1Columns.map((col, idx) => (
            <div
              key={idx}
              className="border border-gray-150 rounded-2xl overflow-hidden shadow-2xs bg-white"
            >
              <div className="bg-primary px-4 py-3 text-sm font-bold text-white flex items-center justify-between">
                <span>{col.header}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <div className="p-4.5 flex flex-col gap-3">
                {col.items.filter(Boolean).map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="text-xs font-semibold text-secondary flex items-start gap-2 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>
                      {item === "Value for Money (Private only)" ? (
                        <>
                          Value for Money{" "}
                          <span className="text-[10px] text-gray-400 font-medium block">
                            (Private only)
                          </span>
                        </>
                      ) : (
                        item
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* TABLE 2: Teachers Questions (Grey Theme) */}
        {/* ========================================================================= */}

        {/* Desktop Grid Layout */}
        <div className="hidden md:block w-full border border-gray-200/80 rounded-xl overflow-hidden shadow-2xs bg-white">
          {/* Header Row */}
          <div className="grid grid-cols-4 bg-[#BDC2C9] divide-x divide-white/10 select-none">
            {table2Columns.map((col, index) => (
              <div
                key={index}
                className="py-4 px-6 text-sm sm:text-base font-semibold text-secondary text-center leading-tight"
              >
                {col.header}
              </div>
            ))}
          </div>

          {/* Body Rows */}
          <div className="divide-y divide-gray-100">
            {table2Rows.map((row, rIdx) => (
              <div
                key={rIdx}
                className="grid grid-cols-4 bg-white divide-x divide-gray-100 hover:bg-gray-50/50 transition-colors"
              >
                {row.map((cell, cIdx) => (
                  <div
                    key={cIdx}
                    className="px-6 py-4.5 text-xs sm:text-sm font-semibold text-secondary min-h-[58px]"
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {table2Columns.map((col, idx) => (
            <div
              key={idx}
              className="border border-gray-150 rounded-2xl overflow-hidden shadow-2xs bg-white"
            >
              <div className="bg-[#A3AED0] px-4 py-3 text-sm font-bold text-white flex items-center justify-between">
                <span>{col.header}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <div className="p-4.5 flex flex-col gap-3">
                {col.items.filter(Boolean).map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="text-xs font-semibold text-secondary flex items-start gap-2 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A3AED0] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeasureMatters;
