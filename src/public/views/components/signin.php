<!DOCTYPE html>
<html lang="en">

<head>
  <?php require_once('components/head.php'); ?>
</head>


    <form action="/signin.php" id="register_form" method="post">
      <label for="register_username">username</label>
      <input id="register_username" type="text" name="username">
      <label for="register_password">password</label>
      <input id="register_password" type="password" name="password">
      <button type="button" name="registerBtn" id="registerBtn">Register</button>
    </form>

<?php require_once('components/footer.php'); ?>
