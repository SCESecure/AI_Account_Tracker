# AI 가계부

이 프로그램은 사용자가 자산이나 소비, 지출 내역을 입력하게 되면, AI가 자동으로 이를 분석하여 사용자에게 조언 해 주는 프로그램입니다.

## 프로그램 설치

이 프로그램은 React + Vite를 기반으로 만들어진 프로그램입니다.
따라서 [Node.js 공식 웹사이트](https://nodejs.org/)에서 Node.js를 설치하십시오.
그 후 프로젝트 내에서 다음 명령어를 입력하십시오.

```bash

npm install
npm run dev

```

- `npm install` 명령어는 해당 프로그램에 필요한 패키지들을 설치하는 명령어 입니다.
- `npm run dev` 명령어는 프로그램을 실행하는 명령어입니다.
- 기본 포트는 5173이며, 따라서 프로그램을 실행한 뒤 웹 브라우저에서 5173 포트로 이동하여 실행하십시오.

### openAI API 연동

이 프로그램에는 openAI API key가 필요합니다.
최상위 폴더에 `.env` 파일을 생성한 뒤 아래와 같이 작성하십시오.

```
VITE_OPENAI_API_KEY=(API 키)
```

## 프로그램 구조

`App.tsx` 컴포넌트를 중심으로 components/ 폴더 안의 컴포넌트들로 하여금 구성됩니다.
컴포넌트들이 너무 많아서 여러 폴더로 나누어서 구성하였습니다.

- `App.tsx`
  - components/
    - `Header.tsx`
    - Body/
      - `Body.tsx`
      - AI/
        - `AdviseAI.tsx`
        - `AdviseItem.tsx`
        - `AI.tsx`
        - `ButtonAI.tsx`
      - Home/
        - `Expense.tsx`
        - `FiveList.tsx`
        - `Home.tsx`
        - `Income.tsx`
        - `Total.tsx`
      - Input/
        - `AccountItem.tsx`
        - `AccountItemElement.tsx`
        - `Accounts.tsx`
        - `AddAccount.tsx`
        - `Input.tsx`
        - `InputList.tsx`
        - `ValueInput.tsx`
      - List/
        - `Align.tsx`
        - `AllList.tsx`
        - `List.tsx`
        - `ListItem.tsx`
    - Menu/
      - `Menu.tsx`
      - `MenuButton.tsx`

프로그램에 사용된 모든 svg 파일들은 전부 `src/assets/icons` 에 있습니다.

## 기여자

- SCESecure
  - 프로젝트 담당, 전체 레이아웃이나 기능 구현, API 연동
- natoking96
  - 프로그램 스타일 담당
