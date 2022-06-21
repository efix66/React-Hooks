# React-hooks

Mastering React hooks

1.useEffect

- Performeaza efecte secundare in componente functionale, este o functie ce primeste ca parametru alta functie care va fi executata la fiecare randare a componentei
  Ruleaza dupa primul render si dupa fiecare update al componentei.
  dACA DORIM SA RULEZE DOAR ODATA LA PRIMUL RENDER, PASAM DEPENDINTA [] EMPTY ARRAY
  Pentru a rula un efect conditionat, trebuie sa pasam un al doile parametru si anume un array "[]" unde specificam ce prop sau state vrem sa fie executat. In concluzie daca vrem sa rulam in mod conditionat un efect, il specificam in al doilea parametru "[]".
- useEffect cu cleanup, in corpul functiei facem return la o functie anonima unde elimina codul dupa ce componenta a fost inlaturata componenta.
- cand vrem sa folosim o functie in useEfeect, tot timpul vom declara, creea acea functie in useEffect()

- data fetching cu useeEfect si axios

  2.useContext

- Utilizarea contextului in React necesita 3 pasi simpli:
  a) crearea contextului
  b) furnizarea contextului
  c) consumarea contextului

  a - Functia din fabrica createContext() creeaza o instanta de context, ea accepta un argument optional: valoarea implicita

  b - Furnizarea Contextului - Componenta Context.provider disponibila in instanta contextului
  este utilizata pentru a furniza contextul componentelor sale secundare, indiferent cat de adanci sunt acestea
  Pentru a seta valoarea contextului utilizam valoarea "prop" disponibila in <Context.Provider value = {value}/>.
  Din nou, ceea ce e important aici este ca toate componentele care ar dori sa consume mai tarziu contextul trebuie sa fie impachetate in componenta furnizorului. Daca dorim sa modificam valoarea contextului actualizam pu si simplu valoarea "prop"

  c - Consumarea contextului cu useContext Hook

  Ca o scurta Reamintire, aplicarea contextului in React necesita 3 actori: contextul, fornizorul extras din context si conusmatorul.
