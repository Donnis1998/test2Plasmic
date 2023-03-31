import React from "react";
import { GridControl } from "@bsoftsolution/bsoft-ui.ui.grids.grid-control";
import { registerLicense, L10n, setCulture } from "@syncfusion/ej2-base";
import * as es_ES from "./utils/language.json";

L10n.load(es_ES);
setCulture("es");

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRjWn5edXVRRmNaV0U="
);

const BSGridControl = ({
  height,
  dataSource,
  gridData,
  width,
  className,
  enableFrozenCommand,
}) => {
  return (
    <GridControl
      {...{
        width,
        gridData,
        dataSource,
        height,
        className,
        enableFrozenCommand,
      }}
    />
  );
};

export { BSGridControl };
