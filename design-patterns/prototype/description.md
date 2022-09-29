## 프로토타입
### 개요
- 같은 타입의 객체들이 속성을 나눌 때 유용하게 사용됨
- 같은 타입의 객체를 만드는 일이 많은 데, class를 이용하여 다양한 인스턴스를 만드는게 유용
- `dog.js` Dog 클래스의 예시
  - 생성자는 name property를 가지고 있으며, 클래스는 자체적으로 bark 프로퍼티 가짐
  - 모든 프로퍼티는 클래스 자체적으로 선언되며 bark는 자동으로 prototype에 추가
  - ES6클래스를 사용하면 모든 프로퍼티는 클래스 자체에 선언되며 위의 코드에서 bark 는 자동으로 prototype 에 추가
  - 생성자의 prototype에 직접적으로 접근 시 혹은 인스턴스의 __proto__에 접근 시 prototype 확인 가능
- 어떤 인스턴스건 __proto__는 생성자의 prototype의 객체임
- 부모에 바로 없을 경우에는 prototype chain을 타고 올라가서 prototype을 찾음
- 객체들이 같은 프로퍼티를 가져야 하는 경우 유용하게 사용, 객체를 매번 생성하기 보다 Prototype에 프로퍼티를 추가하면 모든 인스턴스들이 Prototype 객체를 활용할 수 있음
- `play.js` Prototype 객체에 play 프로퍼티 추가 가능
- Prototype객체 자체도 proto 속성을 가질 수 있음
- `superdog.js` SuperDog의 prototype객체의 __proto__ 는 Dog.prototype
- 현재 객체에 없는 프로퍼티에 접근하려는 경우 같은 이름의 프로퍼티를 찾을 때 까지 객체의 proto를 찾아 올라감

### Object.create
- prototype으로 쓰일 객체를 인자로 받아 새로운 객체를 만듬