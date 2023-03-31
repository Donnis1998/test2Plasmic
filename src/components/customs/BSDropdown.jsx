import React from "react";
import { DropdownList } from "@bsoftsolution/base-ui.ui.drop-down-list";

const BSDropdown = ({
  className,
  dataSource,
  bsInput,
  color,
  fields,
  width,
}) => {
  return (
    <DropdownList
      {...{ className, dataSource, bsInput, color, fields, width }}
    />
  );
};

export { BSDropdown };
