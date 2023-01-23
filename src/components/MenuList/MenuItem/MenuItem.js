import { NavLink } from "react-router-dom";

const MenuItem = ({title, url}) => {

  return (
    <li>
      <NavLink to={url}>{title}</NavLink>
    </li>
  );
}

export default MenuItem