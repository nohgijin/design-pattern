## 개요
- sideEffects
  - false => 사용하지 않는 export는 제거해도 됨
  - 배열을 사용하여 tree shaking 영역을 지정해줄 수 있음
- usedExports vs sideEffects
    - sideEffects: 전체 모듈, 파일, 전체 하위 트리를 건너뛸 수 있어서 usedExports보다 효율적
    - usedExports: terser를 사용하여 트리셰이킹, sideEffects만큼 효과적이지 않음, 하위트리 및 의존성을 신경써야 함

### usedExports
```
import hoistStatics from 'hoist-non-react-statics';

function Button(_ref) {
  // ...
}

function merge() {
  var _final = {};

  for (
    var _len = arguments.length, objs = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    objs[_key] = arguments[_key];
  }

  for (var _i = 0, _objs = objs; _i < _objs.length; _i++) {
    var obj = _objs[_i];
    mergeRecursively(_final, obj);
  }

  return _final;
}

function withAppProvider() {
  return function addProvider(WrappedComponent) {
    var WithProvider =
      /*#__PURE__*/
      (function (_React$Component) {
        // ...
        return WithProvider;
      })(Component);

    WithProvider.contextTypes = WrappedComponent.contextTypes
      ? merge(WrappedComponent.contextTypes, polarisAppProviderContextTypes)
      : polarisAppProviderContextTypes;
    var FinalComponent = hoistStatics(WithProvider, WrappedComponent);
    return FinalComponent;
  };
}

var Button$1 = withAppProvider()(Button);

export {
  // ...,
  Button$1,
};
```
- Button은 사용되지 않지만, 사이드이펙트가 없거나 안전하게 삭제할 수 있는지는 의문
- withAppProvider, merge, hoistStatics등이 호출
- /*#__PURE__*/ 어노테이션을 이용하여 terser를 도와줄 순 있음, 하지만 import에 사이드 이펙트가 있을 수 있음

### sideEffects
- 구문 레벨이 아닌 모듈 레벨에서 사용
- sideEffects가 false라고 된 모듈에서 직접적인 export가 없는 경우 번들러는 사이드이펙트에 대한 평가를 건너뜀

index.js
```javascript
import './configure';
export * from './types';
export * from './components';
```

components/index.js
```javascript
// ...
export { default as Breadcrumbs } from './Breadcrumbs';
export { default as Button, buttonFrom, buttonsFrom } from './Button';
export { default as ButtonGroup } from './ButtonGroup';
// ...
```

package.json
```javascript
// ...
"sideEffects": [
  "**/*.css",
  "**/*.scss",
  "./esnext/index.js",
  "./esnext/configure.js"
],
// ...
```

import { Button } from "@shopify/polaris";를 할 경우
- components/Button.js: 사용, sideEffect 미사용 => 포함
- components/Button.css: 직접 미사용, sideEffect 사용 => 포함
- index.js: 직접 미사용, sideEffects 사용 => 포함
- configure.js: 미사용, sideEffects 사용 => 포함
- types/index.ks: 미사용, sideEffects 미사용 => 제외
- components/index.js: 미사용, sideEffect 미사용, 다시 export한 export는 사용됨 => 건너 띔
- components/Breadcrumb.js: 미사용, sideEffect 미사용 => 제외