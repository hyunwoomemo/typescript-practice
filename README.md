# Typescript Practice

## 개요 및 빠른 개발 환경 구성

> 타입스크립트

- 2012년 마이크로 소프트에서 발표
- 자바스크립트 기반의 정적 타입 문법을 추가한 프로그래밍 언어!

> 정적 타입의 컴파일 언어

- 자바스크립트(동적 타입) - `런타임에서 동작할 때` 타입 오류 확인
- 타입스크립트(정적 타입) - `코드 작성 단계`에서 타입 오류 확인

![image](https://github.com/hyunwoomemo/typescript-practice/assets/105469077/f6af23d4-dddc-4d43-890a-91552dfbf9d8)

> 개발 환경 구성

1. npm init -y
2. npm i -D parcel typescript
3. src 폴더에 main.ts 파일 생성
4. index.html 파일 생성 후 main.ts 파일 넣어주기
5. tsconfig.json 파일 생성 및 속성 값 넣어주기

## 개념

### 인터페이스

#### 함수 타입 - 호출 시그니처(Call Signature)

```js
interface GetName {
  (message: string): string;
}

interface User {
  name: string;
  age: number;
  getName: GetName;
}

const hyun: User = {
  name: "Hyun",
  age: 30,
  getName(message: string) {
    console.log(message);
    return this.name;
  },
};

hyun.getName("hyun");
```

#### 인덱싱 가능 타입 - 인덱스 시그니처(Index Signature)

```js
// 배열
interface Fruits {
  [item: number]: string;
}

const fruits: Fruits = ["Apple", "Banana", "Cherry"];

// 객체
interface User {
  [key: string]: unknown;
  name: string;
  age: number;
}

const hyun: User = {
  name: "Hyun",
  age: 30,
};

hyun["isValid"] = true;
hyun["emails"] = ["archihw94@gmail.com", "test@gmail.com"];
```

```js
interface Payload {
  [key: string]: unknown;
}

function logValues(payload: Payload) {
  for (const key in payload) {
    console.log(payload[key]);
  }
}

interface User {
  [key: string]: unknown;
  name: string;
  age: number;
  isValid: boolean;
}

const hyun: User = {
  name: "Hyun",
  age: 30,
  isValid: true,
};

logValues(hyun);
```

#### 확장 (상속)

```js
interface UserA {
  name: string
  age: number
}

interface UserB extends UserA {
  isValid: boolean
}

const hyun: UserA = {
  name: 'Hyun',
  age: 85
}

const neo: UserB = {
  name: 'Neo',
  age: 102,
  isValid: true
}
```

```js
interface FullName {
  firstName: string
  lastName: string
}

interface FullName {
  middleName: string
  lastName: string
}

const fullName: FullName = {
  firstName: 'Tomas',
  middleName: 'Sean',
  lastName: 'Connery'
}
```

### 타입 별칭 (Alias)

```js
type TypeA = string;
type TypeB = string | number | boolean;
type User =
  | {
      name: string,
      age: number,
      isValid: boolean,
    }
  | [string, number, boolean];

const userA: User = {
  name: "Neo",
  age: 85,
  isValid: true,
};

const userB: User = ["Evan", 36, false];

function someFunc(param: TypeB): TypeA {
  switch (typeof param) {
    case "string":
      return param.toUpperCase();
    case "number":
      return param.toFixed(2);
    default:
      return "Boolean!";
  }
}
```

type과 interface 중 interface를 권장한다고 한다!

```js
type TypeUser = {
  name: string,
  age: number,
  isValid: boolean,
};

interface InterfaceUser {
  name: string;
  age: number;
  isValid: boolean;
}

const hyun: InterfaceUser = {
  name: "Hyun",
  age: 30,
  isValid: true,
};
```

### 함수 - 명시적 this 타입

```js
interface Cat {
  name: string;
  age: number;
}

const cat: Cat = {
  name: "Lucy",
  age: 3,
};

function hello(this: Cat, message: string) {
  console.log(`Hello ${this.name}, ${message}`);
}

hello.call(cat, "You are pretty awesome!");
```
