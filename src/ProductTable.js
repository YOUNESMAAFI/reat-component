import React from "react";

function ProductTable(props) {
  //   let essai = { name: "T-shirt", price: 1500, category: "Clothing" };
  return (
    <div className="Product">
      <table>
        <tr>
          <td className="Thead">Product</td>
          <td className="Thead">Price</td>
          <td className="Thead">Category</td>
          <td className="Thead">Quantity</td>
        </tr>
        {props.products.map((product) => (
          <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.quantity}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ProductTable;
