## 라우팅 경로에 다른 코드 스플리팅
- 특정 경로에서만 필요한 리소스를 로드하여 사용 가능
- react Suspense + react-router 를 함께 사용하면 됨
```javascript
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const App = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" elementt={<About/>}/>
            </Routes>
        </Suspense>
    </Router>
);
```

https://blog.logrocket.com/react-dynamic-imports-route-centric-code-splitting-guide/