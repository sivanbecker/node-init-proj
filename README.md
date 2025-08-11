## Base commands for creating a nodeJS based project

### init
git init
npm init -y

### Install core dependencies
npm install fastify @fastify/swagger

### Install TypeScript & types
npm install --save-dev typescript ts-node @types/node

Initialize tsconfig.json:
npx tsc --init --rootDir src --outDir dist --esModuleInterop --resolveJsonModule --strict --module nodenext --target esnext

### Install ESLint + Prettier + configs
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier

Initialize ESLint:
npx eslint --init

### Configure Prettier
Create .prettierrc.json:

echo '{
  "singleQuote": true,
  "semi": true,
  "printWidth": 100,
  "tabWidth": 2,
  "trailingComma": "all"
}' > .prettierrc.json

Ignore build artifacts in ESLint:
echo 'dist\nnode_modules' > .eslintignore

### Install Jest with TypeScript support

npm install --save-dev jest ts-jest @types/jest
npx ts-jest config:init

### Update package.json scripts
npx npm-add-script -k "dev" -v "ts-node src/server.ts"
npx npm-add-script -k "build" -v "tsc"
npx npm-add-script -k "start" -v "node dist/server.js"
npx npm-add-script -k "lint" -v "eslint . --ext .ts"
npx npm-add-script -k "format" -v "prettier --write ."
npx npm-add-script -k "test" -v "jest"

