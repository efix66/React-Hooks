# React-hooks

Mastering React hooks

1 useEffect

- Performeaza efecte secundare in componente functionale, este o functie ce primeste ca parametru alta functie care va fi executata la fiecare randare a componentei
  Ruleaza dupa primul render si dupa fiecare update al componentei.
  Pentru a rula un efect conditionat, trebuie sa pasam un al doile parametru si anume un array "[]" unde specificam ce pop sau state vrem sa fie executat. In concluzie daca vrem sa ruluma in mod conditionat un efect, il specificam in al doilea parametru "[]".
- useEffect cu cleanup, in corupul functie facem return la o functie anonima unde elimina codul dupa ce componenta a fost inlaturata.
- cand vrem sa folosim o functie in useEfeect, tot timpul vom declara creea acea functiie in useEffect()
- data fetchin cu useeEfect si axios

2 useContext

- Sunt 3 pasi in utilizarea useContext

1. Creare Context (const UserContext = React.createContext())
2. Punerea componenteti in UserContext.Provider/> si atribuite o valoare -value={}
