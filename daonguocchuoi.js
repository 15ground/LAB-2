function daoNguocChuoi(n) {
    var chuoiNguoc = "";
    for (var i = n.length - 1; i >= 0; i--) {
        chuoiNguoc += n[i];
    }
    return chuoiNguoc;
}