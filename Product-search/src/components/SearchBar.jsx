import React from "react";
export default function SearchBar({searchText,onSearchTextChange, inStockOnly, onInStockChange}){
    return (
        <form>
            <div>
             <input type="text" 
             placeholder="Search..."
             value={searchText}
             onChange={(e) => onSearchTextChange(e.target.value)}
             style={{'fontSize':'1.1rem'}}
             />
            </div>
            <div style={{'fontWeight':800, 'fontSize':'0.92rem'}}>
                <label>
                <input type='checkbox' 
                checked={inStockOnly}
                onChange={(e) => onInStockChange(e.target.checked)}
                
                />
                {' '}
                Only show products in stock 
            </label>
            </div>
        </form>
    )
}