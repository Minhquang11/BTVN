// Cau 1

// class Animal {

//     constructor(name){
//         this.name = name;
//     }
// }


// class Rabbit extends Animal{
//     constructor(name){
//         super(name);
//         this.created = Date.now();
//     }
// }

// let rabbit = new Rabbit("White Rabbit");
// alert(rabbit.name)



// Cau 2

class Clock {
    constructor({ template }) {
        this.template = template;
    }


    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start(){
        this.render()
        this.timer = setInterval(()=> this.render(), 1000)
    }    
}







// Cau 3

// class PhanSo {
//     constructor(tu = 0, mau = 1) {
//         this.tu = tu;
//         this.mau = mau;
//     }

//     // Hàm nhập giá trị cho phân số
//     setPhanSo(tu, mau) {
//         this.tu = tu;
//         this.mau = mau;
//     }

//     // Hàm xuất phân số
//     xuat() {
//         return `${this.tu}/${this.mau}`;
//     }

//     // Hàm cộng hai phân số
//     cong(ps) {
//         let tu = this.tu * ps.mau + ps.tu * this.mau;
//         let mau = this.mau * ps.mau;
//         return new PhanSo(tu, mau).toiGian();
//     }

//     // Hàm trừ hai phân số
//     tru(ps) {
//         let tu = this.tu * ps.mau - ps.tu * this.mau;
//         let mau = this.mau * ps.mau;
//         return new PhanSo(tu, mau).toiGian();
//     }

//     // Hàm nhân hai phân số
//     nhan(ps) {
//         let tu = this.tu * ps.tu;
//         let mau = this.mau * ps.mau;
//         return new PhanSo(tu, mau).toiGian();
//     }

//     // Hàm chia hai phân số
//     chia(ps) {
//         let tu = this.tu * ps.mau;
//         let mau = this.mau * ps.tu;
//         return new PhanSo(tu, mau).toiGian();
//     }

//     // Hàm rút gọn phân số
//     toiGian() {
//         let gcd = function(a, b) {
//             return b ? gcd(b, a % b) : a;
//         };
//         let ucln = gcd(this.tu, this.mau);
//         return new PhanSo(this.tu / ucln, this.mau / ucln);
//     }
// }

// // Hàm nhập phân số từ người dùng
// function nhapPhanSo() {
//     let tu = parseInt(prompt("Nhập tử số:"));
//     let mau;
//     do {
//         mau = parseInt(prompt("Nhập mẫu số (khác 0):"));
//     } while (mau === 0);
//     return new PhanSo(tu, mau);
// }

// // Hàm main
// function main() {
//     let ps1 = nhapPhanSo();
//     let ps2 = nhapPhanSo();

//     let tong = ps1.cong(ps2);
//     let hieu = ps1.tru(ps2);
//     let tich = ps1.nhan(ps2);
//     let thuong = ps1.chia(ps2);

//     console.log(`Phân số thứ nhất: ${ps1.xuat()}`);
//     console.log(`Phân số thứ hai: ${ps2.xuat()}`);
//     console.log(`Tổng: ${tong.xuat()}`);
//     console.log(`Hiệu: ${hieu.xuat()}`);
//     console.log(`Tích: ${tich.xuat()}`);
//     console.log(`Thương: ${thuong.xuat()}`);
// }

// // Chạy chương trình
// main();
