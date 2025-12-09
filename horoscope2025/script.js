const luckitem = ['マグカップ', 'ハンドクリーム', 'メモ帳', 'アロマキャンドル', 'キーケース', 'ステンレスボトル', 'シンプルなリング', '黒いボールペン', '透明グラス', '方眼ノート', '小皿', 'マフラー']

const luckNumber = [17, 4, 23, 12, 39, 8, 31, 6, 44, 11, 28, 15];

const luckColor = ["ライトグレー", "ミントグリーン", "パステルイエロー", "コーラルピンク", "オレンジブラウン", "シルバーグレー", "ラベンダー", "ダークパープル", "スカイブルー", "ブルーグレー", "ターコイズブルー", "ローズベージュ"];

const luckText = [
    "今日は深呼吸から始めてみて。気持ちがすっと整いそう。",
    "ちいさな「好き」を大切にすると、運気がふんわり上向きに。",
    "ゆっくりで大丈夫。あなたのペースがいちばんの近道。",
    "なんとなく選んだ方が、実は正解だったりする日。",
    "やさしい言葉が、思っている以上に届きそう。",
    "少し休むことも前進のひとつ。自分に甘くして",
    "楽しそう、で選んでみて。素敵な流れに乗れそう。",
    "いつもより丁寧に過ごすと、いい発見がありそう。",
    "大丈夫、ちゃんと進んでる。自信を持って。",
    "身近な人との会話に、ほっとするヒントがありそう。",
    "気分転換が開運アクション。景色を変えてみて。",
    "頑張りすぎなくていい日。自然体がいちばん魅力的。"
];

console.log(luckText);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        //配列を入れ替え
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffle(luckText);
shuffle(luckNumber);
shuffle(luckitem);
shuffle(luckColor);

const btn = document.querySelectorAll('button');
console.log(btn);

const result = document.querySelector('.result');
console.log(result);

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {

        btn[i].classList.toggle('is-rotate');

        btn[i].querySelector('.seizas-back').innerHTML =

            `<p>${luckText[i]}</p>
            <h2>ラッキーナンバー</h2>
        <p>${luckNumber[i]}</p>
        <h2>ラッキーアイテム</h2>
        <p>${luckitem[i]}</p>
        <h2>ラッキーカラー</h2>
        <p>${luckColor[i]}</p>`;

    });
}
