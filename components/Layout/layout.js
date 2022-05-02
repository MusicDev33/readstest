import RNavbar from "components/RNavbar/rnavbar";

export const Layout = ({ children }) => {
  return (
    <>
      <RNavbar />
      <main>{children}</main>
    </>
  )
}
