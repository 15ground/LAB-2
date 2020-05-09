function kiemTraMang(s1, s2) {
    var viTriDauTien = 0;
    var check = false;
    if (s1.length < s2.length) {
        var swap = new Array();
        swap = s1;
        s1 = s2;
        s2 = swap;
    }
    for (var i = 0; i < s1.length; i++) {
        if (s2[viTriDauTien] == s1[i]) {
            var viTriBangNhau = i;
            check = true;
            break;
        }
    }
    if (check != false && s2.length > 1) {
        while (viTriDauTien < s2.length - 1 && viTriBangNhau < s1.length - 1) {
            viTriDauTien++;
            viTriBangNhau++;
            if (s2[viTriDauTien] != s1[viTriBangNhau]) {
                check = false;
                break;
            }
        }
    }
    return check;
}