import {StyleSheet} from 'react-native';


export default StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  icon: {
    fontSize: 20,
    color: '#000',
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
  balanceText: {
    fontSize: 32,
    color: '#000',
    fontWeight: '600',
    marginBottom: 3,
    marginTop: 25,
  },
  balanceSubText: {
    fontSize: 14,
    color: '#6E8798',
    fontWeight: '400',
    marginBottom: 30,
  },
  quickSendIcon: {
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#91D6FD',
  },
  quickSendText: {
    fontSize: 12,
    color: '#000',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
  },
  addContactButton: {
    alignItems: 'center',
    rowGap: 10,
  },
});
