import { partition } from "lodash";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { publicRoutes } from "./routes";

const App = () => {
  const [routesWithLayout, routesWithoutLayout] = partition(publicRoutes, route => {
    return route.isUseDefaultLayout;
  });
  return (
    <Router>
      <div className='flex flex-col h-screen'>
        <Routes>
          <Route element={<DefaultLayout />}>
            {routesWithLayout.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Route>
          {routesWithoutLayout.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
