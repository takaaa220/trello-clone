import React, { memo, useContext } from "react";

import ListContext from "../../libs/ListContext";

const ListHeader = () => {
  const { title } = useContext(ListContext);

  return (
    <div className="ListHeader">
      <h3 className="ListHeader__Heading">{title}</h3>
      <div>+</div>
    </div>
  );
};

export default memo(ListHeader);
