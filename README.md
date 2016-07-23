# Подключение шаблонов в шаблоне
Работает только в браузере. Слои, содержание которых должно быть проиндексировано поисковыми система показывать так нельзя.
Требуется работа сайта с [infrajs/controller](https://github.com/infrajs/controller)
## Установка через composer

```
{
	"require":{
		"infrajs/infratag":"~1"
	}	
}
```

## Использование

Данный код покажет в div слой описанный в layer.json.

```html
<div data-infra="true" data-external="-path/to/layer.json"></div>
```