# Welcome to Parcel Shopify Boilerplate!

Идея взята из [Shopify](https://github.com/Shopify) / **[slate](https://github.com/Shopify/slate)**. И реализована как простая и модифицированая альтернатива.

## Short documentation

Для корректной работы нужны [nodejs](https://nodejs.org/en/) и [npm](https://www.npmjs.com/).
В основным сборщиком является [Parcel](https://parceljs.org/).

### Files

Основная структура шаблона наследует Шопифай [Structure of a theme](https://help.shopify.com/en/manual/using-themes/theme-structure). Расширением является папки/файлы:

- ### /scripts/
      	 - **sections**(**snippets**|**templates**)/ – наследуем структуру темы, для "удобной" структуры
      		 - **index.js** – обьеденяет все исходные коды для подальшего подключение
      		 - **sectionName.js** – _содержит код который используется в данной секции_
      	 - **ui**/ – часто используемые/основные компоненты темы
      		 - **index.js** – обьеденяет все исходные коды для подальшего подключение
      		 - **lozyload.js** – [lozad](https://github.com/ApoorvSaxena/lozad.js) библиотека для ленивой загрузки изображений (как подключать _snippets/lazy-img.liquid_)
      	 - **polyfills** – полифилы для устаревших браузеров, нестандартных нешений
      	 - **scripts.js** – основной файл в который подключаются все скрипты
- ### /styles/ – идея подключения такая же как и в scripts (наследование структуры темы)
      	 - **components/*.scss** – основные ui елементы темы (кнопки/шрифты/ссылки)
      	 -  **static/*.scss** – вендорные  файлы, стили для слайдеров, нормализация стилей и тд
      	 - **IE11.scss** – фиксы конкретно для IE11
      	 - **variables.scss** - переменные которые используются повсеместно
      	 - **styles.scss** - основной файл в который подключаются все стили
- ### /snippets/
      	 - **css-fonts.liquid** – подключение кастомных шрифтов
      	 - **css-variables.liquid** – [Кастомные свойства](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). Ex.:`color: var(--variable);`
      	 - **lazy-img.liquid** - снипет для ленивой загрузки изображения (внутри есть описание как использовать)

### если нужно сделать Theme Customization

> или как в народе называют подогнать под дизайн

Для того что бы начать кастомизацию существующей темы с данным сборщиком, нужно:

> имеется ввиду что, вы уже настроили config.yml

1.  Загрузить файлы установленной на магизин темы с помощью [Shopify Theme Kit](https://shopify.github.io/themekit/) выполнив команду: `theme download`
    Тема будет выкачана и содержать все нужные файлы.
2.  Затем нужно "перетащить" сборку. Есть 2 варианта:
    - переместить папки **scripts, styles и основные файлы** в загруженую тему и отредактировать `theme.liquid` (добавить подключение скриптов, стилей, сниппетов)
    - переместить файлы темы в сборку с заменой файлов и также подправить `theme.liquid`
3.  У Вас также есть возможность интегрировать исходные стили/скрипты темы в сборку (но по-сути это не обязательно)
4.  Отредактировать `config.yml` чтобы не "убить" исходную тему (создать новую тему)
5.  Залить "сборку" на шопифай. Для того что бы это сделать нужно выполнить "Initial steps" **!вставить ЯКОРЬ!** и выполнить команду `yarn deploy`. Эта команда сбилдит скрипты и стили в папку _assets_ и дальше выполнит деплой.
    > на этом этапе возможны ошибки. в консоле будет вся информация. плачем и чиним.

### Theme Development

> по модному разработка с 0

1. Создаем магазин
2. Создаем коннект с магазином [Todo из Theme Kit](https://shopify.github.io/themekit/#get-api-access)
3. Настраиваем `config.yml`. Будет выглядеть примерно вот так:
   ```
   development:
   	password: SHOPIFY_PRIVATE_APP_PASSWORD
   	theme_id: SHOPIFY_THEME_ID
   	store: SHOPIFY_STORE_URL.myshopify.com
   	ignore_files:
   test:
   	password: SHOPIFY_PRIVATE_APP_PASSWORD
   	theme_id: SHOPIFY_THEME_ID
   	store: SHOPIFY_STORE_URL.myshopify.com
   	ignore_files:
   ```
4. Устанавливаем все зависимости `npm i` или `yarn`
5. Запускаем "watcher" `yarn watch`
6. Пишем код

## Shopify theme flow

На данный

StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**

> Before starting to sync files, you must link an account in the **Synchronize** sub-menu.

## Create files and folders

The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.

# Publication

Publishing in StackEdit makes it simple for you to publish online your files. Once you're happy with a file, you can publish it to different hosting platforms like **Blogger**, **Dropbox**, **Gist**, **GitHub**, **Google Drive**, **WordPress** and **Zendesk**. With [Handlebars templates](http://handlebarsjs.com/), you have full control over what you export.

> Before starting to publish, you must link an account in the **Publish** sub-menu.

## Publish a File

You can publish your file by opening the **Publish** sub-menu and by clicking **Publish to**. For some locations, you can choose between the following formats:

- Markdown: publish the Markdown text on a website that can interpret it (**GitHub** for instance),
- HTML: publish the file converted to HTML via a Handlebars template (on a blog for example).

## SmartyPants

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|                  | ASCII                           | HTML                          |
| ---------------- | ------------------------------- | ----------------------------- |
| Single backticks | `'Isn't this fun?'`             | 'Isn't this fun?'             |
| Quotes           | `"Isn't this fun?"`             | "Isn't this fun?"             |
| Dashes           | `-- is en-dash, --- is em-dash` | -- is en-dash, --- is em-dash |
