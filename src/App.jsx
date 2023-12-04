import { useState, useEffect } from "react";
import IntroAnimation from "./components/Preloader";
function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Simulate transitioning to main content after the intro animation
    const transitionTimeout = setTimeout(() => {
      setShowIntro(false);
    }, 4000); // Change the duration to match the total animation time

    return () => clearTimeout(transitionTimeout);
  }, []);

  return (
    <>
      <div className="App">
        {showIntro ? <IntroAnimation /> : <MainContent />}
      </div>
      <h1>
        hello world
      </h1>
    </>
  );
}
export default App;