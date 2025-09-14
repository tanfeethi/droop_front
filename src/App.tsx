import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./routes/AppRouter";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
