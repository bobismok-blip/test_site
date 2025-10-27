# Тестовий сайт для лабораторної роботи з Google Dorks

## Опис
Цей сайт створено для лабораторної роботи з теми "Символи та пошукові оператори Google". Сайт містить тестові файли, конфігурації та дані для демонстрації роботи операторів Google Dorks.

## ⚠️ Увага
Це тестовий сайт для навчальних цілей. Всі дані є вигаданими та не містять реальної конфіденційної інформації.

## Вміст сайту

### Структура файлів:
- `configs/` - Конфігураційні файли (.conf)
- `logs/` - Лог-файли (.log)
- `backup/` - Резервні копії (.sql, .txt)
- `test_data/` - Тестові дані (.xls, .txt)
- `admin/` - Панель адміністратора
- `dashboard/` - Контрольна панель
- `directory/` - Відкрита директорія
- `login.html` - Сторінка входу

### Додаткові файли:
- `robots.txt` - Файл для роботів
- `.htaccess` - Конфігурація Apache
- `phpinfo.php` - PHP конфігурація
- `wp-config.txt` - WordPress конфігурація

## Приклади використання Google Dorks

### Пошук лог-файлів
```
site:yourusername.github.io filetype:log
site:yourusername.github.io "PHP_errors.log"
```

### Пошук конфігурацій
```
site:yourusername.github.io filetype:conf
site:yourusername.github.io inurl:config
```

### Пошук панелей адміністратора
```
site:yourusername.github.io intitle:"login"
site:yourusername.github.io inurl:admin
```

### Пошук відкритих директорій
```
site:yourusername.github.io intitle:"index of"
site:yourusername.github.io inurl:"index of"
```

### Пошук баз даних
```
site:yourusername.github.io filetype:sql
site:yourusername.github.io "database_backup"
```

### Пошук конфіденційних даних
```
site:yourusername.github.io "password"
site:yourusername.github.io filetype:xls username password email
```

## Розробка

### Локальний запуск
```bash
npm install
npm run dev
```

### Збірка
```bash
npm run build
```

### Перегляд збірки
```bash
npm run preview
```

## Деплой на GitHub Pages

1. Завантажте проект на GitHub
2. У налаштуваннях репозиторію увімкніть GitHub Pages
3. Виберіть джерело: "GitHub Actions"
4. Сайт буде доступний за адресою: `https://yourusername.github.io/test_site/`

## Використання для лабораторної роботи

Після деплою сайту зачекайте кілька днів, поки Google проіндексує ваш сайт. Після цього можна виконувати Google Dorks запити для тестування операторів.

**Примітка:** Для швидшого індексування можна використати форму Google Search Console для подачі сайту на індексацію.

## Ліцензія
Цей проект створено виключно для навчальних цілей.

