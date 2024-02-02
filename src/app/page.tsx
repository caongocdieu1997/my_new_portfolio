// "use client";
import React, { Suspense } from "react";
import App from "@/components/App";
import { ToastContainer } from "react-toastify";
import Loading from "./loading";

export default function Home() {
  return (
    <div>
      <App />
      <ToastContainer />
    </div>
  );
}
