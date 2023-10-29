import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { AppDispatch } from "../store/store/store";
import { actionsSlice } from "../store/actions/resume";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { UserCircle2 } from "lucide-react";
import { Avatar } from "@material-tailwind/react";
export default function Reference() {
  const dispatch = useDispatch<AppDispatch>();
  const [profile, setProfile] = useState<any>();
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        dispatch(actionsSlice.setImage(reader.result));
        setProfile(reader.result);
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-7 my-10">
      <h1 className="text-3xl font-bold">Personal Information</h1>
      <div>
        {profile ? (
          <Avatar src={profile} className="ml-14" size="xxl" />
        ) : (
          <UserCircle2 size={100} className="" />
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        className="block w-full text-sm text-slate-500 pl-56
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
        onChange={handleImage}
      />
      <Input
        type="text"
        className=" capitalize w-60"
        placeholder="Firstname"
        onChange={(e) => dispatch(actionsSlice.setFirstName(e.target.value))}
      />
      <Input
        type="text"
        className=" capitalize w-60"
        placeholder="lastname"
        onChange={(e) => dispatch(actionsSlice.setLastName(e.target.value))}
      />
      <Input
        type="text"
        className=" capitalize w-60"
        placeholder="position"
        onChange={(e) => dispatch(actionsSlice.setPosition(e.target.value))}
      />
    </div>
  );
}
