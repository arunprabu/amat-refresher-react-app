// fn comp with anon fn 

import MenuList from "../MenuList/MenuList";

const Footer = function() {
  return (
    <footer>
      <hr />
      <MenuList />
      <p>Copyright 2023 | Arun</p>
    </footer>
  );
}

export default Footer;