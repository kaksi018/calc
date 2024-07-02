import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View style={styled.container}>
      <Text>글을 입력합니다</Text>
    </View>
  );
};

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
