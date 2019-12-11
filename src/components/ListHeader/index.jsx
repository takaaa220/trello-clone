import React, { memo } from "react";

const ListHeader = ({ title }) => {
  return (
    <div className="ListHeader">
      <h3 className="ListHeader__Heading">{title}</h3>
      <div>+</div>
    </div>
  );
};

export default memo(ListHeader);
