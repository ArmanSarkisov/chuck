export const Input = ({
  register,
  control,
  id,
  type = 'text',
  placeholder,
  name,
}) => (
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    id={id}
    type={type}
    placeholder={placeholder}
    {...register(name)}
    control={control}
  />
);
