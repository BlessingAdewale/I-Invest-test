import { Redirect } from 'expo-router';

if (__DEV__) {
  require('../ReactotronConfig');
}

function App() {
  return <Redirect href="/home" />;
}

export default App;
