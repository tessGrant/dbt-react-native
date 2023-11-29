export interface Repo {
  id: number;
  name: string;
  stargazers_count: number;
  forks: number;
  description: string;
}

export interface Profile {
  name: string;
  login: string;
  avatar_url: string;
}

export interface State {
  repos: Repo[];
  starredByMeRepos: Repo[];
  owner: Profile;
}
