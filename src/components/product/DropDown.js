import React, { useState } from "react";
import DeleteModal from "./DeleteModal";

function DropDown({ index, editProduct, productId }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="absolute right-0">
        <div className="shadow rounded bg-white  text-xs">
          <div
            className="hover:bg-gray-200 flex items-center justify-between px-2 py-1 cursor-pointer"
            onClick={() => setShowModal(!showModal)}
          >
            <i class="fa-solid fa-trash text-xs mr-4"></i>
            Delete
          </div>
          <div
            className="hover:bg-gray-200 flex items-center justify-between px-2 py-1 cursor-pointer"
            onClick={() => editProduct(index)}
          >
            <i class="fa-solid fa-pen-to-square mr-4 "></i>Edit
          </div>
        </div>
      </div>
      {showModal ? (
        <DeleteModal
          visible={showModal}
          setShowModal={setShowModal}
          productId={productId}
        />
      ) : null}
    </>
  );
}

export default DropDown;
