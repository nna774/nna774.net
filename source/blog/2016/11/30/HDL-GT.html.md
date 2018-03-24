---
directory_index: false
title: HDL-GT
date: 2016-11-30 22:38 JST
tags: HDL-GT
---

空っぽのHDL-GTを入手したので、それで遊ぶ。
io dataのNAS

普通に[公式のマニュアル](http://www.iodata.jp/lib/manual/pdf2/hdl-gt-07.pdf)を見てリセットスイッチを押して起動しようとしてもうまくいかない。
インターネットで検索していると、専用のHDDに入った何かが必要らしい。

で、[このへん](http://helotaru.blogspot.jp/2012/02/hdl-gt20-nas.html)の記事みなてると、「OPEN LANDISK PLATFORM」なるものがあるらしくて、それでググったら[こういう](ftp://ftp.iij.ad.jp/pub/sourceforge.jp/freetank/30616/OPEN%20LANDISK%20PLATFORM%20Linux200README.pdf)ものがみつかって、[ここ](ftp://ftp.iij.ad.jp/pub/sourceforge.jp/freetank/30616)にいろいろある。
IO DATAにGPL請求してもいいらしい？
まぁとにかくこのPDFを読みながらそのとおりにすると起動した。

一つだけひっかかったことは、gptでパーティション切ってたらダメだったことぐらい。

で、こんな感じ。
<pre><code>OLP02:~# cat /proc/cpuinfo
Processor       : ARM926EJ-Sid(wb) rev 0 (v5l)
BogoMIPS        : 266.24
Features        : swp half thumb fastmult edsp java
CPU implementer : 0x41
CPU architecture: 5TEJ
CPU variant     : 0x0
CPU part        : 0x926
CPU revision    : 0
Cache type      : write-back
Cache clean     : cp15 c7 ops
Cache lockdown  : format C
Cache format    : Harvard
I size          : 32768
I assoc         : 1
I line length   : 32
I sets          : 1024
D size          : 32768
D assoc         : 1
D line length   : 32
D sets          : 1024

Hardware        : MV-88fxx81
Revision        : 0000
Serial          : 0000000000000000
</code></pre>

<pre><code>OLP02:~# uname -a
Linux OLP02 2.6.12.6-arm1 #1 Tue Apr 17 16:31:59 JST 2007 armv5tejl GNU/Linux
</code></pre>

<pre><code>OLP02:~# cat /etc/debian_version
4.0
</code></pre>

etchつらいのでなんとかしたいな という感じ。

[このへん](http://next.matrix.jp/landisk-hdl-gxr-debian-squeeze.html)を読みつつなんとかならないか試してみたい。
