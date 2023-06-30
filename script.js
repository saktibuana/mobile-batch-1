function pengecekan() {
  let input = document.getElementsByTagName("input")[0].value;
  console.log(input);
  if (input % 2 == 0) {
    document.getElementById("hasil").innerHTML = "Ini adalah bilangan genap";
  } else {
    document.getElementById("hasil").innerHTML = "Ini bukan bilangan genap";
  }
}

let button = document.getElementsByTagName("button")[0];

button.addEventListener("click", pengecekan);
