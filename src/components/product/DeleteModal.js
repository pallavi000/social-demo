import React from "react";
import { useDispatch } from "react-redux";
import { removeProductById } from "../../features/product/ProductSlice";

function DeleteModal({ visible, setShowModal, productId }) {
  const dispatch = useDispatch();
  console.log("set", setShowModal);

  const handleOnClose = () => {
    dispatch(removeProductById(productId));
    setShowModal(false);
  };
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        onClick={() => setShowModal(false)}
      ></div>
      <div className="flex mx-auto my-auto justify-center items-center self-center fixed inset-0  w-1/3 h-fit">
        <div className="bg-white  border rounded rounded-xl w-full h-fit px-4 py-6">
          <form>
            <div className="text-lg mb-4">
              Do you want to Delete this product?
            </div>
            <div className="flex gap-4 justify-end items-center">
              <button
                onClick={() => handleOnClose()}
                className="border rounded-md shadow-md py-2 px-3 text-sm"
                type="button"
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className=" border rounded-md shadow-md p-2 text-sm"
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
