import { Label } from '../Label';
import { Input } from '../Input';

export const FormField = ({
  message,
  control,
  register,
  text,
  type,
  inputId,
  placeholder,
  name,
}) => (
  <div className="mb-4">
    <Label text={text} error={message} htmlFor={inputId} />
    <Input
      type={type}
      id={inputId}
      placeholder={placeholder}
      name={name}
      control={control}
      register={register}
    />
  </div>
);
