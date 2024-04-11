# 開発
## 進め方
タスクはPoint teamの[Projects](https://github.com/orgs/42association/projects/10/views/1)で管理しています。

タスクを行う際は`in progress`看板に割り振って下さい。

バグが見つかった際は、issueを立てて下さると助かります。

アスペクト比16:9(モバイル版)の開発をします。終わり次第PC版も対応します。

Webデザインの設計<br>
-> [Figma招待リンク](https://www.figma.com/file/NrnIhw7whHrAlk8jFZksNj/42association?type=design&node-id=117%3A163&mode=design&t=XTVGXVBnsc9gW2DA-1)

UIは[chakara.ui](https://chakra-ui.com/docs/components)を使用して開発していきます。
# 情報

**ディレクトリ構成**
**src/app**<br/>
Next.jsでルーティングに使われる特別なフォルダです。基本的に受けとったコンポーネントを返すだけですが、ページ間で共通しているレイアウトなどを与えるのはここで行います。また、例えば、認証を加えたいページに対してHOC関数を適用する場合などにも使われます。

**src/components**<br/>
コンポーネントを格納するディレクトリです。基本的にsrc/components直下には各ドメイン（だいたい各ページに一致）のコンポーネントが並びます。

**src/api**<br/>
apiクライアントを格納するディレクトリです。GraphQLを使用する場合、それに合わせて適宜名前を変更します。

**src/styles**<br/>
グローバルスタイルを管理するディレクトリです。これはどのようにスタイリングするかにより、中身が大きく変わりますので、詳説を避けます。

**src/modules**<br/>
helper関数やパッケージごとの設定ファイルなどを雑多にmodulesに入れておきます。


引用: [src配下の全体像](https://zenn.dev/mutex_inc/articles/beca85dd7fdcae)

### 役立つサイト・リンク集

**UI コンポーネントライブラリ**<br>
https://chakra-ui.com/docs/components <br>
https://mui.com/material-ui  <br>

**UI用の生成AI**  <br>
https://v0.dev/  <br>

