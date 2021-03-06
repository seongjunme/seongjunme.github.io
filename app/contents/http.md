---
date: '2021-08-09'
title: 'HTTP 프로토콜 특징'
categories: ['CS']
summary: '프로토콜 종류인 HTTP에 대해 알아보자.'
thumbnail: './image/cs.jpeg'
type: 'Blog'
---

# 1. HTTP

---

HTTP (Hyper Text Transfer Protocol)은 www상에서 정보를 주고 받을 수 있는 하나의 프로토콜이다. 주로 HTML을 주고 받는다.

- 프로토콜이란 상호 간에 정의한 규칙을 의미하며 소스와 타켓이 데이터를 주고 받기 위해 정의 되었다.

## 1.1 HTTP 프로토콜의 특징

---

- HTTP 프로토콜은 상태가 없는 (stateless) 프로토콜이다.
- 즉, 데이터를 주고 받기 위한 각각의 데이터 요청이 서로 독립적이다.
- 쉽게 말하면, 이전 데이터 요청과 다음 데이터 요청이 서로 관련이 없다.
- HTTP는 일반적으로 TCP 통신을 하며 기본 포트는 80번이다.

## 1.2 HTTP 요청 & 응답

---

HTTP 프로토콜은 데이터를 주고 받기 위해 아래와 같이 요청(Request)를 보내고 응답(Response)을 받아야 한다.

<img src="https://user-images.githubusercontent.com/72444675/159242552-0f367133-068c-4e87-bb0f-30eb913de8ed.png" width="700px">

[https://joshua1988.github.io/web-development/http-part1/](https://joshua1988.github.io/web-development/http-part1/)

- 여기서 클라이언트(브라우저)는 서버에 요청을 보내고, 서버는 클라이언트에게 요청에 대한 응답을 준다.
- 예를 들어 브라우저 주소창에 www.naver.com을 입력하면 네이버 서버에 html문서를 요청(Request)한 것이고, 네이버 서버는 내 브라우저에게 응답(Response)을 보내 html문서가 전송된다.

### URL 구조

![url-structure (1)](https://user-images.githubusercontent.com/72444675/159242610-d8484ca1-4d3b-4c42-95b3-c7a0ae1b79df.png)

- url에 resource path를 넣어 특정 데이터를 요청할 수 있다.
- 또한 쿼리문을 넣어 데이터베이스로 부터 데이터를 가져오기도 한다.

## 1.3 HTTP 메서드

---

앞서 말했듯이 url을 이용해 서버에게 특정 데이터를 요청한다.

여기서 요청하는 데이터에 특정 동작을 수행하고 싶으면 HTTP 요청 메서드를 이용한다.

- **GET** : 존재하는 자원에 대한 **요청**
- **POST** : 새로운 자원을 **생성**
- **PUT** : 존재하는 자원에 대한 **변경**
- **DELETE** : 존재하는 자원에 대한 **삭제**

예를 들어 페이스북에서 게시물을 보려면 get요청을 통해 데이터를 불러와 볼 수 있고, 게시물을 올리려면 post요청을 통해 새로운 데이터를 등록할 수 있다.

## 1.4 HTTP 상태 코드

---

클라이언트가 서버에게 요청(Response)을 보내면 서버는 상태에 따라 응답을 보내 준다. 이 때 여러 상태에 따른 다양한 코드들이 존재한다.

### 2xx - 성공

200번대의 상태 코드는 대부분 성공을 의미한다.

- 200: GET 요청에 대한 성공
- 204: 성공했으나 응답 본문에 데이터가 없음 (No Content)
- 205: 성공했으나 클라이언트의 화면을 새로 고침하도록 권고 (Reset Content)
- 206: 성공했으나 일부 범위의 데이터만 반환 (Partial Content)

### 3xx - 리다이렉션

300번대의 상태 코드는 대부분 클라이언트가 이전 주소로 데이터를 요청하여 서버에서 새 URL로 리다이렉트를 유도하는 경우이다.

- 301 : 요청한 자원이 새 URL에 존재 (Moved Permanently)
- 303 : 요청한 자원이 임시 주소에 존재 (See Othe)
- 302: 하이퍼텍스트 전송 프로토콜 (HTTP)의 302 Found 리다이렉트 상태 응답 코드는 클라이언트가 요청한 리소스가 Location (en-US) 헤더에 주어진 URL에 일시적으로 이동되었음을 가리킨다.
- 304 : 요청한 자원이 변경되지 않았으므로 클라이언트에서 캐싱된 자원을 사용하도록 권고. [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag)와 같은 정보를 활용하여 변경 여부를 확인 (Not Modified)

### 4xx - 클라이언트 에러

400번대 상태 코드는 대부분 클라이언트의 코드가 잘못된 경우이다.

유효하지 않은 자원을 요청 했거나, 요청이나 권한이 잘못된 경우 발생한다.

가장 익숙한 상태 코드는 404 코드 이며, 요청한 자원이 서버에 없다는 의미이다.

- url을 잘못 입력했거나
- url에 들어간 resouce path가 유효하지 않거나
- 쿼리문이 잘못 됐거나 등

- 400 : 잘못된 요청 (Bad Request)
- 401 : 권한 없이 요청. Authorization 헤더가 잘못된 경우 (Unauthorized)
- 403 : 서버에서 해당 자원에 대해 접근 금지 (Forbidden)
- 405 : 허용되지 않은 요청 메서드 (Method Not Allowed)
- 409 : 최신 자원이 아닌데 업데이트하는 경우. (Conflict)

## 1.5 Request & Response

---

### HTTP Request

- Method

  - GET: 리소스를 요청하고 반환 받기 위해 사용되는 메소드이다.
  - HEAD: 메시지 헤더 정보를 얻는다.
  - POST: 요청된 자원을 생성하기 위해 사용된다.
  - PUT: 요청된 자원을 수정하기 위해 사용한다.
  - PATCH: PUT과 다르게 자원의 일부만 수정한다.
  - DELETE: 요청한 자원을 삭제한다.
  - TRACE: 루프백 메시지를 호출하기 위한 테스트용
  - OPTION: 웹 서버에서 지원하는 메소드를 알아본다.
  - CONNECT: 프락시 기능을 요청할 때 사용한다.

- Header

```jsx
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/ *;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
https://gmlwjd9405.github.io/2019/01/28/http-header-types.html
```

- Host
  요청하는 호스트에 대한 호스트명 및 포트번호 (필수 항목)
- User-Agent
  클라이언트 소프트웨어(브라우저, OS) 명칭 및 버전 정보
- Cookie
  서버에 의해 Set-Cookie로 클라이언트에게 설정된 쿠키 정보
  (쿠키/캐시 관련)
- Referer
  바로 직전에 머물었던 웹 링크 주소
- If-Modified-Since
  제시한 일시 이후로만 변경된 리소스를 취득 요청
- Authorization
  인증 토큰(JWT/Bearer 토큰)을 서버로 보낼 때 사용하는 헤더
  “토큰의 종류(Basic, Bearer 등) + 실제 토큰 문자”를 전송
- Origin
  서버로 POST 요청을 보낼 때, 요청이 어느 주소에서 시작되었는지 나타낸다.
  여기서 요청을 보낸 주소와 받는 주소가 다르면 CORS 에러가 발생한다.
  응답 헤더의 Access-Control-Allow-Origin와 관련
  다음 4개는 주로 HTTP 메세지 Body의 속성 또는 내용 협상용 항목들
- Accept
  클라이언트 자신이 원하는 미디어 타입 및 우선순위를 알린다.
  텍스트(text/html,text/plain,…),이미지(image/jpeg,…) 등
  Ex) Accept: _/_
  어떤 미디어 타입도 가능하다.
  Ex) Accept: image/\*
  모든 이미지 유형이 가능하다.
