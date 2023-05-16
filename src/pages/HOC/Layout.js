import React from "react";
import SidePane from "./SidePane";
import Footer from "../../component/Footer";
import Nav from "./Nav";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const Layout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <div className="wrapper">
          <SidePane />
          <div className="main-panel">
            {/* <Nav /> */}
            <div className="content">
              <Component {...props} />
            </div>
            <Copyright />
          </div>
        </div>
      </>
    );
  };

export default Layout;
