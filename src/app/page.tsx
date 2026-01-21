"use client";

import { motion } from "framer-motion";
import { HeroSection, AnimatedSection } from "@/components/chapter4";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Chapter4Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with 3D Stars */}
      <HeroSection />

      {/* Section II: Nhà nước của dân, do dân, vì dân */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-red-600 text-sm font-semibold tracking-widest uppercase">
              Phần II
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Tư tưởng Hồ Chí Minh về Nhà nước
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-6" />
          </AnimatedSection>

          {/* Quote with Image */}
          <AnimatedSection className="mb-16">
            <div className="grid md:grid-cols-5 bg-red-600">
              <div className="md:col-span-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="http://image.congan.com.vn/thumbnail/CATP-480-2024-5-19/4a-3.jpg"
                  alt="Bác Hồ với trí thức"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-3 text-white p-8 md:p-12 flex flex-col justify-center">
                <p className="text-xl md:text-2xl font-light leading-relaxed">
                  &ldquo;Nước ta là nước dân chủ, bao nhiêu lợi ích đều vì dân,
                  bao nhiêu quyền hạn đều của dân&rdquo;
                </p>
                <p className="text-amber-300 font-semibold mt-4">— Hồ Chí Minh</p>
              </div>
            </div>
          </AnimatedSection>

    

          {/* Của Dân - Do Dân - Vì Dân */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
            {[
              { title: "CỦA DÂN", desc: "Mọi quyền lực thuộc về nhân dân" },
              { title: "DO DÂN", desc: "Do nhân dân lập nên và xây dựng" },
              { title: "VÌ DÂN", desc: "Phục vụ lợi ích và hạnh phúc nhân dân" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className={`text-xl font-bold mb-2 ${i % 2 === 0 ? "text-red-600" : "text-amber-500"}`}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Nhà nước trong sạch, vững mạnh thể hiện ở */}
          <AnimatedSection className="mb-12">
            <div className="bg-amber-50 p-6 md:p-8 border-l-4 border-amber-500">
              <h4 className="font-bold text-lg text-gray-900 mb-4">
                Nhà nước trong sạch, vững mạnh thể hiện ở:
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>Bộ máy nhà nước hoạt động <strong>hiệu lực, hiệu quả</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>Đội ngũ cán bộ, công chức có <strong>phẩm chất đạo đức cách mạng</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>Thực sự <strong>vì dân, phục vụ nhân dân</strong></span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Cán bộ nhà nước */}
          <AnimatedSection>
            <div className="bg-gray-50 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Cán bộ nhà nước là <span className="text-red-600">&quot;Công bộc của dân&quot;</span>
              </h3>

              {/* Cần Kiệm Liêm Chính */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { title: "CẦN", desc: "Siêng năng, chăm chỉ" },
                  { title: "KIỆM", desc: "Tiết kiệm, không lãng phí" },
                  { title: "LIÊM", desc: "Trong sạch, không tham lam" },
                  { title: "CHÍNH", desc: "Ngay thẳng, đúng đắn" },
                ].map((q, i) => (
                  <motion.div
                    key={q.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-red-600 text-white p-5 text-center cursor-default"
                  >
                    <div className="text-xl font-bold mb-1">{q.title}</div>
                    <div className="text-sm text-red-100">{q.desc}</div>
                  </motion.div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {["Chí công vô tư", "Nói đi đôi với làm"].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-3">
                  {["Gần dân, hiểu dân", "Trọng dân"].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Giặc nội xâm */}
          <AnimatedSection className="mt-12">
            <motion.div
              whileHover={{ x: 5 }}
              className="border-l-4 border-red-600 bg-red-50 p-6"
            >
              <h4 className="font-bold text-lg text-gray-900 mb-2">
                Đấu tranh chống quan liêu, tham nhũng, lãng phí
              </h4>
              <p className="text-gray-600">
                Người đặc biệt nhấn mạnh đây là <strong className="text-red-600">&quot;Giặc nội xâm&quot;</strong>,
                nguy hiểm không kém giặc ngoại xâm
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Mục tiêu xây dựng Nhà nước trong sạch */}
          <AnimatedSection className="mt-12">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-gray-900">
                Xây dựng Nhà nước trong sạch, vững mạnh là điều kiện để:
              </h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Giữ vững bản chất Nhà nước của dân",
                "Củng cố lòng tin của nhân dân",
                "Bảo đảm quyền làm chủ của nhân dân",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-red-600 text-white p-4 text-center"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section III: Vận dụng tư tưởng HCM */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-red-600 text-sm font-semibold tracking-widest uppercase">
              Phần III
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Vận dụng xây dựng Đảng và Nhà nước
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-6" />
          </AnimatedSection>

          {/* Image with Quote */}
          <AnimatedSection className="mb-16">
            <div className="grid md:grid-cols-5 bg-amber-500">
              <div className="md:col-span-3 text-white p-8 md:p-12 flex flex-col justify-center">
                <p className="text-xl md:text-2xl font-light leading-relaxed">
                  &ldquo;Đảng là đạo đức, là văn minh&rdquo;
                </p>
                <p className="text-white/80 font-semibold mt-4">— Hồ Chí Minh</p>
              </div>
              <div className="md:col-span-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://baoquankhu4.com.vn/upload/18269/fck/thanhvinhqk4-gmail.com/Bai%201-1.jpg"
                  alt="Bác Hồ thăm công nhân"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* 1. Xây dựng Đảng */}
          <AnimatedSection className="mb-12">
            <div className="bg-white p-6 md:p-8 border-t-4 border-red-600 shadow-sm">
              <div className="text-5xl font-bold text-red-100 mb-2">01</div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Xây dựng Đảng thật sự trong sạch, vững mạnh</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Tập trung vào:</h4>
                  <ul className="space-y-2">
                    {[
                      "Kiên định mục tiêu, lý tưởng cách mạng",
                      "Nâng cao đạo đức, bản lĩnh chính trị",
                      "Thực hiện nguyên tắc tập trung dân chủ",
                      "Tự phê bình và phê bình",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                        <ArrowRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Kiên quyết đấu tranh chống:</h4>
                  <ul className="space-y-2">
                    {[
                      "Chủ nghĩa cá nhân",
                      "Tham nhũng, tiêu cực",
                      "Quan liêu, xa rời quần chúng",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                        <ArrowRight className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-600">
                <p className="text-gray-700 italic">
                  &ldquo;Đảng trong sạch thì Nhà nước mới trong sạch; Đảng vững mạnh thì Nhà nước mới vững mạnh.&rdquo;
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* 2. Xây dựng Nhà nước */}
          <AnimatedSection className="mb-12">
            <div className="bg-white p-6 md:p-8 border-t-4 border-amber-500 shadow-sm">
              <div className="text-5xl font-bold text-amber-100 mb-2">02</div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Xây dựng Nhà nước pháp quyền XHCN</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Nhà nước phải:</h4>
                  <ul className="space-y-2">
                    {[
                      "Tôn trọng quyền con người, quyền công dân",
                      "Quản lý xã hội bằng Hiến pháp và pháp luật",
                      "Phát huy dân chủ đi đôi với kỷ cương",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                        <ArrowRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Gắn với hiện đại hóa:</h4>
                  <ul className="space-y-2">
                    {[
                      "Cải cách hành chính",
                      "Chuyển đổi số",
                      "Chính phủ điện tử, chính phủ số",
                      "Nâng cao hiệu quả quản trị quốc gia",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                        <ArrowRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Dân biết, dân bàn... */}
              <div className="bg-amber-50 p-4">
                <h4 className="font-semibold text-center text-gray-800 mb-4">Thực hiện phương châm:</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Dân biết", "Dân bàn", "Dân làm", "Dân kiểm tra", "Dân giám sát", "Dân thụ hưởng"].map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      className={`px-3 py-1 text-sm font-semibold ${i % 2 === 0 ? "bg-red-600 text-white" : "bg-amber-500 text-white"}`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 3. Phòng chống tham nhũng */}
          <AnimatedSection className="mb-16">
            <div className="bg-white p-6 md:p-8 border-t-4 border-red-600 shadow-sm">
              <div className="text-5xl font-bold text-red-100 mb-2">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Phòng, chống tham nhũng</h3>

              <p className="text-gray-700 mb-6">
                Hồ Chí Minh coi tham nhũng là nguyên nhân làm <strong className="text-red-600">suy yếu Nhà nước</strong>,
                làm <strong className="text-red-600">mất lòng tin</strong> của nhân dân, cản trở sự nghiệp cách mạng.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Yêu cầu:</h4>
                  <ul className="space-y-2">
                    {[
                      "Làm thường xuyên, kiên quyết, triệt để",
                      "Không có ngoại lệ",
                      "Không có vùng cấm",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                        <ArrowRight className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Giải pháp:</h4>
                  <ul className="space-y-2">
                    {[
                      "Hoàn thiện hệ thống pháp luật",
                      "Công khai, minh bạch hoạt động công quyền",
                      "Tăng cường kiểm tra, giám sát",
                      "Xử lý nghiêm minh mọi vi phạm",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                        <ArrowRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 text-center">
                <p className="text-gray-700 font-medium">
                  Mục tiêu: <strong className="text-red-600">Củng cố niềm tin của nhân dân vào Đảng, Nhà nước và pháp luật</strong>
                </p>
              </div>
            </div>
          </AnimatedSection>


        </div>
      </section>

      {/* Câu hỏi cốt lõi */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <span className="text-red-600 text-sm font-semibold tracking-widest uppercase">
              Câu hỏi cốt lõi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Nhà nước dân chủ trong kỷ nguyên số
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-6" />
          </AnimatedSection>

          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-gray-50 p-6 md:p-10 mb-12 border-l-4 border-red-600"
            >
              <p className="text-gray-700 italic mb-4">
                Hồ Chí Minh khẳng định: &ldquo;Nước ta là nước dân chủ, bao nhiêu lợi ích đều vì dân,
                bao nhiêu quyền hạn đều của dân…&rdquo;
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Trong kỷ nguyên số, người dân có thể bày tỏ ý kiến trên mạng xã hội,
                giám sát hoạt động của bộ máy công quyền, thậm chí tạo ra áp lực buộc
                cơ quan quản lý phải thay đổi.
              </p>
              <p className="text-red-600 font-semibold">
                Một Nhà nước dân chủ theo tinh thần Hồ Chí Minh trong thời đại mới cần được hiểu
                và vận hành như thế nào để vừa bảo đảm &ldquo;dân là chủ, dân làm chủ&rdquo;,
                vừa thích ứng với yêu cầu quản trị quốc gia hiện đại?
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Phân tích và trả lời */}
          <AnimatedSection className="mb-8">
            <h3 className="text-xl font-bold text-center text-gray-900 mb-8">Phân tích và trả lời</h3>
          </AnimatedSection>

          {/* 1. Tư tưởng HCM về Nhà nước dân chủ */}
          <AnimatedSection className="mb-8">
            <div className="bg-white p-6 border-l-4 border-red-600 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-600 text-white flex items-center justify-center text-sm font-bold">1</span>
                Tư tưởng HCM về Nhà nước dân chủ
              </h4>
              <p className="text-gray-700 mb-4">Theo Hồ Chí Minh, Nhà nước dân chủ là:</p>
              <ul className="space-y-2 mb-4">
                {[
                  { label: "Nhà nước của dân", desc: "mọi quyền lực thuộc về nhân dân" },
                  { label: "Nhà nước do dân", desc: "do nhân dân lập nên và tham gia xây dựng" },
                  { label: "Nhà nước vì dân", desc: "phục vụ lợi ích và hạnh phúc của nhân dân" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                    <span><strong>{item.label}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700">
                Dân chủ phải được thực hiện trong <strong>tổ chức bộ máy nhà nước</strong>,
                trong <strong>hoạt động quản lý xã hội</strong>, và trong <strong>đời sống hằng ngày</strong> của nhân dân.
              </p>
            </div>
          </AnimatedSection>

          {/* 2. Nhà nước dân chủ trong kỷ nguyên số */}
          <AnimatedSection className="mb-8">
            <div className="bg-white p-6 border-l-4 border-amber-500 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-500 text-white flex items-center justify-center text-sm font-bold">2</span>
                Nhà nước dân chủ trong kỷ nguyên số
              </h4>
              <p className="text-gray-700 mb-4">Trong kỷ nguyên số:</p>
              <ul className="space-y-2 mb-4">
                {[
                  "Mạng xã hội trở thành kênh phản ánh ý kiến nhân dân",
                  "Người dân có điều kiện giám sát hoạt động công quyền",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 mb-4">Nhà nước phải:</p>
              <ul className="space-y-2 mb-4">
                {[
                  "Minh bạch thông tin",
                  "Lắng nghe ý kiến nhân dân",
                  "Phản hồi kịp thời, có trách nhiệm",
                  "Phát huy dân chủ gắn với pháp luật",
                  "Tôn trọng quyền tự do ngôn luận nhưng bảo đảm kỷ cương",
                  "Ứng dụng công nghệ số để nâng cao hiệu quả quản trị",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* 3. Vận dụng */}
          <AnimatedSection>
            <div className="bg-white p-6 border-l-4 border-red-600 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-600 text-white flex items-center justify-center text-sm font-bold">3</span>
                Vận dụng xây dựng Nhà nước hiện đại
              </h4>
              <p className="text-gray-700 mb-4">Để xây dựng Nhà nước dân chủ hiện đại cần:</p>
              <ul className="space-y-2">
                {[
                  "Xây dựng Đảng trong sạch, vững mạnh",
                  "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa",
                  "Kiên quyết phòng, chống tham nhũng",
                  "Lấy sự hài lòng của nhân dân làm thước đo hiệu quả hoạt động của Nhà nước",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Kết luận */}
      <section className="py-20 md:py-32 bg-red-600 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <AnimatedSection>
            <span className="text-amber-300 text-sm font-semibold tracking-widest uppercase">
              Kết luận
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-12">
              Nhà nước dân chủ theo tư tưởng Hồ Chí Minh
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { text: "Vẫn giữ nguyên giá trị trong thời đại mới" },
              { text: "Cần được vận hành linh hoạt, hiện đại" },
              { text: "Bảo đảm quyền làm chủ và phục vụ nhân dân" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                className="bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-amber-400 flex items-center justify-center text-red-600 font-bold text-xl">
                  {i + 1}
                </div>
                <p className="text-white/90">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 p-8 max-w-2xl mx-auto backdrop-blur-sm"
            >
              <p className="text-xl font-medium italic">
                &ldquo;Mục tiêu cuối cùng là bảo đảm quyền làm chủ của nhân dân
                và phục vụ lợi ích của nhân dân&rdquo;
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">
            Chương IV - Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của Dân, do Dân, vì Dân
          </p>
          <p className="text-xs text-gray-500 mt-2">HCM202 - 2026</p>
        </div>
      </footer>
    </main>
  );
}
