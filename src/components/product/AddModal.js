import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, handleChange } from "../../features/product/ProductSlice";

function AddModal({ visible, onClose, user, productIndex, setShowModal }) {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const [singleProduct, setSingleproduct] = useState({});

  const handleOnClose = () => {
    onClose();
  };
  const { detail, image } = useSelector((state) => state.product);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Math.random(),
      detail: detail,
      image: image,
      user: user,
      like: 0,
    };
    dispatch(addProduct(data));
    setShowModal(false);
  };

  function setImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader);
      dispatch(handleChange({ name: "image", value: reader.result }));
    };
  }

  if (!visible) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        onClick={handleOnClose}
      ></div>
      <div className="flex mx-auto my-auto justify-center items-center self-center fixed inset-0  w-1/3 h-fit">
        <div className="bg-white  border rounded rounded-xl w-full h-fit">
          <div className="text-center items-center justify-center border-b border-b-gray-200 py-3 ">
            <div className="text-xl font-semibold  inline-block">
              Create Post
            </div>
            <div
              className="float-right inline-block mr-4 cursor-pointer"
              onClick={handleOnClose}
            >
              <i class="fa-solid fa-xmark text-2xl text-right"></i>
            </div>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex items-center my-2 px-2">
              <div className="border rounded-full">
                <img
                  className="h-10 border rounded-full h-12 w-12 "
                  src="https://www.shutterstock.com/image-photo/barcelona-feb-23-lionel-messi-600w-1900547713.jpg"
                />
              </div>
              <div className="flex flex-col ml-2">
                <div className="font-bold">Leomessi</div>
                <div className="text-xs ">Lusail Stadium</div>
              </div>
            </div>

            <input
              name="detail"
              autoFocus={true}
              onChange={(e) =>
                dispatch(
                  handleChange({ name: e.target.name, value: e.target.value })
                )
              }
              placeholder="Whats'on your mind,Ells?"
              className="text-xl font-semibold px-2 h-28 w-full p-2 focus:outline-none "
            ></input>

            <div className="flex justify-between items-center border rounded rounded-xl border-gray-200 p-3 m-4">
              <div className="text-sm font-medium">Add to your post</div>
              <div className="flex relative cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  id="image"
                  name="image"
                  onChange={(e) => setImage(e)}
                />
                <label for="image" className="cursor-pointer">
                  <i class="fa-solid fa-photo-film"></i>
                </label>
              </div>
            </div>
            <div className="my-8 mx-4">
              <button className="border rounded-lg border-gray-600 text-white p-1 text-center bg-gray-600 w-full text-xl font-semibold ">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddModal;
