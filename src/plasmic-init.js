import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "v5kPWVs52pwRXwqqMcp9wM",  // ID of a project you are using
      token: "0uU7YINa406UmA6iW4RkJxCVwQizkIdDCembfyHyvWWuDzTdq69NGNN7Y43p8ixmj9lErf56sn8eboh9bbsA"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})