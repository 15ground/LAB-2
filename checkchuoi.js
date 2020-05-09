function xuatChuoi(s1) {
    var tachChuoi = " ";
    var themChuoi = " - ";
    var chuoiMoi = s1.split(tachChuoi).join(themChuoi);
    return chuoiMoi;
}
function checkChuoi(s1, s2) {
    if (s2 != 0) {
        var count = s1.split(s2).length - 1;
    } else {
        count = 0;
    }
    return count;
}