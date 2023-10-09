## 개요
- 바로 렌더링되지 않은 컴포넌트는 초기 번들에 포함되지 않는게 좋음
- 동적으로 포함시킬 수 있는데, React.Suspense를 사용하면 처리할 수 있음
- Loading -> Parsing -> Compiling -> Executing
```
const Picker = lazy(()=>import())
```