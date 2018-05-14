function isset(item) {
    return item !== null;
}

async function buildProfileEntries() {
    let route = "entries/user/" + sessionStorage.getItem("userID");
    let userEntries = await api.get(route);

    userEntries.data.forEach(entry => {
      entriesContainer.appendChild(builder.entries(entry.title, entry.content));
    });
}

if(isset(sessionStorage.getItem("userID"))) {
    buildProfileEntries();
}
