let mekan = prompt ('Mekani daxil edin;')
let mekan2 = prompt ('Getmek isdediyiniz mekani daxil edin;')
let mesafe = prompt ('Yolun mesafesini qeyd edin;')
let suret = prompt ('Suretinizi qeyd edin;')
let saat = mesafe/suret
let netice = mekan + ' ' + mekan2 + ' mesafe ' + mesafe + 'km/saat,suret ise ' + suret + "km/suret ile hereket edersek biz " + saat + 'saata catariq'
document.getElementById('netice').innerHTML = netice