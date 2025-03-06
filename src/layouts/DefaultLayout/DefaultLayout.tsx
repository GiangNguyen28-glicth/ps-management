import React from "react";
import { Header } from "../components";
import { Sidebar } from "./Sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

export const DefaultLayout = (props: Props) => {
  return (
    <div className="container">
      <Header></Header>
      <div className="container">
        <Sidebar></Sidebar>
      </div>
      <div className="container">{props.children}</div>
    </div>
  );
};
