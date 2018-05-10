<!DOCTYPE html>
<html lang="en">

<head>
  <?php require_once('components/head.php'); ?>
</head>

<body>
  <?php require_once('components/navbar.php'); ?>
  <div class="container">
		<?php if (!isset($_SESSION['loggedIn'])): ?>
			<div class="message-body">
				<p class="title">Welcome!</p>
				<p class="subtitle">Please sign in or sign up!</p>
			</div>

        <label for="login_username">Username:</label><br />
        <input type="text" name="username" id="login_username"> <br />
        <label for="login_password">Password:</label><br />
        <input type="password" name="password" id="login_password"><br />
        <button type="button" name="login" id="login_btn">Log in</button>
      <br />


        <form action="/api/register" id="register_form" method="post">
          <label for="register_username">username</label>
          <input id="register_username" type="text" name="username">
          <label for="register_password">password</label>
          <input id="register_password" type="password" name="password">
          <button type="button" name="registerBtn" id="registerBtn">Register</button>
        </form>
		<?php else:
?>
<p class="title">Welcome, <?= $_SESSION['username'] ?> </p>

      <a href="/logout"><button type="button" id="logout" name="logout">Log out</button></a>
<?php var_dump($_SESSION);
        endif;?>

	</div>
  <!--
  <div>
    <div class="field">
      <label for="username" class="subtitle">Username</label>
      <div class="control">
          <input type="text" class="input" id="username" name="username" placeholder="Username">
      </div>
    </div>
    <div>
      <label for="password" class="subtitle">Password</label>
      <div class="control">
          <input type="password" class="input" id="password" name="password" placeholder="Password">
      </div>
    </div>
    <button type="submit">Submit</button>
  </div>
  -->




  <?php require_once('components/footer.php'); ?>
