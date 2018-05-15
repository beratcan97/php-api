
	<?php require_once('head.php'); ?>

	<?php require_once('navbar.php'); ?>
	
    <div class="container">
        <?php if(isset($_SESSION['userID'])): ?>
        <h1 class="title">Edit your entry</h1>

        <div>
            <form class="field" action="edit_entry.php" method="POST">
                <label for="title" class="subtitle">Title</label>
                <div class="control">
                    <input type="text" class="input" name="title" value="<?= $entry['title']; ?>">
                </div>
                <label for="content" class="label subtitle">Content</label>
                <div class="control">
                    <textarea class="textarea" name="content" rows="5"><?= $entry['content'] ?></textarea>
                </div>
                <div class="control">
                    <input class="input" type="hidden" name="entryID" value="<?= $_GET["entryID"]?>">
                </div>
                <br>
                <div class="control">
                    <button type="submit" class="button is-outlined is-primary">Add changes</button>
                </div>
            </form> 
        </div>
        <?php endif; ?>
	</div>

	<?php require_once('footer.php'); ?>
</body>
</html>