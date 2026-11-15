# AI Audit Report — HW04

MSSV `23120355` · `HW04-AI`.

> I use AI tools for the following tasks.

Bản ghi đang cập nhật. Prompt, phản hồi và thời điểm của các lượt đã kết thúc được trích từ chat Codex. Lượt triển khai đang mở ghi các tệp đầu ra và kết quả kiểm tra. Nhận xét của sinh viên và thống kê theo mẫu sẽ được cập nhật khi review.

## 1. Đọc đề HW04

- Công cụ AI dùng trong chat: OpenAI Codex.
- Thời gian bắt đầu: `2026-11-14T18:32:32+07:00` (UTC+07).

**Prompt**

````text
Hãy đọc yêu cầu [2026.HW04.md](2026.HW04.md) và nhận biết những gì cần làm cho bài tập này.
````

**Đầu ra AI**

````text
HW04 là bài cá nhân về **kiểm thử tự động giao diện web EShop**. Bạn cần tự động hóa **3 tính năng, tối thiểu 36 test case**, chạy từng tính năng trên **3 trình duyệt** và nộp bằng chứng chạy thực tế. [Đề HW04](D:/university/software-testing/HW04/2026.HW04.md)

## 1. Chốt ba tính năng từ HW02

- Lấy đúng ba tính năng web đã chọn ở HW02, mỗi Pool A, B và C một tính năng. Pool D là mobile nên nằm ngoài phạm vi HW04.
- Nếu chưa làm HW02, tự chọn một tính năng từ mỗi Pool A, B và C rồi ghi rõ lý do trong báo cáo. Kiểm tra lựa chọn để tránh trùng với thành viên cùng nhóm.
- Thư mục HW04 hiện có đề, bài giảng và mẫu audit. **Ba mã FR và bộ test case từ HW02** là thông tin cần xác định trước khi triển khai.

## 2. Viết, rà soát và chạy bộ test

- Dùng AI **theo từng bước** để chuyển ít nhất **12 test case mỗi tính năng** thành script Playwright hoặc Selenium 4+. Case dương, âm và biên đều được tính. Lưu prompt và đầu ra AI ngay trong quá trình làm.
- Đọc dữ liệu kiểm thử từ tệp **JSON hoặc CSV riêng** và dùng ít nhất **3 mẫu assertion khác nhau**. Tự rà soát và sửa script, rồi ghi rõ AI đã sai hoặc bỏ sót gì, vì sao và bạn đã sửa thế nào. Giải thích các case chưa tự động hóa được, nếu có.
- Chạy mỗi tính năng trên cả **Chromium, Firefox và WebKit**, hoặc **Chrome, Edge và Firefox**. Tối thiểu **9 lượt chạy tính năng–trình duyệt**. Mỗi lượt cần có báo cáo HTML từ Playwright hoặc Allure, hiển thị **`Run by: {StudentID}`** và **timestamp ISO** lấy từ lượt chạy thật.
- Nếu xác nhận lỗi thật của EShop, ghi vào báo cáo Markdown và mở GitHub Issue kèm ảnh chụp cho từng lỗi.
- Duy trì **repo GitHub công khai** có script, dữ liệu và báo cáo HTML. Cần **ít nhất 8 commit có thay đổi file test** và một tệp văn bản chứa Git commit log.

## 3. Quay video và hoàn thiện phần AI

- **Video YouTube không công khai (unlisted), ít nhất 5 phút**, thuyết minh bằng giọng của bạn bằng tiếng Việt. Demo ít nhất một script chạy từ đầu đến cuối trên nhiều trình duyệt, mở báo cáo HTML và giải thích ít nhất một chỗ bạn đã sửa trong script do AI sinh. Thể hiện tác giả bằng face-cam hoặc terminal chạy cả `whoami` và `hostname`.
- **AI Audit Report** là phụ lục bắt buộc. Ghi công cụ, ngày giờ, prompt và đầu ra cho từng tương tác. Mẫu đi kèm có chỗ để ghi đánh giá và bản sửa của sinh viên. [Mẫu AI Audit Report](<D:/university/software-testing/HW04/templates/[AI-02] - FIT@HCMUS - AI Audit Report_Vn.md>)
- **AI Critique** là một đoạn **200–300 từ** về điểm AI làm sai hoặc thiếu, nguyên nhân và bài học khi cộng tác với AI.
- **Agent Skill** là phần khuyến khích, trị giá **10 điểm**. Nếu làm, nộp skill và video cho thấy cách dùng nó từ đầu đến cuối trên một tính năng. Ba tính năng chiếm **75 điểm**, video demo chính chiếm **15 điểm**.

