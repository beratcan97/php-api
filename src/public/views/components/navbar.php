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
		<a href="../">Home</a>
	</li>

	<li>
		<a href="/logout" id="sign_out">Sign out</a>
	</li>

	<li>
		<a href="/profile">Profile</a>
	</li>

	<?php endif; ?>
  </ul>
</div>
