<?php
    $to = 'vladlym9@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = "Заявка";
        $message = '
         <html>
            <head>
                 <title>'.$subject.'</title>
            </head>
            <body>
                 <p>Дата: '. date("d.m.Y") .'</p>                         
                 <p>Время: '.  date("h:i:s") .'</p>
                 <p>Имя: '.  $_POST['name'] .'</p>
                 <p>Телефон: <a href="tel:'.$_POST['phone'].'"> '.$_POST['phone'].'</a></p>
                 <p>Страница: <a href="'.$_SERVER['HTTP_REFERER'].'"> '.$_SERVER['HTTP_REFERER'].' </a></p>  
             </body>
        </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>