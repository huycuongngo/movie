import React from "react";
import HeaderTemplate from "../../components/HeaderTemplate/HeaderTemplate";

export function LayoutTheme({ Component }) {
  return (
    <div>
      <HeaderTemplate />
      <div className="py-10">
        <Component />
      </div>
      <div className="h-20 bg-slate-400">Footer</div>
    </div>
  );
}
