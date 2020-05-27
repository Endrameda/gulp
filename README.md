Данная сборка не моя, я только модифицировал ее.

## Установка

Для сборки необходимо установить:
[nodejs](https://nodejs.org/en/), подробнее [здесь](https://nodejs.org/en/download/)
и
[gulp4](https://github.com/gulpjs/gulp), подробнее [здесь](https://demisx.github.io/gulp4/2015/01/15/install-gulp4.html)
```
npm i gulpjs/gulp-cli -g
```
Установить пакеты локально

```
npm install
```


## Сборка для разработки

Для запуска тестового сервера
```
gulp
```

## Сборка для продакшена

````
gulp --type build
````

Собранные файлы будут находится в папке ./build


## Технологии

В проекте используется стек технологий:

[gulp](https://github.com/gulpjs/gulp) - сборка проекта

[webpack](https://github.com/webpack/webpack) - бандлер для JS файлов

[babel](https://github.com/babel/babel) - JS-транспайлер Babel 7

[pug](https://github.com/pugjs/pug) - шаблонизатор HTML

[scss](https://github.com/sass) - препроцессор CSS

[stylelint](https://github.com/stylelint/stylelint) - строгий линтер SCSS

[eslint](https://github.com/eslint/eslint) - строгий линтер JS

[prettier](https://github.com/prettier/prettier) - строгий режим кода

### Линтеры
Линтеры работают в live режиме. В этом режиме происходит уведомление в консоли пользователя об ошибках.
Ошибки линтера скриптов не дают возможности дальнейшей компиляции кода в отличии от линтера стилей. А вот грубые ошибки синтаксиса стилей останавлваются компиляцию, но не завершают работу gulp.
Все правки осуществляются вручную, кроме упорядочивания стилей командой ```npm run stylelint```. 
После запуска команды плагин расставит стили в нужном порядке и отобразит ошибки, если они есть.

## Работа с библиотеками, отсутствующих в npm
Библиотеки складировать в эту папку src/module

## Px to rem
Нет необходимости создавать миксины для конвертации px в rem. Все пишем в px, на выходе будет rem.

## Медиа запросы
Нет необходимости размещать медиа запросы в самом конце файла стилей или прятать файл куда-либо.
При сборке все медиа запросы будут сгруппированы как нужно.

## Генерация файла стилей для svg спрайта
Данный файл генерируется при любой сборке и руками его не править ./src/css/content/icon-generated-DO-NOT-EDIT.scss

## Генерация файла стилей для png спрайта
Данный файл генерируется при любой сборке и руками его не править ./src/css/content/sprite-DO-NOT-EDIT.scss


