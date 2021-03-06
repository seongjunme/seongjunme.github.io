---
date: '2021-10-28'
title: '[JS] this'
categories: ['JavaScript']
summary: 'JavaScript의 문법 중 this에 대해 알아보자.'
thumbnail: './image/js.png'
type: 'Blog'
---

# this 키워드가 필요한 이유

JS에서 객체는 상태를 나타내는 프로퍼티와 동작을 나타내는 메서드를 하나의 논리적인 단위로 묶은 복합적 자료구조다.

동작을 나타내는 메서드는 자신이 속한 객체의 상태, 즉 프로퍼티를 참조하고 변경할 수 있어야 한다.
이때 메서드가 자신이 속한 객체의 프로퍼티를 참조하려면 먼저 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.

<br />

```
const circle = {
	radius: 5,
    getDiameter() {
    	return 2*circle.radius
    }
}
```

<br />
getDiameter 메서드 내에서 메서드 자신이 속한 객체를 가리키는 식별자 circle를 참조하고 있다.
getDiameter 메서드가 호출되는 시점은 이미 circle 객체가 생성되어 식별자에 할당되었기 때문에 참조가 가능하다.

하지만 자기 자신이 속한 객체를 재귀적으로 참조하는 방식은 일반적이지 않으며 바람직하지도 않다.

또, 생성자 함수 방식으로 인스턴스를 생성하는 경우를 생각해보자.

<br />

```
function Circle(radius) {
	???.radius = radius
}
```

<br />

생성자 함수 내부에서는 프로퍼티 또는 메서드를 추가하기 위해 자신이 생성할 인스턴스를 참조할 수 있어야 한다. 하지만 생성자 함수에 의한 객체 생성 방식은 먼저 생성자 함수를 정의한 이후 new 연산자와 함께 생성자 함수를 호출하는 단계가 추가로 필요하다. 다시 말해, 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수가 존재해야 한다. <br />

생성자 함수를 정의하는 시점에는 아직 인스턴스를 생성하기 이전이므로 생성자 함수가 생성할 인스턴스를 가리키는 식별자를 알 수 없다. 따라서 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 특수한 식별자가 필요하다. 이를 위해 JS에선 this 키워드를 제공한다. <br />

**즉, this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다.**

this는 자바스크립트 엔진에 의해 암묵적으로 생성되며, 코드 어디서든 참조할 수 있다.
함수를 호출하면 arguments 객체와 this가 암묵적으로 함수 내부에 전달된다.
arguments를 지역 변수처럼 사용할 수 있는 것 처럼 this도 지역 변수처럼 사용할 수 있다.

**단, this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.**

> 바인딩이란 식별자와 값을 연결하는 과정을 의미한다. 예를 들어 변수 선언은 변수 이름(식별자)과 확보된 메모리 공간의 주소를 바인딩하는 것이다.

이제 위의 예시 코드를 this를 이용하여 다시 작성해보자.

<br />

```
const circle = {
	radius: 5,
    getDiameter() {
    	return 2*this.radius
    }
}
```

<br />

**객체 리터럴의 메서드 내부에서의 this는 메서드를 호출한 객체, 즉 circle를 가리킨다.**

<br />

```
function Circle(radius) {
	this.radius = radius
}
```

<br />

**생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.**

# 함수 호출 방식과 this 바인딩

## 일반 함수 호출

일반 함수 호출은 기본적으로 this에 전역 객체(window)가 바인딩 된다.
<br />

```
function foo() {
	console.log(this) // window

    function bar() {
    	console.log(this) //window
    }
}
```

<br />

콜백 함수로 일반 함수가 호출된다면 마찬가지로 window를 가리킨다.
<br />

```
const value = 1

const obj = {
	value: 100,
    foo() {
    	setTimeout(function() {
        	console.log(this.value) // 1
        }, 1000)
    }
}
```

<br />

하지만 화살표 함수를 사용한다면 함수 내부의 this는 상위 스코프의 this를 가리킨다.
<br />

