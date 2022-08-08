import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CommentItem from './CommentItem';
import ReplyTestData from './ReplyTestData';
import ReplyList from './ReplyList';

function CommentList({comment, boardId}) {
  console.log('CommentList : ' + boardId);
  const [commentIsopened, setCommentIsopened] = useState(false);
  const [commentData, setCommentData] = useState(comment);
  const [replys, setReplys] = useState([]);
  // 여기서 사실 boardId에 게시판 ID에 대한게 필요해,.,.
  useEffect(() => {
    // comment.commentId 를 이용해 답글들을 가져온다
    setReplys(ReplyTestData);
  }, []);

  const renderItem = ({item}) => (
    <ReplyList
      reply={item}
      boardId={boardId}
      commentIsopened={commentIsopened}
      setCommentIsopened={setCommentIsopened}
    />
  );

  return (
    <View style={{marginVertical: '2%'}}>
      <CommentItem
        commentData={commentData}
        setCommentData={setCommentData}
        commentIsopened={commentIsopened}
        setCommentIsopened={setCommentIsopened}
        isReply={false}></CommentItem>
      {commentIsopened ? (
        <View style={{marginTop: '2%'}}>
          <FlatList
            data={replys}
            renderItem={renderItem}
            keyExtractor={reply => reply.id}
            scrollEnabled={false}
          />
        </View>
      ) : (
        ''
      )}
    </View>
  );
}

const styles = StyleSheet.create({});

export default React.memo(CommentList);
