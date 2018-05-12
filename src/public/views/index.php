<?php require_once('components/head.php'); ?>

<body>
  <?php require_once('components/navbar.php'); ?>
  <div class="container">
		<?php if (!isset($_SESSION['loggedIn'])): ?>
			<div class="message-body">
				<h1 class="title">Welcome!</h1>
				<h2 class="subtitle">Please sign in or register a new account!</h2>
			</div>

      <!-- <form action="/login" method="post" id="login_form">
        <label for="login_username">Username:</label><br />
        <input type="text" name="username" id="login_username"> <br />
        <label for="login_password">Password:</label><br />
        <input type="password" name="password" id="login_password"><br />
        <button type="submit" name="login" id="login_btn">Log in</button>
      </form>

      <br />

        <form action="/api/register" id="register_form" method="post">
          <label for="register_username">username</label>
          <input id="register_username" type="text" name="username">
          <label for="register_password">password</label>
          <input id="register_password" type="password" name="password">
          <button type="submit" name="registerBtn" id="registerBtn">Register</button>
        </form> -->
		<?php else:
?>
  <p class="title">Welcome, <?= $_SESSION['username'] ?> </p>
<?php endif;?>
</div>

<?php require_once('components/footer.php'); ?>
