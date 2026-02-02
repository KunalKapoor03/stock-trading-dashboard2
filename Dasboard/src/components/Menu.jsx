import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const menus = [
    { label: "Dashboard", path: "/", index: 0 },
    { label: "Orders", path: "/orders", index: 1 },
    { label: "Holdings", path: "/holdings", index: 2 },
    { label: "Positions", path: "/positions", index: 3 },
    { label: "Funds", path: "/funds", index: 4 },
    { label: "Apps", path: "/apps", index: 6 },
  ];

  return (
    <div className="flex items-center justify-between px-5 h-[10vh] shadow-sm">
      {/* Logo */}
      <img src="logo.png" alt="Logo" className="w-12 h-auto" />

      {/* Menus */}
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-8">
          {menus.map((menu) => (
            <li key={menu.index}>
              <Link
                to={menu.path}
                onClick={() => setSelectedMenu(menu.index)}
                className={`
                  text-xs font-normal
                  ${
                    selectedMenu === menu.index
                      ? "text-orange-500"
                      : "text-gray-600"
                  }
                  hover:text-orange-500
                  transition
                `}
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-200" />

        {/* Profile */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
        >
          <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-400 flex items-center justify-center text-xs font-medium">
            ZU
          </div>
          <p className="text-xs font-light text-gray-600 group-hover:text-orange-500 transition">
            USERID
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
