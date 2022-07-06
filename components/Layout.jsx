import Header from './Header'
import SideNav from './SideNav'

const Layout = ({children}) => {
  return (
    <>
     <Header/>
     {children}
     <SideNav/>
    </>
  )
}

export default Layout