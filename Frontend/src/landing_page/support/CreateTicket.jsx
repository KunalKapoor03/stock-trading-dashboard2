import React from "react";
import { MdAddCircleOutline } from "react-icons/md";

function CreateTicket() {
  const links = [
    "Online Account Opening",
    "Offline Account Opening",
    "Company, Partnership and HUF Account Opening",
    "NRI Account Opening",
    "Charges",
    "3-in-1 Account",
    "Getting Started",
  ];

  const sections = Array.from({ length: 6 });

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-12">
        To create a ticket, select a relevant topic
      </h1>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {sections.map((_, index) => (
          <div key={index}>
            {/* Section Title */}
            <h4 className="flex items-center gap-2 text-lg font-medium mb-4">
              <MdAddCircleOutline className="text-blue-600 text-xl" />
              Account Opening
            </h4>

            {/* Links */}
            <ul className="space-y-2 text-sm text-gray-600 leading-7">
              {links.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-blue-600 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CreateTicket;
