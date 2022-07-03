import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import HeaderLifeCycle from "./HeaderLifeCycle";

export default function LifeCyclePage() {
  const [like, setLike] = useState(0);
  const [share, setShare] = useState(0);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  let inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    console.log("Render useEffect");
  }, []);

  useEffect(() => {
    console.log("Render useEffect - share");
  }, [share, like]);

  useEffect(() => {
    return () => {
      console.log("will unmount");
    };
  }, []);

  console.log("Re render");
  // useCallback => giải quyết function
  const handlePlusLike = useCallback(() => {
    setLike(like + 1);
  }, [like]);

  // useMemo(() => first, [second]);   => xử lý kết quả của 1 quá trình tính toán

  let totalNumbers = useMemo(() => {
    return numbers.reduce((number, total) => {
      return total + number;
    }, 0);
  }, []);

  return (
    <div className="text-center text-3xl">
      <HeaderLifeCycle handleOnlick={handlePlusLike} dataLike={like} />

      <input
        ref={inputRef}
        type="text"
        className=" border-red-400 border-2 my-10 rounded"
      />
      <p className="">
        Like - {like}{" "}
        <button
          className="bg-orange-400 text-white px-5 py-2 rounded"
          onClick={() => {
            setLike(like + 1);
          }}
        >
          Plus like
        </button>
      </p>

      <p className="mt-10">
        Share - {share}{" "}
        <button
          className="bg-green-400 text-white px-5 py-2 rounded"
          onClick={() => {
            setShare(share + 1);
          }}
        >
          Plus share
        </button>
      </p>

      <p className="text-red-600">totalNumbers -{totalNumbers}</p>
    </div>
  );
}
