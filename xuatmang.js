function xuatPtu(s1) {
    var dsPtu = new Array();
    for (var i = 0; i < s1.length; i++) {
        dsPtu.push(s1[i]);
    }
    return dsPtu;
}
function daoNguoc(s1) {
    var dsNguoc = new Array();
    for (var i = s1.length - 1; i >= 0; i--) {
        dsNguoc.push(s1[i]);
    }
    return dsNguoc;
}
function tongPtu(s1) {
    var s = 0;
    for (var i = 0; i < s1.length; i++) {
        s += Math.floor(s1[i]);
    }
    return s;
}
function tbc(s1) {
    var s = 0;
    for (var i = 0; i < s1.length; i++) {
        s += Math.floor(s1[i]);
    }
    return s / s1.length;
}
function timMax(s1) {
    var max = s1[0];
    for (var i = 0; i < s1.length; i++) {
        if (s1[i] > max) {
            max = s1[i];
        }
    }
    return max;
}
function timMin(s1) {
    var min = s1[0];
    for (var i = 0; i < s1.length; i++) {
        if (s1[i] < min) {
            min = s1[i];
        }
    }
    return min;
}
function soLonThuHai(s1) {
    s1.sort(function (a, b) { return b - a });
    return s1[1];
}
