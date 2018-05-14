<?php require('head.php'); ?>
<?php require_once('navbar.php'); ?>

<p class="title">Fill in username and password to login</p>
<form action="/login" class="box" id="login_form" method="post">
    <div class="field">
      <label for="username" class="subtitle">Username</label>
      <div class="control has-icons-left">
          <input type="text" class="input" id="login_username" name="username" placeholder="Username" required>
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
      </div>
    </div>
    <div>
      <label for="password" class="subtitle">Password</label>
      <div class="control has-icons-left">
          <input type="password" class="input" id="login_password" name="password" placeholder="Password" required>
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
      </div>
      <button type="submit" name="loginBtn" id="loginBtn">Log in</button>
    </div>
  </form>

  <?php require('footer.php'); ?>

