# AI Audit Report — HW04

MSSV `23120355` · `HW04-AI`.

> I use AI tools for the following tasks.

Bản ghi tổng hợp từ chat Codex. Transcript giữ prompt, phản hồi và thời điểm của từng lượt. Các mục theo phase ghi kết quả kỹ thuật và bản sửa. Phần nhận xét, xác nhận của sinh viên vẫn đang chờ.

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

### Kết quả chạy lại trên Chrome

Prompt: `Hãy chạy 36 test case trên Chrome mà lần trước bị từ chối.`

Lượt chạy bắt đầu lúc `2026-11-15T08:24:03+07:00`. Chạy đủ 36 case trong khoảng 2 phút 24 giây, kết quả 23 pass và 13 fail.

| Tính năng | Pass | Fail | Quan sát |
| --- | ---: | ---: | --- |
| FR-04 | 6 | 6 | Quy tắc số điện thoại sai làm từ chối số hợp lệ và cản thao tác lưu tên/địa chỉ. Case số bắt đầu bằng 1 được lưu. |
| FR-08 | 10 | 2 | Giỏ còn hàng sau khi đặt đơn và trường tổng tiền cho chỉnh sửa. |
| FR-15 | 7 | 5 | Lưu được tên 256 ký tự và giá trống/0/âm. Khi sửa tên một sản phẩm, các dòng khác hiển thị sai ngay sau lưu và đúng trở lại sau tải lại. |

Báo cáo HTML: `.hw04/phase3/chrome-report/index.html`. Kết quả JSON: `.hw04/phase3/chrome.json`. Chưa chạy ma trận đa trình duyệt Phase 4.

## Phase 4 — Thực thi ma trận

Prompt: `Thực hiện phase 4`

Codex chạy `npm run test:matrix -- --student-id 23120355 --operator Codex`, bắt đầu lúc `2026-11-15T08:29:19.066+07:00`. Chạy đủ 108 lượt từ 36 case trên Chrome, Edge và Firefox. Kết quả 69 pass, 39 fail; cùng 13 case fail trên cả ba trình duyệt. Đã mở 9 báo cáo để xác nhận MSSV, thời gian ISO và người thực hiện hiện trên giao diện.

Rà ảnh đính kèm cho thấy ảnh mặc định của Admin có thể bỏ sót dòng vừa tạo ở cuối bảng. Bổ sung chụp đúng dòng đã lưu sau tải lại cho các case dữ liệu không hợp lệ. Soạn 6 bản nháp GitHub Issues từ kết quả đã xác nhận.

- [Kết quả và 9 báo cáo](docs/phase-4-results.md)
- [Sáu GitHub Issues đã đăng và ảnh bằng chứng](docs/phase-4-bug-drafts.md)

## Đối chiếu đầu ra AI trước khi sinh viên xác nhận

| Artifact | Rà soát kỹ thuật | Điều chỉnh hoặc bằng chứng |
| --- | --- | --- |
| Cấu hình Playwright và smoke | INCOMPLETE ở bản đầu | Locator Admin đổi theo markup. Cấu hình báo cáo dùng bộ Chrome, Edge, Firefox sau khi xác minh tương thích. |
| Spec nghiệp vụ | INCOMPLETE ở bản đầu | Review độc lập sửa assertion thứ tự dòng và chốt thời điểm xác minh dữ liệu lưu. |
| Ảnh lỗi Admin | INCOMPLETE ở lượt đầu | Bổ sung capture đúng dòng mới và khung hình từ trace trong trạng thái lỗi. |
| 9 báo cáo ma trận | VALID theo đối chiếu kỹ thuật | Mở 9 báo cáo và đối chiếu MSSV, timestamp ISO, người thực hiện, số lượt và 13 mã case fail nhất quán. |

Trong bốn nhóm trên, một nhóm đạt khi kiểm tra và ba nhóm cần sửa hoặc bổ sung bằng chứng. Đây là kết quả rà soát kỹ thuật của Codex. Sinh viên cần tự duyệt các kết luận, chỉnh bản AI Critique và xác nhận nội dung trước khi nộp.

