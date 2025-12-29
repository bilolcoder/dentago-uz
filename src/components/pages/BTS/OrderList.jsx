import React, { useState } from 'react';
import { MdDeleteOutline, MdCheck } from "react-icons/md";
import { Search, Filter, Download, MoreHorizontal, Package, Truck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Aperator() {
  const navigate = useNavigate();
  const PRIMARY_COLOR = "#00BCE4";

  const YetkazibBerish = () => {
    navigate('/yetkazibberish');
  };

  const initialOrders = [
    { id: 1234, mahsulotNomi: 'Ortopediya', soni: 5, mijoz: 'Ali Aliyev', narxi: "1,250,000 so'm", yetkazibBeruvchi: 'Yandex Go', tadbirkorlar: "Orifjanov Bilolxon", status: "yaxshi", manzil: 'Toshkent Yunusobod' },
    { id: 2345, mahsulotNomi: 'Ortopediya', soni: 5, mijoz: 'Ali Aliyev', narxi: "1,250,000 so'm", yetkazibBeruvchi: 'Tadbirkor', tadbirkorlar: "Orifjanov Bilolxon", status: "o'rtacha", manzil: 'Toshkent Yunusobod' },
    { id: 3456, mahsulotNomi: 'Ortopediya', soni: 5, mijoz: 'Ali Aliyev', narxi: "1,250,000 so'm", yetkazibBeruvchi: 'BTC', tadbirkorlar: "Orifjanov Bilolxon", status: "yaxshi", manzil: 'Toshkent Yunusobod' },
    { id: 4567, mahsulotNomi: 'Ortopediya', soni: 5, mijoz: 'Ali Aliyev', narxi: "1,250,000 so'm", yetkazibBeruvchi: 'Yandex Go', tadbirkorlar: "Orifjanov Bilolxon", status: "yomon", manzil: 'Toshkent Yunusobod' },
    { id: 5678, mahsulotNomi: 'Ortopediya', soni: 5, mijoz: 'Ali Aliyev', narxi: "1,250,000 so'm", yetkazibBeruvchi: 'Tadbirkor', tadbirkorlar: "Orifjanov Bilolxon", status: "o'rtacha", manzil: 'Toshkent Yunusobod' },
  ];

  const [orders, setOrders] = useState(initialOrders.map(order => ({ ...order, checked: false })));

  const handleDelete = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const handleCheckboxChange = (id) => {
    setOrders(orders.map(order =>
      order.id === id ? { ...order, checked: !order.checked } : order
    ));
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'yaxshi': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case "o'rtacha": return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'yomon': return 'bg-rose-50 text-rose-600 border-rose-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  return (
    <div className="p-4 md:p-8 bg-white min-h-screen">
      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-[#00BCE4]/10 text-[#00BCE4]">
              <Package size={24} />
            </div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tighter uppercase italic">
              Buyurtmalar <span style={{ color: PRIMARY_COLOR }}>Tarixi</span>
            </h1>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Operatsiyalar va logistika nazorati</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
            <div className="relative group">
    <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#00BCE4] transition-colors"
        size={18}
    />
    <input
        type="text"
        placeholder="ID yoki Mijoz bo'yicha qidiruv..."
        className="pl-12 pr-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-[#00BCE4] focus:bg-white outline-none w-full md:w-80 text-sm font-bold transition-all shadow-sm text-slate-700 placeholder:text-slate-400 focus:text-[#00BCE4]"
    />
</div>
            <button className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-600 hover:text-[#00BCE4] hover:bg-white transition-all shadow-sm">
                <Filter size={20} />
            </button>
            <button className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#00BCE4] text-white font-black text-[10px] uppercase tracking-widest hover:shadow-lg hover:shadow-[#00BCE4]/30 transition-all active:scale-95">
                <Download size={16} />
                Eksport
            </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full min-w-[1100px] border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-6 text-center">
                    <div className="w-5 h-5 rounded-md border-2 border-slate-300 mx-auto" />
                </th>
                <th className="px-4 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">ID / Mahsulot</th>
                <th className="px-4 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Tadbirkor</th>
                <th className="px-4 py-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">Soni</th>
                <th className="px-4 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Mijoz</th>
                <th className="px-4 py-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">Narxi</th>
                <th className="px-4 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Logistika</th>
                <th className="px-4 py-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-4 py-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">Amallar</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-50">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-[#00BCE4]/[0.02] transition-all group">
                  <td className="px-6 py-5 text-center">
                      <button
                        onClick={() => handleCheckboxChange(order.id)}
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          order.checked ? 'bg-[#00BCE4] border-[#00BCE4] text-white' : 'bg-white border-slate-200 text-transparent hover:border-[#00BCE4]'
                        }`}
                      >
                        <MdCheck size={16} strokeWidth={2} />
                      </button>
                  </td>
                  <td className="px-4 py-5">
                    <div className="flex flex-col">
                        <span className="text-xs font-black text-[#00BCE4] mb-0.5">#{order.id}</span>
                        <span className="text-sm font-bold text-slate-700 uppercase tracking-tighter">{order.mahsulotNomi}</span>
                    </div>
                  </td>
                  <td className="px-4 py-5 text-sm font-medium text-slate-500">{order.tadbirkorlar}</td>
                  <td className="px-4 py-5 text-center">
                    <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-black">{order.soni} ta</span>
                  </td>
                  <td className="px-4 py-5">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-500">
                            {order.mijoz.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm font-bold text-slate-700">{order.mijoz}</span>
                    </div>
                  </td>
                  <td className="px-4 py-5 text-center text-sm font-black text-slate-800 tracking-tighter">{order.narxi}</td>
                  <td className="px-4 py-5">
                    <button
                        onClick={YetkazibBerish}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 text-slate-500 hover:text-[#00BCE4] hover:bg-[#00BCE4]/5 transition-all text-[11px] font-bold"
                    >
                        <Truck size={14} />
                        {order.yetkazibBeruvchi}
                    </button>
                  </td>
                  <td className="px-4 py-5 text-center">
                    <span
                      onClick={YetkazibBerish}
                      className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border cursor-pointer transition-all hover:scale-105 active:scale-95 ${getStatusStyle(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-5">
                    <div className="flex items-center justify-center gap-2">
                      <button className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 transition-all">
                        <MoreHorizontal size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-300 hover:bg-rose-50 hover:text-rose-500 transition-all"
                      >
                        <MdDeleteOutline size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Placeholder */}
      <div className="mt-8 flex justify-center">
          <div className="flex gap-2 p-1.5 bg-slate-50 rounded-2xl border border-slate-100">
              {[1, 2, 3].map(p => (
                  <button key={p} className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black transition-all ${p === 1 ? 'bg-[#00BCE4] text-white shadow-lg shadow-[#00BCE4]/20' : 'text-slate-400 hover:text-[#00BCE4]'}`}>
                      {p}
                  </button>
              ))}
          </div>
      </div>
    </div>
  );
}

export default Aperator;
