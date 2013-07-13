$(document).ready(function() {
  request(1, 0);
})

function request(n, result) {
  var url = "http://127.0.0.1:8000/update/?callback=?";
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
  result = 1;
  var i;
  for (i=2; i<=Math.floor(Math.sqrt(n)); i++) {
    if (n%i === 0) {
      result=0;
    }
  }
  return result;
}

function hi() {
  alert('hi');
  return 5;
}