## Phụ lục transcript từ Phase 1 đến Phase 5

Phần này giữ nguyên nội dung prompt và phản hồi cuối lấy từ chat Codex. Mốc giờ ghi theo UTC+07. Các kết quả kỹ thuật và bản sửa nằm ở các mục phía trước.

### Lượt 5 · 2026-11-15T07:48:52+07:00

**Công cụ** OpenAI Codex

**Prompt**

````text
thực hiện phase 1
````

**Đầu ra**

````text
**Phase 1 hoàn tất.** Smoke test đạt **3/3 pass trên Chrome, Edge và Firefox** ở cả workspace hiện tại và bản clone sạch. Test xác minh backend hoạt động, tài khoản thử đăng nhập được và cùng một sản phẩm thử hiển thị trên Web khách hàng lẫn Web Admin. [Báo cáo smoke](D:/university/software-testing/HW04/playwright-report/index.html)

- Đã cấu hình submodule EShop và xác minh bản clone sạch lấy đúng commit `85af3ba`. Test chạy trên bản sao riêng trong `.hw04/` vì backend đặt lại SQLite khi khởi động. [Hướng dẫn dựng và chạy](D:/university/software-testing/HW04/README.md)
- Đã ghim **Playwright 1.62.1** và đổi sang bộ **Chrome, Edge, Firefox** được đề chấp nhận vì Windows chặn WebKit khi khởi chạy.
- Đã bắt đầu [AI Audit Report](D:/university/software-testing/HW04/AI_Audit_Report.md) và bổ sung bước smoke đa trình duyệt vào [automation-skill](D:/university/software-testing/HW04/skills/automation-skill/SKILL.md).

Các thay đổi đang ở workspace, chưa commit hoặc push. Bộ case nghiệp vụ thuộc Phase 2 trở đi.
````

### Lượt 6 · 2026-11-15T08:04:24+07:00

**Công cụ** OpenAI Codex

**Prompt**

````text
Hãy thực hiện phase 2 (hiện tại chỉ tạo script và double-check lại) và tạo một subagent để review lại. Sau khi xong tôi sẽ yêu cầu bạn chạy sau
````

**Đầu ra**

````text
Đã hoàn tất phần viết và review tĩnh của **Phase 2**. **Chưa chạy Playwright.**

- [Bảng truy vết](D:/university/software-testing/HW04/docs/phase-2-cases.md) có **36 case Web duy nhất**, 12 case cho mỗi tính năng. 33 case ngoài nhóm pilot chờ viết script ở Phase 3.
- [Script pilot Checkout](D:/university/software-testing/HW04/tests/checkout/pilot.spec.ts) gồm `TC-B08-001`, `TC-B08-003` và `TC-B08-004`, dùng [dữ liệu JSON riêng](D:/university/software-testing/HW04/tests/data/checkout-pilot.json).
- Subagent đã review độc lập. Mình bổ sung các kỳ vọng còn thiếu từ HW02 và siết assertion của `TC-B08-004` để locator lệch không làm test pass nhầm. Cú pháp TypeScript, số lượng mã case và phép tính dữ liệu đã được kiểm tra tĩnh. [AI Audit Report](D:/university/software-testing/HW04/AI_Audit_Report.md)

Mã nguồn EShop hiện cho phép nhập trực tiếp vào trường tổng tiền, nên dự kiến `TC-B08-004` sẽ fail. Kết quả thực tế chờ lượt chạy bạn yêu cầu sau.
````

### Lượt 7 · 2026-11-15T08:09:12+07:00

**Công cụ** OpenAI Codex

**Prompt**

````text
Thực hiện chạy đi
````

**Đầu ra**

````text
Pilot Checkout trên **Chrome** hoàn tất với **2 pass, 1 fail**.

