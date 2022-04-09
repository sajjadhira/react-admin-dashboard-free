import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import React, { useState, useEffect } from "react";

import Content from "./components/Content";
import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";

import ClipLoader from "react-spinners/ClipLoader";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const globalContext = React.createContext();

const queryClinet = new QueryClient();

function App() {
  // const [context, setContext] = useState({ logged: false });
  const [loading, setLoading] = useState(true);
  const context = useState({
    logged: localStorage.getItem("logged") ? true : false,
    name: localStorage.getItem("name") ? localStorage.getItem("name") : false,
    role: localStorage.getItem("role") ? localStorage.getItem("role") : false,
    token: localStorage.getItem("token")
      ? localStorage.getItem("token")
      : false,
    session_time: localStorage.getItem("session_time")
      ? localStorage.getItem("session_time")
      : false,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // searching for login
  if (localStorage.getItem("logged")) {
    const session_time = localStorage.getItem("session_time");

    // checking for logout time
    const checkforsession = setInterval(() => {
      var cd = new Date();
      var sd = new Date(session_time);

      if (cd > sd) {
        clearInterval(checkforsession);
        localStorage.clear();
        toast.error("Session Expired!");

        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      }
    }, 100);
    // checking for logout time
  }

  // console.log(context);

  var css = ` margin-top: 20% !important;`;

  return (
    <globalContext.Provider value={context}>
      <QueryClientProvider client={queryClinet}>
        <BrowserRouter>
          <ToastContainer />
          <div Header="App">
            {loading ? (
              <div className="preloader">
                <ClipLoader loading={loading} size={50} css={css} />
              </div>
            ) : (
              <Routes>
                <Route
                  path="/"
                  element={<Content children={<Dashboard />} />}
                />
                <Route
                  path="/dashboard/"
                  element={<Content children={<Dashboard />} />}
                />
                <Route
                  path="/reactpanel/"
                  element={<Content children={<Dashboard />} />}
                />

                <Route path="/login/" element={<Login />} />
                <Route
                  path="/register/"
                  element={<Content children={<Register />} />}
                />
                <Route
                  path="/tables/"
                  element={<Content children={<Tables />} />}
                />
                <Route
                  path="*"
                  element={
                    <Content
                      children={
                        <div className="text-center fw-bold ms-auto">
                          <span className="mt-5 pt-5 fs-5">404 Not Found!</span>
                        </div>
                      }
                    />
                  }
                />
              </Routes>
            )}
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </globalContext.Provider>
  );
}

export default App;
