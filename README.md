# study-note
시니어가 되고 싶은 주니어의 개발 노트입니다.      
프론트 개발을 하며 부족했던 이론과 cs를 정리하는 글입니다.     
이 레파지토리에서는 간단하게 정리하고 있습니다.          
자세히 정리한 블로그 주소를 각각 첨부하였으니 참고해주세요.      

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

<details>
<summary>브라우저 동작 관정</summary>

1. Dom Tree 생성, CSSOM Tree 생성
2. Render Tree 생성
3. Render Tree 배치 -> Layout(Reflow)
4. Render Tree 그리기 -> Paint(Repaint)

[블로그 정리](https://talkwithcode.tistory.com/80?category=1019863)
</details>
<br />

<details>
<summary>Closure (클로저)</summary>

함수가 생성될 당시의 외부 변수를 기억하여 생성 이후에도 계속 접근 가능한 것.         
자신이 생성될 때의 환경을 기억하는 함수.    
[블로그 정리](https://talkwithcode.tistory.com/84?category=1019863)  
</details>
<br />

<details>
<summary>Virtual Dom</summary>

Dom을 조작하게되면 Layout, Paint, Render Tree 생성 등 여러 과정들이 일어납니다.     
UI가 변경되면 Virtual Dom에 먼저 적용시킵니다.       
현재 Dom과 Virtual Dom을 비교하여 변경된 부분만 실제 Dom에 전달해줍니다.       

[블로그 정리](https://talkwithcode.tistory.com/81?category=1019863)  
</details>
<br />

<details>
<summary>호이스팅</summary>

모든 선언문이 해당 스코프의 선두로 옮겨진 것처럼 동작하는 특성       
변수는 `선언->초기화->할당` 3단계에 걸쳐 생성됩니다.  

[블로그 정리](https://talkwithcode.tistory.com/78?category=1019863)
</details>
<br />