FROM nginx

COPY ./nginx/nginx-setup.conf /etc/nginx/conf.d/default.conf
COPY ./frontend/.build /var/www/react
COPY ./frontend/public/locales /var/www/react/locales