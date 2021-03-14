---
title: "Nvidia grafik işleme birimi için sürücü kurulumu"
date: "2020-05-12"
author: "gokhanyildirimlar@telegram"
description: "Nvidia grafik işleme biriminin sürücüsünü kurmak için adımları takip etmek yeterli."
---

## Nvidia grafik işleme birimi için adım adım sürücü kurulumu


**1)** Sürücüyü kurmak için `sudo apt install nvidia-driver` komutunu terminalde çalıştırın.

**2)**  `lspci | egrep 'VGA | 3D'` komutunu terminalde çalıştırarak grafik işleme biriminin **BusID** değerini kaydedin. 
_Örnek: 00:02.0_

**3)** _/etc/X11/_ dizinindeki *xorg.conf* dosyasını düzenlemek için `sudo deepin-editor /etc/X11/xorg.conf` komutunu kullanın. 
Aşağıdaki gibi düzenledikten sonra **BusID "PCI: X: Y: Z:"** kısmını bir önceki adımda kaydettiğiniz değerle doldurun. 
_Örnek: BusID "PCI: 00: 02: 0"_

```
Section "Module"
    Load "modesetting"
EndSection

Section "Device"
    Identifier "nvidia"
    Driver "nvidia"
    BusID "PCI: X: Y: Z"      
    Option "AllowEmptyInitialConfiguration"
EndSection
```

**4)** Ev dizinindeki **.xinitrc** dosyasını düzenlemek için `deepin-editor ~/.xinitrc` komutunu kullanın ve aşağıdaki gibi doldurun.

```
xrandr --setprovideroutputsource modesetting NVIDIA-0
xrandr --auto
xrandr --dpi 96
```

**5)** _/etc/lightdm/_ dizininde bir betik oluşturmak için `sudo deepin-editor /etc/lightdm/display_setup.sh` komutunu çalıştırın ve aşağıdaki gibi doldurun. 
Daha sonra dosyayı çalıştırılabilir yapmak için `sudo chmod +x /etc/lightdm/display_setup.sh` komutunu terminalde çalıştırın.

```
#! / bin / sh
xrandr --setprovideroutputsource modesetting NVIDIA-0
xrandr --auto
xrandr --dpi 96
```

**6)** _/etc/lightdm/_ dizinindeki **lightdm.conf** dosyasını düzenlemek için `sudo deepin-editor /etc/lightdm/lightdm.conf` 
komutunu kullanın ve **[Seat: *]** bölümüne aşağıdaki satırı ekleyin.

> display-setup-script = /etc/lightdm/display_setup.sh


Sistemi yeniden başlattıktan sonra Nvidia grafik birimi kullanılabilir olmalı. Başarılı olmadıysa işlemlerin doğru yapılıp yapılmadığını kontrol edin.

[Kaynak](https://bbs.deepin.org/forum.php?mod=viewthread&tid=178542)
