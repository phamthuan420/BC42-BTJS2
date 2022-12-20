// BT1
document.getElementById("btnluong").onclick = function() {
    let ngayLuong = +document.getElementById("ngayluong").value;
    let ngayCong = +document.getElementById("ngaycong").value;
    let total = ngayCong * ngayLuong
    document.getElementById("luongtn").style.display = "block"
    document.getElementById("total").innerHTML = total
}
//BT2

document.getElementById("btntinh").onclick = function() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let num3 = +document.getElementById("num3").value;
    let num4 = +document.getElementById("num4").value;
    let num5 = +document.getElementById("num5").value;
    let ketqua1 = (num1 + num2 + num3 + num4 + num5)/5;
    document.getElementById("tongsothuc").style.display = "block"
    document.getElementById("ketqua1").innerHTML = ketqua1
}

// BT3
document.getElementById("btndoi").onclick = function() {
    let vnd = 23500;
    let usd = +document.getElementById("usd").value
    let ketqua2 = usd * vnd
    
    document.getElementById("giatriquydoi").style.display = "block"
    document.getElementById("ketqua2").innerHTML = (new Intl.NumberFormat('vn-VN').format(ketqua2)) + "VND"
}

// BT4
document.getElementById("tinh").onclick = function() {
    let dai = +document.getElementById("dai").value
    let rong = +document.getElementById("rong").value
    let chuVi = (dai + rong)*2
    let dienTich = dai * rong
    document.getElementById("chuvi").style.display = "block"
    document.getElementById("ketqua3").innerHTML = "Chu vi:" + chuVi + ";" + "Diện tích:" + dienTich;
}
// BT5
document.getElementById("tinhtong").onclick = function() {
    let nhapso = +document.getElementById("nhapso").value
    let ketqua4 = 0;
    ketqua4 += nhapso % 10;
    nhapso = Math.floor(nhapso / 10)
    ketqua4 += nhapso;
    document.getElementById("tongchuso").style.display = "block"
    document.getElementById("ketqua4").innerHTML = ketqua4;
}
