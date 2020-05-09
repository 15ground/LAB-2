function xuatSNT(n) {
    var danhSachSNT = new Array();
    var dem = 0;
    var soHienTai = 2;
    // Tăng số hiện tại từ 0, mỗi lần tăng 1 đơn vị cho tới khi điều kiện dừng

    while (danhSachSNT.length < n) {
        if (checkSNT(soHienTai) == true) {
            danhSachSNT[dem] = soHienTai;
            dem++;
        }
        soHienTai++;
    }
    return danhSachSNT;
}
function checkSNT(num) {
    // Nếu là số nguyên tố thì return: true ngược lại return: false
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
