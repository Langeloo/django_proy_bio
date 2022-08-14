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

// add event listener to manual_radio
manual_radio.addEventListener('change', function () {
    if (manual_radio.checked) {
        manual_input.style.display = 'block';
        fasta_input.style.display = 'none';
        alert_select.style.display = 'none';
        console.log('manual_radio');
    }
});

fasta_radio.addEventListener('change', function () {
    if (fasta_radio.checked) {
        manual_input.style.display = 'none';
        fasta_input.style.display = 'block';
        alert_select.style.display = 'none';
        console.log('fasta_radio');
    }
});