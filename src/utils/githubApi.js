import axios from "axios";

const fetchGithubData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export default fetchGithubData;
