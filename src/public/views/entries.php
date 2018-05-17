<?php require_once('components/head.php'); ?>

<body>
  <?php require_once('components/navbar.php'); ?>
  <main class="container">
    <?php if (!isset($_SESSION['loggedIn'])): ?>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="card">
            <p>Log in if you want to see anything, loser!</p>
          </div>
        </div>
      </div>
    </section>

		<?php else: ?>
      <div id="entries_container" class="entries_container">
      </div>
    <?php endif; ?>
</main>

<?php require_once('components/footer.php'); ?>