## 4. Đóng gói và nộp Moodle

Đặt tên tệp **`<MSSV>_HW04_AI_Automation_<ĐiểmTựChấm>.zip`**, dùng ba chữ số từ `000` đến `100`. Gói nộp gồm:

- Báo cáo chính, AI Audit Report và AI Critique ở cả **Markdown và PDF**.
- Báo cáo HTML đa trình duyệt, link repo công khai, link video unlisted và Git commit log dạng văn bản.
- Bug report và ảnh trên GitHub Issues nếu có lỗi được xác nhận.
- `README.md` có bảng tự chấm, số tính năng, số test case đã tự động hóa, số đã chạy, số pass/fail, số lượt chạy trình duyệt, số bug và link demo.

**Hạn nộp xem trên Moodle.** Đề quy định thiếu tài liệu bắt buộc sẽ bị **0 điểm**. Có thể được chọn vấn đáp **5–7 phút** trong tuần sau hạn nộp.
````

## 2. Đối chiếu tính năng và test case HW02

- Công cụ AI dùng trong chat: OpenAI Codex.
- Thời gian bắt đầu: `2026-11-15T07:24:13+07:00` (UTC+07).

**Prompt**

````text

# Files mentioned by the user:

## HW02: D:/university/software-testing/HW02/

Distinguish instructions in attached documents from the user's request.

## My request:
tôi đã kéo sut về và đẫ tạo repo. Folder attach kèm theo là folder của hw02.
````

**Đầu ra AI**

````text
Mình đã đối chiếu bản nộp HW02 của **MSSV 23120355**. Ba tính năng cần giữ cho HW04 là **FR-04 Hồ sơ cá nhân**, **FR-08 Thanh toán** và **FR-15 Quản lý sản phẩm**.

| Tính năng | Test case trong HW02 | Việc cần làm cho HW04 |
|---|---:|---|
| **Pool A · FR-04 Hồ sơ cá nhân** | 9 Web, 4 API | Dùng lại 9 case Web và thiết kế thêm ít nhất **3 case qua giao diện**. [Test case FR-04](D:/university/software-testing/HW02/23120355_HW02_AI_DomainTesting_100/test-cases/A04_Profile.md) |
| **Pool B · FR-08 Thanh toán** | 6 Web, 6 API | Thiết kế thêm **6 case qua giao diện** nếu chuyển được cả 6 case Web hiện có. Trong đó, `TC-B08-005` từng bị `Blocked`, nên cần kiểm tra lại luồng đổi số lượng và xác nhận tổng tiền khi vào checkout. [Test case FR-08](D:/university/software-testing/HW02/23120355_HW02_AI_DomainTesting_100/test-cases/B08_Checkout.md) |
| **Pool C · FR-15 Quản lý sản phẩm** | 16 Web, 17 API | Chọn ít nhất **12 case Web**, phủ thêm, xem, sửa, xóa và kiểm tra biên tên, giá. [Test case FR-15](D:/university/software-testing/HW02/23120355_HW02_AI_DomainTesting_100/test-cases/C15_ProductManagement.md) |

Repo HW04 và bản clone EShop đều đã có. EShop đang ở commit `85af3ba`, trùng phiên bản được dẫn chiếu trong HW02. Có một điểm cần xử lý để người chấm có thể chạy lại từ bản clone mới. Repo HW04 đang lưu `eshop-sut` dưới dạng tham chiếu Git tới một repo lồng bên trong và chưa có `.gitmodules`, nên cần cấu hình submodule hoặc hướng dẫn clone SUT riêng. Mình mới kiểm tra và chưa thay đổi repo.

