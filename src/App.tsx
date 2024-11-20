import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./components/theme-provider";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-[100vh] flex items-center justify-center">
        <div className="xl:w-[95rem] w-full flex flex-col items-start justify-start">
          <Navbar />
          <div className="flex pt-12 items-start justify-start w-full border">
            <Sidebar />
            <div className="min-h-[100vh] flex flex-col items-start justify-start gap-6 border border-b-0 border-r-0  border-t-0 md:w-4/5 py-6 px-12">
              <Introduction />
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
