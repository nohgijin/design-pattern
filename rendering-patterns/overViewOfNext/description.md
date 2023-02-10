### pre-rendering
- 프론트 서버에 html파일 미리 구성
- 페이지 로드 되면 hydration단계를 거쳐서 렌더링
### Data fetching
- getStaticProps
  - ssg
- getStaticPaths
  - 여러 routes를 렌더링하기 위한 ssg
- getServerSideProps
  - ssr
### Code Spliting
- route based: 초기 route에 필요한 코드만 보내고, 사용자가 탐색할 때 다른 청크들은 다운로드 됨
- component based: dynamic import