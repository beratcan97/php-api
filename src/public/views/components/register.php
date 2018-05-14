<?php require('head.php'); ?>
<?php require_once('navbar.php'); ?>
<form action="/api/register" class="container" id="register_form" method="post">
    <div class="field">
      <label for="register_username" class="subtitle">Username</label>
      <div class="control">
          <input id="register_username" class="input" type="text" name="username" placeholder="Username" required>
      </div>
    </div>
    <div>
      <label for="register_password" class="subtitle">Password</label>
      <div class="control">
          <input id="register_password" class="input" type="password" name="password" placeholder="Password" required>
      </div>
      <button type="submit" name="registerBtn" id="registerBtn">Register</button>
    </div>
  </form>

<?php require('footer.php'); ?>