| Test case | Kết quả | Quan sát |
|---|---|---|
| `TC-B08-001` | Pass | Hiển thị đúng sản phẩm, số lượng 2 và tổng 200.000 ₫. |
| `TC-B08-003` | Pass | Khách chưa đăng nhập được chuyển đến trang đăng nhập khi bấm thanh toán. |
| `TC-B08-004` | Fail | Tổng hiển thị đúng 200.000 ₫, nhưng ô tổng tiền vẫn cho chỉnh sửa, trái yêu cầu FR-08. |

Mình giữ nguyên assertion của case fail và ghi nhận lỗi giao diện trong [bảng truy vết](D:/university/software-testing/HW04/docs/phase-2-cases.md). [Báo cáo Playwright](D:/university/software-testing/HW04/playwright-report/index.html) có ảnh chụp và trace. Lượt pilot này chỉ chạy trên Chrome.
````

### Lượt 8 · 2026-11-15T08:10:41+07:00

**Công cụ** OpenAI Codex

**Prompt**

````text
be với fe có đang chạy không vậy??
````

**Đầu ra**

````text
Hiện cả ba dịch vụ đều đã dừng. Mình kiểm tra và thấy không có tiến trình nào lắng nghe trên các cổng `3000` (backend), `5173` (Web khách hàng) và `5174` (Web Admin).

Playwright tự khởi động các dịch vụ khi chạy test và tự dừng chúng sau khi kết thúc.
````

### Lượt 9 · 2026-11-15T08:12:12+07:00

**Công cụ** OpenAI Codex

**Prompt**

````text
Phase 3 là bắt đầu chạy automate 36 test cases à??
````

**Đầu ra**

````text
**Phase 3 là hoàn thành bộ 36 test case tự động.** Hiện đã có 3 script pilot Checkout và cả 3 đã được chạy trên Chrome. Sang Phase 3, mình sẽ viết **33 case còn lại**, review và chạy kiểm tra từng nhóm trên Chrome để phát hiện lỗi script sớm.

**Phase 4 mới chạy chính thức đủ 36 case trên Chrome, Edge và Firefox**, với **108 lượt case–trình duyệt dự kiến** và **9 báo cáo HTML**.
````

### Lượt 10 · 2026-11-15T08:13:23+07:00

**Công cụ** OpenAI Codex

**Prompt**

````text
Vậy hãy thực hiện phase 3. Tạo subagent reivew và rút ra observation (nếu có) và nếu nó hay or thực sự cần thiết thì cập nhật cho skills. Báo cáo review của subagent cho tôi.
````

**Đầu ra**

````text
Đã viết đủ **36 test case Playwright**, mỗi tính năng 12 case. Playwright liệt kê đúng 36 mã trong [bảng truy vết](D:/university/software-testing/HW04/docs/phase-2-cases.md). Có **8 commit triển khai spec** trên repo cục bộ, chưa push.

**Kết quả thực thi:** Checkout chạy đủ 12 case trên Chrome, **10 pass và 2 fail**. `TC-B08-002` xác nhận đơn được tạo đúng tổng nhưng giỏ vẫn còn hàng. `TC-B08-004` xác nhận trường tổng tiền vẫn chỉnh sửa được. Lượt chạy cả 36 case bị từ chối ở bước cấp quyền, nên **24 case Hồ sơ và Admin mới được kiểm tra tĩnh**. [Báo cáo Checkout](D:/university/software-testing/HW04/playwright-report/index.html)

### Review độc lập của subagent

| Phát hiện | Điều chỉnh |
|---|---|
| Checkout kiểm tra cả thứ tự dòng dù đặc tả chỉ yêu cầu đủ hàng. | So đúng nội dung và số lần xuất hiện, đồng thời kiểm tra tổng tiền. |
| Case từ chối số điện thoại phụ thuộc vào một câu báo lỗi cụ thể. | Bỏ so khớp câu lỗi và kiểm tra dữ liệu đã lưu sau tải lại. |
| Admin có thể hiển thị sai ngay sau lưu rồi trông đúng sau tải lại. | Kiểm tra danh sách ở cả hai thời điểm. |
| Chờ request trong mọi case từ chối có thể làm test timeout khi form chặn ngay trên UI. | Nhận diện chặn native và ghi rõ nhánh gửi request của phiên bản EShop đang kiểm thử. |

