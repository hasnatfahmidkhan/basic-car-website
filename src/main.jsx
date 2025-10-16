import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";
import PreLoader from "./Components/PreLoader/PreLoader";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      {/* <PreLoader /> */}
    </AuthProvider>
  </StrictMode>
);
