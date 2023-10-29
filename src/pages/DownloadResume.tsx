import React from "react";

export default function DownloadResume() {
  const printHandler = () => {
    window.print();
  };
  return (
    <div className="flex items-center justify-center mx-auto">
      <div>
        <img src="/sucess.gif" alt="" />
        <h1 className="text-3xl font-bold text-center">Congratulations!!</h1>
        <div className="flex items-center justify-center gap-5 mt-6">
          <button
            type="button"
            className={" bg-indigo-500 text-white px-2 py-2 rounded w-36"}
          >
            Download
          </button>
          <button
            onClick={printHandler}
            className={" bg-indigo-500 text-white px-2 py-2 rounded w-36"}
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
}
