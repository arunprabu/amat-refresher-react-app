import MenuList from "../MenuList/MenuList";

// Fn comp with Named fn
function Header(){
  return (
    <header>
      <a href="/">MyApp</a>
     <MenuList />
     <hr/>
    </header>
  );
}

export default Header;