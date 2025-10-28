// 初期設定
const MAX_HP = 100;
const DAMAGE_MIN = 8;
const DAMAGE_MAX = 20;

//震えるアニメーション関数の定義
function shakeEnemy() {
  const enemyArea = document.querySelector('.enemy');
  enemyArea.classList.remove('hit');
  enemyArea.offsetWidth;
  enemyArea.classList.add('hit');
}

// 状態（HP）
let hp = MAX_HP;//100

// モンスター
const enemy = document.querySelector('.enemyImg');

// HP表示部分
const hpText = document.querySelector('.hpText span');
const hpBar = document.querySelector('.hpBar');

// 攻撃処理
const attackButton = document.querySelector('.attackBtn');

//効果音を取得
const seHit = document.querySelector('#se-hit');
const seDefeat = document.querySelector('#se-defeat');




//ここから書き込み
// 1.ランダムダメージの実装
attackButton.addEventListener('click', function () {
  const damage = Math.floor(Math.random() * (DAMAGE_MAX - DAMAGE_MIN
    + 1)) + DAMAGE_MIN;
  // ダメージ計算
  hp = hp - damage;
  hpText.textContent = hp;
  // 2.HP表示の更新ロジック修正（マイナス値の防止）

  if (hp <= 0) {
    hpText.textContent = 0;
    hpBar.value = 0;
    // 3.撃破時のエフェクト適用（effect - fly または effect - squash）
    enemy.classList.add('enemy--fly');
    // 4.撃破後のボタン無効化処理
    attackButton.disabled = true;
    // 変数に入れずにそのままでつなぐ書き方
    // 5.撃破メッセージの表示
    document.querySelector('.log').textContent = 'モンスターを倒した';
    seDefeat.play();
    seDefeat.currentTime = 0;
  } else {
    hpText.textContent = hp;
    hpBar.value = hp;
    // 6.攻撃時の効果を追加
    shakeEnemy();
    // 7.効果音の追加（オプション）
    seHit.play();
    seHit.currentTime = 0;
    // currentTime=現在
  }
});
// 8.リスタート機能の実装（オプション）




// ❷
// 初期設定
const MAX_HP2 = 100;
const DAMAGE_MIN2 = 8;
const DAMAGE_MAX2 = 20;

//震えるアニメーション関数の定義
function shakeEnemy() {
  const enemyArea = document.querySelector('.enemy2');
  enemyArea.classList.remove('hit2');
  enemyArea.offsetWidth;
  enemyArea.classList.add('hit2');
}

// 状態（HP）
let hp2 = MAX_HP;//100

// モンスター
const enemy2 = document.querySelector('.enemy2Img');

// HP表示部分
const hpText2 = document.querySelector('.hpText2 span');
const hpBar2 = document.querySelector('.hpBar2');

// 攻撃処理
const attackButton2 = document.querySelector('.attackBtn2');

//効果音を取得
const seHit2 = document.querySelector('#se-hit');
const seDefeat2 = document.querySelector('#se-defeat');

attackButton2.addEventListener('click', function () {
  const damage2 = Math.floor(Math.random() * (DAMAGE_MAX2 - DAMAGE_MIN + 1)) + DAMAGE_MIN;
  hp = hp - damage2;
  hpText2.textContent = hp;

  if (hp <= 0) {
    hpText2.textContent = 0;
    hpBar2.value = 0;
    // enemy2.classList.add('enemy--fly');
    // attackButton2.disabled = true;

    document.querySelector('.log2').textContent = "モンスターを倒したぞ！！！いえーい！！"
    seDefeat2.play();
    seDefeat2.currentTime = 0;

  } else {
    hpText2.textContent = hp;
    hpBar2.value = hp;
    seHit2.play();
    seHit2.currentTime = 0;

  }


});