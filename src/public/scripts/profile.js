function isset(item) {
    return item !== null;
}

async function buildProfileEntries() {
    let route = "entries/user/" + localStorage.getItem("userID");
    let userEntries = await api.get(route);
  
    userEntries.data.forEach(entry => {
      entriesContainer.appendChild(builder.entries(entry.title, entry.content));
    });
}

if(isset(localStorage.getItem("userID"))) {
    buildProfileEntries();
}