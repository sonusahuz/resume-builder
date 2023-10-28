import React, { useEffect, useState } from "react";
import { SunMoon, Moon } from "lucide-react";
import { MdDarkMode } from "react-icons/md";
export default function DarkMode() {
  const [toggle, setToogle] = useState(false);
  useEffect(() => {
    if (toggle) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggle]);
  return (
    <li
      onClick={() => setToogle(!toggle)}
      className=" text-gray-700 cursor-pointer list-none font-bold dark:bg-black dark:text-white flex items-center justify-end"
    >
      {toggle ? <SunMoon size={35} /> : <MdDarkMode size={35} />}
    </li>
  );
}
