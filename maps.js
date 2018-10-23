function maps() {
    var arr = [15, 3, 74, 30];

    // 最初にマップ関数です。
    // これは簡単に言うと、配列中のそれぞれのアイテムに対して、何かのアクションを行うということです。
    // 例えば、この例では、それぞれのアイテムの値を５増やしています。
    // 注意していただきたいのは、マップ関数は新しく配列を作るので、arr = でしっかりそれをarrという変数の中に保存しましょう
    arr = arr.map((e) => (e += 5));
    console.log(arr);

    // 上記のマップ関数がやっていることは下記のと同じ内容になります。コードが短くなったのが確認できたでしょう。
    arr = [15, 3, 74, 30];
    result = [];
    for (e of arr) {
        result.push(e + 5);
    }

    // 今度はフィルター関数です。
    // これはその名の通り、決められた条件に沿うものだけを配列に残すということです。
    // 正確には新しい配列を作り、与えられた条件を満たすものだけをそこに入れているというのが正解ですが。
    // こちらも同じように新しい配列を作り出しているので、arr = で変数に反映させる必要があります。
    arr = [15, 3, 74, 30];
    arr = arr.filter((e) => (e >= 30));
    console.log(arr);

    // 上記と同じ内容をfor loopを使って表すと、こうなります
    arr = [15, 3, 74, 30];
    result = [];
    for (e of arr) {
        if (e >= 30) {
            result.push(e);
        }
    }

    function inRange(e) {
        if (e >= 30) {
            return true;
        } else {
            return false;
        }
    }

    // 面白いことにフィルター関数は他の関数の名前を下記のように入れることでその関数通りにフィルターしてくれます。
    // これはさっきと同じ結果が返ってきます。
    // 必ず、フィルターに使われる関数の引数が少なくとも一個あることを確認しましょう。最初の一個が配列のそれぞれのアイテムになります。
    arr = [15, 3, 74, 30];
    arr = arr.filter(inRange);
    console.log(arr);


    
    // では、少し実践的なものをやりましょう
    // まずはコードを見てみてどういうアウトプットが返ってくるのか考えてみよう！
    // 準備ができたら、次のコードのare_you_readyを真に変えて、コードを実行してみましょう！
    var are_you_ready = false;
    if (are_you_ready) {
        function isMan(e) {
            return (e.gender == 0)? true : false;
        }
        function legalAge(e) {
            return (e.age >= 20)? true : false;
        }
        function isWomanNameStartsWithH(e) {
            return (e.gender == 1 && e.name.substring(0, 1) == "H")? true : false;
        }

        var objArr = [new Person("Tatsuki", 19, 0), new Person("Haruka", 21, 1), new Person("Taro", 31, 0), new Person("Megumi", 15, 1), new Person("Haruki", 20, 0)];
        var men = objArr.filter(isMan);
        var alcoholLegal = objArr.filter(legalAge);
        var womanStartsWithH = objArr.filter(isWomanNameStartsWithH);
        console.log(objArr);
        console.log(men);
        console.log(alcoholLegal);
        console.log(womanStartsWithH);
    }
}
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender; // 0 は男, 1 は女
    }
}