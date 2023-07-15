<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'gajardo.r.benjamin@gmail.com'; // Reemplaza con tu dirección de correo electrónico
  $subject = 'Nuevo mensaje de contacto';
  $body = "Nombre: $name\nCorreo electrónico: $email\nMensaje: $message";

  // Envía el correo electrónico
  mail($to, $subject, $body);

  // Redirige al usuario a una página de confirmación
  header('Location: confirmation.html');
  exit();
}
?>
