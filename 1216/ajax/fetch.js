// htmlから表示する要素を取得
const result = document.getElementById('.resultFetch');

// 関数化
const loadNews = function () {
    fetch('./news.json')
        .then(function (result) {
            // jsonメソッドでJSONデータをオブジェクトに変換して返す
            // １つ目の,then()の戻り値が次のthen()の引数になる
            return result.json();
        })
        .then(function (json) {
            const ajaxArea = document.querySelector('.resultFetch');
            ajaxArea.textContent = json.news;
        })
        .catch(function (error) {
            console.log(error);
        });
};
// 関数の実行
// loadNews();

// clickイベントに追記
const loadAjaxBtn = document.querySelector('.loadAjaxBtn');
loadAjaxBtn.addEventListener('click', function () {
    loadNews();
});
