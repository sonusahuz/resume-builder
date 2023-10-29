import React, { useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, RootState } from "../store/store/store";
import { actionsSlice } from "../store/actions/resume";
import { nanoid } from "@reduxjs/toolkit";
import { Chip } from "@material-tailwind/react";
import { X } from "lucide-react";

export default function Skills() {
  const dispatch = useDispatch<AppDispatch>();
  const action = useSelector((state: RootState) => state.userValue.skills);
  const [skills, setSkills] = useState("");
  const addSkillHandle = () => {
    dispatch(
      actionsSlice.addSkills({
        id: nanoid(),
        text: skills,
      })
    );
  };
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-7 my-10">
      <h1 className="text-3xl font-bold">Personal Information</h1>
      <div>
        <input
          type="text"
          className="px-2 p-4 rounded border w-[350px]"
          placeholder="enter your skills"
          onChange={(e) => setSkills(e.target.value)}
        />
        <button
          onClick={addSkillHandle}
          className="px-2 p-4 text-white bg-indigo-600 rounded w-40 ml-10"
        >
          Add
        </button>
      </div>
      <div className="w-[550px] py-2 px-2 border-2 rounded">
        {action.length > 0 ? (
          <div className="flex items-center justify-start gap-5 flex-wrap">
            {action.map((item) => (
              <div>
                <button className="flex rounded bg-black text-white text-xs px-2 py-1 items-center justify-center">
                  {item.text}{" "}
                  <X
                    size={20}
                    className="ml-3 cursor-pointer"
                    onClick={() => dispatch(actionsSlice.removeSkills(item))}
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
