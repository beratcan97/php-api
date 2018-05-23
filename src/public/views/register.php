<?php require('components/head.php'); ?>
<?php require_once('components/navbar.php'); ?>

<form action="/register" class="box" id="register_form" method="post">
    <div class="section">
      <p class="title">Create a new account</p>
    </div>
    <div class="field">
      <label for="username" class="subtitle">Username</label>
      <div class="control has-icons-left">
          <input id="register-username" class="input" type="text" name="username" placeholder="Username" required>
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
      </div>
    </div>
    <div>
      <label for="password" class="subtitle">Password</label>
      <div class="control has-icons-left">
          <input id="register-password" class="input" type="password" name="password" placeholder="Password" required>
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
      </div>
        <button type="submit" name="registerBtn" id="registerBtn" class="button is-outlined is-primary btn-style">Register</button>
      
    </div>
</form>

<?php require('components/footer.php'); ?>
