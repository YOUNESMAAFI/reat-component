import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ProductTable from "./ProductTable";

let products = [
  { name: "T-shirt", price: 1500, category: "Clothing", quantity: "15" },
  { name: "Sweat-shirt", price: 2500, category: "Clothing ", quantity: "15" },
  { name: "Jean", price: 3500, category: "Clothing", quantity: "15" },
  { name: "Jacket", price: 4000, category: "Clothing", quantity: "15" },
  { name: "Boots", price: 5000, category: "Clothing", quantity: "15" },
  { name: "Mi Band", price: 3700, category: "Electronics", quantity: "15" },
  {
    name: "Glaxy Note 20",
    price: 199999,
    category: "Electronics",
    quantity: "15",
  },
  { name: "Ear Buds", price: 15000, category: "Electronics", quantity: "15" },
];
// let essai = { name: "T-shirt", price: 1500, category: "Clothing" };

function App() {
  return (
    <div className="App">
      <h1>Stock Mangment</h1>
      <img></img>
      <ProductTable products={products}></ProductTable>
    </div>
  );
}

export default App;
