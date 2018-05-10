<!DOCTYPE html>
<html lang="en">

<head>
  <?php require_once('components/head.php'); ?>
</head>

<body>
  <?php require_once('components/navbar.php'); ?>
  <div class="container">
		<?php if (!isset($_SESSION['userID'])): ?>
			<div class="message-body">
				<p class="title">Welcome!</p>
				<p class="subtitle">Please sign in or sign up!</p>
			</div>

		<?php else:

        endif;?>

  </div>


  <?php require_once('components/footer.php'); ?>
