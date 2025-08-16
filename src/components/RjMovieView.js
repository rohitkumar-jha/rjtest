import React from "react";

const RjMovieView = () => {
  return (
    <div>
      <h2>App Policy Statement</h2>
      <div className="language-panel">
        <h2>No Data Collection:</h2>
        <p>
          RJ Gallery is built with user privacy in mind. We do not collect,
          store, or share any of your media files or personal data. All images
          and videos remain on your device, and no data is uploaded to external
          servers or cloud storage. Your privacy and security are our top
          priorities.
        </p>
      </div>
      <div className="language-panel">
        <h2>No Tracking:</h2>
        <p>
          We do not track your usage or any other activities related to your
          viewing habits.
        </p>
      </div>
      <div className="language-panel">
        <h2>Use of Third-Party Services:</h2>
        <p>
          The app integrates with VLC Media Player for enabling sound on videos.
          We do not control or store any data that VLC may collect. Please
          review VLC's privacy policy for more information on how it handles
          your data.
        </p>
      </div>
      <div className="language-panel">
        <h2>Data Security:</h2>
        <p>
          Since all data is stored locally on your device, you are responsible
          for securing and managing your data. We do not access, store, or
          transmit any of your data outside of your device.
        </p>
      </div>
      <div className="language-panel">
        <h2>Children’s Privacy:</h2>
        <p>
          The app is not intended for use by children under the age of 13, and
          we do not knowingly collect any personal data from children.
        </p>
      </div>
      <div className="language-panel">
        <h2>Disclaimer:</h2>
        <p>
          RJ Movies does not host, store, or share any video content. It only
          provides a way to manage and view videos from external sources by
          inputting video URLs.
        </p>
        <p>
          RJ Movies cannot be held liable for any content accessed or streamed
          through the app. Users must ensure they have the legal right to access
          the content.
        </p>
        <p>
          The app integrates with VLC Media Player for sound functionality. By
          using this feature, you agree to the terms of VLC's privacy policy and
          terms of use.
        </p>
        <p>
          {" "}
          No data is stored or transmitted to external servers. All data remains
          on your device's local storage.
        </p>
      </div>
    </div>
  );
};

export default RjMovieView;
