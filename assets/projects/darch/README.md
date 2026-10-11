# Darch screenshots

Captured on October 11, 2026 from the actual Darch application in
`C:/Users/Daniel/OneDrive/Desktop/assignments` using a local server and headless
Google Chrome. The extension captures use its actual options page in Chromium.
These are browser screenshots, not generated images or mockups.

The preview copied the application assets into a disposable temporary folder and
ran its existing server handler with an isolated in-memory store. The `Jordan`
account, courses, homework, events, grades, and focus history are sample data.
No personal account, local planner store, or production data was used or changed.
The demo clock shows Friday, October 9, 2026 to demonstrate a school day.

All captures use Darch's Midnight preset (`#0B1220` background, `#60A5FA`
accent). The extension uses its matching dark palette. Screenshots are 1440 pixels
wide, saved as WebP. Most are 1080 pixels tall; the expanded extension grades view
is taller. The cover is a smaller copy of Today.

The sample Schoology payloads were processed by the extension's existing
`importRows`, `importGrades`, and `importAbsences` functions. This produced five
new assignments, one new grade, one changed score, and two matched absent
teachers, plus the app's import notifications. The extension screenshots show
those results and sample source previews in its normal UI. A local fixture stood
in for the Schoology tab; no real Schoology account was accessed.

| File | Page |
| --- | --- |
| `01.webp` | Today |
| `02.webp` | Assignments |
| `03.webp` | Calendar, week view |
| `04.webp` | Focus timer |
| `05.webp` | Grades |
| `06.webp` | SAT practice library |
| `07.webp` | SAT math topic and difficulty filters |
| `08.webp` | SAT math practice, answer elimination and review flag |
| `09.webp` | SAT Reading & Writing answer and explanation |
| `10.webp` | Vocabulary flashcard with definition revealed |
| `11.webp` | Extension sync status and upcoming assignments |
| `12.webp` | Extension grade preview, category weights and scores |
| `13.webp` | Extension teacher absences and class-meeting notes |
| `14.webp` | Extension course matching |
| `15.webp` | Imported assignment source details |
| `16.webp` | Import notifications for assignments, grades and absences |

For a refresh, use a disposable local account with sample planner data, run the
current Darch source in Midnight, and capture the same pages in Chrome. Keep filenames stable
to update the portfolio gallery without changing its project configuration.
