import { createContext, useContext, useReducer } from "react";
import { themeReducer, initialState } from "./themeReducer";


const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Función para alternar el tema
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const value = { theme: state.theme, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>
      <div className={state.theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

// Custom hook para acceder al contexto global
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un proveedor de temas');
  }
  return context;
};


export default ThemeContext;
