## RenderProps 패턴
### 개요
- HOC 컴포넌트는 여러 컴포넌트에서 사용되는 데이터, 로직을 재사용하기 매우 편함
- render prop 패턴도 이와 유사, JSX Element를 리턴
- 컴포넌트는 render props를 호출하기만 함
- 꼭 render라는 이름으로 호출하지 않고, 어떤 이름으로 호출해도 됨
- 단순히 render만 하는 것이 아니라, 데이터를 render prop을 통해 전달해줄 수 있음

### 예시
- LiftState.jsx 처럼 할 수 있지만, 상태가 변할 때 마다 리렌더링 됨
- RenderLiftState.jsx처럼 render props를 전달시키는 방식으로 변경 가능
- Children prop으로 하는 것도 동일한 방식

### Hooks
- 좋은 예시는 Apollo Client
- useMutation hooks

### 장점
- naming collisions를 해결
- 렌더링 컴포넌트와 로직을 분리

### 단점
- lifecycle 메소드 사용 불가, 수정할 데이터가 없는 경우에 render prop 패턴 사용