Mình đã đưa các nguyên tắc dùng lại được vào [automation-skill](D:/university/software-testing/HW04/skills/automation-skill/SKILL.md) và ghi chi tiết trong [AI Audit Report](D:/university/software-testing/HW04/AI_Audit_Report.md). **Phần còn lại của Phase 3 là chạy lại bộ 36 case trên Chrome sau các bản sửa review.**
````

### Lượt 11 · 2026-11-15T08:23:49+07:00

**Công cụ** OpenAI Codex

**Prompt**

````text
Hãy chạy 36 test case trên Chrome mà lần trước bị từ chối.
````

**Đầu ra**

````text
Đã chạy đủ **36 test case trên Chrome** trong **2 phút 24 giây**. Kết quả **23 pass, 13 fail**, không có case bị bỏ qua. [Báo cáo Playwright](D:/university/software-testing/HW04/.hw04/phase3/chrome-report/index.html)

| Tính năng | Pass | Fail | Hành vi ghi nhận |
|---|---:|---:|---|
| FR-04 Hồ sơ cá nhân | 6 | 6 | Từ chối số điện thoại hợp lệ và chặn cả thao tác lưu tên, địa chỉ. Chấp nhận số bắt đầu bằng `1`. |
| FR-08 Thanh toán | 10 | 2 | Tổng tiền có thể chỉnh sửa. Giỏ vẫn còn hàng sau khi đặt đơn thành công. |
| FR-15 Quản lý sản phẩm | 7 | 5 | Lưu được tên 256 ký tự và giá trống, bằng 0 hoặc âm. Khi đổi tên một sản phẩm, các dòng khác hiển thị sai tên cho đến khi tải lại. |

Báo cáo có ảnh chụp và trace cho các case fail. Mình đã ghi kết quả vào [AI Audit Report](D:/university/software-testing/HW04/AI_Audit_Report.md). Lượt này chỉ chạy Chrome.
````

### Lượt 12 · 2026-11-15T08:28:06+07:00

**Công cụ** OpenAI Codex

**Prompt**

````text
Thực hiện phase 4
````

**Đầu ra**

````text
**Phase 4 hoàn tất.** Đã chạy 36 test case trên Chrome, Edge và Firefox, tổng cộng **108 lượt thực thi: 69 pass, 39 fail, 0 bỏ qua**. Cùng 13 case fail trên cả ba trình duyệt. [Kết quả và 9 báo cáo HTML](D:/university/software-testing/HW04/docs/phase-4-results.md)

| Tính năng | Pass mỗi trình duyệt | Fail mỗi trình duyệt |
|---|---:|---:|
| FR-04 Hồ sơ cá nhân | 6 | 6 |
| FR-08 Thanh toán | 10 | 2 |
| FR-15 Quản lý sản phẩm | 7 | 5 |

Mình đã mở cả 9 báo cáo để kiểm tra `Run by: 23120355`, timestamp ISO và `Operator: Codex` hiển thị đúng. Các lượt fail được gộp thành **6 lỗi EShop có ảnh bằng chứng**. Bốn case Admin được chạy lại riêng để chụp đúng dòng sản phẩm lưu sai. [Bản nháp GitHub Issues và ảnh](D:/university/software-testing/HW04/docs/phase-4-bug-drafts.md)

Các GitHub Issues đang ở dạng bản nháp. Mình đã cập nhật [AI Audit Report](D:/university/software-testing/HW04/AI_Audit_Report.md) và bổ sung cách chụp lỗi tạm thời hoặc ngoài vùng nhìn thấy vào [automation-skill](D:/university/software-testing/HW04/skills/automation-skill/SKILL.md).
````

### Lượt 13 · 2026-11-15T08:43:40+07:00

