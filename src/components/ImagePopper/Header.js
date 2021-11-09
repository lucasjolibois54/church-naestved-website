import * as React from "react";
import { Avatar } from "react-lorem-ipsum";

export const Header = () => (
  <header>
    <span className="date">Thursday, August 8th</span>
    <h1>Today</h1>
    <div className="avatar">
      <Avatar />
    </div>
  </header>
);
