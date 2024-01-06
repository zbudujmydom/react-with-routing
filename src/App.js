import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Offer from "./Offer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>Wystąpił błąd</h1>,
    children: [
      { index: true, element: <div>home</div> },
      { path: "/oferta/:id", element: <Offer /> },
      { path: "/kontakt", element: <div>kontakt!</div> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
