"use client";

import { CheckCircle, Clock, AlertCircle } from "lucide-react";

const notifications = [
  {
    title: "Nike Shoes campaign generated successfully",
    time: "2 min ago",
    type: "success",
  },
  {
    title: "Summer Sale campaign is processing",
    time: "10 min ago",
    type: "processing",
  },
  {
    title: "Protein Shake generation failed",
    time: "Yesterday",
    type: "error",
  },
];

export default function NotificationDropdown() {
  return (
    <div className="absolute right-0 mt-3 w-96 rounded-xl border border-slate-700 bg-slate-900 shadow-xl z-50">

      <div className="border-b border-slate-700 p-4">
        <h2 className="font-semibold text-white">
          Notifications
        </h2>
      </div>

      {notifications.map((item, index) => (
        <div
          key={index}
          className="flex gap-3 border-b border-slate-800 p-4 hover:bg-slate-800"
        >
          {item.type === "success" && (
            <CheckCircle className="text-green-500" size={20} />
          )}

          {item.type === "processing" && (
            <Clock className="text-yellow-500" size={20} />
          )}

          {item.type === "error" && (
            <AlertCircle className="text-red-500" size={20} />
          )}

          <div>
            <p className="text-sm text-white">{item.title}</p>
            <p className="text-xs text-slate-400">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}