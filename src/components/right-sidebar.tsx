export default function RightSidebar() {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-center bg-indigo-600 text-white p-2">
        プロフィール
      </h1>
      <h1 className="border-2 border-indigo-500/30 p-3 my-2">
        <p>モダンWebアプリ開発と良いテストに興味があります。</p>
        <p>QAエンジニア：7割、バックエンド開発：3割くらいの人です。</p>
        <p>組み込み系からWeb系へ移行しました。</p>
        <p>趣味はピアノ。キーを叩くことが好き。ショパンとかモーツァルトとかクラシックが好きです。</p>
      </h1>

      <h1 className="text-2xl text-center bg-indigo-600 text-white p-2">
        スキル
      </h1>
      <h1 className="border-2 border-indigo-500/30 p-3 my-2">
        <p className="text-xl">【開発言語】</p>
        <p>★★★：TypeScript/JavaScript/Next.js/React、HTML/CSS</p>
        <p>★★：Laravel/php</p>
        <p>★★：SQL/MySQL/BigQuery</p>
        <p>★★：Shell/bash</p>
        <p>★★★：VBA</p>
        <p className="text-xl">【テストツール】</p>
        <p>Postman、Swagger、PictMaster、Charlse</p>
        <p className="text-xl">【クラウドサービス】</p>
        <p>Xserver、AWS、GCP、Firebaseをいろいろ試しています。</p>
      </h1>

      <h1 className="text-2xl text-center bg-indigo-600 text-white p-2">
        Get in Touch
      </h1>
      <h1 className="border-2 border-indigo-500/30 p-3 my-2">
        <a className="text-2xl hover:text-indigo-300"
          href="https://kabuboard2.0gravity0.com/">
            Zennダッシュボード
        </a>
        <p>主に自分のメモ用にzennを使っています。</p>
        <a className="text-2xl hover:text-indigo-300"
          href="https://github.com/ai-biz20-sasaki?tab=repositories">
            Github
        </a>
        <p>aibizsasakiのリポジトリ</p>
        <a className="text-2xl hover:text-indigo-300"
          href="https://twitter.com/ai_biz20_sasak">
            twitter
        </a>
        <p>twitter aibizsasaki</p>
        <a className="text-2xl hover:text-indigo-300"
          href="https://www.youtube.com/@aibizsasaki/featured">
            YouTube
        </a>
        <p>youtube aibizsasaki</p>
      </h1>

    </div>    
  )
}
