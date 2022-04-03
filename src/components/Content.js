import Header from "./Header";

const Content = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-3 pt-3">
        <div className="container-fluid">{children}</div>
      </main>
    </>
  );
};

export default Content;
