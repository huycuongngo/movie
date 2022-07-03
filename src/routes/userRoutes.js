import { LayoutTheme } from "../HOC/layout/Layout";
import ChiTietPhimPage from "../pages/ChiTietPhimPage/ChiTietPhimPage";
import DangKiPage from "../pages/DangKiPage/DangKiPage";
import DangNhapPage from "../pages/DangNhapPage/DangNhapPage";
import LifeCyclePage from "../pages/LifeCyclePage/LIfeCyclePage";
import TrangChuPage from "../pages/TrangChuPage/TrangChuPage";

export const userRoutes = [
  {
    path: "/",
    component: <LayoutTheme Component={TrangChuPage} />,
    exact: true,
    isUseLayout: true,
  },
  {
    path: "/detail/:id",
    component: <LayoutTheme Component={ChiTietPhimPage} />,
    isUseLayout: true,
  },
  {
    path: "/login",
    component: DangNhapPage,
    // component: <LayoutTheme Component={DangNhapPage} />,

    // isUseLayout: true,
  },
  {
    path: "/register",
    component: DangKiPage,
  },
  {
    path: "/lifecyle",
    component: LifeCyclePage,
  },
];
