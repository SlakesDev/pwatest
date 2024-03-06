import React from "react";
import Loader from "./component/loader/Loader";

const loading = () => {
  return (
    <div className="  w-screen h-screen flex items-center justify-center overflow-hidden">
      <Loader />
    </div>
  );
};

export default loading;