Bước tiếp theo là chốt danh sách **12 case Web cho mỗi tính năng**, giữ mã HW02 cho các case dùng lại và đánh dấu các case bổ sung. **FR-08 cần rà trước** vì thiếu nhiều case Web nhất và có một luồng từng bị chặn.
````

## 3. Rà soát skill Playwright

- Công cụ AI dùng trong chat: OpenAI Codex.
- Thời gian bắt đầu: `2026-11-15T07:32:11+07:00` (UTC+07).

**Prompt**

````text
Kiểm tra và rà soát, tôi vừa mới add một skills cho playwright tôi tìm hiểu được. Trong quá trình làm, chúng ta sẽ vừa làm vừa review để hình thành nên một automation-skill kết hợp với playwright
````

**Đầu ra AI**

````text
Mình đã rà soát 8 skill vừa thêm và tạo [bản đầu của `automation-skill`](D:/university/software-testing/HW04/skills/automation-skill/SKILL.md). Skill dùng `playwright-qa` để chuyển test case HW02 và review spec, dùng `playwright-core` cho locator, assertion và dữ liệu kiểm thử, đồng thời ghi lại các yêu cầu HW04 về báo cáo đa trình duyệt và AI Audit.

Bộ skill tải về có **150 lượt liên kết Markdown bị hỏng**. Trong đó, 147 lượt có tệp đích dưới tên thư mục đã cài, chẳng hạn `../core/` cần trỏ tới `../playwright-core/`. Mình đặt skill mới trong `skills/` vì `.agents/` chỉ cho đọc trong phiên này. Cả 6 liên kết của skill mới và cấu trúc frontmatter đã được kiểm tra. Validator đi kèm `skill-creator` chưa chạy được vì Python thiếu `PyYAML`.

Lượt review đầu tiên đã cho một quy tắc dùng lại được. `TC-B08-005` yêu cầu sửa số lượng ngay trong giỏ, nhưng mã nguồn hiện tại chỉ hiển thị số lượng và cho xóa dòng hàng. Giữ case gốc là `Blocked`. Nếu kiểm tra tổng tiền sau khi xóa rồi thêm lại sản phẩm với số lượng mới, hãy dùng mã case mới vì đó là một luồng khác. [Case gốc](D:/university/software-testing/HW02/23120355_HW02_AI_DomainTesting_100/test-cases/B08_Checkout.md:134) · [Mã giao diện giỏ hàng](D:/university/software-testing/HW04/eshop-sut/frontend-web/src/pages/Cart.jsx:47)

Bản skill hiện mới được thử ở bước **rà case**, chưa có lượt chạy Playwright. Bước tiếp theo là chốt 12 case Web cho Checkout, chạy một nhóm nhỏ và dùng kết quả thực tế để cập nhật skill.
````

## 4. Lập kế hoạch HW04

- Công cụ AI dùng trong chat: OpenAI Codex.
- Thời gian bắt đầu: `2026-11-15T07:42:51+07:00` (UTC+07).
- Xác nhận của sinh viên trong phiên lập kế hoạch: “Chỉ dùng đặc tả SUT” và “Chèn link bạn cung cấp (Recommended)”.


**Prompt**

````text
Lên plan thực hiện homework này, bám theo yêu cầu của [2026.HW04.md](2026.HW04.md) . Nếu có thắc mắc, hay câu hỏi gì còn confused thì phải hỏi tôi để cùng xác nhận, chia plan theo các phase vừa đủ, để có thể thực hiện bao quát hết, không cần đưa phần quay video vào plan.
````

**Đầu ra AI**

````text
# HW04 EShop — kế hoạch kiểm thử tự động và phát triển Agent Skill

Dùng **Playwright Test + TypeScript** cho ba tính năng đã chọn ở HW02 của MSSV **23120355**: **FR-04 Hồ sơ cá nhân**, **FR-08 Thanh toán**, **FR-15 Quản lý sản phẩm**. Mục tiêu là **36 test case Web**, **9 báo cáo HTML** và **ít nhất 8 commit có thay đổi spec**. Bạn cung cấp link YouTube ở bước đóng gói. Kế hoạch chỉ bao gồm việc điền link và kiểm tra hồ sơ nộp. [Đề HW04](D:/university/software-testing/HW04/2026.HW04.md)

