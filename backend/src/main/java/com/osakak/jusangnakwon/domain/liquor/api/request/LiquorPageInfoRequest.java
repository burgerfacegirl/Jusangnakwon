package com.osakak.jusangnakwon.domain.liquor.api.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LiquorPageInfoRequest {
    private int page;
    private int perPage;

}