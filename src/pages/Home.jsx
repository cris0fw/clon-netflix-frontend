import React, { useState } from "react";
import Header from "../components/Header";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section>
      <Header languaje={true} signIn={true} />

      <div className="relative">
        <div className="absolute z-30 inset-0 flex flex-col gap-5 items-center justify-center">
          <h1 className="text-white text-center font-lato text-5xl font-extrabold">
            Unlimited movies, TV shows, and more
          </h1>
          <h2 className="text-white text-center font-lato text-2xl font-extrabold">
            Watch anywhere. Cancel anytime.
          </h2>
          <h2 className="text-white text-center font-lato text-xl font-extrabold">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h2>

          <button
            onClick={() => navigate("/register")}
            className="bg-rojo flex gap-3 rounded-sm text-white font-bold p-4 text-2xl items-center hover:bg-bordo"
          >
            Get Started <MdKeyboardArrowRight size="30px" />
          </button>
        </div>
        <div className="absolute z-10 inset-0 bg-black opacity-70"></div>

        <img
          src="https://genotipia.com/wp-content/uploads/2020/04/Netflix-Background-prueba-1-1536x864.jpg"
          alt="banner"
          className="w-screen h-screen object-cover"
        />
      </div>
    </section>
  );
};

export default Home;
