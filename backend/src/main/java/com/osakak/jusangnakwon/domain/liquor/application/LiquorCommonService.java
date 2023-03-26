package com.osakak.jusangnakwon.domain.liquor.application;

import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorListMainResponse;
import com.osakak.jusangnakwon.domain.liquor.api.response.LiquorSearchResponse;
import com.osakak.jusangnakwon.domain.liquor.dao.*;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.*;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorCustomMapper;
import com.osakak.jusangnakwon.domain.liquor.mapper.LiquorMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class LiquorCommonService {
    private final BeerRepository beerRepository;
    private final CocktailRepository cocktailRepository;
    private final HometenderRepository hometenderRepository;
    private final TraditionRepository traditionRepository;
    private final WhiskyRepository whiskyRepository;
    private final WineRepository wineRepository;
    private final LiquorMapper liquorMapper;
    private final LiquorCustomMapper liquorCustomMapper;

    /**
     * 사용자 검색
     *
     * @param keyword 술 이름
     * @return 연관된 술 리스트
     */

    public LiquorListMainResponse searchLiquorByKeyword(int page, String keyword) {
        List<LiquorListItemDto> list = new ArrayList<>();
        for (LiquorType item :
                LiquorType.values()) {
            list.addAll(getLiquorByKeyword(keyword, item));
        }
        Page<LiquorListItemDto> pageList = convert(list, page, 5);
        return liquorCustomMapper.toMainPageResponse(pageList.getContent(), pageList.getTotalPages(), pageList.getPageable().getPageNumber());
    }

    private List<LiquorListItemDto> getLiquorByKeyword(String keyword, LiquorType liquorType) {
        switch (liquorType) {
            case BEER:
                List<Beer> byKeyword = beerRepository.findByKeyword(keyword);
                return liquorMapper.toLiquorListDtoBeer(byKeyword);
            case WINE:
                List<Wine> byKeyword1 = wineRepository.findByKeyword(keyword);
                return liquorMapper.toLiquorListDtoWine(byKeyword1);
            case WHISKY:
                List<Whisky> byKeyword2 = whiskyRepository.findByKeyword(keyword);
                return liquorMapper.toLiquorListDtoWhisky(byKeyword2);
            case COCKTAIL:
                List<Cocktail> byKeyword3 = cocktailRepository.findByKeyword(keyword);
                return liquorMapper.toLiquorListDtoCocktail(byKeyword3);
            case TRADITION:
                List<Tradition> byKeyword4 = traditionRepository.findByKeyword(keyword);
                return liquorMapper.toLiquorListDtoTradition(byKeyword4);
            case HOMETENDER:
                List<Hometender> byKeyword5 = hometenderRepository.findByKeyword(keyword);
                return liquorMapper.toLiquorListDtoHometender(byKeyword5);
        }
        return null;
    }

    private <T> Page<T> convert(List<T> list, int pageNumber, int pageSize) {
        int startIndex = pageNumber * pageSize;
        int endIndex = Math.min(startIndex + pageSize, list.size());
        List<T> sublist = list.subList(startIndex, endIndex);
        return new PageImpl<>(sublist, PageRequest.of(pageNumber, pageSize), list.size());
    }

}