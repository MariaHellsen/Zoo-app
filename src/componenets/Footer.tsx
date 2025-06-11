import { NavLink } from "react-router";

export const Footer = () => {
  return (
    <ul className="footerNavigation">
      <li>
        <NavLink to={"/"}>Start</NavLink>
      </li>
      <li>
        <NavLink to={"/animals"}>Djuren</NavLink>
      </li>
    </ul>
  );
};
