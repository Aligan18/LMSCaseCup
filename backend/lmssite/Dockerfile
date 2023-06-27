# Стартовый образ
FROM python:3.11-alpine

# рабочая директория
WORKDIR /django
RUN mkdir -p $WORKDIR/static
RUN mkdir -p $WORKDIR/media

# переменные окружения для python
#не создавать файлы кэша .pyc
ENV PYTHONDONTWRITEBYTECODE 1
# не помещать в буфер потоки stdout и stderr
ENV PYTHONUNBUFFERED 1


ENV DJANGO_EMAIL_HOST_USER=lmscasecup@gmail.com
ENV DJANGO_EMAIL_HOST_PASSWORD=dybmayoyabxszbcx
ENV DJANGO_DEFAULT_FROM_EMAIL=lmscasecup@gmail.com
ENV DJANGO_SECRET_KEY=django-insecure-qdst7%@g(=kf3-b^z%nm_11xa2nc+_#7shhop1dzzmhxl-l_fv
ENV DJANGO_SOCIAL_AUTH_GOOGLE_OAUTH2_KEY=849496944737-6gkouljqnt6bqoajmi36gmd6ngmchh7e.apps.googleusercontent.com
ENV DJANGO_SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET=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
ENV DJANGO_SOCIAL_AUTH_GITHUB_SECRET=23ff8a04ece815c0c3d8ddfe587e2248321300d8

# обновим pip
RUN pip install --upgrade pip
# скопируем и установим зависимости. эта операция закешируется
# и будет перезапускаться только при изменении requirements.txt
COPY requirements.txt .
RUN pip install -r requirements.txt

# копируем всё что осталось.
COPY . .

