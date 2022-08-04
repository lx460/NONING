package com.fivenonjangi.noning.service;

import com.fivenonjangi.noning.data.dto.board.BoardRequestDTO;
import com.fivenonjangi.noning.data.dto.board.BoardResponseDTO;
import com.fivenonjangi.noning.data.dto.user.UserResponseDTO;
import com.fivenonjangi.noning.data.entity.board.Board;

import java.util.List;
import java.util.Map;

public interface BoardService {
    void writeBoard(BoardRequestDTO boardRequestDTO, long userId);
    void deleteBoard(long boardId);
    List<BoardResponseDTO> getBoardList(long userId, String categoryCode);
    BoardResponseDTO getBoard(long userId, long boardId);
    Map<String, List<UserResponseDTO>> getParticipate(long boardId);

}