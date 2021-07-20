import { useStore } from 'effector-react';

// store
import { userState } from '../../store';

// components
import { HeaderActions } from './HeaderActions';
import { BrandName } from './BrandName';
import { Links } from './Links';

export const Header = () => {
  const user = useStore(userState.user);

  return (
    <header className="bg-indigo-500">
      <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
        <BrandName />
        <Links user={user} />
        <HeaderActions user={user} />
      </nav>
    </header>
  );
};
