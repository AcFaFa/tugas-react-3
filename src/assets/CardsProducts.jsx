import React from "react";

const CardsProducts = (props) => {
  function testes() {
    alert(
      `Produk ${props.productName} dengan harga ${props.productPrice} adalah produk kualitas terbaik`
    );
  }
  return (
    <div
      //ini style css buat produck nya yaaa...
      style={{
        height: 300,
        width: 400,
        backgroundColor: "aqua",
        borderRadius: 4,
        padding: 10,
        color: "red",
        marginBottom: 5,
        // grid: "repeat(3,1fr)",
      }}
    >
      <img
        src={props.image}
        alt="photos"
        style={{ width: 370, height: 170, padding: 10 }}
      />
      <h2>{props.namaProduk}</h2>
      <p>{props.hargaProduk}</p>
    </div>
  );
};

export default CardsProducts;
