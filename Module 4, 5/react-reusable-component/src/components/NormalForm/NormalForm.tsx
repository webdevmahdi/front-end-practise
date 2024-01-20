import { FieldValues, FormProvider, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../../ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, TNormalForm } from "./validation";
import InputField from "./InputField";

const NormalForm = () => {
  const methods = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  console.log(watch("name"));

  const double = true;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn("rounded-md mt-3 shadow-2xl w-full p-5 mx-auto", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
      >
        <div
          className={cn("grid grid-cols-1 justify-items-center gap-5", {
            "md:grid-cols-2": double,
          })}
        >
          <div className="w-full max-w-md">
            <label htmlFor="something" className="block">
              Something
            </label>
            <InputField></InputField>
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <div className="w-full max-w-md">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email?.message}</span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="text"
              id="password"
              className="w-full"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-600">{errors.password?.message}</span>
            )}
          </div>
          {/* <div className="w-full max-w-md">
          <label htmlFor="select" className="block">
            Select
          </label>
          <select>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
            <option>Four</option>
            <option>Five</option>
          </select>
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="name" className="block">
            Select
          </label>
          <textarea></textarea>
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="name" className="block">
            Select
          </label>
          <input className="" type="checkbox" />
        </div> */}
        </div>
        <div
          className={cn("grid grid-cols-1 justify-items-center gap-5 my-8", {
            "md:grid-cols-2": double,
          })}
        >
          <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
            <Button className="w-full md:w-fit" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default NormalForm;
