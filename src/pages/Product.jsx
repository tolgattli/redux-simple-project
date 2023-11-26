import React from "react";
import ProductCart from "../components/ProductCart";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  console.log("sada", modal);

  const buttonFunc = () => {};

  return (
    <div>
      <ProductCart />
      {modal && (
        <Modal
          title={"Ürün oluştur"}
          content={"Context"}
          btnFunc={buttonFunc}
          btnText={"Oluştur"}
        />
      )}
    </div>
  );
};

export default Product;
