---
directory_index: false
title: Gentoo install from Arch Boot USB
date: 2014-11-17 21:16 JST
tags:
---

外でGentoo がインストールしたくなった時でも、Arch インストールUSB があたのでインストールできたという話。
以下手順

* archiso で起動
* 適当にネットワーク設定等してインターネットに繋がるようにする。
* Stage 3 を落としてきて、/mnt に展開
* `mount --rbind /proc/ /mnt/proc/`
* `mount --rbind /dev/ /mnt/dev/`
* `cp /etc/resolv.conf /mnt/etc`
* `chroot /mnt /bin/bash`
* $PATH にいろいろ足りないので追加 `export PATH=$PATH:/bin:/sbin:/usr/sbin`
* `update-env` してあとは普通にGentoo のdisk から`chroot` したのと同様に〜
