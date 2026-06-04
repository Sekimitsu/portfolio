export type Work = {
    type: string;
    title: string;
    skills: string[];
    url: string;
    image: string[];
    text: string;
    single: boolean;
    slug?: string;
}

export const worksData: Work[] = [
    {
        type: '2026 / E-Commerce',
        title: 'ハンドメイドアイテム販売<br />ECサイト',
        skills: ['Next.js', 'Shopify Storefront API', 'TypeScript', 'SCSS', 'Figma'],
        url: 'https://aegis-service-system.com/',
        image: ['/ec_image.png'],
        text: `
            個人開発としてハンドメイドアイテムを販売するECサイトを制作。
            Next.jsとShopify Storefront APIを活用して商品管理・注文管理・決済機能を構築し、運営者が管理しやすい仕組みを実現しました。
            また、レスポンシブ対応や商品検索機能を実装し、ユーザーが快適に利用できるECサイトを目指しました。
        `,
        single: false,
    },
    {
        type: '2024 / WordPress',
        title: 'Web・IT総合支援会社<br />コーポレートサイト リニューアル',
        skills: ['HTML', 'SCSS', 'JavaScript', 'WordPress', 'ACF', 'Figma'],
        url: 'https://aegis-service-system.com/',
        image: ['/aegis_hp.png'],
        text: `
            Webサイトの実装を担当。
            SVGアニメーションを多用した動きのあるサイトの実装に加え、WordPressのカスタム投稿を活用して更新しやすい運用環境を構築し、進捗管理や共同編集など小規模チーム開発にも携わりました。
        `,
        single: false,
    },
    {
        type: '2024 / WordPress',
        title: '販売代理店・営業支援会社<br />コーポレートサイト',
        skills: ['HTML', 'SCSS', 'JavaScript', 'WordPress', 'Figma'],
        url: 'https://equal-inc-service.com/',
        image: ['/equal_hp.png'],
        text: `
            販売代理店・営業支援事業を展開する企業のコーポレートサイトを制作。
            WordPressのカスタマイズとフロントエンド実装を担当し、パララックスを活用した奥行きの表現を意識したサイトに仕上げました。
        `,
        single: false,
    },
    {
        type: 'Web Application',
        title: 'タスク管理アプリ',
        skills: ['React.js', 'Next.js', 'TypeScript', 'SCSS', 'Figma', 'Vercel'],
        url: 'https://task-management-three-flax.vercel.app/',
        image: ['/todo_app.png'],
        text: `
            タスク管理アプリの制作。
            Next.jsを使用して、タスクの追加、編集、削除、完了状態の管理を行うアプリを実装しました。
            ログイン機能を実装し、ユーザーごとにタスクを管理。また、グラフ機能を実装し、タスクの進捗状況を可視化。
        `,
        single: false,
    },
    {
        type: 'Web Application',
        title: '顧客管理ダッシュボードアプリ',
        skills: ['React.js', 'Next.js', 'TypeScript', 'SCSS', 'Figma', 'Vercel', 'Firebase'],
        url: 'https://dashboard-one-tawny-43.vercel.app/login',
        image: ['/dashboard_app.png'],
        text: `
            顧客管理ダッシュボードアプリの制作。
            顧客の表示、管理に加えて、売上の前年比・目標比で表示することで、売上の推移を確認できるようにしました。
            また、顧客ごとに案件進捗やタスク、ログを残せるような機能を実装。
            データはFirebaseを使用して管理し、データの変更はFirebaseのデータベースに反映。
        `,
        single: false,
    },
    {
        type: 'Web Application',
        title: 'バドミントン試合管理アプリ',
        skills: ['React.js', 'TypeScript', 'Vercel'],
        url: 'https://shuttle-match-three.vercel.app/',
        image: ['/badminton_app.png'],
        text: `
            バドミントンの試合組み合わせを表示するアプリを実装。
            オプションとして、試合参加の割合、休憩、途中退出の設定ができるようにしました。
            実際に使用しフィードバックをもらうことで、改善点を修正しつつ開発体験を積みました。
        `,
        single: false,
    },
]