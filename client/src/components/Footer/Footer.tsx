/*
component: Footer
author: Pawel Borkar <pawel@duck.com>
Date: 16 January, 2023
*/

import { ImHeart, ImTwitter, ImLinkedin, ImGithub } from 'react-icons/im';
import { MdApi } from 'react-icons/md';
const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <MdApi />
        Made with by <ImHeart />
        <a href="https://pawel.in" target="__blank">
          Pawel
        </a>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://twitter.com/pawelsb" target="__blank">
          <ImTwitter />
        </a>
        <a href="https://linkedin.com/in/pawelborkar" target="__blank">
          <ImLinkedin />
        </a>
        <a href="https://github.com/pawelborkar" target="__blank">
          <ImGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
