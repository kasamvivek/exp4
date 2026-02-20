export const initialState = {
  theme: "light",
  skills: [
    { id: 1, name: "Machine Learning", level: 85 },
    { id: 2, name: "Data Science", level: 80 },
    { id: 3, name: "React Development", level: 75 },
    { id: 4, name: "Python", level: 90 },
    { id: 5, name: "SQL", level: 70 }
  ]
};

export function appReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light"
      };

    case "ADD_SKILL":
      return {
        ...state,
        skills: [
          ...state.skills,
          {
            id: Date.now(),
            name: action.payload.name,
            level: action.payload.level
          }
        ]
      };

    case "REMOVE_SKILL":
      return {
        ...state,
        skills: state.skills.filter(skill => skill.id !== action.payload)
      };

    default:
      return state;
  }
}
