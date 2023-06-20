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