```
const value = 1

const obj = {
	value: 100,
    foo() {
    	setTimeout(() => {
        	console.log(this.value) // 100
        }, 1000)
    }
}
```

<br />

## 메서드 호출

메서드 내부의 this에는 메서드를 호출한 객체, 즉 메서드를 호출할 때 메서드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체가 바인딩된다.

주의 해야할 것은 this는 메서드를 소유한 객체가 아닌 메서드를 호출한 객체에 바인딩 된다는 것이다.

<br />

```
const person = {
	name: 'Lee',
    getName() {
    	return this.name
    }
}

const anotherPerson = {
	name: 'Kim',
}

anotherPerson.getName = person.getName

console.log(anotherPerson.getName()) // Kim

const getName = person.getName

console.log(getName()) // ''

```

<br />
anotherPerson에 person의 getName 메서드를 할당했지만 this는 호출한 객체가 바인딩 되므로 Kim이 출력된다.

그리고 getName에도 person의 getName 메서드를 할당했지만 this는 전역 객체인 window의 name에 접근하게 된다.

> 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ''이다.

## 생성자 함수 호출

생성자 함수 내부의 this는 생성자 함수가 (미래에) 생성할 인스턴스가 바인딩 된다.
<br />

```
function Circle(radius) {
	this.radius = radius,
    getDiameter() {
    	return 2*this.radius
    }
}

const circle1 = new Circle(5)
const circle2 = new Circle(10)

console.log(circle1.getDiameter()) // 10
console.log(circle2.getDiameter()) // 20
```

<br />

## Function.prototype.apply/call/bind 메서드에 의한 간접 호출

### apply와 call

apply와 call 메서드의 본질적인 기능은 함수를 호출하는 것이다.
함수를 호출하면서 첫 번째 인자로 전달한 특정 객체를 호출한 함수의 this에 바인딩한다.
<br />

```
function getThisBinding() {
	console.log(arguments)
	return this
}

const thisArg = { a: 1}

console.log(getThisBinding.apply(thisArg, [1, 2, 3]))
// Arguments(3) [1, 2, 3, callee: f, Symbol.iterator): f]
// {a: 1}
console.log(getThisBinding.call(thisArg, 1, 2, 3)) // {a: 1}
// Arguments(3) [1, 2, 3, callee: f, Symbol.iterator): f]
// {a: 1}
```

<br />
apply와 call 메서드는 호출할 함수에 인자를 전달하는 방식만 다를 뿐 동일하게 동작한다.

### bind

bind 메서드는 apply, call과 달리 함수를 바로 호출하지 않고 this로 사용할 객체만 전달한다.
<br />

```
function getThisBinding() {
	console.log(arguments)
	return this
}

const thisArg = { a: 1}

console.log(getThisBinding.bind(thisArg)) // getThisBinding
console.log(getThisBinding.bind(thisArg)()) // { a: 1 }
```

<br />
그리고 bind 메서드는 메서드의 this와 메서드 내부의 중첩 함수 또는 콜백 함수의 this가 불일치하는 문제를 해결하기 위해 유용하게 사용된다.
<br />
<br />

```
const person = {
	name: 'Lee',
    foo(callback) {
    	setTimeout((callback.bind(this), 100)
    }
}

person.foo(function () {
	console.log(this.name) // Lee
})
```

<br />

## 이벤트 핸들러 안에서 쓴 this

이벤트 핸들러 안에서 쓰는 this는 이벤트를 받는 HTML 요소를 가리킨다.
<br />

```
const button = document.querySelector('#btn')
button.addEventListener('click', function {
	console.log(this) // #btn
}
```

<br />
하지만 화살표 함수의 경우 상위 스코프의 this인 window를 가리킨다.
<br />
<br />

```
const button = document.querySelector('#btn')
button.addEventListener('click', () => {
	console.log(this) // window
}
```

<br />

> 참고 자료
> [모던 자바스크립트 Deep Dive](https://wikibook.co.kr/mjs/)
