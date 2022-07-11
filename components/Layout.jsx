import Header from "./Header";
import SideNav from "./SideNav";

const Layout = ({ children }) => {
  return (
    <>
      <SideNav />
      <div>
        <Header />
        <section className="page-content max-h-screen ml-[250px] pt-[70px] overflow-hidden">{children}</section>
      </div>
    </>
  );
};

export default Layout;
