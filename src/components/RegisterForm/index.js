import { useEffect } from 'react';
import { useStore } from 'effector-react';

// store
import { errorEvents, errorState } from '../../store';

// components
import { FormField } from '../common/FormField';

export const RegisterForm = ({
  handleSubmit,
  handleSendData,
  errors,
  control,
  register,
}) => {
  const { errors: apiErrors = {}, message } = useStore(errorState.error);

  useEffect(() => () => errorEvents.setErrorEvent({}), []);

  return (
    <form
      className="bg-white w-2/4 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-32"
      onSubmit={handleSubmit(handleSendData)}
    >
      {apiErrors?.length && (
        <div className="text-center text-red-500">
          {apiErrors.map(({ msg, param }) => (
            <p>
              <span>{`${msg} `}</span>
              <span>{param}</span>
            </p>
          ))}
        </div>
      )}
      {message && (
        <div className="text-center text-red-500">
          <p>{message}</p>
        </div>
      )}
      <FormField
        control={control}
        register={register}
        message={errors.email?.message}
        type="email"
        text="Email"
        inputId="email"
        placeholder="Email"
        name="email"
      />
      <FormField
        control={control}
        register={register}
        message={errors.username?.message}
        type="text"
        text="Username"
        inputId="username"
        placeholder="Username"
        name="username"
      />
      <FormField
        control={control}
        register={register}
        message={errors.password?.message}
        type="password"
        text="Password"
        inputId="password"
        placeholder="********"
        name="password"
      />
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};
