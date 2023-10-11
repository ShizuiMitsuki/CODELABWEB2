function jumlahkan() {
  var bilangan1 = parseFloat(document.getElementById("number1").value);
  var bilangan2 = parseFloat(document.getElementById("number2").value);

  if (!isNaN(bilangan1) && !isNaN(bilangan2)) {
    var hasil = bilangan1 + bilangan2;
    alert("Hasil penjumlahan: " + hasil);
  } else {
    alert("Masukkan bilangan yang valid.");
  }
}

function ulangi() {
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
  document.getElementById("hasil").innerText = "";
}
