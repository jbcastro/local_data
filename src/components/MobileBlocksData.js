import React from "react";
import MobileBlocks from "./MobileBlocks";

const MobileBlocksData = ({ onSelect, glasses, hideRemoved }) => {
  const data = glasses;

  const cells = data.map(data => {
    return (
      <MobileBlocks
        data={data}
        key={data._id}
        onSelect={onSelect}
        hideRemoved={hideRemoved}
      />
    );
  });

  return <div className="MobileBlock">{cells}</div>;
};
export default MobileBlocksData;
