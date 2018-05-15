<?php require_once('components/head.php'); ?>

<body>
  <?php require_once('components/navbar.php'); ?>
  <main class="container">
		<?php if (!isset($_SESSION['loggedIn'])):
      header("Location: /");
    else: ?>
      <p class="title">Welcome, <?= $_SESSION['username'] ?> </p>
      <?php include_once('components/entry_form.php'); ?>
      <div id="entries_container" class="entries_container">
    <?php endif; ?>
  </div>
</main>

<?php require_once('components/footer.php'); ?>
