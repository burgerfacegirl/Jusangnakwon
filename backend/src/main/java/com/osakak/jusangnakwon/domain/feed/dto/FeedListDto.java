package com.osakak.jusangnakwon.domain.feed.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class FeedListDto {

    private final Long id;
    private final FeedType type;
    private final String img;
    private final String title;
    private final String content;
    private final Boolean isPublic;
    private final LocalDateTime dateCreated;
    private final WriterDto writer;
    private final Long likeCnt;
    private final Boolean liked;

    @Builder
    @QueryProjection
    public FeedListDto(Long id, FeedType type, String img, String title, String content,
                       Boolean isPublic, LocalDateTime dateCreated, WriterDto writer, Long likeCnt,
                       Boolean liked) {
        this.id = id;
        this.type = type;
        this.img = img;
        this.title = title;
        this.content = content;
        this.isPublic = isPublic;
        this.dateCreated = dateCreated;
        this.writer = writer;
        this.likeCnt = likeCnt;
        this.liked = liked;
    }
}

