<nav class="navbar">
	<div class="container">
		<div class="navbar-end">
			<ul class="navbar">
				
				<?php if(!isset($_SESSION['userID'])): ?>
				
				<li class="navbar-item">
					<a href="views/components/login.php">Log in</a>
				</li>
				<li class="navbar-item">
					<a href="views/components/register.php">Register</a>
				</li>
				
				<?php else:  ?>
									
				<li class="navbar-item">
					<a href="views/components/logout.php">Sign out</a>
				</li>

				<?php endif; ?>	
			</ul>
		</div>
	</div>
</nav>
<hr>