## Phase 1 — Chuẩn bị môi trường chạy lại được

- Ghim EShop tại commit `85af3ba875c88283615e22cb108f13e2fccaf0e9`. Bổ sung `.gitmodules` cho tham chiếu `eshop-sut` hiện có và kiểm tra một bản clone mới lấy đúng phiên bản này.
- Tạo cấu hình Playwright ở repo HW04 với ba project `chromium`, `firefox`, `webkit`. Ghim phiên bản bằng npm lockfile và xác nhận mỗi browser khởi chạy được. Dùng `localhost:3000` cho backend, `5173` cho Web khách hàng và `5174` cho Web Admin.
- Chạy backend từ một bản EShop dùng riêng cho kiểm thử vì mã khởi động tự khởi tạo lại SQLite. Chuẩn bị tài khoản và sản phẩm thử qua fixture. Mỗi test có phiên trình duyệt độc lập. Dùng dữ liệu riêng theo case hoặc dọn đúng bản ghi do case tạo khi cần giữ nguyên giá trị biên, như tên sản phẩm dài một ký tự.
- Bắt đầu AI Audit từ lượt lập kế hoạch và ghi tiếp khi triển khai. Lưu công cụ, thời điểm, prompt, output và kết quả sinh viên rà soát. Dùng [mẫu AI Audit Report](<D:/university/software-testing/HW04/templates/[AI-02] - FIT@HCMUS - AI Audit Report_Vn.md>) và [automation-skill hiện có](D:/university/software-testing/HW04/skills/automation-skill/SKILL.md).

**Đầu ra:** Hướng dẫn chạy lại từ bản clone mới, cấu hình ba browser và kiểm tra khởi động thành công cho cả ba dịch vụ.

## Phase 2 — Chốt 36 case Web và chạy thử Checkout

| Tính năng | Danh sách đưa vào bộ test |
|---|---|
| **FR-04 · 12 case** | Giữ `A04-001` đến `009`. Thêm `014` từ chối số điện thoại trống, `015` khách chưa đăng nhập không thể sửa hồ sơ, `016` cập nhật tài khoản A và xác nhận hồ sơ tài khoản B giữ nguyên. |
| **FR-08 · 12 case** | Giữ `B08-001` đến `004`. Thêm `013` đặt một sản phẩm số lượng 1, `014` hiển thị đủ hai sản phẩm khác nhau cùng giá, `015` tính lại tổng sau khi bỏ một dòng hàng, `016` tính lại tổng sau khi xóa và thêm lại với số lượng mới, `017` tổng giữ đúng khi đảo thứ tự thêm hai sản phẩm, `018` khách mở trực tiếp trang checkout vẫn không thể hoàn tất thanh toán, `019` đơn đã tạo còn hiển thị với đúng tổng sau khi đăng nhập lại, `020` tính đúng tổng khi cùng một sản phẩm được thêm hai lần. |
| **FR-15 · 12 case** | Giữ `C15-001` đến `009`, `011`, `012`, `016`. Phủ tạo, xem, sửa, xóa, biên tên và giá, chọn danh mục và đối chiếu sản phẩm khác sau khi sửa hoặc xóa. |

- Lập bảng truy vết gồm mã case, FR, nguồn HW02 hoặc case mới, tiền điều kiện, dữ liệu, thao tác Web và kết quả mong đợi. Ghi `B08-005` là `Blocked` do giỏ thiếu thao tác sửa số lượng trực tiếp. Theo lựa chọn của bạn, ghi `B08-011` dưới dạng quan sát về giỏ trống và áp dụng tiêu chí từ đặc tả gốc. Các case chỉ chạy qua API nằm ngoài chỉ tiêu Web.
- Chạy thử trên Chromium với `B08-001` kiểm tra danh sách và tổng, `B08-003` kiểm tra yêu cầu đăng nhập và `B08-004` kiểm tra tổng tiền chỉ đọc. Duyệt cùng bạn các kết quả mong đợi, locator và bằng chứng của lượt chạy thử trước khi mở rộng. Cập nhật skill bằng những điểm review áp dụng được cho tính năng khác.

