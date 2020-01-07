import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReposHeaderButton = (props: any) => {
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={'#000000'} />
};

export default ReposHeaderButton;