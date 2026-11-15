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
