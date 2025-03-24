export default function processApiData(data) {

  console.log(data);

  return {
    avatar_url: getField("avatar_url", data),
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
  const day = addZeroPrefix(date.getDate());
  const month = addZeroPrefix(date.getMonth() + 1);
  const monthStr = date.toLocaleString('en-EN', { month: 'long' }).substring(0, 3);
  const year = date.getFullYear();

  return {
    date:  `Joined ${day} ${monthStr} ${year}`,
    day,
    month,
    year
  }
}

function addZeroPrefix(number) {
  return number < 10 ? `0${number}` : `${number}`;
}