## 프록시
### 개요
- 프록시 객체로 특정 객체애 대한 상호작용을 더 컨트롤 할 수 있음
- 프록시 객체는 객체와 상호 작용할 때마다 동작을 결정할 수 있음
- 타겟과 바로 연결되는 대신, 프록시 객체와 연결됨
- 무언가와 이어지는 인터페이스 역할을 하는 클래스
- `index.js`에서 person 객체와 직접적으로 소통하는 대신, proxt객체와 소통하며 `Proxy instance`를 사용하여 새 프록시 객체 만들 수 있음

### Proxy
- `new Proxy(target, handler);`
- target: proxy와 함께 감싸진 target 객체
- handler: 프로퍼티들이 function인 객체
  - 보통 핸들러에서는 get과 set을 많이 사용
  - get: property에 접근할 때 호출
  - set: property를 수정할 때 호출

### Validation
- `validationProxy.js`처럼 특정 경우에 대한 유효성검사 가능

### Reflect
- 프록시로 작업할 때 대상 객체를 더 쉽게 조작 가능
- Reflect 객체의 메서드는 핸들러 객체의 메서드 이름과 같음
- `obj[prop]` `obj[prop]=value` 에 접근하지 않고, `Reflect.get()` `Reflect.set()` 으로 접근

### 장점
- 유효성 검사, 형식 지정, 알림 또는 디버깅 지원

### 단점
- 성능