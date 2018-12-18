
/*
  Повторить задание с оповещаниями (application/DecoratorExample), с
  использованием нескольких уровней абстракций, а именно паттерны:
  Decorator, Observer, Fabric


  Задача: Написать динамичную систему оповещений, которая будет отправлять
  сообщения все подписаным на неё "Мессенджерам".
  Картинки мессенджеров есть в папке public/images

  Класс оповещения должен иметь декоратор на каждый мессенджер.

  При создании обьекта класса Application нужно передавать обьект
  в котором будут находится те "Мессенджеры" который в результате будут
  подписаны на этот блок приложения.

  Отправка сообщения по "мессенджерам" должна происходить при помощи
  паттерна Observer.

  При отправке сообщения нужно создавать обьект соответствующего класса,
  для каждого типа оповещания.

  let header = new Application('slack', 'viber', 'telegramm');
  let feedback = new Application('skype', 'messanger', 'mail', telegram);

  btn.addEventListener('click', () => header.sendMessage(msg) );

  Архитектура:

  Application( messanges ) ->
    notfier = new Notifier
    renderInterface(){...}

  Notifier ->
    constructor() ->
      Fabric-> Фабрикой перебираете все типы месенджеров которые
      подписаны на эту Application;
    send() -> Отправляет сообщение всем подписчикам















*/
