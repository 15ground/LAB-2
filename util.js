function chuyenChuoi(mang) {
    var string = "";
    for (var i = 0; i < mang.length; i++) {
        if (i < mang.length - 1) {
            string += mang[i] + "-";
        } else {
            string += mang[i];
        }
    }
    return string;
}