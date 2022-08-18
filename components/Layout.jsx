import { useSelector } from "react-redux";
import Header from "./Header";
import SideNav from "./SideNav";

const Layout = ({ children }) => {
  const { sideNavState } = useSelector((state) => state);

  console.log({ sideNavState });
  return (
    <>
      <SideNav />
      <main
        className={`page-content px-[30px] ${
          !sideNavState.show ? "ml-[250px]" : "ml-[0px]"
        } pt-[90px]`}
      >
        <Header />
        <section>{children}</section>
      </main>
    </>
  );
};

export default Layout;
