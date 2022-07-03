import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { localStoreService } from "../../service/localStoreService";
import FormDangNhap from "./FormDangNhap/FormDangNhap";

import Lottie from "lottie-react";
import bgAnimate from "../../assets/bg-login.json";

export default function DangNhapPage() {
  let history = useHistory();
  useEffect(() => {
    if (localStoreService.getUserLocal()) {
      history.push("/");
    }
  }, []);
  return (
    <div className="container flex p-10 h-screen">
      <div className="w-1/2 h-full">
        <Lottie animationData={bgAnimate} loop={true} />;
      </div>
      <div className="w-1/2 h-full flex items-center">
        <FormDangNhap />
      </div>
    </div>
  );
}
