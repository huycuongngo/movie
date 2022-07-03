import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieService } from "../../service/movieService";
import { Progress } from 'antd';


export default function ChiTietPhimPage(props) {
  // ...
  let id = useParams();
  console.log("id", id);
  const [movie, setMovie] = useState({});


  useEffect(() => {
    // ...  
    let fetchMovie = async () => {
      // ...
      let result = await movieService.getDetailMovie(id);
      console.log("result", result);
      setMovie(result.data.content);
      // return()
    }
    fetchMovie();
    // return()
  }, [])


  return (
    <div className="p-10 flex">
      <img src={movie.hinhAnh} className="w-40" alt="" />
      <p>{movie.tenPhim}</p>
      <p>{movie.moTa}</p>
      <Progress type="circle" percent={movie.danhGia * 10}
        format={(number) => {
          return <span className="text-gree-500">{number / 10}</span>
        }
        }
      />
    </div>
  )
}



