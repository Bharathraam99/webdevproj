import React from "react";
import Feed from "../Feed/feed";
import NavigationSidebar from "../nav";
import { useNavigate } from "react-router-dom";

const TrainerRequestPage = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      profilePicture: "../images/john.jpg",
      username: "John Doe",
      height: "6'0''",
      weight: "180 lbs",
    },
    {
      profilePicture: "../images/john.jpg",
      username: "Jane Smith",
      height: "5'7''",
      weight: "150 lbs",
    },
    // Add more profiles as needed
  ];

  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Feed />
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-4 wd-nav">
          <NavigationSidebar />
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1"></div>
        <div className="col-lg-6 col-md-8 col-sm-7">
          <h2 className="mb-4">Pending Requests</h2>
          {profiles.map((profile, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src={profile.profilePicture}
                    alt="Profile"
                    className="rounded-circle me-3"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div>
                    <h5 className="card-title">{profile.username}</h5>
                    <p className="card-text">
                      Height: {profile.height} | Weight: {profile.weight}
                    </p>
                  </div>
                </div>
                <button
                  className="btn btn-primary mt-3 mt-sm-0"
                  onClick={() => navigate("/routineassign")}
                >
                  Assign Routine
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerRequestPage;
