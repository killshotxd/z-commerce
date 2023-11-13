import { useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
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
        <span className="flex items-center">
          <AiOutlineSearch
            size={20}
            className=" relative text-gray-500 top-[1px] left-[24px]"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input bg-base-200 px-8 w-[433px] max-h-10"
          />
        </span>

        {/* SEARCH BOX */}

        {/* PAGES LINKS LI*/}
        <div className="flex items-center gap-8">
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
    </>
  );
};

export default Header;
