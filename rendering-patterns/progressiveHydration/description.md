## progressive hydration
### 소개
- 빠른 FCP(First Contentful Paint)지만 TTI가 빠르진 않음
- hydration 과정을 거치는데 시간이 걸리기 때문
- progressive hydration 을 거치면서 덜 중요한 부분의 hydration은 지연시킬 수 있음
### 구현
- 요구사항
1. 모든 컴포넌트는 ssr 사용
2. 코드 스플리팅을 지원해 개별 컴포넌트로 나눌 수 있어야
3. hydration 순서를 개발자 정의 가능
4. 이미 hydrate된 코드는 사용자 입력 막으면 안됨
5. 로딩 스피너 사용할 수 있어야
- 동시성모드는 위 요구사항 충족 가능