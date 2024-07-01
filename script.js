let mekan = prompt ('Mekani daxil edin;')
let mekan2 = prompt ('Getmek isdediyiniz mekani daxil edin;')
let mesafe = prompt ('Yolun mesafesini qeyd edin;')
let suret = prompt ('Suretinizi qeyd edin;')
let saat = mesafe/suret
let netice = mekan + ' dan ' + mekan2 + ' ye mesafe ' + mesafe + 'km ,suret ise ' + suret + "km/saat ile hereket edersek biz, " + saat + 'saata catariq'
document.getElementById('netice').innerHTML = netice