# 🚀 Інструкція по деплою на GitHub Pages

## ✅ Що маєш перед деплоєм

- ✅ Сайт має **сучасний дизайн**
- ✅ Всі стилі в **одному файлі** (styles.css)
- ✅ Один HTML, інший CSS
- ✅ Сайт готовий для лабораторної роботи

## 📋 Крок за кроком

### Крок 1: Створи репозиторій на GitHub

1. Відкрий https://github.com
2. Натисни "+" → "New repository"
3. Назвай репозиторій: `test_site` або `google-dorks-lab`
4. **НЕ створюй** README, .gitignore або ліцензію (вони вже є!)
5. Натисни "Create repository"

### Крок 2: Завантаж код на GitHub

Відкрий PowerShell або CMD в папці проекту:

```bash
cd "D:\..Уник\ТЗІ\test_site"
git init
git add .
git commit -m "Initial commit: Тестовий сайт для Google Dorks"
git branch -M main
git remote add origin https://github.com/ТВОЄ_ІМ_Я/GITHUB/test_site.git
git push -u origin main
```

⚠️ **Замініть:**
- `ТВОЄ_ІМ_Я` - твоє GitHub ім'я
- `GITHUB` - твоя назва аккаунта
- `test_site` - назва репозиторію

### Крок 3: Налаштуй GitHub Pages

1. Перейди в твій репозиторій на GitHub
2. Натисни **"Settings"** (Налаштування)
3. У лівому меню знайди **"Pages"** (Сторінки)
4. У розділі **"Source"** вибери: **"GitHub Actions"**
5. GitHub автоматично запустить workflow після першого push

### Крок 4: Очікування на деплой (2-5 хвилин)

1. Перейди на вкладку **"Actions"** в репозиторії
2. Побачиш процес збірки (Deploy to GitHub Pages)
3. Після успішного деплою сайт буде доступний за адресою:

```
https://твоє_ім_я.github.io/test_site/
```

**Примітка:** Назву репозиторію може відрізнятися, тож URL може бути іншим.

### Крок 5: Перевір сайт

1. Відкрий посилання з попереднього кроку
2. Переконайся що все працює
3. Перевір всі посилання

## 🕐 Індексація Google (важливо!)

### Варіант 1: Автоматична індексація (рекомендовано)
- Google проіндексує сайт автоматично через **2-7 днів**
- Може бути більше тижня

### Варіант 2: Прискорена індексація ⚡

1. Створи аккаунт: https://search.google.com/search-console
2. Натисни "Додати ресурс"
3. Введи адресу: `https://твоє_ім_я.github.io/test_site/`
4. Підтверди права власності (кілька кроків)
5. Натисни **"Запросити індексування"** для головної сторінки

## 📊 Тестування Google Dorks

Після індексації (2-7 днів) виконай запити:

```bash
# Пошук лог-файлів
site:yourusername.github.io/test_site filetype:log
site:yourusername.github.io/test_site "PHP_errors.log"

# Пошук конфігурацій
site:yourusername.github.io/test_site filetype:conf
site:yourusername.github.io/test_site inurl:config filetype:conf

# Пошук панелей адміністратора
site:yourusername.github.io/test_site intitle:"login"
site:yourusername.github.io/test_site inurl:admin

# Пошук відкритих директорій
site:yourusername.github.io/test_site intitle:"index of"
site:yourusername.github.io/test_site inurl:"index of"

# Пошук баз даних
site:yourusername.github.io/test_site filetype:sql
site:yourusername.github.io/test_site "database_backup"

# Пошук конфіденційних даних
site:yourusername.github.io/test_site "password"
site:yourusername.github.io/test_site filetype:xls username password email
```

## 🔄 Оновлення сайту

Після внесення змін:

```bash
git add .
git commit -m "Оновлення контенту"
git push
```

GitHub автоматично перезбірє і перезапустить сайт!

## ❗ Виправлення помилок

### Якщо сайт не відкривається:
1. Перевір вкладку "Actions" в репозиторії
2. Подивись чи пройшла збірка успішно
3. Якщо ні - перевір логи на помилки

### Якщо зміни не відображаються:
1. Очистіть кеш браузера (Ctrl + F5)
2. Перевір чи задеплоїлися зміни в "Actions"

### Якщо стилі не працюють:
1. Перевір що файл `styles.css` скопіювався в `dist/assets/`
2. Виконай `npm run build` знову

---

**🎉 Готово! Тепер твій сайт готовий для лабораторної роботи!**
