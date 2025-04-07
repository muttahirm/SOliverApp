import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  buttonTitle: {
    fontSize: 14,
  },
  button: {
    paddingRight: 2,
    paddingVertical: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },  buttonBase: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonEnabled: {
    backgroundColor: '#000',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
