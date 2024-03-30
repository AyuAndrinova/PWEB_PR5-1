function run(){
    document.getElementById('box1').style.background = "#E12E2E"
    document.getElementById('judul').innerHTML = "Anda Berbohong!"
    var img = document.getElementById('detektif');
    img.src = "assets/teknisi.png"
    document.getElementById('pertanyaan').innerHTML = "Anda adalah seorang Teknisi"
    document.getElementById('iya').style.background  = "none"
    document.getElementById('iya').innerHTML = ""
    document.getElementById('tidak').style.background = "none"
    document.getElementById('tidak').innerHTML = ""
}

function run2(){
    document.getElementById('box1').style.background = "#6FD240"
    document.getElementById('judul').innerHTML = "Anda Benar!"
    var img = document.getElementById('detektif');
    img.src = "assets/mahasiswa.png"
    document.getElementById('pertanyaan').innerHTML = "Anda adalah seorang Mahasiswa"
    document.getElementById('iya').style.background  = "none"
    document.getElementById('iya').innerHTML = ""
    document.getElementById('tidak').style.background = "none"
    document.getElementById('tidak').innerHTML = ""
}