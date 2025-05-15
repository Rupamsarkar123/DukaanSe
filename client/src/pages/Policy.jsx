import React from "react";
import Layout from "../components/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacies & Policies - Dukaanse"}>
      <div className="container py-5">
        <h1 className="text-center mb-4 text-primary fw-bold">
          Privacy & Policy
        </h1>
        <div className="card shadow-sm border-0 p-4">
          <h3 className="mb-3 text-success">1. Data Collection</h3>
          <p>
            At Dukaanse, we collect basic user information such as name, email
            address, shipping address, and payment details only to ensure a
            seamless shopping experience. All data is securely stored and never
            shared with third parties without consent.
          </p>

          <h3 className="mb-3 text-success">2. Payment Information</h3>
          <p>
            All transactions on Dukaanse are processed securely via Braintree, a
            trusted payment gateway. We do not store your card details on our
            servers. Your data is encrypted and protected according to industry
            standards.
          </p>

          <h3 className="mb-3 text-success">3. Cookies</h3>
          <p>
            We use cookies to enhance user experience, save cart items, and
            understand browsing behavior. Users can manage or disable cookies
            through browser settings.
          </p>

          <h3 className="mb-3 text-success">4. User Rights</h3>
          <p>
            Users can update or delete their accounts at any time. We respect
            your right to data privacy and offer tools to manage or delete
            personal information.
          </p>

          <h3 className="mb-3 text-success">5. Policy Updates</h3>
          <p>
            Dukaanse may update this policy periodically to reflect changes in
            legal or business practices. Users will be notified via email or app
            alerts.
          </p>

          <h3 className="mb-3 text-success">6. Contact Us</h3>
          <p>
            For any questions related to this policy, you can reach us at{" "}
            <a href="mailto:support@dukaanse.com">www.help@DukaanSe.com</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
