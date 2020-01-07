// import { State } from "react-native-gesture-handler";
import { Repo, State } from "../interfaces";


export const getStarredRepos = (state: State, stRepo: Repo): any[] => {
    const existingIndex = state.starredByMeRepos.findIndex((repo: Repo) => repo.id === stRepo.id);
    if(existingIndex >= 0) {
        const updatedStarredRepos = [...state.starredByMeRepos];
        updatedStarredRepos.splice(existingIndex, 1);
        return updatedStarredRepos;
    } else {
        const iRepo = state.repos.find(
            (repo: Repo) => repo.id === stRepo.id);
        return state.starredByMeRepos.concat(iRepo)
    }
}
