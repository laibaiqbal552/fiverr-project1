import React from "react";
import Img1 from "./../../images/Brand-logo.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="flex items-center justify-between py-6 overflow-hidden">
      <div>
        <img src={Img1} alt="" className="rotate-[-13deg]" />
      </div>
      <div className="md:flex hidden items-center xl:gap-12 gap-5 text-white ">
        <ul className="flex xl:gap-12 gap-5">
          {menu.map(({ id, name, link }) => {
            return (
              <li key={id} className="xl:text-2xl text-lg">
                {name}
              </li>
            );
          })}
        </ul>
        <button className="bg-[#030304] rounded-2xl border lg:px-8 px-4 py-1 border-white">
          Contact
        </button>
      </div>
      <div className="md:hidden block ">
        <button onClick={toggleDrawer}>
          <FiMenu className="text-3xl text-white" />
        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="!bg-[#131313]"
        >
          <div className=" ">
            <ul className="flex flex-col  text-lg fpnt bold gap-2 p-5 text-white">
              {menu.map(({ id, name, link }) => {
                return <li key={id}>{name}</li>;
              })}
            </ul>
            <button className="text-white ml-5 rounded-2xl border px-4 py-1 border-white">
              Contact
            </button>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;

const menu = [
  {
    id: 1,
    name: "Home",
    link: "",
  },
  {
    id: 2,
    name: "About",
    link: "",
  },
  {
    id: 3,
    name: "Booking",
    link: "",
  },
];
