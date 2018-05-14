<?php require('head.php'); ?>
<?php require_once('navbar.php'); ?>

<p class="title">Create new account</p>
<form action="/api/register" class="box" id="register_form" method="post">
    <div class="field">
      <label for="register_username" for="username" class="subtitle">Username</label>
      <div class="control has-icons-left">
          <input id="register_username" class="input" type="text" name="username" placeholder="Username" required>
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
      </div>
    </div>
    <div>
      <label for="register_password" class="subtitle">Password</label>
      <div class="control has-icons-left">
          <input id="register_password" class="input" type="password" name="password" placeholder="Password" required>
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
      </div>
      <div class="control">
        <button type="submit" name="registerBtn" id="registerBtn">Register</button>
      </div>
    </div>
  </form>

<?php require('footer.php'); ?>
