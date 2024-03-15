const main = document.getElementById("main");

//맨 윗줄에 div로

class Makers {
  className;
  classNameArr;
  //배열로 받은 str을 요소 이름으로 반환하여 리턴
  arrDiv(divName, className) {
    this.classNameArr = className;
    const test = divName.map((divName) => {
      const divNameEle = document.createElement("div");
      // console.log("className", this.classNameArr);
      divNameEle.id = `${divName}`;

      if (this.classNameArr != undefined) {
        divNameEle.classList.add(this.classNameArr);
      }
      // console.log("요소 확인!!!!", divNameEle);
      return divNameEle;
    });
    return test;
  }

  appendDiv(rootName, divName, className) {
    //정상작동시 코드
    //자식을 가질 부모의 이름
    let rootNameEle = document.getElementById(`${rootName}`);
    if (rootNameEle == undefined) {
      // console.log(
      //   "ID is Cant find!",
      //   document.getElementsByClassName(`${rootName}`)
      // );

      rootNameEle = document.getElementsByClassName(`${rootName}`);

      rootNameEle = rootNameEle[rootNameEle.length - 1];

      if (rootNameEle == undefined) {
        // console.log("className is Cant find!");
        return;
      }
    }

    //자식을 배열로 받을 시
    if (Array.isArray(divName)) {
      const arrDiv = this.arrDiv(divName, className);

      arrDiv.forEach((element) => {
        rootNameEle.append(element);
      });
    }
    //배열로 받지 않을 시
    else {
      const divNameEle = document.createElement("div");
      if (divName != undefined) {
        divNameEle.id = `${divName}`;
      }

      if (this.className != undefined) {
        divNameEle.classList.add(this.className);
      }
      rootNameEle.append(divNameEle);
    }
  }

  makeIdDiv(rootName, divName, className) {
    this.className = className;
    //값을 입력하지 않았을 시 종료
    if (rootName == undefined && divName == undefined) {
      // console.log("nothing get");
      return;
    }
    //"",un,"";
    if (className == undefined) {
      // console.log("class un");
      //하나만 입력 시 보디를 자동으로 부모로 만드는 코드
      if (rootName == undefined || divName == undefined) {
        const body = document.getElementsByTagName("body")[0];
        //보디를 삭제해버렸을 경우
        if (body == undefined) {
          // console.log("body is Cant find!");
          return;
        }
        // console.log("something undefined");

        //루트 이름을 널 혹은 언디파인 넣을 시
        if (rootName == undefined) {
          rootName = divName;
          // console.log("보디안 요소에 클래스 넣기", className);
        }
        //배열로 받을 시
        if (Array.isArray(rootName)) {
          const arrDiv = this.arrDiv(rootName, className);

          arrDiv.reverse();
          arrDiv.forEach((element) => {
            body.prepend(element);
          });
        }
        //배열로 받지 않을 시
        else {
          const divNameEle = document.createElement("div");
          divNameEle.id = `${rootName}`;
          if (this.className != undefined) {
            divNameEle.classList.add(this.className);
          }
          body.prepend(divNameEle);
        }

        //앞 자식에 넣는다.
        body.prepend();
        return;
      } else {
        this.appendDiv(rootName, divName, className);
      }
    } else {
      this.appendDiv(rootName, divName, className);
    }
    // console.log("부모이름 자식이름", rootName, divName);
    this.className = undefined;
    return;
  }
}

const makers = new Makers();

// makers.makeIdDiv(arr);

//메뉴
makers.makeIdDiv(["main", "footer"]);
//헤드바
makers.makeIdDiv("main", ["head-bar", "body-bar"]);
//왼쪽 중앙 오른쪽 박스
makers.makeIdDiv("head-bar", ["left-box", "center-box", "right-box"]);

//왼쪽 박스
makers.makeIdDiv("left-box", ["menu-toggle-Switch", "logo"]);
//중앙 박스
makers.makeIdDiv("center-box", ["searchBar", "mike-logo"]);
//중앙 서치바
makers.makeIdDiv("searchBar", ["search", "search-bar-logo"]);

//오른쪽 박스
makers.makeIdDiv("right-box", ["option", "login"]);
makers.makeIdDiv("login", "login-text");
document.getElementById("login-text").innerText = "로그인";

//왼쪽 메뉴바
makers.makeIdDiv("body-bar", [
  "left-side-bar",
  "left-side-bar-Lblock",
  "img-box-container",
]);

makers.makeIdDiv(
  "left-side-bar",
  ["home", "shorts", "subscribe", "my", "log"],
  "side-boxs"
);

