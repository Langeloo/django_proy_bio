const fasta1 = document.getElementById('fasta_input');
const data_label1 = document.getElementById('data_label1');

fasta1.addEventListener('change', (event) => {
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
        try{
            seq = lines[1].replace(/\s/g, '').substring(0, 60);
        }
        catch(err){
            seq = 'SINDATOS';
            document.getElementById('global_aling_fasta').disabled = true;
            document.getElementById('local_aling_fasta').disabled = true;
        }
        labelfasta1.innerHTML = 'Organismo: ' + header.split('|')[4].split(',')[0] + '<br>' + '<br>Id: ' + header.split('|')[1]; + seq + '<br>'
        document.getElementById('data1_dinput').value = seq;
        console.log(seq);
        if (document.getElementById('seq_fasta1').value == 'SINDATOS') {
            document.getElementById('global_aling_fasta').disabled = true;
            document.getElementById('local_aling_fasta').disabled = true;
        }
        else {
            document.getElementById('global_aling_fasta').disabled = false;
            document.getElementById('local_aling_fasta').disabled = false;
        }
        document.getElementById('lower_fasta1').disabled = false;
        document.getElementById('upper_fasta1').disabled = false;
        document.getElementById('upper_fasta1').value = seq.lenght;
    };
});