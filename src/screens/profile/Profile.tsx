import * as React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../types/rootStackParams';
import { styles } from './Profile.style';

const Profile = ({}: NativeStackScreenProps<RootStackParamList, 'ProfileScreen'>) => {
  return (
    <SafeAreaView style={styles.fullScreen}>
      <View style={styles.centerContainer }>
          <Text>Profile Screen</Text>
      </View>
      </SafeAreaView>
  );
};

export default Profile;
