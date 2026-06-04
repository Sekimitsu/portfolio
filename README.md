# Portfolio — Sekimitsu Masaki

フロントエンドエンジニア **関光 正輝（Sekimitsu Masaki）** のポートフォリオサイトです。  
WordPress を軸としたコーポレートサイト制作から、Next.js / TypeScript を用いた Web アプリケーション開発まで、制作実績と技術スタックを一ページで紹介します。

<!-- デプロイ後に差し替えてください -->
[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-black?style=flat-square&logo=vercel)](https://sekimitsu.com)

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-1.97-CC6699?style=flat-square&logo=sass&logoColor=white)

---

## 概要

| 項目 | 内容 |
|------|------|
| コンセプト | 「手で組む、その先の Web へ。」 |
| 対象 | 採用担当・クライアント向けの自己紹介・実績紹介 |
| 構成 | トップ（MV） / 制作実績（Works） / 技術スタック（Skills） / お問い合わせ（Contact） |
| 職種 | Front-End Engineer（Web 歴 3 年） |

受託案件（コーポレートサイト・EC）と自主制作アプリ（タスク管理・ダッシュボード・試合管理など）をカード形式で掲載し、各案件の概要・使用技術・公開 URL へ遷移できるようにしています。

---

## 主な機能

- **シングルページ構成** — ヘッダーのアンカーリンクで Works / Skills / Contact へスムーズに移動
- **スクロール進捗バー** — ページ上部に閲覧位置を示すプログレスバーを表示
- **制作実績セクション** — `WorksData.ts` で実績をデータ駆動管理（追加・編集が容易）
- **技術スタックの可視化** — Languages / CMS / Framework / Tools / Environment をカテゴリ別に表示
- **お問い合わせ** — メール・SNS リンクから連絡可能
- **レスポンシブ対応** — SCSS Modules によるコンポーネント単位のスタイリング
- **Google Fonts** — 和文（Zen Old Mincho / Zen Kaku Gothic New）と欧文（Cormorant Garamond / Space Mono）の組み合わせ

---

## 技術スタック

| 区分 | 技術 |
|------|------|
| Framework | [Next.js](https://nextjs.org/) 16（App Router） |
| UI | [React](https://react.dev/) 19 |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Sass](https://sass-lang.com/)（CSS Modules） |
| Font | Google Fonts（next/font） |
| Lint | ESLint（eslint-config-next） |
| 想定デプロイ | [Vercel](https://vercel.com/) など |

---

## ディレクトリ構成

```
portfolio-main/
├── public/                 # 静的アセット（作品サムネイル等）
├── src/
│   └── app/
│       ├── page.tsx        # トップページ（各セクションの組み立て）
│       ├── layout.tsx      # ルートレイアウト・フォント設定
│       ├── globals.css
│       ├── Header/         # 固定ヘッダー・スクロールバー
│       ├── Mv/             # メインビジュアル・自己紹介
│       ├── Works/          # 制作実績（Works.tsx / WorksData.ts）
│       ├── Skills/         # 技術スタック
│       ├── Contact/        # お問い合わせ
│       ├── Footer/
│       └── styles/         # セクション共通スタイル
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 制作実績の更新方法

実績データは `src/app/Works/WorksData.ts` で管理しています。

```ts
export const worksData: Work[] = [
  {
    type: '2026 / E-Commerce',
    title: 'ハンドメイドアイテム販売<br />ECサイト',
    skills: ['Next.js', 'Shopify Storefront API', 'TypeScript', 'SCSS', 'Figma'],
    url: 'https://example.com/',
    image: ['/ec_image.png'],  // public/ 配下のパス
    text: '...',
    single: false,
  },
  // ...
];
```

- **画像** — `public/` に PNG 等を配置し、`image` 配列に `/ファイル名.png` の形式で指定
- **外部リンク** — `single: false` のとき、カードクリックで `url` を新規タブで開く
- **詳細ページ** — `single: true` と `slug` を指定すると、将来 `/works/[slug]` 向けの内部リンクに切り替え可能

### 掲載中の実績（抜粋）

| 区分 | タイトル |
|------|----------|
| E-Commerce | ハンドメイドアイテム販売 EC サイト |
| WordPress | Web・IT 総合支援会社 コーポレートサイト リニューアル |
| WordPress | 販売代理店・営業支援会社 コーポレートサイト |
| Web App | タスク管理アプリ |
| Web App | 顧客管理ダッシュボードアプリ |
| Web App | バドミントン試合管理アプリ |

---

## デプロイ

[Vercel](https://vercel.com/) へのデプロイを想定しています。

1. GitHub リポジトリを Vercel にインポート
2. Framework Preset: **Next.js**（ビルドコマンド `npm run build`、出力は Next.js デフォルト）
3. デプロイ完了後、README 先頭の Live Demo バッジ URL を本番 URL に更新

作品サムネイル（`ec_image.png` など）は `public/` に配置してからデプロイしてください。

---

## お問い合わせ

Web 制作・フロントエンド開発のご相談は以下よりお願いします。

- **Email:** [sekimitsu0511@gmail.com](mailto:sekimitsu0511@gmail.com)
- **Instagram:** [@sekimitsu0511](https://www.instagram.com/sekimitsu0511/)
- **Threads:** [@sekimitsu_masaki](https://www.threads.com/@sekimitsu_masaki)

---

## ライセンス

本リポジトリのソースコードは、ポートフォリオ閲覧・参考目的での利用を想定しています。  
無断での再配布・商用利用はご遠慮ください。実績画像・クライアント作品の権利は各案件の権利者に帰属します。

---

© 2026 Sekimitsu Masaki
