import { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

const Home: FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Open up App.tsx to start working on your app!
    </Text>
  </View>
);

export { Home };
