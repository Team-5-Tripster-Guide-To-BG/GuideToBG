// TODO: replace this function with jquery plug-in $('personalTripsterList').printThis(); in order to display CSS as well

function printDiv() {
    var divToPrint=document.getElementById('personalTripsterList');

    var newWin=window.open('','Print-Window');

    newWin.document.open();

    newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+ divToPrint.innerText + '</body></html>');

    newWin.document.close();

    setTimeout(function(){newWin.close();},10);
};