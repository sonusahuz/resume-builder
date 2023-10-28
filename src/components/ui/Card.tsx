import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-5 flex-wrap">
      {children}
    </div>
  );
}
