---
directory_index: false
title: Heartbleed
date: 2014-04-09 23:03 JST
tags: SSL, Raspberry Pi 
---

最近流行りのOpenSSL のバグですが、うちのRaspberry Pi の上のRaspbian にすぐにアップデートが来なかったので、これを機にArch Linux に乗り変えることにした。

まだいろいろ設定している途中ですが、とりあえず80番と443番だけNAT を通すようにしてここも復活。

SSL の秘密鍵とりかえたいけどStart SSL は再発行にお金かかるらしいし、うーん ってかんじだ。
そもそも攻撃に狙われた可能性は低いとは思うけれど……(よくない考え方だ。安全側に倒すべきではある)

