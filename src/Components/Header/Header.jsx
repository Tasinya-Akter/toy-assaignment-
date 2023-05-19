import React, { useContext, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import style from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";
import { themeContext } from "../../Firebase/AuthProvider";
import img from "../../assets/img/Logo.png";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { user, loader, logOut } = useContext(themeContext);
  const handleMenuIcon = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("first");
      })
      .catch();
  };

  const myNav = (
    <>
      <NavLink
        to="/my_toy"
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-primary border-b-2 border-primary"
            : "font-semibold"
        }
      >
        My Toys
      </NavLink>
      <NavLink
        to="/add_toy"
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-primary border-b-2 border-primary"
            : "font-semibold"
        }
      >
        Add A Toy
      </NavLink>
      <NavLink to="/login" onClick={handleLogOut}>
        Log out
      </NavLink>
    </>
  );

  return (
    <header className="w-full z-[15] bg-white h-[80px] flex items-center shadow-lg">
      <div className="container mx-auto  py-[60px] px-3 md:px-0">
        <div className="flex items-center  justify-between">
          <img src={img} className="w-[146px] h-[10]" alt="" />
          {/* <h3 className='text-3xl font-bold text-rose-600'>myBrand</h3> */}
          <ul className="hidden lg:flex lg:items-center gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-primary border-b-2 border-primary"
                  : "font-semibold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-primary border-b-2 border-primary"
                  : "font-semibold"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/all_toys"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-primary border-b-2 border-primary"
                  : "font-semibold"
              }
            >
              All Toys
            </NavLink>
            {user ? (
              myNav
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={`text-primary py-2 px-8 rounded-lg font-semibold font-Jost border border-primary hover:bg-primary hover:text-white transition`}
                >
                  Log In
                </NavLink>
                <NavLink
                  to="/register"
                  className={`text-white py-2 px-8 rounded-lg font-semibold font-Jost border border-primary bg-primary hover:bg-white hover:text-primary transition`}
                >
                  Sign Up
                </NavLink>
              </>
            )}
            {user && (
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  src={user.photoURL}
                  className="w-10 h-10 rounded-full"
                  alt="img"
                />
              </div>
            )}
          </ul>
          {/* menubar  */}
          <div className="lg:hidden">
            {mobileMenu ? (
              <HiX
                onClick={handleMenuIcon}
                className="text-3xl hover:cursor-pointer font-semibold"
              />
            ) : (
              <HiMenu
                className="text-3xl hover:cursor-pointer font-semibold"
                onClick={handleMenuIcon}
              />
            )}

            {/* mobile menu responsive  */}
            <div
              className={`${
                mobileMenu ? style.active : ""
              } lg:hidden bg-primary  ${style.mobile} ${style.myHeader}`}
            >
              <ul className="container mx-auto">
                <NavLink
                  to="/"
                  onClick={handleMenuIcon}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-white border-b-2 border-white"
                      : "font-semibold"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/blog"
                  onClick={handleMenuIcon}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-white border-b-2 border-white"
                      : "font-semibold"
                  }
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/all_toys"
                  onClick={handleMenuIcon}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-white border-b-2 border-white"
                      : "font-semibold"
                  }
                >
                  All Toys
                </NavLink>
                {user ? (
                  <>
                    <NavLink
                      to="/my_toy"
                      onClick={handleMenuIcon}
                      className={({ isActive }) =>
                        isActive
                          ? "font-semibold text-white border-b-2 border-white"
                          : "font-semibold"
                      }
                    >
                      My Toys
                    </NavLink>
                    <NavLink
                      to="/add_toy"
                      onClick={handleMenuIcon}
                      className={({ isActive }) =>
                        isActive
                          ? "font-semibold text-white border-b-2 border-white"
                          : "font-semibold"
                      }
                    >
                      Add A Toy
                    </NavLink>
                    <NavLink to="/login" onClick={handleLogOut}>
                      Log out
                    </NavLink>
                  </>
                ) : (
                  <div className={`${style.extra}`}>
                    <NavLink
                      to="/login"
                      onClick={handleMenuIcon}
                      className={`text-white py-2 px-8 rounded-lg font-semibold font-Jost border border-white hover:bg-white hover:text-primary transition`}
                    >
                      Log In
                    </NavLink>
                    <NavLink
                      to="/register"
                      onClick={handleMenuIcon}
                      className={`text-white py-2 px-8 rounded-lg font-semibold font-Jost border border-white hover:bg-white hover:text-primary transition`}
                    >
                      Sign Up
                    </NavLink>
                  </div>
                )}
                {user && (
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip={user.displayName}
                  >
                    <img
                      src={user.photoURL}
                      className="w-10 h-10 rounded-full"
                      alt="img"
                    />
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
