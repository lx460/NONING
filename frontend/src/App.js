import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import BottomTabsNav from './navigations/BottomTabsNav';
import UserContext from './util/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [userData, setUserData] = useState({});
  const [boardUserData, setBoardUserData] = useState([]);
  const [boardId, setBoardId] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const value = await AsyncStorage.getItem('userdata');
      const data = JSON.parse(value);
      setUserData(data);
    };
    getData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        boardUserData,
        setBoardUserData,
        boardId,
        setBoardId,
      }}>
      <NavigationContainer>
        <BottomTabsNav />
      </NavigationContainer>
    </UserContext.Provider>
  );
}
