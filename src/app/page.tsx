"use client";
import React from "react";
import App from "@/components/App";
import { SiHappycow } from "react-icons/si";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [updateRef, setUpdateRef] = React.useState<boolean>(false);
  React.useEffect(() => {
    setUpdateRef(true);
  }, []);
  if (!updateRef) {
    return (
      <div className="loader__wrapper">
        <div className="loader__overlay"></div>
        <div className="loading">
          <SiHappycow size={60} />
        </div>
      </div>
    );
  }
  return (
    <div>
      <App />
      <ToastContainer />
    </div>
  );
}
