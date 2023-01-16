// fn with arrow fn 

import MenuItem from "./MenuItem/MenuItem";

const MenuList = () => {

  const navMenus = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About", url: "/about" },
    { id: 3, title: "Contact", url: "/contact" }
  ];

  return (
    <ul>
      {
        navMenus.map( (navMenu) => {
          return (
            <MenuItem
              key={navMenu.id}
              title={navMenu.title}
              url={navMenu.url}
            />
          );
        })
      }
    </ul>
  );
}

export default MenuList;