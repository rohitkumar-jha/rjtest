// BibleView.js
import React from "react";
import DualLanguageView from "../components/DualLanguageView";

function BibleView() {
  return (
    <div className="bible-view-container">
      <h1>MY Holy Bible (Multi-Language Bible App)</h1>
      <DualLanguageView />
    </div>
  );
}

export default BibleView;
