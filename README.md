# boiler-plate

## 📦Packages
설치할 각 패키지(모듈)의 설치 버전이 다른 경우 사용법이 달라질 수 있습니다.
모든 패키지를 package.json 파일에 명시된 버전과 동일하게 설치하는 것을 권장합니다.
- [axios](https://github.com/axios/axios): HTTP 클라이언트 라이브러리로, API를 통해 정보를 요청하기 위해 사용합니다.
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js): 해시함수를 통한 암호화 라이브러리로, DB 정보 보안을 위해 사용합니다.
- [body-parser](https://github.com/expressjs/body-parser): 데이터 요청, 응답 및 가공에 필요한 공통적인 양식과 기능을 수행하는 미들웨어로, 데이터 처리를 위해 사용합니다.
- [cookie-parser](https://github.com/expressjs/cookie-parser): 요청된 쿠키를 쉽게 추출해주는 미들웨어로, 유저 검증과 인증을 위해 사용 합니다.
- [express](https://github.com/expressjs/express): HTTP와 Connect 컴포넌트를 기반으로 하는 웹 프레임워크로, 웹서버로 사용합니다.
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken): 인증 토큰 생성을 위한 라이브러리로, 계정 생성 및 로그인 기능을 위해 사용합니다.
- [mongoose](https://github.com/Automattic/mongoose): NoSQL 데이터베이스인 mongoDB를 지원하는 확장 모듈로, 웹서버와 DB의 연결과 ODM을 위해 사용합니다.
- [nodemon](https://github.com/remy/nodemon):Node.js 기반 어플리케이션 개발시 파일 변경 감지와 자동 재시작 라이브러리로, 개발 편의성을 위해 사용합니다.
- [concurrently](https://github.com/open-cli-tools/concurrently): 여러 명령어를 동시에 사용하기 위한 모듈로, 클라이언트-서버를 동시에 실행시키기 위해 사용합니다.
- [react-router-dom](https://github.com/remix-run/react-router): SPA 화면 전환을 위해 사용하는 모듈로, 웹 페이지 이동을 위해 사용합니다.
- [redux](https://github.com/reduxjs/redux): 상태 관리를 위한 라이브러리로, 유저 상태 관리를 위해 액션과 리듀서를 조작할 때 사용합니다.
- [redux-promise](https://github.com/redux-utilities/redux-promise): 프로미스 기반 비동기 작업을 위한 미들웨어로, 
- [redux-thunk](https://github.com/reduxjs/redux-thunk): 리덕스에서 비동기 작업을 처리하기 위한 미들웨어로, 액션 객체가 아닌 함수를 디스패치하기 위해 사용합니다.
- [antd](https://github.com/ant-design/ant-design): React UI 라이브러리로, 해당 프로젝트 디자인을 위해 사용합니다.
- [@ant-design/icons](https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-react): React UI 라이브러리 [antd](https://github.com/ant-design/ant-design)의 아이콘 라이브러리로, 해당 프로젝트 디자인을 위해 사용합니다.



## 📚 Refs
### CRA Proxy
https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually
### React-Router-Dom v6 migration
https://reactrouter.com/docs/en/v6/upgrading/v5
### Ant Design
https://ant.design/
### Inflearn 강의: 따라하며 배우는 노드, 리액트 시리즈
https://bit.ly/3o6tzC6