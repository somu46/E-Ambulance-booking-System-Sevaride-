import React from "react";
import Footer from "../components/Footer/footer.js";
import Navbar from "../components//Navbar/navbar.js";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { CustomSpinner } from "../components/Lazycomponents/LoadingSpinner.js";

const Root = () => {
  return (
    <>
      <Navbar />
      <Suspense
       fallback={<CustomSpinner/>}
      >
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};

export default Root;
