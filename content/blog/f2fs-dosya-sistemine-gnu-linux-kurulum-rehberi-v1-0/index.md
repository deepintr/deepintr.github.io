---
title: "F2FS Dosya Sistemine GNU/Linux Kurulum Rehberi v1.0"
date: "2019-02-01"
author: "muhendiskedibey@telegram"
description: "F2FS Dosya Sistemine GNU/Linux Kurulum Rehberi v1.0"
---

**Ön Bilgi:** Bu rehber “Linux Mint 19.1 Cinnamon 64 bit” üzerinden hazırlanmıştır. Kuvvetle muhtemel diğer dağıtımlarda da işe yarayacaktır. Bir sorun yaşamanız dahilinde veya görüş ve önerileriniz için bana [Telegram](https://t.me/muhendiskedibey)'dan ulaşabilirsiniz.

Şimdilik rehberi Legacy kurulum ve diskler MBR olacak şekilde yazıyorum ama en yakın zamanda UEFI ve GPT için güncellenecektir.

**Kurulum Öncesi:** Secure Boot’un kapalı olduğundan emin olunmalı ve BIOS, Legacy moda alınmalıdır. Ayrıca bir adet işletim sistemi kurulumu için hazırlanmış USB bellek ve sistem yedeğini alabilmek için harici disk veya en az 16 GB USB bellek gerekmektedir.

**Kurulum Aşaması**

1. Disk aracından veya GParted üzerinden diskler MBR olarak formatlanır.
2. SSD için üç adet bölüm açılır,
3. 512 MB `ext2` (Bootloader da buraya kurulacak!), 4 GB swap (bu opsiyoneldir zaten konuyla bir alakası yok), geri kalan `ext4`
4. Sonra normal kurulum aracı başlatılır, disklerle ilgili kısma gelindiğinde;
   - `ext2` olan bölüm `/boot`, `swap` zaten `swap`, `ext4` ise `/` olarak yapılandırılır.

**Kurulumdan Sonra:**

```bash
  sudo apt-get update
  sudo apt-get upgrade
  sudo apt-get install f2fs-tools
  sudo xed /etc/initramfs-tools/modules # bu dosyanın en sonuna alt alta f2fs, crc32_pclmul ve crc32_generic eklenir
  sudo update-initramfs -u
  sudo xed /etc/fstab # bu dosyada da `/` için `ext4` yerine `f2fs`, `errors=remount-ro` yerine de `defaults` yazılır
```

**Tekrardan USB’den Başlatma:**

```bash
  sudo apt-get update
  sudo apt-get install f2fs-tools
```

Sistemi kopyalamak için harici depolama bağlanır ve **umount** yapılır

```bash
  sudo mkdir /mnt/backup
  sudo mount /dev/sdb1 /mnt/backup # burada sdb1 harici depolama
  sudo mkdir /mnt/backup/mint
  sudo mkdir /mnt/drive
  sudo mount /dev/nvme0n1p3 /mnt/drive # burada nvme0n1p3, SSD üzerindeki ext4 olan kısım
  sudo cp -prvf /mnt/drive/_ /mnt/backup/mint
  sudo umount /mnt/drive
  sudo mkfs.f2fs /dev/nvme0n1p3
  sudo mount /dev/nvme0n1p3 /mnt/drive
  sudo cp -prvf /mnt/backup/mint/_ /mnt/drive
  sudo mount /dev/nvme0n1p1 /mnt/drive/boot # burada nvme0n1p1, SSD üzerindeki ext2 olan kısım
  sudo mount — bind /dev /mnt/drive/dev
  sudo mount — bind /proc /mnt/drive/proc
  sudo mount — bind /sys /mnt/drive/sys
  sudo chroot /mnt/drive
  nano /etc/fstab # / için UUID düzenlenecek
  grub-mkdevicemap
```

**BUTUN HARİCİ DEPOLAMALARI SÖKÜN, KURULUM USB’Sİ DE DAHİL**

```bash
  update-grub
```

**Ve mutlu son :)**

Teşekkür: Bana bu rehberi hazırlayabilmem de yardımcı olan [GNULinuxtr](https://t.me/GNULinuxtr) ve [deepintr](https://t.me/deepintr) Telegram gruplarından:

- [sulincix](https://t.me/sulincix)
- [archi_dagac](https://t.me/archi_dagac)
- [oktay454](https://t.me/oktay454)
- [gokhanyildirimlar](https://t.me/gokhanyildirimlar)
- [caglarturali](https://t.me/caglarturali)

kullanıcı adlı kişilere teşekkürü bir borç bilirim :) (unuttuğum biri varsa affola, yazsın hemen ekleyeyim listeye)
