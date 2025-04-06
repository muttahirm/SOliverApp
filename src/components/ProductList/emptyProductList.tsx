import {Text, View} from 'react-native';
import {styles} from './productList.styles';

export const emptyProductList = () => {

  return (
    <View style={styles.emptyListContainer}>
      <Text style={styles.emptyListTitle}>Keine Produkte gefunden</Text>
      <Text style={styles.emptyListSubtitle}>
        Deine ausgewählten Such- oder Filtereinstellungen stimmen leider mit
        keinem unserer Produkte überein. Bitte ändere deine Einstellungen.
      </Text>
    </View>
  );
};
