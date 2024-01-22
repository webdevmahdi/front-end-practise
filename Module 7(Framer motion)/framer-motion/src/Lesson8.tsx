import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const Lesson8 = () => {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref);

  return (
    <div className="border border-red-500 size-[500px] flex justify-center items-center">
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
        ref={ref}
        animate={
          inView
            ? { opacity: 1, x: 0, transition: { delay: 0.7 } }
            : { opacity: 0, x: -500 }
        }
      ></motion.div>
    </div>
  );
};

export default Lesson8;
