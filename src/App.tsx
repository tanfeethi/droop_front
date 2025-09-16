import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./routes/AppRouter";
import { Suspense } from "react";
import Loader from "./components/reuse/Loader/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
