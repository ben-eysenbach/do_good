$(document).ready(function() {
  request(1, 0);
})

function request(n, result) {
  var url = "http://arcane-sea-9808.herokuapp.com/update/?callback=?";
  url = url + "&n=" + n;
  url = url + "&result=" + result;
  //alert(url);
  $.getJSON(url, callback);
}

function callback(data) {
  n = data.n;
  document.getElementById("number").innerHTML = n;
  result = isPrime(n);
  setTimeout(function() {request(n, result);}, 100);
}


function isPrime(n) {
  var i;
  for (i=2; i<=Math.floor(Math.sqrt(n)); i++) {
    if (n%i === 0) {
      return 0;
    }
  }
  return 1;
}

function hi() {
  alert('hi');
  return 5;
}
