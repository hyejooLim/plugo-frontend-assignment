# <img src="https://github.com/hyejooLim/plugo_practice/assets/71072930/9c1bbbc2-e7a0-4e41-bb39-d283b5f9b9ea"/> Plugo Frontend Assignment

</br>

## 🙌🏻 프로젝트 소개
상품을 등록하고 구매할 수 있는 이커머스 웹 사이트입니다. 

</br>

## 👩🏻‍💻 과제 요구사항
### MVP 아키텍쳐
* Admin: Create Product
* Product List Page
* Product Detail Page
* Add to Cart Button
* Cart Detail Page

### 추가 구현 페이지
* Home Page
  * 메인 페이지입니다.
* NewArrivals Page
  * 신상품들만 모아볼 수 있는 페이지입니다.
* Category/:id Page
  * 상품을 카테고리 별로 볼 수 있는 페이지입니다.

</br>

## 🚀 사용한 기술
### Frontend
* React
* TypeScript
  * 타입 기반의 안전한 프로그래밍을 위해 사용했습니다.
* react-router-dom
  * 웹 상에서의 페이지 라우팅을 위해 사용했습니다.
* react-query
  * 비동기 데이터를 효율적으로 관리하고, 서버와 클라이언트의 상태를 명확히 구분하기 위해 사용했습니다.
* recoil
  * React state를 전역으로 관리하기 위해 사용했습니다.
* axios
  * 비동기 API 요청 간의 Interceptors 기능을 위해 사용했습니다.
* antd
* styled-components

### Backend
* Mock-up Server
  * Backend API 통신을 위해 mock-up 서버를 구축하여 프론트 개발을 진행했습니다.
  * mock-up 서버에 각 요청마다 임의의 Response를 등록해놓고 HTTP 요청을 수행합니다.
  * 실제 서버가 아니기 때문에 실제 CRUD 연산이 불가능합니다.
  * 실제 서버와 통신할 경우, 각 기능이 정상 동작하도록 개발하였습니다.

</br>

## 🌳 폴더 구조
| 폴더명 | 의미 |
|:----------|:----------|
| apis | 서버와의 REST API 통신 |
| components | 재사용가능한 컴포넌트 |
| hooks | react-query Custom Hook, 공통 Hook 작성 |
| pages | 웹 사이트의 각 페이지 컴포넌트 |
| recoil | state를 전역으로 관리하기 위한 atom 작성 |
| styles | 스타일 관련 컴포넌트 |
| utils | 유틸리티 함수 작성 |

</br>

## 💡 프로젝트 실행 방법
```shell
npm run start
```

</br>

