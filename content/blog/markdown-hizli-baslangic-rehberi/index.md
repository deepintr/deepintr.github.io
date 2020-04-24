---
title: "Markdown Hızlı Başlangıç Rehberi"
date: "2018-11-22"
author: "caglarturali@github"
description: "Markdown Hızlı Başlangıç Rehberi"
---

Şimdiye dek fark etmediyseniz eğer hemen belirtelim. Bu gönderi de dahil olmak üzere sitemizdeki bütün içerikler, Markdown denilen özel bir işaretleme dili ile girilmektedir. Peki nedir bu Markdown?

## Markdown ile tanışın!

Markdown, web yazarları için bir metin-HTML dönüştürme aracıdır. Yani Markdown, yazımı ve okunması kolay bir sözdizimi ile düz metin formatında girdiğiniz metni, yapısal olarak geçerli HTML'e dönüştüren bir aracıdır denilebilir. Ayrıca Markdown, GitHub başta olmak üzere birçok platformun standart dökümantasyon/yazım dilidir. Teorisi karmaşık geldiyse, örneklere geçip basitliğini inceleyelim.
​

### Düz metin

Tahmin ettiğiniz gibi düz metinler için herhangi bir biçimlendirme yapmanıza gerek yok. Doğrudan yazmaya başlayabilirsiniz.

​

### Bold ve Italic

Metnimizi koyu veya eğik metin formunda biçimlendirmek için `*` ve `_` karakterlerini kullanıyoruz.

> \*koyu metin\*

> \_eğik metin\_

Çıktı:

**koyu metin**

_eğik metin_

​

### Başlıklar

Büyükten küçüğe doğru 6 seviye başlık oluşturabiliyoruz.

> \# En büyük başlık

> \## Daha küçük başlık

> \### Daha da küçük başlık

> \#### Çok daha küçük başlık

> \##### Çok çok daha küçük başlık

> \###### Çok ama çok küçük başlık

​
Yukarıdaki satırların çıktısı sırasıyla şöyle gözükecektir:

# En büyük başlık

## Daha küçük başlık

### Daha da küçük başlık

#### Çok daha küçük başlık

##### Çok çok daha küçük başlık

###### Çok ama çok küçük başlık

​

### Linkler (Bağlantılar)

Sayfaya bağlantı eklemek için aşağıdaki sözdizimini kullanıyoruz; köşeli parantezler içerisinde bağlantı metni, normal parantezler içerisinde bağlantının kendisi.

> \[Google'a sor](https://www.google.com)

Çıktı:

[Google'a sor](https://www.google.com)

​

### Görüntü

Sayfaya görüntü eklemek, bağlantı eklemekle hemen hemen aynı. Tek fark bağlantı metninin zorunlu olmaması ve `!` ile başlamak gerekiyor olması. Ancak yine de içeriğin erişilebilir olması açısından bağlantı metni yerine görseli açıklayan bir ifade girmek yerinde olacaktır.

> \!\[Kedi gifi tabii ki!](https://www.catgifpage.com/gifs/318.gif)

Çıktı:

![Kedi gifi tabii ki!](https://www.catgifpage.com/gifs/318.gif)

### Listeler

Markdown sıralı ve sırasız listeler oluşturmaya izin veriyor.

> 1.  Bir

> 2.  İki

> 3.  Üç

​
Çıktı:

1. Bir
2. İki
3. Üç

​
Sırasız listeler için `*` veya `-` karakteri kullanılabilir:

> \- Deepin Linux

> \- macOS

> \- Windows

​
Çıktı:

- Deepin Linux
- macOS
- Windows

​

### Alıntılar (Quote/Blockquote)

Alıntı eklemek için "büyüktür" karakteri ile başlamak yeterli. Karakterin kendisini yazamıyorum çünkü büyüktür karakterinden sonra gelen herşey alıntı olarak yorumlanıyor. Ayrıca yazının başından beri örnekleri alıntı olarak eklediğimi de belirtmekte fayda var!

> \> Umarım bu örnek işe yarar.

​
Çıktı:

> Umarım bu örnek işe yarar.

​

### Kod örneği

Sayfaya sabit aralıklı metin formunda kod parçacıkları girmek için 'ters tırnak' karakterinden faydalanıyoruz.

> \`console.log('Hello World!');\`

​
Çıktı:

`console.log('Hello World!');`

​

## Özet

Markdown'ın yetenekleri burada özetlenenden daha geniş olmakla birlikte, şimdiye dek anlattıklarımız makalelerinizi biçimlendirebilmeniz için temel gereksinimlerinizi karşılıyor olmalı. Eksik kaldığını düşündüğünüz noktalar varsa, yorum olarak bildirebilirsiniz.
