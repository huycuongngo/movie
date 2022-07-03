import React from "react";
import { NavLink } from "react-router-dom";
import UserNav from "./UserNav";

export default function HeaderTemplate() {
  return (
    <div className="h-20 w-full shadow flex justify-between px-10 items-center">
      <NavLink to={"/"}>
        <span className="text-3xl font-medium text-red-500">Logo</span>
      </NavLink>

      <div className=" space-x-2 font-medium text-slate-600">
        <span>Lịch chiếu</span>
        <span>Cụm rạp</span>
        <span>Tin tức</span>
        <span>Ứng dụng</span>
      </div>
      <UserNav />
    </div>
  );
}
