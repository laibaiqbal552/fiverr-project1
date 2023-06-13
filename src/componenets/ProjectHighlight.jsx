import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Project1 from "./../images/project1.png";
import Project2 from "./../images/project2.png";
import Project3 from "./../images/project3.png";
import Project4 from "./../images/project4.png";
const ProjectHighlight = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col md:mb-16 mb-6 item-center">
        <h1 className="text-white md:mb-8 mb-4 text-center  md:text-4xl text-3xl font-bold syne">
          My Projects Highlight
        </h1>
        <button className=" flex justify-center  text-base items-center gap-2 bg-transparent mx-auto max-w-[180px] w-full px-5 py-1 border-[#FF9142] text-[#F4F7FA] rounded-2xl border">
          Explore Works
          <AiOutlineArrowRight />
        </button>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
        {Projects.map((project) => {
          return (
            <div key={project.id} className="max-w-[550px] w-full mb-6">
              <div>
                <img
                  src={project.img}
                  alt=""
                  className="max-w-[550px] mx-auto w-full h-full object-fit -rotate-[13deg]"
                />
              </div>
              <div className="ml-12">
                <p className="text-white h1 mb-4 relative text-lg  font-bold syne">
                  {project.name}
                </p>
                <div className="flex gap-8 text-white text-sm">
                  <p className="text-[#606060]">client:</p>
                  <p>{project.client}</p>
                </div>
                <div className="flex  gap-8 text-white text-sm">
                  <p className="text-[#606060]">work:</p>
                  <p>{project.work}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectHighlight;
const Projects = [
  {
    id: 1,
    img: Project1,
    name: "Brand Journey Improvements",
    client: "Organc",
    work: "Branding Logo design",
  },
  {
    id: 2,
    img: Project2,
    name: "Brand Grouping",
    client: "FR",
    work: "Branding Logo design",
  },
  {
    id: 3,
    img: Project3,
    name: "NFT Glimps",
    client: "Rumanda",
    work: "NFT Design",
  },
  {
    id: 4,
    img: Project4,
    name: "Brand Suggestions",
    client: "T3d",
    work: "NFT logo",
  },
];
