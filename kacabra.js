// Funktion för att lägga till spelare
document.getElementById('addPlayerBtn').addEventListener('click', function() {
    var newPlayer = prompt("Ange namnet på en ny spelare:");
    if (newPlayer) {
        var listItem = document.createElement('li');
        listItem.textContent = newPlayer;
        document.getElementById('player-list').appendChild(listItem);
    }
});
