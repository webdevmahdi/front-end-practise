import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const Lesson6 = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start((i) => ({ x: 200, transition: { delay: i * 1 } }));
  }, []);

  return (
    <div
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => controls.start((i) => ({ x: 200, transition: { delay: i * 1 }, }))}
      className="border border-red-500 size-[500px] flex flex-col justify-center items-center"
    >
      <motion.div
        animate={controls}
        custom={1}
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
      ></motion.div>
      <motion.div
        animate={controls}
        custom={2}
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
      ></motion.div>
      <motion.div
        animate={controls}
        custom={3}
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
      ></motion.div>
    </div>
  );
};

export default Lesson6;
