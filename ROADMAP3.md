# План 3
1. Провести исследовательскую работу по `log4j`
2. Переписать логику приложения с использованием `log4j` (R3.1 && R3.2)
3. Создать объект `DBWrapper` (R3.9)
   1. Создать метод `getUser(login): User`
        Находит пользователя в коллекции и возвращает весь объект
   2. Создать метод `getPermissions(login): List<Permission>`
   3. Создать метод `addActivity(activity)`
4. Переписать классы `Authentication`, `Authorization` и `Accounting` для работы с `DBWrapper`
     Они должны принимать `DBWrapper` в конструкторе и использовать его для получения данных в методах
5. Провести исследовательскую работу по `h2`
6. В `DBWrapper` создать метод `dbExists(): Boolean`
7. В `DBWrapper` создать методы для инициализации базы данных
   1. `connect(url, login, pass)` - подключается к существующей базе данных
   2. `init(users, permissions)` - создаёт таблицу пользователей и разрешений, переносит туда данные из коллекций и сохраняет полученную базу данных в рабочей директории (R3.5 && R3.6)
8. В бизнес логику добавить проверку на существование базы данных с помощью `dbExists()`
    * Если она существует вызвать `connect()`, необходимые параметры получить с помощью `System.getenv()` (R3.11)
    * Иначе `init()`
9.  Провести исследовательскую работу по `PreparedStatement`
10. Модифицировать методы `DBWrapper` для работы с базой данных (R3.3)
    Доступ к базе данных должен осуществляться через `PreparedStatement` (R3.7 && R3.8)
11. Добавить индескс в БД (R3.4)
12. Удостовериться что существующий код удовлетворяет принципам SOLID, при необходимости переписать (R3.10)


## Схема данных
### Пользователи
| id  | *login*    | salt                                   | hash                                                             |
| --- | ---------- | -------------------------------------- | ---------------------------------------------------------------- |
| 0   | vasya      | iYqHUi2<2zPhrGIL8]?p8m;bteA?ETaT       | dc6a8709e9fc8de1acea34fdc98c842911686ca0c2a0b12127c512a5ed7ab382 |
| 1   | admin      | olMMIDct3GkrY:?Xp1WDJOPTw2IY0a[        | c6d6ced902fe90f039f168837f7ce3d313df040e071281317fc6781a60cac2bc |
| 2   | q          | TtVaKT?vkBlIrtbChI72yef7iWkLxkw4       | 50bba7d209a17a3c36a3df151276d233ca868bf3b518165a6510b8e8c0bc2b7a |
| 3   | abcdefghij | TtVaKT?nUMXGQvmro8b5;AX7dLpwS_A4L;RH^_ | 2c06d373cd2549c31d8c1758daaa7773a8b905e32eb430f566c4c391827db121 |

### Разрешения
Внешний ключ - login
| *id* | res   | role    | login |
| ---- | ----- | ------- | ----- |
| 0    | A     | READ    | vasya |
| 1    | A.B.C | WRITE   | vasya |
| 2    | A.B   | EXECUTE | admin |
| 3    | A     | READ    | admin |
| 4    | A.B   | WRITE   | admin |
| 5    | A.B.C | READ    | admin |
| 6    | B     | EXECUTE | q     |
| 7    | A.A.A | EXECUTE | vasya |

### Активность
Внешний ключ - login
| *id* | login | res | role | ds  | de  | vol |
| ---- | ----- | --- | ---- | --- | --- | --- |
|      |       |     |      |     |     |     |

# Исследовательские задачи
1. `Log4j` (1 час)
   1. Разобраться как работать с `log4j` ([Документация](http://logging.apache.org/log4j/2.x/manual/configuration.html)) (1 час)
       * Как подключить библиотеку к проекту?
       * Как вывести сообщение в файл?
       * Как вывести ошибку и стек?
   2. Для проведения исследования мы прочитаем официальную документацию по `log4j`
   3. В результате исследовательской задачи мы научимся использовать библиотеку `log4j` и подключим её к проекту
2. `h2`
   1. Разобраться как работать с `h2` ([Сайт](http://www.h2database.com/html/main.html)) (2 часа)
      * Как подключить базу данных к программе?
      * Как отправлять запросы базе данных?
   2. Для проведения исследования мы прочитаем официальную документацию по `h2`
   3. В результате исследовательской задачи мы научимся использовать базу данных `h2` и подключим её к проекту
3. `PreparedStatement`
   1. Ознакомиться с `PreparedStatement`  ([Документация](http://docs.oracle.com/javase/tutorial/jdbc/basics/prepared.html)) (20 мин.)
       * Что это такое?
       * Как использовать их для создания запросов к БД?
   2. Для проведения исследования мы прочитаем официальную документацию по `PreparedStatement`
   3. В результате исследовательской задачи мы научимся использовать класс `PreparedStatement`

# Оценка времени
| Пункт плана | Оценка времени   | Фактическое время | Итого |
| :---------: | --------------   | :---------------- | ----- |
|     1.      | 20               |                   |       |
|     2.      | 20               |                   |       |
|     3.      | 15               |                   |       |
|    3.1.     | 5                |                   |       |
|    3.2.     | 5                |                   |       |
|    3.3.     | 5                |                   |       |
|     4.      | 15               |                   |       |
|     5.      | 20               |                   |       |
|     6.      | 10               |                   |       |
|     7.      | 30               |                   |       |
|    7.1.     | 15               |                   |       |
|    7.2.     | 15               |                   |       |
|     8.      | 5                |                   |       |
|     9.      | 20               |                   |       |
|     10.     | 20               |                   |       |
|     11.     | 10               |                   |       |
|     12.     | 15               |                   |       |