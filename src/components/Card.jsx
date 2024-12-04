import React from "react";
import { Link } from "react-router-dom";

const Card = ({ link, title }) => {
  return (
    <Link
      to={link}
      className="w-[300px] h-[300px] md: lg:w-[300px] lg:h-[300px] flex items-center justify-center rounded-lg shadow-xl transition-all ease-in-out duration-200 hover:shadow-2xl hover:cursor-pointer"
    >
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 px-10">
        {title}
      </h2>
    </Link>
  );
};

export default Card;
