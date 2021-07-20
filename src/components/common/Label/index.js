import classNames from 'classnames';

export const Label = ({ error, text, htmlFor }) => (
  <label
    className={classNames('block text-gray-700 text-sm font-bold mb-2', {
      'text-red-700': !!error,
    })}
    htmlFor={htmlFor}
  >
    <span>{error || text}</span>
  </label>
);
