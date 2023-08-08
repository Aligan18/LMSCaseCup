# Используем базовый образ с установленным Node.js для сборки React приложения
FROM node:14 AS react-build
WORKDIR /app
COPY frontend/ /app/
RUN npm install
RUN npm run build:prod

# Используем базовый образ с установленным Python для Django REST Framework
FROM python:3.8 AS django-backend
WORKDIR /app
COPY backend/lmssite/ /app/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
COPY .env .
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# Используем официальный образ Nginx для веб-сервера
FROM nginx:latest
COPY --from=react-build /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# Предполагается, что у вас есть файл default.conf в папке nginx с настройками Nginx
# server {
#   listen 80;
#   server_name localhost;
#   
#   location / {
#     root /usr/share/nginx/html;
#     index index.html;
#     try_files $uri $uri/ /index.html;
#   }
# }
# COPY ./nginx/nginx-setup.conf /etc/nginx/conf.d/default.conf
# COPY ./frontend/.build /var/www/react
# COPY ./frontend/public/locales /var/www/react/locales