//아이디를 텍스트에 넣기
const sideBoxs = document.getElementsByClassName("side-boxs");

for (let i = 0; i < sideBoxs.length; i++) {
  sideBoxs[i].innerText = sideBoxs[i].id;
}

//이미지 박스 생성

// makers.makeIdDiv("main", "img-box-container");

makers.makeIdDiv("img-box-container", null, "img-boxs");
makers.makeIdDiv("img-boxs", "box1");
makers.makeIdDiv("img-boxs", "box2");

makers.makeIdDiv("img-box-container", null, "img-boxs");
makers.makeIdDiv("img-boxs", "box1");
makers.makeIdDiv("img-boxs", "box2");

makers.makeIdDiv("img-box-container", null, "img-boxs");
makers.makeIdDiv("img-boxs", "box1");
makers.makeIdDiv("img-boxs", "box2");

makers.makeIdDiv("img-box-container", null, "img-boxs");
makers.makeIdDiv("img-boxs", "box1");
makers.makeIdDiv("img-boxs", "box2");

makers.makeIdDiv("img-box-container", null, "img-boxs");
makers.makeIdDiv("img-boxs", "box1");
makers.makeIdDiv("img-boxs", "box2");

//옵저버

// const op1 = document.querySelector("#footer");
// const op2 = document.getElementById("footer");

// console.log(op1);
// console.log(op2);

// const options = {
//   root: document.getElementsByTagName("body")[0],
//   rootMargin: "0px",
//   threshold: 0.5,
// };

// // let callback = (entries, observer) => {
// //   entries.forEach((entry) => {
// //     console.log("entry", entry);
// //     console.log("observer", observer);
// //     // 각 엔트리는 관찰된 하나의 교차 변화을 설명합니다.
// //     // 대상 요소:
// //     //   entry.boundingClientRect
// //     //   entry.intersectionRatio
// //     //   entry.intersectionRect
// //     //   entry.isIntersecting
// //     //   entry.rootBounds
// //     //   entry.target
// //     //   entry.time
// //   });
// // };

// const callback = (entries, observer) => {
//   console.log(entries);
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log("hi");
//       console.log(entry.isIntersecting);

//       console.log(entry.intersectionRatio);

//       console.log(entry.rootBounds);

//       // 교차가 되었을때 true

//       console.log("entry", entry);
//       console.log("call back observer", observer);
//       observer.unobserve(entry.target); // 관찰 해제로 한번만 실행
//     }
//   });
// };

// const observer = new IntersectionObserver(callback, options);

// observer.observe(document.getElementById("footer"));

//
//
//
// let observers = [];

// startup = () => {
//   let wrapper = document.querySelector(".wrapper");

//   // 관찰자를 위한 옵션

//   let observerOptions = {
//     root: null,
//     rootMargin: "0px",
//     threshold: [],
//   };

//   // An array of threshold sets for each of the boxes. The
//   // first box's thresholds are set programmatically
//   // since there will be so many of them (for each percentage
//   // point).

//   let thresholdSets = [
//     [],
//     [0.5],
//     [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
//     [0, 0.25, 0.5, 0.75, 1.0],
//   ];

//   for (let i = 0; i <= 1.0; i += 0.01) {
//     thresholdSets[0].push(i);
//   }

//   // Add each box, creating a new observer for each

//   for (let i = 0; i < 4; i++) {
//     let template = document
//       .querySelector("#boxTemplate")
//       .content.cloneNode(true);
//     let boxID = `box${i + 1}`;
//     template.querySelector(".sampleBox").id = boxID;
//     wrapper.appendChild(document.importNode(template, true));

//     // Set up the observer for this box

//     observerOptions.threshold = thresholdSets[i];
//     observers[i] = new IntersectionObserver(
//       intersectionCallback,
//       observerOptions,
//     );
//     observers[i].observe(document.querySelector(`#${boxID}`));
//   }

//   // Scroll to the starting position

//   document.scrollingElement.scrollTop =
//     wrapper.firstElementChild.getBoundingClientRect().top + window.scrollY;
//   document.scrollingElement.scrollLeft = 750;
// };

// intersectionCallback = (entries) => {
//   entries.forEach((entry) => {
//     let box = entry.target;
//     let visiblePct = `${Math.floor(entry.intersectionRatio * 100)}%`;

//     box.querySelector(".topLeft").innerHTML = visiblePct;
//     box.querySelector(".topRight").innerHTML = visiblePct;
//     box.querySelector(".bottomLeft").innerHTML = visiblePct;
//     box.querySelector(".bottomRight").innerHTML = visiblePct;
//   });
// };

// startup();
