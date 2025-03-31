import StatsCount from "./StatsCount";
import "./UserProfile.css"

import InfoDisplay from "./InfoDisplay";
import IconLocation from "../icons/IconLocation";
import IconWebsite from "../icons/IconWebsite";
import IconCompany from "../icons/IconCompany";
import IconTwitter from "../icons/IconTwitter";


function UserProfile({ className, userProfileData }) {
  const data = userProfileData;
  const date = data && data.joined_at;

  if (!data) {
    return (
      <div className={`profile-container data-loading ${className}`}>
        <p className="message-text text-secondary-color">Please wait, loading data...</p>
      </div>
    );
  }

  if (data === "error") {
    return (
      <div className={`profile-container data-loading ${className}`}>
        <p className="message-text message-text-error">An error occurred while loading data.</p>
        <p className="message-text message-text-error">Please try again later.</p>
      </div>
    );
  }


  // return (
  //   <div className={`profile-container ${className}`}>
  //     <img className="avatar-img" src={data.avatar_url}/>
  //   </div>
  // )


  return (
    <div className={`profile-container ${className}`}>
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
        className={`location ${data.location ? "text-primary-color" : "text-unavailable"}`}
        info={data.location || "Not Available"}
      >
        <IconLocation 
          className={`${data.location ? "icon-primary-color" : "icon-unavailable"}`}
        />
      </InfoDisplay>
    
      <InfoDisplay
        className={`website ${data.blog ? "text-primary-color" : "text-unavailable"}`}
        info={data.blog || "Not Available"}
        link={
            data.blog &&
            (data.blog.substring(0, 7) === "http://" 
            || data.blog.substring(0, 8) === "https://"
            ? data.blog : `https://${data.blog}`)
        }
      >
        <IconWebsite 
          className={`${data.blog ? "icon-primary-color" : "icon-unavailable"}`}
        />
      </InfoDisplay>
  
      <InfoDisplay
        className={`twitter ${data.twitter ? "text-primary-color" : "text-unavailable"}`}
        info={(data.twitter && `@${data.twitter}`) || "Not Available"}
        link={
          data.twitter &&
          `https://x.com/${encodeURIComponent(data.twitter)}`
        }
      >
        <IconTwitter 
          className={`${data.twitter ? "icon-primary-color" : "icon-unavailable"}`}
        />
      </InfoDisplay>

      <InfoDisplay 
        className={`company ${data.company ? "text-primary-color" : "text-unavailable"}`}
        info={data.company || "Not Available"}
      >
        <IconCompany 
          className={`${data.company ? "icon-primary-color" : "icon-unavailable"}`}
        />
      </InfoDisplay>
    </div>
  )
}

export default UserProfile;