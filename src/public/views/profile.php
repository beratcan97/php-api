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
      <?php include_once('components/entry_form.php'); ?>
      <div id="entries-container" class="entries-container"></div>
  </main>
<?php require_once('components/footer.php'); ?>
