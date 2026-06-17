# Яндекс Метрика в Wheel Service

## 1. Переменные окружения

Создайте `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://ваш-домен.ru
NEXT_PUBLIC_YANDEX_METRIKA_ID=12345678
```

ID счётчика является публичным идентификатором и используется браузером. После изменения переменных окружения необходимо выполнить новую сборку проекта.

## 2. Что уже подключено

- загрузка счётчика через `next/script`;
- Вебвизор, карта кликов, карта ссылок и точный показатель отказов;
- отдельный просмотр (`hit`) при первом открытии и каждом переходе App Router;
- передача JavaScript-событий через `trackGoal()`;
- отключение аналитики, когда `NEXT_PUBLIC_YANDEX_METRIKA_ID` не задан.

## 3. Цели, которые нужно создать в интерфейсе Метрики

Тип каждой цели: **JavaScript-событие**.

### Основные цели

```text
booking_form_submit
header_order_click
hero_order_click
hero_whatsapp_click
hero_map_click
page_hero_whatsapp_click
before_after_whatsapp_click
faq_telegram_click
contacts_phone_click
contacts_whatsapp_click
contacts_telegram_click
map_route_click
exterior_map_click
mobile_phone_click
mobile_whatsapp_click
mobile_map_click
mobile_order_click
```

### WhatsApp со страниц услуг

```text
service_pokraska-diskov_whatsapp
service_remont-diskov_whatsapp
service_shinomontazh_whatsapp
service_remont-shin_whatsapp
service_peskostruy-diskov_whatsapp
service_almaznaya-protochka_whatsapp
service_pokraska-supportov_whatsapp
service_prodazha-shin_whatsapp
service_prodazha-diskov_whatsapp
```

Идентификаторы должны полностью совпадать с кодом, включая регистр, дефисы и подчёркивания.

## 4. Проверка

1. Опубликуйте новую сборку.
2. Откройте сайт с параметром `?_ym_debug=1`.
3. Перейдите между несколькими страницами.
4. Нажмите кнопки телефона, WhatsApp, маршрута и отправьте форму.
5. В консоли браузера проверьте события `PageView` и `Reach goal`.
6. В интерфейсе Метрики убедитесь, что счётчик начал получать данные.

## 5. UTM-разметка

Для рекламы и публикаций используйте стандартные параметры:

```text
utm_source
utm_medium
utm_campaign
utm_content
utm_term
```

Пример:

```text
https://ваш-домен.ru/?utm_source=telegram&utm_medium=social&utm_campaign=wheel_service_launch
```
