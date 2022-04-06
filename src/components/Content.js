import Header from "./Header";
import { globalContext } from "../App";
import { useContext } from "react";

const Content = ({ children }) => {
  const user = useContext(globalContext);
  return (
    <>
      {user.logged ? (
        <div>
          <Header />
          <main className="mt-3 pt-3 main">
            <div className="container-fluid">{children}</div>
          </main>
        </div>
      ) : (
        <main className="mt-3 pt-3">
          <div className="container-fluid">{children}</div>
        </main>
      )}
    </>
  );
};

export default Content;
