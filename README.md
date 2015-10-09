#Notification
Плагин для всплывающих оповещений в углу окна браузера. 

###Подключение:###

       <link rel="stylesheet" href="notification/style.css">
       <script src="notification/main.js"></script>

###Использование:###

        var notif = new Notification();
        notif.message("Your Message");

###Параметры:###

message - текст сообщения

className - добавить к оповещению свой класс

liveTime - время жизни оповещения

        notif.message( message ,className, liveTime);