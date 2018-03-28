import React from "react";

import Header from "../components/header";
import Container from "../components/container";

export default ({ children }) => (
  <div>
    <Header />
    <Container>{children()}</Container>
  </div>
);
