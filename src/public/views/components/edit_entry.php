<!DOCTYPE html>
<html lang="en">
<head>
	<?php require_once('components/head.php'); ?>
</head>
<body>
	<?php require_once('components/navbar.php'); ?>
	
    <div class="container">
        <?php if(isset($_SESSION['userID'])): ?>
        <h1 class="title">Edit your entry</h1>

        <div>
            <form class="field" action="components/edit_post.php" method="POST">
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
                    <button type="submit" class="button">Add changes</button>
            </form> 
        </div>
        <?php endif; ?>
	</div>

	<?php require_once('partials/footer.php'); ?>
</body>
</html>