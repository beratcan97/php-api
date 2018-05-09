<nav class="navbar">
	<div class="container">
		<div class="navbar-end">
			<ul class="navbar">
				
				<?php if(!isset($_SESSION['userID'])): ?>
				
				<li class="navbar-item">
					<a href="components/login.php">Sign up</a>
				</li>
				<li class="navbar-item">
					<a href="components/signin.php">Sign in</a>
				</li>
				
				<?php else:  ?>
									
				<li class="navbar-item">
					<a href="components/signout.php">Sign out</a>
				</li>

				<?php endif; ?>	
			</ul>
		</div>
	</div>
</nav>
<hr>