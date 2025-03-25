import StatsCount from "./StatsCount";
import "./UserProfile.css"

import iconLocation from "../../assets/icon-location.svg";
import iconWebsite from "../../assets/icon-website.svg";
import iconTwitter from "../../assets/icon-twitter.svg";
import iconCompany from "../../assets/icon-company.svg";
import InfoDisplay from "./InfoDisplay";


import IconWebsite from "../icons/IconWebsite";

function UserProfile({ userProfileData }) {
  const data = userProfileData;
  const date = data && data.joined_at;
  
  if (!data)
    return <p>Loading...</p>;

  return (
    <div className="profile-container">

      <IconWebsite />

      <img className="avatar-img" src={data.avatar_url}/>

      <div className="name-username-container">
        <h2 className="name text-secondary-color">{data.name}</h2>
        <p className="username">@{data.login}</p>
      </div>

      <time 
        className="creation-date"
        dateTime={`${date.year}-${date.month}-${date.day}`}
      >
        {date.date}
      </time>

      <p className="bio text-primary-color">{data.bio}</p>

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

      <InfoDisplay
        className="location"
        icon={iconLocation}
        alt={"Location Icon"}
        info={data.location}
      />
      <InfoDisplay
        className="website"
        icon={iconWebsite}
        alt={"Website Icon"}
        info={data.blog}
        link={
          data.blog.substring(0, 7) === "http://" 
          || data.blog.substring(0, 8) === "https://"
          ? data.blog : `https://${data.blog}`
        }
      />
      <InfoDisplay
        className="twitter"
        icon={iconTwitter}
        alt={"Twitter Icon"}
        info={data.twitter && `@${data.twitter}`}
        link={`https://x.com/${encodeURIComponent(data.twitter)}`}
      />
      <InfoDisplay
        className="company"
        icon={iconCompany}
        alt={"Company Icon"}
        info={data.company}
      />
    </div>
  )
}

export default UserProfile;