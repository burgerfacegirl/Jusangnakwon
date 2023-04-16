# 🍸 JUSANGNAKWON(주상낙원) - 사용자 취향 기반 주류 추천 커뮤니티 플랫폼

---

SSAFY 8기 2학기 특화 프로젝트(빅데이터 추천)

### 🗓️ 프로젝트 진행 기간

2023.03.20 ~ 2023.04.07 (7주)

## ✨ 프로젝트 소개

---

2030, MZ세대, 위스키 최근 뉴스에 함께 등장하는 키워드이다. 흔히 "아재술"로 불리는 위스키를 찾는 2030 세대가 늘어났다는 뉴스이다. 위스키를 사기 위해 편의점으로 오픈런을 하기도 한다. 젊은 세대의 주류 소비 트렌드 변화와 증가하는 홈술족을 위한 서비스를 기획해 보았다. 술을 좋아하는 사람들과 술을 잘 모르지만 알고 싶은 사람들을 위한 사용자 취향 기반 주류 추천 플랫폼 "주상낙원"이다.

## 🔔 프로젝트 기능 설명

---

1. **술 추천**
- 다양한 주종별(와인,맥주,위스키,칵테일,전통주) 술 정보, 인기 순위 제공
- 사용자 취향을 기반으로 Contents Based Filtering 을 이용한 술 추천 시스템
- 사용자 커스텀 칵테일 신규 등록 및 추천 기능
- 기상청 공공 API를 이용한 재미있는 날씨별 술 추천
2. **커뮤니티**
- 게시글, 댓글, 좋아요를 이용한 다른 사용자들과의 소통
3. **주류 정보 제공**
- 주종별 입문자 가이드로 유저가 낯선 주종에도 쉽게 유입될 수 있도록 함
4. **유저 기능**
- 카카오, 구글 간편 소셜로그인 기능
- 캘린더에서 유저의 리뷰를 분석해 날짜마다 마신 술을 달력에 이모지로 보여주고, 날짜 클릭 시 해당 날짜에 내가 쓴 리뷰를 볼 수 있음
- 내가 쓴 리뷰 리스트, 내 스크랩 리스트를 모아볼 수 있음

## 💿 사용한 데이터 셋

---

