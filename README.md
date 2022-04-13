# study-note
시니어가 되고 싶은 주니어의 개발 노트입니다.      
프론트 개발을 하며 부족했던 이론과 cs를 정리하는 글입니다.     


<details>
<summary>무한 스크롤</summary>

* 무한 스크롤을 구현할 때는 `throttling`이나 `Intersection Observer API`를 사용한다.
    - 그동안 `window.addEventListner("scroll",--)`과 let 변수를 활용하여 무한 스크롤을 관리하였는데 이는 이벤트 핸들링에 대한 최적화가 필요한 방법이었다.
    - `throttling`을 사용해도 `addEventListner`를 사용해야 하기 때문에 비효율적이다.
    - `Intersection Observer API`를 활용하여 이벤트 리스너를 활용하지 않는다. reflow 과정을 지우는 등 웹 성능이 좋아진다.
</details>
<br />


<details>
<summary>script태그 위치</summary>

* `<script>`태그를 html 최하단에 위치시킬 경우 html파일의 크기가 커질수록 다운받는 시점이 지연된다.
    - defer
        1. '백그라운드'에서 다운로드한다. 다운로드 중에도 html파싱은 멈추지 않고, 페이지 구성이 끝나면 실행이 된다. 
        2. `DOMContentLoaded`보다 먼저 실행된다.
        3. html에 추가된 순으로 실행하기 때문에 먼저 다운로드 되었다고 해서 먼저 실행되지는 않는다.
        4. 외부 스크립트에만 유효하다. (src가 없으면 defer는 작동하지 않는다.)

    - async
        1. defer와 마찬가지로 `백그라운드`에서 실행된다.
        2. `DOMContentLoaded`, 다른 스크립트들을 상관하지 않고 모두 다운받았으면 먼저 실행한다.
        3. 2번의 속성 때문에 `async`속성이 여러 개 있으면 실행 순서는 제각각이다.

    - 기타
        1. 동적으로 추가된 스크립트는 기본적으로 async속성이다.
        2. 참고 : https://ko.javascript.info/script-async-defer
</details>
<br />

<details>
<summary>동적 html 변경</summary>

* 동적으로 코드를 변경할때 `createElement`를 사용하면 향우 유지보수에서 어려움을 겪을 수 있다.
    - Element.innerHTML
        1. element의 html을 변경한다.

    - Element.insertAdjacentHTML
        1. element의 특정 위치에 html을 삽입한다.
        2. `element.insertAdjacentHTML(position, text);`
        ```html
        <!-- beforebegin -->
        <p>
        <!-- afterbegin -->
        foo
        <!-- beforeend -->
        </p>
        <!-- afterend -->
        ```
        3. https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML
</details>
<br />