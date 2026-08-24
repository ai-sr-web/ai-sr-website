export async function onRequest() {
  const targetUrl = 'https://www.mhlw.go.jp/stf/news.rdf';
  
  // 厚生労働省のサイトからデータを取得
  const response = await fetch(targetUrl);
  const xml = await response.text();

  // 取得したデータをそのまま自分のホームページに返す
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
