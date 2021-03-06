var percent;
var bill;
var person;
var total = document.getElementById('total');
var amount = document.getElementById('amount');

document.addEventListener('input', e => {
    var val_name = e.target.name;
    var val_value = e.target.value;

    switch (val_name) {
        case 'percent':
            //clear Custom field
            document.getElementById('custom').value = '';
            percent = val_value;
            break;

        case 'percent-custom':
            percent = val_value;
            uncheckPercents();
            break;
        case 'bill':
            bill = val_value;
            break;
        case 'person':
            person = val_value;
            break;
        default:
            console.log("err in switch");
    }

    var tip = bill * percent / 100;
    if (tip) {
        //  3 numbers after comma
        total.innerText = Math.round(tip * 1000) / 1000;
        if (person) {
            amount.innerText = Math.round(tip / person * 1000) / 1000;
        }
    }
});

// uncheck all radio-buttons percents
function uncheckPercents() {
    var arr = document.getElementsByClassName('calc__grid-item-input');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].checked)
            arr[i].checked = false;
    }
}


function my_reset() {
    document.getElementById('bill').value = '';
    document.getElementById('custom').value = '';
    document.getElementById('person').value = '';
    total.innerText = 0;
    amount.innerText = 0;
    uncheckPercents();
}