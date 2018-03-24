---
directory_index: false
title: "#isucon に出てFailしてきました。"
date: 2015-11-02 19:50 JST
tags: Togetter
---

気がついたら予選について何も書かないまま本戦を迎えてしまった。

[isucon](http://isucon.net/archives/45166636.html)とはiikanjini Speed Up Contestの略で、高速化コンテストです。詳細はリンク先を掘ってもらえるとわかると思います。

うちのチームの予選については

[SQL初心者の留年野郎がISUCON予選通過した方法](http://uiuru.tumblr.com/post/130001128318/isucon5)、
[チーム学生自治のメンバーとしてカレーを買いに行った話 #ISUCON](http://pastak-diary.hatenadiary.com/entry/2015/09/28/141100)

あたりを参照してください。

というわけで「チーム学生自治」という名前でISUCONの本戦に出てきました。

チーム名は、こういうの

<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">チーム学生自治のイメージ画像です <a href="https://t.co/KqO3I3OWru">pic.twitter.com/KqO3I3OWru</a></p>&mdash; ウイウ (@uiureo) <a href="https://twitter.com/uiureo/status/660267238717452288">2015, 10月 31</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

というわけではなく、

<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">私はチーム系「山科御池」推しだったんだけど、わたしが選んだあみだくじによって「チーム学生自治」に決まりました。</p>&mdash; 友利のな(鴨川水量bot) (@nonamea774) <a href="https://twitter.com/nonamea774/status/660267481060143104">2015, 10月 31</a></blockquote>

みたいな感じです(Tweet中のチーム系はチーム名のタイポ)。

# 結果

結論から言うと、

<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">isucon結果です。 <a href="https://twitter.com/hashtag/isucon?src=hash">#isucon</a> <a href="https://t.co/6uy1sGBfNe">pic.twitter.com/6uy1sGBfNe</a></p>&mdash; 友利のな(鴨川水量bot) (@nonamea774) <a href="https://twitter.com/nonamea774/status/660394930766872576">2015, 10月 31</a></blockquote>

学生チームは全員再起動テストに失敗し、失格となりました。
結果的には本戦の時間中ずっと寝続けて何もしなければ学生枠優勝して5万円が手に入ったという感じです。
途中で一度再起動テストは行ってそこでは問題なかったのですが、最後の再起動テストは行ってなかった、という感じです。
本戦中は点数的に負けるかなー とは思っていたのですが、Failで失格となるとは思ってなかったので、
:sadpanda:。

とった戦略は、<br />
APIの呼び方とかが5種類しかないのにDBに入ってたので、展開してしまったのとか(私が書いたのですがバグらせてつらかった)、<br />
parallelというgemでAPIリクエストを並列化して呼ぶようにしたこととか、<br />
nginxとunicornのプロセスを増やすとか、<br />
アクセスログを眺めてみたら意外と静的ファイルにもアクセスが来ていたので、nginxに返してもらうこととか、<br />
accept-encodingにgzipが入っていたので、gzip_staticで配信したとか、<br />
ぱっと思いつくのはそのへんです。

使用言語はRubyですが、golangだと初期実装が10倍ぐらい点が高いと聞いてつらい気持ちになった。
tenki APIが遅かったのでどうにかならないかとずっといろいろ見ていたら
Last-modifiedヘッダが付いてるということまでは気づいていたのに、
If-modified-sinceを思いつけなかったのは反省点っぽい(Failしたこと以上の反省点はないが)。
RACK_ENVがdevelopmentであったということを聞いた時はなるほどなぁ という感じでした。

# 以下雑なものです。

ここより上も雑でしたが。

<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">会社のTシャツ着てきたら、 <a href="https://twitter.com/nonamea774">@nonamea774</a> と被った</p>&mdash; 辛子明太子@イカID: pastak (@pastak) <a href="https://twitter.com/pastak/status/660257452735115264">2015, 10月 31</a></blockquote>

<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">おはようございます、チーム学生自治から渋谷の最新ファッション事情をお届けします <a href="https://t.co/pVOZwnAhVA">pic.twitter.com/pVOZwnAhVA</a></p>&mdash; ウイウ (@uiureo) <a href="https://twitter.com/uiureo/status/660262216311017472">2015, 10月 31</a></blockquote>

<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">isucon中に作業用のプリエンプティブVMが殺されないことを祈る。</p>&mdash; 友利のな(鴨川水量bot) (@nonamea774) <a href="https://twitter.com/nonamea774/status/660269042364628992">2015, 10月 31</a></blockquote>

最近手元のWindowsマシンで作業することをほとんど諦めて、その都度家のサーバやGCPのプリエンプティブVMやKMCのサーバで作業しています。

<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">今日の作戦として「とにかく高速化する」が挙げられています。</p>&mdash; 友利のな(鴨川水量bot) (@nonamea774) <a href="https://twitter.com/nonamea774/status/660269381281144832">2015, 10月 31</a></blockquote>

<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">めっちゃかっこいいプラッチック名刺だ。 <a href="https://t.co/KxTQKFV8Vl">pic.twitter.com/KxTQKFV8Vl</a></p>&mdash; 友利のな(鴨川水量bot) (@nonamea774) <a href="https://twitter.com/nonamea774/status/660266516173058048">2015, 10月 31</a></blockquote>
<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr"><a href="https://t.co/nQXEV4jFIA">https://t.co/nQXEV4jFIA</a> 名刺の画像なんだけど、この線の部分もちゃんと出ててすごい。</p>&mdash; 友利のな(鴨川水量bot) (@nonamea774) <a href="https://twitter.com/nonamea774/status/660268325872664576">2015, 10月 31</a></blockquote>

本戦参加者に配られた名刺なのですが、自分の描いたイラストがいい感じに名刺にされてて感動した。
別のイベントに持って行ってもいいぐらいかもしれない。

懇親会では食べきれないほどの寿司とピザとビールが出た。

次も出るぞ！！
