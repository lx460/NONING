import React, {useContext} from 'react';
import HomeScreen from '../screens/bottomTab/HomeScreen';
import DetailNav from '../navigations/DetailNav';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginNav from './LoginNav';
import SearchNav from './SearchNav';
import UserContext from '../util/UserContext';
import YourPageScreen from '../screens/YourPageScreen';
import FollowerScreen from '../screens/FollowerScreen';
import FollowingScreen from '../screens/FollowingScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function HomeStack() {
  const {userData, setUserData} = useContext(UserContext);
  return (
    <Stack.Navigator>
      {userData === null ? ( // 로그인 X
        <>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginNav"
            component={LoginNav}
            options={{title: '로그인', headerShown: false}}
          />
          <Stack.Screen
            name="SearchNav"
            component={LoginNav}
            options={{title: '검색', headerShown: false}}
          />
          <Stack.Screen
            name="DetailNav"
            component={DetailNav}
            options={{title: '디테일'}}
          />
          <Stack.Screen
            name="YourPageScreen"
            component={YourPageScreen}
            options={{title: '유저페이지'}}
          />
          <Stack.Screen
            name="FollowerScreen"
            component={FollowerScreen}
            options={{title: '팔로워페이지', headerShown: false}}
          />
          <Stack.Screen
            name="FollowingScreen"
            component={FollowingScreen}
            options={{title: '팔로잉페이지', headerShown: false}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SearchNav"
            component={SearchNav}
            options={{title: '검색', headerShown: false}}
          />
          <Stack.Screen
            name="DetailNav"
            component={DetailNav}
            options={{title: '디테일'}}
          />
          <Stack.Screen
            name="YourPageScreen"
            component={YourPageScreen}
            options={{title: '유저페이지', headerShown: false}}
          />
          <Stack.Screen
            name="FollowerScreen"
            component={FollowerScreen}
            options={{title: '팔로워페이지', headerShown: false}}
          />
          <Stack.Screen
            name="FollowingScreen"
            component={FollowingScreen}
            options={{title: '팔로잉페이지', headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default HomeStack;