**Công cụ** OpenAI Codex

**Prompt**

````text
đưa cái issues đó lên github đi

vậy tải githubcli đi
````

**Đầu ra**

````text
Đã cài và xác minh **GitHub CLI 2.104.0**. CLI chưa đăng nhập nên sáu issue vẫn chưa được đăng.

Mở PowerShell mới và chạy `gh auth login --hostname github.com --web`. Sau khi xác thực xong, báo mình để đăng cả sáu issue kèm ảnh bằng chứng.
````

### Lượt 14 · 2026-11-15T08:46:50+07:00

**Công cụ** OpenAI Codex

**Prompt**

````text
tôi đã đăng nhập xong rồi.
````

**Đầu ra**

````text
Đã đăng và xác minh **6 GitHub Issues** trong repo `vhthawng/software-testing-hw04`. Mỗi issue có ảnh bằng chứng được nhúng trực tiếp trong nội dung.

1. [#1 — Hồ sơ áp dụng sai quy tắc số điện thoại](https://github.com/vhthawng/software-testing-hw04/issues/1)
2. [#2 — Giỏ vẫn còn hàng sau khi thanh toán](https://github.com/vhthawng/software-testing-hw04/issues/2)
3. [#3 — Trường tổng tiền ở Checkout cho chỉnh sửa](https://github.com/vhthawng/software-testing-hw04/issues/3)
4. [#4 — Admin lưu được tên sản phẩm dài 256 ký tự](https://github.com/vhthawng/software-testing-hw04/issues/4)
5. [#5 — Admin lưu được sản phẩm với giá trống, 0 hoặc âm](https://github.com/vhthawng/software-testing-hw04/issues/5)
6. [#6 — Đổi tên một sản phẩm làm các dòng khác hiển thị sai](https://github.com/vhthawng/software-testing-hw04/issues/6)

Tám ảnh được lưu trên nhánh riêng `hw04-issue-evidence`. Mình đã cập nhật link của cả sáu issue vào [báo cáo lỗi Phase 4](D:/university/software-testing/HW04/docs/phase-4-bug-drafts.md).
````

### Lượt 15 · 2026-11-15T08:49:55+07:00

**Công cụ** OpenAI Codex

**Prompt**

````text
đưa vào main luôn. Kiểm tra xem phase 4 đã hoàn thành chưa
````

**Đầu ra**

````text
Đã push lên **`main`** tại commit [`81f8926`](https://github.com/vhthawng/software-testing-hw04/commit/81f8926). Mình đã xác minh trên nhánh có đủ **9 báo cáo HTML, 9 kết quả JSON và 8 ảnh bằng chứng** cho [6 GitHub Issues](https://github.com/vhthawng/software-testing-hw04/issues).

**Phase 4 đã hoàn thành về mặt kỹ thuật.** Cả 36 case chạy trên Chrome, Edge và Firefox, tổng cộng **108 lượt: 69 pass, 39 fail, 0 bỏ qua**. [Bảng kết quả và link báo cáo](https://github.com/vhthawng/software-testing-hw04/blob/main/docs/phase-4-results.md)

Báo cáo hiện ghi rõ `Operator: Codex`. Theo kế hoạch ban đầu, lượt lấy bằng chứng do **bạn tự chạy** vẫn còn trước khi chốt hồ sơ nộp. Lệnh đã có sẵn trong README: `npm run test:matrix -- --student-id 23120355`.
````

### Lượt 16 · 2026-11-15T08:54:34+07:00

**Công cụ** OpenAI Codex

**Prompt**

````text
Thực hiện phase 5. Không cần tạo file zip.
````

**Đầu ra**

Soạn và rà hồ sơ Phase 5 bằng Markdown và PDF. Các đầu ra được liệt kê trong README và báo cáo chính. Tình trạng xác nhận của sinh viên được ghi trong hồ sơ.

## Phase 5 — Rà hồ sơ và tách skill dùng lại

### Lượt 2026-11-15T08:54:34+07:00

**Công cụ** OpenAI Codex và ReportLab.

**Đầu ra** Báo cáo chính và AI Audit Report có bản Markdown/PDF. AI Critique có 244 từ và được đánh dấu dự thảo chờ sinh viên rà. README có bảng tự chấm nháp 75/100. Git commit log ghi 10 commit chạm spec. Link demo, lượt sinh viên tự chạy và xác nhận của sinh viên vẫn chờ. Hồ sơ được bàn giao thành các tệp riêng.

### Lượt 2026-11-15T09:06:22+07:00

**Công cụ** OpenAI Codex và CLI `skills`.

**Prompt**

````text
Về phần skills tôi cần bạn điều chỉnh. Lưu ý rằng đây là skills cho automation-testing, không phải skills cho HW04. Bạn đang đi quá cụ thể vào HW04, vậy thì làm sao tôi có thể reuse nó được? Tôi muốn phát triển thành một skills riêng ứng dụng bộ skills playwright, mà tôi đính kèm. Tức là trong automation skills của tôi phải có lệnh tải gọi nếu như bộ playwright kia không có, rồi tới các bước thực hiện như nãy giờ bạn đã apply skills có sẵn để tạo test case, phân tihcs, viết script chạy test cases. [https://github.com/testdino-hq/playwright-skill](https://github.com/testdino-hq/playwright-skill)
````

**Đầu ra**

````text
Đã viết lại [automation-skill](D:/university/software-testing/HW04/skills/automation-skill/SKILL.md) để dùng cho các dự án kiểm thử Web. Các yêu cầu riêng của HW04 như số case, MSSV và định dạng báo cáo nằm trong [README](D:/university/software-testing/HW04/README.md).

Skill kiểm tra bộ TestDino Playwright trước. Nếu chưa có, nó hướng dẫn chạy:

```sh
npx --yes skills add testdino-hq/playwright-skill --agent codex --yes
```

Sau đó, skill chọn hướng dẫn Playwright phù hợp cho từng bước: **thiết kế test case → phân tích khả năng tự động hóa → viết spec → review → chạy test → phân loại lỗi và thu bằng chứng**. [Bộ skill TestDino Playwright](https://github.com/testdino-hq/playwright-skill#install)

Mình đã chạy thử lệnh cài trong thư mục riêng. Cả **8 pack** được cài và **9 tài liệu được skill dẫn chiếu** đều có mặt. Để dùng ở dự án khác, chép thư mục `skills/automation-skill` vào `.agents/skills/` của dự án đó rồi gọi `$automation-skill`. Bản sửa hiện ở workspace, chưa push.
````

**Rà soát và điều chỉnh** Phiên bản đầu của skill buộc phạm vi, số báo cáo và định danh của HW04 vào quy trình chung. Theo phản hồi của sinh viên, chuyển yêu cầu đó sang README và hướng dẫn quy trình chung theo đặc tả của từng dự án. Chạy lệnh cài TestDino trong thư mục riêng trống. Xác minh cài được 8 pack và có đủ 9 tài liệu được dẫn chiếu. CLI báo mục chỉ mục gốc upstream không qua được YAML, nhưng cài đầy đủ các pack dùng cho quy trình.

### Lượt 2026-11-15T09:10:52+07:00

**Công cụ** OpenAI Codex, Git, GitHub CLI và ReportLab.

**Prompt**

````text
push code và cập nhật audit. Kéo toàn bộ phần skills trong .agents/skills ra folder ./skills luôn
````

**Đầu ra** Sao chép và đối chiếu SHA-256 của 95 tệp trong 8 pack từ `.agents/skills/` sang `skills/`. Bản sao có giấy phép MIT nguồn TestDino. Wrapper tìm pack đã nạp hoặc pack đã cài trước, sau đó tìm trong `skills/` của repo và cài từ upstream nếu pack cần thiết chưa có. Cập nhật bản PDF của audit cùng hồ sơ Phase 5 để đưa lên `main`.


