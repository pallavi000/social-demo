import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, handleChange } from "../../features/comment/CommentSlice";
import ShowComment from "./ShowComment";

function AddComment({ user, showComment, setShowComment, productId }) {
  const dispatch = useDispatch();
  const { detail, comments } = useSelector((state) => state.comment);
  const [allComments, setAllComments] = useState([]);
  const formRef = useRef();

  function submitComment(e) {
    e.preventDefault();
    const data = {
      detail,
      user,
      productId,
    };
    dispatch(addComment(data));
    formRef.current.reset();
  }

  useEffect(() => {
    if (comments && comments.length) {
      let newComments = comments.filter(
        (comment) => comment.productId == productId
      );
      setAllComments(newComments);
    }
  }, [comments]);

  return (
    <div className="px-4">
      <form
        ref={formRef}
        className="flex justify-between items-center"
        onSubmit={(e) => submitComment(e)}
      >
        <div className="border rounded-full  h-8 w-8 ">
          <img className=" border rounded-full h-8 w-8 " src={user.image} />
        </div>
        <input
          className="ml-2 rounded-full rounded outline-none px-4 w-full  shadow  text-xs py-1 bg-slate-100 "
          name="detail"
          onChange={(e) => dispatch(handleChange(e.target))}
          placeholder="Write a comment.."
        ></input>
      </form>
      <div className="mt-3">
        <ShowComment comments={allComments} />
      </div>
    </div>
  );
}

export default AddComment;
