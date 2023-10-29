import { RootState } from "../../store/store/store";
import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import { actionsSlice } from "../../store/actions/resume";
import { Avatar } from "@material-tailwind/react";
import { UserCircle2 } from "lucide-react";
import SelectColor from "./SelectColor";
import userEvent from "@testing-library/user-event";
export default function ResumePreview() {
  const userValue = useSelector((state: RootState) => state.userValue);
  return (
    <div className="flex items-start justify-between flex-wrap">
      <SideBar />
      <div className="element flex items-start justify-between bg-gray-300 shadow-lg mx-auto my-2">
        <div
          style={{ backgroundColor: userValue.color }}
          className={`w-60 absolute ml-[336px] h-12 rounded-bl-full`}
        ></div>
        <div
          style={{ backgroundColor: userValue.color }}
          className={` text-white rounded-t-full w-[40%] ml-5 height pt-10 text-xs`}
        >
          <div>
            {actionsSlice.setImage(userValue.image) ? (
              <Avatar src={userValue.image} className="ml-14" size="xxl" />
            ) : (
              <UserCircle2 size={100} className=" text-white" />
            )}
          </div>
          <div className="pt-5">
            <div className=" ml-5 my-8">
              <h1 className=" capitalize">
                {userValue.firstname} {userValue.lastname}
              </h1>
              <li className=" list-none capitalize">{userValue.position}</li>
            </div>
            <div className=" ml-5 my-4">
              <h1 className=" text-xl font-bold">Education</h1>
              <div className="mt-2 capitalize">
                <h1>{userValue.degree}</h1>
                <li className="list-none capitalize">
                  {userValue.universityName}
                </li>
              </div>
            </div>
            <div className=" ml-5 my-4">
              <h1 className=" text-xl font-bold">Contact</h1>
              <div className="mt-2">
                <li className="list-none">{userValue.phone}</li>
                <li className="list-none">{userValue.email}</li>
              </div>
            </div>
            <div className=" ml-5 my-4">
              <h1 className=" text-xl font-bold">Address</h1>
              <div className="mt-2">
                <li className="list-none capitalize">{userValue.address}</li>
              </div>
            </div>
            <div className=" ml-5 my-4">
              <h1 className=" text-xl font-bold">Language</h1>
              <ul className="flex items-start justify-center flex-col gap-2 mt-3">
                {userValue.language.map((item) => (
                  <li className=" capitalize">{item.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 w-[60%]">
          <div>
            <h1 className=" text-4xl font-bold pl-5 capitalize">
              {userValue.firstname} {userValue.lastname}
            </h1>
            <li className=" list-none font-semibold pl-5 capitalize">
              {userValue.position}
            </li>
          </div>
          <div>
            <h1
              style={{ backgroundColor: userValue.color }}
              className=" text-xl font-bold my-3 text-white rounded-r-full py-1 pl-5 w-40"
            >
              About me
            </h1>
            <p className="pl-5 text-sm">{userValue.description}</p>
          </div>
          <div>
            <h1
              style={{ backgroundColor: userValue.color }}
              className="text-xl font-bold my-3 text-white rounded-r-full py-1 pl-5 w-40"
            >
              Experience
            </h1>
            <h1 className="pl-5 text-sm">
              {userValue.startDate} - {userValue.endDate}
            </h1>
            <p className="pl-5 text-sm">{userValue.companyName}</p>
            <h1 className="pl-5 text-sm">{userValue.companyRole}</h1>
            <p className="pl-5 text-sm">{userValue.companyDescription}</p>
          </div>
          <div>
            <h1
              style={{ backgroundColor: userValue.color }}
              className=" text-xl font-bold my-3 text-white rounded-r-full py-1 pl-5 w-40"
            >
              Skills
            </h1>
            <ul className="pl-5 flex items-start justify-start gap-4 flex-wrap">
              {userValue.skills.map((item) => (
                <li className=" capitalize">{item.text}</li>
              ))}
            </ul>
          </div>
          <div
            style={{ backgroundColor: userValue.color }}
            className={`w-20 h-12 mt-[56px] ml-[260px] rounded-tl-full`}
          ></div>
        </div>
      </div>
      <SelectColor />
    </div>
  );
}
