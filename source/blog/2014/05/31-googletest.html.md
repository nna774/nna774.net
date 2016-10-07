---
directory_index: false
title: Google Test
date: 2014-05-31 04:35 JST
tags: 2048, CI
---

[2048AI](https://github.com/nna774/2048-cpp) の内部で、謎のbit 演算がたくさん使われてきて辛くなってきた。

どっか間違えててもまずわからないと思う。

というわけでテストを書きたいなーと思ったので、いい感じのC++ のテストツールがないか聞いてみたところ、Google Test を教えてもらった。

[ここ](http://minus9d.hatenablog.com/entry/20140119/1390117516) を見ながら適当に設定すればいい感じになった。

Google Test のコードを[ここ](https://code.google.com/p/googletest/) からダウンロードしてきて、解凍。解凍後 gtest-1.7.0 に移動し、

<pre><code>$ ./configure
$ make 
</code></pre>

これで準備完了。依存しているテストツールのヴァージョンが異なるとややこしいので、システムにはインストールしないほうがいいらしい。

googletest のmake ディレクトリ以下を参考にしてMakefile を書けばいいかんじに動くようになった。

CI ツールで以下のようなコマンドを走らせてtest している。

<pre><code>git submodule init
git submodule update
cd test
unzip gtest-1.7.0.zip > /dev/null
cd gtest-1.7.0
./configure > /dev/null
make > /dev/null
cd ../../
make OPT="-O3 -pipe"
make test
</code></pre>

こんな感じでテストが走ってる。

<pre><code>[==========] Running 4 tests from 1 test case.
[----------] Global test environment set-up.
[----------] 4 tests from BoardTest
[ RUN      ] BoardTest.log2
[       OK ] BoardTest.log2 (0 ms)
[ RUN      ] BoardTest.pow2
[       OK ] BoardTest.pow2 (0 ms)
[ RUN      ] BoardTest.gridMirrorIDRAND
[       OK ] BoardTest.gridMirrorIDRAND (0 ms)
[ RUN      ] BoardTest.popCountRAND
[       OK ] BoardTest.popCountRAND (1 ms)
[----------] 4 tests from BoardTest (2 ms total)

[----------] Global test environment tear-down
[==========] 4 tests from 1 test case ran. (2 ms total)
[  PASSED  ] 4 tests.
</code></pre>

ちゃんとテストを書かないと。
