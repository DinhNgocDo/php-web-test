function demKyTu() {
    var str = "Viet nam vo dich, vo dich";
    var kytu = str.length;
    document.getElementById("demKyTu").innerHTML = 'Số ký tự của chuỗi là: ' + kytu + '';
}

function demTu() {
    var str = "Viet nam vo dich, vo dich";
    var arr = str.split(" ");
    var tu = arr.length;
    document.getElementById("demTu").innerHTML = 'Số từ của chuỗi là: ' + tu + '';
}

function demKyTuLap() {
    var str1 = "Viet nam vo dich, vo dich";
    str1 = str1.toLowerCase().replace(/ /g, '');
    var dem;
    var strCount = '';
    var demKyTu = '';
    for (var i = 0; i < str1.length; i++){
        dem = 1;
        for (var j = i + 1; j <= str1.length; j++){
            if (strCount.indexOf(str1[j]) == -1 && str1[i] == str1[j]){
                dem++;
            }
        }
        if (strCount.indexOf(str1[i]) == -1){
            demKyTu += '"' + str1[i] +'"' + ' xuất hiện ' + dem + ' lần' + ' --- ';
        }
        strCount += str1[i];
    }
    document.getElementById("demKyTuLap").innerHTML = 'Số ký tự lặp của chuỗi là: ' + demKyTu;
}

function demTuLap() {
    var str = "Viet nam vo dich , vo dich";
    str = str.toLowerCase().replace(",","").split(" ");
    var dem;
    var strCount = '';
    var demTu = '';
    for (var i = 0; i < str.length; i++){
        dem = 1;
        for (var j = i + 1; j <= str.length; j++){
            if (strCount.indexOf(str[j]) == -1 && str[i] == str[j]){
                dem++;
            }
        }
        if (strCount.indexOf(str[i]) == -1){
            demTu += '"' + str[i] + '"' + ' xuất hiện ' + dem + ' lần ' + ' --- ';
        }
        strCount += str[i]
    }
    document.getElementById("demTuLap").innerHTML = 'Số từ lặp của chuỗi là: ' + demTu;
}

function checkLogin() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    if (username == '' || password == ''){
        alert('Vui lòng điền đầy đủ thông tin đăng nhập')
    }
}