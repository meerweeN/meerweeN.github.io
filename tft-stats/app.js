function searchTable() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("searchFct");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableStat");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else if (tr[i].id!='tableHeader') {
            tr[i].style.display="none";

        }
            
    }
}

$('.icon-up').click(function () {
    $(this).toggleClass('rotate')
})



