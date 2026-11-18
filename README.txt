LAST CONTACT · INTERACTIVE MARS MUSEUM · V12

РУССКИЙ

Запуск на Windows / PyCharm:
1. Распакуйте ZIP целиком в отдельную папку.
2. Запустите START_GAME.bat или откройте терминал в папке и выполните:
   python -m http.server 8000
3. Откройте http://localhost:8000/ в Chrome. При обновлении нажмите Ctrl+F5.
4. В правом верхнем углу выберите RU / EN; язык можно менять в ходе игры.
5. Кнопка динамика включает/выключает атмосферу, рядом — громкость (по умолчанию 85%).

Звуковое оформление: оригинальная синтезированная космическая композиция
mars_ambience.ogg (более насыщенный и громкий) и сигналы-уведомления. Из-за ограничений браузеров звук
включается после нажатия кнопки «Начать миссию».

У второй (геологической) станции размещены скальные образцы из пользовательских GLB.
На главном экране присутствуют полупрозрачная пыль и атмосферные частицы.

При приближении к каждой из 5 исследовательских станций играет особый
электронный сигнал. Подтверждение маршрута, сканирование и финальная
передача также сопровождаются отдельными звуками.

Управление:
W/S — вперёд / назад; A/D — поворот; мышь — камера; Shift — ускорение.
E — исследование; F — сканировать породы; B — архив; M — карта; Esc — закрыть.

Исследовательские миссии: Opportunity, Spirit, Perseverance.
Пять этапов, полноэкранная карта, архив, геология, реконструкция событий,
база находок, отчёт и финальный экран сохранены из предыдущей сборки.

Важно: требуется интернет для библиотеки Three.js и фотографий NASA.
Трёхмерная местность и игровые симуляции являются образовательной
реконструкцией, а не официальными инструментами NASA.

ENGLISH

To run on Windows / in PyCharm:
1. Extract the whole ZIP to a separate folder.
2. Run START_GAME.bat, or open a terminal in this folder and run:
   python -m http.server 8000
3. Open http://localhost:8000/ in Chrome; hard refresh with Ctrl+F5.
4. Use RU / EN at the top right to switch languages at any point in the game.
5. Use the speaker button to mute/unmute Mars ambience and the slider for volume (85% default).

The louder original Mars ambience starts after the START MISSION click due to browser autoplay rules.
The geology stop (02) now contains visible scanned 3D rocks, and the landing screen has animated Martian dust.
Every research station has a distinct proximity cue. Route acceptance,
rock scanning and mission completion have additional sci-fi cues.

Controls: W/S forward/reverse, A/D steer, mouse orbit, Shift speed boost,
E investigate, F scan rock, B archive, M map, Esc close menus.

Historical and scientific content comes from NASA resources, but this is
an independent educational museum prototype, not an official NASA product.
Three.js and original NASA images require internet access.


=== LAST CONTACT V13 — ЗАГРУЖЕННЫЕ ЗВУКИ ===
Фон (первый файл): assets/mars_background_user.mp3 — повторяется на главном экране и во всей игре.
Звук объекта (второй файл): assets/station_approach_user.mp3 — запускается отдельно у каждой станции,
звучит при чтении научной карточки, выключается при её закрытии и не повторяется, пока
марсоход не отъедет от этой станции и не вернётся.
В браузерах со строгой блокировкой автозапуска звук начинает играть после первого нажатия
кнопки или клавиши (например, «Начать миссию»). Громкость — ползунок SOUND/ЗВУК.
Для обеих фонограмм использованы предоставленные пользователем файлы.
