export default function processApiData(data) {
  return {
    name: getField("name", data),
    login: getField("login", data),
    location: getField("location", data),
    bio: getField("bio", data),
    followers: getField("followers", data),
    following: getField("following", data),
    repos: getField("public_repos", data),
    twitter: getField("twitter_username", data),
    company: getField("company", data),
    blog: getField("blog", data),
    joined_at: formatingDate(getField("created_at", data))
  };
}

function getField(field, data) {
  if (!field || !data || !data.hasOwnProperty(field))
    return null;
  return data[field];
}

function formatingDate(timeDate) {
  const date = new Date(timeDate);
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = date.toLocaleString('en-EN', { month: 'long' }).substring(0, 3);
  const year = date.getFullYear();
  return `Joined ${day} ${month} ${year}`;
}