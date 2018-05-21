<?php if (count($_SESSION) == 0):
  header("Location: /");
  die();
endif; ?>
<?php require_once('components/head.php'); ?>

<body>
    <?php require_once('components/navbar.php'); ?>
    <main class="container">
        <p class="title">Welcome, <?= $_SESSION['username'] ?> </p>
    </main>

<!--
<?php require_once('components/footer.php'); ?>