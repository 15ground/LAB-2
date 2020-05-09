// Bài 1
document.write("Bài 1/ <hr>");
function xuatPtu(mang) {
    for (var i = 0; i < mang.length; i++) {
        if (i < mang.length - 1) {
            document.write(mang[i] + "-");
        } else {
            document.write(mang[i]);
        }
    }
}
document.write("Phần tử của mảng là: ");
xuatPtu(new Array(1, 2, 3, 4, 5));
function daoNguoc(mang) {
    for (var i = 0; i < mang.length; i++) {
        if (i < mang.length - 1) {
            document.write(mang[i] + "-");
        } else {
            document.write(mang[i]);
        }
    }
}
document.write("<br>Mảng sau khi đảo ngược là: ");
daoNguoc((new Array(1, 2, 3, 4, 5)).reverse());
function tongPtu(mang) {
    var s = 0;
    for (var i = 0; i < mang.length; i++) {
        s = s + mang[i];
    }
    return s;
}
document.write("<br>Tổng = " + tongPtu(new Array(1, 2, 3, 4, 5)));
function tbc(mang) {
    var s = 0;
    for (var i = 0; i < mang.length; i++) {
        s = s + mang[i];
    }
    return s / mang.length;
}
document.write("<br>Trung bình cộng của mảng = " + tbc(new Array(1, 2, 3, 4, 5)));
function timMax(mang) {
    var max = mang[0];
    for (var i = 0; i < mang.length; i++) {
        if (mang[i] > max) {
            max = mang[i];
        }
    }
    return max;
}
document.write("<br>Max = " + timMax(new Array(1, 3, 5, 4, 2)));
function timMin(mang) {
    var min = mang[0];
    for (var i = 0; i < mang.length; i++) {
        if (mang[i] < min) {
            min = mang[i];
        }
    }
    return min;
}
document.write("<br>Min = " + timMin(new Array(2, 4, 5, 1, 3)));
function soLonThuHai(mang) {
    mang.sort(function (a, b) { return b - a });
    document.write("<br>Số lớn thứ hai trong mảng là: " + mang[1]);
}
soLonThuHai(new Array(1, 3, 4, 5, 2));
function xuatSoChan(mang) {
    for (var i = 0; i < mang.length; i++) {
        if (mang[i] % 2 == 0) {
            document.write(mang[i] + " ");
        }
    }
}
document.write("<br>Phần tử chẵn trong mảng là: ")
xuatSoChan(new Array(1, 2, 3, 4, 5));
// Bài 2
document.write("<hr>Bài 2/<hr>");
function fibo() {
    var f1 = 0, f2 = 1, f3 = f2;
    document.write(f1 + "-" + f2 + "-");
    for (var i = 0; i <= 100; i++) {
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
        if (i < 100) {
            document.write(f3 + "-");
        } else {
            document.write(f3 + " ")
        }
    }
    return f3;
}
document.write("100 số Fibonaci đầu tiên là: ");
fibo();
// Bài 3
document.write("<hr>Bài 3/<hr>");
function xuatSoNguyenTo() {
    for (var i = 1; i <= 541; i++) {
        var dem = 0;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                dem++;
                break;
            }
        }
        if (dem == 0 && i > 1) {
            if (i < 541) {
                document.write(i + "-");
            } else {
                document.write(i + " ");
            }
        }
    }
}
document.write("100 số nguyên tố đầu tiên là: ");
xuatSoNguyenTo()
// Bài 4
document.write("<hr>Bài 4/<hr>");
function daoNguocChuoi(mang) {
    var chuoiNguoc = "";
    for (var i = mang.length - 1; i >= 0; i--) {
        chuoiNguoc += mang[i];
    }
    return chuoiNguoc;
}
var mang = prompt("Nhập chuỗi cần đảo ngược: ");
document.write("Chuỗi ban đầu là: " + mang);
document.write("<br>Chuỗi đảo ngược là: " + daoNguocChuoi(mang));
// Bài 5
document.write("<hr>Bài 5/<hr>");
function xuatChuoi(s1) {
    var tachChuoi = " ";
    var themChuoi = " - ";
    var chuoiMoi = s1.split(tachChuoi).join(themChuoi);
    document.write(chuoiMoi);
}
function checkChuoi(s1, s2) {
    if (s2 != "") {
        var count = s1.split(s2).length - 1;
        document.write("<br>Số lượng s2 trong s1 là: " + count);
    } else {
        document.write("<br>Không tìm thấy s2 trong s1 do s2 rỗng!");
    }
}
var s1 = prompt("Nhập chuỗi s1: ");
document.write("Chuỗi s1 ban đầu là: " + s1);
document.write("<br>Chuỗi s1 sau khi thay đổi là: ");
xuatChuoi(s1);
var s2 = prompt("Nhập chuỗi s2: ");
if (s2 != "") {
    document.write("<br>Chuỗi s2 là: " + s2);
} else {
    document.write("<br>Chuỗi s2 rỗng!");
}
checkChuoi(s1, s2);
// Bài 6
document.write("<hr>Bài 6/<hr>");
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
var s1 = [69,96,100];
var s2 = [96,100];
document.write("s1 = " + "[" + s1 + "]");
document.write("<br>s2 = " + "[" + s2 + "]");
document.write("<br>Kiểm tra s2 trong s1: " + kiemTraMang(s1, s2));
