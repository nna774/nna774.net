---
title: GR-SAKURA の環境を整えたい
date: 2014-03-22 04:32 JST
tags: GCC, GR-SAKURA
---

適当なメモなエントリだ。
もしかしたらまとめるかもしれない。

# rx-elf-gcc
[ここ](http://www.kpitgnutools.com/sourceCode.php) のソースコードをビルド中にたたかったメモ。

基本的に[これ](http://qiita.com/jjzak/items/8e9d9d98370181aa97fa) を参考に

## binutils

http://trac.cross-lfs.org/ticket/926
<pre>
sed -i -e 's/@colophon/@@colophon/' \
    -e 's/doc@cygnus.com/doc@@cygnus.com/' bfd/doc/bfd.texinfo
</pre>
<pre>
sed -i -e 's/@colophon/@@colophon/' \
    -e 's/doc@cygnus.com/doc@@cygnus.com/' ld/ld.texinfo
</pre>
<pre>
sed -i -e 's/@itemx/@@itemx/' binutils/doc/binutils.texi
</pre>
<pre>
sed -i -e 's/@itemx/@@itemx/' gas/doc/c-mips.texi
sed -i -e 's/@itemx/@@itemx/' gas/doc/c-tic54x.texi
sed -i -e 's/@itemx/@@itemx/' gas/doc/c-score.texi
</pre>

<pre>
gas/doc/c-tic54x.texi に
@code expected braces
らしいので適当に追加
</pre>

<pre>
./c-arc.texi:223: command @bullet not accepting argument in brace should not be on @table line
よくわからんけど、
gas/doc/c-arc.texi:223 の
@table @bullet
を
@table @code
にした
</pre>

<pre>
./c-arm.texi:401: command @bullet not accepting argument in brace should not be on @table line
うえとおなじ
</pre>

<pre>
./c-arm.texi:477: node `ARM Floating Point' lacks menu item for `ARM-Relocations' despite being its Up target
そことその下を@@ にして、22行目のメニューからARM Floating Point を削除
</pre>


## gcc

<pre>
../../gcc/doc/invoke.texi:5644: @itemx must follow @item
sed -i -e 's/@itemx/@@itemx/' gcc/doc/invoke.texi
</pre>

## newlib

<pre>
rx-elf-gcc -B/home/nona/build/newlib-1.20.0-20121219/rx-elf/newlib/ -isystem /home/nona/build/newlib-1.20.0-20121219/rx-elf/newlib/targ-include -isystem /home/nona/build/newlib-1.20.0-20121219/newlib/libc/include -B/home/nona/build/newlib-1.20.0-20121219/rx-elf/libgloss/rx -L/home/nona/build/newlib-1.20.0-20121219/rx-elf/libgloss/libnosys -L/home/nona/build/newlib-1.20.0-20121219/libgloss/rx    -DPACKAGE_NAME=\"newlib\" -DPACKAGE_TARNAME=\"newlib\" -DPACKAGE_VERSION=\"1.20.0\" -DPACKAGE_STRING=\"newlib\ 1.20.0\" -DPACKAGE_BUGREPORT=\"\" -DPACKAGE_URL=\"\" -I. -I../../../.././newlib/libc/argz -ffunction-sections -fdata-sections  -DMISSING_SYSCALL_NAMES -fno-builtin      -g -O2 -c -o lib_a-dummy.o `test -f 'dummy.c' || echo '../../../.././newlib/libc/argz/'`dummy.c
/home/nona/local/rx-tools/bin/rx-elf-gcc: 行 498: 対応する `)' を探索中に予期しないファイル終了 (EOF) です
/home/nona/local/rx-tools/bin/rx-elf-gcc: 行 5038: 構文エラー: 予期しないファイル終了 (EOF) です
</pre>

うーん って感じ
まだ未解決

