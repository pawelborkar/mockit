import { AiFillGithub } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="#" className="btn btn-ghost normal-case text-xl">
          D.A.P.I.
        </a>
      </div>
      <div className="flex-none">
        <a
          href="https://github.com/pawelborkar/dynamic-api"
          target="__blank"
          className="btn btn-square btn-ghost"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
