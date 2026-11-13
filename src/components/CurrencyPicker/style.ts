

export const styles = StyleSheet.create({
  backdrop: {
     flex: 1,
      justifyContent: 'center', 
      alignItems: 'center',
       backgroundColor: '#0009',
        padding: 20 },
  panel: { 
    backgroundColor: '#211E27', 
    borderRadius: 22, gap: 12,
     maxHeight: '85%',
      maxWidth: 440, 
      padding: 16,
       width: '100%' },
  header: { 
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
     gap: 12 },
  title: { 
    color: '#F5F3F7',
     flexShrink: 1,
     fontSize: 20, 
     fontWeight: '600' },
  close: {
     alignItems: 'center',
      justifyContent: 'center',
       minHeight: 44, 
       minWidth: 44 },
  search: {
     backgroundColor: '#141216',
      borderRadius: 10, 
      color: '#F5F3F7',
       fontSize: 16,
        minHeight: 44,
         paddingHorizontal: 12 },
  list: { 
    flexGrow: 0,
     flexShrink: 1 },
  option: {
     alignItems: 'center',
      borderRadius: 10,
       flexDirection: 'row',
        gap: 10, padding: 8 },
  selected: { 
    backgroundColor: '#35303D' },
  name: { 
    flex: 1 },
  symbol: { 
    color: '#F5F3F7', 
    fontSize: 16,
     fontWeight: '600' },
  secondary: { 
    color: '#D6D0DF', 
    fontSize: 14, 
    fontVariant: ['tabular-nums'] },
  empty: { 
    color: '#D6D0DF',
     padding: 12 },
});
