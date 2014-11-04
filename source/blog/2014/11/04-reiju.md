---
title: 令呪を以て命じる
date: 2014-11-04 23:07 JST
tags:
---

三回だけ実行できる。

    function 令呪を以て命じる() {
        if [ -z $REIJU ] ;then
            export REIJU=2;
            sudo $*
        elif [ $REIJU -gt 0 ] ; then
            export REIJU=`expr $REIJU - 1`;
            sudo $*
        fi
    }

