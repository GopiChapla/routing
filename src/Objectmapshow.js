import React from "react";

const Objectmapshow = (props) => {

    var item=props.data;
  
    const itemList=[];

        item.map((item)=>{
            itemList.push(<><li>Name : {item.name}</li>
                <li>Location : {item.location}</li>
                <li>Review Count : {item.review_count}</li><br /></>)
        })
    

    console.log(itemList)
    return (
        <ul className="objlist">{itemList}</ul>
    )
}

export default Objectmapshow;