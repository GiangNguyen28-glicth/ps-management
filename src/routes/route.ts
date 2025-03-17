import React from "react";
import { Home, NotFound, Profile, SignIn, SignUp } from "../pages";
export interface IRoute {
  path: string;
  component: React.ComponentType;
  layout?: any;
}
export const publicRoutes: IRoute[] = [
  {
    path: "/sign-in",
    component: SignIn,
    layout: null,
  },
  {
    path: "/sign-up",
    component: SignUp,
    layout: null,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "*",
    component: Home,
  },
  {
    path: "/404",
    component: NotFound,
    layout: null,
  }
];
export const privateRoutes: IRoute[] = [];
