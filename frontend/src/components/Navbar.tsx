import React from "react";

interface NavbarProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}
const Navbar = (props: NavbarProps) => {
  return (
    <div>
      <h1>hello!</h1>
      <button onClick={() => props.setCurrentPage("login")}>login</button>
      <button onClick={() => props.setCurrentPage("logout")}>logout</button>
      <button onClick={() => props.setCurrentPage("create")}>create</button>
      <button onClick={() => props.setCurrentPage("home")}>home</button>
    </div>
  );
};
export default Navbar;
