// クイックフィックスコマンド（Win: Ctrl + . Mac: Command + .)
// を使ってリファクタリングをします。

// 4-6-1 クイックフィックスコマンド
// 到達しないコードを選択して、クイックフィックスします。
if (false) {
    message1 = "never reached";
}

// 4-6-2 変数抽出
// 以下の1行を選択して、クイックフィックスします。
let message2: string = 'Hello World';
console.log(message2);

// 以下のような、文字列を直接コーディングした箇所でも試してみましょう。
// const に抽出できます。
console.log("Hello World");

// 4-6-3 シンボル名の変更
// 変数名 'message3' にカーソルして、F2 で実行できます。
let message3: string = 'Hello World';
console.log(message3);

