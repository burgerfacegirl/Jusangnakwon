package com.osakak.jusangnakwon.domain.feed.entity;

import com.osakak.jusangnakwon.domain.feed.dto.CommentDto;
import com.osakak.jusangnakwon.domain.user.entity.User;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.List;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Feed {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false, length = 20)
    private String type;

    private String img;

    @Column(length = 150)
    private String title;

    @Column(name = "liquor_type", length = 10)
    private String liquorType;

    @Column(name = "liquor_name", length = 150)
    private String liquorName;

    @Column(columnDefinition = "LONGTEXT")
    private String content;

    @Column(nullable = false)
    private Boolean is_public;

    @Builder
    public Feed(Long id, User user, String type, String img, String title, String liquorType,
            String liquorName, String content, Boolean is_public) {
        this.id = id;
        this.user = user;
        this.type = type;
        this.img = img;
        this.title = title;
        this.liquorType = liquorType;
        this.liquorName = liquorName;
        this.content = content;
        this.is_public = is_public;
    }
}
