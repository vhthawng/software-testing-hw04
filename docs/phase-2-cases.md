# Truy vết test case Web — Phase 2

36 case theo kế hoạch HW04. Cả 36 đã có spec Playwright. Kỳ vọng lấy theo FR tương ứng và bản nộp HW02. Trạng thái thực thi từng phase được ghi riêng.

## FR-04 · Hồ sơ cá nhân

| Case | Nguồn | Tiền điều kiện, dữ liệu và thao tác | Kỳ vọng | Script |
| --- | --- | --- | --- | --- |
| TC-A04-001 | HW02 | Nhập số 0912345678 cho khách đã đăng nhập rồi lưu | Lưu đúng số 10 chữ số, họ tên và địa chỉ giữ nguyên | Đã có spec |
| TC-A04-002 | HW02 | Nhập 091234567 rồi lưu | Từ chối số 9 chữ số, dữ liệu đã lưu giữ nguyên | Đã có spec |
| TC-A04-003 | HW02 | Nhập 09123456789 rồi lưu | Lưu đúng số 11 chữ số | Đã có spec |
| TC-A04-004 | HW02 | Nhập 091234567890 rồi lưu | Từ chối số 12 chữ số, dữ liệu đã lưu giữ nguyên | Đã có spec |
| TC-A04-005 | HW02 | Nhập 1912345678 rồi lưu | Từ chối số không bắt đầu bằng 0, số đã lưu giữ nguyên | Đã có spec |
| TC-A04-006 | HW02 | Nhập 09123456a1 rồi lưu | Từ chối số chứa chữ, số đã lưu giữ nguyên | Đã có spec |
| TC-A04-007 | HW02 | Đổi họ tên thành Nguyễn Thị Bình, giữ số hợp lệ và địa chỉ | Tên mới lưu đúng, các trường còn lại giữ nguyên | Đã có spec |
| TC-A04-008 | HW02 | Đổi địa chỉ thành 45 Nguyễn Huệ, Quận 1, TP.HCM với số hợp lệ | Địa chỉ mới lưu đúng, các trường còn lại giữ nguyên | Đã có spec |
| TC-A04-009 | HW02 | Mở hồ sơ khách đã đăng nhập và kiểm tra trường email | Email khớp tài khoản, không sửa được qua UI và giữ nguyên sau tải lại | Đã có spec |
| TC-A04-014 | HW04 | Để trống số khi cập nhật hồ sơ | Từ chối số trống, dữ liệu đã lưu giữ nguyên | Đã có spec |
| TC-A04-015 | HW04 | Mở URL hồ sơ khi chưa đăng nhập | Không truy cập được form cập nhật | Đã có spec |
| TC-A04-016 | HW04 | Đổi tên của A, mở hồ sơ B trong phiên riêng | A có tên mới, hồ sơ B giữ nguyên | Đã có spec |

## FR-08 · Thanh toán

| Case | Nguồn | Tiền điều kiện, dữ liệu và thao tác | Kỳ vọng | Script |
| --- | --- | --- | --- | --- |
| TC-B08-001 | HW02 | Khách đăng nhập, A giá 100000 × 2 | Checkout hiển thị đúng một dòng A × 2 và tổng 200000 | Pilot |
| TC-B08-002 | HW02 | Khách đăng nhập, A giá 100000 × 2 và B giá 50000 × 3, xác nhận | Hiển thị đủ hàng, tạo đơn 350000 và giỏ rỗng | Đã có spec |
| TC-B08-003 | HW02 | Khách chưa đăng nhập, có hàng trong giỏ, bấm Tiến hành thanh toán | Không vào luồng xác nhận. SUT đang điều hướng về đăng nhập | Pilot |
| TC-B08-004 | HW02 | Khách đăng nhập, A giá 100000 × 2, mở checkout | Hiển thị tổng 200000 và tổng không cho nhập trực tiếp | Pilot |
| TC-B08-013 | HW04 | Khách đăng nhập, A giá 100000 × 1, xác nhận | Thành công và lịch sử ghi một đơn mới giá 100000 | Đã có spec |
| TC-B08-014 | HW04 | Cho A và B cùng giá 100000, mỗi hàng × 1 | Checkout hiển thị cả hai tên và tổng 200000 | Đã có spec |
| TC-B08-015 | HW04 | Có A giá 100000 và B giá 50000, xóa B từ giỏ | Checkout chỉ hiện A, tổng 100000 | Đã có spec |
| TC-B08-016 | HW04 | Mở checkout với A giá 100000 × 2, quay về giỏ xóa rồi thêm A × 3 | Khi mở lại checkout hiển thị A × 3, tổng 300000 | Đã có spec |
| TC-B08-017 | HW04 | Tạo hai giỏ độc lập với A × 2 và B × 3 theo hai thứ tự thêm | Hai màn checkout hiển thị cùng hàng và tổng 350000 với giá A 100000, B 50000 | Đã có spec |
| TC-B08-018 | HW04 | Khách chưa đăng nhập truy cập trực tiếp `/checkout` | Khách không thể hoàn tất đặt đơn | Đã có spec |
| TC-B08-019 | HW04 | Tạo đơn một sản phẩm giá 100000, đăng xuất rồi đăng nhập lại | Lịch sử vẫn có đúng mã đơn mới và tổng 100000 | Đã có spec |
| TC-B08-020 | HW04 | Thêm cùng một sản phẩm giá 100000 hai lần, mỗi lần × 1 | Checkout thể hiện tổng số lượng 2 và tổng 200000 | Đã có spec |

