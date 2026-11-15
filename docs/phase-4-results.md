# Kết quả Phase 4 — Ma trận đa trình duyệt

Ma trận được Codex chạy cục bộ cho MSSV `23120355` trên EShop `85af3ba`. Bắt đầu `2026-11-15T01:29:19.066Z` (08:29 giờ Việt Nam). Mỗi báo cáo ghi MSSV, thời điểm bắt đầu của cặp và `Operator: Codex`. Cả 9 tiêu đề đã được kiểm tra trực tiếp trên giao diện HTML.

| Tính năng | Báo cáo | Pass mỗi trình duyệt | Fail mỗi trình duyệt |
| --- | --- | ---: | ---: |
| FR-04 · Hồ sơ cá nhân | [Chrome](../reports/phase-4/2026-11-15T01-29-19-066Z/FR-04/chrome/html/index.html) · [Edge](../reports/phase-4/2026-11-15T01-29-19-066Z/FR-04/edge/html/index.html) · [Firefox](../reports/phase-4/2026-11-15T01-29-19-066Z/FR-04/firefox/html/index.html) | 6 | 6 |
| FR-08 · Thanh toán | [Chrome](../reports/phase-4/2026-11-15T01-29-19-066Z/FR-08/chrome/html/index.html) · [Edge](../reports/phase-4/2026-11-15T01-29-19-066Z/FR-08/edge/html/index.html) · [Firefox](../reports/phase-4/2026-11-15T01-29-19-066Z/FR-08/firefox/html/index.html) | 10 | 2 |
| FR-15 · Quản lý sản phẩm | [Chrome](../reports/phase-4/2026-11-15T01-29-19-066Z/FR-15/chrome/html/index.html) · [Edge](../reports/phase-4/2026-11-15T01-29-19-066Z/FR-15/edge/html/index.html) · [Firefox](../reports/phase-4/2026-11-15T01-29-19-066Z/FR-15/firefox/html/index.html) | 7 | 5 |

**Tổng cộng 36 case, 108 lượt thực thi, 69 pass, 39 fail, 0 bỏ qua.** Cùng 13 mã case fail trên cả ba trình duyệt. Các lần fail được gộp thành [6 lỗi SUT kèm bằng chứng](phase-4-bug-drafts.md).

- FR-04: `TC-A04-001`, `003`, `005`, `007`, `008`, `016`.
- FR-08: `TC-B08-002`, `004`.
- FR-15: `TC-C15-005`, `006`, `007`, `009`, `012`.

Xem [summary.json](../reports/phase-4/2026-11-15T01-29-19-066Z/summary.json) để đối chiếu số liệu mỗi lượt và đường dẫn JSON riêng. Các lượt chụp ảnh bổ sung được lưu riêng ngoài kết quả trên.
