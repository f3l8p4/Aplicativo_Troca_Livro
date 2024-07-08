// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookListScreen from './screens/Lists/BooksListScreen';
import BookRegisterScreen from './screens/BookRegisterScreen';
import { BookProvider } from './db/BookContexts';

const Stack = createStackNavigator();

const App = () => {
  return (
    <BookProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="BookList" component={BookListScreen} />
          <Stack.Screen name="BookRegister" component={BookRegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BookProvider>
  );
};

export default App;
