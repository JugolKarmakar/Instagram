import React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiFillDislike, AiOutlineDislike } from "react-icons/ai";

const PostCard = (props) => {
  const { id, name, location, photo } = props.post;
  const [love, setLove] = useState(false);
  const [dislike, setDislike] = useState(false);

  const handelReactChange = () => {
    setLove(!love);
  };

  const handelDislikeChange = () => {
    setDislike(!dislike);
  };

  return (
    <div className="my-5 rounded-xl overflow-hidden max-w-lg mx-auto border border-gray-800">
      {/* card header */}
      <div className="flex items-center bg-black px-3 py-2">
        <div className="w-10 h-10 overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-full"
            src={photo}
            alt=""
          />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-white">{name}</h3>
          <p className="text-white font-medium text-sm">{location}</p>
        </div>
      </div>
      {/* card image */}
      <div className="w-full h-full">
        <img className="w-full h-full object-cover" src={photo} alt="" />
      </div>
      {/* card body */}
      <div>
        <button onClick={handelReactChange} className="mx-3">
          {!love ? (
            <FaRegHeart className="text-white text-3xl hover:text-gray-400 transition-all duration-100" />
          ) : (
            <FaHeart
              className={`${
                love === true ? "text-red-600 text-3xl" : "text-white"
              }`}
            />
          )}
        </button>
        <button onClick={handelDislikeChange}>
          {!dislike ? (
            <AiOutlineDislike className="text-white text-3xl hover:text-gray-400 transition-all duration-100" />
          ) : (
            <AiFillDislike
              className={`${
                dislike === true ? "text-red-600 text-3xl" : "text-white"
              }`}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
