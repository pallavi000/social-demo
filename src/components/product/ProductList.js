import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addLike, removeLike } from "../../features/product/ProductSlice";
import AddComment from "../comment/AddComment";
import DropDown from "./DropDown";

function ProductList({ item, editProduct, index, currentUser }) {
  const dispatch = useDispatch();
  const [like, setLike] = useState(0);
  const [showcomment, setShowComment] = useState(false);
  const [showDroupDown, setShowDropDown] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  function submitLike(id) {
    if (isLiked) {
      dispatch(removeLike(id));
    } else {
      dispatch(addLike(id));
    }
    setIsLiked(!isLiked);
  }

  return (
    <>
      <div className="border border-gray-200 shadow-sm rounded rounded-xl h-fit w-1/2 mb-5">
        <div className="bg-white flex justify-between items-center p-2 pb-0 rounded rounded-xl">
          <div className="flex items-center">
            <div className="border rounded-full">
              <img
                className="h-10 border rounded-full h-10 w-10 "
                src={item.user?.image}
              />
            </div>
            <div className="flex flex-col ml-2">
              <div className="font-semibold">{item.user?.name}</div>

              <div className="text-xs ">{item.user?.address}</div>
            </div>
          </div>
          <div className="relative">
            <div
              className="font-bold cursor-pointer"
              onClick={() => setShowDropDown(!showDroupDown)}
            >
              ...
            </div>
            {showDroupDown ? (
              <DropDown
                index={index}
                editProduct={editProduct}
                productId={item.id}
              />
            ) : null}
          </div>
        </div>
        <div className="px-4 text-sm text-gray-900 mb-2 mt-2 capitalize">
          {item.detail}
        </div>
        <div className="h-96">
          <img className="h-96 object-cover w-full" src={item.image} />
        </div>
        <div className="flex justify-between items-center h-fit pt-2 px-4">
          <div className="flex items-center">
            <div className="" onClick={() => submitLike(item.id)}>
              {isLiked ? (
                <i class="fa-solid fa-heart text-red-600 text-2xl mr-2 cursor-pointer"></i>
              ) : (
                <i class="fa-regular fa-heart text-2xl mr-2 cursor-pointer "></i>
              )}
            </div>
            <div className="" onClick={() => setShowComment(!showcomment)}>
              <i class="fa-regular fa-comment text-lg text-2xl mr-2  cursor-pointer"></i>
            </div>

            <div className="">
              <i class="fa-regular fa-paper-plane text-lg text-2xl mr-2  cursor-pointer"></i>
            </div>
          </div>
          <div>
            <i class="fa-regular fa-bookmark text-lg text-2xl  cursor-pointer "></i>
          </div>
        </div>
        <div className="px-4 my-2">
          {isLiked && (
            <div className="text-sm font-sans text-gray-700 ">
              Liked by {item.like} people.
            </div>
          )}
        </div>
        {showcomment && (
          <AddComment
            user={currentUser}
            showcomment={showcomment}
            setShowComment={setShowComment}
            productId={item.id}
          />
        )}
      </div>
    </>
  );
}

export default ProductList;
