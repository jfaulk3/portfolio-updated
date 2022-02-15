import React from "react";
import image from "../splash-image.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Programmer desktop and laptop"
        className="absolute object-cover w-full h-full contrast-50"
      />
      <section className="relative flex justify-left min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-black-100 font-bold cursive leading-none lg:leading-snug home-name">
          Hello! I'm Jimmie
        </h1>
      </section>
    </main>
  );
}
