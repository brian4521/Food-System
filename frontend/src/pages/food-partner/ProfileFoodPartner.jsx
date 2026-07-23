import React, { useEffect, useState } from "react";
import "../../styles/profileFoodPartner.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProfileFoodPartner = () => {
  const { id } = useParams();

  console.log("here is id", id);
  const [profile, setprofile] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/food-partner/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("here is response", response.data.foodPartner);
        setprofile(response.data.foodPartner);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const videos = Array.from({ length: 21 }, (_, i) => ({
    id: i + 1,
    src: "https://ik.imagekit.io/qvibcgnr3/1b50a766-9ef3-4029-b34b-aae8f2b58727_N0WNFvUfx",
    title: `Video ${i + 1}`,
  }));

  return (
    <main
      className="profile-page"
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <section className="profile-header">
        <div className="profile-meta">
          <div className="profile-avatar" aria-hidden="true">
            <img src={profile.profileImage} alt="Profile" />
          </div>

          <div className="profile-info">
            <h1 className="profile-pill profile-business" title="Business name">
              {profile.name}
            </h1>
            <p className="profile-pill profile-address" title="Address">
              {profile.address}
            </p>
          </div>
        </div>

        <div className="profile-stats" role="list">
          <div className="stat" role="listitem">
            <div className="stat-label">Total Meals</div>
            <div className="stat-value">{profile.totalMeals}</div>
          </div>
          <div className="stat" role="listitem">
            <div className="stat-label">Customer Served</div>
            <div className="stat-value">{profile.customerServed}</div>
          </div>
        </div>
      </section>

      {/* Videos Grid Section */}
      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <span className="video-placeholder">video</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProfileFoodPartner;
