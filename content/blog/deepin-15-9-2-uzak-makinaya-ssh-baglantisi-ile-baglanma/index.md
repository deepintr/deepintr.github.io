---
title: "Deepin 15.9.2 uzak makinaya SSH bağlantısı ile bağlanma"
date: "2019-03-25"
author: "ChatosKuntakinte@telegram"
description: "Deepin 15.9.2 uzak makinaya SSH bağlantısı ile bağlanma"
---

Evimizde veya iş yerimizde başka bir makinada çalışan Deepin'imize `ssh` üzerinden ulaşmamız gerekebilir. Böyle bir durumda yapmanız gerekenleri aşağıya yazıyorum.

Öncelikle bağlanmak istediğimiz makinamıza `openssh` servislerimizi kuruyoruz.

```bash
sudo apt-get install -y openssh-server openssh-client
```

Ardından ssh servisimizi başlatıyoruz.

```bash
sudo /etc/init.d/ssh start
```

Eğer bağlanacağımız bilgisayarın ip adresini biliyorsak aşağıdaki komuta geçebiliriz. Eğer bilmiyorsak, `ifconfig` komutu ile pc mizin ip adresini öğreniyoruz.

Artık aşağıdaki komut ile terminalimizden ssh bağlantısı yapabiliriz.

`ssh kullanici_adi@ip_adresi`

```bash
ssh chatos@192.168.2.15
```

Eğer ki bağlantı portunu değiştirmek istenirse

```bash
sudo nano /etc/ssh/sshd_config
```

ile ayarlara giriyoruz ve `port 22` yazan yeri `port 2299` gibi bir değerle değiştiriyoruz. Yeni portumuz 2299 oluyor. Siz istediğiniz kullanılmayan bir port değeri atayabilirsiniz.

```bash
sudo /etc/init.d/ssh restart
```

komutu ile ayarları güncelliyoruz.

Yeni bağlantılarda ise

`ssh kullanici_adi@ip_adresi -p 2299`

```bash
  ssh chatos@192.168.2.15 -p 2299
```

örneğinde olduğu gibi bağlantınızı kurabilirsiniz.
