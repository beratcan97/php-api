
<div class="section">
	<div>
		<h3 class="h5"><?= $post['title'] ?></h3>
		<div class="field">
			<a href="edit_post.php?entryID=<?= $entry["entryID"]?>" class="button">Edit</a>	
			<form action="partials/delete_post.php" class="field" method="POST">
				<input type="hidden" name="entryID" value="<?= $entry["entryID"] ?>">
				<button type="submit" class="button">Delete</button>
			</form>
		</div>
		</div>
		<div class="message-body">
			<p><?= $post['content'] ?></p>
		</div>	
</div>

