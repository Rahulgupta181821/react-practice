import React from "react";

export default function ProductRow({product}){
    return (
        <tr>
            <td style={{'textAlign':'left'}}>{product.name}</td>
            <td style={{ paddingLeft: '20px' }}>{product.price}</td>
        </tr>
    )
}