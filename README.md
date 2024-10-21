# 영화 검색 사이트
## style guide
- color
  - bg #0A0D1E 다크블루
  - point #FFD700 노랑 (버튼, 링크, 강조 텍스트에 사용)
  - font #fff
- font
  - 기본 SpoqaHanSansNeo-Regular
  - 로고 Playball

## ✅ 필요한 기능
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


## ➕ 부가적인 기능(모두 다 구현후에)
- ~~팝업창이 노출될때 body스크롤 막기 2024-10-18~~
- ~~스로틀링 또는 디바운싱을 사용해 최적화된 API 호출 2024-10-21~~
- ~~index 영화 데이터를 랜덤으로 뿌리기(popular?language=ko&page=1~32랜덤숫자) 2024-10-21~~
- ~~사용자가 검색어를 입력할때마다 실시간으로 영화 리스트가 필터링 2024-10-17~~