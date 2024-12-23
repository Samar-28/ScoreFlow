import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import GLogin from "../components/GLogin";
import userContext from "../context/user/userContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { currUser } = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (currUser != null) {
      navigate("/tests");
    }
  }, [currUser]);
  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-b from-stone-900 from- via-stone-950 to-black text-white h-screen w-full">
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <motion.img
          src="/logo.png"
          alt="logo"
          className="w-32 h-32"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        <motion.h1
          className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <span className="block">Welcome to</span>
          <motion.span
            className="text-green-500 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ScoreFlow !
          </motion.span>
        </motion.h1>
        <motion.p
          className="mt-4 text-xl font-semibold sm:text-xl text-stone-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="block">Please Login To Continue</span>
          <span>Make Sure To Use College G-Suite</span>
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <GLogin />
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
