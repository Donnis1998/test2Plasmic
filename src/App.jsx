import React from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
//import PlasmicHost from "./pages/PlasmicHost";

import {
  //initPlasmicLoader,
  PlasmicRootProvider,
  PlasmicComponent,
} from "@plasmicapp/loader-react";
import { useEffect, useState } from "react";
import { PLASMIC } from "./plasmic-init";

function Index() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            Component={CatchAllPage}
          ></Route>
        </Routes>
      </BrowserRouter>
    </PlasmicRootProvider>
  );
}

export default Index;

// We try loading the Plasmic page for the current route.
// If it doesn't exist, then return "Not found."
export function CatchAllPage() {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState(null);
  let location = useLocation();
  console.log("props", location);

  useEffect(() => {
    async function load() {
      const pageData = await PLASMIC.maybeFetchComponentData(
        location.pathname
      );
      setPageData(pageData);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!pageData) {
    return <div>Not found</div>;
  }
  // The page will already be cached from the `load` call above.
  return <PlasmicComponent component={location.pathname} />;
}
