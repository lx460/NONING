import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CommentItem from './CommentItem';

function ReplyList({reply, commentIsopened, setCommentIsopened, boardId}) {
  const [replyData, setReplyData] = useState(reply);
  console.log('ReplyList : ' + boardId);
  return (
    <View style={{marginVertical: '2%'}}>
      <CommentItem
        commentData={replyData}
        boardId={boardId}
        setCommentData={setReplyData}
        commentIsopened={commentIsopened}
        setCommentIsopened={setCommentIsopened}
        isReply={true}></CommentItem>
    </View>
  );
}

const styles = StyleSheet.create({});

export default React.memo(ReplyList);
