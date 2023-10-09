## 개요
```
import UserInfo from './UserInfo'

const App = () => { ... }
```
UserInfo를 정적으로 사용함
## 번들 시
- main.bundle.js라는 번들이 포함됨. 번들 크기가 커지면 로딩되기까지의 시간이 길어짐.
- App 컴포넌트가 화면에 그려지기 전 먼저 모든 모듈들이 로드되어 파싱이 끝나야 함

- 동적으로 import되게 할 수 있음