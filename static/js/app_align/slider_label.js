// labels sliders 1
var bd_span1_min = document.getElementById("bd_span1_min");
var bd_span1_max = document.getElementById("bd_span1_max");
var bd_span2_min = document.getElementById("bd_span2_min");
var bd_span2_max = document.getElementById("bd_span2_max");
var seq_span1_min = document.getElementById("seq_span1_min");
var seq_span1_max = document.getElementById("seq_span1_max");
var seq_span2_min = document.getElementById("seq_span2_min");
var seq_span2_max = document.getElementById("seq_span2_max");

// sliders
var bd_slider1_min = document.getElementById("bd_slider1_min");
var bd_slider1_max = document.getElementById("bd_slider1_max");
var bd_slider2_min = document.getElementById("bd_slider2_min");
var bd_slider2_max = document.getElementById("bd_slider2_max");
var seq_slider1_min = document.getElementById("seq_slider1_min");
var seq_slider1_max = document.getElementById("seq_slider1_max");
var seq_slider2_min = document.getElementById("seq_slider2_min");
var seq_slider2_max = document.getElementById("seq_slider2_max");

function update_labels(){
    console.log("update_labels");
    bd_span1_min.innerHTML = bd_slider1_min.value;
    bd_span1_max.innerHTML = bd_slider1_max.value;
    bd_span2_min.innerHTML = bd_slider2_min.value;
    bd_span2_max.innerHTML = bd_slider2_max.value;
    seq_span1_min.innerHTML = seq_slider1_min.value;
    seq_span1_max.innerHTML = seq_slider1_max.value;
    seq_span2_min.innerHTML = seq_slider2_min.value;
    seq_span2_max.innerHTML = seq_slider2_max.value;
}