import React,{ useState }  from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function FilterProductTable() {
  const [searchText, setSearchText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  return (
    <>
      <SearchBar searchText={searchText} 
      onSearchTextChange={setSearchText} 
      inStockOnly={inStockOnly}
      onInStockChange= {setInStockOnly}
      />
      <ProductTable products={PRODUCTS} searchText={searchText} inStockOnly={inStockOnly} />
    </>
  );
}
