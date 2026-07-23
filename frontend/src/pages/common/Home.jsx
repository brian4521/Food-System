import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef(new Map());
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if ((!video) instanceof HTMLVideoElement) return;
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            // Autoplay visible video
            video.play().catch(() => {
              /* ignore autoplay errors */
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: [0.5] },
    );

    videoRefs.current.forEach((video) => {
      observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        observer.unobserve(video);
      });
    };
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setVideos(response.data.foodItems);
      })
      .catch((err) => {
        console.log("error while fetching fooditems", err);
      });
  }, []);

  return (
    <main className="home-feed" ref={containerRef}>
      {videos.map((food) => (
        <section key={food._id} className="feed-slide">
          <video
            ref={(el) => {
              if (el) videoRefs.current.set(food._id, el);
            }}
            className="feed-video"
            src={food.video}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
          />

          <div className="feed-overlay">
            <div className="feed-content">
              <p>{food.description}</p>
              <Link
                to={"/food-partner/" + food.foodPartner}
                target="_blank"
                rel="noreferrer"
                className="visit-store-btn"
              >
                Visit Store
              </Link>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Home;
