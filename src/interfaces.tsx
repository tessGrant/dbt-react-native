export interface Repo {
    id: number,
    name: string,
    stargazers_count: number,
    forks: number,
    description: string,
    owner: {
        avatar_url: string,
        login: string
    }
};

export interface State  {
    repos: any,
    starredByMeRepos: any
};