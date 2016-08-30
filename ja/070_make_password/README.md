パスワード生成プログラムの作成
=================

もう少し意味のあるプログラムを書いてみましょう。

何らかのウェブサービスでアカウントを作成する際、通常パスワードも用意する必要があります。
そんなときに利用できるパスワード生成プログラムを書いてみましょう。

※ 複数のサービスで同じパスワードを使い回すと、1つのウェブサービスでパスワードが漏れた場合に他のサイトで使用されてしまう可能性があるため、サービス毎に別のパスワードを用意することが推奨されます。


いきなりですが、以下が JavaScript でパスワードを生成するプログラムの一例です。この内容を記述したテキストファイルを、`make_password.js` とします。

```
"use strict";

let length = 20;
if (process.argv.length >= 3 && isNaN(process.argv[2]) == false) {
  length = parseInt(process.argv[2]);
}

function genPassword(length){
  let pass = "";
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (length == undefined) length = 20;
  for(let i=0; i<length; i++){
	pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}
console.log(genPassword(length));
```

このプログラムを実行する手順は、`Hello, World` の章とほとんど同じで、以下のようになります。


プログラムの実行手順
---------------------

1. コマンドプロンプトを起動します。
2. `make_password.js` が置かれているディレクトリに移動します。

    ```
    > cd C:\Users\あなたのユーザー名\work
    ```

3. 以下を入力して、Enterを押すとプログラムを実行することができます。

    ```
    > node make_password.js 10
    ```

これは、`node` というプログラムを実行しているのですが、その際に `make_password.js` と `10` を渡しています。これを引数といいます。
`make_password.js` は実行したいプログラムを記述したファイルであり、`10` は作成したいパスワードの文字数です。`make_password.js` では、ここの値をパスワードの長さとして利用します。



コードの説明
-------------

各コードについて、簡単に説明します。


```
"use strict";
```
この記述を行うと、[strictモード][1]を指定したことになります。
strictモードが指定されると、プログラムが実行された時に、問題のありそうなコードをエラーとして表示してくれます。これにより、ちゃんとしたプログラムが書けるようになります。


```
let length = 20;
```
ここでは `length`という変数を宣言しており、初期値として **20** を代入しています。
変数というのは、何かしらの値を入れておけるものだと考えてください。


```
if (process.argv.length >= 3 && isNaN(process.argv[2]) == false) {
  length = parseInt(process.argv[2]);
}
```

<a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/if...else"><code>if</code></a> というのは条件節と言いまして、何かの条件を満たした時だけ特定の処理を実行したい場合に使います。

```
if (ここに条件を書く) {
  条件を満たした時だけ実行したい処理をここに書く
}
```

2つの条件の両方を満たした場合のみ、特定の処理を実行したいのであれば、以下のように書くことができます。

```
if (条件1 && 条件2) {
  両方の条件を満たした時だけ実行したい処理をここに書く
}
```

今回の場合、1つ目の条件の部分が `process.argv.length >= 3` で、2つ目の条件の部分が `isNaN(process.argv[2]) == false` です。

`process.argv.length >= 3` は「引数が3つ以上ある」、`isNaN(process.argv[2]) == false` は「3つ目の引数は数値である」という意味になります。


以下では、3つ目の引数を数値に変換して変数 `length` に代入しています。

```
  length = parseInt(process.argv[2]);
```

次は `genPassword` という名前で「関数」を定義しています。
関数というのは、複数の値を受け取って（受け取らなくてもよいです）、何か処理を行い、その結果の値を戻すという処理を1つのかたまりとして定義するものです。
ここでは、生成するパスワードの文字数 `length`を受け取り、パスワードを生成して返しています。

```
function genPassword(length){
  let pass = "";
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (length == undefined) length = 20;
  for(let i=0; i<length; i++){
	pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}
```

`genPassword` 関数を実行し、その結果を画面に出力します。

```
console.log(genPassword(length));
```

[1]: https://developer.mozilla.org/ja/docs/Web/JavaScript/Strict_mode
