---
name: automation-skill
description: Chuyển đặc tả và test case thủ công thành bộ kiểm thử Web data-driven bằng Playwright, rà soát bản AI sinh và thu bằng chứng chạy đa trình duyệt. Dùng khi làm HW04 EShop hoặc áp dụng lại quy trình cho một tính năng Web khác.
---

# Kiểm thử tự động Web với Playwright

1. **Chốt phạm vi và kết quả mong đợi.** Đối chiếu đặc tả, test case cũ và luồng Web của phiên bản SUT đang kiểm thử. Với mỗi case, xác định mã, tiền điều kiện, thao tác và kết quả có thể kiểm tra. Giữ mã khi chuyển cùng một hành vi sang script. Nếu bước cũ bị chặn và luồng thay thế kiểm tra hành vi khác, ghi lý do và dùng mã mới cho case thay thế. Đánh dấu các case chỉ có đường thực thi qua API.
2. **Sinh và rà từng nhóm case.** Tách các lượt AI theo việc cần quyết định, chẳng hạn xác định case và assertion, xác nhận luồng cùng locator, rồi sinh spec. Ghi nguyên văn prompt, output, công cụ và thời điểm ngay khi làm. Đưa mã case vào tiêu đề test. Đọc đầu vào và giá trị mong đợi từ JSON hoặc CSV. Dùng fixture cho dữ liệu và phiên thử. Các thao tác chính của case Web đi qua giao diện.
3. **Review trước khi mở rộng.** Dùng locator theo role hoặc label khi giao diện có tên truy cập phù hợp. Chờ bằng web-first assertion và kiểm tra kết quả quan sát được sau thao tác. Rà điều kiện có thể làm test pass khi nghiệp vụ hỏng, đặc biệt ở case từ chối đầu vào. Chạy thử một nhóm nhỏ và kiểm tra test chạy độc lập trước khi nhân rộng. Ghi chỗ AI làm sai hoặc bỏ sót, nguyên nhân và phần sinh viên xác nhận hoặc sửa.
4. **Chạy và kiểm tra bằng chứng.** Chạy một smoke test mở giao diện trên từng trình duyệt trước khi chạy ma trận nghiệp vụ. Cài browser thành công vẫn có thể gặp lỗi khi khởi chạy. Ghi phiên bản SUT, tập case được chạy, kết quả thực tế và đường dẫn báo cáo. Dùng ảnh chụp hoặc trace để phân biệt lỗi SUT, lỗi script, trạng thái không ổn định và lỗi môi trường. Giữ kỳ vọng nghiệp vụ khi lỗi SUT đã được xác nhận. Chỉ dùng kết quả của lượt chạy thực tế làm bằng chứng.
5. **Cập nhật skill sau khi review.** Đưa vào skill những quyết định có thể dùng lại đã được đối chiếu trong lúc làm. Chi tiết liên quan riêng tới case, locator hoặc fixture của một tính năng thuộc spec và báo cáo dự án.

## Áp dụng cho HW04 EShop

- Giữ một tính năng Web từ mỗi Pool A, B và C của HW02. Hoàn thành tối thiểu 12 case Web mỗi tính năng và dùng ít nhất ba mẫu assertion trong bộ test. Ghi rõ case chưa tự động hóa được và lý do.
- Xuất HTML riêng cho từng cặp tính năng–trình duyệt, tối thiểu chín báo cáo. Mở báo cáo để kiểm tra `Run by: {StudentID}` và timestamp ISO của lượt chạy có thể đọc được.
- Ghi lỗi SUT đã xác nhận vào báo cáo và đính kèm ảnh cho từng GitHub Issue cần nộp. Tổng hợp phần sinh viên rà soát và sửa vào AI Audit Report và AI Critique.

## Kiểm tra kỳ vọng sau khi sinh spec

- Khi đặc tả yêu cầu danh sách đủ phần tử, so khớp tập phần tử có tính số lần xuất hiện. Chỉ kiểm tra thứ tự nếu đó là yêu cầu nghiệp vụ.
- Khi thao tác có kết quả trên giao diện và dữ liệu lưu riêng, kiểm tra trạng thái ngay sau thao tác và kiểm tra lại sau tải trang nếu cả hai thuộc kỳ vọng. Với trạng thái chỉ tồn tại trong phiên như giỏ hàng, kiểm tra trong cùng phiên trước khi tải lại trang.
- Với case từ chối đầu vào, đợi dấu hiệu xử lý phù hợp với UI như chặn native, thông báo hoặc phản hồi request rồi xác nhận dữ liệu giữ nguyên. Chỉ so câu thông báo hoặc bắt buộc có request khi đặc tả yêu cầu hoặc khi spec ghi rõ đang kiểm tra một nhánh triển khai cụ thể.
- Với lỗi xuất hiện tạm thời hoặc ngoài vùng đang nhìn thấy, chụp phần tử tại bước có trạng thái sai hoặc lấy khung hình tương ứng từ trace. Rà ảnh trước khi dùng làm bằng chứng.

## Tham khảo Playwright trong repo

Các tài liệu sau nằm trong `.agents/skills/` khi bộ skill Playwright đã được cài. Có thể áp dụng quy trình trên độc lập nếu bản đóng gói chỉ có skill này.

- Khi chuyển case thủ công hoặc review spec, xem [manual-to-automated.md](../../.agents/skills/playwright-qa/manual-to-automated.md) và [test-review.md](../../.agents/skills/playwright-qa/test-review.md).
- Khi viết spec, xem [locators.md](../../.agents/skills/playwright-core/locators.md), [assertions-and-waiting.md](../../.agents/skills/playwright-core/assertions-and-waiting.md) và [test-data-management.md](../../.agents/skills/playwright-core/test-data-management.md).
- Khi phân tích lượt chạy thất bại, xem [bug-reports.md](../../.agents/skills/playwright-qa/bug-reports.md).
