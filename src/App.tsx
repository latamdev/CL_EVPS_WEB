import "./App.css";
import LandingFooter from "./components/Landing-Footer/LandingFooter";
import LandingMenu from "./components/Landing-Menu/LandingMenu";
import LandingPage from "./components/Landing-Page/Landing-Page";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <LandingMenu />
      <LandingPage />
      <LandingFooter />
    </div>
  );
}

export default App;
