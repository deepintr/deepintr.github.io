---
title: "Gigabyte 970A-UD3P Anakart Usb 2.0 çalışmaması sorunu"
date: "2018-11-23"
author: "ChatosKuntakinte@telegram"
description: ""
---

**Gigabyte 970A-UD3P** anakartınız varsa ve Linux kurmaya çalışıyorsanız büyük ihtimalle usb 2.0 portlarınız çalışmayacaktır. Bu nedenle kurulum yapmak için usb belleği ve klavye-faremizi usb 3.0 portlarına takarak normal kurulumumuzu yapıyoruz.

Açılıştan sonra usb 2.0 portlarını aktif etmek için grub'ta ufak bir ayar yapmamız gerekiyor.

1. Terminalimizi açıyoruz (Ctrl + Alt + T)

2. `sudo nano /etc/default/grub` ile grub ayarlarına giriyoruz.

3. Ardından `GRUB_CMDLINE_LINUX=""` satırını `GRUB_CMDLINE_LINUX="iommu=soft"` olarak değiştiriyoruz.

4. `Ctrl+O` ve `Enter` ile yaptığımız değişiklikleri kaydediyoruz. Ardından `Ctrl+X` ile çıkıyoruz. Hemen sonra `sudo update-grub` komutu ile grub'ın ayarlarını güncelliyoruz.

5. `sudo shutdown -r now` komutu ile makinamızı yeniden başlatıyoruz. Yeniden başlarken `Delete` tuşu ile bios ayarlarına giriyoruz.

6. Bios'ta en üst kısımdaki `Peripherals` sekmesine geçiyoruz ve ekranın alt kısımlarındaki `IOMMU Controller` ayarını `Disabled` olarak işaretliyoruz.

Bios ayarlarını kaydedip makinayı yeniden başlattıktan sonra usb 2.0 portlarını da rahatça kullanmaya devam edebillirsiniz.