## FR-15 · Quản lý sản phẩm

| Case | Nguồn | Tiền điều kiện, dữ liệu và thao tác | Kỳ vọng | Script |
| --- | --- | --- | --- | --- |
| TC-C15-001 | HW02 | Admin tạo sản phẩm tên hợp lệ, giá 100000 và danh mục có sẵn | Sản phẩm hiển thị đúng dữ liệu sau tải lại | Đã có spec |
| TC-C15-002 | HW02 | Tạo sản phẩm với tên trống và giá 100000 | Không thêm sản phẩm, danh sách giữ nguyên | Đã có spec |
| TC-C15-003 | HW02 | Tạo sản phẩm tên A, giá 100000 | Lưu đúng tên một ký tự | Đã có spec |
| TC-C15-004 | HW02 | Tạo sản phẩm với tên 255 ký tự ASCII | Lưu đủ chuỗi tên | Đã có spec |
| TC-C15-005 | HW02 | Nhập tên 256 ký tự khi tạo | Không lưu tên dài 256, ghi nhận nếu UI giới hạn đầu vào | Đã có spec |
| TC-C15-006 | HW02 | Tạo sản phẩm với giá trống | Không thêm sản phẩm, danh sách giữ nguyên | Đã có spec |
| TC-C15-007 | HW02 | Tạo sản phẩm với giá 0 | Không thêm sản phẩm, danh sách giữ nguyên | Đã có spec |
| TC-C15-008 | HW02 | Tạo sản phẩm với giá 1 | Tên, giá 1 và danh mục lưu đúng | Đã có spec |
| TC-C15-009 | HW02 | Tạo sản phẩm với giá −1 | Không thêm sản phẩm, danh sách giữ nguyên | Đã có spec |
| TC-C15-011 | HW02 | Tạo sản phẩm với danh mục có thật khác mặc định | Lưu đúng danh mục đã chọn | Đã có spec |
| TC-C15-012 | HW02 | Đổi tên duy nhất sản phẩm đích có giá 100000, có sản phẩm đối chứng | Chỉ sản phẩm đích đổi tên. Giá, danh mục và các sản phẩm khác giữ nguyên ngay sau lưu và sau tải lại | Đã có spec |
| TC-C15-016 | HW02 | Xóa sản phẩm thử, có sản phẩm đối chứng | Sản phẩm đích biến mất, đối chứng giữ nguyên | Đã có spec |

## Phạm vi và điều kiện chạy pilot

- FR-04 dùng khách đã đăng nhập và dữ liệu hồ sơ có thể đọc lại, trừ case khách chưa đăng nhập. FR-15 dùng phiên Admin, sản phẩm thử và danh mục có sẵn.
- `TC-B08-005` giữ trạng thái Blocked ở HW02 vì giao diện giỏ thiếu thao tác sửa trực tiếp số lượng. `TC-B08-016` có mã mới vì dùng thao tác xóa và thêm lại.
- `TC-B08-011` ghi nhận dưới dạng quan sát về giỏ trống. Case chỉ thực hiện qua API ở HW02 nằm ngoài chỉ tiêu Web.
- Pilot sử dụng bước thêm hàng trên trang chi tiết. Bản SUT đã ghim bỏ qua lần bấm đầu, nên script thử thêm một lần khi UI chưa báo đã thêm và kiểm tra giỏ thực sự có đúng một dòng với số lượng yêu cầu. Bước này phục vụ tiền điều kiện của FR-08.
- Pilot `TC-B08-003` kiểm tra biến thể điều hướng từ giỏ đến màn hình đăng nhập. Nếu SUT đổi sang chặn tại chỗ, cần đối chiếu với yêu cầu FR-08 khi phân loại kết quả.
- `TC-B08-004` kiểm tra tổng hiển thị và khả năng chỉnh sửa trước khi xác nhận.

## Kết quả pilot trên Chrome

| Case | Kết quả | Quan sát |
| --- | --- | --- |
| TC-B08-001 | Pass | Checkout hiển thị đúng một dòng sản phẩm × 2 và tổng 200000 VND. |
| TC-B08-003 | Pass | Khách được chuyển đến trang đăng nhập khi bấm thanh toán từ giỏ. |
| TC-B08-004 | Fail | Tổng hiển thị đúng 200000 VND, nhưng trường tổng tiền là input có thể chỉnh sửa, trái yêu cầu FR-08. |

Lỗi giao diện của `TC-B08-004` được ghi nhận trên EShop commit `85af3ba`. Bằng chứng ảnh và trace nằm trong báo cáo HTML tại `playwright-report/index.html`. Giữ nguyên assertion theo đặc tả.

