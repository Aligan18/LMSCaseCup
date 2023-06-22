# так же берём готовый контейнер с node на основе alpine
FROM node:18-alpine as build
# Задаем рабочий каталог
WORKDIR /react
# Копируем туда наши json файлы
COPY package.json .
COPY tsconfig.json .
COPY webpack.config.ts .
COPY babel.config.json .
# Устанавливаем все пакеты и зависимости указанные в json
RUN npm install
# Добавляем каталоги public и src. 
# можно воспользоваться командой COPY . . но если вы синхронизировали node_modules,
ADD ./public ./public
ADD ./src ./src
ADD ./config ./config

RUN npm run build:prod





