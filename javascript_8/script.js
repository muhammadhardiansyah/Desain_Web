var onik    = (document.dform.nik.value);
var onama   = (document.dform.nama.value);
var omail   = (document.dform.Email.value);
var opass   = (document.dform.password.value);
var ofak    = (document.dform.fakultas.value);
var oprodi  = (document.dform.prodi.value);
var onim    = (document.dform.nim.value);
var olhir   = (document.dform.tglLhr.value);
var osex    = (document.dform.jenis.value);
var oaddId  = (document.dform.alamat_ID.value);
var oaddNow = (document.dform.alamat_now.value);

function danger(){
    var onik    = (document.dform.nik.value);
    if (onik == ""){
        document.getElementById("nikFokus").style.background ="red";
    }if (onik != ""){
        document.getElementById("nikFokus").style.background ="lightgreen";
    }
}function pokus(){
    document.getElementById("nikFokus").style.background = "lightblue";
}
function danger1(){
    var onama   = (document.dform.nama.value);
    if (onama == ""){
        document.getElementById("namaFokus").style.background ="red";
    }if (onama != ""){
        document.getElementById("namaFokus").style.background ="lightgreen";
        }
}function pokus1(){
    document.getElementById("namaFokus").style.background = "lightblue";
}
function danger2(){
    var omail   = (document.dform.Email.value);
    if (omail == ""){
        document.getElementById("mailFokus").style.background ="red";
    }if (omail != ""){
        document.getElementById("mailFokus").style.background ="lightgreen";
        }
}function pokus2(){
    document.getElementById("mailFokus").style.background = "lightblue";
}
function danger3(){
    var opass   = (document.dform.password.value);
    if (opass == ""){
        document.getElementById("passFokus").style.background ="red";
    }if (opass != ""){
        document.getElementById("passFokus").style.background ="lightgreen";
        }
}function pokus3(){
    document.getElementById("passFokus").style.background = "lightblue";
}
function danger4(){
    var ofak    = (document.dform.fakultas.value);
    if (ofak == ""){
        document.getElementById("fakFokus").style.background ="red";
    }if (ofak != ""){
        document.getElementById("fakFokus").style.background ="lightgreen";
        }
}function pokus4(){
    document.getElementById("fakFokus").style.background = "lightblue";
}
function danger5(){
    var oprodi  = (document.dform.prodi.value);
    if (oprodi == ""){
        document.getElementById("prodiFokus").style.background ="red";
    }if (oprodi != ""){
        document.getElementById("prodiFokus").style.background ="lightgreen";
        }
}function pokus5(){
    document.getElementById("prodiFokus").style.background = "lightblue";
}
function danger6(){
    var onim    = (document.dform.nim.value);
    if (onim == ""){
        document.getElementById("nimFokus").style.background ="red";
    }if (onim != ""){
        document.getElementById("nimFokus").style.background ="lightgreen";
        }
}function pokus6(){
    document.getElementById("nimFokus").style.background = "lightblue";
}
function danger7(){
    var olhir   = (document.dform.tglLhr.value);
    if (olhir == ""){
        document.getElementById("lhirFokus").style.background ="red";
    }if (olhir != ""){
        document.getElementById("lhirFokus").style.background ="lightgreen";
        }
}function pokus7(){
    document.getElementById("lhirFokus").style.background = "lightblue";
}
function danger8(){
    var oaddId  = (document.dform.alamat_ID.value);
    if (oaddId == ""){
        document.getElementById("addIdFokus").style.background ="red";
    }if (oaddId != ""){
        document.getElementById("addIdFokus").style.background ="lightgreen";
        }
}function pokus8(){
    document.getElementById("addIdFokus").style.background = "lightblue";
}
function danger9(){
    var oaddNow = (document.dform.alamat_now.value);
    if (oaddNow == ""){
        document.getElementById("addNowFokus").style.background ="red";
    }if (oaddNow != ""){
        document.getElementById("addNowFokus").style.background ="lightgreen";
        }
}function pokus9(){
    document.getElementById("addNowFokus").style.background = "lightblue";
}
function kirim(){
    var onik    = (document.dform.nik.value);
    var onama   = (document.dform.nama.value);
    var omail   = (document.dform.Email.value);
    var opass   = (document.dform.password.value);
    var ofak    = (document.dform.fakultas.value);
    var oprodi  = (document.dform.prodi.value);
    var onim    = (document.dform.nim.value);
    var olhir   = (document.dform.tglLhr.value);
    var osex    = (document.dform.jenis.value);
    var oaddId  = (document.dform.alamat_ID.value);
    var oaddNow = (document.dform.alamat_now.value);
    if((onik != "")&&(onama != "")&&(omail != "")&&(opass!="")&&(ofak!="")&&(oprodi!="")&&(onim!="")&&(olhir!="")
    &&(osex!="")&&(oaddId!="")&&(oaddNow!="")){
        alert("Selamat! Anda sekarang adalah anggota dari Perpustakaan UNS");
        document.writeln("<br> <br> <br> ")
        document.writeln("<center>");
        document.writeln("<hr width=800 color=cyan>")
        document.writeln("<h2 id='subjudul'>Selamat Anda Berhasil Terdaftar</h2>")
        document.writeln("<h2 id='subjudul'>Sebagai Anggota Perpustakaan UNS</h2>")
        document.writeln("<hr width=800 color=cyan>")
        document.writeln("<h3 id='container'>Nama : " + onama + " </h3>")
        document.writeln("<h3 id='container'>Email : " + omail + " </h3>")
        document.writeln("<h3 id='container'>Password : " + opass + " </h3>")
        document.writeln("<hr width=800 color=cyan>")
        document.writeln("<h2 id='subjudul'>Jaga baik-baik keamanan akun anda</h2>")
        document.writeln("<h2 id='subjudul'>Selalu taati peraturan perpustakaan</h2>")
        document.writeln("<hr width=800 color=cyan>")
        document.writeln("<h2 id='subjudul'>S A L A M  P U S T A K A</h2>")        
        document.writeln("<hr width=800 color=cyan>")
    }else{
        alert("Mohon lengkapi seluruh data anda!");
    }
}