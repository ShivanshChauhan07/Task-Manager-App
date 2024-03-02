import React, { useRef } from "react";
import Card from "./Card";
import data from "../utils/data.js";

const Foreground = () => {
  const ref = useRef(null);
  return (
    <>
      <div
        ref={ref}
        className="fixed z-10 p-6 w-full h-full bg-transparent flex flex-shrink-0 gap-x-5  flex-wrap"
      >
        {data.map((item, index) => {
          return <Card key={index} reference={ref} {...item} />;
        })}
      </div>
    </>
  );
};

export default Foreground;
