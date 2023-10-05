// Arreglos de elementos para crear dominios aleatorios
let pronoun = ["the", "our", "my", "you", "their"];
let adj = ["great", "big", "fat", "smart", "dumb"];
let noun = ["jogger", "racoon", "city", "island", "cow"];
let extensions = [".com", ".net", ".io", ".org", ".onion", ".cl"];

function generateRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function generateDomain() {
  // Generar inxdex aleatorios para cada arreglo
  let randompronounIndex = generateRandomIndex(pronoun);
  let randomAdjIndex = generateRandomIndex(adj);
  let randomNounIndex = generateRandomIndex(noun);
  let randomExtensionsIndex = generateRandomIndex(extensions);

  // Construir el dominio (Estan sin espacio para que salga todo junto)
  let domain = `${pronoun[randompronounIndex]}${adj[randomAdjIndex]}${noun[randomNounIndex]}${extensions[randomExtensionsIndex]}`;

  return domain;
}

// GENERAR 20 DOMINIOS AL AZAR Y ENUMERADOS!
for (let i = 0; i < 20; i++) {
  let domain = generateDomain();
  console.log(`${i + 1}: ${domain}`);
}
//*PARA ESTE PROJECT ME BASE EN EL EJERCICIO DE LET IT BE Y EL EXCUSE GENERATOR
//**NO SUPE COMO HACER LO DE LOS DOMAIN HACKS, HICE OTRA FUNCION PARA ESO PERO NUNCA ME SALIO ASI QUE LA BORRE
