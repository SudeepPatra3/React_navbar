import React, { useState } from "react";
import Sresult from "./Sresult";

function Search() {
  const [img, setImg] = useState("");
  const inputevent = (event) => {
    const data = event.target.value;
    setImg(data);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search Anything"
        onChange={inputevent}
        value={img}
      ></input>
      {img === "" ? null : <Sresult name={img} />}
    </>
  );
}
export default Search;
