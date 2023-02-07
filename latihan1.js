// ---------------------1----------------------
const Biodata = {
  nama: "",
  sekolah: "",
  umur: "",
  hobi: "",
  perkenalan: function () {
    document.write(
      `Assalamualaikum temen-temen,Perkenalkan nama saya ${this.nama}.<br> Saat ini saya menginjak umur ${this.umur},<br>Hobi saya adalah ${this.hobi}.Dan Sekarang ini saya sedang belajar di ${this.sekolah} `
    );
  },
};
const aboutMe = Object.create(Biodata);
aboutMe.nama = "Syahdin Raditya Hafid";
aboutMe.umur = "18 Tahun";
aboutMe.sekolah = "Pondok Programmer";
aboutMe.hobi = "Menonton Film";
aboutMe.perkenalan();
// ---------------------2----------------------
const card = {
  name: "",
  episodes: "",
  genres: "",
  rating: "",
  tampilkan: function () {
    document.write(
      `<br> <hr>Judul = ${this.name}<br>Episodes = ${this.episodes}<br>Genres = ${this.genres}<br>Rating = ${this.rating}`
    );
  },
};
const kartu = Object.create(card);
kartu.name = "Saekano";
kartu.episodes = "24 Episodes";
kartu.genres = "Romance,Comedy,Harem,Slice of Life";
kartu.rating = "8.0";
kartu.tampilkan();
// ---------------------3----------------------

const pergi = {
  tujuan: "Parangtritis",
  kendaraan: "Mobil",
  waktu: "30 Menit",
  perjalanan: function () {
    document.write(
      `<br><hr>Pada hari minggu saya akan pergi ke ${this.tujuan}<br> Berangkat dengan mengendarai ${this.kendaraan}<br> Dan estimasi perjalanan sekitar ${this.waktu}`
    );
  },
};
const berangkat = Object.create(pergi);
berangkat.tujuan = "Sungai Mudal";
berangkat.kendaraan = "motor";
berangkat.waktu = "1jam";
berangkat.perjalanan();
// ---------------------4----------------------
const hero = {
  name: "Alucard",
  damage: 200,
  plus: function (item) {
    {
      item === "Hunter Strike"
        ? (this.damage += 50)
        : item === "Endless Batlle"
        ? (this.damage += 30)
        : item === "Blade of Despair"
        ? (this.damage += 100)
        : (this.damage += "");
    }
    document.write(
      `<br><hr>Nama hero = ${this.name}<br>Damage = ${this.damage}<br> Item Tambahan =  ${item}<br>`);

    return this.damage;
  },
};
hero.plus("Endless Batlle");
//
// ---------------------5----------------------
const kuota = {
  provider: "Telkomsel",
  data: 20,
  penggunaan: function (pakai) {
    if (pakai === "Whatsapp") {
      this.data -= 1;
    } else if (pakai === "Mobile Legends") {
      this.data -= 4;
    } else if (pakai === "Youtube") {
      this.data -= 10;
    } else {
      this.data -= 0;
    }
    document.write(`
  <hr>Nama Provider = ${kuota.provider}<br>
  Digunakan untuk = ${pakai}<br>
  Sisa Data = ${kuota.data} GB
`);
    return this.data;
  },
};
kuota.penggunaan("Youtube");
