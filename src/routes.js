import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Agenda } from "./pages/calendar";
import { Dashboard } from "./pages/dashboard";
import {Home} from "./pages/home"
import { Login } from "./pages/login";
import { Register } from "./pages/register";
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
        path="/agenda"
        element={
            < Agenda/>
        }
      />

      
    </Routes>
  </BrowserRouter>
  );
}