import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import image from "../images/author-splash-image.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

export default function About() {
  const [author, setAuthor] = useState(null);

  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name, 
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author)
    return (
      <main className="relative">
        <img
          src={image}
          alt="a computer filled with code"
          className="absolute w-full"
        />
        <div>Loading...</div>
      </main>
    );
  return (
    <main className="about-background">
      <div className="container">
        <section className="bg-gray-800 rounded-lg shadow-2xl lg:flex">
          <img
            src={urlFor(author.authorImage).url()}
            alt={author.name}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hey! I'm <span className="text-green-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="fe67loqs"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
