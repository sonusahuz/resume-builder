import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionsSlice } from "../../store/actions/resume";

export default function SelectColor() {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center flex-col gap-5 mr-20 mt-6">
      <input
        type="color"
        className="px-6 py-6 rounded-full w-10 bg-black"
        onChange={(e) => dispatch(actionsSlice.setColor(e.target.value))}
      />
      <button
        className="px-6 py-6 rounded-full w-10 bg-black"
        onClick={() => dispatch(actionsSlice.setColor("rgb(0 0 0)"))}
      ></button>
      <button
        className="px-6 py-6 rounded-full bg-red-900 w-10"
        onClick={() => dispatch(actionsSlice.setColor("rgb(127 29 29)"))}
      ></button>
      <button
        className="px-6 py-6 rounded-full  w-10 bg-amber-500"
        onClick={() => dispatch(actionsSlice.setColor("rgb(245 158 11)"))}
      ></button>
      <button
        className="px-6 py-6 rounded-full w-10 bg-lime-900"
        onClick={() => dispatch(actionsSlice.setColor("rgb(54 83 20)"))}
      ></button>
      <button
        className="px-6 py-6 rounded-full w-10  bg-indigo-800 "
        onClick={() => dispatch(actionsSlice.setColor("rgb(55 48 163)"))}
      ></button>
      <button
        className="px-6 py-6 rounded-full  w-10 bg-teal-900"
        onClick={() => dispatch(actionsSlice.setColor("rgb(19 78 74)"))}
      ></button>
      <button
        className="px-6 py-6 rounded-full w-10 bg-blue-900"
        onClick={() => dispatch(actionsSlice.setColor("rgb(30 58 138)"))}
      ></button>
      <button
        className="px-6 py-6 rounded-full w-10 bg-indigo-900"
        onClick={() => dispatch(actionsSlice.setColor("rgb(30 27 75)"))}
      ></button>
      <button
        className="px-6 py-6 rounded-full  w-10 bg-purple-900"
        onClick={() => dispatch(actionsSlice.setColor("rgb(88 28 135)"))}
      ></button>
    </div>
  );
}
