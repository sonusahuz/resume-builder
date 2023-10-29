import { useDispatch, useStore } from "react-redux";
import { AppDispatch } from "../store/store/store";
import { actionsSlice } from "../store/actions/resume";
import Input from "../components/ui/Input";
export default function Contact() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-5 my-10">
      <h1 className="text-3xl font-bold">Contact</h1>
      <Input
        type="text"
        className=" capitalize w-60"
        placeholder="Enter your phone number"
        onChange={(e) => dispatch(actionsSlice.setPhoneNo(e.target.value))}
      />
      <Input
        type="text"
        className=" capitalize w-60"
        placeholder="Enter your Gmail"
        onChange={(e) => dispatch(actionsSlice.setEmailId(e.target.value))}
      />
      <Input
        type="text"
        className="capitalize w-60"
        placeholder="Enter your address"
        onChange={(e) => dispatch(actionsSlice.setAddress(e.target.value))}
      />
    </div>
  );
}
