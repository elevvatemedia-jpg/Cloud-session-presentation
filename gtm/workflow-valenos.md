# Workflow: pozyskanie founding members

Specyfikacja workflow do odtworzenia wewnątrz ValenOS. Napisana po ręcznym
przejściu procesu, nie przed, więc kroki odpowiadają temu, co naprawdę
trzeba zrobić.

**Trigger:** ręczny na start, potem harmonogram co poniedziałek.

---

## Kroki

**1. Agent leadów: znajdź kandydatów**
Filtry: Polska, 11 do 50 pracowników, kody NAICS 5415 (IT), 5613
(rekrutacja), 5418 (agencje), 5416 (konsulting).
Wzmocnienie sygnałem: aktywne ogłoszenia na stanowiska handlowe
("handlowiec", "sales manager", "business development",
"przedstawiciel handlowy").
Wynik: lista kandydatów z nazwą i domeną.

**2. Agent leadów: dyskwalifikacja**
To jest krok, którego nie było w pierwotnym planie i który okazał się
konieczny po realnym wyszukiwaniu. Odrzuć automatycznie:
- stowarzyszenia i izby gospodarcze (nazwa zawiera: stowarzyszenie,
  związek, izba, federacja, forum)
- media branżowe (magazine, brief, portal wydawniczy)
- społeczności, kluby i konferencje
- agencje załogowe i crewing morski (shipping, maritime, crew, ship
  management)
- studia gier
Oznacz do ręcznej weryfikacji: job boardy i marketplace, bo sprzedają
pracodawcom, ale w modelu self-serve.

**3. Agent wzbogacania: zbadaj firmę**
Dla każdej firmy, która przeszła krok 2:
- co dokładnie sprzedaje i w jakim modelu
- czy ma zespół sprzedaży (strona, LinkedIn, ogłoszenia)
- szacunkowa wartość transakcji
- sygnały: rekrutacja handlowca, wzrost zatrudnienia, finansowanie,
  strona z cennikiem
Wynik: ocena ICP od 1 do 10 plus jedno zdanie uzasadnienia.

**4. Agent wzbogacania: znajdź decydenta**
W firmie 11 do 50 osób: prezes, właściciel, członek zarządu. Nie dyrektor
sprzedaży, bo w tej wielkości to zwykle ta sama osoba albo nie ma jej wcale.
Znajdź adres e-mail i zweryfikuj go.

**5. Agent CRM: zapisz**
- dodaj firmę i osobę do CRM
- dodaj do listy "Founding members, batch N"
- etap transakcji: Nowy lead
- zapisz ocenę ICP i wyłapany sygnał w rekordzie

**6. Agent follow-upu: wyślij maila 1**
Personalizacja z pola `{{sygnal}}` wypełnionego w kroku 3. Wariant A albo
B, naprzemiennie, żeby dało się porównać. Stopka obowiązkowa.

**7. Agent follow-upu: follow-up po 4 dniach**
Tylko jeśli brak odpowiedzi. Jeden follow-up, nie trzy.

**8. Agent follow-upu: zatrzymaj się na odpowiedzi**
Każda odpowiedź zatrzymuje sekwencję natychmiast. Powiadom Mario.
Jeśli odpowiedź zawiera STOP lub odmowę: dopisz do listy wykluczeń
i nigdy więcej nie kontaktuj.

**9. Agent CRM: przesuń etap**
Odpowiedź to etap Kontakt. Umówione spotkanie to etap Spotkanie.

---

## Co ten workflow ma nam powiedzieć o produkcie

To jest właściwy powód, żeby go uruchomić na sobie, zanim uruchomimy go
u klienta. Zapisuj przy każdym przebiegu:

| Pytanie | Dlaczego to ważne |
|---|---|
| Ile kosztuje jeden przebieg w tokenach? | Wprost ustawia pakiety wolumenu w cenniku, które dziś są założeniem |
| Ile firm z kroku 1 przeżywa krok 2? | Mierzy, ile pracy naprawdę wykonuje dyskwalifikacja |
| Czy ocena ICP agenta zgadza się z Twoją? | Jeśli nie, to prompt jest zły i dowiemy się tego na sobie, a nie na kliencie |
| Ile maili agenta wysłałbyś bez poprawki? | Mierzy jakość agenta follow-upu |
| Ile godzin zajęła konfiguracja całego workflow? | To jest dokładnie ta liczba, którą obiecujemy klientowi na slajdzie 3 |

Ostatni wiersz jest najważniejszy. Prezentacja mówi, że wdrożenie to
konfiguracja liczona w godzinach. Ten przebieg to pierwszy raz, kiedy
będziemy wiedzieć, czy to prawda.
