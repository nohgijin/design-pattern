## HOC 패턴
### 개요
- 여러 컴포넌트에서 같은 로직/컴포넌트를 재사용할 경우 HOC 패턴을 이용
- 같은 로직을 여러 컴포넌트에 제공할 수 있음 
  - withLoader 처럼
### Composing
- 여러 HOC 컴포넌트를 엮을 수 있음
- `withHover / withLoader`
### Hooks
- HOC Pattern을 훅으로 제공 가능
### 사용사례
- HOC: 서비스의 많은 컴포넌트에서 쓰이는 경우, 단독으로 작동하는 컴포넌트일 경우
- Hooks: 컴포넌트에서 커스텀이 필요한 경우, 소수의 컴포넌트에서 쓰일 경우, 프로퍼티를 더해줘야 할 경우
### Case Study
- Apollo client HOC/Hooks