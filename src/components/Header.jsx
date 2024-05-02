import React, { useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout, resetState } from "../fuatures/user/userSlice";

const Header = ({ languaje, signIn }) => {
  const [idioma, setIdioma] = useState(false);
  const navigate = useNavigate();
  const userState = useSelector((state) => state.auth.user);
  const [showTooltip, setShowTooltip] = useState(false);
  const [select, setSelect] = useState(false);
  const dispatch = useDispatch();

  const handleSelectIdioma = () => {
    setIdioma(!idioma);
  };

  const handleSelected = () => {
    setSelect(!select);
  };

  const signOff = () => {
    dispatch(logout());
    dispatch(resetState());
    localStorage.clear();

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <header className="absolute z-50  w-full bg-gradient-to-b from-black">
      <div className="container px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <img
            className="w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png"
            alt="netflix logo"
          />
          {userState === null ? (
            ""
          ) : (
            <div className="text-white text-xl flex gap-3">
              <Link to="/browse">Home</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/series">Series</Link>
              <Link to="/my-list">My List</Link>
            </div>
          )}
        </div>

        {userState ? (
          <>
            <div className="flex items-center gap-4">
              <Link to="/search" className="bg-rojo h-11 p-3">
                <FaSearch color="white" />
              </Link>

              <div className="relative">
                <img
                  className="w-11 rounded-full"
                  src={userState?.imagen[0]}
                  alt="perfil de netflix"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  onClick={handleSelected}
                />
                {showTooltip && (
                  <div className="absolute w-24 text-sm left-7 top-6 bg-white text-center font-bold text-cyan-400 cursor-pointer">
                    {userState?.fullName || useState?.nombre}
                  </div>
                )}
                {select && (
                  <div className="absolute w-[100px] text-negro h-auto top-16 left-[-20px]  flex flex-col items-center mt-1 bg-white border z-50 shadow transition-opacity">
                    <section className="w-full cursor-pointer justify-center transition-color duration-500 p-1 flex items-center hover:bg-[#E2E8F0]">
                      <Link to="/profile">Edit Profile</Link>
                    </section>
                    <section
                      onClick={signOff}
                      className="w-full justify-center cursor-pointer transition-color duration-500 p-1 flex items-center hover:bg-[#E2E8F0]"
                    >
                      <p>Logout</p>
                    </section>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center">
            {languaje && (
              <div className="relative">
                <div
                  onClick={handleSelectIdioma}
                  className="w-[130px] h-[12px] font-bold text-white border-white border-1 border-solid cursor-pointer bg-black flex justify-between items-center py-4 px-3"
                >
                  <IoLanguage />
                  <p>English</p>
                  <IoMdArrowDropdown />
                </div>
                {idioma && (
                  <div className="absolute w-[130px] text-negro h-auto top-full right-[-2px] flex flex-col items-center mt-1 bg-white border z-50 shadow transition-opacity">
                    <section className="w-full cursor-pointer  flex justify-center font-bold items-center hover:bg-azul hover:text-white">
                      <p>Español</p>
                    </section>
                    <section className="w-full cursor-pointer  flex justify-center font-bold items-center hover:bg-azul hover:text-white">
                      <p>English</p>
                    </section>
                  </div>
                )}
              </div>
            )}
            {signIn && (
              <button
                onClick={() => navigate("/login")}
                className="bg-rojo text-white font-bold px-3 rounded-sm py-1"
              >
                Sign in
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
