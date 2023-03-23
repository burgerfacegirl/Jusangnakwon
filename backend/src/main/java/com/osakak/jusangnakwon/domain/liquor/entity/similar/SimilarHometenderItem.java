package com.osakak.jusangnakwon.domain.liquor.entity.similar;

import com.osakak.jusangnakwon.domain.liquor.dto.SimilarItemValueType;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Hometender;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SimilarHometenderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Embedded
    private SimilarItemValueType similarLiquor;
    @OneToOne
    @JoinColumn(name = "hometender_id")
    private Hometender hometender;

}