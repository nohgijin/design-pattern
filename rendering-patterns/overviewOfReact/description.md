### AutoBatching
- React 18 전에는 event handler안에 있는 것만 배치업데이트 가능
- React 18에서 promise, setTimeout, native event handlers, 이외에 다른 이벤트들도 배치
- `createRoot을` 통해 auto batch화 시킴