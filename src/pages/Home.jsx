import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store";
import { CustomButton } from "../components";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...headContainerAnimation}>
          <motion.header>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <h1 className="head-text">
              LET'S <br className="xd:block hidden" /> DO IT.
            </h1>
          </motion.div>
          <motion.div
            {...headContainerAnimation}
            className="flex flex-col gap-5"
          >
            <p className="max-w-md font-normal text-gray-600 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              molestias, ipsum fugiat enim id corrupti eligendi? Mollitia,
              doloremque beatae officiis laudantium, eveniet vel cupiditate quis
              cumque officia, aliquam sint est.
            </p>
            <CustomButton
              type="filled"
              title="Customize It"
              handleClick={() => (state.intro = false)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
