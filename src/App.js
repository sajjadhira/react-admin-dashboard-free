import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import React from "react";

import Content from "./components/Content";
import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";

const context = {
  name: "Sajjad Hossain",
  role: "Superadmin",
};

export const globalContext = React.createContext();

const queryClinet = new QueryClient();

function App() {
  return (
    <globalContext.Provider value={context}>
      <QueryClientProvider client={queryClinet}>
        <BrowserRouter>
          <div Header="App">
            <Routes>
              <Route path="/" element={<Content children={<Dashboard />} />} />
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
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </globalContext.Provider>
  );
}

export default App;
