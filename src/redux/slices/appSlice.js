import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: [
    { id: 1, name: "Machine Learning", level: 85 },
    { id: 2, name: "Data Science", level: 80 },
    { id: 3, name: "React Development", level: 75 },
    { id: 4, name: "Python", level: 90 }
  ]
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    removeSkill: (state, action) => {
      state.skills = state.skills.filter(
        (skill) => skill.id !== action.payload
      );
    },
    updateSkillLevel: (state, action) => {
      const { id, level } = action.payload;
      const skill = state.skills.find((s) => s.id === id);
      if (skill) {
        skill.level = level;
      }
    }
  }
});

export const { addSkill, removeSkill, updateSkillLevel } =
  appSlice.actions;

export default appSlice.reducer;