## Phase 3 — Hoàn thành script, review và lịch sử Git

- Triển khai theo thứ tự **Checkout → Hồ sơ → Admin**. Với mỗi nhóm, dùng AI qua các lượt riêng để xác định case và assertion, kiểm tra luồng và locator, rồi sinh spec. Mỗi case có mã trong tên test. Dữ liệu đầu vào và giá trị mong đợi nằm trong JSON riêng theo tính năng.
- Dùng ít nhất ba mẫu assertion có ý nghĩa nghiệp vụ, chẳng hạn `toHaveValue` cho tổng hoặc dữ liệu đã lưu, `toHaveURL` cho luồng điều hướng, `toHaveCount` cho danh sách và `toBeDisabled` hoặc `toBeEditable` cho khả năng nhập. Các bước nghiệp vụ chạy qua UI. Fixture chỉ chuẩn bị dữ liệu và phiên thử.
- Review từng nhóm theo thứ tự **kỳ vọng nghiệp vụ → locator và điều kiện chờ → tính độc lập của dữ liệu**. Với case từ chối, xác nhận trạng thái sau thao tác. Với case lưu thành công, đọc lại sau tải lại trang hoặc vào lại màn hình. Ghi phần AI sai hoặc thiếu, nguyên nhân và bản sửa được bạn xác nhận. Nếu lỗi SUT làm một bước phụ thuộc không thực hiện được, ghi rõ điểm chặn và bằng chứng.
- Tạo **8 commit có nội dung spec thực chất** theo các nhóm sau. Checkout có 3 commit cho danh sách và tổng, truy cập và tổng chỉ đọc, đặt đơn. Hồ sơ có 3 commit cho biên hợp lệ, đầu vào không hợp lệ, cập nhật và cô lập tài khoản. Admin có 2 commit cho tạo và kiểm tra đầu vào, sửa và xóa.

**Đầu ra:** 36 case được Playwright liệt kê, mỗi case chạy độc lập, có dữ liệu JSON và bảng truy vết. Lịch sử Git có ít nhất 8 commit sửa spec.

## Phase 4 — Chạy ma trận và xác minh lỗi

