import React from 'react';
import { FaFile } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data,refernce }) {
  return (
    <motion.div
      drag dragConstraints={refernce}
      className="relative w-60 h-72 rounded-[50px] bg-zinc-900 text-white px-[20px] py-[35px] overflow-hidden m-5 flex-shrink-0"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaFile />
      <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex text-center justify-between px-[18px] py-[3px] mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoMdCloseCircle /> : <LuDownload size=".7rem" color="#ffff" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h5 className='text-[16px] font-semibold'>{data.tag.tagTitle}</h5>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
