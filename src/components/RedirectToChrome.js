import React, { useEffect } from "react";

const RedirectToChrome = () => {
  useEffect(() => {
    // Check if the browser is Google Chrome
    const isChrome = () => {
      const isChromium = window.chrome;
      const winNav = window.navigator;
      const vendorName = winNav.vendor;
      const isOpera = winNav.userAgent.indexOf("OPR") > -1;
      const isIEedge = winNav.userAgent.indexOf("Edge") > -1;

      return (
        isChromium !== null &&
        isChromium !== undefined &&
        vendorName === "Google Inc." &&
        isOpera === false &&
        isIEedge === false
      );
    };

    // Redirect to the Chrome store if the browser is not Chrome
    const redirectToChromeStore = () => {
      window.location.href =
        "https://www.google.com/chrome/?brand=JJTC&gclid=CjwKCAiA6byqBhAWEiwAnGCA4N-Y_Z2tlDd910Ulj9lxRIOwAvEWB_6veE52p0-H00ZtzAhmy1NHaxoCLcUQAvD_BwE&gclsrc=aw.ds";
    };

    // Check the browser on component mount
    if (!isChrome()) {
      redirectToChromeStore();
    }
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  // Optional: Display a message for non-Chrome users
  return (
    <div>
      <p>
        This app is optimized for Google Chrome. Please use Chrome for the best
        experience || Este aplicativo é otimizado para Google Chrome. Use o
        Chrome para obter o melhor experiência.
      </p>
    </div>
  );
};

export default RedirectToChrome;
