<?php require('head.php'); ?>
<form action="/api/register" id="register_form" method="post">
    <div class="field">
      <label for="register_username">Username</label>
      <div class="control">
          <input id="register_username" type="text" name="username" placeholder="Username">
      </div>
    </div>
    <div>
      <label for="register_password">Password</label>
      <div class="control">
          <input id="register_password" type="password" name="password" placeholder="Password">
      </div>
      <button type="submit" name="registerBtn" id="registerBtn">Register</button>
    </div>
  </form>

<?php require('footer.php'); ?>
