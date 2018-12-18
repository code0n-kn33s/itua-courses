/*
  Задание:  Открыть файл task1.html в папке паблик и настроить светофоры в
            соответсвии с правилавми ниже:

  1. Написать кастомные события которые будут менять статус светофора:
  - start: включает зеленый свет
  - stop: включает красный свет
  - night: включает желтый свет, который моргает с интервалом в 1с.
  И зарегистрировать каждое через addEventListener на каждом из светофоров.

  2.  Сразу после загрузки на каждом светофоре вызывать событие night, для того,
      чтобы включить режим "нерегулируемого перекрестка" (моргающий желтый).

  3.  По клику на любой из светофоров нунжо включать на нем поочередно красный (не первый клик)
      или зеленый (на второй клик) цвет соотвественно.
      Действие нужно выполнить только диспатча событие зарегистрированое в пункте 1.

  4.  + Бонус: На кнопку "Start Night" повесить сброс всех светофоров с их текущего
      статуса, на мигающий желтые.
      Двойной, тройной и более клики на кнопку не должны вызывать повторную
      инициализацию инвервала.

*/
