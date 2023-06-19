export default function LeftSidebar() {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-center bg-indigo-600 text-white p-2">
        作品一覧
      </h1>

      <h1 className="text-center border-2 border-indigo-500/30 p-3 my-2">
        <a className="text-2xl hover:text-indigo-300"
          href="https://videolibrary.0gravity0.com/">
            Video Libraly
        </a>
        <p>Amazon Prime Videoをスクレイピングして表示するWebサイト</p>
        <p>Laravel/PHP+MySQL</p>
      </h1>

      <h1 className="text-center border-2 border-indigo-500/30 p-3 my-2">
        <a className="text-2xl hover:text-indigo-300"
          href="https://kabuboard2.0gravity0.com/">
            Kabuboard
        </a>
        <p>Yahooファイナンスをスクレイピングし株価を表示などするWebサイト</p>
        <p>Laravel/PHP+MySQL</p>
      </h1>

      <h1 className="text-center border-2 border-indigo-500/30 p-3 my-2">
        <a className="text-2xl hover:text-indigo-300"
          href="https://resume-0gravity.an.r.appspot.com/">
            Resume
        </a>
        <p>履歴書の作成支援Webサイト</p>
        <p>vue.js/JavaScript+Flask/python+GCP(GAE+Datastore)</p>
      </h1>

    </div>    
  )
}
