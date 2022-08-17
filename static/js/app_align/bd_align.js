// buttons
var bd_btn_global = document.getElementById('bd_btn_global');
var bd_btn_local = document.getElementById('bd_btn_local');

// modal body
var modal_body_result = document.getElementById('modal_body_result');

// event listener to bd_btn_global
bd_btn_global.addEventListener('click', function (event) {
    axios_get_all_organisms('global');
    console.log('bd_btn_global');
});

bd_btn_local.addEventListener('click', function (event) {
    axios_get_all_organisms('local');
    console.log('bd_btn_local');
});

function axios_get_all_organisms(type) {
    axios.get('/alineamientos/get_all_organisms/')
        .then(function (response) {
            console.log(response.data['sequence']);
            modal_body_result.innerHTML = response.data;

        })
        .catch(function (error) {
            console.log(error);
        });
}