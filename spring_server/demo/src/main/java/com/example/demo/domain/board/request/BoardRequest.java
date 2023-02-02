package com.example.demo.domain.board.request;

import lombok.Getter;

@Getter
public class BoardRequest {
    private String title;
    private String content;
    private String writer;
}
