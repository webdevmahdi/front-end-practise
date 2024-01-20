import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...input : unknown[]) => {
  return twMerge(clsx(input))
};

export default cn;
