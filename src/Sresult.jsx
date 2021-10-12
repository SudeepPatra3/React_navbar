import React from "react";

function Sresult(props) {
  const img = `https://source.unsplash.com/400x400/?${props.img}`;
  return (
    <div>
      <img src={img} />
    </div>
  );
}
export default Sresult;
