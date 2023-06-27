# так же берём готовый контейнер с node на основе alpine
FROM node:18-alpine as build-react
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

#Переменные окружения 
RUN cat > .env

ARG API_URL
RUN echo "REACT_APP_API_URL = "$API_URL >> .env

RUN cat  ./.env

RUN  npm run build:prod







