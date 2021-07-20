import { useCallback } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { isEmpty } from 'ramda';

// store
import { userEffects } from '../../../store/user';
import { Button } from '../../common/Button';

export const HeaderActions = ({ user }) => {
  const { push } = useHistory();

  const handleLogout = useCallback(() => {
    userEffects.userLogoutEffect();
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    push('/auth/login');
  }, []);

  return (
    <div>
      {isEmpty(user) ? (
        <>
          <NavLink
            to="/auth/login"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-blue-500 hover:text-teal hover:bg-teal mt-4 lg:mt-0"
          >
            Login
          </NavLink>
          <NavLink
            to="/auth/sign-up"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-blue-500 hover:text-teal hover:bg-teal mt-4 lg:mt-0 ml-5"
          >
            Sign-up
          </NavLink>
        </>
      ) : (
        <Button text="Logout" onClick={handleLogout} />
      )}
    </div>
  );
};
