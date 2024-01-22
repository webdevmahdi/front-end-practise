import { motion, useCycle } from "framer-motion";
import { useRef } from "react";

const Lesson7 = () => {
    const animationValues = [
        {x: 0, y: 0},
        {x: 100, y: 100},
        {x: -100, y: -100},
        {x: 200, y: 200},
    ]
  const [animate, cycle] = useCycle(...animationValues);
  const ref = useRef(null);



  return (
    <div className="border border-red-500 size-[500px] flex justify-center items-center">
      <motion.div
        animate={animate}
        onTap={()=> cycle()}
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
        ref={ref}
      ></motion.div>
    </div>
  );
};

export default Lesson7;
