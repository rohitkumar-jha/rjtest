import React from "react";
import RjGalleryView from "../components/RjGalleryView";

const RJGallery = () => {
  return (
    <div className="bible-view-container">
      <h1>RJ Gallery App Disclaimer</h1>
      <p>
        Welcome to <b>RJ Gallery</b>, a simple and efficient media gallery app
        designed for seamless viewing and management of your images and videos.
        Our goal is to provide a clean, ad-free experience where you can easily
        browse, zoom in, zoom out, and delete media files stored on your mobile
        device.
      </p>
      <RjGalleryView />
    </div>
  );
};

export default RJGallery;
