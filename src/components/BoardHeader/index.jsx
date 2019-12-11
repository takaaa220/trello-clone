import React, { useState, memo } from "react";

const BoardHeader = ({ title }) => {
  return (
    <div className="BoardHeader">
      <h2 className="BoardHeader__Heading">{title}</h2>
    </div>
  );
};

export default memo(BoardHeader);
