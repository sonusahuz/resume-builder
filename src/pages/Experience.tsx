import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { AppDispatch } from "../store/store/store";
import { actionsSlice } from "../store/actions/resume";
import Input from "../components/ui/Input";

export default function Experience() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-4 my-10">
      <h1 className="text-3xl font-bold">Personal Information</h1>
      <p className="text-sm">
        List your work experience, from the most recent to the oldest. <br />{" "}
        Feel free to use our pre-written examples.
      </p>
      <div className="flex items-center justify-between gap-6 mt-5">
        <div>
          <label htmlFor="" className="py-2">
            Start Date
          </label>{" "}
          <br />
          <input
            type="date"
            className=" capitalize px-2 p-4 rounded border w-[240px]"
            placeholder="Firstname"
            onChange={(e) =>
              dispatch(actionsSlice.setStartDate(e.target.value))
            }
          />
        </div>
        <div>
          <label htmlFor="" className="py-2">
            End Date
          </label>
          <br />
          <input
            type="date"
            className=" capitalize px-2 p-4 rounded border w-[240px]"
            placeholder="Firstname"
            onChange={(e) => dispatch(actionsSlice.setEndDate(e.target.value))}
          />
        </div>
      </div>
      <Input
        type="text"
        className=" capitalize w-60"
        placeholder="Enter company name"
        onChange={(e) => dispatch(actionsSlice.setCompanyName(e.target.value))}
      />
      <Input
        type="text"
        className=" capitalize w-60"
        placeholder="Enter your role"
        onChange={(e) => dispatch(actionsSlice.setCompanyRole(e.target.value))}
      />
      <textarea
        className="rounded w-[493px] border px-2 py-2 h-28"
        placeholder="write about your role and work..."
        onChange={(e) =>
          dispatch(actionsSlice.setCompanyDescription(e.target.value))
        }
      />
    </div>
  );
}
