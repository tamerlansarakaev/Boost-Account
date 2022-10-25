// Global
import classNames from "classnames";
import React from "react";

// Styles
import "./RegionItem.less";

// Components

function RegionItem({active,region,onClick}) {
  const className = classNames({region: true, active})
  return (
      <div className={className} onClick={() => onClick(region)}>{region}</div>
  );
}

export default RegionItem;
