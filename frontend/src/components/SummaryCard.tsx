import React from "react";
type SummaryCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

export function SummaryCard({
  icon,
  title,
  value,
}: SummaryCardProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-4 transition-all duration-200 hover:border-purple-500/40 hover:bg-slate-800">

      <div className="flex items-center gap-3 mb-2">

        <div className="text-purple-400">
          {icon}
        </div>

        <span className="text-sm text-slate-400">
          {title}
        </span>

      </div>

      <p className="text-white font-semibold text-lg">
        {value}
      </p>

    </div>
  );
}