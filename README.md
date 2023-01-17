## Level 1
`1.1` — Плохая вёрстка для пользователя означает недоуство использования сайта (непродуманная структура сайта и другие технические проблемы) в последствий пользовователь просто напросто перестанет использовать сайт. Компания теряет пользователя/клиента. Также немалая роль отводится доступность сайта. Хорошая вёрстка увеличивает конверсию сайта, и не вызывает отрицальных эмоций у пользователя/клиента.
`1.2` — Плохая вёрстка для менеджера проекта сулит множество проблем. От потери клиента до постоянных переделывания проекта (бесконечные правки и правки правок в текущий проект, подключение других верстальщиков на проект(увеличение ресурсов для проекта, уменьшение прибыли от проекта)). В свою очередь, хорошая вёрстка помогает сохранить заказчика, увеличить его лояльность, меньше отвлекаться на текущий проект и отсутствие подключение других специалистов.
`1.3` — Для дальнейшего расширения сайта (всё таки сайт больше похож на живой организм) плохая верстка не позволит реализовать новые идеи. Как можно внести что—то новое в функционал, когда вёрстка ломается? Нужно заняться исправлением страрых багов, а вносить новые. В свою очередь, хорошая вёрстка позволяет переиспользовать её, и в случае чего можно использовать для нового сайта (если вдруг заказчику понадобится лендинг).
`1.4` — Частично описано в пункте 1.2. Добавлю лишь то, что разбираться в плохом чужом коде гораздо сложнее, чем в хорошем коде. В принципе в дальнейшем вместо добавления новых фич, придется вносить правки в проблемные места. Хорошая вёрстка позволяет быстрее внедрят фичи, и меньше доработок для новых фич.
`1.5` — Для северного программиста плохая вёрстка означает, что часть функионала может быть недоступна или вовсе не работать. Хорошая верстка в свою очередь позволяет безболезнено и в краткие сроки подцепить на хостинг, подключить базы данных и т.д.

`2` — UI—kit для крупных и очень крупных проектов просто необходим. Позволяет в будущем вносить изменения чуть быстрее. Самое главное при вёрстки использовать метологию БЭМ, в дальнейшем позволяет отдельно менять любые блоки без вреда для других похожих блоках на разных страницах.

`3` — Для тестирования вёрстки на разных устройствах помогает такие инструменты как: browserstack или lambdatest (к недостаткам можно отнести низкую скорость работы, если нет оплаченного аккаунта, то полноценно не протестировать), никто не отменял реальные устройства. Разные движки к сожалению выдают могут выдавать разные рельтаты. Важно использовать вендорные префиксы, а также normalize css, они помогут избежать часто возникающих проблем.

`4` — Важным инструментом для экономии времени является использование emmet для html, css препроцессор для ускорения написания стилей (сюда же отнесу ESLint, Stylelint), а также использование модульного подхода для JS. Правильная выстроенная архитектура проекта позволяет в случае чего быстро подключать людей для работы над проектом и работать в единном ключе. Конечно же работа в git(работать нескольким людям по FTP это боль). Для серьезных проектов можно использовать такие вещи как: unit—тесты(Jest).
Ну и конечно это сборщик (gulp или webpack). Позволяет оптимизовать рутинные вещи, и многие вещи не делать руками.

`5` — Большая часть моей работы состоит как раз починка сломанной вёрстки на сайте. Без исходников можно найти баг с помощью DevTools( он же инспектор). Очень мощный функионал, допустим во вкладке сеть можно посмотреть какие файлы загружаются, какие файлы не загружаются, шрифты и многое многое другое.

`6` — Довольно распространённая проблема. Решений тут несколько, если есть возможность, то подойти к дизайнеру и вместе с ним добавить интерактивные стили. Если невозможно обговорить с дизайнером(допустим, он уволился, а в штате другого нет), то проявить смекалку самому. Попробовать максимально по стилистики сайта добавить самому, либо найти похожий сайт по тематике и посмотреть там.

`7` — Прежде всего youtube(шикарная платформа для развития, нравятся такие авторы как Archakov Blog, Фрилансер по жизни, 
Ulbi TV, Макеев, Bogdan Stashchuk), статьи на habr, vc, и многие телеграмм каналы по вёрстке (допустим CSS mind). Ну и конечно же HTML academy.
Склоняюсь к JS—программированию (также отнесу React или другой реактивный фреймворк). Всё таки запрос на SPA становится всё больше и больше.
Также интересуюсь экономикой, автомобилями и т.д.

`8` — Backend написан на node.js и express с jwt авторизацией, и шифрованием пароля с помощью bcrypt, и также возможность авторизации пользователя и загрузкой картинок. Данные хранятся в базе данных(mongodb)
Frontend написан на React v18, используется глобальный стейт менеджер Redux Toolkit, для работы с формами используется React Hook Form, а навигация осуществляется с помощью React Router v6. Также приятным дополнением является использование React Markdown / Simple Editor для редактора статьи. Для работы с запросами использован Axios. В планах доработать комментарии, сортировать статьи и возможность использовать теги (показывать статьи с определенными тегами).
Дэплой backend сделан с помощью railway, а frontend на vercel.

— https://github.com/NivaiZ/mern-blog-backend — ссылка на репозитории(бэкенд);
— https://github.com/NivaiZ/mern-blog-frontend — ссылка на репозитории(фронтэнд);
— https://mern-blog-frontend-rho.vercel.app/ — ссылка на демонстрацию проекта.

`8.1` — Выполненное тестовое задание, на выходе готовая страница, также адаптированная под мобильные устройства. Кастомное модальное окно. Выполнен без каких—либо сторонних библиотек. Соблюдена как семантика так и валидность.

— https://github.com/NivaiZ/DigitalElement — ссылка на репозитории
— https://nivaiz.github.io/DigitalElement/build/index.html — ссылка на демонстрацию проекта

`8.2` — Выполненное тестовое задание, на выходе готовая страница корзины товара, также адаптированная под мобильные устройства. Кастомное бургер меню, и модальное окно поиска для мобильной версий, использованы две библиотеки: imask (маска для телефона), и choices.js (для селекта). Инициализируется яндекс карта, input поиска связан с картой (можно ввести адрес и при выборе покажет балун с введённым адресом)
Соблюдена как семантика так и валидность.

— https://github.com/NivaiZ/fivecornertest — ссылка на репозитории
— https://nivaiz.github.io/fivecornertest/build/index.html — ссылка на демонстрацию проекта

## Level 2

[Демо проекта](https://nivaiz.github.io/FunBox/)

Вёрстка: [Илья Галятдинов](https://github.com/NivaiZ/)

## Описание проекта

`Данный проект выполнен без css препроцессора (в работе использую less), сборщика (в работе использую gulp) без установки зависимостей. Чистый HTML, CSS, JS.`

———
