## mediator/middleware
### 개요
- 컴포넌트가 mediator을 통해 서로 연결할 수 있도록 함
- mediator가 요청을 받으면, 그 요청을 보냄
- JS에서 mediator는 Object Literal이나 함수

### Case study
- express.js에서 middleware를 쓰는 경우
- - `/`로 들어가면 request에 header를 더하는 로직처럼 Middleware 간단히 추가 가능
- 