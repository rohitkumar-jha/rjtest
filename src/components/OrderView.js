import React from "react";

function OrderView() {
  return (
    <div>
      <h2>App Policy Statement</h2>
      <div className="language-panel">
        <h2>General Information:</h2>
        <p>
          The information provided on Orderzz is for general informational
          purposes only. While we strive to keep the information up to date and
          correct, we make no representations or warranties of any kind, express
          or implied, about the completeness, accuracy, reliability,
          suitability, or availability with respect to the App or the
          information, products, services, or related graphics contained on the
          App for any purpose. Any reliance you place on such information is
          therefore strictly at your own risk.
        </p>
      </div>

      <div className="language-panel">
        <h2>User Responsibility:</h2>
        <p>
          Users of the App are responsible for ensuring the accuracy,
          completeness, and suitability of all information provided, including
          but not limited to supplier details, product listings, and order
          requests. We do not endorse or guarantee the quality, safety, or
          legality of any products or services offered by suppliers listed on
          the App.
        </p>
      </div>

      <div className="language-panel">
        <h2>Order Processing:</h2>
        <p>
          The order processing functionality provided by Orderzz is a tool for
          facilitating communication between users and suppliers. We are not
          responsible for any disputes, delays, damages, or losses arising from
          the processing, acceptance, rejection, or fulfillment of orders placed
          through the App.
        </p>
      </div>

      <div className="language-panel">
        <h2>Transaction History:</h2>
        <p>
          While we endeavor to provide accurate transaction history data, we do
          not guarantee the completeness, accuracy, or timeliness of such
          information. Users should verify transaction details independently
          before relying on them for any purpose.
        </p>
      </div>
      <div className="language-panel">
        <h2>Limitation of Liability:</h2>
        <p>
          In no event will we be liable for any loss or damage including,
          without limitation, indirect or consequential loss or damage, or any
          loss or damage whatsoever arising from loss of data or profits arising
          out of, or in connection with, the use of this App.
        </p>
      </div>
      <div className="language-panel">
        <h2>Changes to Disclaimer:</h2>
        <p>
          We reserve the right to modify or replace this disclaimer at any time
          without prior notice. Your continued use of the App after any such
          changes constitutes your acceptance of the new disclaimer.
        </p>

        <p>
          By using the Orderzz mobile application, you acknowledge that you have
          read, understood, and agreed to be bound by this disclaimer. If you do
          not agree with any part of this disclaimer, you must not use the App.
        </p>
      </div>
    </div>
  );
}

export default OrderView;
