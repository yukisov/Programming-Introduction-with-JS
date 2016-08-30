Hello, World!
==============


1. デスクトップ上に、hello.js ファイルを作成します。

    ※ デスクトップ以外も場所でもよいです。

    1. デスクトップ上で右クリックし、[新規作成] - [テキスト ドキュメント] を選択します。

        ![image](/img/HelloWorld/2016-08-08_17_56_16-right-click.png)

    2. ファイル名を "hello.js" に変更します。

        作成した段階で、ファイル名が編集状態になりますので、

        ![image](/img/HelloWorld/2016-08-08_17_57_11-create-file.png)

        "hello.js" に変更します。

        ![image](/img/HelloWorld/2016-08-08_16_27_23-create-file2.png)

2. hello.js ファイルにプログラムを書きます。

    "Hello, World!" という文字列を出力するプログラムを書きます。

    1. `hello.js` ファイルを右クリックし、[Open with Atom] を選択します。

        ![image](/img/HelloWorld/2016-08-08_16_28_35-open-file.png)

    2. Atomが起動され、`hello.js` ファイルが編集できる状態になりますので、以下の文字列を入力します。

        ```
        console.log("Hello, World!");
        ```

        ![image](/img/HelloWorld/2016-08-08_16_30_41-atom-edit-hello.png)

        JavaScript では、`console.log( 文字列 )` と書くと `文字列` の部分が画面に出力されます。
        文字列というのは、プログラムの中で文字の連なりを表現するデータのことを言います。JavaScriptで文字列を表現するには、シングルクォーテーションもしくはダブルクォーテーションで文字を囲みます。

    3. 入力した内容を保存します。

        [File]メニュー - [Save] をクリックします。

        ![image](/img/HelloWorld/2016-08-08_16_37_04-atom-save-hello.png)

    4. Atom を終了します。

        [File]メニュー - [Exit] をクリックします。

        ![image](/img/HelloWorld/2016-08-08_16_39_27-atom-save-hello.png)

3. コマンドプロンプトで、hello.js を実行します。

    1. スタートメニューをクリックし、"cmd" と入力します。

        ![image](/img/HelloWorld/2016-08-08_15_28_41-SearchCmd.png)

    2. 表示された「コマンド プロンプト」をクリックします。

        コマンド プロンプトが起動します。

        ![image](/img/HelloWorld/2016-08-08_15_31_31-コマンド プロンプト.png)

    3. "cd Desktop" と入力し、続けて Enterキーを押します。

        コマンドプロンプト内で、デスクトップに移動できます。

    4. "dir" と入力し、続けて Enterキーを押します。

        デスクトップ内のディレクトリやファイルが一覧表示されます。

    5. "node hello.js" と入力し、続けて Enterキーを押します。

        `hello.js` に書いたプログラムを実行され、"Hello, World!" という文字列が出力されます。

        ![image](/img/HelloWorld/2016-08-08_15_34_19-コマンド プロンプト.png)

    この 「"node hello.js" を実行する」という部分が、「プログラムを実行する」ということにあたります。

