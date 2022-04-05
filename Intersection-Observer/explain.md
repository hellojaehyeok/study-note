# Intersection-Observer-API

주로 위 네 가지 용도로 자주 사용한다.
* 페이지가 스크롤 되는 도중에 발생하는 이미지나 다른 컨텐츠의 지연 로딩.
* 스크롤 시에, 더 많은 컨텐츠가 로드 및 렌더링되어 사용자가 페이지를 이동하지 않아도 되게 하는 infinite-scroll 을 구현.
* 광고 수익을 계산하기 위한 용도로 광고의 가시성 보고.
* 사용자에게 결과가 표시되는 여부에 따라 작업이나 애니메이션을 수행할지 여부를 결정.

타겟의 변화를 관찰하며 들어가거나 나갈 때, 두 요소의 교차 부분만큼 변경될 때 콜백이 실행된다.

## 사용방법
```javascript
let options = {
  root: document.querySelector('#scrollArea'), // default - null 브라우저 뷰포트
  rootMargin: '0px', // root가 가진 여백.  css 마진과 비슷하게 설정한다.("10px 20px 10px 30px") root의 bounding box를 수축시키거나 증가시킨다.
  threshold: 1.0 // 얼마만큼 보여졌을때 callback 함수를 실행 시킬건지 정한다. 0.5->50%, 25%마다 보여주고 싶으면 -> [0, 0.25, 0.5, 0.75, 1]
}

// callback은 두개의 인자를 받는다.
let callback = (entries, observer) => {
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
new IntersectionObserver(callback, option);
```
두개의 인자를 받는다.

```javascript
const listEnd = document.querySelector("#endList");
const observer = new IntersectionObserver(callback, option);
observer.observe(listEnd);
```
위와 같이 element를 가져와 `observe`안에 넣으면 listEnd를 관찰한다.

```
.observe(target): 관찰 시작
.unobserve(target): 관찰 종료
.disconnect(target): 관찰 멈추기
```



참고 :
https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API
https://velog.io/@yejinh/Intersection-Observer%EB%A1%9C-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0