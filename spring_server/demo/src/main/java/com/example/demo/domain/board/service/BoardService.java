package com.example.demo.domain.board.service;

import com.example.demo.domain.board.entity.Board;
import com.example.demo.domain.board.controller.request.BoardRequest;

import java.util.List;

public interface BoardService {
    public Long register(BoardRequest boardRequest);
    public List<Board> list();
    public Board read(Long boardNo);
    public void modify(Board board);
    public void remove(Long boardNo);
}
