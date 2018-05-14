<nav class="navbar">
		<div class="navbar-end">
			<ul class="navbar">

				<?php if (!isset($_SESSION['userID'])): ?>

				<li class="navbar-item">
					<a href="/login">Log in</a>
				</li>
				<li class="navbar-item">
					<a href="/register">Register</a>
				</li>

				<?php else:  ?>

				<li class="navbar-item">
					<a href="../">Home</a>
				</li>

				<li class="navbar-item">
					<a href="/logout" id="sign_out">Sign out</a>
				</li>

				<li class="navbar-item">
					<a href="/profile">Profile</a>
				</li>

				<?php endif; ?>
			</ul>
		</div>
</nav>

