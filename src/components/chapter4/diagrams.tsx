"use client";

import { motion } from "framer-motion";
import { Users, Building2, Heart, Scale, Shield, Eye, MessageSquare, Wrench, Search, Gift, Star, CheckCircle } from "lucide-react";

/* Diagram: Nhà nước của Dân - Do Dân - Vì Dân */
export function StateOfPeopleDiagram() {
  const items = [
    { title: "CỦA DÂN", desc: "Mọi quyền lực thuộc về nhân dân", icon: Users },
    { title: "DO DÂN", desc: "Do nhân dân lập nên và xây dựng", icon: Building2 },
    { title: "VÌ DÂN", desc: "Phục vụ lợi ích và hạnh phúc nhân dân", icon: Heart },
  ];

  return (
    <div className="relative py-8">
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="w-20 h-20 mx-auto mb-5 bg-red-600 flex items-center justify-center group-hover:bg-red-700 transition-colors">
              <item.icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Connecting line */}
      <div className="hidden md:block absolute top-[4.5rem] left-1/4 right-1/4 h-px bg-gradient-to-r from-red-200 via-red-400 to-red-200" />
    </div>
  );
}

/* Diagram: Cần - Kiệm - Liêm - Chính */
export function CadreQualitiesDiagram() {
  const qualities = [
    { title: "CẦN", desc: "Siêng năng, chăm chỉ" },
    { title: "KIỆM", desc: "Tiết kiệm, không lãng phí" },
    { title: "LIÊM", desc: "Trong sạch, không tham lam" },
    { title: "CHÍNH", desc: "Ngay thẳng, đúng đắn" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {qualities.map((q, i) => (
        <motion.div
          key={q.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-red-600 text-white p-6 text-center hover:bg-red-700 transition-colors"
        >
          <div className="text-2xl font-bold mb-2">{q.title}</div>
          <div className="text-sm text-red-100">{q.desc}</div>
        </motion.div>
      ))}
    </div>
  );
}

/* Diagram: Dân biết - bàn - làm - kiểm tra - giám sát - thụ hưởng */
export function SixRightsDiagram() {
  const rights = [
    { title: "BIẾT", icon: Eye },
    { title: "BÀN", icon: MessageSquare },
    { title: "LÀM", icon: Wrench },
    { title: "KIỂM TRA", icon: Search },
    { title: "GIÁM SÁT", icon: Shield },
    { title: "THỤ HƯỞNG", icon: Gift },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {rights.map((r, i) => (
        <motion.div
          key={r.title}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.08, duration: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 bg-amber-50 border border-amber-200 p-4 hover:bg-amber-100 transition-colors"
        >
          <div className="w-10 h-10 bg-amber-500 flex items-center justify-center flex-shrink-0">
            <r.icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-semibold text-gray-900">Dân {r.title}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* Diagram: Giải pháp phòng chống tham nhũng */
export function AntiCorruptionDiagram() {
  const solutions = [
    { title: "Hoàn thiện pháp luật", icon: Scale },
    { title: "Công khai, minh bạch", icon: Eye },
    { title: "Tăng cường kiểm tra", icon: Search },
    { title: "Xử lý nghiêm minh", icon: CheckCircle },
  ];

  return (
    <div className="bg-red-50 border border-red-100 p-6 md:p-8">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2 text-sm font-semibold">
          <Shield className="w-4 h-4" />
          GIẢI PHÁP PHÒNG CHỐNG THAM NHŨNG
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white p-4 border border-gray-100 hover:border-red-200 transition-colors"
          >
            <div className="w-12 h-12 bg-red-100 flex items-center justify-center flex-shrink-0">
              <s.icon className="w-6 h-6 text-red-600" />
            </div>
            <span className="font-medium text-gray-900">{s.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* Diagram: Quan hệ Đảng - Nhà nước */
export function PartyStateDiagram() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-red-600 text-white p-8 text-center min-w-[200px]"
      >
        <Star className="w-12 h-12 mx-auto mb-3 text-amber-400" fill="currentColor" />
        <div className="font-bold text-lg">ĐẢNG</div>
        <div className="text-sm text-red-100">trong sạch, vững mạnh</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true }}
        className="flex items-center"
      >
        <div className="hidden md:flex items-center gap-2">
          <div className="w-12 h-1 bg-red-300" />
          <span className="text-2xl text-red-400">⟷</span>
          <div className="w-12 h-1 bg-red-300" />
        </div>
        <span className="md:hidden text-3xl text-red-400">↕</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-amber-500 text-white p-8 text-center min-w-[200px]"
      >
        <Building2 className="w-12 h-12 mx-auto mb-3" />
        <div className="font-bold text-lg">NHÀ NƯỚC</div>
        <div className="text-sm text-amber-100">trong sạch, vững mạnh</div>
      </motion.div>
    </div>
  );
}
