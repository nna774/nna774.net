---
title: Piet のテストツールを書いた｡
date: 2015-07-08 21:07 JST
tags: Piet
---

最近KMCの部員たちが狂ったようにPietを描いている(狂っていると思う)｡

Pietとは､[Wikipedia](https://ja.wikipedia.org/wiki/Piet)とか[解説ページ](http://www.dangermouse.net/esoteric/piet.html)([和訳](http://www.kembo.org/piet/index.htm))とかを見てもらえばなんとなくわかった気がするけどよくわからないと思う｡

部員が作ったおそらくいちばん詳しい日本語文献です｡
<iframe src="//www.slideshare.net/slideshow/embed_code/key/KLX98qEfqzDBEw" width="425" height="355" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/KMC_JP/piet-46068527" title="Pietのエディタを作った話" target="_blank">Pietのエディタを作った話</a> </strong> from <strong><a href="//www.slideshare.net/KMC_JP" target="_blank">京大 マイコンクラブ</a></strong> </div>

# 何を作ったのか｡

部員が手でPietのコードが正しく動くかテストしているのを見て､大変そうだなぁ と思ったので､テストツールを書きました｡

[nna774/piet-testutils](https://github.com/nna774/piet-testutils)

Pietのソースコードを受け取って､それを実行して､期待した挙動をするかどうかをテストしてくれます｡

## 例
以下の様なソースコードがあります｡

![Piet ソースコード](/blog/2015/07/08/devide_by_2.10cs.11x4.png)<br />
<small>Created by Hideaki Nagamine([https://github.com/1995hnagamin](https://github.com/1995hnagamin)) Creative Commons BY-SA 4.0</small>

入力として数字を一つ取って､0になるまで2で割り続けてその過程を出力するプログラムです｡
6を入力とすると､6→3→1→0という風に行くので､`6310`と出力して欲しさがあります｡

<pre><code>
var cases = [
  {
    name: '6',
    desc: '6から始まる',
    input: ['6'],
    expect: '6310',
  },
  {
    name: '18',
    desc: '18から始まる',
    input: ['18'],
    expect: '1894210',
  },
  {
    name: '42',
    desc: '42から始まる',
    input: ['42'],
    expect: '4221105210',
  },
];
</code></pre>

みたいな感じでテストケースを書いてテストを書いて､テストをすることができます｡

# 需要
死
