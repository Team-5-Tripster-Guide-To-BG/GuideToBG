function printDiv() {
    const divToPrint = document.getElementById('personalTripsterList');

    let newWin=window.open('','Print-Window');

    newWin.document.open();

    newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+ divToPrint.innerText + '</body></html>');

    newWin.document.close();

    setTimeout(function(){newWin.close();},10);
};