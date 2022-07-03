import { Tabs } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { movieService } from "../../../service/movieService";
import moment from "moment";

let { TabPane } = Tabs;
export function MovieTab() {

  // du lieu chua xu ly
  const [dataRaw, setDataRaw] = useState([]);


  useEffect(() => {
    // ...
    movieService
      .getMoviesByTheaters()
      .then((res) => {
        console.log(res);

        setDataRaw(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
    // return()
  }, [])

  const onChange = (key) => {
    console.log(key);
  };

  let renderContent = () => {
    // ...


    return dataRaw.map((heThongRap, index) => {
      // ...


      return (
        <TabPane key={index} tab={<img className="w-10 h-10" src={heThongRap.logo} />}>
          <Tabs style={{ height: 500 }} tabPosition="left" defaultActiveKey="1">
            {
              heThongRap.lstCumRap.map((cumRap, index) => {
                // ...

                return (
                  <TabPane
                    style={{ height: 500 }}
                    tab=
                    {<div className="w-40 whitespace-normal text-left">
                      <p>{cumRap.tenCumRap}</p>
                      <p>{cumRap.diaChi}</p>
                    </div>}
                    key={index}>
                    <div style={{ height: 500, overflowY: "scroll" }} className="space-y-5">
                      {
                        cumRap.danhSachPhim.map((phim) => {
                          // ...

                          return (
                            <div className="border-gray-400 border-b-4 p-3">
                              <p>{phim.tenPhim}</p>
                              <div className="grid grid-cols-3 gap-5">
                                {
                                  phim.lstLichChieuTheoPhim.map((item, index) => {
                                    // ...
                                    if (index < 6)

                                      return (
                                        <span className="w-40 whitespace-normal px-5 py-2 bg-red-500 text-white rounded font-medium"
                                        >{moment(item.ngayChieuGioChieu).format("DD/MM/YYYY - HH:mm")}</span>
                                      )
                                  })
                                }
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </TabPane>
                )
              })
            }
          </Tabs>
        </TabPane>
      )
    })


  }

  return (
    <div>
      <Tabs tabPosition="left" defaultActiveKey="1" onChange={onChange}>
        {/* <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane> */}
        {renderContent()}
      </Tabs>
    </div>
  );
}
