import { createSlice } from "@reduxjs/toolkit";
interface SkillsTypes {
  id: string;
  text: string;
}
interface LanguageTypes {
  id: string;
  text: string;
}
interface ResumeTypes {
  firstname: string;
  lastname: string;
  image: string;
  position: string;
  phone: number;
  email: string;
  address: string;
  language: LanguageTypes[];
  description: string;
  degree: string;
  universityName: string;
  startDate: string;
  endDate: string;
  companyName: string;
  skills: SkillsTypes[];
  color: string;
  companyRole: string;
  companyDescription: string;
}

const initialState: ResumeTypes = {
  firstname: "firstname",
  lastname: " lastname",
  image: "",
  position: "Frontend Developer",
  phone: 91 + 123456789,
  email: "example@gmail.com",
  address: "gurugram , harayana , india",
  language: [],
  description:
    " I'm Sonu Sahu Web Designer & Front-End DeveloperFocused On Crafting Clean & User-Friendly Experiences, I Am Passionate About Building Excellent Software That Improves The Lives Of Those Around Me.",
  degree: "enter your skills",
  universityName: "enter your university name",
  startDate: "2020",
  endDate: "2023",
  companyName: "Company name",
  skills: [],
  color: "black",
  companyRole: "frontend developer",
  companyDescription: "i am frontend developer at google for last 2 years...",
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstname = action.payload;
    },
    setLastName: (state, action) => {
      state.lastname = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setUniversity: (state, action) => {
      state.universityName = action.payload;
    },
    setDegree: (state, action) => {
      state.degree = action.payload;
    },
    setPhoneNo: (state, action) => {
      state.phone = action.payload;
    },
    setEmailId: (state, action) => {
      state.email = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setCompanyRole: (state, action) => {
      state.companyRole = action.payload;
    },
    setCompanyDescription: (state, action) => {
      state.companyDescription = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },

    addSkills: (state, action) => {
      state.skills.push(action.payload);
    },
    removeSkills: (state, action) => {
      state.skills = state.skills.filter(
        (item) => item.id !== action.payload.id
      );
    },
    addLanguage: (state, action) => {
      state.language.push(action.payload);
    },
    removeLanguage: (state, action) => {
      state.language = state.language.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const actionsSlice = resumeSlice.actions;
export default resumeSlice.reducer;
