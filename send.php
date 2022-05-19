<?php

if(isset($_POST['submit'])){
    $to = "dimonBart@yandex.ru"; 
    $from = $_POST['email']; 
    $first_name = $_POST['first_name'];
    $subject = "Форма отправки сообщений с сайта";
    $subject2 = "Copy of your form submission";

    $headers = "From:" . $from;

    mail($to,$subject,$headers);

    echo "Сообщение отправлено. Спасибо, мы скоро свяжемся с Вами.";
    echo "<br /><br /><a href='index.html'>Вернуться на сайт.</a>";

}

?>

<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="index.html");}
window.setTimeout("changeurl();",3000);
</script>