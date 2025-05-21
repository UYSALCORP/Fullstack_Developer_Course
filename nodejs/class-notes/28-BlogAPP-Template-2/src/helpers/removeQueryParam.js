module.exports = function removeQueryParam(queryString, paramName) {
  const searchParams = new URLSearchParams(queryString);
  searchParams.delete(paramName);

  return Array.from(searchParams.entries())
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};

// Usage
//const originalQuery = "page=1&sort[createdAt]=asc&limit=4";
//const newQueryString = removeQueryParam(originalQuery, "page");

//input: page=1&sort[createdAt]=asc&limit=4
// Outputs: sort[createdAt]=asc&limit=4

/*
Protokol (Scheme):
Alan Adı (Domain) veya IP Adresi:
Port Numarası
Path
Query String
fragment ,anchor
*/
