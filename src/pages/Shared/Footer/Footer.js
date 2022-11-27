import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-accent">
      <span className="text-sm text-white font-semibold sm:text-center ">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Crazy Resale Deals
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-white font-semibold sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;