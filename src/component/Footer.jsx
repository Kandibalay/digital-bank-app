import React from "react";

function Footer() {
  const socialIcons = [
    { src: "./images/icon-facebook.svg", alt: "Facebook" },
    { src: "./images/icon-youtube.svg", alt: "YouTube" },
    { src: "./images/icon-twitter.svg", alt: "Twitter" },
    { src: "./images/icon-pinterest.svg", alt: "Pinterest" },
    { src: "./images/icon-instagram.svg", alt: "Instagram" },
  ];

  const links1 = ["About Us", "Contact", "Blog"];
  const links2 = ["Careers", "Support", "Privacy Policy"];

  return (
    <footer className="w-full bg-blue-950 text-white py-10 px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:justify-between md:items-start">
        
        {/* Logo and social icons */}
        <div className="flex flex-col items-center md:items-start">
          <a href="/">
            <img 
              src="./images/logo.svg"

              alt="Logo"
              className="mb-6 w-32"
            />
          </a>
          <div className="flex gap-4">
            {socialIcons.map((icon, index) => (
              <a href="/" key={index}>
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="h-6 w-6 hover:opacity-75 transition"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 text-center md:text-left">
          {links1.map((text, index) => (
            <a
              href="/"
              key={index}
              className="hover:text-green-400 transition"
            >
              {text}
            </a>
          ))}
        </nav>

        <nav className="flex flex-col gap-2 text-center md:text-left">
          {links2.map((text, index) => (
            <a
              href="/"
              key={index}
              className="hover:text-green-400 transition"
            >
              {text}
            </a>
          ))}
        </nav>

        {/* Call to Action and Copy */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <button className="rounded-full bg-gradient-to-r from-green-500 to-[#2bb8d3] px-6 py-2 font-semibold text-white hover:from-green-600 hover:to-green-800 transition">
  Request Invite
</button>
          <p className="text-sm text-gray-400">&copy; Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