- 와인 : [WINE21 크롤링](https://www.wine21.com/13_search/wine_list.html)
- 위스키 : [Kaggle Whisky Dataset](https://www.kaggle.com/datasets/koki25ando/scotch-whisky-dataset)
- 전통주 : [네이버 전통주 지식백과 크롤링](https://github.com/learning-human/traditional-liquor-RS/blob/main/traditional_liquor_df_final.csv)
- 칵테일 : [Cocktail Wheel Dataset](http://dachang.github.io/CocktailViz/cocktailWheel.JSON)
- 맥주 : [BeerRate](https://github.com/quipu1/Bear-Recommendation)
- 커스텀 칵테일 : [만개의 레시피 무료 레시피 Dataset](https://kadx.co.kr/product/detail/0c5ec800-4fc2-11eb-8b6e-e776ccea3964)

## 👥 역할 분담

---

| 이름  | 역할                                              |
|:---:|:----------------------------------------------- |
| 김호정 | [FE] UI/UX 개발, 피드 및 마이페이지                       |
| 이예진 | [FE] UI/UX 개발, 홈 칵테일 페이지                        |
| 조한이 | [FE] UI/UX 개발, 메인 페이지                           |
| 남이랑 | [BE] 추천 시스템, 술 추천(날씨/취향) API 개발, 사용자 인증/인가      |
| 양주연 | [BE] 추천 시스템, 피드 및 마이페이지 API 개발                  |
| 이상원 | [BE] 팀장, 발표, CI/CD 자동화, 비로그인 술 추천 및 술 관련 API 개발 |

## 💻 기술 스택

---

| POSITON  | STACK           | VERSION  |
|:--------:| --------------- |:-------- |
| CLIENT   | React           | 18.2.0   |
|          | Typescript      | 4.9.3    |
|          | Vite            | 4.1.0    |
|          | Axios           | 1.3.4    |
| SERVER   | Spring Boot     | 2.7.9    |
|          | OpenJDK         | 11.0     |
|          | Spring Security | 2.7.9    |
|          | Spring Data JPA | 2.7.9    |
|          | QueryDSL        | 1.0.10   |
| DATABASE | MYSQL           | 8.0      |
|          | REDIS           | 7.0      |
| INFRA    | AWS             |          |
|          | GCP             |          |
|          | Docker          | 20.10.23 |
|          | Docker Compose  | 2.17.2   |
|          | Jenkins         | 2.387.1  |
|          | Nginx           | 1.18.0   |
| GENERAL  | Git             |          |
|          | Notion          |          |
|          | Jira            |          |
|          | Mattermost      |          |

## 📃 API 명세서

---

![api.png](C:\Users\SSAFY_hojung\AppData\Roaming\marktext\images\e72e9df27b89c80c44e070f516bd478b021f43f1.png) 

## 📃 ERD

---

![erd.png](C:\Users\SSAFY_hojung\AppData\Roaming\marktext\images\61b32bcf2cf91eb5ebddadad09f13a2e6a62a41e.png)

## 📃 서비스 아키텍처

---

![architecture.png](C:\Users\SSAFY_hojung\AppData\Roaming\marktext\images\2ddb7f6cd6fc43fba1a9d8161b4f1caeaa4d2b39.png)

- 개발자가 develop 브랜치에 MR 요청 후 승인하게 되면 develop 브랜치 담당 Jenkins job 실행
- develop jenkins job은 develop 브랜치 clone, 프론트, 백 폴더의 dockerfile을 사용해 이미지 빌드
- 빌드된 이미지를 dockerhub로 올리고 docker 내 사용하지 않는 모든 이미지 삭제
- docker compose file로 docker hub에 올린 이미지 pull 하여 개발 서버 실행
- develop jenkins job의 빌드 마지막 단계에서 main 브랜치로 MR 생성
- 개발 서버 테스트 후 발생하는 오류 수정 후 main 브랜치로 요청 된 MR 승인
- main 브랜치로 MR 승인 시 production jenkins job 실행
- develop jenkins job과 동일하게 동작 (프론트 프로젝트 빌드 같이 진행)

## 🗣️ DAILY SCRUM

---

![scrum.png](C:\Users\SSAFY_hojung\AppData\Roaming\marktext\images\80a16e27f336a90bfabd38f32cc2539dfb4e9188.png)

## ✨ 기능 상세 설명

---

| page                                                                                                                                               | description                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="file:///C:/Users/SSAFY_hojung/AppData/Roaming/marktext/images/a495f9c555bdf76bfe40551086a440b10115bee4.png" title="" alt="" width="370"> | - 로그인 하지 않은 사용자에게 랭킹순 추천<br>- 패이지 상단 기상청 날씨 api 정보를 통한 술, 안주 추천<br>- 커스텀 칵테일 랜덤 추천                                                    |
| <img src="file:///C:/Users/SSAFY_hojung/AppData/Roaming/marktext/images/31caab0828b6d921287424b838ecb9c74472a7ca.png" title="" alt="" width="371"> | - 로그인한 사용자에게 사용자 취향 기반 주류추천<br>- 평점을 부여하지 않은 주종에 대해서 취향 설문 기반 추천<br>- 평점을 남긴 주종에 대해서 평점 높은 술과 유사한 술 추천<br>- 전체 주류확인 가능<br>- 주류 스크랩 기능 |
| <img src="file:///C:/Users/SSAFY_hojung/AppData/Roaming/marktext/images/e9833675272ba9c11482a3a8770f04ea46670d78.png" title="" alt="" width="372"> | - 주종별 술을 즐기는 방법에 대한 설명<br>- google, kakao social login                                                                                |
| <img src="file:///C:/Users/SSAFY_hojung/AppData/Roaming/marktext/images/a5ec8e344fbd8d89705bab2eaa18add4adb2e664.png" title="" alt="" width="370"> | - 사용자들의 리뷰, 레시피, 질문글 리스트와 상세보기                                                                                                        |
| <img src="file:///C:/Users/SSAFY_hojung/AppData/Roaming/marktext/images/37df1dfc2ea88f8cab815369b9d8db9a4399e622.png" title="" alt="" width="374"> | - 세 가지 글 작성 기능<br>- 사진 추가 및 데이터베이스 내 주류 검색 기능<br>- 술에 대한 평점 부여<br>- 글 공개, 비공개 선택 기능                                                   |
| <img src="file:///C:/Users/SSAFY_hojung/AppData/Roaming/marktext/images/1dc284da1818012eebb626337f873a8f6765fe7b.png" title="" alt="" width="378"> | - 커스텀 칵테일 레시피 작성 기능<br>- 재료 입력, 칵테일에 대한 주관적인 맛 평가<br>- 레시피 작성                                                                         |
| <img src="file:///C:/Users/SSAFY_hojung/AppData/Roaming/marktext/images/7ae790010e4e038c63204a4464cfc8d857c5afa0.png" title="" alt="" width="375"> | - 커스텀 칵테일 리스트<br>- 랭킹순 및 취향 기반 커스텀 칵테일 추천<br>- 커스텀 칵테일 리스트 확인 기능                                                                      |
| <img src="file:///C:/Users/SSAFY_hojung/AppData/Roaming/marktext/images/aa5ffc2db56724d48a75e2cb92e45cd054e18c3b.png" title="" alt="" width="423"> | - mypage 확인 기능<br>- 캘린더에서 본인이 리뷰한 날짜에 주류 스탬프 찍기 기능<br>- 스크랩한 술 확인 기능<br>- 본인이 쓴 글 모아보기 기능                                             |
