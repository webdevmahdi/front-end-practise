import { createContext } from "react";
import cn from "../../utils/cn";
import { TForm } from "../../types";

export const FormElementContext = createContext<{ double: boolean } | null>(null);

export const Form = ({ children, onSubmit, double = false } : TForm) => {
  return (
    <FormElementContext.Provider value={{double}}>
      <form
        onSubmit={onSubmit}
        className={cn("rounded-md mt-3 shadow-2xl w-full p-5 mx-auto", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
      >
        {children}
      </form>
    </FormElementContext.Provider>
  );
};
