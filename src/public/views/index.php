<?php require_once('components/head.php'); ?>

<body>
  <?php require_once('components/navbar.php'); ?>
  <main class="container">
    <?php if (!isset($_SESSION['loggedIn'])): ?>
    <section class="hero is-medium is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Welcome!
        </h1>
        <h2 class="subtitle">
          Please sign in or register a new account!
        </h2>
      </div>
    </div>
    </section>

    <?php else: ?>
      <div class="container">
        <p class="title">Welcome, <?= $_SESSION['username'] ?> </p>
        <span id="search_wrapper">
          <input type="text" class="input" name="searchbar" placeholder="Search entries by title" id="searchbar">
        </span>
      </div>
      <?php include_once('components/entry_form.php'); ?>
      <div id="entries_container" class="entries_container">
      </div>
    <?php endif; ?>
</main>

<?php require_once('components/footer.php'); ?>
