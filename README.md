# SONORA — 音樂知識檔案館

SONORA 是一個以深色編輯風格呈現的音樂知識網站，透過音樂類型文章與精選主題，讓讀者快速理解不同音樂風格的聲音特色與文化脈絡。

## 專案特色
- 深色 editorial 視覺系統
- 音樂類型知識文章
- 首頁分類瀏覽與即時搜尋
- 共用導覽、頁尾與響應式版型
- 以 `AGENTS.md` 定義 AI 後續開發規則

## 技術
HTML5、CSS3、Vanilla JavaScript，無需安裝套件。

## 本機預覽
直接以瀏覽器開啟根目錄的 `index.html`。若瀏覽器限制本機檔案功能，可使用 VS Code Live Server。

## GitHub Pages
1. 將整個資料夾內容上傳至 GitHub Repository。
2. 進入 Repository 的 **Settings → Pages**。
3. 在 Build and deployment 選擇 **Deploy from a branch**。
4. Branch 選 `main`，資料夾選 `/ (root)`，按 Save。
5. 等待部署完成，開啟 GitHub Pages 顯示的網址。

## 新增內容
新增頁面前請先閱讀 `AGENTS.md`。依照文章類型放入 `pages/genres/`、`pages/artists/` 或 `pages/albums/`，沿用既有頁面結構與共用樣式，並在首頁或相關內容區加入連結。
