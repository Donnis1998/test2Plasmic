import React from "react";
import { Button } from "@bsoftsolution/base-ui.ui.button";

const BSButton = ({ color, content, className }) => {
  return <Button {...{ color, content, className }} />;
};

export { BSButton };
