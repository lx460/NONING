package com.fivenonjangi.noning.data.repository;

import com.fivenonjangi.noning.data.entity.board.BoardData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardDataRepository extends JpaRepository<BoardData, Long> {
}