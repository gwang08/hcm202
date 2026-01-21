"use client";

import { motion } from "framer-motion";

// Link ảnh từ Wikipedia (Public Domain)
const IMAGES = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Ho_Chi_Minh_1946.jpg",
    alt: "Chủ tịch Hồ Chí Minh",
    caption: "Chủ tịch Hồ Chí Minh (1946)",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Quoc_hoi_VNDCCH_khoa_I.jpg",
    alt: "Quốc hội khóa I",
    caption: "Quốc hội khóa I - Cơ quan đại diện cao nhất của nhân dân (1946)",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Ho_Chi_Minh_1959.jpg",
    alt: "Chủ tịch Hồ Chí Minh làm việc",
    caption: "Chủ tịch Hồ Chí Minh - Người suốt đời vì dân, vì nước",
  },
];

export function HistoricalGallery() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {IMAGES.map((img, i) => (
        <motion.figure
          key={img.alt}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden bg-gray-100"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
            <p className="text-white text-sm font-medium">{img.caption}</p>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}

export function PortraitSection() {
  return null;
}

export const HISTORICAL_IMAGES = {
  portrait: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Ho_Chi_Minh_1946.jpg",
};
