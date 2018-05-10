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
				<h1 class="title">Welcome!</h1>
				<h2 class="subtitle">Please sign in or register a new account!</h2>
			</div>

		<?php else:

        endif;?>

  </div>


  <?php require_once('components/footer.php'); ?>
