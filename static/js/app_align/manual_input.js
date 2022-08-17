// inputs
var manual_input = document.getElementById('manual_input');
var fasta_input = document.getElementById('fasta_input');

// labels & info
//var data_label1 = document.getElementById('data_label1');
var fasta_head = document.getElementById('fasta_head');
var data1_dinput = document.getElementById('data1_dinput');
var manual_alert_label = document.getElementById('manual_alert_label');
var manual_alert_input = document.getElementById('manual_alert_input');

// event listener to manual_input
manual_input.addEventListener('keypress', function (event) {
    fasta_head.innerHTML = '';
    seq_text = manual_input.value + event.key;
    data1_dinput.value = seq_text.toUpperCase();
    ver_characters(seq_text.toUpperCase());
    console.log('manual_input');
});

fasta_input.addEventListener('change', function (event) {
    const fastadoc1 = event.target.files[0];
    if (!fastadoc1) {
        return;
    }
    var reader = new FileReader();
    reader.readAsText(fastadoc1);
    reader.onload = function () {
        text = reader.result;
        var lines = text.split('\n');
        header = lines[0];
        fasta_head.innerHTML = header;
        console.log(header);
        try{
            seq = lines[1].replace(/\s/g, '').substring(0, 60);
        }
        catch(err){
            seq = 'SINDATOS';
        }
        data1_dinput.value = seq;
    };
    console.log('fasta_input');
});

function ver_characters(seq){
    var valid_characters = 'ACTG';
    var valid = true;
    if (seq.length > 0) {
        for (var i = 0; i < seq.length; i++) {
            if (valid_characters.includes(seq[i])) {
                valid = true;
            }
            else {
                valid = false;
                break;
            }
        }
    }

    if (valid) {
        manual_alert_label.innerHTML = '';
        manual_alert_input.removeAttribute('class');
        manual_alert_input.setAttribute('class', 'alert alert-success');
    }
    else {
        manual_alert_label.innerHTML = 'Algunos caracteres no corresponden a una secuencia de ADN - ACTG';
        manual_alert_input.removeAttribute('class');
        manual_alert_input.setAttribute('class', 'alert alert-danger');
    }
    console.log(valid);
}