import React, { Suspense } from "react";
import Header from "@components/Header";
import { Outlet } from "react-router-dom";
import Loading from "@components/Loading";

const RootLayout = () => {
  return (
    <div>
      <Header></Header>
      <Suspense fallback={<Loading></Loading>}>
        <Outlet></Outlet>
      </Suspense>
    </div>
  );
};

export default RootLayout;
