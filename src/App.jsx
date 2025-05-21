import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "./contexts/ThemeContext";
import Projects from "./pages/Projects";
import Blogposts from "./pages/Blogposts";

function App() {
  return (
    <div>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route element={<Dashboard />} path="/" index />
              <Route element={<Projects />} path="/projects" />
              <Route element={<Blogposts />} path="/blog_posts" />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
