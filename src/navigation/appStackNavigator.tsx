import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import RepoDetails from "../screens/repoDetails";
import AllRepos from "../screens/allRepos";

const ReposNavigator = createStackNavigator({
    AllRepos: AllRepos,
    RepoDetails: {
        screen: RepoDetails
    }
});

export default createAppContainer(ReposNavigator);