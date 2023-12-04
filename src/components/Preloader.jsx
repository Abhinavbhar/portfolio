import React, { useState, useEffect } from 'react';


function IntroAnimation() {
  const [showWords, setShowWords] = useState({
    first: true,
    second: false,
    third: false,
  });
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setShowWords({ first: false, second: true, third: false });
    }, 1000);

    const secondTimer = setTimeout(() => {
      setShowWords({ first: false, second: false, third: true });
    }, 2000);

    const transitionTimer = setTimeout(() => {
      setShowMainContent(true);
    }, 3000); // Change the duration as needed

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
      clearTimeout(transitionTimer);
    };
  }, []);

  return (
    <div className={`intro-animation-container bg-black h-screen flex justify-center items-center ${showMainContent ? 'hidden' : ''}`}>
      <div className="intro-words text-white text-center">
        <h1 className={`text-4xl font-bold ${showWords.first ? 'block' : 'hidden'}`}>Abhinav bhar</h1>
        <h1 className={`text-4xl font-bold ${showWords.second ? 'block' : 'hidden'}`}>
          अभिनव भड</h1>
        <h1 className={`text-4xl font-bold ${showWords.third ? 'block' : 'hidden'}`}>bhar</h1>
      </div>
    </div>
  );
}

function MainContent() {
  // Your main website content component or other content here
  return (
    <div className="main-content">
      {/* Your main website content goes here */}
    </div>
  );
}



export default IntroAnimation;
