import { useSelector } from "react-redux";
import Header from "./Header";
import SideNav from "./SideNav";

const Layout = ({ children }) => {
  const { sideNavState } = useSelector((state) => state);
  return (
    <>
      <SideNav />
      <main
        className={`page-content  transition-all duration-200 ease-linear dark:bg-slate-800 ${
          !sideNavState.show ? "ml-[250px]" : "ml-[0px]"
        } pt-[70px]`}
      >
        <Header />
        <section>{children}</section>
      </main>
    </>
  );
};

export default Layout;
