
// Keuntungan = Harga Penjualan - Harga Pembelian
const keuntungan = function (hargaJual, hargaBeli) {
  return hargaJual - hargaBeli;
};

const keuntunganJualKambing = keuntungan(3000, 2000);
console.log(keuntunganJualKambing);

const keuntunganJualAyam = keuntungan(1500, 1000);
console.log(keuntunganJualAyam);
