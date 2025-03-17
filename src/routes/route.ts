import React from "react";
import { Home, NotFound, Profile, SignIn, SignUp } from "../pages";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  isUseDefaultLayout: boolean;
}
export const publicRoutes: IRoute[] = [
  {
    path: "/profile",
    component: Profile,
    isUseDefaultLayout: true
  },
  {
    path: "*",
    component: Home,
    isUseDefaultLayout: true
  },
  {
    path: "/404",
    component: NotFound,
    isUseDefaultLayout: false
  },
  {
    path: "/sign-in",
    component: SignIn,
    isUseDefaultLayout: false
  },
  {
    path: "/sign-up",
    component: SignUp,
    isUseDefaultLayout: false
  }
];
export const privateRoutes: IRoute[] = [];
