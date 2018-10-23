function operators() {
    var arr = [12, 16, 11];
    
    // pushは配列の後ろに新しいアイテムを足してくれます。
    arr.push(13);
    console.log("pushした後");
    console.log(arr);

    // shiftは配列の中の最初のアイテムを配列から取り除き、返してきてくれます。
    var result = arr.shift();
    console.log("shiftした後");
    console.log(result);
    console.log(arr);

    // popは配列の中の最後のアイテムを配列から取り除き、返してくれます。
    result = arr.pop();
    console.log("popした後");
    console.log(result);
    console.log(arr);

    arr.push(12);
    arr.push(13);

    // spliceは指定した指数の位置から好きなだけアイテムを取り除き、配列として返してくれます。
    // 二個目の引数が何個取り出すかを指定してくれます。
    console.log("spliceする前");
    console.log(arr);
    result = arr.splice(1, 1);
    console.log("spliceした後");
    console.log(result[0]);
    console.log(arr);

    // spliceは使い方を工夫することでJavaScriptに存在しないinsertの役割も果たしてくれます。
    // 下のように、spliceの中の一個目が指数、二個目を0とすることで、何も取り除かず、三個目はそこに何を入れるかです。
    // これで配列の頭としっぽだけでなく途中にもアイテムを追加することができるようになります。
    arr.splice(1, 0, 11);
    console.log("insertした後");
    console.log(arr);
}