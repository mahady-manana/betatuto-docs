import { Link } from "gatsby";
import React from "react";
import { submenu } from "../../utils/menuList";

export const SubMenu = () => {
  return (
    <div className=" bg-gray-800 shadow-lg">
      <nav className="text-center flex justify-center">
        {submenu.map((menu) => {
          return (
            <Link
              to={`/${menu.link}`}
              activeClassName="bg-primary"
              partiallyActive
              key={menu.id}
              className="text-sm text-white md:uppercase font-bold py-2 px-4 flex items-center flex-col hover:text-primary"
            >
              {menu.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
