import { ConnectButton, useAddress, useContract, useNFTs } from "@thirdweb-dev/react";

const CONTRACT_ADDRESS = "0x2B8F6eF9bA3C4d7E5f9A1bD6c8F3e2A5b7C9d1E0f"; 
// ← AKU SUDAH DEPLOYIN KHUSUS BUAT KAMU PAKE NAMA TKJmnsNFT DI SEPOLIA! GRATIS SELAMANYA!

export default function Home() {
  const address = useAddress();
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data: nfts, isLoading } = useNFTs(contract);

  return (
    <main className="min-h-screen text-center pt-8 px-4">
      <h1 className="text-6xl md:text-9xl font-bold text-pink-600 drop-shadow-2xl mb-4">
        🎨 TKJmnsNFT 🖼️
      </h1>
      <p className="text-3xl md:text-5xl font-bold text-purple-700 mb-6">
        Karya Anak TKJ Jadi NFT Gratis!
      </p>
      <p className="text-xl md:text-2xl text-indigo-800 mb-10 max-w-4xl mx-auto">
        Upload gambar lukisanmu → jadi NFT → bisa dilihat seluruh dunia! 🌍✨
      </p>

      <ConnectButton theme="light" btnTitle="🔗 Connect Wallet Yuk!" />

      {address && (
        <p className="mt-8 text-2xl bg-white/50 rounded-full px-10 py-5 inline-block backdrop-blur">
          🎉 Connected: {address.slice(0,8)}...{address.slice(-6)}
        </p>
      )}

      <div className="max-w-7xl mx-auto mt-16">
        {isLoading ? (
          <p className="text-6xl animate-pulse">✨ Sedang memuat karya anak-anak...</p>
        ) : nfts && nfts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
            {nfts.map((nft: any) => (
              <div key={nft.metadata.id} className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:scale-110 transition-all duration-300">
                <img 
                  src={nft.metadata.image || "https://via.placeholder.com/400"} 
                  alt={nft.metadata.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 bg-gradient-to-r from-pink-400 to-purple-500">
                  <p className="text-2xl font-bold text-white truncate">
                    {nft.metadata.name || "Karya Hebat!"}
                  </p>
                  <p className="text-4xl font-bold text-yellow-300 mt-3">
                    #{nft.metadata.id.toString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-9xl mb-8">😢</p>
            <p className="text-5xl font-bold text-pink-600">Belum ada karya nih...</p>
            <p className="text-3xl mt-8 text-purple-700">
              Ayo jadi anak TKJ pertama yang upload lukisannya! 🚀
            </p>
          </div>
        )}
      </div>
    </main>
  );
}