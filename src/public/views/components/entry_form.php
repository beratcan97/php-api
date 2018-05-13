<form action="/api/entries" id="entry_form" method="post">
    <div class="field">
      <label for="title" class="subtitle">Title</label>
      <div class="control">
          <input type="text" class="input" id="entry_title" name="title" placeholder="Title">
      </div>
    </div>
    <div>
      <label for="content" class="subtitle">Content</label>
      <div class="control">
          <textarea class="input" id="entry_content" name="content" placeholder="Enter some text">
          </textarea>
      </div>
      <input type="hidden" name="createdBy" value=<?= $_SESSION['userID'] ?>>
      <button type="submit">Add entry</button>
    </div>
  </form>
