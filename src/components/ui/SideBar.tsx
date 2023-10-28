import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";

export default function SideBar() {
  return (
    <>
      <a href="https://www.instagram.com/sonusahuz/" target="_blank">
        <AiFillInstagram
          className=" text-gray-700 cursor-pointer dark:text-white hover:text-pink-500"
          size={35}
        />
      </a>
      <a href="https://github.com/sonusahuz" target="_blank">
        <AiFillGithub
          className=" text-gray-700 cursor-pointer dark:text-white hover:text-black"
          size={35}
        />
      </a>
      <a href="https://www.linkedin.com/in/sonusahuz/" target="_blank">
        <AiFillLinkedin
          className=" text-gray-700 cursor-pointer dark:text-white hover:text-blue-600"
          size={35}
        />
      </a>
      <a href="https://sonusahu.hashnode.dev/" target="_blank">
        <FaHashnode
          className=" text-gray-700 cursor-pointer dark:text-white hover:text-blue-900"
          size={35}
        />
      </a>
    </>
  );
}
