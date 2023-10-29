import React, { useState } from "react";
import PersonalInfo from "../../pages/PersonalInfo";
import Contact from "../../pages/Contact";
import DownloadResume from "../../pages/DownloadResume";
import Education from "../../pages/Education";
import Experience from "../../pages/Experience";
import Skills from "../../pages/Skills";

export default function ButtonTabs() {
  const [tabs, setTabs] = useState(1);
  const renderComponent = () => {
    switch (tabs) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <Contact />;
      case 3:
        return <Education />;
      case 4:
        return <Experience />;
      case 5:
        return <Skills />;
      case 6:
        return <DownloadResume />;
      default:
        return null;
    }
  };
  return (
    <div className="px-10 my-2">
      <div className="flex items-center justify-center gap-3">
        <button
          className={
            tabs === 1
              ? "px-2 py-2 bg-black text-white rounded"
              : " bg-indigo-500 text-white px-2 py-2 rounded"
          }
          onClick={() => setTabs(1)}
        >
          Personal Info
        </button>

        <button
          className={
            tabs === 3
              ? "px-2 py-2 bg-black text-white rounded"
              : " bg-indigo-500 text-white px-2 py-2 rounded"
          }
          onClick={() => setTabs(3)}
        >
          Education
        </button>
        <button
          className={
            tabs === 2
              ? "px-2 py-2 bg-black text-white rounded"
              : " bg-indigo-500 text-white px-2 py-2 rounded"
          }
          onClick={() => setTabs(2)}
        >
          Contact
        </button>
        <button
          className={
            tabs === 4
              ? "px-2 py-2 bg-black text-white rounded"
              : " bg-indigo-500 text-white px-2 py-2 rounded"
          }
          onClick={() => setTabs(4)}
        >
          Experience
        </button>
        <button
          className={
            tabs === 5
              ? "px-2 py-2 bg-black text-white rounded"
              : " bg-indigo-500 text-white px-2 py-2 rounded"
          }
          onClick={() => setTabs(5)}
        >
          Skills
        </button>
        <button
          className={
            tabs === 6
              ? "px-2 py-2 bg-black text-white rounded"
              : " bg-indigo-500 text-white px-2 py-2 rounded"
          }
          onClick={() => setTabs(6)}
        >
          Download
        </button>
      </div>
      {renderComponent()}
    </div>
  );
}
