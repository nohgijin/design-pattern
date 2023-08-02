## 개요
- 중요하지 않은 리소스는 사용자 상호작용에 따라 필요해질 때 로드한다
- 특정 UI는 사용자가 클릭하거나 스크롤하여 보여지기 전까지 필요없을 경우가 있음(퍼스트파티, 써드파티 상관없이)
- 이런 경우 메인 스레드를 블록할 수 있으며 시간을 지연시킬 수 있음
- First input delay, Total blocking time, Time to interactive에 영향을 줌
  - 사용자가 처음 컴포넌트 클릭/뷰포트에 컴포넌트 보일때/프로세스가 유효상태일 때 로드 하게 할 수 있음
### 상호작용 시 불러오기 구현법
- vanilla javascript: dynamic import
- react: React.lazy, Suspense, ErrorBoundary
### 트레이드오프
- 시간이 오래걸린다면: prefetch
- 인터렉션 없어도 동작하는 경우라면: 스크롤에 따라 lazy loading..
### 상호작용 임베드를 정적인 형태로 교체
- 임베드된 컨텐츠를 똑같이 생긴 정적 컨텐츠로 변경하고, 인터렉티브가 가능한 원본 링크를 검