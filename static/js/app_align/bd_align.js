// buttons
var bd_btn_global = document.getElementById('bd_btn_global');
var bd_btn_local = document.getElementById('bd_btn_local');

// modal body
var modal_body_result = document.getElementById('modal_body_result');

//data
var seq_data = document.getElementById('data1_dinput');

// event listener to bd_btn_global
bd_btn_global.addEventListener('click', function (event) {
    modal_body_result.innerHTML = '<div class="d-flex align-items-center">\
                                        <strong>Loading...</strong>\
                                        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>\
                                    </div>';
    axios_get_all_organisms(true);
    console.log('bd_btn_global');
});

bd_btn_local.addEventListener('click', function (event) {
    modal_body_result.innerHTML = '<div class="d-flex align-items-center">\
                                        <strong>Loading...</strong>\
                                        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>\
                                    </div>';
    axios_get_all_organisms(false);
    console.log('bd_btn_local');
});

function axios_get_all_organisms(type) {
    axios.get('/alineamientos/get_all_organisms/')
        .then(function (response) {
            if (type) {
                global_align(JSON.parse(response.data));
            }
            else {
                local_align(JSON.parse(response.data));
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function global_align(data) {
    modal_data = '';
    for (organism in data) {
        var name = data[organism].name;
        var identificator = data[organism].identificator;
        var sequence = data[organism].sequence;
        var organism_name = '<h3 class="h3 text-primary text-center">' + identificator + ' - ' + name + '</h3><br>';
        modal_data += (organism_name + '' + align(seq_data.value, sequence));
        console.log(modal_data);
    }
    modal_body_result.innerHTML = modal_data;
}

function local_align(data) {
    console.log(data);
}

function align(seq1, seq2) {
    var table_head = '';
    var table_body = '';
    var table_foot = '';
    var success_count = 0;
    var percent_success = 0;
    for (var i = 0; i < Math.min(seq1.length, seq2.length); i++) {
        table_head += '<th>' + seq1[i] + '</th>';
        table_foot += '<th>' + seq2[i] + '</th>';
        if (seq1[i] == seq2[i]) {
            table_body += '<td class="bg-success">' + 1 + '</td>';
            success_count++;
        }
        else {
            table_body += '<td class="bg-danger">' + 1 + '</td>';
        }
    }
    if (seq1.length == seq2.length) {
        percent_success = 'Porcentaje de similitud: ' + success_count / seq1.length * 100 + '%';
    }
    else {
        percent_success = 'Secuentas de difernte longitud';
    }
    return '<div class="org_container">\
                <div class="table-responsive">\
                    <table class="table table-bordered text-center">\
                        <tbody>\
                        <tr id="table_head">\
                            ' + table_head + '\
                        </tr>\
                        <tr id="table_body">\
                            ' + table_body + '\
                        </tr>\
                        <tr id="table_foot">\
                            ' + table_foot + '\
                        </tr>\
                        </tbody>\
                    </table>\
                </div>\
                <br>\
                <div class="row text-center">\
                    <div class="col-md-4">\
                    <strong>' + percent_success + '</strong>\
                    </div>\
                    <div class="col-md-4">\
                    <strong> Longitud secuencia 1: ' + seq1.length + '</strong>\
                    </div>\
                    <div class="col-md-4">\
                    <strong> Loigitud secuencia 2: ' + seq2.length + '</strong>\
                    </div>\
                </div>\
            </div><br><br>'
}