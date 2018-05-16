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


    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Component
        </p>
        <a href="#" class="card-header-icon" aria-label="more options"></a>
        <a href="#" class="card-header-icon">Edit</a>
        <a href="#" class="card-header-icon">Delete</a>
      </header>
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Like</a>
        <a href="#" class="card-footer-item">Comment</a>
      </footer>
    </div>
   
		<?php else: ?>
      <p class="title">Welcome, <?= $_SESSION['username'] ?> </p>
      <?php include_once('components/entry_form.php'); ?>
      <div id="entries_container" class="entries_container">
      </div>
    <?php endif; ?>
</main>

<?php require_once('components/footer.php'); ?>
