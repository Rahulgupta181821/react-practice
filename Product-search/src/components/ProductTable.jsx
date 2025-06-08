import React from 'react';
import ProductCategory from './ProductCategory';
import ProductRow from './ProductRow';

export default function ProductTable({products,searchText,inStockOnly}){
  const filterProduct = products.filter((product) => {
  const matchSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
  const matchStock = !inStockOnly || product.stocked
  return matchSearch && matchStock;
  })
    // Group products by category
  const grouped = filterProduct.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const rows = [];
  Object.keys(grouped).forEach((category) => {
    rows.push(<ProductCategory key={category} category={category} />);
    grouped[category].forEach((product) => {
      rows.push(<ProductRow key={product.name} product={product} />);
    });
  });
    return (
        <>
        <table style={{'marginTop':'20px'}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th style={{'paddingLeft':'20px'}}>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
        </>
    )
}