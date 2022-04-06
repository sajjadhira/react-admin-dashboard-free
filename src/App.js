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

const context = {
  name: "Sajjad Hossain",
  role: "Superadmin",
};

export const globalContext = React.createContext();

const queryClinet = new QueryClient();

function App() {
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  var css = ` margin-top: 20% !important;`;

  return (
    <globalContext.Provider value={context}>
      <QueryClientProvider client={queryClinet}>
        <BrowserRouter>
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
                  path="/reactpanel/"
                  element={<Content children={<Dashboard />} />}
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
                        <div className="text-center fw-bold">
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
