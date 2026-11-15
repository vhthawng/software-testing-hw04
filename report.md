# HW04 · Kiểm thử tự động EShop

**Sinh viên** Võ Hữu Thắng · **MSSV** 23120355 · **Bài tập** HW04-AI

**Ngày tổng hợp** 15/11/2026 · **SUT** EShop, commit `85af3ba875c88283615e22cb108f13e2fccaf0e9`

## 1. Phạm vi và truy vết

Bộ test giữ ba tính năng Web từ HW02. FR-04 kiểm tra hồ sơ khách hàng, FR-08 kiểm tra thanh toán và FR-15 kiểm tra quản lý sản phẩm trong Web Admin. Mỗi tính năng có 12 case. Các case chuyển từ HW02 giữ mã cũ nếu hành vi được kiểm tra giữ nguyên. Bảng truy vết ghi dữ liệu, thao tác, kỳ vọng và nguồn của từng case.

- [Bảng truy vết 36 test case](https://github.com/vhthawng/software-testing-hw04/blob/main/docs/phase-2-cases.md)
- [Repo GitHub công khai](https://github.com/vhthawng/software-testing-hw04)
- [Phiên bản SUT](https://github.com/ttbhanh/eshop-sut/tree/85af3ba875c88283615e22cb108f13e2fccaf0e9)

`TC-B08-005` vẫn bị chặn vì giỏ hàng thiếu thao tác sửa trực tiếp số lượng. `TC-B08-016` kiểm tra luồng xóa rồi thêm lại sản phẩm với số lượng mới. `TC-B08-011` về giỏ trống được ghi nhận dưới dạng quan sát vì kỳ vọng D1 thuộc quyết định bổ sung ở HW02. Các case chỉ thực hiện qua API và tính năng mobile nằm ngoài ma trận Web.

## 2. Thiết kế và thực thi

Dùng Playwright Test 1.62.1 với spec TypeScript và dữ liệu JSON. Các thao tác nghiệp vụ đi qua UI. Fixture tạo tài khoản thử riêng và sản phẩm theo giá đã định; thao tác chuẩn bị và dọn dữ liệu dùng API cục bộ. Mỗi lượt chạy khởi động EShop trên bản SQLite riêng. Cách này tránh để dữ liệu viết trong khi test ảnh hưởng bản mã nguồn tham chiếu.

Các mẫu kiểm tra gồm `toHaveURL` cho hướng điều hướng, `toHaveValue` cho dữ liệu hiển thị hoặc đã lưu, `toHaveCount` cho số dòng và `not.toBeEditable` cho quyền chỉnh sửa. Với kết quả cần lưu bền, test tải lại màn hình sau khi thao tác hoàn tất. Với giỏ hàng chỉ tồn tại trong phiên, test quan sát trong cùng phiên.

```powershell
npm run test:matrix -- --student-id 23120355
```

Ma trận dùng Chrome, Edge và Firefox. Nhóm trình duyệt này được đề cho phép và đã qua smoke test trên Windows. Xem hướng dẫn dựng lại từ repo, gồm các bước chuẩn bị submodule và dữ liệu. [README trên GitHub](https://github.com/vhthawng/software-testing-hw04/blob/main/README.md)

## 3. Kết quả

Ma trận chạy đủ 36 case duy nhất trên ba trình duyệt, tạo 9 báo cáo riêng và 108 lượt thực thi. Có 69 lượt pass, 39 lượt fail và 0 lượt bỏ qua. Cùng 13 case duy nhất fail trên cả ba trình duyệt.

| Tính năng | Case | Pass mỗi trình duyệt | Fail mỗi trình duyệt | Tổng lượt |
| --- | ---: | ---: | ---: | ---: |
| FR-04 Hồ sơ | 12 | 6 | 6 | 36 |
| FR-08 Thanh toán | 12 | 10 | 2 | 36 |
| FR-15 Quản lý sản phẩm | 12 | 7 | 5 | 36 |

Lượt chạy trên được Codex thực hiện cho MSSV 23120355. Cả 9 báo cáo đã được mở để xác minh `Run by: 23120355`, timestamp ISO và `Operator: Codex`. Kết quả mô tả lượt thực thi có thật. Lượt sinh viên tự chạy theo kế hoạch vẫn chờ bổ sung trước khi chốt hồ sơ. [Bảng kết quả và link 9 báo cáo HTML](https://github.com/vhthawng/software-testing-hw04/blob/main/docs/phase-4-results.md)

## 4. Phân loại sáu lỗi

| Issue | Kết quả quan sát được |
| --- | --- |
| [#1 Hồ sơ](https://github.com/vhthawng/software-testing-hw04/issues/1) | Từ chối số hợp lệ bắt đầu bằng 0, chấp nhận số bắt đầu bằng 1. Lỗi chặn cả thao tác lưu tên và địa chỉ khi số đang lưu hợp lệ. |
| [#2 Giỏ hàng](https://github.com/vhthawng/software-testing-hw04/issues/2) | Đơn được tạo đúng tổng nhưng giỏ vẫn còn sản phẩm trong cùng phiên. |
| [#3 Tổng tiền](https://github.com/vhthawng/software-testing-hw04/issues/3) | Tổng ban đầu đúng và trường tổng tiền vẫn cho chỉnh sửa trên giao diện. |
| [#4 Tên sản phẩm](https://github.com/vhthawng/software-testing-hw04/issues/4) | Tên dài 256 ký tự được lưu và hiện sau tải lại. |
| [#5 Giá sản phẩm](https://github.com/vhthawng/software-testing-hw04/issues/5) | Các giá trị trống, 0 và âm đều tạo được một dòng sản phẩm. |
| [#6 Đổi tên sản phẩm](https://github.com/vhthawng/software-testing-hw04/issues/6) | Các dòng đối chứng hiển thị sai tên ngay sau lưu và đúng trở lại sau tải lại. |

`TC-A04-016` không chứng minh được luồng cô lập tài khoản sau một lần lưu thành công vì tài khoản A bị chặn ở bước lưu. Bốn case Admin tạo dữ liệu không hợp lệ được chạy lại trên Chrome để lấy ảnh đúng dòng vừa lưu. Kết quả chụp ảnh bổ sung nằm ngoài tổng 108 lượt.

## 5. AI hỗ trợ và các điều chỉnh sau rà soát

Quá trình chia thành lập bảng truy vết, xác định locator và kỳ vọng, sinh nhóm pilot, mở rộng spec, rồi xem lại bằng kết quả thực thi. Codex và subagent đã rà soát kỹ thuật; phần sinh viên tự xác nhận và phản ánh vẫn chờ hoàn tất.

| Điểm cần sửa | Nguyên nhân và điều chỉnh |
| --- | --- |
| Locator Admin giả định mục Sản phẩm là nút | Bản đầu suy từ chức năng của điều khiển. Trace và mã nguồn cho thấy DOM dùng mục danh sách có sự kiện click. Spec đã đổi locator theo markup thực tế. |
| Kiểm tra thứ tự dòng Checkout ngoài đặc tả | Mẫu assertion ban đầu so mảng theo thứ tự. Review chỉ ra FR-08 yêu cầu đủ hàng và đúng tổng. Spec so nội dung và số lần xuất hiện của các dòng. |
| Chỉ kiểm tra trạng thái sau tải lại | Với Admin, tải lại có thể che lỗi hiển thị ngay sau lưu. Spec kiểm tra ở cả hai thời điểm. Checkout kiểm tra giỏ trước khi rời phiên. |
| Ảnh fail bỏ sót dòng mới dưới màn hình | Ảnh mặc định trong báo cáo chỉ chụp vùng đang nhìn thấy. Spec Admin được bổ sung ảnh đúng dòng và lấy trace cho tình trạng đổi tên tạm thời. |

Quy trình này áp dụng AI để sinh và chạy test theo từng nhóm (G9.2), phân tích failure bằng trace và kết quả lưu (G9.3), rồi dùng phản hồi review để sửa spec và cập nhật skill (G9.4). Các thay đổi có thể tái sử dụng nằm trong [automation-skill](https://github.com/vhthawng/software-testing-hw04/blob/main/skills/automation-skill/SKILL.md).

## 6. Tài liệu và phần sinh viên xác nhận

- [AI Audit Report](AI_Audit_Report.md) ghi prompt, đầu ra và kết quả rà soát kỹ thuật.
- [AI Critique](AI_Critique.md) là bản dự thảo để sinh viên duyệt và chỉnh theo trải nghiệm của mình.
- [Git commit log](git_commit_log.txt) có 10 commit thay đổi spec tại mốc repo công khai được dùng để soát hồ sơ.
- Link YouTube demo chính và minh chứng sử dụng skill đang chờ sinh viên cung cấp. Bảng tự chấm nháp nằm trong [README](README.md).
