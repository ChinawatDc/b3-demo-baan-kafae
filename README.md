# B3 demo — บ้านกาแฟริมคลอง (ร้านสมมติ)

เว็บตัวอย่างผลงานของ B3 Web Studio เป็นหน้า Landing แบบ static หน้าเดียว
**ทุกอย่างในเว็บเป็นข้อมูลสมมติ** ไม่มีเบอร์โทร LINE หรือที่อยู่จริง ลิงก์ติดต่อเป็น `#` ใส่ `noindex,nofollow` ไว้ และมีแถบ "เว็บตัวอย่างผลงาน ร้านสมมติ" ติดอยู่ด้านบนตลอด

- Stack: Astro 5.18 (static), Tailwind 3.4 และฟอนต์ OFL ผ่าน @fontsource (Pridi, Fraunces, Sarabun) · Node ≥ 18.20.8 (ทดสอบบน 20.19)
- เนื้อหา: `src/data/site.ts` · design tokens: `tailwind.config.mjs` · section: `src/components/`
- รูปทุกรูปเป็นกล่อง placeholder เพราะไม่มีรูป stock

```bash
npm ci
npm run dev -- --host 127.0.0.1 --port 4321
npm run build                        # -> dist/
npm run preview -- --host 127.0.0.1 --port 4322
```

## Deploy (ยังไม่อนุมัติ)
ยังไม่มี remote และยังไม่มี host ใดได้รับอนุมัติ ถ้าคุณ Chinawat อนุมัติ host แล้ว:
build command `npm run build` · output `dist` · ตั้ง `SITE_URL=https://<โดเมนที่อนุมัติ>` ตอน build (ใช้กับ canonical และ og:image)
ไม่ต้องใช้ secret หรือ env อื่น
