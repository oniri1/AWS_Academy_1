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
      console.log("className", this.classNameArr);
      divNameEle.id = `${divName}`;

      if (this.classNameArr != undefined) {
        divNameEle.classList.add(this.classNameArr);
        console.log("작동함?");
      }
      console.log("요소!!!!", divNameEle);
      return divNameEle;
    });
    return test;
  }
  makeIdDiv(rootName, divName, className) {
    this.className = className;
    //값을 입력하지 않았을 시 종료
    if (rootName == undefined && divName == undefined) {
      console.log("nothing get");
      return;
    }
    //하나만 입력 시 보디를 자동으로 부모로 만드는 코드
    if (rootName == undefined || divName == undefined) {
      const body = document.getElementsByTagName("body")[0];
      //보디를 삭제해버렸을 경우
      if (body == undefined) {
        console.log("body is Cant find!");
        return;
      }
      console.log("something undefined");

      //루트 이름을 널 혹은 언디파인 넣을 시
      if (rootName == undefined) {
        rootName = divName;
        console.log("보디안 요소에 클래스 넣기", className);
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
      //정상작동시 코드
      //자식을 가질 부모의 이름
      const rootNameEle = document.getElementById(`${rootName}`);
      if (rootNameEle == undefined) {
        console.log("rootName is Cant find!");
        return;
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
        divNameEle.id = `${divName}`;
        if (this.className != undefined) {
          divNameEle.classList.add(this.className);
        }

        rootNameEle.append(divNameEle);
      }
    }
    // console.log("부모이름 자식이름", rootName, divName);
    this.className = undefined;
    return;
  }
}

const makers = new Makers();

// makers.makeIdDiv(arr);

//메뉴
makers.makeIdDiv("main");
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
makers.makeIdDiv("body-bar", "left-side-bar");

makers.makeIdDiv(
  "left-side-bar",
  ["home", "shorts", "subscribe", "my", "log"],
  "side-boxs"
);

const sideBoxs = document.getElementsByClassName("side-boxs");

for (let i = 0; i < sideBoxs.length; i++) {
  sideBoxs[i].innerText = sideBoxs[i].id;
}
