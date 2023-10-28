import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="flex z-20 bg-white w-full fixed items-center justify-between px-20 py-4 h-[60px] dark:text-white dark:bg-black">
      <div>
        <NavLink to="/" className="text-2xl font-bold">
          Sonu Sahu
        </NavLink>
      </div>
      <div>
        <ul className="flex items-center justify-center gap-10">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="https://sonusahu.hashnode.dev/">Blog</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
