---
directory_index: false
title: xv6 を読みます。(0)
date: 2014-07-31 06:14 JST
tags: xv6
---

とりあえず構築的な。

[ここ](http://peta.okechan.net/blog/archives/1210)とか見ながら。

<p>
<pre><code>$ git clone git://pdos.csail.mit.edu/xv6/xv6.git
$ cd xv6
$ make qemu QEMU=qemu-system-x86_64
</code></pre>
</p>

<pre><code>$ make qemu</code></pre>
でいいらしいが、私の環境では、qemu というコマンドは入っていなかったので$(QEMU) を書きかえたら動いた。

適当にls とかcat とかwc とかが使える。

バツ押して終了できる。

<pre><code>$ make qemu-nox QEMU=qemu-system-x86_64
</code></pre>

でX ではなく、端末上で同じように使える。
最初抜け方がわからなくてつらかったけど、qemu のドキュメントを読んでたら
C-a x で終了できるらしい。(C-a h でヘルプも出る)

とりあえずこれぐらい。
