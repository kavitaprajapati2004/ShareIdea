import React from "react";
import "../styles/Profile.css";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const currentDate = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const currentTime = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const motivations = [
    "Dream big, start small, but start today!",
    "Your ideas can change the world — keep going!",
    "Believe in yourself. You are capable of amazing things!",
    "Every step forward counts — don’t stop!",
  ];

  const randomLine = motivations[Math.floor(Math.random() * motivations.length)];

  return (
    <div className="profile-page">
      <div className="profile-card">

        <h1>Your Profile</h1>

        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="profile"
          className="profile-img"
        />

        <p className="profile-date">
          {currentDate} | {currentTime}
        </p>

        {!user ? (
          <h3 className="profile-error">User not logged in.</h3>
        ) : (
          <div className="profile-info">
            <p>
              <strong>Name:</strong> {user.fullName || "Not provided"}
            </p>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <hr />

            <p className="profile-motivation">🌟 {randomLine}</p>
          </div>
        )}

      </div>
    </div>
  );
}
