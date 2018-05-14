<?php require('head.php'); ?>
<?php require_once('navbar.php'); ?>
<form action="/login" class="container" id="login_form" method="post">
    <div class="field">
      <label for="username" class="subtitle">Username</label>
      <div class="control">
          <input type="text" class="input" id="login_username" name="username" placeholder="Username" required>
      </div>
    </div>
    <div>
      <label for="password" class="subtitle">Password</label>
      <div class="control">
          <input type="password" class="input" id="login_password" name="password" placeholder="Password" required>
      </div>
      <button type="submit" name="loginBtn" id="loginBtn">Log in</button>
    </div>
  </form>
  <?php require('footer.php'); ?>
