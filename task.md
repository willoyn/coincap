## Technical requirements for the project

Мобильное приложение для отслеживания криптовалют и формирования собственного портфеля.

Технологии:
React Native, TS, React Navigation, Context + useReducer.

API: Coincap

List (main):
На главной отображается список криптовалют с основной информацией по ним и с контролами для возможности добавления в портфель (например, "+".). Реализовать пагинацию.

При нажатии на элемент списка, открывается скрин с подробной информацией по валюте, с контролом для добавления в портфель, а также ее история в виде графика (можно использовать либы для визуализации данных).

При нажатии на "+", открывается скрин, где можно ввести количество (в т.ч. дробное) криптовалюты. После сабмита, криптовалюта добавляется в портфель в указанном количестве.

Portfolio:
Стоимость портфеля пользователя и разница с изначальной стоимостью портфеля, в скобках разница в процентах. Example: 134,32 USD +2,38 (1,80 %). Под изначальной стоимостью портфеля понимается его стоимость на момент последнего обновления портфеля (добавления или удаления валюты)

Список валют в портфеле c возможностью убрать каждую из них из портфеля.

Навигация:
В виде tabs между портфелем и списком. Stack при открытии скрина валюты или при добавлении валюты.

Дизайн должен быть простым, понятным и функциональным.

Приблизительный таймлайн:
день 1-2:
Создать UI приложения (нужные компоненты, кнопки, списки).

день 2-3:
Добавить навигацию. Добавить слой данных и связать с UI.

день 3-4:
Организовать необходимую бизнес-логику. Рефакторинг