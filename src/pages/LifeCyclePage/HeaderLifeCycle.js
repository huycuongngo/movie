import React, { memo } from "react";

function HeaderLifeCycle({ dataLike, handleOnlick = () => {} }) {
  console.log("Header render");
  return (
    <div className=" bg-blue-400 w-full p-10">
      HeaderLifeCycle
      <p> Datalike = {dataLike}</p>
      <button className="rounded bg-white px-5 py-2" onClick={handleOnlick}>
        Hanle plush like
      </button>
    </div>
  );
}

export default React.memo(HeaderLifeCycle);
// export default memo(HeaderLifeCycle);

// memo ~ PureComponent ~ shallow compare

// export default React.memo(() => {

// });
