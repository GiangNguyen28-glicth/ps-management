import { Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import { Header } from "../components";
import { Sidebar } from "./Sidebar/Sidebar";

export const DefaultLayout = () => {
  return (
    <Fragment>
      <Header />
      <div className='container'>
        <Sidebar />
      </div>
      <Outlet />
    </Fragment>
  );
};
