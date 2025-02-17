import axios from "axios";

export const fetchGitHubRepos = async () => {
  try {
    const response = await axios.get('https://api.github.com/user/repos', {
      headers: {
        Authorization: `Bearer ${import.meta.env.GITHUB_SPARTUS_TOKEN}`,
      },
    });

    const sortedRepos = response.data.sort((a, b) => {
      const dateA = new Date(a.updated_at);
      const dateB = new Date(b.updated_at);
      return dateB - dateA;
    });

    return sortedRepos; 
  } catch (error) {
    console.error('Error al cargar los repositorios:', error);
    throw new Error('Error al cargar los repositorios.');
  }
};
