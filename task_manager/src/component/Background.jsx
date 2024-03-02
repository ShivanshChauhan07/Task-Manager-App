import React from "react";

const Background = () => {
  return (
    <>
      <section className="absolute  w-full h-full z-0">
        <div className="w-full py-10 mt-5 text-center text-zinc-500 text-3xl font-semibold">
          {" "}
          <p>Documents</p>
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-center text-5xl leading-none tracking-wider text-zinc-200">
          Task Manager App
        </h1>
      </section>
    </>
  );
};

export default Background;
