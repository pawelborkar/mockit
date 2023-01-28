/*
component: NavBar
@Author: Pawel Borkar <pawel@duck.com>
Date: 15 January, 2023
*/

import { ImGithub } from 'react-icons/im';

const Navbar = () => {
  return (
    <div className="navbar text-slate-900 bg-red-100">
      <div className="flex-1">
        <a href="#" className="btn btn-ghost normal-case text-xl">
          Mockit
        </a>
      </div>
      <div className="flex-none">
        <a
          href="https://github.com/pawelborkar/mockit"
          target="__blank"
          className="btn btn-square btn-ghost"
        >
          <ImGithub />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
