var nomSq2 = "Manual"
var sq1_data = document.getElementById("list_organism2")
var sq2_data = document.getElementById("data1_dinput")
var content = document.getElementById("modal_body_content")
var button = document.getElementById("seq_btn_dotplot")
// sliders
var seq_slider1_min = document.getElementById("seq_slider1_min")
var seq_slider1_max = document.getElementById("seq_slider1_max")
var seq_slider2_min = document.getElementById("seq_slider2_min")
var seq_slider2_max = document.getElementById("seq_slider2_max")

button.addEventListener('click', function (event) {
    var sq1 = sq1_data.value.substring(seq_slider2_min.value, seq_slider2_max.value)
    var sq2 = sq2_data.value.substring(seq_slider1_min.value, seq_slider1_max.value)
    var nomSq1 = sq1_data.options[sq1_data.selectedIndex].text;
    var strHead = ""
    var strBody = ""
    strHead += `<tr><th class="borde-derecho" rowspan="2" colspan="2"></th>`// Espacio en blanco 0,0
    strHead += `<th class="text-center" colspan="${sq1.length}">${nomSq1}</th></tr>` // Nombre Sq1
    strHead += `<tr>` // fila sq1
    for (let i of sq1) {
        strHead += `<th>${i}</th>` // cada letra de sq1 como columna
    }
    strHead += `</tr>` // fila sq1
    
    strBody += `<tr><th id="nomSq2" rowspan=${sq2.length}><span id="nameThrowing">${nomSq2}</span></th>` // Nombre Sq2
    
    for (i = 0; i < sq2.length; i++) {
        strBody += `<th class="borde-derecho">${sq2[i]}</th>`
        for (j = 0; j < sq1.length; j++) {
            if (sq2[i] == sq1[j]) {
                strBody += `<th>X</th>`
            } else {
                strBody += `<th> </th>`
            }
        }
        strBody += `</tr>`
        if (i != (sq2.length - 1)) {
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