import { NavLink } from "react-router";

export const Footer = () => {
  return (
    <div
      className="w-full h-[200px] bg-gradient-to-r from-lime-300 via-green-200 to-emerald-500 
                       flex items-center justify-center p-4"
    >
      <ul className="flex space-x-8">
        <li>
          <NavLink
            to={"/"}
            className=" text-gray-800 text-xl font-bold hover:text-gray-900 hover:underline transition-colors duration-200"
          >
            Start
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/animals"}
            className="text-gray-800 text-xl font-bold hover:text-gray-900 hover:underline transition-colors duration-200"
          >
            Djuren
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
