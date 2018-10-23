// JavaScriptの基本的なfor loopになります
function basic() {
    var arr = [10, 9, 8];

    // 特に注意してほしいのはfor loopが2種類あるということです

    // 一つ目はinというキーワードを使います
    // このやり方ですと、iはarrの中の指数になります。この場合は0..2という感じです。
    console.log("'in'キーワードを使った一つ目開始");
    for (var i in arr) {
        console.log(arr[i]);
    }
    console.log("一つ目終了");

    // もう一つはofを使った方法になります。こちらは指数は取り出さず、
    // 直接配列の中の一つ一つのものを指します。
    // なので、ここでのeは初めから10, 9, 8という形になります。なので、直接eをconsole.log()に入れるのです。
    console.log("'of'キーワードを使った二つ目開始");
    for (var e of arr) {
        console.log(e);
    }
    console.log("二つ目終了");

    // 更にfor eachループというものが存在します。
    // これは二つ目と似ていて、指数ではなく、直接そのものを取り出します。
    // ある種の利点としてはこの方がコードが読みやすいということです。
    // inとofを見間違えるだけで上の場合は失敗してしまうので
    console.log("'forEach'を使ったfor eachループ開始");
    // ES6以前の書き方
    arr.forEach(function (e) {
        console.log(e);
    });
    // ES6以降の書き方
    arr.forEach((e) => {
        console.log(e);
    });
    console.log("for eachループ終了");
}