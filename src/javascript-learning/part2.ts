function addOneFactory(initial: number) {
  let prywatneA = initial;

  console.log('tworze nowa funkcje');

  const informacja = () => {
    console.log('dodaje nowa wartosc tutaj');
  };

  return (b: number) => {
    prywatneA += b;

    informacja();
    return prywatneA;
  };
}

const fns = {
  increament: addOneFactory(10),
};

console.log(fns.increament(1));
console.log(fns.increament(2));
console.log(fns.increament(3));
console.log(fns.increament(4));
console.log(fns.increament(5));
console.log(fns.increament(6));

// informacja(); blad
// informacja();
// informacja();
