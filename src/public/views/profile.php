<?php if (count($_SESSION) == 0):
  header("Location: /");
  die();
endif; ?>
<?php require_once('components/head.php'); ?>

<body>
  <?php require_once('components/navbar.php'); ?>
  <main class="container">
      <span id="search_wrapper">
        <input type="text" class="input" name="searchbar" placeholder="Search entries by title" id="searchbar">
      </span>
      <?php include_once('components/entry_form.php'); ?>
      <div id="entries_container" class="entries_container"></div>
</main>

<?php require_once('components/footer.php'); ?>
