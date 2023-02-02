package com.example.demo.domain.board.controller;

import com.example.demo.domain.board.entity.Board;
import com.example.demo.domain.board.request.BoardRequest;
import com.example.demo.domain.board.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/boards")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class BoardController {

    @Autowired
    private BoardService service;

    @GetMapping("/list")
    public List<Board> boardList () {
        log.info("boardList()");

        return service.list();
    }

    @PostMapping("/register")
    public Long boardRegister (@RequestBody BoardRequest boardRequest) {
        log.info("boardRegister(): ", boardRequest);

        return service.register(boardRequest);
    }

    @GetMapping("/{boardNo}")
    public Board boardRead (@PathVariable("boardNo") Long boardNo) {
        log.info("boardRead()");

        return service.read(boardNo);
    }

    @DeleteMapping("/{boardNo}")
    public void boardRemove (@PathVariable("boardNo") Long boardNo) {
        log.info("boardRemove()");

        service.remove(boardNo);
    }

    @PutMapping("/{boardNo}")
    public Board boardModify (@PathVariable("boardNo") Long boardNo, @RequestBody Board board) {
        log.info("boardModify()");

        board.setBoardNo(boardNo);
        service.modify(board);

        return board;
    }
}
