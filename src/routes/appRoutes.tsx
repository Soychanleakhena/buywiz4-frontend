
import { JSX } from "react";
import Home from "~/pages/homePage/homePage";
import ProductDetail from "~/pages/productDetail/productDetail";
import { webRoutes } from "./web";

export interface AppRoute {
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element,
  children?: AppRoute[];
}

const appRoutes: AppRoute[] = [
  {
    path: webRoutes.home,
    element: <Home />,
  },
  {
    path: webRoutes.productDetail,
    element: <ProductDetail/>,
  },
  {
    path: "*",
    element:  <div>NotfoundPage</div>,
    errorElement: <div className="flex items-center justify-center h-screen">
    Sorry something wrong
  </div>,
  },
];

export default appRoutes
