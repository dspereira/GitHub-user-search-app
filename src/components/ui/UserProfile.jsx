import StatsCount from "./StatsCount";
import "./UserProfile.css"

import iconLocation from "../../assets/icon-location.svg";
import InfoDisplay from "./InfoDisplay";

function UserProfile({ userProfileData }) {
  const data = userProfileData;
  const date = data && data.joined_at;
  
  if (!data)
    return <p>Loading...</p>;

  return (
    <div className="profile-container">

      <div className="name-date-container">
        <div className="name-username-container">
          <h2>{data.name}</h2>
          <p>@{data.login}</p>
        </div>
        <time 
          dateTime={`${date.year}-${date.month}-${date.day}`}
        >
          {date.date}
        </time>
      </div>
      <p>{data.bio}</p>

      <div className="stats-count-container">
        <StatsCount 
          statName={"Repos"}
          statCount={data.repos}
        />
        <StatsCount 
          statName={"Followers"}
          statCount={data.followers}
        />
        <StatsCount 
          statName={"Following"}
          statCount={data.following}
        />
      </div>

      {/* <img src={iconLocation} alt=""/>
      <p>San Francisco</p> */}

      <InfoDisplay 
        icon={iconLocation}
        alt={"Location Icon"}
        info={data.location}
        link={`https://www.google.com/maps?q=${encodeURIComponent(data.location)}`}
      />

    </div>
  )
}

export default UserProfile;