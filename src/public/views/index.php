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
          Title
        </p>
        <button type="submit" name="editBtn" id="editBtn" class="button is-outlined is-primary has-margin">Edit</button>
        <button type="submit" name="deleteBtn" id="deleteBtn" class="button is-outlined is-danger">Delete</button>
      </header>
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <footer class="card-footer is-right">
        <button type="submit" name="likeBtn" id="likeBtn" class="button is-outlined is-info">Likes</button>
        <button type="submit" name="commentBtn" id="commentBtn" class="button is-outlined is-info">Comments</button>
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
