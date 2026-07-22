import React from "react";

const videos = [
  {
    id: 1,
    src: "https://ik.imagekit.io/qvibcgnr3/1b50a766-9ef3-4029-b34b-aae8f2b58727_N0WNFvUfx",
    description:
      "Freshly grilled tacos with bold sauces, crunchy slaw, and a late-night flavor punch that keeps customers coming back.",
    storeURL: "https://example.com/tacos",
  },
  {
    id: 2,
    src: "https://ik.imagekit.io/qvibcgnr3/1b50a766-9ef3-4029-b34b-aae8f2b58727_N0WNFvUfx",
    description:
      "Sugar-free treats, creamy panna cotta, and handcrafted pastries served in a dreamy pastel setup.",
    storeURL: "https://example.com/desserts",
  },
  {
    id: 3,
    src: "https://ik.imagekit.io/qvibcgnr3/1b50a766-9ef3-4029-b34b-aae8f2b58727_N0WNFvUfx",
    description:
      "Juicy smash burgers, crispy fries, and a cozy dining atmosphere made for your next comfort-food craving.",
    storeURL: "https://example.com/burgers",
  },
];

const Home = () => {
  return (
    <main className="home-feed">
      {videos.map((video) => (
        <section key={video.id} className="feed-slide">
          <video
            className="feed-video"
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />

          <div className="feed-overlay">
            <div className="feed-content">
              <p>{video.description}</p>
              <a
                href={video.storeURL}
                target="_blank"
                rel="noreferrer"
                className="visit-store-btn"
              >
                Visit Store
              </a>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Home;
