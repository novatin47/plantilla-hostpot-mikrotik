var voucher = getStorageValue("activeVoucher");


document.addEventListener('DOMContentLoaded', function() {
  if (typeof loginError !== 'undefined') {
    if (loginError != "") {
      document.getElementById("idparpadeante").innerText = loginError.toUpperCase();
    }
  }
});

if (voucher == null) {
  voucher = "";
}

if (voucher != "") {
  document.getElementById('voucherInput').value=voucher
}

function setStorageValue(key, value) {
  if (localStorage != null) {
    localStorage.setItem(key, value);
  } else {
    setCookie(key, value, 364);
  }
}

function removeStorageValue(key) {
  if (localStorage != null) {
    localStorage.removeItem(key);
  } else {
    eraseCookie(key);
  }
}

function pause() {
  document.logout.submit();
}

function resume() {
  location.reload();
}

function getStorageValue(key) {
  if (localStorage != null) {
    return localStorage.getItem(key);
  } else {
    return getCookie(key);
  }
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}


function openDialog() {
  document.getElementById('idModal').showModal();
}

function closeDialog() {
  document.getElementById('idModal').close();
}

let trtd = "<tr>";
    trtd += "<td>rateName</td>";
    trtd += "<td>&nbsp;&nbsp;&nbsp;&nbsp;price</td>";
    trtd += "</tr>";

var insertTr = "<tr>\
                <th><h4>Tiempo</h4></th>\
                <th><h4>&nbsp;&nbsp;&nbsp;&nbsp;Precio</h4></th>\
                </tr>";

if (typeof listaTarifas !== 'undefined') {
  for (const tarifa of listaTarifas) {
    var script = trtd.replace("rateName", tarifa['nombre']);
        script = script.replace("price", tarifa['precio']);
        insertTr += script;
    }

    document.getElementById("idtable").innerHTML = insertTr;
}
