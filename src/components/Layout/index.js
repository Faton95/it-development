import Header from "../Header";
import dynamic from "next/dynamic";
import Footer from "../Footer";

const Index = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Index;
