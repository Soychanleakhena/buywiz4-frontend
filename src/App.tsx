import { BrowserRouter, Route, Routes, RouterProvider } from "react-router-dom";
import appRoutes, { AppRoute } from "./routes/appRoutes";
import Home from "./pages/homePage/homePage";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          {appRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter> */}

      <RouterProvider router={appRoutes} />
    </div>
  );
};

export default App;
