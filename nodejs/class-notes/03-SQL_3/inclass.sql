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