<?php if (count($_SESSION) == 0):
  header("Location: /");
  die();
endif; ?>
<?php require_once('components/head.php'); ?>

<body>
  <?php require_once('components/navbar.php'); ?>
    <main class="container">
        <p class="title">Welcome, <?= $_SESSION['username'] ?> </p>
        <span id="search_wrapper">
          <input type="text" class="input" name="searchbar" placeholder="Search entries by title" id="searchbar">
        </span>
        <div id="users-container" class="users-container"></div>
  </main>
<?php require_once('components/footer.php'); ?>
