import React from "react";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
];

export default function LogoCarousel() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-marquee space-x-16">
        {logos.concat(logos).map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="logo"
            className="h-16 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}
