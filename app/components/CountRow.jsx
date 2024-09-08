import React from "react";
import Count from "../components/Counts";
import {Experience} from "../data/data"

const CountRow = () => {
  return (
    <>
      <div className="counts-wrapper my-[69px] mt-[10%] py-[30px] flex glass">
        {Experience.map((numb, index) => (
          <Count key={index} number={numb.count} name={numb.name} />
        ))}
      </div>
    </>
  );
};

export default CountRow;
