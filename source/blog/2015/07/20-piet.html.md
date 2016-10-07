---
title: Pietのコードを自動生成するものを作った。
date: 2015-07-20 05:51 JST
tags: Piet
--- 

[前回](/blog/2015/07/08/piet.html)に続きPietです。

![GCDを表示するPiet](/blog/2015/07/20/gcd.png)<br />
こんな感じのものを、

<pre><code>INN
DUP
INN
DUP
PUSH 3
PUSH 1
ROLL
GREATER
JEZ S
PUSH 2
PUSH 1
ROLL
LABEL S
# ここでStackに2つ入っていて、大きいほうが上
PUSH 2
PUSH 1
ROLL
DUP
PUSH 3
PUSH 1
ROLL
# 小さい方は使うのでコピー
MOD
DUP
JEZ END
PUSH 2
PUSH 1
ROLL
JMP S
LABEL END
POP
OUTN
</code></pre>
[こんな感じのコード](https://github.com/nna774/piet-automata/blob/master/tests/gcd.pas)から生成するようなものを書きました(上の画像は見やすいように10倍に拡大してあります)。

レポジトリ: [nna774/piet-automata](https://github.com/nna774/piet-automata)
