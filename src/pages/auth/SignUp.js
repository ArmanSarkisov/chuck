import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

// store
import { userEffects } from '../../store';

// components
import { RegisterForm } from '../../components/RegisterForm';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().min(6).max(32).required(),
});

export const Register = () => {
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
    const res = await userEffects.registerEffect(data);

    if (res) {
      push('/auth/login');
    }
  };

  return (
    <div className="w-full flex items-center flex-col justify-center">
      <RegisterForm
        register={register}
        control={control}
        errors={errors}
        handleSendData={handleSendData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
