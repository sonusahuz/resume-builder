import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/ui/Card";

export default function Project() {
  const project = [
    {
      id: "1",
      project_name: "threads Clone",
      image: "/thread.png",
      url: "https://threads-iota-ten.vercel.app/",
      code_url: "https://github.com/sonusahuz/threads",
    },
    {
      id: "2",
      project_name: "Netflix Clone",
      image: "/netflix.png",
      url: "https://netflix-peach-five.vercel.app/",
      code_url: "https://github.com/sonusahuz/netflix",
    },
    {
      id: "3",
      project_name: "Youtube Clone",
      image: "/youtube.png",
      url: "https://complete-youtube-clone.vercel.app/",
      code_url: "https://github.com/sonusahuz/complete-youtube-clone",
    },
    {
      id: "4",
      project_name: "E-Commerce",
      image: "/ecommerce.png",
      url: "https://e-commerce-xi-nine.vercel.app/",
      code_url: "",
    },
  ];
  return (
    <div className="px-20 dark:text-white dark:bg-black" id="project">
      <div>
        <h1 className="text-4xl font-bold py-4">My Project</h1>
      </div>
      <div className="flex items-center justify-center h-screen flex-wrap">
        <Card>
          {project.map((item) => (
            <div
              key={item.id}
              className=" bg-gray-100 dark:bg-black dark:text-white px-2 py-4"
            >
              <Link to={`${item.url}`} target="_blank">
                <img src={item.image} className="w-96 rounded-lg" />
              </Link>
              <h1 className="text-2xl font-bold py-4">{item.project_name}</h1>
              <div className="flex items-center justify-between">
                <button className="px-2 py-2 bg-black text-sm dark:bg-white dark:text-black w-28 rounded text-white">
                  <a href={item.code_url}>Code</a>
                </button>
                <button className="px-4 py-2 bg-black text-sm dark:bg-white dark:text-black w-26 rounded text-white">
                  <a href={item.url}>View Project</a>
                </button>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
