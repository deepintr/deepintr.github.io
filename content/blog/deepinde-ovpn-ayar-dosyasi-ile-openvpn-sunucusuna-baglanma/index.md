---
title: "Deepin'de .ovpn ayar dosyası ile OpenVPN sunucusuna bağlanma"
date: "2019-02-01"
author: "ChatosKuntakinte@telegram"
description: "OpenVPN sunucusuna bağlanma"
---

Eğer bir **OpenVPN** sunucunuz varsa veya **OpenVPN** tabanlı ücretli bir vpn hizmeti alıyorsanız bu yazımızda vpn hizmetini Deepin üzerinde nasıl kullanabileceğimizi göstereceğim.

Vpn sunucusu deyince ilk akla gelen program (eğer ki android deki ücretsiz vpn servislerini saymazsak) **OpenVPN** oluyor. **OpenVPN** açık kaynak kodlu bir program olmasına karşın kendi sunucunuza kurduğunuzda ücretsiz olarak aynı anda sadece 2 bağlantı hakkı veriyor. Gerçi ben vps sunucumda **Softethervpn** kullanıyorum. **Softethervpn**'de herhangi bir bağlantı sınırı yok ve **OpenVPN** emülasyonu sağlıyor. Ayrıca bazı ücretli vpn firmaları da **OpenVPN** altyapısını kullanıyor.

Neyse, asıl konumuza dönelim. **OpenVPN** programı ile hizmet veren vpn servis sağlayıcılar müşterilerine `.ovpn` uzantılı bir dosya veriyorlar. Bu dosyanın içerisinde sunucunun bağlantı bilgileri oluyor. Bu dosyayı Windows, Android veya Ios altında bir client programı ile kullanabiliyoruz. Daha önce kullandığım Ubuntu Mate dağıtımının ağ ayarları kısmında bu dosyayı içeri alabileceğimiz bir bölüm mevcuttu (fakat normal Ubuntu dağıtımında yoktu). Deepin'de de böyle bir bölüm yok. Bunun için ufak bir komut ile ayar dosyamımızı sistemimize eklememiz gerekiyor.

Dosyamızın adı `openvpnayarlar.ovpn` ve bu dosya `hakan` adlı kullanıcımızın masaüstünde olduğunu varsayalım. Böyle bir durum için terminale aşağıdaki komutu giriyoruz:

```bash
sudo nmcli connection import type openvpn file /home/hakan/Desktop/openvpnayarlar.ovpn
```

Aşağıdaki gibi bir çıktı aldıysanız işlem başarılı demektir.

```bash
'openvpnayarlar' (81895fc8-3f90-4e10-8798-bcdef6e58546) bağlantısı başarıyla eklendi.
```

![](./komutsatiri.gif)

Şimdi Ayarlar > Ağ ayarları > VPN sekmesinden son ayarlarımızı yapalım. Değiştirilmesi gereken kısımlar yukarıdan aşağıya doğru;

**Ad:** Bizim ekranımızda görünmesini istediğimiz isim. İstediğiniz gibi değiştirebilirsiniz.

**Otomatik bağlan:** Bilgisayar açıldığında vpn bağlantısının otomatik olarak bağlanıp bağlanmamasını buradan ayarlıyoruz.

**Kullanıcı Adı:** Bağlantı için kullanıcı adınız. Kullanıcı adını hizmeti aldığınız yerden temin ediyorsunuz.

**Parola:** Kullanıcı adı ile birlikte veriliyor.

**Özel Parola:** Ben softether vpn kullanıyorum. Bu parola tüm kullanıcılar için aynı. Hizmeti aldığınız yerden size ya verilir ya da ayar dosyanızın içinde zaten girilmiş olarak bulunur.

**Kaydet:** Son olarak sayfanın altından **Kaydet**'i tıklayarak ayarlarımızı kaydediyoruz.

![](./sonayarlar.gif)

Artık **VPN** bağlantınızı rahat rahat kullanabilirsiniz. :)
