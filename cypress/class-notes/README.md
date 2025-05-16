# Cypress Class Notes

## List of Cypress Class Notes as follow :
- Modern web uygulamaları için bir test otomasyon aracıdır.
- Geliştiricilere uygulamayı test etme, performans kontrol etme imkanı tanır.
- Yazılan test senaryolarını otomatik tarayıcıda çalıştırır. DOM üzerinde işlemler gerçekleştirerek appin davranışlarını kontrol eder.
- Gerçek zamanlı olarak takip edebilir ve hata ayıklayabilirsiniz.

## Why you need to use:
- Gerçek zamanlı test izleme ve hata ayıklama
- Kolay kullanım ve öğrenme eğrisi
- Modern web teknolojileriyle uyumlu
- Paralel ve dağıtık testler için destek
- Entegre bekleme ve zamanlama kontrolleri

## To install cypress.io
- yarn add cypress --dev
- pnpm add --save--dev cypress
- npm install cypress --save --dev

## Open cypress
- npx cypress open

## Describe & it
- Organize ve yapılandırma için kullanılır.
- describe() -> Bir test senaryosunu tanımlamak için kullanılır. İçinde bulunan tüm it() bloklarını içerebilir.
- it() -> Belirli bir test senaryosunu tanımlamak için kullanılır.

## Gezinme - Navigation
- cy.visit() -> Belirli bir URL'ye gitmek için
- cy.url() -> Geçerli URL'yi almak için
- cy.go() -> Geri ve İleri gitmek için kullanılır.

## Temel Seçiciler - Basic Querries
- cy.get() -> Belirli bit HTML elementini almak için kullanılır.
- cy.contains() -> Belirli bir "metni" içeren bir elementi seçmek için kullanılır.
- .find() ->Bir element içinde alt elementleri bulmak için kullnaılır. 

## Element İşlemleri
- .click() -> Bir elementi tıklamak için
- .type() -> Bir input alanına metin girmek için
- .clear() ->Bir input alanındaki metni temizlemek için

## Doğrulama - Assertion
- .should() ->Bir beklentiye uygun olup olmadığını kontrol et
- should ile birlikte "eq", "include" kullanılır.

## Bekleme - Wait
- cy.wait() -> Belirli bir süre beklemek için kullanılır.
- Yavaş sistemlerde tercih edilir.
- Cypress hızlı çalıştığı için bazı hatalar alınabilir. "..." İle önüne geçilebilir.

## Bazı Önemli Komutlar:
- cy.title() -> Sayfa başlığını almak için
- cy.viewport() -> Sayfa görüntüleme alanını ayarlamak için
- cy.log() -> Konsola bir ileti yazdırmak için
- cy.screenshot() -> Ekran görüntüsü almak için kullanılır.
- .only, .skip -> Sadece belirli testleri çalıştırmak veya geçirmek için kullnaılır.

## Best Practice
- Elementlerimizde, componentlerimizde içeriklerine bir "data-test" tanımla.
- When determining a unique selector, it will automatically prefer elements with;
- data-cy
- data-test
- data-testid
- Usage: "[data-test="lorem"]"