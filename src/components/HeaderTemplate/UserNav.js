import React from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { localStoreService } from "../../service/localStoreService";

export default function UserNav() {
  let userInfor = useSelector((state) => {
    return state.userReducer.userInfor;
  });
  console.log("userInfor: ", userInfor);

  let handleLogout = useCallback(() => {
    // xoá dữ liệu user trong localstorage

    localStoreService.removeUserLocal();
    window.location.href = "/login";
  }, []);
  return (
    <div>
      {userInfor ? (
        <div className="space-x-5">
          <span>{userInfor.hoTen}</span>
          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded border-2 border-red-400 shadow-orange-400 text-red-400"
          >
            Đăng xuất
          </button>
        </div>
      ) : (
        <div className="space-x-5">
          <NavLink to="/login">
            <button className="px-5 py-2 rounded border-2 border-gray-700 shadow-orange-400 text-gray-700">
              Đăng nhập
            </button>
          </NavLink>
          <button className="px-5 py-2 rounded  bg-red-600 text-white shadow-orange-400">
            Đăng kí
          </button>
        </div>
      )}
    </div>
  );
}
