# 2048 深色主題網頁版

一個可在瀏覽器直接遊玩的 2048 數字方塊遊戲，目標是提供流暢滑動動畫、深色主題切換與最高分紀錄。

## 功能特色

- 經典 2048 遊戲玩法（鍵盤方向鍵與手機滑動）
- 深色主題（可切換並記住偏好）
- 方塊滑動與合併動畫
- 目前分數與最高分顯示（最高分持久化）
- 純前端靜態網站，適合 GitHub Pages

## 技術堆疊

- HTML5
- CSS3
- Vanilla JavaScript
- localStorage（保存主題與最高分）

## 本機執行

1. 直接開啟 `index.html`
2. 或在專案根目錄啟動靜態伺服器：

```bash
python3 -m http.server 8000
```

3. 於瀏覽器開啟 `http://localhost:8000`

## 部署

- 目標平台：GitHub Pages
- 設定方式：Repository Settings → Pages → Deploy from branch（`main` / `/ (root)`）
- 預期網址：`https://aw-apps.github.io/2048-dark-web/`

## 驗證重點

- 可以正常開始、移動、合併方塊
- 深色主題切換後重新整理仍保留
- 最高分在重新整理後仍保留
