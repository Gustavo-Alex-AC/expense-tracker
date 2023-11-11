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

    // Display a message for non-Chrome users
    const showNonChromeMessage = () => {
      const messageDiv = document.getElementById(
        "Por favor use o Google Chrome para melhor experiência || Please use Google Chrome for a best experience."
      );
      if (messageDiv) {
        messageDiv.style.display = "block";
      }
    };

    // Check the browser on component mount
    if (!isChrome()) {
      showNonChromeMessage();
    }
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  // Optional: Display a message for non-Chrome users
  return (
    <div>
      <p id="non-chrome-message" style={{ display: "none" }}>
        This app is optimized for Google Chrome. Please use Chrome for the best
        experience || Este aplicativo é otimizado para Google Chrome. Use o
        Chrome para obter a melhor experiência.
      </p>
    </div>
  );
};

export default RedirectToChrome;
