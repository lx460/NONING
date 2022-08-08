import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Text, TextInput} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import CommentScreen from './CommentScreen';
import AnalysisScreen from './AnalysisScreen';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#FF5A6E',
      width: '20%',
      marginHorizontal: '9.5%',
    }}
    tabStyle={{
      paddingBottom: '6%',
      paddingTop: '1%',
    }}
    pressColor={'transparent'}
    style={{
      backgroundColor: 'white',
      shadowColor: 'white',
      borderBottomWidth: 0.3,
      borderBottomColor: '#808080',
      borderTopWidth: 0.3,
      borderTopColor: '#808080',
      height: '13%',
    }}
    renderLabel={({route, focused}) => (
      <Text
        style={
          focused
            ? {
                color: '#FF5A6E',
                margin: 0,
                padding: 0,
                fontWeight: 'bold',
                fontSize: 15,
                width: '110%',
              }
            : {margin: 0, padding: 0, color: '#808080', fontSize: 15}
        }>
        {route.title}
      </Text>
    )}
  />
);

const initialLayout = {width: Dimensions.get('window').width};

export default function DetailScreen({navigation, route}) {
  const boardId = route.params.boardId; // 현재 페이지 . api를 통해 데이터를 가져와야한다.
  // /api/boards/{boardId} : 게시글
  // /api/boards/{boardId}/comments/list : 댓글창
  // 더보기 -> /api/boards/{boardId}/comments/{commentId}/list : 대댓글 불러오기
  // /api/boards/{boardId}/comments/{commentId}/ like, dislike
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 0, title: '댓글'},
    {key: 1, title: '분석'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 0:
        return <CommentScreen navigation={navigation} boardId={boardId} />;
      case 1:
        return <AnalysisScreen navigation={navigation} boardID={boardId} />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 2.4, borderWidth: 2}}>
        <Text>DetailScreen1</Text>
      </View>
      <View style={{flex: 0.4, borderWidth: 2}}>
        <Text>DetailScreen2</Text>
      </View>
      <View style={{flex: 3.2, marginTop: '1%'}}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '1%',
    paddingHorizontal: '7%',
    backgroundColor: 'white',
  },
});
