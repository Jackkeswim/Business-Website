function copyDiscordID() {
    // Create a temporary input element to copy the Discord ID
    const discordID = "edwi1218";  // Change this to your Discord ID
    const tempInput = document.createElement("input");
    tempInput.value = discordID;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy"); // Copy the text
    document.body.removeChild(tempInput);

    // Optionally, show a message that the Discord ID was copied
    alert("Discord ID copied to clipboard: " + discordID);

    // Open Discord (you can open it in a new tab or directly to the app)
    window.open("https://discordapp.com/users/" + discordID, "_blank");
}