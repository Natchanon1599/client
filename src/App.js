import Techstack from "./pages/Techstack/Techstack";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import WorkExp from "./workExp/WorkExp";
import Projects from "./Projects/Projects";



function App() {
  return (
    <div>
     <Layout />
     <div className="container"><About />
     <Techstack />
     <WorkExp />
     <Projects  />
     </div>
    
    </div>
  );
}

export default App;
