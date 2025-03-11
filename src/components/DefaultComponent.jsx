import React from "react";
import HeaderComponent from "../components/HeaderComponent";

import FooterComponent from "../components/ContactComponent";
export default function DefaultComponent({ children }) {
  return (
    <div>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
}
