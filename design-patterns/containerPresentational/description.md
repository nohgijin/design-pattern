## 컨테이너/프리젠테이셔널 패턴
### 개요
- Presentational Components: 어떻게 데이터가 보여질 지에 관심있는 컴포넌트 (뷰의 역할)
- Container Components: 어떤 데이터가 보여질 지에 관심있는 컴포넌트 (비즈니스 로직)

### Presentational Components
- props를 통해 데이터를 받고, 데이터 수정 없이 받은 데이터들을 보여주는 역할을 함
- DogImages 컴포넌트는 Presentational component이며, 데이터를 수정하지 않는다.
- Presentational 컴포넌트는 Container 컴포넌트로부터 데이터를 받는다.

### Container Components
- Presentational 컴포넌트에 데이터를 전달하는 것이 주 목적
- Container 컴포넌트는 어떠한 컴포넌트도 렌더링을 하지 않는다.
- DogImages라는 Container 컴포넌트를 만들었을 때, 만들어진 Container 컴포넌트는 외부 API로부터 이미지를 fetch하고 presentational 컴포넌트인 DogImages에게 이미지를 전달

### Hooks
- hook이 소개되면서 container component 없이 stateless한 컴포넌트를 만들 수 있게 됨
- `useDogImages` hook을 통해 dog image를 패칭해오기 때문에, DogImagesContainer 컴포넌트를 사용하지 않고, DogImage presentational 컴포넌트에서 바로 사용할 수 있다.
- hooks을 통해 비즈니스 로직과 뷰를 쉽게 분리할 수 있으며, Container 래핑을 줄였다.

### 장점
- 관심사의 분리
- Presentational 컴포넌트: 재사용 가능, 테스트 쉬움

### 단점
- 훅을 이용하면 Container/Presentational 패턴 없이도 stateless한 함수형 컴포넌트 제작 가능
