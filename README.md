# 환경 설정

yarn create react-app "프로젝트 이름" --template typescript

yarn add node-sass classnames react-icons

# 에러 사항

ERROR in [eslint] Failed to load parser 'babel-parser' declared in '.eslintrc': Cannot find module 'babel-parser' Require stack:

    {
      "extends": ["airbnb", "prettier", "prettier/react"],
      "plugins": ["prettier"],
      "parser": "react-scripts/node_modules/babel-eslint"
    }
