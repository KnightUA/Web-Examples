/*  Function countToTen performs the following actions:
    Initializes the variable count to zero
    Starts a loop checking that the current count value is less than 10
    Increases count value by 1
    Add current count value with next after him tag line break in paragraph with id = "idCount"
    Run next iteration of loop
*/
function countToTen() {
    var count = 0;
    while (count < 10) {
        count++;
        document.getElementById("idCount").innerHTML += count + "<br>";
    }
}