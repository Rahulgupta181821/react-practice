import React from "react";
export default  function ProductCategory({category}){
    return (
        <tr >
            <th colSpan="2" style={{'paddingTop':'10px','paddingBottom':'10px'}}>
                {category}
            </th>
        </tr>
    )
}