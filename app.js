// Arreglos de elementos para crear dominios aleatorios
let pronoun = ["the", "our", "my", "you", "their"];
let adj = ["great", "big", "fat", "smart", "dumb"];
let noun = ["jogger", "racoon", "city", "island", "cow"];
let extensions = [".com", ".net", ".io", ".org", ".onion", ".cl"];

function generateRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function generateDomain() {
  // Generar índices aleatorios para cada arreglo
  let randompronounIndex = generateRandomIndex(pronoun);
  let randomAdjIndex = generateRandomIndex(adj);
  let randomNounIndex = generateRandomIndex(noun);
  let randomExtensionsIndex = generateRandomIndex(extensions);

  // Construir el dominio
  let domain = `${pronoun[randompronounIndex]}${adj[randomAdjIndex]}${noun[randomNounIndex]}${extensions[randomExtensionsIndex]}`;

  return domain;
}

// GENERAR 20 DOMINIOS AL AZAR!
for (let i = 0; i < 20; i++) {
  let domain = generateDomain();
  console.log(`${i + 1}: ${domain}`);
}
