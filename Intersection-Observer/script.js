/*
    IntersectionObserver를 활용한 무한 스크롤
    list 하단에 endList를 만들어 화면에 교차하면 리스트를 추가한다.
    리스트 마지막 아이템을 감지할 수 있었지만
    그렇게 되면 새로 생성할 때마다 .disconnect, .observe를 매번 해주고
    마지막 엘리먼트를 계속 가져와야 하기 때문에 사용하지 않았다.
*/


const listEnd = document.querySelector("#endList");
const option = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    thredhold: 0,
}

const onIntersect = (entries, observer) => { 
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const listWrap = document.querySelector("ul");
            listWrap.insertAdjacentHTML("beforeend", `
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            `)
        }
    });
};

const observer = new IntersectionObserver(onIntersect, option);
observer.observe(listEnd);

