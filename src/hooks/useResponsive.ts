import React, { useState, useEffect } from "react";
// @ts-ignore
import debounce from "lodash/debounce";

export const useResponsive = () => {
  // screen resolutions
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    // update the state on the initial load
    onResizeHandler();

    // assign the event
    Setup();

    return () => {
      // remove the event
      Cleanup();
    };
  }, []);

  // update the state on window resize
  const onResizeHandler = () => {
    const isMobile = window.innerWidth <= 740;
    const isTablet = window.innerWidth >= 740 && window.innerWidth <= 1023;
    const isDesktop = window.innerWidth > 1023;

    setState({ isMobile, isTablet, isDesktop });
  };

  // debounce the resize call
  const debouncedCall = debounce(onResizeHandler, 500);

  // add event listener
  const Setup = () => {
    window.addEventListener("resize", debouncedCall, false);
  };

  // remove the listener
  const Cleanup = () => {
    window.removeEventListener("resize", debouncedCall, false);
  };

  return state;
};
