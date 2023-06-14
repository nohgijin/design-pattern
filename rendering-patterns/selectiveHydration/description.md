## selective hydration
### 개요
- SSR로 인해서 react-dom/server의 renderToString메서드를 통해 컴포넌트 트리를 빠르게 만들어내고, 클라이언트에 전송됨
- 번들이 다운로드되어 실행되기 전까지 인터렉션 불가, hydrate하여 핸들러를 바인딩
- 성능이슈 발생 가능
  - HTML트리가 클라이언트에게 전송되려면 모든 컴포넌트는 준비가 되어야 함. API 호출이나 기타 다른 처리가 있다면 렌더링 막힘
  - React가 트리를 한 번만 hydrate하기 때문에, hydrate하기 전에 모든 컴포넌트에 대한 자바스크립트 코드를 다운로드 받아야 함
### 선택적 Hydration
- renderToString 메서드를 사용하는 대신, pipeToNodeStream 메서드를 사용함
- createRoot와 Suspense메서드의 결합으로 큰 컴포넌트가 준비될때까지 기다리지 않고 HTML을 streaming 가능
- Suspense로 감싸면서 HTML을 rendering할 때 fallback component를 삽입함
- 이동안 Comment 컴포넌트에 대한 데이터를 외부로부터 받아옴
### 장점
- FCP, TTI 느린 문제 해결
- 모든 컴포넌트의 hydrate을 위해 모든 javascript가 로드되는 걸 기다릴 필요 없음