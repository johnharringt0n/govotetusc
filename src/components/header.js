import React from "react";
import Link from "gatsby-link";

const NavLink = props => (
  <Link
    style={{
      margin: "0",
      padding: "0",
      textDecoration: "none",
      color: "white"
    }}
    to={props.to}
  >
    {props.children}
  </Link>
);

export default () => (
  <div
    style={{
      backgroundColor: "black",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "10px"
    }}
  >
    <h3 style={{ margin: 0, padding: 0 }}>
      <NavLink to="/">Go Vote Tusc</NavLink>
    </h3>
    <span style={{ flex: "1" }} />
    <NavLink to="/about/">About</NavLink>
    <NavLink to="/contact/">Contact</NavLink>
  </div>
);
