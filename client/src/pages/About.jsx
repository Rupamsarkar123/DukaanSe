import React from "react";
import Layout from "./../components/Layout";

const About = () => {
  return (
    <Layout title={"About Us- DukaanSe"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to DukaanSe, your one-stop destination for all your shopping
            needs! We are committed to providing a seamless and enjoyable
            shopping experience for our customers by offering a wide range of
            high-quality products at affordable prices. Whether you're shopping
            for your home, lifestyle, fashion, or daily essentials, DukaanSe has
            it all.At DukaanSe, our mission is simple – to bridge the gap
            between trusted sellers and valued customers while delivering
            unparalleled convenience. We strive to empower buyers across India
            by offering a platform that prioritizes choice, quality, and trust.
            Join the DukaanSe family today and experience the joy of shopping
            like never before. Your journey to a smarter, more convenient
            shopping experience begins here!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