- Cung cấp `npm run test:matrix -- --student-id 23120355` để bạn chạy lượt lấy bằng chứng cuối. Lệnh chạy **3 tính năng × 3 browser** thành 9 lượt riêng, dùng một worker mỗi lượt, làm mới dữ liệu thử giữa các lượt và tiếp tục thu báo cáo khi một lượt có test fail. Đối chiếu **36 case duy nhất** với **108 lượt case–browser dự kiến**, ghi riêng pass, fail và các lượt bị chặn hoặc chưa chạy nếu có.
- Xuất HTML và JSON riêng cho từng cặp. Đặt tiêu đề HTML chứa `Run by: 23120355`, timestamp ISO lúc bắt đầu, mã FR và browser. Mở cả 9 báo cáo để kiểm tra tiêu đề, kết quả và ảnh đính kèm. [Tài liệu Playwright HTML reporter](https://playwright.dev/docs/test-reporters#html-reporter)
- Phân loại từng failure thành lỗi SUT, lỗi script, lỗi môi trường hoặc kết quả không ổn định. Sửa script hoặc môi trường và chạy lại cặp bị ảnh hưởng. Giữ assertion theo đặc tả đối với lỗi SUT đã xác nhận. Gộp các lần xuất hiện của cùng một lỗi, ghi vào báo cáo Markdown và chuẩn bị một GitHub Issue kèm ảnh thật cho mỗi lỗi để bạn đăng.
- Hoàn thiện `automation-skill` từ kết quả áp dụng trên các tính năng. Đưa vào skill cách chuyển case, review assertion, đọc báo cáo và xử lý lỗi đã được kiểm chứng trong quá trình làm.

## Phase 5 — Rà hồ sơ và đóng gói

- Hoàn thành **báo cáo chính**, **AI Audit Report** và **AI Critique 200–300 từ**, mỗi tài liệu có bản Markdown và PDF. Báo cáo chính có bảng truy vết, tổng hợp lượt chạy, phân tích phần AI sinh, case bị chặn và link issue nếu có.
- Hoàn thành `README.md` với bảng tự chấm theo rubric, số tính năng, số case tự động hóa, số lượt thực thi và pass/fail, số lượt chạy browser, số lỗi và link demo bạn cung cấp. Thêm link minh chứng Agent Skill theo nội dung link bạn gửi. Bạn xác nhận điểm tự chấm trước khi đặt tên ZIP.
- Kiểm tra repo GitHub công khai có script, JSON và đủ báo cáo HTML. Xuất Git commit log dạng văn bản và xác minh 8 commit đủ điều kiện. Đóng gói tài liệu, báo cáo HTML cùng tệp đính kèm, skill và các link thành `23120355_HW04_AI_Automation_<ĐiểmTựChấm>.zip`, với điểm gồm ba chữ số. Mở thử ZIP, PDF, HTML và link trước khi bạn nộp Moodle. Nếu còn chờ link, gói vẫn ở trạng thái bản rà soát.
````

## 5. Triển khai Phase 1

- Công cụ AI dùng trong chat: OpenAI Codex.
- Thời gian bắt đầu: `2026-11-15T07:48:52+07:00` (UTC+07).

**Prompt**

````text
thực hiện phase 1
````

**Đầu ra triển khai**

Đầu ra của lượt này gồm cấu hình submodule, script dựng EShop riêng, cấu hình Playwright, fixture, smoke test và README. Trạng thái thực thi được ghi ở cuối phụ lục.

## Nhật ký kiểm tra Phase 1

| Artifact AI hỗ trợ | Kết quả kiểm tra | Điều chỉnh sau kiểm tra |
| --- | --- | --- |
| `.gitmodules` và `sut:prepare` | Bản clone sạch checkout đúng `85af3ba875c88283615e22cb108f13e2fccaf0e9`. `npm ci` và `npm run sut:prepare` hoàn tất. | Dùng bản EShop trong `.hw04/` để SQLite được đặt lại ở môi trường kiểm thử. Kiểm tra worktree của submodule vẫn sạch sau lượt chạy. |
| Spec smoke và fixture | Trace Chromium của bản đầu dừng ở bước mở quản lý sản phẩm. Mã nguồn Admin dùng một mục danh sách có sự kiện click. | Thay locator giả định `getByRole('button')` bằng `getByRole('listitem').filter({ hasText: /^Sản phẩm$/ })`. Dùng một tài khoản riêng mỗi test và dọn sản phẩm thử theo ID. |
| Cấu hình Playwright và lockfile | Bản 1.65.1 báo thiếu DLL khi kiểm tra Firefox và WebKit. Với 1.62.1, Firefox chạy được và WebKit vẫn thoát với `0xC0E90002`. | Ghim Playwright 1.62.1 và chọn Chrome, Edge, Firefox theo mục 6 của đề. Lệnh `npm run test:smoke` ở workspace cho kết quả 3/3 pass và thực sự đi qua backend, Web và Admin. |

Smoke test cuối từ bản clone sạch cũng đạt 3/3 pass với Chrome, Edge và Firefox. Sau lượt chạy, Git không báo thay đổi trong bản clone. `automation-skill` bổ sung bước mở thử giao diện trên từng browser trước khi chạy ma trận nghiệp vụ.

Kiểm tra trên do Codex thực hiện. Sinh viên sẽ bổ sung nhận xét và xác nhận các bản sửa trong lượt review. Báo cáo smoke chỉ phục vụ Phase 1.

## Phase 2 — Chuyển test case Checkout thành script

- Công cụ: OpenAI Codex và một subagent review độc lập. Phạm vi là viết script và kiểm tra tĩnh.

**Prompt**

```text
Hãy thực hiện phase 2 (hiện tại chỉ tạo script và double-check lại) và tạo một subagent để review lại. Sau khi xong tôi sẽ yêu cầu bạn chạy sau
```

**Đầu ra và điều chỉnh sau review**

- [Bảng truy vết](docs/phase-2-cases.md) có 36 mã duy nhất, 12 mã mỗi tính năng. Đã bổ sung các kỳ vọng HW02 còn thiếu về dữ liệu giữ nguyên và kiểm tra sau tải lại.
- [Spec pilot](tests/checkout/pilot.spec.ts) và [JSON dữ liệu](tests/data/checkout-pilot.json) dành cho `TC-B08-001`, `TC-B08-003` và `TC-B08-004`. Review phát hiện bản đầu của `TC-B08-004` chỉ kiểm tra spinbutton. Bản sửa xác nhận vùng tổng tiền tồn tại duy nhất và kiểm tra các trường nhập trong vùng theo markup của SUT đã ghim.
- Kiểm tra cú pháp TypeScript, số lượng mã case và phép tính dữ liệu bằng kiểm tra tĩnh. Chưa chạy Playwright. Phản hồi rà soát của sinh viên đang chờ.

### Lượt chạy pilot theo yêu cầu sinh viên

Prompt: `Thực hiện chạy đi`

Lệnh: `npm.cmd exec -- playwright test tests/checkout/pilot.spec.ts --project=chrome`

Kết quả thực tế: `TC-B08-001` Pass, `TC-B08-003` Pass, `TC-B08-004` Fail. Trường tổng tiền hiển thị 200000 nhưng được Playwright xác định là có thể chỉnh sửa. Xác nhận lỗi giao diện theo FR-08. Báo cáo tại `playwright-report/index.html` có ảnh và trace của case fail.

## Phase 3 — Hoàn thành bộ spec và review

**Công cụ**: OpenAI Codex và subagent review độc lập.

**Prompt**

```text
Vậy hãy thực hiện phase 3. Tạo subagent reivew và rút ra observation (nếu có) và nếu nó hay or thực sự cần thiết thì cập nhật cho skills. Báo cáo review của subagent cho tôi.
```

**Đầu ra và kiểm tra**

- Playwright liệt kê 36 case Web ở 9 spec nghiệp vụ, đủ 12 mã cho mỗi FR. Dữ liệu nằm trong `tests/data/`.
- Lượt Checkout trên Chrome thực thi đủ 12 case, 10 pass và 2 fail. `TC-B08-002` xác minh đơn được tạo đúng tổng, nhưng giỏ còn hàng trong cùng phiên sau khi đặt. `TC-B08-004` tiếp tục fail vì trường tổng có thể chỉnh sửa.
- Lượt Chrome kiểm tra cả 36 bị từ chối ở bước cấp quyền chạy. Profile và Admin hiện mới có kiểm tra tĩnh.

**Báo cáo subagent**

| Phát hiện | Điều chỉnh |
| --- | --- |
| B08-017 so đúng thứ tự hiển thị dù FR-08 chỉ yêu cầu đủ hàng. | So khớp các dòng kể cả số lần lặp và kiểm tra tổng tiền. |
| Các case từ chối số điện thoại buộc một câu lỗi cụ thể. | Bỏ so khớp câu lỗi chính xác và kiểm tra dữ liệu lưu sau tải lại. Spec dùng alert của SUT đã ghim làm tín hiệu xử lý xong. |
| Admin có thể hiển thị sai tạm thời, rồi hiển thị đúng sau reload. | Kiểm tra danh sách cả trước và sau reload khi sửa/xóa. Kiểm tra danh mục qua form sửa vì bảng không có cột danh mục. |
| Case từ chối có thể fail sai nếu luôn chờ request mà UI chặn trước. | Phân biệt chặn native và nhánh gửi POST của SUT đã ghim. B08-018 có nhánh chuyển đến trang đăng nhập và nhánh backend từ chối. |

Các nguyên tắc về đối chiếu danh sách, kiểm tra trạng thái trong phiên và chờ tín hiệu xử lý đã được bổ sung vào `automation-skill`. Sinh viên sẽ xác nhận nhận xét review trước khi nộp.


