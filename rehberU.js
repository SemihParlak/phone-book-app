// arayüz elementleri seçelim
const ad = document.getElementById('ad');
const soyad = document.getElementById('soyad');
const mail = document.getElementById('mail');

const form = document.getElementById('form-rehber');

//event listenerların tanımlanması
form.addEventListener('submit', kaydet);

function kaydet(e) {
    e.preventDefault();


    const eklenecekKisi = {
        ad: ad.value,
        soyad: soyad.value,
        mail: mail.value
    }

    const sonuc = verileriKontrolEt(eklenecekKisi);
    if (sonuc.durum) {
        kisiyiEkle(eklenecekKisi);
        bilgiOlustur(sonuc.mesaj, sonuc.durum);
    } else {
        // bilgiOlustur(sonuc.mesaj,sonuc.durum);
        
    }

    // console.log(eklenecekKisi);


    function kisiyiEkle(eklenecekKisi) {
        
    }
}
function verileriKontrolEt (kisi) {
     //objelerde in kullanımı
     for(const deger in kisi) {
        if(kisi[deger]) {
            console.log(kisi[deger]);
        } else {
            const sonuc = {
                durum:false,
                mesaj: 'Boş alan bırakmayınız'
            }
            return sonuc;
            // console.log("boş deger var");
        }
    
     }
     alanlarıTemizle();
     return {
        durum: true,
        mesaj: 'Kaydedildi'
     }
}

// function bilgiOlustur(mesaj,durum) {
//     const olusturulanBilgi = document.createElement('div');
//     olusturulanBilgi.textContent = mesaj;
//     olusturulanBilgi.className = 'bilgi';
//     if (durum) {
//         olusturulanBilgi.classList.add('bilgi--success');
//     } else {
//             olusturulanBilgi.classList.add('bilgi--eror');
//     }
//       document.querySelector('.container').insertBefore(olusturulanBilgi,form)
// }



function alanlarıTemizle() {
    ad.value = '';
    soyad.value = '';
    mail.value = '';

}