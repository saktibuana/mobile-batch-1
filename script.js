function pengecekan() {
  let input = document.getElementsByTagName("input")[0].value;
  console.log(input);
  if (input % 2 == 0) {
    document.getElementById("hasil").innerHTML = "Ini adalah bilangan genap";
  } else if (input % 3 == 0) {
    document.getElementById("hasil").innerHTML =
      "Ini adalah bilangan kelipatan 3";
  } else if (input % 5 == 0) {
    document.getElementById("hasil").innerHTML =
      "Ini adalah bilangan kelipatan 5";
  } else {
    document.getElementById("hasil").innerHTML =
      "Ini bukan bilangan genap atau kelipatan 3";
  }
}

let button = document.getElementsByTagName("button")[0];

button.addEventListener("click", pengecekan);
