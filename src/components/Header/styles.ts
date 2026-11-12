import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 44,
  },
  side: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
  },
  title: {
    color: '#F5F3F7',
    flex: 1,
    fontSize: 17,
    lineHeight: 23,
    textAlign: 'center',
  },
  backIcon: {
    color: '#B0ABC3',
  },
  bellIcon: {
    color: '#87758D',
  },
  notificationDot: {
    backgroundColor: '#AF6083',
    borderColor: '#181219',
    borderRadius: 5,
    borderWidth: 1,
    height: 9,
    position: 'absolute',
    right: 0,
    top: 1,
    width: 9,
  },
});
