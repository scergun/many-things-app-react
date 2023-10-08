import "./App.css";
import { CatFact } from "./CatFact";
import { AgePredictor } from "./AgePredictor";
import { ExcuseFinder } from "./ExcuseFinder";
import { Counter } from "./Counter";
import { Navbar } from "./Navbar";
import { NewProfile } from "./NewProfile";
import { Routes, Route, HashRouter } from "react-router-dom";
import { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, refetchOnMount: false },
  },
});
export const AppContext = createContext();
export const ThemeContext = createContext();
function App() {
  const [currentLink, setCurrentLink] = useState(0);
  const [username, setUsername] = useState("Guest");
  const [theme, setTheme] = useState("dark");
  return (
    <div className={`rootDiv ${theme}`}>
      <div className="container">
        <QueryClientProvider client={client}>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <AppContext.Provider
              value={{ username, setUsername, currentLink, setCurrentLink }}
            >
              <HashRouter>
                <Navbar />
                <Routes>
                  <Route path="/" element={<CatFact />} />
                  <Route path="/CatFact" element={<CatFact />} />
                  <Route path="/AgePredictor" element={<AgePredictor />} />
                  <Route path="/ExcuseFinder" element={<ExcuseFinder />} />
                  <Route path="/Counter" element={<Counter />} />
                  <Route path="/NewProfile" element={<NewProfile />} />
                </Routes>
              </HashRouter>
            </AppContext.Provider>
          </ThemeContext.Provider>
        </QueryClientProvider>
      </div>
    </div>
  );
}
export default App;
