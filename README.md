# HW04 — Kiểm thử tự động EShop

MSSV `23120355` · FR-04 Hồ sơ cá nhân · FR-08 Thanh toán · FR-15 Quản lý sản phẩm.

## Dựng môi trường từ bản clone mới

Yêu cầu Git, `tar`, Node.js 24, Google Chrome và Microsoft Edge. `browsers:install` cài Firefox tương ứng với Playwright 1.62.1. Các lệnh dưới đây chạy ở thư mục gốc của repo HW04. Trên Windows, có thể dùng `npm.cmd` nếu PowerShell chặn `npm.ps1`.

```powershell
git submodule update --init
git -C eshop-sut rev-parse HEAD
npm ci
npm run sut:prepare
npm run browsers:install
npm run test:smoke
```

Submodule phải ở `85af3ba875c88283615e22cb108f13e2fccaf0e9`. Lệnh `sut:prepare` lấy mã nguồn tại commit đó, tạo bản chạy riêng trong `.hw04/eshop-sut` và cài dependency theo lockfile của ba dịch vụ. Backend tự đặt lại SQLite khi khởi động. Các lần chạy Playwright dùng SQLite trong `.hw04/`, còn mã nguồn tham chiếu nằm ở submodule.

Playwright tự khởi động và dừng backend (`3000`), Web khách (`5173`) và Web Admin (`5174`). Giải phóng các cổng này trước lượt chạy. Smoke test đăng nhập bằng tài khoản thử, xác nhận sản phẩm thử xuất hiện ở Web và Admin, rồi dọn sản phẩm theo ID. Tài khoản thử được tạo với email riêng cho mỗi test và được xóa khi backend đặt lại database. `tests/data/smoke.json` dùng tài khoản admin mẫu đã có sẵn trong EShop.

`npm run test:smoke` chạy trên Chrome, Edge và Firefox. Đây là một trong hai bộ trình duyệt được đề HW04 chấp nhận. WebKit trên máy Windows kiểm thử bị dừng khi khởi chạy với mã `0xC0E90002`, nên cấu hình dùng Chrome và Edge đã có trên máy. Xem báo cáo cục bộ bằng `npx playwright show-report`. Smoke test kiểm tra môi trường và fixture.

## Chạy bộ 36 test nghiệp vụ trên Chrome

```powershell
npm exec -- playwright test tests/checkout tests/profile tests/products --project=chrome
```

Xem danh sách case và các giới hạn của bộ test trong [bảng truy vết](docs/phase-2-cases.md). Các lượt chạy kiểm tra trên Chrome phục vụ Phase 3. Ma trận báo cáo nộp bài thuộc Phase 4.

## Chạy ma trận Phase 4

```powershell
npm run test:matrix -- --student-id 23120355
```

Lệnh chạy lần lượt 9 cặp tính năng–trình duyệt, mỗi cặp khởi động lại EShop trên bản SQLite dùng riêng. Xem vị trí thư mục kết quả trong dòng `Matrix output`. Mỗi cặp có HTML, JSON và các tệp bằng chứng. `summary.json` lưu số case thực thi và trạng thái từng cặp.

Lệnh tiếp tục sau khi một cặp có test fail. Mã thoát `0` nghĩa là tất cả pass, `1` nghĩa là ma trận đầy đủ có kết quả ngoài kỳ vọng, và `2` nghĩa là có cặp thiếu lượt chạy hoặc báo cáo. Nếu lượt chạy được thực hiện hộ, truyền thêm `--operator` với tên người hoặc công cụ thực sự chạy.

[Kết quả Phase 4 và 9 báo cáo Playwright](docs/phase-4-results.md) có trong repo. Tải toàn bộ thư mục `html` của lượt cần xem để giữ các tệp ảnh và trace đi kèm.

## Tóm tắt hồ sơ HW04

Riêng HW04, phạm vi tự động hóa gồm 12 case Web cho mỗi tính năng và 3 trình duyệt cho mỗi tính năng. Các báo cáo nộp bài cần hiển thị MSSV và timestamp ISO. Khi dùng lại Agent Skill ở dự án khác, lấy phạm vi và đầu ra từ yêu cầu của dự án đó.

Để dùng skill trong dự án khác, chép thư mục `skills/automation-skill` vào `.agents/skills/` của dự án mới và gọi `$automation-skill`. Skill có bước nạp bộ hướng dẫn Playwright khi dự án chưa cài.

Repo này lưu bản sao của 8 pack Playwright trong [skills/](skills/). Có thể đọc các pack ngay sau khi clone repo. Nguồn là [TestDino Playwright Skill](https://github.com/testdino-hq/playwright-skill) và bản sao đi kèm [giấy phép MIT](skills/LICENSE-TestDino.txt).

| Chỉ số | Kết quả |
| --- | ---: |
| Tính năng Web | 3 |
| Case tự động hóa | 36 |
| Case duy nhất đã chạy | 36 |
| Case duy nhất pass trên cả ba trình duyệt | 23 |
| Case duy nhất fail trên cả ba trình duyệt | 13 |
| Lượt tính năng–trình duyệt | 9 |
| Lượt case–trình duyệt thực thi | 108 |
| Lượt case–trình duyệt pass / fail / bỏ qua | 69 / 39 / 0 |
| Lỗi EShop đã đăng GitHub Issues | 6 |

Số liệu trên lấy từ ma trận do Codex chạy, ghi `Operator: Codex` trong HTML. Lượt sinh viên tự chạy theo kế hoạch vẫn chờ bổ sung.

- [Báo cáo chính](report.md), [AI Audit Report](AI_Audit_Report.md) và [AI Critique](AI_Critique.md).
- Bản PDF gồm [báo cáo chính](output/pdf/report.pdf), [AI Audit Report](output/pdf/AI_Audit_Report.pdf) và [AI Critique](output/pdf/AI_Critique.pdf).
- [Báo cáo lỗi và ảnh](docs/phase-4-bug-drafts.md), [Git commit log](git_commit_log.txt) và [Agent Skill](skills/automation-skill/SKILL.md).
- Link YouTube demo chính: Chờ sinh viên cung cấp.
- Link YouTube minh chứng Agent Skill: Chờ sinh viên cung cấp.

## Bảng tự chấm nháp

| Tiêu chí theo đề | Điểm tối đa | Điểm tạm tính | Căn cứ |
| --- | ---: | ---: | --- |
| Task 1 · Pool A · FR-04 | 25 | 25 | 12 case Web và 3 báo cáo. |
| Task 1 · Pool B · FR-08 | 25 | 25 | 12 case Web và 3 báo cáo. |
| Task 1 · Pool C · FR-15 | 25 | 25 | 12 case Web và 3 báo cáo. |
| Task 2 · Demo | 15 | 0 | Chưa có link để xác minh. |
| Agent Skill | 10 | 0 | Có skill, chờ link demo sử dụng skill. |
| **Tổng** | **100** | **75** | Điểm dự kiến dựa trên hồ sơ kỹ thuật hiện có. |

Sinh viên cần xác nhận điểm, tự rà phần AI và cập nhật link sau khi có bằng chứng.
