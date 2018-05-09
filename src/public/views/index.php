<!DOCTYPE html>
<html lang="en">

<head>
  <?php require_once('components/head.php'); ?>
</head>

<body>
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
    <button type="submit">Update</button>
  </div>
  <script src="scripts/fetch.js"></script>
  <script src="scripts/main.js"></script>

  <?php require_once('components/footer.php'); ?>