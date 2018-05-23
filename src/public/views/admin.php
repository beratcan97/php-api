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
      <h2 class="title container-entry-style">Make anyone an admin:</h2>
      <div id="users-container" class="users-container"></div>
  </main>
<?php require_once('components/footer.php'); ?>
