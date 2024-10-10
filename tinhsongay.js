let thang1=1;
let thang2=2;
let thang3=3;
let thang4=4;
let thang5=5;
let thang6=6;
let thang7=7;
let thang8=8;
let thang9=9;
let thang10=10;
let thang11=11;
let thang12=12;
function tinhngay() {
    let month=document.getElementById('thang').value;
    if(month==thang1||month==thang3||month==thang5||month==thang7
    ||month==thang8||month==thang10||month==thang12){
        document.getElementById('ketqua').innerHTML="Thang " +month+ " co 31 ngay";
    }else if(month==thang2){
        document.getElementById('ketqua').innerHTML="Thang " +month+ " co 28 hoac 29 ngay";
    }else{
        document.getElementById('ketqua').innerHTML="Thang " +month+ " co 30 ngay";
    }
}