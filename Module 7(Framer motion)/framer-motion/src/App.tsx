import { useRef } from "react";
import "./App.css";
import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 0.5,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  hover: {
    opacity: 1
  },
  tap: {
    scale:1.1,
    boxShadow: "0px 10px 10px #5955"
  }
};
function App() {
  const parentRef = useRef(null);
  return (
    <div ref={parentRef} className="border border-xl border-red-500 justify-center items-center size-[500px]">
      <motion.div
        className="size-64 bg-purple-900 border rounded-xl flex flex-wrap gap-5 p-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        onHoverStart={() => console.log("Hovered")}
        onHoverEnd={() => console.log("Hover ended")}
        drag
        dragElastic={0.2}
        dragConstraints={parentRef}
        whileTap="tap"
      ></motion.div>
    </div>
  );
}

export default App;
