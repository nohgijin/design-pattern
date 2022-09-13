## 싱글톤
### 개요
- 한 번만 인스턴스화 될 수 있는 클래스
- 전역적으로 접근 가능
- 어플리캐이션 전체에서 공유될 수 있어서 전역상태 관리에 적합
- `counter.js` 는 `getInstance()`를 통해 나온 this가 다르므로 싱글톤 패턴이 아님
- `instanceCounter.js` 는 instance 변수를 통해 인스턴스가 만들어졌는지 확인하면서 싱글톤 패턴을 띔
- `freezeCounter.js`에서 Object.freeze는 코드 사용측에서 싱글톤을 수정할 수 없게 함
- `example`을 통해 counter는 같은 값을 사용하는 것을 확인 가능

### 장점
- 하나의 인스턴스 메모리만 가지므로 메모리 절약

### 단점
- oop에서는 클래스를 만든 후 객체를 생성할 수 있음
- 자바스크립트는 직접 객체를 생성할 수 있음
- 자바스크립트에서는 안티패턴으로 간주되므로 피해야 함
- `example/simpleCounter.js`
- 어플리캐이션 전체에서 공유될 수 있기 때문에 [예상치 않은 동작](https://codesandbox.io/embed/sweet-cache-n55vi)으로 이어질 수 있음

### 테스팅
- 인스턴스를 매번 생성할 수 없기 때문에, 이전 테스트된 전역 인스턴스에 의존함
- 테스트의 순서가 중요하며 작은 수정은 전체 테스트 실패로 이어질 수 있음
- [codesandbox test](https://codesandbox.io/s/singleton-3-n55vi?from-embed=&file=/__tests__/test.js)

### 전역 동작
- 전역 범위에서 사용할 수 있으므로 애플리케이션 전체에서 해당 변수에 접근 할 수 있음
- 전역 변수를 가지는거는 잘못된 설계 방법으로 간주되는데, 전역 변수의 값을 오염시킬 수 있기 때문에 예상치 못한 결과를 내기 때문
- es6이후 부터 전역 변수를 생성하는 것은 흔치 않아졌으며 (let, const), module 시스템이 등장하면서 전역 범위를 오염시키지 않고 전역적으로 접근할 수 있게 함
- singleton은 전역 상태를 가지기 때문에, mutable object는 예상치 못한 동작이 발생
- 실행 순서는 매우 중요하며 전역 상태를 사용할 때 조심해서 사용해야 함

### React의 상태관리
- react에서는 singleton 대신 redux, react context를 사용하여 전역 상태 관리를 함
- singleton의 변경 가능 상태가 아닌 읽기 전용 상태를 제공
- dispatcher를 통해 작업을 보낸 후 순수 함수 reducer만 상태 업데이트 가능
- 구성요소가 상태를 직접 업데이트 할 수 없기 때문에 의도한 대로 변경 가능