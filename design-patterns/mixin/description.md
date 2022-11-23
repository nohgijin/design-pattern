## 믹스인 패턴
### 개요
- 상속없이 기능을 다른 객체나 클래스에 추가하기 위해 사용하는 것
- 그 자체로 믹스인은 사용하지 못하고, 믹스인의 목적은 객체나 클래스에 상속없이 기능을 추가하는 것
- Dog Class는 name만 가지고 있지만,dog는 여러 행동을 할 수 있기에 bark, wagTail, play라는 프로퍼티를 제공하는 믹스인을 만들 수 있음
- Object.assign 메서드를 통해 Dog Prototype에 dogFunctionality mixin을 추가하면서 Dog의 instance는 dogFuncionality의 속성에 접근할 수 있다.
### 상속
- mixin이 상속없이 기능을 더하는 거라 해도, 믹스인은 자체적으로 상속을 사용함
- `inheritance.js` 참고
### React
- mixin 사용을 권장하지 않음
### 결론
- mixin을 상속하지 않고 기능을 바로 object의 prototype에 더할 수 있는데, 이는 매우 bad case이므로 주의하자