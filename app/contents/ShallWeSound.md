---
date: '2021-12-09'
title: 'Shall We Sound'
summary: '소켓 통신을 기반으로한 음악 공유 스트리밍 플랫폼'
categories: ['Web', 'React', 'Express', 'socket']
thumbnail: './image/shallwesound.png'
type: 'Project'
---

### [프로젝트 repository 바로가기](https://github.com/boostcampwm-2021/WEB21-ShallWeSound)

---

## 📚 기술스택

| division   | stack                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web        | ![socket.io](https://img.shields.io/badge/socket.io-v4.3.1-white?logo=socket.io) ![multer](https://img.shields.io/badge/multer-v1.4.3-white?logo=node.js) ![aws_sdk](https://img.shields.io/badge/aws_sdk-v2.348.0-orange?logo=amazon)                                                                                                                                                 |
| Front-end  | ![TypeScript](https://img.shields.io/badge/TypeScript-v4.4.4-blue?logo=TypeScript) ![Sass](https://img.shields.io/badge/Sass-v1.43.4-pink?logo=Sass) ![React](https://img.shields.io/badge/React-v17.0.2-blue?logo=react)                                                                                                                                                              |
| Back-end   | ![NodeJS](https://img.shields.io/badge/node.js-v14.15-green?logo=node.js) ![Express](https://img.shields.io/badge/Express-v4.16.1-9cf?logo=express) ![TypeScript](https://img.shields.io/badge/TypeScript-v4.4.4-blue?logo=TypeScript)![TypeScript](https://img.shields.io/badge/Redis-v6.2.5-red?logo=redis)![TypeScript](https://img.shields.io/badge/MySQL-v5.7.17-blue?logo=MySQL) |
| Production | ![Naver Cloud Platform](https://img.shields.io/badge/NCP-NaverNCloud-9cf&color=brightgreen?logo=naver) ![PM2](https://img.shields.io/badge/PM2-nodeJS_BG_runtime-9cf?logo=pm2)                                                                                                                                                                                                         |
| Management | ![Git](https://img.shields.io/badge/Git-v2.34.0-red?logo=Git) ![github](https://img.shields.io/badge/GitHub-gray?logo=github)                                                                                                                                                                                                                                                          |
| Formatting | ![eslint](https://img.shields.io/badge/eslint-v2.2.2-purple?logo=eslint) ![prettier](https://img.shields.io/badge/prettier-v9.0.0-yellow?logo=prettier)                                                                                                                                                                                                                                |

## 🛠 주요기능

**_로그인_**, **_공유 스트리밍_**, **_음악 업로드_**, **_음악 검색_**, **_음악 재생_**, **_채팅_**, **_방 만들기_**.

> **👨‍💻 로그인**

로그인은 oauth2.0 인증을 통한 github 로그인과 kakao 로그인을 지원합니다.

<img src="https://user-images.githubusercontent.com/72444675/157401596-4d12b4fc-7d46-4d24-ab7c-3a70dad0b136.gif" width="768px" height="480px">

<br />

<img src="https://user-images.githubusercontent.com/72444675/157401586-f1bb0a2d-3ba2-47d5-a9f4-45486821495e.gif" width="768px" height="480px">

<br />

> **🎧 공유 스트리밍**

SWS의 핵심 기능입니다. 현재 방에 들어와있는 사람들과 음악을 같이 들을 수 있습니다.

방장(호스트)가 듣고있는 부분을 공유하여 싱크를 맞춰서 음악을 같이듣게 됩니다.

<!-- ![https://i.imgur.com/dG2tSme.gif](https://i.imgur.com/dG2tSme.gif) -->

<img src="https://i.imgur.com/dG2tSme.gif" width="768px" height="480px">

방장이 프로그레스바를 움직이면 참여자들의 프로그레스바도 같이 따라서 움직입니다. 물론, 다른 곡을 선택하여 재생하면 그것 또한 방의 참여자들과 공유됩니다.

> **🎼 음악 업로드**

드래그앤 드롭과 첨부 버튼을 통한 직접 첨부를 모두 지원합니다.

<img src="https://user-images.githubusercontent.com/72444675/157402973-841ef63b-6eb5-40ce-b629-e86e6d2e599d.gif" width="768px" height="480px">

<br />

> **🏠 방만들기**

사용자가 방을 생성하고, 다른 사용자가 방에 참가하여 공유 스트리밍을 할 수 있습니다.

각 방은 소켓의 room으로 분리되어 있습니다.

<img src="https://i.imgur.com/93l5CUs.gif" width="768px" height="480px">

<br />

> **💬 유저 채팅**

각 방에 참가한 사용자들이 채팅을 나눌 수 있습니다.

채팅 메세지는 room 별로 분리되어 있습니다.

<img src="https://i.imgur.com/2Wb919i.gif" width="768px" height="480px">

<br />

> **🔎 음악 검색**

음악을 검색하여 공유 플레이리스트에 추가할 수 있습니다.

공유 플레이 리스트 추가, 삭제는 소켓 통신으로 이루어집니다.

<img src="https://i.imgur.com/mWwHst6.gif" width="768px" height="480px">

<br />

## 👍 프로젝트에서 내가 담당한 기술 특장점

### 🚀 소켓 통신을 이용한 데이터 공유

> **SWS의 핵심인 소켓통신 기능입니다.**

1. **소켓 통신을 통한 음악 싱크 맞추기**
   1. 방장의 노래 재생에 참여자들을 맞춰야 하기 때문에 소켓 통신을 이용해 실시간으로 싱크를 맞출 수 있는 기능을 구현했습니다.
   2. 방장이 가지고 있는 Video Tag의 'currentTime' property를 이용해 사용자가 방에 들어올 때 마다 방장이 재생하고 있는 음악의 시간을 보내줘서 싱크를 맞춰 주었습니다.
   3. 방장의 곡이 변경될 때 참여자도 모두 노래가 변경될 수 있게 데이터를 소켓으로 주고받을 수 있게 했습니다.
2. **소켓 통신을 통한 공간 분리**
   1. 여러 개의 방을 만들 수 있어야 하기 때문에 소켓의 `join` 메서드를 이용해 방을 분리했습니다.
   2. `join` 메서드를 이용해 방을 만들고 참가하는 기능과 `broadcast` 메서드를 이용해 방에 있는 참가자들이 데이터를 공유하는 기능(채팅, 공유 스트리밍)을 만들었습니다.
3. **소켓 통신을 통한 공유 플레이리스트**
   1. 각 방의 방장들이 플레이리스트에 음악을 추가하고 삭제할 때, 소켓 통신을 통해 방에 참가한 사용자들에게도 음악 추가 삭제가 실시간으로 나타납니다.
   2. 또한 플레이리스트에서 각 음악을 클릭하여 재생시킬 수 있는데, 이는 클릭 이벤트시 소켓을 통해 해당 노래 정보를 전송하고, 방 내 모든 참가자에게 소켓으로 해당 노래 정보가 전송되어 동시에 같은 노래가 재생됩니다.

### 🛠 이벤트 최적화

> **이벤트에 의해 발생되는 fetch api 호출 수를 최적화 했습니다.**

1. **fetch api 호출 최적화를 위한 throttle 적용**
   1. 음악 추가 모달의 검색창에서는 사용자가 키워드를 입력할 때마다 onChange이벤트가 발생하고 그 키워드에 대한 검색 요청을 서버에 전송하게 됩니다. 하지만 키워드를 입력하는 도중에 매번 검색 요청을 보내는 것이 비효율적이라 판단되었습니다. 따라서 사용자 입력에 대한 즉각적인 반응을 보여주면서 불필요한 검색 요청을 최소화하기위해 throttle을 적용했습니다.

### 🔎 검색 기능 및 요청 결과 최적화

> **검색 속도 향상과 요청 결과 렌더링에 대한 최적화를 고민하였습니다.**

1. **검색 속도 향상을 위해 Full Text Search 적용**
   1. 초기에 검색 요청에 대한 쿼리를 LIKE 연산자를 활용하여 구현하였습니다. 하지만 이 방식은 데이터의 양이 많아질수록 현저히 느려질 것이고, 저희 음악 공유 서비스는 대규모 음원 데이터를 대비하여 구현되어야 하기 때문에 검색 속도 향상의 필요성을 느꼈습니다. 따라서 검색 요청이 수행되는 컬럼인 제목과 가수 컬럼에 FullText Index를 추가하였고 MATCH AGAINST로 쿼리를 구현했습니다.
2. **검색 결과 렌더링을 최소화하기 위해 무한스크롤 적용**
   1. 특정 키워드에 대한 검색 결과를 전부 받아 렌더링하게 되면, 그 속도는 데이터의 양에 비례하여 느려질 것입니다. 따라서 데이터의 일부분만 전송을 하고, 스크롤를 내릴 때마다 추가 요청을 수행하는 무한스크롤 방식을 적용하였습니다.
   2. 무한스크롤 기능을 scroll element의 scrollTop, scrollHeight, clientHeight 속성을 이용하여 구현했었는데, 이 방식은 해당 속성 값의 정확한 정보를 위해 reflow가 다시 발생한다는 단점이 있다는 것을 알게되었습니다. throttle 이나 debounce로 최적화를 할 수도 있지만, 스크롤 이벤트 발생시마다 reflow가 수행되는 것을 아예 방지하는 것이 더 좋다고 판단하여 IntersectionObserver를 이용하여 구현을 변경하였습니다.

## 이번 프로젝트에서 깊게 고민했던 부분

### **📌 무한 스크롤 - reflow?**

무한스크롤을 구현하는 방법

- scrollTop + clientHeight >= scrollHeight

  스크롤바가 맨 아래에 닿으면 새로운 데이터를 요청한다.

하지만 scrollTop, clientHeight, scrollHeight 속성들은 reflow를 발생시킨다.

### **🤔 reflow** 란?

Reflow는 화면 구조가 변경되었을 때, 렌더 트리의 노드의 정확한 위치와 크기를 계산하는 과정을 Reflow라고 한다.

### **🤔 reflow를 유발하면 왜 안 좋은데?**

브라우저는 reflow 최적화를 위해 레이아웃 변경을 큐에 저장했다가 한번에 실행한다. 그런데 scrollTop과 같이 계산된 스타일 정보를 요청할 때마다 정확한 정보를 제공하기 위해 큐에 있던 테스크를 모두 수행한 뒤 reflow를 수행한다. 이는 브라우저의 자연스러운 주기에 맞춰 reflow가 되는게 아닌 사용자의 필요에 의해 강제로 수행하기 되는 것이다.

### **🤔 개선 방법**

- throttle
  - 스크롤을 움직일 때마다 scrollTop과 같은 정보가 요청되는데, throttle을 적용하여 요청 간격을 넓힌다.
- requestAnimationFrame
  - requestAnimationFrame을 사용하여 60fps 기준으로 브라우저가 reflow에 최적화된 시점에 수행할 수 있도록 한다.
- IntersectionObserver
  - 스크롤 범위 맨 아래 부분에 특정 요소를 넣어둔 뒤 스크롤을 내려 그 요소가 나타날 때 데이터를 요청하여 scrollTop과 같은 스타일 정보를 사용하지 않는다.
