import Introduction from "./components/Description";
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
          <div className="flex pt-12 items-start justify-start w-full border lg:border-l-2 border-l-0 lg:border-r-2 border-r-0">
            <div className="w-1/5 lg:flex hidden"><Sidebar /></div>
            <div className="min-h-[100vh] flex flex-col items-start justify-start gap-6 lg:border border-b-0 border-r-0 border-t-0 lg:w-4/5 py-6 lg:px-12 px-4">
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
