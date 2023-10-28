import Button from "../components/ui/Button";
import DarkMode from "../feature/DarkMode";
import SideBar from "../components/ui/SideBar";
export default function Home() {
  return (
    <div
      id="#"
      className="px-20 pt-20 flex h-[calc(100vh-60px)] items-center justify-between dark:text-white dark:bg-black"
    >
      <div>
        <h1 className="text-7xl font-bold">Sonu Sahu</h1>
        <p className=" text-gray-700 w-[700px] leading-6 dark:text-gray-100 my-6">
          I'm Sonu Sahu Web Designer & <strong>Front-End Developer</strong>
          Focused On Crafting Clean & User-Friendly Experiences, I Am Passionate
          About Building Excellent Software That Improves The Lives Of Those
          Around Me.
        </p>
        <Button className="px-2 py-2 bg-black text-sm rounded text-white w-28  dark:text-black dark:bg-white">
          About me
        </Button>
        <Button className="px-2 py-2 bg-black text-sm rounded text-white w-28 ml-10 dark:text-black dark:bg-white">
          Project
        </Button>
      </div>
      <div className="flex items-center flex-col gap-6">
        <SideBar />
        <DarkMode />
      </div>
    </div>
  );
}
