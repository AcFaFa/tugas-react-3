import React from "react";
import CardsProducts from "./CardsProducts";

const Dashboards = () => {
  const Products = [
    {
      id: 1,
      productName: "Sneakers Converse CTAS",
      productPrice: "Rp. 599.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/2/02-CONVERSE-FFSSBCONA-CONA03576C-Yellow.jpg",
    },
    {
      id: 2,
      productName: "Converse Run Star Motion Canvas",
      productPrice: "Rp. 1.799.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/C/O/CON171546C-1.jpg",
    },
    {
      id: 3,
      productName: "Converse CTAS Construct Colorblock",
      productPrice: "Rp. 1.599.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA03472C-Grey.jpg",
    },
    {
      id: 4,
      productName: "Converse Chuck Taylor All Star",
      productPrice: "Rp. 899.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCON0-CON135251C-Black.jpg",
    },
    {
      id: 5,
      productName: "Converse Unisex Chuck 70 Plus",
      productPrice: "Rp. 1.599.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA02871C-Brown.jpg",
    },
  ];
  return (
    <div>
      {
        //List Rendering
        Products.map((value, index) => {
          return (
            <div
              style={{
                height: 300,
                width: 400,
                backgroundColor: "green",
                borderRadius: 4,
                padding: 15,
                color: "white",
                marginBottom: 5,
                grid: "repeat(3,1fr)",
              }}
              onClick={() => {
                return alert(
                  "Barang " +
                    value.productName +
                    " hargana " +
                    value.productPrice +
                    " terlalu mahal jang dibeli!!"
                );
              }}
            >
              <CardsProducts
                key={index}
                image={value.urlImage}
                namaProduk={value.productName}
                hargaProduk={value.productPrice}
              />
            </div>
          );
        })
      }
    </div>
  );
};

export default Dashboards;
