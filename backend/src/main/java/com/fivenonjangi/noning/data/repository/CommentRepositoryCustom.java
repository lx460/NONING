package com.fivenonjangi.noning.data.repository;

import com.fivenonjangi.noning.data.dto.comment.CommentResponseDTO;

import java.util.List;

public interface CommentRepositoryCustom {
    List<CommentResponseDTO> findByBoardId(long boardId, long userId); // 댓글
    List<CommentResponseDTO> findByCommentId(long boardId, long commentId, long userId); // 대댓글

}
