const main = document.getElementById("main");

//맨 윗줄에 div로

class Makers {
  headBar = document.createElement("div");

  //배열로 받은 str을 요소 이름으로 반환
  arrDiv(divName) {
    const test = divName.map((divName) => {
      const divNameEle = document.createElement("div");
      console.log("divname", divName);
      divNameEle.id = `${divName}`;
      return divNameEle;
    });
    return test;
  }
  makeIdDiv(rootName, divName) {
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
        console.log("이상한 값 넣지마 그래도 보디에 추가는 해줬다", divName);
      }
      //배열로 받을 시
      if (Array.isArray(rootName)) {
        const arrDiv = this.arrDiv(rootName);

        arrDiv.reverse();
        arrDiv.forEach((element) => {
          body.prepend(element);
        });
      }
      //배열로 받지 않을 시
      else {
        const divNameEle = document.createElement("div");
        divNameEle.id = `${rootName}`;

        body.prepend(divNameEle);
      }

      //앞 자식에 넣는다.
      body.prepend();
      return;
    } else {
      //자식을 가질 부모의 이름
      const rootNameEle = document.getElementById(`${rootName}`);
      if (rootNameEle == undefined) {
        console.log("rootName is Cant find!");
        return;
      }

      //자식을 배열로 받을 시
      if (Array.isArray(divName)) {
        const arrDiv = this.arrDiv(divName);

        arrDiv.forEach((element) => {
          rootNameEle.append(element);
        });
      }
      //배열로 받지 않을 시
      else {
        const divNameEle = document.createElement("div");
        divNameEle.id = `${divName}`;

        rootNameEle.append(divNameEle);
      }
    }
    console.log("부모이름 자식이름", rootName, divName);
    return;
  }
}

const makers = new Makers();

let arr = ["menu-toggle-Switch", "logo", "searchBar"];

// makers.makeIdDiv(arr);

makers.makeIdDiv("main");
makers.makeIdDiv("main", "head-bar");

// makers.makeIdDiv("head-bar", "menu-toggle-Switch");
// makers.makeIdDiv("head-bar", "logo");
// makers.makeIdDiv("head-bar", "searchBar");
makers.makeIdDiv("head-bar", arr);

makers.makeIdDiv("searchBar", "search-bar-logo");
