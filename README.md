# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## git hooks 设置

# husky

-[github 地址](https://typicode.github.io/husky/#/?id=bypass-hooks)

- [操作文档地址] (https://www.cnblogs.com/ly0612/p/15545803.html)

# 1、npm install husky lint-staged prettier --save-dev

# 2、npx husky install 　　 【启用】

# 3、"prepare": "husky install" 【install 后自动启用，这个操作一定要做，否则下次新拉代码还需要手动启用】

# 4、npx husky add .husky/pre-commit "npm run lint-staged" 【创建一个 hook，执行完根目录回生成一个.husky 目录】

# 5、继续在 scripts 里面添加　　"lint": "eslint --ext .js,.jsx,.ts,.tsx src", "lint-staged": "lint-staged"

# 6、package.json 里面添加 　"lint-staged": {"\*.{vue,js,ts,jsx,tsx,md,json}": "eslint --fix&&npm run lint"}
