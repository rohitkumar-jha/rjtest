import React from "react";

const EducationPlus = () => {
  return (
    <div style={{ margin: 10 }}>
      <h2>Privacy Policy and Terms of Service</h2>
      <p>
        Education Plus is dedicated to safeguarding the privacy and security of
        its users. This Privacy Policy outlines how Education Plus collects,
        uses, and protects the information provided by users of the app.
      </p>
      <div className="language-panel">
        <h2>Information Collection and Use:</h2>
        <p>
          Personal Information: Education Plus may collect personal information
          such as student names, parent/guardian names, email addresses, phone
          numbers, and demographic information (e.g., age, grade level) to
          facilitate user accounts and provide personalized services.
        </p>
        <p>
          Student Data: Education Plus may collect student attendance records,
          exam results, assignment submissions, and performance metrics to
          enable parents/guardians to track their child's academic progress.
        </p>
      </div>

      <div className="language-panel">
        <h2>Data Usage:</h2>
        <p>
          Usage of Information: Personal information collected by Education Plus
          is used to create and manage user accounts, provide academic updates
          and notifications, and improve the app's functionality and user
          experience.
        </p>
        <p>
          Third-Party Services: Education Plus may utilize third-party services
          (e.g., cloud storage providers, communication platforms) to deliver
          certain features and functionalities. These third parties may collect
          and process user data in accordance with their own privacy policies.
        </p>
      </div>

      <div className="language-panel">
        <h2>Data Security:</h2>
        <p>
          Security Measures: Education Plus employs industry-standard security
          measures to protect against unauthorized access, disclosure,
          alteration, or destruction of user data. This includes encryption of
          sensitive information and regular security assessments.
        </p>
      </div>

      <div className="language-panel">
        <h2>User Controls:</h2>
        <p>
          Parental Controls: Parents/guardians have the right to review and
          manage the personal information of their child within the app. They
          may also opt out of certain data collection and processing activities
          by adjusting account settings.
        </p>
        <p>
          Data Access and Modification: Users can request access to or
          modification of their personal information by contacting Education
          Plus through the provided contact information.
        </p>
      </div>

      <div className="language-panel">
        <h2>Policy Changes:</h2>
        <p>
          Updates: Education Plus reserves the right to update or modify this
          Privacy Policy at any time. Users will be notified of any material
          changes to the policy through the app or via email.
        </p>
      </div>

      <p>
        By using Education Plus, you signify your acceptance of this Privacy
        Policy and Terms of Service. If you do not agree to this policy, please
        do not use Education Plus.
      </p>
    </div>
  );
};

export default EducationPlus;
