<?php
if (count($_SESSION) == 0):
  header("Location: /");
  die();
endif;

require_once('components/head.php');
?>

<body>
  <?php require_once('components/navbar.php'); ?>
  <main class="container">
      <div id="entries_container" class="entries_container">
      </div>
  </main>
<?php require_once('components/footer.php'); ?>
