import Quiz from "./Component/Quiz";
import Result from "./Component/Result";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Quiz />{" "}
      </>
    ),
  },
  {
    path: "/result",
    element: (
      <>
        <Result />{" "}
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
