import React from "react";
import { HelloWorld } from "./another";
import Home from "./Home";
const App = () => {
  return (
    <React.Fragment>
      <div>This is a fakira react app.</div>
      <HelloWorld></HelloWorld>
      <Home></Home>
    </React.Fragment>
  );
};

// const renderTally = () => {
//   const tallyArray = Array.from({ length: count }, (_, index) => (
//     <span
//       key={index}
//       className={
//         index > 0 && (index + 1) % 5 === 0
//           ? "relative right-3 text-[#000]"
//           : "tracking-[-0.10em]"
//       }
//     >
//       {index > 0 && (index + 1) % 5 === 0 ? "/" : "|"}
//     </span>
//   ));
//   return tallyArray;
// };

export default App;
