// radios choices
var manual_radio = document.getElementById('manual_radio');
var fasta_radio = document.getElementById('fasta_radio');
var bd_radio = document.getElementById('bd_radio');
var seq_radio = document.getElementById('seq_radio');

// inputs
var manual_input = document.getElementById('manual_input');
var fasta_input = document.getElementById('fasta_input');

// alert
var alert_select = document.getElementById('alert_select');
var alert_select2 = document.getElementById('alert_select2');

// data
var data1_input = document.getElementById('data1_input');
var bd_choice = document.getElementById('bd_choice');
var seq_choice = document.getElementById('seq_choice');

// container
var config_align_container = document.getElementById('config_align_container');

// add event listener to manual_radio
manual_radio.addEventListener('change', function () {
    if (manual_radio.checked) {
        manual_input.style.display = 'block';
        fasta_input.style.display = 'none';
        alert_select.style.display = 'none';
        data1_input.style.display = 'block';
        config_align_container.style.display = 'block';
        console.log('manual_radio');
    }
});

fasta_radio.addEventListener('change', function () {
    if (fasta_radio.checked) {
        manual_input.style.display = 'none';
        fasta_input.style.display = 'block';
        alert_select.style.display = 'none';
        data1_input.style.display = 'block';
        config_align_container.style.display = 'block';
        console.log('fasta_radio');
    }
});

bd_radio.addEventListener('change', function () {
    if (bd_radio.checked) {
        alert_select2.style.display = 'none';
        bd_choice.style.display = 'block';
        seq_choice.style.display = 'none';
        console.log('bd_radio');
    }
});

seq_radio.addEventListener('change', function () {
    if (seq_radio.checked) {
        alert_select2.style.display = 'none';
        bd_choice.style.display = 'none';
        seq_choice.style.display = 'block';
        console.log('seq_radio');
    }
});