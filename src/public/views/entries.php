<?php if (count($_SESSION) == 0):
  header("Location: /");
  die();
endif; ?>
<?php require_once('components/head.php'); ?>

<body>
  <?php require_once('components/navbar.php'); ?>
  <main class="container">
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="card">
            <p>Log in if you want to see anything, loser!</p>
          </div>
        </div>
      </div>
    </section>

      <span id="search_wrapper" class="searchbar-style">
        <input type="text" class="input" name="searchbar" placeholder="Search entries by title" id="searchbar">
      </span>
      <div id="entries_container" class="entries_container">
      </div>
</main>

<?php require_once('components/footer.php'); ?>
