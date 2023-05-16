import React from "react";
import HomeIcon from "./sidePaneIcons/icon_home.png";
import AddIcon from "./sidePaneIcons/icon_add.png";
import AssessmentIcon from "./sidePaneIcons/icon_analytics.png";
import DashboardIcon from "./sidePaneIcons/icon_dashboard.png";
import ResearchIcon from "./sidePaneIcons/icon_research.png";
import LogoutIcon from "./sidePaneIcons/icon_logout.png";

export const SidebarData = [
  {
    title: "Home",
    icon: (
      <img
        src={HomeIcon}
        style={{ width: "30px", height: "30px" }}
        alt="Profile"
      />
    ),
    link: "/",
  },
  {
    title: "Add Record",
    icon: (
      <img
        src={AddIcon}
        style={{ width: "30px", height: "30px" }}
        alt="AddData"
      />
    ),
    link: "/Safe-Pass-SriLanka/CreateRecord",
  },
  {
    title: "Analytics",
    icon: (
      <img
        src={AssessmentIcon}
        style={{ width: "30px", height: "30px" }}
        alt="Profile"
      />
    ),
    link: "/Safe-Pass-SriLanka/analytics",
  },
  {
    title: "Dashboard",
    icon: (
      <img
        src={DashboardIcon}
        style={{ width: "20px", height: "20px" }}
        alt="Profile"
      />
    ),
    link: "/Safe-Pass-SriLanka/dashlayout",
  },
  {
    title: "Research Objective",
    icon: (
      <img
        src={ResearchIcon}
        style={{ width: "30px", height: "30px" }}
        alt="Research"
      />
    ),
    link: "/friends",
  },
  {
    title: "Log out",
    icon: (
      <img
        src={LogoutIcon}
        style={{ width: "20px", height: "20px" }}
        alt="Logout"
      />
    ),
    link: "/images",
  },
];
