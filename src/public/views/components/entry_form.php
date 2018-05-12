<?php require('head.php'); ?>
<form action="/entries" id="login_form" method="post">
    <div class="field">
      <label for="title" class="subtitle">Title</label>
      <div class="control">
          <input type="text" class="input" id="title" name="title" placeholder="Title">
      </div>
    </div>
    <div>
      <label for="text" class="subtitle">Text</label>
      <div class="control">
          <textarea type="text" class="input" id="text" name="text" placeholder="Enter some text">
      </div>
      <button type="submit">Add entry</button>
    </div>
  </form>
  <?php require('footer.php'); ?>
