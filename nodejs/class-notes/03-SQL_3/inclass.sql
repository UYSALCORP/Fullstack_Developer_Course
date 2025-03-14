-- Active: 1741985288392@@127.0.0.1@5432@test
---------------------------------- JOINS ----------------------------------

-- INNER JOIN: Yalnızca kesilen kayıtları getirir.

SELECT * FROM "Album";
SELECT * FROM "Artist";

SELECT *
FROM Artist
JOIN Album ON Artist."ArtistId" = "Album"."ArtistId"

SELECT "Artist"."ArtistId", "Artist"."Name", "Album"."AlbumId", "Album"."ArtistId"
FROM Artist
JOIN Album ON Artist."ArtistId" = "Album"."ArtistId"

SELECT a."ArtistId", a."Name", l."AlbumId",l."Title"
FROM "Artist" AS a
JOIN "Album" AS l ON a."ArtistId" = l."ArtistId"

-- LEFT JOIN -- ÜST(FROM) tabloadki bütün kayıtlar ve JOIN tablodaki kesişen kayıtları getir
SELECT a."ArtistId", a."Name", l."AlbumId",l."Title"
FROM "Artist" AS a
LEFT JOIN "Album" AS l ON a."ArtistId" = l."ArtistId"

-- RIGHT JOIN -- ÜST(FROM) tabloadki kesişen kayıtlar ve JOIN tablodaki bütün kayıtları getirir.
SELECT a."ArtistId", a."Name", l."AlbumId",l."Title"
FROM "Artist" AS a
RIGHT JOIN "Album" AS l ON a."ArtistId" = l."ArtistId"
ORDER BY a."ArtistId" ASC, l."AlbumId" ASC;

-- FULL OUTER JOIN -- Her iki tablonun bütün kayıtlarını getir.
SELECT a."ArtistId", a."Name", l."AlbumId",l."Title"
FROM "Artist" AS a
FULL OUTER JOIN "Album" AS l ON a."ArtistId" = l."ArtistId";

--? Hangi sanatçı hangi albümleri çıkarmıştır? Bir albüme sahip olmayan sanatçıları gösterme.
SELECT "Name", "Title", t1."ArtistId"
FROM "Artist" t1
-- ON kullanmak yerine her iki taraftan da aldıgımızı belirtmek için using kullandık.
JOIN "Album" t2 USING ("ArtistId")
-- WHERE "Name" IS NOT NULL ;

--? Bütün sanatçıları göster. Hangi sanatçı hangi albume sahip onu da göster. Albüm sahibi olmayan kayıtları NULL göster.
SELECT "Name", "Title", t1."ArtistId"
FROM "Artist" t1
LEFT JOIN "Album" t2 USING ("ArtistId")

--! Functions ( IN & count )
--* Albüm tablosundaki toplam kayıt sayısını getirme
SELECT count(*) "total-album-number" FROM "Album";
SELECT count("AlbumId") "total-album-number" FROM "Album";

--* Her ülkenin toplam fatura sayısı
SELECT "BillingCountry", count("InvoiceId") "total-invoice"
FROM "Invoice"
GROUP BY "BillingCountry";

--* Bir ülkede birden fazla müşterisi olan ülkeleri getir.
SELECT Country, count("Country") "country-count"
FROM Customer
GROUP BY "Country"
HAVING count("Country") > 1;

--* ABD ve Kanada'daki faturaları listele
SELECT * 
FROM "Invoice"
WHERE BillingCountry IN ('USA', 'Canada')

--! INSERT, UPDATE, DELETE
SELECT * FROM Genre;
--? Yeni bir müzik türü ekle (INSERT)
INSERT INTO Genre ("GenreId", "Name") VALUES(27, 'Uysal')

--* Birden fazla müzik türü ekle
INSERT INTO Genre ("GenreId", "Name") 
VALUES(28, 'Türk Halk Müziği'), (29, 'Pop')

--? Bir müzik türünün adını güncelle (Uysal)
UPDATE Genre
SET NAME = 'Tasavvuf'
WHERE "GenreId" = 27;

--* Genre tablosundaki tüm verileri sil
DELETE FROM Genre;
DELETE FROM "Invoice"
WHERE "InvoiceId" = 1;