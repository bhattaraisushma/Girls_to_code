import React from "react";


const Show=()=>{
    const data=[{category:"fruits", name:"apple "},
    {category:"cars", name:"tesla"},
    {category:"tress", name:"apple tress"}]

return(
<table>
<th >
    <tr>
    <th>Categories</th>
    <th>Name</th>
    </tr>
    </th>
  {  data.map((i)=>(

<div>
   <br></br>
    <tr>
       
    <td>{i.category}</td>
    <td>{i.name}</td>
    
    </tr>
  
   
   
</div>
    )
    )}
    </table>

    )



}
export default Show