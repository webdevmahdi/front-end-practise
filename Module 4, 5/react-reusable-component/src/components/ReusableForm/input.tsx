export const Input = ({register, errors, type, level}) => {
  return (
    <div className="w-full max-w-md">
      <label htmlFor="name" className="block">
        {level}
      </label>
      <input type={type} id="name" {...register} />
      {errors.email && (
        <span className="text-red-600">This field is required</span>
      )}
    </div>
  );
};