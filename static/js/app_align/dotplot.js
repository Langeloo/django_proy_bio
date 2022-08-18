var nomSq2 = "Manual"
var sq1 = document.getElementById("list_organism2")
var sq2 = document.getElementById("data1_dinput")
var content = document.getElementById("modal_body_content")
var button = document.getElementById("seq_btn_dotplot")

button.addEventListener('click', function (event) {
    var nomSq1 = sq1.options[sq1.selectedIndex].text;
    var strHead = ""
    var strBody = ""
    strHead += `<tr><th class="borde-derecho" rowspan="2" colspan="2"></th>`// Espacio en blanco 0,0
    strHead += `<th class="text-center" colspan="${sq1.value.length}">${nomSq1}</th></tr>` // Nombre Sq1
    strHead += `<tr>` // fila sq1
    for (let i of sq1.value) {
        strHead += `<th>${i}</th>` // cada letra de sq1 como columna
    }
    strHead += `</tr>` // fila sq1
    
    strBody += `<tr><th id="nomSq2" rowspan=${sq2.value.length}><span id="nameThrowing">${nomSq2}</span></th>` // Nombre Sq2
    
    for (i = 0; i < sq2.value.length; i++) {
        strBody += `<th class="borde-derecho">${sq2.value[i]}</th>`
        for (j = 0; j < sq1.value.length; j++) {
            if (sq2.value[i] == sq1.value[j]) {
                strBody += `<th>X</th>`
            } else {
                strBody += `<th> </th>`
            }
        }
        strBody += `</tr>`
        if (i != (sq2.value.length - 1)) {
            strBody += `<tr>`
        }
    }

    var allHtml = `<div class="col-md-12">\
                    <table class="table table-sm table-bordered" id="myTable">\
                        <thead id="tHead">\
                        ${strHead}\
                        </thead>\
                        <tbody id="tBody">\
                        ${strBody}\
                        </tbody>\
                    </table>\
                </div>`
    content.innerHTML = allHtml
})