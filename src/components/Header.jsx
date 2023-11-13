import { useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import {
  AiOutlineHeart,
  AiOutlineMobile,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

import { MdCamera, MdComputer, MdHeadphones, MdWatch } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
const Header = () => {
  const { currentUser } = UserAuth();
  console.log(currentUser);
  const location = useLocation();
  console.log(location.pathname);
  const navigate = useNavigate();
  return (
    <>
      <div className="py-4  flex md:px-16 px-2 items-center gap-8 justify-center">
        {/* LOGO */}
        <span className="font-semibold">Z-COMMERCE</span>

        {/* LOGO */}

        {/* SEARCH BOX */}
        <span className="flex items-center md:flex hidden">
          <AiOutlineSearch
            size={20}
            className=" relative text-gray-500 top-[1px] left-[24px]"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input bg-base-200 px-8 max-w-[433px] max-h-10"
          />
        </span>

        {/* SEARCH BOX */}

        {/* PAGES LINKS LI*/}
        <div className="lg:flex items-center gap-8 hidden lg:block">
          <span
            className={
              location.pathname == "/"
                ? " font-semibold cursor-pointer"
                : "cursor-pointer"
            }
          >
            Home
          </span>
          <span
            className={
              location.pathname == "/about"
                ? " font-semibold cursor-pointer"
                : "cursor-pointer"
            }
          >
            About
          </span>
          <span
            className={
              location.pathname == "/contact"
                ? " font-semibold cursor-pointer"
                : "cursor-pointer"
            }
          >
            Contact Us
          </span>
          <span
            className={
              location.pathname == "/blog"
                ? " font-semibold cursor-pointer"
                : "cursor-pointer"
            }
          >
            Blog
          </span>
        </div>
        {/* PAGES LINKS LI*/}

        {/* LOGOS */}
        <span>
          <AiOutlineHeart size={20} />
        </span>

        <span>
          <AiOutlineShoppingCart size={20} />
        </span>

        {currentUser ? (
          <>
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </div>
          </>
        ) : (
          <span onClick={() => navigate("/login")} className="cursor-pointer">
            <AiOutlineUser size={20} />
          </span>
        )}

        {/* LOGOS */}
      </div>

      <div className=" lg:flex hidden  py-4 bg-[#2E2E2E]  flex md:px-16 px-2 items-center gap-8 justify-between md:divide-x-2 flex-wrap">
        <div className="text-slate-200 cursor-pointer px-4 flex items-center gap-3">
          <AiOutlineMobile />
          Phone
        </div>
        <div className=" text-slate-200 px-4 flex items-center gap-3 cursor-pointer">
          <MdComputer />
          Computers
        </div>
        <div className="text-slate-200  px-4 flex items-center gap-3 cursor-pointer">
          <MdWatch />
          Smart Watches
        </div>
        <div className="text-slate-200  px-4 flex items-center gap-3 cursor-pointer">
          <MdCamera />
          Cameras
        </div>
        <div className="text-slate-200  px-4 flex items-center gap-3 cursor-pointer">
          <MdHeadphones />
          Headphones
        </div>
        <div className="text-slate-200  px-4 flex items-center gap-3 cursor-pointer">
          <SiYoutubegaming />
          Gaming
        </div>
      </div>
    </>
  );
};

export default Header;
