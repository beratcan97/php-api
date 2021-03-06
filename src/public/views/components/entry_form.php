
<form action="/api/entries" class="container box container-entry-style" id="entry-form" method="post">
    <div class="field">
      <label for="title" class="subtitle">Title</label>
      <div class="control">
          <input type="text" class="input" id="entry-title" name="title" placeholder="Title" required>
      </div>
    </div>
    <div>
      <label for="content" class="subtitle">Content</label>
      <div class="control">
        <textarea class="textarea" id="entry-form" name="content" rows="4" cols="50" placeholder="Enter some text here..." required></textarea>
      </div>
      <input type="hidden" name="createdBy" value=<?= $_SESSION['userID'] ?>>
      <button type="submit" class="button is-outlined is-primary"><i class="fas fa-plus icons"></i>Add entry</button>
    </div>
  </form>
