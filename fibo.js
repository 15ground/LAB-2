function xuatSoFiBo(n) {
    var dsFiBo = new Array();
    var f1 = 0;
    var f2 = 1;
    for (var viTriHienTai = 0; viTriHienTai <= n; viTriHienTai++) {
        var f3;
        if (viTriHienTai == 0) {
            f3 = 0;
            dsFiBo.push(f3);
        } else if (viTriHienTai == 1) {
            f3 = 1;
            dsFiBo.push(f3);
        }else{
            f3 = f1 + f2;
            dsFiBo.push(f3);
            f1 = f2;
            f2 = f3;
        }
    }
    return dsFiBo;
}