import React from "react";
import MathsPiView from "../components/MathsPiView";

const MathsPi = () => {
  return (
    <div className="bible-view-container">
      <h1>Maths Pi</h1>
      <p>
        Welcome to Maths Pi, a quiz app designed to help you improve your math
        skills through personalized quizzes and exams. Your privacy is important
        to us, and we are committed to protecting your personal information
        while providing you with a seamless user experience. disclaimer:
      </p>
      <MathsPiView />
    </div>
  );
};

export default MathsPi;
