## Linux Deepin Türkiye Blog

### Nasıl İçerik Eklerim?

- [Yerel geliştirme ortamında çalıştırma](https://github.com/deepintr/www#yerel-geli%C5%9Ftirme-ortam%C4%B1nda-%C3%A7al%C4%B1%C5%9Ft%C4%B1rma) adımlarını izlediğinizden emin olun.

- [\_template](./_template) dizininin bir kopyasını oluşturun.

- Yeni oluşturduğunuz dizinin adını, içeriğinizi yansıtacak şekilde düzenleyin. Dizin adı içeriğinizin URL'si olacağı için boşluk ve Türkçe karakter kullanmamaya dikkat edin. (`windows-oyunlari-linuxta-nasil-oynanir` gibi.)

- Dizin içerisindeki `index.md` dosyasında şu düzenlemeleri yapın:

  - ```
    ---
    title: "İçerik Başlığı"
    date: "YYYY-AA-GG"
    author: "kullanıcıadı@platform"
    description: "Kısa açıklama"
    ---
    ```

  - Dosyanın geri kalanını içeriğinizi oluşturmak için dilediğiniz gibi kullanabilirsiniz. Markdown ile nasıl çalışacağınızı bilmiyorsanız [şuraya](https://deepintr.org/markdown-hizli-baslangic-rehberi/) göz atın.

- İçeriğinizi hazırladıktan sonra değişiklikleri `commit` edin.

  ```bash
  git add .
  git commit -m "Ekle: içerik konusu"
  ```

- Değişiklikleri `push` edin.

  ```bash
  git push
  ```

- İçeriğinizin siteye dahil edilebilmesi için [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) açın.

- Hepsi bu! Katkınız için teşekkürler. :blush:
