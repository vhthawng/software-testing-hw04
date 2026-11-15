---
name: automation-skill
description: Thiết kế và phân tích test case Web từ yêu cầu hoặc bộ test thủ công, chuyển sang Playwright Test, review spec, chạy theo trình duyệt và phân loại lỗi từ báo cáo. Dùng khi cần xây dựng hoặc mở rộng kiểm thử tự động cho một ứng dụng Web.
---

# Kiểm thử tự động Web với Playwright

## Nạp bộ hướng dẫn Playwright

Bắt đầu tại thư mục gốc dự án đích. Tìm pack theo thứ tự ưu tiên của dự án: các skill đã được Codex nhận diện, `.agents/skills/<pack>/`, rồi bản sao ở `skills/<pack>/` nếu repo có kèm. `playwright-qa` và `playwright-core` là hai đầu vào chính. Các pack khác dùng theo nhu cầu ở bảng dưới.

Nếu bộ TestDino chưa được cài, chạy lệnh sau từ thư mục gốc dự án với Node.js 22.20 trở lên. Dùng `npx.cmd` trên Windows khi PowerShell chặn `npx.ps1`.

```sh
npx --yes skills add testdino-hq/playwright-skill --agent codex --yes
```

Nếu chỉ thiếu một pack, thêm `--skill <tên-pack>` để cài riêng. Sau khi cài, tìm và đọc `SKILL.md` của các pack cần dùng cùng các hướng dẫn được chọn. Có thể đọc các tệp vừa cài ngay trong phiên hiện tại nếu danh mục skill chưa làm mới. Nếu một liên kết chéo dùng tên thư mục upstream như `../core/`, tìm tệp cùng tên trong pack đã cài như `playwright-core/`. Nếu không cài được, ghi rõ nguyên nhân và tiếp tục phần có thể làm bằng cấu hình dự án hoặc tài liệu Playwright. [Nguồn bộ skill TestDino](https://github.com/testdino-hq/playwright-skill#install)

| Việc đang làm | Pack và tài liệu ưu tiên |
| --- | --- |
| Thiết kế case, chuyển case cũ | `playwright-qa` · `test-design.md`, `manual-to-automated.md` |
| Viết spec, chọn locator, chuẩn bị dữ liệu | `playwright-core` · `locators.md`, `assertions-and-waiting.md`, `fixtures-and-hooks.md`, `test-data-management.md` |
| Review spec, phân tích case fail | `playwright-qa` · `test-review.md`, `bug-reports.md` · `playwright-core` · `trace-analysis.md` |
| Cần khảo sát UI, tách page object hoặc đưa suite lên CI | `playwright-cli`, `playwright-pom` hoặc `playwright-ci` theo việc cần làm |

## Quy trình

1. **Khảo sát và thiết kế case.** Đọc đặc tả, acceptance criteria, test case cũ, cấu hình test và luồng UI thực tế. Tạo bảng gồm mã case, yêu cầu nguồn, tiền điều kiện, dữ liệu, thao tác và kết quả quan sát được. Phủ luồng hợp lệ, từ chối và biên theo rủi ro. Giữ mã cũ khi hành vi được kiểm tra giữ nguyên. Ghi rõ case bị chặn, thiếu kỳ vọng hoặc thuộc tầng API thay vì tính vào độ phủ Web. Xác nhận với người dùng khi một kỳ vọng chưa rõ có thể đổi verdict.
2. **Phân tích khả năng tự động hóa.** Xác định trạng thái ban đầu, dữ liệu riêng cho từng test, cách dọn dữ liệu, locator theo DOM thật và dấu hiệu cho biết thao tác đã hoàn tất. Dùng API hoặc fixture để chuẩn bị dữ liệu khi thích hợp, giữ thao tác cần kiểm thử qua giao diện Web. Chọn nhóm pilot đại diện trước khi mở rộng.
3. **Viết spec.** Dùng cấu hình, package manager và phiên bản Playwright của repo. Đưa mã case vào tên test. Khi có dữ liệu lặp hoặc nhiều giá trị biên, tham số hóa theo cách repo dùng và tách dataset nếu cần. Ưu tiên locator role hoặc label phù hợp và web-first assertions. Mỗi case phải chạy độc lập và kiểm tra kết quả nghiệp vụ, chẳng hạn giá trị đã lưu hoặc bản ghi bị từ chối.
4. **Review.** Đối chiếu từng spec với mã case và kỳ vọng. Chỉ kiểm tra thứ tự danh sách khi đặc tả yêu cầu. Với dữ liệu cần lưu bền, đọc lại sau khi thao tác hoàn tất. Với lỗi tạm thời hoặc trạng thái trong phiên, kiểm tra ngay tại bước có thể quan sát được. Với đầu vào bị từ chối, đợi tín hiệu xử lý phù hợp rồi kiểm tra dữ liệu giữ nguyên. Phân biệt kiểm tra tĩnh và kết quả đã thực thi. Sửa spec khi có lỗi hoặc giả định sai.
5. **Chạy test.** Ưu tiên lệnh có sẵn trong repo. Nếu có dự án Playwright Test mà chưa có lệnh wrapper, dùng `npx playwright test --list` để đối chiếu case, rồi chạy một nhóm bằng `npx playwright test <đường-dẫn-spec> --project=<project>`. Dùng tên project thực tế trong cấu hình. Smoke từng browser trước ma trận nếu mục tiêu yêu cầu đa trình duyệt. Sau pilot, chạy phạm vi người dùng yêu cầu với báo cáo của dự án. Ghi phiên bản ứng dụng, case đã chạy, browser, kết quả và đường dẫn artifact.
6. **Phân loại lỗi và bàn giao.** Dùng trace, ảnh và bước kiểm chứng để phân biệt lỗi ứng dụng, lỗi script, lỗi môi trường và kết quả không ổn định. Chụp đúng phần tử và đúng thời điểm lỗi xuất hiện. Gộp các failure cùng nguyên nhân, giữ kỳ vọng theo đặc tả và ghi lại giới hạn chưa xác minh. Bàn giao bảng truy vết, spec/dataset, số liệu thực tế và bằng chứng theo phạm vi được giao.
