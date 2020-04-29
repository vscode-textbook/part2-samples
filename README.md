# プログラマーのためのVisual Studio Codeの教科書 - Part2 サンプルコード

下記目次のうち、<span style="color: red; ">**太い赤文字**</span>の項目について、サンプルコードを提供しています。

- Chapter 4 プログラミング支援機能
  - 4-1 準備＆インストール
  - 4-2 統合ターミナル
  - 4-3 IntelliSense
  - 4-4 CodeLens
  - 4-5 ナビゲーション
  - <span style="color: red; ">**4-6 リファクタリング**</span>
  - <span style="color: red; ">**4-7 デバッグ**</span>
  - <span style="color: red; ">**4-8 タスク**</span>
- Chapter 5 ソフトウェア開発のための拡張機能
  - 5-1 GitHub Pull Requests拡張
  - <span style="color: red; ">**5-2 Lintとフォーマッター**</span>
  - 5-3 Remote Development - リモート開発
  - 5-4 Visual Studio Live Shere

## Part2 で利用する拡張機能について

[.vscode/extensions.json](.vscode/extensions.json) に必要な拡張機能が記載されています。git clone したフォルダを VS Code で開くことによって、これらの拡張機能をインストールするようガイドが表示されますので、これに従ってインストールしてください。
もちろんそれぞれひとつずつを手動でインストールすることも可能です。

## [4-6 リファクタリング](4-6_refactoring)

以下のファイルを開いて、書籍の手順を実行してみましょう。

- [4-6_refactoring/refactoring.ts](4-6_refactoring/refactoring.ts)

## [4-7 デバッグ](4-7_debug)

以下の2ファイルをデバッグ実行するよう、あらかじめ `.vscode/launch.json` に設定されています。`F5` キーでデバッグ実行を起動します。

- [4-7_debug/app.js](4-7_debug/app.js)
- [4-7_debug/fibonacci.js](4-7_debug/fibonacci.js)

それでは書籍にそって進めてみましょう。

## [4-8 タスク](4-8_task)

[4-8_task](4-8_task) フォルダーは以下のコマンドを実行した状態で、tsconfig.jsonが生成されています。

```sh
cd 4-8_task
tsc -init
```

また、あらかじめ、`.vscode/tasks.json`に書籍で説明しているタスクが設定されています。
コマンドパレットから `タスク: タスクの実行` / `Tasks: Run Task`を選択すると、以下のタスクが実行できます。

- 4-8-4 Run tests
- 4-8-7 Echo Three
- 4-8-9 TypeScript compile

それでは書籍にそって進めてみましょう。

## [5-2 Lintとフォーマッター](5-2_lint)

### 初期設定の確認
以下のコマンドで `node` と `npm` がインストールされているか確認します。

```
node -v
npm -v
```

バージョンが表示されなければ、node と npm をインストールします。書籍中 4-1 に手順の説明があります。

各OSにあわせてインストールしてください。通常、Node.js のインストールと同時に npm もインストールされます。

- node: https://nodejs.org/
- npm: https://www.npmjs.com/get-npm

### プロジェクトフォルダへ移動
下記のようにプロジェクトフォルダを移動して、VS Codeを起動します。

```sh
cd 5-2_lint
code .
```

それでは、書籍にそって進めてみましょう。
