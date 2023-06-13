import React from "react";
import Layout from "./componenets/Layout";
import Hero from "./componenets/Hero";
import GetKnowAbout from "./componenets/GetKnowAbout";
import ProjectHighlight from "./componenets/ProjectHighlight";
import Testimonial from "./componenets/Testimonial";
import Footer from "./componenets/Footer";
const App = () => {
  return (
    <div>
      <div className="bg-primary overflow-x-hidden">
        <div className="container  px-5 mx-auto">
          <Layout />
          <Hero />
          <GetKnowAbout />
          <ProjectHighlight />
          <Testimonial />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
