
<div class="tabs is-right">
	<?php if (!isset($_SESSION['userID'])): ?>
<ul>
	<li>
		<a href="/login">Log in</a>
	</li>
	<li>
		<a href="/register">Register</a>
	</li>
</ul>
</div>
	<?php else:  ?>
  <a href="/profile/<?= $_SESSION['username'] ?>">
    <p class="is-small">Welcome, <?= $_SESSION['username'] ?> </p>
  </a>

  <ul>
  	<li>
  			<a href="/" ><span class="icon has-text-primary">
  				<i class="fas fa-home"></i></span>Home
  			</a>
  	</li>

  	<li>
  		<a href="/profile/<?= $_SESSION['username'] ?>"><?= $_SESSION['username'] ?></a>
  	</li>

	  <?php if ($_SESSION['admin'] == 1): ?>
		    <li>
	         <a href="/admin">Admin</a>
		    </li>
    <?php endif; ?>

    <li>
      <a href="/logout" id="sign_out">Sign out</a>
    </li>
  </ul>
</div>

<div class="container">
  <span id="search_wrapper" class="searchbar">
    <input type="text" class="input" name="searchbar" placeholder="Search entries by title" id="searchbar">
  </span>
</div>

<?php endif; ?>
