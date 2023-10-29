import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { AppDispatch } from "../store/store/store";
import { actionsSlice } from "../store/actions/resume";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { UserCircle2 } from "lucide-react";
import { Avatar, Textarea } from "@material-tailwind/react";
export default function PersonalInfo() {
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
    <div className="flex flex-col flex-wrap items-center justify-center gap-3 my-10">
      <h1 className="text-3xl font-bold">Personal Information</h1>
      <p className="text-xs">
        Employers will use this information to contact you.
      </p>
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
        className="block w-full text-sm text-slate-500 pl-52
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
        className=" w-60"
        placeholder="Firstname"
        onChange={(e) => dispatch(actionsSlice.setFirstName(e.target.value))}
      />
      <Input
        type="text"
        className=" w-60"
        placeholder="Lastname"
        onChange={(e) => dispatch(actionsSlice.setLastName(e.target.value))}
      />
      <Input
        type="text"
        className=" w-60"
        placeholder="Position"
        onChange={(e) => dispatch(actionsSlice.setPosition(e.target.value))}
      />
      <textarea
        className="rounded w-[493px] border px-2 py-2 h-28"
        placeholder="write about yourself..."
        onChange={(e) => dispatch(actionsSlice.setDescription(e.target.value))}
      />
    </div>
  );
}
