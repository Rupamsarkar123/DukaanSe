import React from "react";
import Layout from "./../components/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Us - DukaanSe"}>
      <div className="container py-4" style={{ paddingBottom: "5rem" }}>
        <div className="row align-items-center contactus g-4">
          {/* Image Column */}
          <div className="col-md-6 col-12">
            <img
              src="/images/contact.jpg"
              alt="Contact Us"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Contact Info Column */}
          <div className="col-md-6 col-12">
            <div className="bg-dark text-white text-center p-3 rounded d-flex align-items-center justify-content-center gap-2">
              <img
                src="/ecomservice.svg"
                alt="DukaanSe Logo"
                width="40"
                height="40"
                style={{ filter: "invert(1)" }}
              />
              <h2 className="mb-0">Contact Us</h2>
            </div>

            <p className="mt-4 text-muted">
              For any queries or information regarding our products, feel free
              to contact us anytime. We are available <strong>24/7</strong> to
              assist you.
            </p>

            <p className="mt-3 d-flex align-items-center gap-2">
              <BiMailSend size={20} /> <span>help@DukaanSe.com</span>
            </p>
            <p className="mt-2 d-flex align-items-center gap-2">
              <BiPhoneCall size={20} /> <span>012-3456789</span>
            </p>
            <p className="mt-2 d-flex align-items-center gap-2">
              <BiSupport size={20} /> <span>1800-0000-0000 (Toll Free)</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
