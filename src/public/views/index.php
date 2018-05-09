<!DOCTYPE html>
<html lang="en">

<head>
  <?php require_once('components/head.php'); ?>
</head>

<body>
  <?php require_once('components/navbar.php'); ?>
  <div class="container">
		<?php if(!isset($_SESSION['userID'])): ?> 
			<div class="message-body">
				<p class="title">Welcome!</p>
				<p class="subtitle">Please sign in or sign up!</p>
			</div>
			
		<?php else:
		
		endif;?>
	
	</div>
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
  

  <?php require_once('components/footer.php'); ?>