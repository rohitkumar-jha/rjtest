import React from "react";
import RjMovieView from "../components/RjMovieView";

const RJMovies = () => {
  return (
    <div className="bible-view-container">
      <h1>RJ Movies App Disclaimer</h1>
      <p>
        Welcome to <b>RJ Movies</b>, allows users to watch movies from various
        online sources by simply inputting a URL. You can easily add, edit, or
        manage movie titles in multiple languages, with the option to specify
        video types and URLs. In case of videos with no sound, the app
        integrates with VLC Media Player to enable sound, ensuring an improved
        viewing experience. Your data is never stored on a server; all content
        and changes are saved locally on your device. No server-side storage
        means your privacy is maintained.
      </p>
      <RjMovieView />
    </div>
  );
};

export default RJMovies;