- Accept-Charset
  클라이언트 자신이 원하는 문자 집합
- Accept-Encoding
  클라이언트 자신이 원하는 문자 인코딩 방식
- Accept-Language
  클라이언트 자신이 원하는 가능한 언어
  각각이 HTTP Entity Header 항목 중에 Content-Type, Content-Type charset-xxx, Content-Encoding, Content-Language과 일대일로 대응된다.

### HTTP Response

```jsx
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
Etag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: mykey=myvalue; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY
https://gmlwjd9405.github.io/2019/01/28/http-header-types.html
```

- Header
  - Server
    서버 소프트웨어 정보
  - Set-Cookie
    서버측에서 클라이언트에게 세션 쿠키 정보를 설정 (RFC 2965에서 규정)
  - Expires
    리소스가 지정된 일시까지 캐시로써 유효함을 나타낸다. 즉, 응답 컨텐츠가 언제 만료되는지를 나타낸다.
    Ex) Expires: Thu, 26 Jul 2018 07:28:00 GMT
    Cache-Control과 별개로 응답에 Expires라는 헤더를 줄 수 있다.
    단, Cache-Control의 max-age가 있는 경우 이 헤더는 무시
  - Age
    캐시 응답. max-age 시간 내에서 얼마나 흘렀는지 초 단위로 알려준다.
  - ETag
    HTTP 컨텐츠가 바뀌었는지를 검사할 수 있는 태그
  - Allow
    해당 엔터티에 대해 서버 측에서 지원 가능한 HTTP 메소드의 리스트를 나타낸다. 때론, HTTP 요청 메세지의 HTTP 메소드 OPTIONS에 대한 응답용 항목으로 사용된다. - OPTIONS: 웹서버측 제공 HTTP 메소드에 대한 질의 - Ex) Allow: GET,HEAD
    405 Method Not Allowed 에러와 함께
    웹 서버에서 제공 가능한 HTTP 메서드는 GET, HEAD 뿐임을 알린다.
  - Access-Control-Allow-Origin
    요청을 보내는 프론트 주소와 받는 백엔드 주소가 다르면 CORS 에러가 발생 서버에서 이 헤더에 프론트 주소를 적어주어야 에러가 나지 않는다. - Ex) Access-Control-Allow-Origin: www.boostcamp
    프로토콜, 서브도메인, 도메인, 포트 중 하나만 달라도 CORS 에러가 난다. - Ex) Access-Control-Allow-Origin: *
    만약 주소를 일일이 지정하기 싫다면 *으로 모든 주소에 CORS 요청을 허용되지만 그만큼 보안이 취약해진다.
