---
title: 不自由なYo からの脱却を求めて。【KMC アドベントカレンダー6日目】
date: 2014-12-06 00:00 JST
tags: KMC, アドベントカレンダー
---

# Yo!

この記事は[KMC Advent Calendar 2014](http://kmc.hatenablog.jp/entry/2014/12/01/143125)の6日目の記事です。

Yo! KMC 二回生のnona7 です。

みなさんは[Yo](http://justyo.co/) 使ってますか？

# What’s YO?

とりあえずYo についての説明から入ります。

Yo というのは、一時期大流行した"Zero Character Communication Tool" です。
相手の名前の一覧が書いてある画面が基本の画面で、そこでYo を送りたいユーザの名前を押すと、その押した相手のところに"Yo" とだけ通知が出ます。

_* それだけです *_

それだけだけれど実際便利です。

# When Yo!

以下のような時に使っています。

* 「駅に着いたらYo 送って」
* 「10時までにYo 来なかったら寝てるから電話して。」
* Facebook のPoke のノリでYo(特に意味は無い)
* サーバの死活管理(監視しているプロセスが死んだらYo)
* Yo を使い部室の鍵を開錠
* 部室のドアをだれかが開けたらYo が来る
* 部内のWiki に更新があるとYo が来るように

さらに実装はしていませんが、もっと色々な使い方は考えられます。(More Yo!)

* Jenkins のビルド結果に応じた種類のYo が飛んでくる。
* ブログ等の更新をYo で通知
* Yo で現実世界に干渉(電灯のオンオフ、こたつの強弱とか) (エアコン操作はだれかやってなかったっけ？)

# We need Yo!

日常的に以上のようなYo の使いかたをしている私達は、強くYo に依存しています。

ここでいくつかの心配が出てきませんか？

* ある日突然Yo がサービス終了したら？
  * 終了しなくても、何日もサービスが落ちたりしたら？
* いきなり有料化したらどうしよう？
* いきなりAPI を変えられていっぱい動かしてるものの変更が大変……

# Yo, where to?

公式のYo の問題はそれだけではないです。

最初は"Yo!" しか送れなかったYo ですが、次々と色々なものを送れるようになっていきます。

## Yo Link, image

画像やLink をYo と一緒に送信ができるようになりました。
そのほうが広告の送信等、マネタイズしやすいのでしょう。
確かにそれによってできるコミニュケーションは増えるでしょうが、
それは他のサービス(Twitter 等) に譲るべきに思います。
むしろ、Yo しか送れないという制限された性質のほうが良かったように思います。

## Where are you? Yo!

そして位置情報をYo と共に送れるようになりました。

「今ここに居るよ」のYo が送れるようになってしまいました。

ハイコンテキストなYo しか送れないツールであったが為にコミュニケーションができていたのにもかかわらず、
位置情報と共にYo が送られてきても何を良いたいのかわかりません。
その位置情報をどう解釈するかのコンテキストも共有しておけば良いという意見はありますが……。

## Share with Yo

その後、iOS 版のYo のアプリですが、Share のところからYo が選択できるようになりました。

写真App 等から簡単にYo Image とかを送れるようになる変更です。
私はそもそもYo Image そのものに反対しています。

# We need <b style="color: red">Open</b> Yo!

今まで言ってきたことから明らかなように、私達にはオープンソースなYo 実装が必要です。

という訳で、Yo のOSS な再実装をしました。
私の信仰上の理由からして、このようなものは[自由](https://www.gnu.org/philosophy/free-sw.ja.html)であるべきだと思うので、
そしてネットワーク越しに動作するという性質を持つので、[AGPL](https://ja.wikipedia.org/wiki/Affero_General_Public_License)
によって開発をしています。

* [レポジトリ](https://github.com/nna774/OpenYo/)
* [公式ページ](/OpenYo/)

# Why OpenYo?

OpenYo によって、私達は上記の問題等を解決することができます。
サービスがいきなり終了しても、自分の管理下のサーバで実行することができますし、変な拡張等が入っても、それに追従しないことが可能です。

公式では困難な複数の端末で送受信だって可能です。

また、逆に自由に変な拡張を含めることもできます。
例えば、さまざまな通知の受信方法(受信方法の追加は行い易い設計にしたつもりです。)や、
もしあなたが望むなら、ソースコードに手を加え、位置情報、画像、リンク等が送信可能となるように拡張することも可能でしょう。
メインストリームにそれはマージはしたくないですが、そのような改変を禁止、妨害するようなことは、
AGPL の下にソースコードが公開されているので不可能ですし、そのような意思もありません。

# Let's Yo!

ここまで長々と書いてきましたが、[OpenYo.nna774.net](https://OpenYo.nna774.net) でサーバが動作しているので、実際に試すことができます。

`$ curl -d "api_ver=0.1&api_token=huga&username=nona7" https://OpenYo.nna774.net/yo/`

こんな風に私のところに通知が来ます。

<blockquote class="twitter-tweet" lang="ja"><p>良い <a href="http://t.co/u1084poORt">pic.twitter.com/u1084poORt</a></p>&mdash; 深海潜艦駆逐ノナ級 (@nonamea774) <a href="https://twitter.com/nonamea774/status/509541811426045952">2014, 9月 10</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

まぁそんな風に送信しても何も面白くないでしょうので、適当に実装されたWeb から操作するUI がとりあえずあります(API を提供するコードだと考えているので、UI がまだ大分適当です…… いい感じにだれかにして欲しい……)。

[https://OpenYo.nna774.net/login/](https://OpenYo.nna774.net/login/) にアクセスしてもらえると、id とpass を聞いてくるので、`user` と`hoge` とそれぞれ入力して認証ボタンを押すと、user というユーザでログインできるようになります。

[https://openyo.nna774.net/mypage/](https://openyo.nna774.net/mypage/) へのリンクが表れるので、辿ると、`Send Yo` からの特定のユーザへのYo の送信、`Yo All` からフレンド(公式と同じく、一度でも受信や送信した相手) の全員に送信、`History` で自分に来たYo の新着20件が見えます。

受信したことの確認は、現在は`/history/` API を叩くか、このWeb から見るか、
[im.kayac.com](http://im.kayac.com/) というiPhone に通知を送る際によく使われているサービスが現在利用できます。
不完全ながらとりあえず動くような[アンドロイド用アプリ](https://github.com/lastcat/OpenYoForAndroid)もKMC のlastcat さんが作ってくれました。これからの更新を期待しています。

また、現在以下のようなクライアントも作って頂いています。

* [lastcat/OpenYoForAndroid(上記)](https://github.com/lastcat/OpenYoForAndroid) OepnYoのandroidクライアントです。
* [primenumber/OpenYoTools](https://github.com/primenumber/OpenYoTools) OpenYoをコマンドラインから扱うためのツール。
* [YAOYToolkit](https://github.com/1995hnagamin/yaoytoolkit/) Scheme で書かれたOpenYoをコマンドラインから扱うためのツール。これに関しては[昨日のKMC アドベントカレンダー](http://hnagamin.hatenablog.com/entry/2014/12/05/051701)で紹介されました！

# Last Yo

とまぁ色々書いて参りましたが、OpenYo をよろしくお願いします。まだまだ改良の余地等はあると思いますし、どんどんPull Request も歓迎しております！

以下簡単なまとめ

* [レポジトリ](https://github.com/nna774/OpenYo/)
* [公式ページ](/OpenYo/)
* [適当なWeb](https://openyo.nna774.net/mypage/)
* [公式Twitter: @OpenYo\_](https://twitter.com/OpenYo_)

Web からでもユーザ作成はできるので([Logout](https://openyo.nna774.net/login/) をしてから、
[Sign Up](https://openyo.nna774.net/signup/)) 是非試してみてください！

というわけで12/6, [KMC アドベントカレンダー](http://kmc.hatenablog.jp/entry/2014/12/01/143125) 6日目の記事をnona7([@nonamea774](https://twitter.com/nonamea774/)) よりお送りしました。明日はhnagamin さんの「関数品評会のネタ」です。明日もよろしくお願いします。
