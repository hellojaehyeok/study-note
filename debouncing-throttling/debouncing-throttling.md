# debouncing, throttling
debouncing - 연이어 호출되는 함수들 중 마지막 함수(또는 제일 처음)만 호출하도록 하는 것이다.         
throttling - 마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록 하는 것이다.         

## 예시
* input에 타이핑을 할 때마다 연관검색어를 보여주는 기능이 있다고 가정한다.

```javascript
document.getElementById("searchInput").addEventListener("input", (e) => {
    console.log('fetch', e.target.value);
})
```
단순히 `addEventListener`만 걸면 모든 글자에 반응하기 때문에 불필요한 서버 통신이 되어 발생한다.         
유료 api라면 비용적인 문제와도 관련이 있다.         


### debouncing 적용
```javascript
let timer  = null;
document.getElementById("searchInput").addEventListener("input", (e) => {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(()=>{
        console.log('fetch', e.target.value);
    }, 200);
})
```
setTimeout을 걸어 200ms 동안 입력이 없으면 그때 통신을 한다.         
사용자가 입력하면 다시 타이머가 설정된다.         


### throttling 적용
```javascript
let timer  = null;
document.getElementById("searchInput").addEventListener("input", (e) => {
    if (!timer) {
        timer = setTimeout(() => {
            timer = null;
            console.log('fetch', e.target.value);
        }, 200);
    }
})
```
최소 200ms마다 통신을 한다.
디바운싱보다는 통신을 더 많이 하지만, 중간중간 검색 결과를 보여줄 수 있다.


출처 : https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa



