--# DISTINCT: Tekrar eden kayitlari getirmez.
SELECT DISTINCT BillingCountry
FROM Invoice;

--# WHERE: Koşul belirterek veri çekme işlemi
--# Operatörler: =, >, <, !=, <>, <=, >=, BETWEEN, LIKE, AND, OR, NOT, NOT IN

--? Almanyada kesilen faturaları listeleme
SELECT *
FROM Invoice
WHERE BillingCountry = 'Germany';

--? Fatura miktarı 5 ile 8 arasında olanları listeleme
-- <= ve >= kullanarak
SELECT *
FROM Invoice
WHERE Total >= 5 AND Total <= 8;
-- BETWEEN
SELECT *
FROM Invoice
WHERE Total BETWEEN 5 AND 8;

--? Belirli tarihler arasındaki faturaları listeleme
SELECT *
FROM Invoice
WHERE InvoiceDate BETWEEN '2009-1-1' AND '2009-3-3';

--# LIKE Operatoru: Belirli bir desene uygun kayıtları getirir.
--? Fatura ulkesi 'Germany' olanları listeleme
SELECT *
FROM Invoice
WHERE BillingCountry LIKE 'Germany';

--# % koyunca başındaki harf olduğu sürece devamını önemli değil diyor.
--? 'G' ile başlayan
SELECT *
FROM Invoice
WHERE BillingCountry LIKE 'G%';
--? 'y' ile biten ülkeler
SELECT *
FROM Invoice
WHERE BillingCountry LIKE '%y';
--? g ile bşalasın y ile bitsin
SELECT *
FROM Invoice
WHERE BillingCountry LIKE 'G%y';
--? içinde w harfi geçen
SELECT *
FROM Invoice
WHERE BillingCountry LIKE '%w%';
--? İkinci harfi "o" olan ülkeler
SELECT *
FROM Invoice
WHERE BillingCountry LIKE '_O%';
--? Üçüncü harfi r son harfi y
SELECT *
FROM Invoice
WHERE BillingCountry LIKE '__r%y';

--# NOT IN: Belirtilen verilerle eşleşmeyenleri listele
SELECT *
FROM Invoice
WHERE BillingCountry NOT IN ('Norway','USA');

--# LIMIT: Belirtilen sayıda kayıt getirme
--? İlk 10 FATURAYI getir.
SELECT *
FROM Invoice
LIMIT 10;

--# ORDER BY: Sıralama işlemi (ASC: Artan, DESC: Azalan)
--? Ülke adına göre artan sıralama
SELECT *
FROM Invoice
ORDER BY BillingCountry; -- Default yazım ASC
--? Ülke adına göre azalan sıralama
SELECT *
FROM Invoice
ORDER BY BillingCountry DESC;

--? Ülke adına göre artan, Şehir adına göre azalan
SELECT BillingCountry, BillingCity
FROM Invoice
ORDER BY BillingCountry, BillingCity DESC;

--? AC/DC Grubu ilk parçası
SELECT *
FROM Track
WHERE Composer ='AC/DC'
LIMIT 1;

--? AC/DC Grubu son 3 parcası
SELECT *
FROM Track
WHERE Composer ='AC/DC'
ORDER BY TrackId DESC
LIMIT 3;

--# Fonksiyonlar: MIN, MAX, AVG, SUM, ROUND, LENGTH (TEK DEĞER DÖNDÜREN FONKSİYONLAR SELECT ILE FROM ARASINA YAZILIR)
--SELECT * FROM Invoice;

--? Toplam fatura miktarı hesaplama
SELECT SUM(TOTAL) "TOPLAM FATURA MIKTARI"
FROM Invoice;

--? En düşük, En büyük ve Ortalama
SELECT 
	MIN(Total) minFatura,
	MAX(Total) maxFatura,
	ROUND(AVG(Total),2) avgFatura -- ORTALAMA FATURAYI YUVARLADIK. VİRGULDEN SONRASINI 2 HANELİ SEÇTİK
FROM Invoice;

--? FATURA ADRES UZUNLUKLARI
SELECT BillingAddress AS FaturaAdres, length(BillingAddress) AS FaturaAdresUzunlugu
FROM Invoice;

--? AC/DC grubunun en kısa sürede çalan parçası
SELECT *
FROM Track
WHERE Composer = 'AC/DC'
ORDER BY Milliseconds ASC
LIMIT 1;

--? Roger Glover en uzun parçası
SELECT *
FROM Track
WHERE Composer = 'roger glover'
ORDER BY Milliseconds DESC
LIMIT 1;
-- v1
SELECT *, MIN(Milliseconds) AS "En kısa parca"
FROM Track
WHERE Composer = "roger glover";

--! Birden fazla fonksiyon kullanırken diğer alanlara dikkat etmek gerekir.
SELECT *, MIN(Milliseconds) AS "En kısa parca", MAX(Milliseconds)
FROM Track
WHERE Composer = "roger glover";

--# GROUP BY: Verileri Gruplama
SELECT * 
FROM Invoice
GROUP BY BillingCountry ;

--? Keslien ortalama fatura miktarına göre
SELECT *, round(AVG(Total),2)
FROM Invoice
GROUP BY BillingCountry;

--? Ortalama fatura miktarı 6 üstü olanları getir
SELECT *, round(AVG(Total),2) as Fatura
FROM Invoice
GROUP BY BillingCountry
HAVING AVG(Total) > 6;
-- Having ile beraber foksiyon kullanılır.

--# SUBQUERY: İç içe sorgu
--? Ortalama fatura miktarından yüksek olan faturaları listeleme
-- 1
SELECT ROUND(AVG(Total))
FROM Invoice;
-- 2
SELECT *
FROM Invoice
WHERE TOTAL > 6.0;

-- 3-SUBQUERY
SELECT *
FROM Invoice
WHERE Total > (
	SELECT ROUND(AVG(Total))
	FROM Invoice
);

--? Album tablosundaki "Big Ones" albüm parça listeleme
-- Önce albüm bilgileri bul, albumId değerini al ve parçaları listele

-- 1- "Big Ones" albumune ait bilgiler
SELECT *
FROM Album
WHERE Title = "Big Ones";

-- 2- Album Id'si 5 olan parçaları listeleme
SELECT *
FROM Track
WHERE AlbumId = 5;

-- Final solution with subQuery
SELECT *
FROM Track
WHERE AlbumId = (SELECT AlbumId
				 FROM Album
				 WHERE Title = "Big Ones");

--? Mark Philips için kesilen faturaları listeleme

--# JOIN: Tabloları birleştirme

--? Her bir albüm ve ait oldugu sanatçı bilgilerini getirme (LEFT JOIN)
SELECT *
FROM Album
LEFT JOIN Artist ON Album.ArtistId = Artist.ArtistId; -- JOIN türünü belirtmezsek default olarak inner join olarak gelir


