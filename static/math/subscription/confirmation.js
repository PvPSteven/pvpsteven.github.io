function printReceipt(link) {
  var href = link.href;
  // Fix bug 12362 -ecurtis 2/25/08 -- These are now part of the href.
//  var pId = document.getElementById("paymentId").value;
//  var confNum = document.getElementById("confNum").value;
//  href += "?paymentId=" + pId + "&confNum=" + confNum;
  var win = window.open(href,"","height=600,width=700,status=yes,toolbar=yes,scrollbars=yes,resizable=yes,menubar=yes,location=yes");
  win.focus();
}