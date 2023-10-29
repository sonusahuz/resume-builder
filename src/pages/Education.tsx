import React, { useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, RootState } from "../store/store/store";
import { actionsSlice } from "../store/actions/resume";
import Input from "../components/ui/Input";
import { X } from "lucide-react";
import { nanoid } from "@reduxjs/toolkit";

export default function Education() {
  const dispatch = useDispatch<AppDispatch>();
  const languages = useSelector((state: RootState) => state.userValue.language);
  const [language, setLanguage] = useState("");
  const addLanguageHanle = () => {
    dispatch(
      actionsSlice.addLanguage({
        id: nanoid(),
        text: language,
      })
    );
  };
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-5 my-10">
      <h1 className="text-3xl font-bold">Education</h1>
      <p className="text-xs">
        Add information about your educational background.
      </p>
      <Input
        type="text"
        className="w-60"
        placeholder="Enter your degree"
        onChange={(e) => dispatch(actionsSlice.setDegree(e.target.value))}
      />
      <Input
        type="text"
        className="w-60"
        placeholder="Enter your university name"
        onChange={(e) => dispatch(actionsSlice.setUniversity(e.target.value))}
      />
      <div>
        <input
          type="text"
          className="px-2 p-4 rounded border w-[300px]"
          placeholder="enter language"
          onChange={(e) => setLanguage(e.target.value)}
        />
        <button
          onClick={addLanguageHanle}
          className="px-2 p-4 text-white bg-indigo-600 rounded w-40 ml-10"
        >
          Add
        </button>
      </div>
      <div className="w-[500px] py-2 px-2 border-2 rounded">
        {language.length > 0 ? (
          <div className="flex items-center justify-start gap-5 flex-wrap">
            {languages.map((item) => (
              <div>
                <button className="flex rounded bg-black text-white text-xs px-2 py-1 items-center justify-center">
                  {item.text}
                  <X
                    size={20}
                    className="ml-3 cursor-pointer"
                    onClick={() => dispatch(actionsSlice.removeLanguage(item))}
                  />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h1>no skills yet.</h1>
          </div>
        )}
      </div>
    </div>
  );
}
