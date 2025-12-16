// ボタンを押す
const button = document.querySelector('.loadBtn');
const result = document.querySelector('.box');
// 読み込み中は「読み込み中…」を表示
constloadweather = () => {
    result.innerHTML = `読み込み中...`;
}

// fetchで APIにアクセス
// JSONを解析
fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json')
    .then(function (response) {
        // 取得したJSONをオブジェクトに変換する
        return response.json();
    })

    .then(function (json) {
        // 必要な情報だけ取り出す
        // document.body.textContent = json.stringify(json);
        const weather = json[0].timeSeries[0].areas[0].weathers[0]// 天気：晴れ
        const maxTemp = json[0].timeSeries[2].areas[0].temps[0]// 最高気温：12℃
        const minTemp = json[0].timeSeries[2].areas[0].temps[1]// 最低気温：12℃
        const popAm = json[0].timeSeries[1].areas[0].pops[0]// 降水確率（午前）：0 %
        const popPm = json[0].timeSeries[1].areas[0].pops[1]// 降水確率（午後）：0 %

        button.addEventListener('click', () => {
            // console.log('ボタンが押されました');
            // HTMLに表示する
            result.innerHTML = `<ul>
<li>天気：${weather}</li>
<li>最高気温：${maxTemp}℃</li>
<li>最低気温：${minTemp}℃</li>
<li>降水確率（午前）：${popAm} %</li>
<li>降水確率（午後）：${popPm} %</li>
</ul>`
        });
    });

// .catch (function (error) {
//     console.error('エラーが発生しました', error);
// });




// async / awaitで書き直す