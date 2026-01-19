import "./App.css";
import { Hero } from "./components/header/Hero";
import { Navigation } from "./components/navigation/Navigation";
function App() {
  return (
    <div className="h-full">
      <div className="bg-[radial-gradient(circle_at_top_right,#c94b9a_0%,#a4147d_35%,#6a1b5e_60%,#2b0f2f_100%)]">
        <div>
          <Navigation />
        </div>
        <div>
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
