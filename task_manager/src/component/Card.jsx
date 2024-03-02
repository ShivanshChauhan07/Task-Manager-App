import React from "react";
import { motion } from "framer-motion";

const Card = (data) => {
  const {
    desc,
    filesize,
    close,
    tag: { isOpen, tagTitle, tagColor },
    reference,
  } = data;

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.05}
      className="flex flex-col justify-between w-60 h-72 bg-zinc-700/80 rounded-xl overflow-hidden text-white"
    >
      <div className="flex flex-col justify-around min-h-40 max-h-48">
        <header className="text-white text-center ">
          <i className="fa-regular fa-file-lines text-2xl mt-5"></i>
        </header>
        <article className=" mx-3 p-2 overflow-hidden text-ellipsis break-words">
          <p className="leading-tight  ">{desc}</p>
        </article>
      </div>
      <div className="flex justify-between px-3 mb-2">
        <p>{filesize}</p>
        <span>
          {!close ? (
            <i className="fa-solid fa-cloud-arrow-down text-zinc-300"></i>
          ) : (
            <i className="fa-solid fa-circle-xmark text-zinc-300"></i>
          )}
        </span>
      </div>
      {isOpen && (
        <footer
          className={
            tagColor === "green"
              ? `bg-green-500 h-12 text-center `
              : "bg-sky-500 h-12 text-center "
          }
        >
          <h5 className="mt-2 font-semibold text-lg">{tagTitle}</h5>
        </footer>
      )}
    </motion.div>
  );
};

export default Card;
