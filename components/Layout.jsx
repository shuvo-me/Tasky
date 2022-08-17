import { useSelector } from "react-redux";
import Header from "./Header";
import SideNav from "./SideNav";

const Layout = ({ children }) => {
  const { sideNavState } = useSelector((state) => state);
  return (
    <>
      <SideNav />
      <main
        className={`page-content xs:ml-0 ${
          !sideNavState.show ? "md:ml-[250px]" : "ml-[0px]"
        } pt-[70px]`}
      >
        <Header />
        <section className="px-5 pt-6">{children}</section>
      </main>
    </>
  );
};

export default Layout;
