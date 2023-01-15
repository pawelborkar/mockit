import { ImGithub } from 'react-icons/im';

const Navbar = () => {
  return (
    <div className="navbar bg-red-100">
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
          <ImGithub />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
