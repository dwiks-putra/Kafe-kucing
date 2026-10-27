import { useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const DAFTAR_MENU = [
  { id: '1', nama: 'Kopi Susu Catnip', harga: 20000 },
  { id: '2', nama: 'Matcha Paw Latte', harga: 25000 },
  { id: '3', nama: 'Croissant Ikan Tuna', harga: 18000 },
];

const OrderSummary = ({ totalCount }) => {
  return (
    <View style={styles.box}>
      <Text>Total Item Dipesan: {totalCount}</Text>
      {totalCount >= 5 && (
        <Text style={{ color: 'green', marginTop: 5 }}>
          Selamat! Anda Mendapatkan Diskon 10%
        </Text>
      )}
    </View>
  );
};

const MenuItem = ({ nama, harga, onTambahPesanan }) => {
  const [qty, setQty] = useState(0);

  const handleTambah = () => {
    setQty(qty + 1);
    onTambahPesanan();
  };

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.nama}>{nama}</Text>
        <Text>Rp {harga}</Text>
        <Text>Jumlah: {qty}</Text>
      </View>
      <Button title="Tambah" onPress={handleTambah} />
    </View>
  );
};

export default function App() {
  const [totalPesanan, setTotalPesanan] = useState(0);

  const tambahTotal = () => {
    setTotalPesanan(totalPesanan + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={styles.title}>Kafe Kucing</Text>

        <OrderSummary totalCount={totalPesanan} />

        <Text style={styles.subtitle}>Menu:</Text>
        {DAFTAR_MENU.map((item) => (
          <MenuItem
            key={item.id}
            nama={item.nama}
            harga={item.harga}
            onTambahPesanan={tambahTotal}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 10 },
  box: { padding: 15, backgroundColor: '#f0f0f0', marginBottom: 15, borderRadius: 5 },
  card: { padding: 15, borderWidth: 1, borderColor: '#ddd', marginBottom: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  nama: { fontWeight: 'bold', fontSize: 16 }
});
