function tampil(){
    var nama = document.getElementById("nama").value;
    var NIK = document.getElementById("NIK").value;
    var jnsklm = document.querySelector("input[name=jnsklm]:checked").value;
    var lahir = document.getElementById("lahir").value;
    var tlp = document.getElementById("tlp").value;
    var test = document.querySelector("input[name=test]:checked").value;
    var pay = document.querySelector("input[name=pay]:checked").value;



    alert(
      "Selamat anda berhasil mendaftar test " + test +" dengan data diri \n"+
      "Nama :" + nama + "\nNIK : "+NIK + "\nJenis Kelamin : " + jnsklm +
      "\nTempat lahir : " + lahir + "\nTelepon :" + tlp +
      "\nJenis test covid : " + test + "\nJenis pembayaran : " + pay
      

    );
}