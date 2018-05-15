
<div class="section">
	<div>
		<h3 class="h5"><?= $entry['title'] ?></h3>
		<div class="field">
			<a href="edit_entry.php?entryID=<?= $entry["entryID"]?>" class="button">Edit</a>	
			<form action="compoents/delete_entry.php" class="field" method="POST">
				<input type="hidden" name="entryID" value="<?= $entry["entryID"] ?>">
				<button type="submit">Delete</button>
			</form>
		</div>
		</div>
		<div class="message-body">
			<p><?= $post['content'] ?></p>
		</div>	
</div>

