import { Home } from '@screens';
import { FC } from 'react';
import { StatusBar } from 'react-native';

const App: FC = () => (
  <>
    <Home />
    <StatusBar barStyle="dark-content" translucent />
  </>
);

export default App;
