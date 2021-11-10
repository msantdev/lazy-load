import { lazy } from "react";
import { NoLazy } from "../lazyload/pages/NoLazy";

// type JSXComponent =()=>JSX.Element
type JSXComponent = () => JSX.Element;

interface IRoutes {
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent;
  name: string;
  children?: IRoutes[];
}

// const LazyPage1 = lazy(
//   () => import(/* webpackChunkName:"LazyPage1" */ "../lazyload/pages/LazyPage1")
// );
// const LazyPage2 = lazy(
//   () => import(/* webpackChunkName:"LazyPage2" */ "../lazyload/pages/LazyPage2")
// );
// const LazyPage3 = lazy(
//   () => import(/* webpackChunkName:"LazyPage3" */ "../lazyload/pages/LazyPage3")
// );

const Lazyload = lazy(
  () =>
    import(/* webpackChunkName:"LazyLayout" */ "../lazyload/layout/LazyLayout")
);

export const routes: IRoutes[] = [
  {
    path: "/lazyload",
    Component: Lazyload,
    name: "LazyLoading Nested",
  },
  {
    path: "/nolazy",
    Component: NoLazy,
    name: "No Lazy Loading",
  },
];
