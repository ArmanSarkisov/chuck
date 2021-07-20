import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// store
import { userEffects } from '../../store';

// components
import { LoginForm } from '../../components/LoginForm';

const schema = yup.object().shape({
  identifier: yup.string().required(),
  password: yup.string().min(6).max(32).required(),
});

export const Login = () => {
  const { push } = useHistory();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const handleSendData = async (data) => {
    const res = await userEffects.loginEffect(data);

    if (res) {
      await push('/favorites');
    }
  };

  return (
    <div className="w-full flex items-center flex-col justify-center">
      <LoginForm
        register={register}
        control={control}
        errors={errors}
        handleSendData={handleSendData}
        handleSubmit={handleSubmit}
      />
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};
