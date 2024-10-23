# 영화 검색 사이트
Vanilla.js + TMDB API 사용하여 영화 리스트를 보여주는 사이트입니다.
## 🎨style guide
- color
  - bg #0d0d0d 검정계열
  - point #f2c94c 노랑 (버튼, 링크, 강조 텍스트에 사용)
  - font #a9a9a9
- font
  - 기본 SpoqaHanSansNeo-Regular
  - 로고 Bad Script
  - 네비바 Just Another Hand

## ✅ 기능
- ~~TMDB API 연동 2024-10-16~~
- ~~페이지에 fetch API로 데이터뿌리기(포스터,영화명,평점) 2024-10-16~~
- ~~해당 영화 클릭시 팝업으로 노출(이벤트 위임) 2024-10-16~~
  - ~~닫기 버튼, 포스터, 영화명, 영화소개, 개봉일 , 평점, 북마크 추가 버튼 노출 2024-10-16~~
  - ~~팝업 닫기 버튼 구현 2024-10-16~~
  - ~~북마크 추가 구현(localStorage에 저장) 2024-10-16~~
- ~~북마크 데이터 뿌리기 2024-10-18~~
- ~~검색 기능 구현 2024-10-21~~
  - ~~대소문자 구분 없이 2024-10-21~~
  - ~~enter키로 검색 가능하게 2024-10-17~~
  - ~~async/await문법등 리팩토링 2024-10-17~~
- ~~반응형 2024-10-17~~
- ~~팝업창이 노출될때 body스크롤 막기 2024-10-18~~
- ~~스로틀링 또는 디바운싱을 사용해 최적화된 API 호출 2024-10-21~~
- ~~index 영화 데이터를 랜덤으로 뿌리기(popular?language=ko&page=1~32랜덤숫자) 2024-10-21~~
- ~~사용자가 검색어를 입력할때마다 실시간으로 영화 리스트가 필터링 2024-10-17~~

## 💫구현
- 메인페이지
  - defalut : 인기 있는 영화 리스트를 랜덤으로 보여줌
  - 영화 아이템을 클릭하면 팝업창으로 노출
  - 실시간으로 검색하면 해당 영화리스트를 보여줌
- 팝업
  - 선택한 영화의 정보를 보여줌
  - 북마크를 추가/삭제 할 수 있음
- 북마크
  - 북마크 한 영화 리스트를 보여줌
  - 북마크를 삭제하면 새로고침 되어서 삭제한 해당 북마크가 사라짐
- ![MOVIE-ezgif com-crop](https://github.com/user-attachments/assets/ebd7a239-35e2-49a4-a4d9-d13b5d8ab291)
