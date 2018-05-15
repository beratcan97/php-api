<form action="/api/addLike" class="container box" method="post">
    <input type="hidden" name="userID" value=<?= $_SESSION['userID'] ?>>
    <input type="hidden" name="entryID" value=<?= $_SESSION['entryID'] ?>>
    
    <button type="submit" class="button">Like</button>
</form>