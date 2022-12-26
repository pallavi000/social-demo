import React from "react";

function ShowComment({ comments }) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <>
            <div className="flex items-center ">
              <div className="border rounded-full  h-5 w-5 ">
                <img
                  className=" border rounded-full h-5 w-5 "
                  src={comment.user?.image}
                />
              </div>
              <div className="text-xs ml-2 capitalize">{comment.detail}</div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ShowComment;
