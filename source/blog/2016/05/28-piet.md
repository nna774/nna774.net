---
title: Pietを描いてた。
date: 2016-05-28 03:30 JST
tags: Piet
---

Pietについての解説は「[Pietのエディタを作った話](http://www.slideshare.net/KMC_JP/piet-46068527)」に譲ります。ぴえーっ！

アイコンでnonaって出したらおもしろいかなー とふと思って、描いたけどあんまりうまくできなかった。

![nona icon piet](/img/1012-piet-x10.png)

このアイコン(左上にもありますね(いつまでもあるかどうかはわからないけど))です。
細部は異なる。

![nona icon](/img/1012-159x.png)

突然おもいたって描いただけなのでこれで終わりなので、少し宣伝的な。

* [kndama/Pidet](https://github.com/kndama/Pidet) 今回つかったエディタです。
* [Muratam/UltraPiet](https://github.com/Muratam/UltraPiet) こういうのもあります。

どちらもKMCの人がつくったものです。
KMCには手でPietを描きまくっている頭のおかしな人々も居ます。
既に今日もわたしを除いて1枚がSlackの#pietチャンネルにアップロードされていました。
意味不明です。

私にとってPietは生成するものです……。
[nna774/piet-automata](https://github.com/nna774/piet-automata)を以前書いていて、
詳しくは「[Pietのコードを自動生成するものを作った。](/blog/2015/07/20/piet.html)」にありますが(ぜんぜん詳しくなかった……)、
疑似命令列からPietのソースコードを生成するようなものです。
今回の上記のPietだと、実際行なっているのは、

<pre>PUSH 22
PUSH 5
MUL
DUP
DUP
OUTC
PUSH 1
ADD
OUTC
OUTC
PUSH 4
PUSH 16
OUTC
</pre>

のようなことをやっております(nはAsciiで110、oは111、@は64)。
この疑似命令が何かという説明は今のところはどこにも無いのですが、なんとなく(Pietを描いたことのある人ならば)想像でわかってもらいたい感じです(すごく対象が狭い……)。

で、このPietを描くのには2時間ぐらい？ かかったのですが、piet-automataをつかって30秒ぐらいで生成した画像がこちらです。
同じ出力をしてくれます。

![non@](/blog/2016/05/28/out-x10.png)

ソースはこちらです。

<pre>PUSH 110
DUP
DUP
OUTC
PUSH 1
ADD
OUTC
OUTC
PUSH 64
OUTC
</pre>

やっぱりPietは手で描くものじゃないですね！

より広くPietに関することは[Pietタグ](/blog/tags/piet.html)にあります。

#### さらに宣伝

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">Pietの生成についてはC89でなんか同人誌を出したんだけど、まだインターネットで見えるようにしていないので(どうしたらいいのか考えてて放置していた)、C88で出した雑なペーパーならインターネットで読めますのでそれのリンクです。 <a href="https://t.co/TQi8upLK1k">https://t.co/TQi8upLK1k</a></p>&mdash; 友利のな(のの なな) (@nonamea774) <a href="https://twitter.com/nonamea774/status/736258119374802945">2016年5月27日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

[こちら](/piet/c88paper.pdf)より読めます。

C89の本はどうしよう……(奇跡的にコミケで完売してなんとか制作費の回収もできているので、あれですが、買ってくれた人にもうしわけなしなので公開をどうしようか悩んでいる)。もう一回ぐらいイベントに出したいけど、C90には申し込んでないんだよなぁ。

