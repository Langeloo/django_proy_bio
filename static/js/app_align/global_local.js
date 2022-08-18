var seq_slider1_min = document.getElementById("seq_slider1_min");
var seq_slider1_max = document.getElementById("seq_slider1_max");
var seq_slider2_min = document.getElementById("seq_slider2_min");
var seq_slider2_max = document.getElementById("seq_slider2_max");

var content = document.getElementById("modal_body_content")
var data1_dinput = document.getElementById("data1_dinput");
var list_organism2 = document.getElementById("list_organism2");

// buttons
var seq_btn_global = document.getElementById("seq_btn_global");
var seq_btn_local = document.getElementById("seq_btn_local");

//event listener to bd_btn_global
seq_btn_global.addEventListener("click", function (event) {
    content.innerHTML = '';
    var organism_name = list_organism2.options[list_organism2.selectedIndex].text;
    var title = '<h3 class="h3 text-primary text-center">' + organism_name + '</h3><br>';
    title += align(data1_dinput.value, list_organism2.options[list_organism2.selectedIndex].value);
    content.innerHTML = title;
});

seq_btn_local.addEventListener("click", function (event) {
    content.innerHTML = '';
    var organism_name = list_organism2.options[list_organism2.selectedIndex].text;
    var title = '<h3 class="h3 text-primary text-center">' + organism_name + '</h3><br>';
    title += align(data1_dinput.value.substring(seq_slider1_min.value, seq_slider1_max.value), list_organism2.options[list_organism2.selectedIndex].value.substring(seq_slider2_min.value, seq_slider2_max.value));
    content.innerHTML = title;
});