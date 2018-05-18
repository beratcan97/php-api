<div>
  <div id="search_wrapper">
    <input type="text" class="input" name="searchbar" placeholder="Search entries by title" id="searchbar">
	</div>
</div>

<div class="tabs is-right">
  <ul>
	<?php if (!isset($_SESSION['userID'])): ?>

	<li>
		<a href="/login">Log in</a>
	</li>
	<li>
		<a href="/register">Register</a>
	</li>


	<?php else:  ?>

	<li>
			<a href="../" ><span class="icon has-text-info">
				<i class="fas fa-home"></i></span>Home
			</a>
	</li>

	<li>
		<a href="/logout" id="sign_out">Sign out</a>
	</li>

	<li>
		<a href="/profile/<?= $_SESSION['userID'] ?>"><?= $_SESSION['username'] ?></a>
	</li>

	<?php endif; ?>
  </ul>
</div>
