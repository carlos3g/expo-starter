import { StyleSheet } from 'react-native';

import { colors } from '@styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
});

export { styles };
