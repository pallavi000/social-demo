import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddComment from "../../components/comment/AddComment";
import AddModal from "../../components/product/AddModal";
import EditModal from "../../components/product/EditModal";
import ProductList from "../../components/product/ProductList";
import { addComment } from "../../features/comment/CommentSlice";
import { addLike } from "../../features/product/ProductSlice";

function Product() {
  const dispatch = useDispatch();
  const { like, product } = useSelector((state) => state.product);
  const [likeCount, setLikeCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [productIndex, setProductIndex] = useState(null);

  const { currentUser } = useSelector((state) => state.user);

  const handleClose = () => setShowModal(false);
  const handleEditClose = () => setShowEditModal(false);

  function editProduct(index) {
    setShowEditModal(true);
    setProductIndex(index);
  }

  useEffect(() => {
    console.log("rendering");
  }, []);

  return (
    <div className="h-fit">
      <div className="flex flex-col justify-center items-center mt-5">
        <div className=" border border-gray-200 shadow-sm rounded rounded-xl h-fit w-1/2 mb-5 p-2 pt-4">
          <div className="flex items-center w-full gap-4">
            <div className="border rounded-full">
              <img
                className="h-10 border rounded-full h-10 w-10 "
                src={currentUser.image}
              />
            </div>
            <div
              className="flex growrounded-full grow w-full"
              onClick={() => setShowModal(true)}
            >
              <input
                className="grow rounded-full  py-2 px-6 w-full shadow bg-slate-100 cursor-pointer sm:text-sm"
                placeholder="What's on your mind Ell?"
                disabled={true}
              ></input>
            </div>
          </div>
          <div className="flex py-2  px-8 sm:px-2 mt-2 justify-between items-center sm:gap-1">
            <div className="flex items-center gap-1  font-medium font-sans sm:text-sm">
              <i class="fa-solid fa-video"></i>Live Video
            </div>
            <div
              className="flex items-center gap-1  font-medium font-sans sm:text-sm cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <i class="fa-solid fa-photo-film"></i>Photo/video
            </div>
            <div className="flex items-center gap-1  font-medium font-sans sm:text-sm">
              <i class="fa-regular fa-face-smile"></i>Feeling/activity
            </div>
          </div>
        </div>

        {product.map((item, index) => {
          return (
            <ProductList
              item={item}
              editProduct={editProduct}
              index={index}
              currentUser={currentUser}
            />
          );
        })}
      </div>

      <AddModal
        onClose={handleClose}
        visible={showModal}
        user={currentUser}
        productIndex={productIndex}
        setShowModal={setShowModal}
      />
      <EditModal
        onClose={handleEditClose}
        visible={showEditModal}
        user={currentUser}
        productIndex={productIndex}
        setShowEditModal={setShowEditModal}
      />
    </div>
  );
}

export default Product;
