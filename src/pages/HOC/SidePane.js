import React, { useEffect, useState } from "react";
import "./SidePane.css";
import { SidebarData } from "./SideBarData";
import axios from "axios";
import { toast } from "react-toastify";

const SidePane = () => {
  const [profile, setProfile] = useState("");
  const { name, email, role, createdAt } = profile;

  useEffect(() => {
    fetch("/api/getme")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        //console.log(result)
        setProfile(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Sidebar">
      <div className="profile">
        <img
          src="/images/userProfileIcon.png"
          alt="Profile"
          // className="ProfileImage"
        />
        <h2>{name}</h2>
        <p> {role == 1 ? "Administrator" : "User"}</p>
      </div>
      <ul className="SidebarList">
        {SidebarData.map((item, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname == item.link ? "active" : ""}
              onClick={() => (window.location.pathname = item.link)}
            >
              <div id="icon">{item.icon}</div>
              <div id="title">{item.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidePane;
