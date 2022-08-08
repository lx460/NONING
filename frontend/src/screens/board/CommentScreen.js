import {useIsFocused} from '@react-navigation/native';
import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, FlatList, TextInput} from 'react-native';
import CommentList from '../../components/boardDetail/CommentList';
import CommentTestData from '../../components/boardDetail/CommentTestData';
import UseAxios from '../../util/UseAxios';
import UserContext from '../../util/UserContext';

function CommentScreen({navigation, boardId}) {
  const isFocused = useIsFocused();
  const [comments, setComments] = useState([]);
  const {setBoardUserData, setBoardId} = useContext(UserContext);
  console.log('Comment Screen : ' + boardId);
  useEffect(() => {
    UseAxios.get(`/boards/${boardId}/comments/list`).then(res => {
      setComments(res.data);
    });
  }, [isFocused]);

  useEffect(() => {
    UseAxios.get(`/boards/${boardId}/users`).then(res => {
      setBoardUserData(res.data);
      setBoardId(boardId);
    });
  }, []);

  const renderItem = ({item}) => (
    <CommentList comment={item} boardId={boardId} />
  );

  return (
    <View style={styles.scene}>
      <FlatList
        data={comments}
        renderItem={renderItem}
        keyExtractor={item => item.commentId}
      />
      <TextInput></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: '2%',
  },
});

export default CommentScreen;
