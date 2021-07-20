import { NavLink } from 'react-router-dom';
import { isEmpty } from 'ramda';

export const Links = ({ user }) => (
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      {!isEmpty(user) && (
        <NavLink
          to="/favorites"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          activeClassName="text-white"
        >
          Favorites
        </NavLink>
      )}
      <NavLink
        to="/jokes"
        className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
        activeClassName="text-white"
      >
        Jokes
      </NavLink>
    </div>
  </div>
);
