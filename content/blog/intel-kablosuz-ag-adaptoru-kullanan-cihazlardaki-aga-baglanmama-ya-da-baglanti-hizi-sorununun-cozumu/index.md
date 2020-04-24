---
title: "Intel kablosuz ağ adaptörü kullanan cihazlardaki ağa bağlanmama ya da bağlantı hızı sorununun çözümü"
date: "2018-11-23"
author: "gokhanyildirimlar@telegram"
description: ""
---

Intel modem kullanan bazı cihazlarda 5 GHz ağlarına bağlantı ve düşük hız problemleri yaşanabiliyor. Bunun sorunu yaşayanlar için bir çözüm de mevcut. Eğer bu sorunu yaşıyorsanız bir terminal penceresinden `/etc/modprobe.d/` dizinindeki `iwlwifi.conf` dosyasını açarak `11n_disable=1` olan parametreyi `11n_disable=0` olarak değiştirmeniz yeterli.

Değişikliği yapıp dosyayı kaydettikten sonra sistemi yeniden başlatmanız gerekiyor.

Yukarıda bahsedilenleri yapmak için gerekli komut:

`sudo deepin-editor /etc/modprobe.d/iwlwifi.conf`
