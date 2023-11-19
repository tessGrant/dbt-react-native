import 'jest';
import { getStarredRepos } from '../app/src/store/utils';
import { Repo } from '../app/src/types';

const testRepo: Repo = {
  id: 123,
  name: '',
  stargazers_count: 333,
  forks: 333,
  description: '',
  owner: {
    avatar_url: '',
    login: '',
  },
};

describe('getStarredRepos', () => {
  it('should star a non-starred repo', () => {
    const state = {
      repos: [testRepo],
      starredByMeRepos: [],
    };
    const starredRepos = getStarredRepos(state, testRepo);
    expect(starredRepos).toEqual([testRepo]);
  });
  it('should unstar a starred repo', () => {
    const state = {
      repos: [testRepo],
      starredByMeRepos: [testRepo],
    };
    const starredRepos = getStarredRepos(state, testRepo);
    expect(starredRepos).toEqual([]);
  });
});
