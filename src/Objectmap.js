import React from "react";
import Objectmapshow from "./Objectmapshow";

const Objectmap = () => {
    const Obj = {
        properties: [
          {
            name: "Ocean",
            location: "Lihue, HI",
            review_count: 47
          },
          {
            name: "Johny",
            location: "washington",
            review_count: 49
          },
          {
            name: "Jack",
            location: "U.S.A",
            review_count: 47
          }
        ]
      };
      
      return (
          <Objectmapshow data={Obj.properties}/>
      )
}

export default Objectmap