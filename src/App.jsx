import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "./contexts/ThemeContext";
import Projects from "./pages/Projects";
import Blogposts from "./pages/Blogposts";
import Testimonials from "./pages/Testimonials";
import Messages from "./pages/Messages";
import JobApplications from "./pages/JobApplications";
import Newsletters from "./pages/Newsletters";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route element={<Dashboard />} path="/" index />
              <Route element={<Projects />} path="/projects" />
              <Route element={<Blogposts />} path="/blog_posts" />
              <Route element={<Testimonials />} path="/testimonials" />
              <Route element={<Messages />} path="/messages" />
              <Route element={<JobApplications />} path="/job_applications" />
              <Route element={<Newsletters />} path="/newsletter" />
            </Route>
            <Route element={<ProjectDetails />} path="/project/:id" />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
