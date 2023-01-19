import React from "react";
import WithRouterSample from "./WithRouterSample";

const profileData = {
  velopert: {
    name: "김민준",
    description: "Frontend Engineer",
  },
  homer: {
    name: "호머 심슨",
    description: "Backend Engineer",
  },
};

function Profile({ match }) {
  console.log(match);

  const { username } = match.params;
  console.log(username);

  const profile = profileData[username];
  console.log(profile);

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  } else {
    return (
      <div>
        <h3>
          {username} ({profile.name})
        </h3>
        <p>{profile.description}</p>
        <WithRouterSample/>
      </div>
    );
  }
}

export default Profile;
