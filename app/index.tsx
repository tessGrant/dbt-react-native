import { Redirect } from 'expo-router';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { api } from './src/redux/apiSlice';

const App = () => {
  return <Redirect href={'/(tabs)/home'} />;
};

export default App;
