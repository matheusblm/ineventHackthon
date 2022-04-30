import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Events } from "./pages/events";
import {Home} from "./pages/home"
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Live } from "./pages/live";

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
            <Home />
        }
      />
        <Route
        path="/login"
        element={
            < Login/>
        }
      />
              <Route
        path="/register"
        element={
            < Register/>
        }
      />
                    <Route
        path="/dashboard"
        element={
            < Dashboard/>
        }
      />
                    <Route
        path="/live"
        element={
            < Live/>
        }
      />
                    <Route
        path="/events"
        element={
            < Events/>
        }
      />
    
    </Routes>
  </BrowserRouter>
  );
}