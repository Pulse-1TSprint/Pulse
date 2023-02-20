## API
## run on port 3500

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```


## Для работы сервера нужно скачать mysql, создать таблицу с помощью запроса, содержащегося в файле server/model/db/track.sql
## Затем в папке server нужно создать файл .env и заполнить его по этому примеру (данные могут отличаться)
MYSQL_HOST="127.0.0.1"
MYSQL_USER="root"
MYSQL_PASSWORD="root"
MYSQL_DATABASE="pulse"


## Запросы к api
## http://localhost:3500/api/

## Получить трек по id
 1. track/:id (id - число)
 Пример:
 track/207 - возвращает файл(сам трек, mp3), который имеет id 207

 2. tracks/:count (count - число)
 Пример:
 tracks/5 - возвращает массив из данных из БД о последних 5 треках, добавленных в БД (файл хранится отдельно)

