import { initPlasmicLoader } from "@plasmicapp/loader-react";
import { BSGridControl } from "./components/customs/BSGridControl";
import { BSButton } from "./components/customs/BSButton";
import { BSDropdown } from "./components/customs/BSDropdown";
import {
  defaultColumnsGridControl,
  defaultDataGridControl,
} from "./components/data/gridControlDefaultData";
import { defaultDataDropdown } from "./components/data/dropdownDefaultData";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "v5kPWVs52pwRXwqqMcp9wM", // ID of a project you are using
      token:
        "0uU7YINa406UmA6iW4RkJxCVwQizkIdDCembfyHyvWWuDzTdq69NGNN7Y43p8ixmj9lErf56sn8eboh9bbsA", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});

PLASMIC.registerComponent(BSGridControl, {
  name: "GridControl",
  importPath: "./src/components/customs/BSGridControl",
  props: {
    dataSource: {
      type: "array",
      defaultValue: defaultDataGridControl,
    },
    allowPaging: {
      type: "boolean",
      defaultValue: true,
    },
    height: {
      type: "number",
      defaultValue: 300,
    },
    width: {
      type: "number",
      defaultValue: 600,
    },
    gridData: {
      type: "object",
      defaultValue: {
        columns: defaultColumnsGridControl,
      },
    },
    enableFrozenCommand: {
      type: "boolean",
      defaultValue: true,
    },
  },
});

PLASMIC.registerComponent(BSButton, {
  name: "BsButton",
  importPath: "./src/components/customs/BSButton",
  props: {
    color: {
      type: "choice",
      options: ["danger", "info", "link", "primary", "success", "warning"],
      defaultValue: "primary",
    },
    content: {
      type: "string",
      defaultValue: "button",
    },
  },
});

PLASMIC.registerComponent(BSDropdown, {
  name: "BsDropdown",
  importPath: "./src/components/customs/BSDropdown",
  props: {
    bsInput: "boolean",
    color: {
      type: "choice",
      options: ["default", "error", "success", "warning"],
      defaultValue: "success",
    },
    width: {
      type: "number",
      defaultValue: 200,
    },
    dataSource: {
      type: "array",
      defaultValue: defaultDataDropdown,
    },
    fields: {
      type: "object",
      fields: {
        text: {
          type: "string",
          displayName: "Texto",
        },
        value: {
          type: "string",
          displayName: "Valor",
        },
      },
    },
  },
});
