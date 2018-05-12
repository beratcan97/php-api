<?php require('head.php'); ?>
<form action="/login" id="login_form" method="post">
    <div class="field">
      <label for="username" class="subtitle">Username</label>
      <div class="control">
          <input type="text" class="input" id="login_username" name="username" placeholder="Username">
      </div>
    </div>
    <div>
      <label for="password" class="subtitle">Password</label>
      <div class="control">
          <input type="password" class="input" id="login_password" name="password" placeholder="Password">
      </div>
      <button type="submit">Submit</button>
    </div>
  </form>
  <?php require('footer.php'); ?>
