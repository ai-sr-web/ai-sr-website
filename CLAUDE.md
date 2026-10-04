# Ai社会保険労務士事務所 ホームページ

## 概要
- サイト名:Ai社会保険労務士事務所
- 公開URL:https://ai-sr-office.com/
- 種類:静的サイト(HTML/画像のみ。ビルド作業なし)
- GitHub:ai-sr-web/ai-sr-website

## フォルダ構成
- リポジトリの直下がそのまま公開される(public/のような仕切りはない)
  - index.html(トップ)
  - di.html / dx.html / joseikin.html / kisoku.html /
    media.html / roumu.html / tetsuzuki.html
  - 画像、robots.txt、sitemap.xml
- wrangler.jsonc … Cloudflareの設定("directory": "./")
- .github/workflows/update-news.yml … 無効化済み(下記)
- news.json … 表示には使われていない(下記)

## 公開の仕組み
- GitHubに push すると、Cloudflareが自動で `npx wrangler deploy` を
  実行して公開する(ブランチは main)。
- 手動での公開コマンドは不要。

## ニュース欄の仕組み
- index.html のニュース欄は、別のCloudflare Worker(mhlw-news-api)から
  取得している。このリポジトリの news.json は読んでいない。
- mhlw-news-api はこのリポジトリとは別管理。触らない。
- update-news.yml(毎朝 news.json を更新)はGitHub上で無効化済み。
  ニュース欄が正常なら、10月中旬ごろに update-news.yml と
  news.json の削除を検討する。

## 作業の前に
- 必ず最初に `git pull` を実行する(自動更新などで
  GitHubのほうが新しいことがあるため)

## 絶対に守るルール
- wrangler.jsonc の場所・中身を変えない
- .git、.github は触らない
- リポジトリの中に、旧版・下書き・古い画像・業務資料を置かない
  (直下がそのままWebに公開されるため)。不要なものは
  Desktop/Archive/ に移す
- ファイルの削除・移動は、実行前に一覧を見せて許可を得る
- git push(公開)の前に、何を変更したか日本語で説明して許可を得る
- パスワードやAPIキー、フォームの送信先URLをCLAUDE.mdに書かない

## 作業メモ
(進行中の作業をここに書く。区切りごとに更新する)
- canonical / og:url が workers.dev のままになっている。
  https://ai-sr-office.com/ への修正を検討中(sitemap.xml も確認)
