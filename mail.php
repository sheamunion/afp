<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
}

if(isset($_POST['email'])) {

    $email_to = "marketing@arizonafacialplastics.com";
    $email_subject = "Website Contact Form";

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    $email_message = "Name: ".clean_string($name)."\n";
    $email_message .= "Phone: ".clean_string($phone)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";

    // create email headers
    $headers = 'From: '.$email."\r\n".
    'Reply-To: '.$email."\r\n" .
    'X-Mailer: PHP/' . phpversion();

    @mail($email_to, $email_subject, $email_message, $headers);

    header("Location: REPLACE_WITH_URL_OF_FORM_CONFIRMATION");
 }
?>
