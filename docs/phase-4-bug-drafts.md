# Phase 4 — GitHub Issues

SUT EShop `85af3ba875c88283615e22cb108f13e2fccaf0e9`. Sáu issue đã được đăng vào repo HW04. Ảnh trong từng issue được nhúng từ commit trên nhánh `hw04-issue-evidence`.

## HW04-01 — Hồ sơ áp dụng sai quy tắc số điện thoại

[GitHub #1](https://github.com/vhthawng/software-testing-hw04/issues/1)

- **Case** `TC-A04-001`, `003`, `005`, `007`, `008`, `016`.
- **Các bước** Đăng nhập tài khoản thử, mở Hồ sơ và lưu số `0912345678` hoặc `09123456789`. Thử số `1912345678`. Thử đổi tên hoặc địa chỉ khi giữ số chuẩn đã lưu.
- **Kỳ vọng** Chấp nhận số bắt đầu bằng 0, có 10–11 chữ số. Từ chối số bắt đầu bằng 1. Cho lưu tên và địa chỉ khi số hiện tại hợp lệ.
- **Thực tế** Hai số hợp lệ bị báo lỗi. Số bắt đầu bằng 1 được lưu. Đổi tên hoặc địa chỉ khi giữ số chuẩn cũng bị chặn. Case `016` chưa chứng minh được việc đổi thành công hồ sơ A vì bị chặn ở bước lưu.
- [Ảnh số sai đã lưu trong hồ sơ](bug-evidence/HW04-01.png).

## HW04-02 — Giỏ vẫn còn hàng sau khi thanh toán

[GitHub #2](https://github.com/vhthawng/software-testing-hw04/issues/2)

- **Case** `TC-B08-002`.
- **Các bước** Đăng nhập, thêm hai sản phẩm thử, đặt đơn và mở giỏ trong cùng phiên ngay sau thông báo thành công.
- **Kỳ vọng** Đơn mới có đúng tổng tiền và giỏ rỗng.
- **Thực tế** Đơn mới có đúng tổng tiền. Giỏ vẫn hiển thị các dòng đã đặt.
- [Ảnh giỏ hàng ngay sau khi đặt đơn](bug-evidence/HW04-02.png).

## HW04-03 — Trường tổng tiền ở Checkout cho chỉnh sửa

[GitHub #3](https://github.com/vhthawng/software-testing-hw04/issues/3)

- **Case** `TC-B08-004`.
- **Các bước** Mở Checkout với giỏ hàng có sản phẩm thử. Quan sát khả năng chỉnh sửa của trường tổng tiền.
- **Kỳ vọng** Tổng tiền do hệ thống tính và chỉ hiển thị cho người dùng.
- **Thực tế** Tổng ban đầu đúng, nhưng trường số là ô có thể nhập. Case chỉ xác minh trạng thái của trường trên giao diện.
- [Ảnh màn Checkout](bug-evidence/HW04-03.png). Báo cáo HTML ghi rõ assertion phát hiện trường có thể chỉnh sửa.

## HW04-04 — Admin lưu được tên sản phẩm dài 256 ký tự

[GitHub #4](https://github.com/vhthawng/software-testing-hw04/issues/4)

- **Case** `TC-C15-005`.
- **Các bước** Trong Quản lý Sản phẩm, tạo sản phẩm có tên 256 ký tự với giá và danh mục hợp lệ. Tải lại danh sách.
- **Kỳ vọng** Hệ thống không lưu tên dài quá 255 ký tự.
- **Thực tế** Sản phẩm mới với tên 256 ký tự xuất hiện sau tải lại.
- [Ảnh dòng vừa lưu sau tải lại](bug-evidence/HW04-04.png).

## HW04-05 — Admin lưu được sản phẩm với giá trống, 0 hoặc âm

[GitHub #5](https://github.com/vhthawng/software-testing-hw04/issues/5)

- **Case** `TC-C15-006`, `007`, `009`.
- **Các bước** Tạo sản phẩm thử với tên và danh mục hợp lệ. Thử để trống giá, nhập `0` và nhập `-1` trong ba lượt riêng. Tải lại danh sách sau mỗi lượt.
- **Kỳ vọng** Từ chối từng giá trị và giữ nguyên danh sách.
- **Thực tế** Mỗi lượt tạo thêm một sản phẩm hiển thị sau tải lại.
- Ảnh dòng sau tải lại với [giá trống](bug-evidence/HW04-05-empty.png), [giá 0](bug-evidence/HW04-05-zero.png) và [giá âm](bug-evidence/HW04-05-negative.png).

## HW04-06 — Đổi tên một sản phẩm làm các dòng khác hiển thị sai

[GitHub #6](https://github.com/vhthawng/software-testing-hw04/issues/6)

- **Case** `TC-C15-012`.
- **Các bước** Mở Quản lý Sản phẩm, có ít nhất hai sản phẩm, đổi tên một dòng và quan sát bảng ngay sau khi lưu. Sau đó tải lại.
- **Kỳ vọng** Chỉ dòng đích đổi tên ở cả hai thời điểm.
- **Thực tế** Các dòng khác hiển thị tên mới ngay sau khi lưu. Sau tải lại, các dòng đối chứng trở về đúng tên.
- [Khung hình trích từ trace ngay trước khi tải lại](bug-evidence/HW04-06.jpeg).
