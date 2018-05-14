<?php require_once('components/head.php'); ?>

<body>
  <?php require_once('components/navbar.php'); ?>
  <main class="container">
		<?php if (!isset($_SESSION['loggedIn'])): ?>
			<div class="section">
				<h1 class="title">Welcome!</h1>
				<h2 class="subtitle">Please sign in or register a new account!</h2>
			</div>
		<?php else:
?>
  <p class="title">Welcome, <?= $_SESSION['username'] ?> </p>
<?php endif;
  include_once('components/entry_form.php');
?>
  <div id="entries_container" class="entries_container">

  </div>
</main>

<?php require_once('components/footer.php'); ?>
