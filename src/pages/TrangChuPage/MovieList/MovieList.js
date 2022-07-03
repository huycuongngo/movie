import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";

export default function MovieList({ movieList }) {
  return (
    <div className="grid grid-cols-4 gap-10">
      {movieList.map((item, index) => {
        console.log("item: ", item);
        return (
          <div key={index}>
            <Card
              className="shadow-lg rounded"
              hoverable
              style={{
                width: "100%",
              }}
              cover={
                <img
                  alt="example"
                  className="w-full h-64 object-cover"
                  src={item.hinhAnh}
                />
              }
            >
              <Meta
                title={<span className="text-red-500">{item.tenPhim}</span>}
                description={
                  <span className="text-blue-500">
                    {moment(item.ngayKhoiChieu).format("DD/MM/YYYY")}
                  </span>
                }
              />
              <NavLink
                to={{
                  pathname: `/detail/${item.maPhim}`,
                  detailProps: item,
                }}
              >
                <button className="bg-red-600 text-white w-full transition h-10 mt-5 rounded hover:shadow-xl">
                  Xem chi tiết
                </button>
              </NavLink>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
// {
//     "maPhim": 9055,
//     "tenPhim": "Digimon",
//     "biDanh": "digimon",
//     "trailer": "https://www.youtube.com/watch?v=LYqPCDhadY0",
//     "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/digimon_gp01.jpg",
//     "moTa": "Với sức mạnh thức tỉnh từ Trái Ác Quỷ Zoan Thần Thoại Nika, Luffy đấm Kaido không trượt phát nào! Ai đó cứu Kaido nhanh lên chứ không Luffy sẽ chiến thắng trong vài chap nữa thôi!",
//     "maNhom": "GP01",
//     "ngayKhoiChieu": "2022-05-14T00:00:00",
//     "danhGia": 9,
//     "hot": true,
//     "dangChieu": true,
//     "sapChieu": false
// }
