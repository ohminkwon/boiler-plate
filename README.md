# boiler-plate

## ๐ฆPackages
์ค์นํ  ๊ฐ ํจํค์ง(๋ชจ๋)์ ์ค์น ๋ฒ์ ์ด ๋ค๋ฅธ ๊ฒฝ์ฐ ์ฌ์ฉ๋ฒ์ด ๋ฌ๋ผ์ง ์ ์์ต๋๋ค.
๋ชจ๋  ํจํค์ง๋ฅผ package.json ํ์ผ์ ๋ช์๋ ๋ฒ์ ๊ณผ ๋์ผํ๊ฒ ์ค์นํ๋ ๊ฒ์ ๊ถ์ฅํฉ๋๋ค.
- [axios](https://github.com/axios/axios): HTTP ํด๋ผ์ด์ธํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก, API๋ฅผ ํตํด ์ ๋ณด๋ฅผ ์์ฒญํ๊ธฐ ์ํด ์ฌ์ฉํฉ๋๋ค.
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js): ํด์ํจ์๋ฅผ ํตํ ์ํธํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก, DB ์ ๋ณด ๋ณด์์ ์ํด ์ฌ์ฉํฉ๋๋ค.
- [body-parser](https://github.com/expressjs/body-parser): ๋ฐ์ดํฐ ์์ฒญ, ์๋ต ๋ฐ ๊ฐ๊ณต์ ํ์ํ ๊ณตํต์ ์ธ ์์๊ณผ ๊ธฐ๋ฅ์ ์ํํ๋ ๋ฏธ๋ค์จ์ด๋ก, ๋ฐ์ดํฐ ์ฒ๋ฆฌ๋ฅผ ์ํด ์ฌ์ฉํฉ๋๋ค.
- [cookie-parser](https://github.com/expressjs/cookie-parser): ์์ฒญ๋ ์ฟ ํค๋ฅผ ์ฝ๊ฒ ์ถ์ถํด์ฃผ๋ ๋ฏธ๋ค์จ์ด๋ก, ์ ์  ๊ฒ์ฆ๊ณผ ์ธ์ฆ์ ์ํด ์ฌ์ฉ ํฉ๋๋ค.
- [express](https://github.com/expressjs/express): HTTP์ Connect ์ปดํฌ๋ํธ๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ํ๋ ์น ํ๋ ์์ํฌ๋ก, ์น์๋ฒ๋ก ์ฌ์ฉํฉ๋๋ค.
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken): ์ธ์ฆ ํ ํฐ ์์ฑ์ ์ํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก, ๊ณ์  ์์ฑ ๋ฐ ๋ก๊ทธ์ธ ๊ธฐ๋ฅ์ ์ํด ์ฌ์ฉํฉ๋๋ค.
- [mongoose](https://github.com/Automattic/mongoose): NoSQL ๋ฐ์ดํฐ๋ฒ ์ด์ค์ธ mongoDB๋ฅผ ์ง์ํ๋ ํ์ฅ ๋ชจ๋๋ก, ์น์๋ฒ์ DB์ ์ฐ๊ฒฐ๊ณผ ODM์ ์ํด ์ฌ์ฉํฉ๋๋ค.
- [nodemon](https://github.com/remy/nodemon):Node.js ๊ธฐ๋ฐ ์ดํ๋ฆฌ์ผ์ด์ ๊ฐ๋ฐ์ ํ์ผ ๋ณ๊ฒฝ ๊ฐ์ง์ ์๋ ์ฌ์์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก, ๊ฐ๋ฐ ํธ์์ฑ์ ์ํด ์ฌ์ฉํฉ๋๋ค.
- [concurrently](https://github.com/open-cli-tools/concurrently): ์ฌ๋ฌ ๋ช๋ น์ด๋ฅผ ๋์์ ์ฌ์ฉํ๊ธฐ ์ํ ๋ชจ๋๋ก, ํด๋ผ์ด์ธํธ-์๋ฒ๋ฅผ ๋์์ ์คํ์ํค๊ธฐ ์ํด ์ฌ์ฉํฉ๋๋ค.
- [react-router-dom](https://github.com/remix-run/react-router): SPA ํ๋ฉด ์ ํ์ ์ํด ์ฌ์ฉํ๋ ๋ชจ๋๋ก, ์น ํ์ด์ง ์ด๋์ ์ํด ์ฌ์ฉํฉ๋๋ค.
- [redux](https://github.com/reduxjs/redux): ์ํ ๊ด๋ฆฌ๋ฅผ ์ํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก, ์ ์  ์ํ ๊ด๋ฆฌ๋ฅผ ์ํด ์ก์๊ณผ ๋ฆฌ๋์๋ฅผ ์กฐ์ํ  ๋ ์ฌ์ฉํฉ๋๋ค.
- [redux-promise](https://github.com/redux-utilities/redux-promise): ํ๋ก๋ฏธ์ค ๊ธฐ๋ฐ ๋น๋๊ธฐ ์์์ ์ํ ๋ฏธ๋ค์จ์ด๋ก, 
- [redux-thunk](https://github.com/reduxjs/redux-thunk): ๋ฆฌ๋์ค์์ ๋น๋๊ธฐ ์์์ ์ฒ๋ฆฌํ๊ธฐ ์ํ ๋ฏธ๋ค์จ์ด๋ก, ์ก์ ๊ฐ์ฒด๊ฐ ์๋ ํจ์๋ฅผ ๋์คํจ์นํ๊ธฐ ์ํด ์ฌ์ฉํฉ๋๋ค.
- [antd](https://github.com/ant-design/ant-design): React UI ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก, ํด๋น ํ๋ก์ ํธ ๋์์ธ์ ์ํด ์ฌ์ฉํฉ๋๋ค.
- [@ant-design/icons](https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-react): React UI ๋ผ์ด๋ธ๋ฌ๋ฆฌ [antd](https://github.com/ant-design/ant-design)์ ์์ด์ฝ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก, ํด๋น ํ๋ก์ ํธ ๋์์ธ์ ์ํด ์ฌ์ฉํฉ๋๋ค.



## ๐ Refs
### CRA Proxy
https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually
### React-Router-Dom v6 migration
https://reactrouter.com/docs/en/v6/upgrading/v5
### Ant Design
https://ant.design/
### Inflearn ๊ฐ์: ๋ฐ๋ผํ๋ฉฐ ๋ฐฐ์ฐ๋ ๋ธ๋, ๋ฆฌ์กํธ ์๋ฆฌ์ฆ
https://bit.ly/3o6tzC6