## Streaming Server Side Rendering
### 소개
- React의 renderToNodeStream을 사용 시 데이터를 수신하면서 UI를 그릴 수 있음
- DON Node에 대해 hydrate를 호출하여 각각에 대응하는 이벤트 핸들러 바인딩해 인터렉트 가능
- HTML을 여러조각으로 나누어 클라이언트에 전달
- renderToString을 사용 시 모든 데이터를 수신할때까지 기다려야하는 반면에, renderToNodeStream을 사용 시 데이터 청크 수신하면서 로드 가능
### React에서 스트리밍하기
- ReactDOMServer.renderToNodeStream: ReactDOMServer.renderToString()과 같지만 readableStream객체가 반환, hydrate가능
- ReactDOMServer.renderToStaticNodeStream: ReactDOMServer.renderToStaticMarkup()과 같지만 readableStream객체가 반환
- 모두 다 ReadAbleStrem이 반환되기 때문에, 클라이언트 측에서 읽기 시작하면 바이트들이 emit되기 시작
### 장점
- 성능향상
- 네트워크 영향 잘 받음
- SEO 지원
### 단점
- renderToString에서 renderToNodeStream으로 교체하는 작업이 어려움