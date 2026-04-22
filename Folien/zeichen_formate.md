<!--
author:   Dennis Ried
email:    dennis.ried@musikwiss.uni-halle.de
version:  1.0.0
language: de
narrator: Deutsch Female
import:   ../liascript-config.md
link:     ../liascript-style.css
link:     https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap
font:     Source Sans 3
tags:     digitalitaet, formte, zeichencodierung
-->

# Einführung in die Digitale Musikwissenschaft

01010111 01101001 01101100 01101100 01101011 01101111 01101101 01101101 01100101 01101110 00100000 01111010 01110101 01110010 00100000 01111010 01110111 01100101 01101001 01110100 01100101 01101110 00100000 01010011 01101001 01110100 01111010 01110101 01101110 01100111 00100000 01100100 01100101 01110010 00100000 01010110 01101111 01110010 01101100 01100101 01110011 01110101 01101110 01100111 00100000 11100010 10000000 10011110 01000101 01101001 01101110 01100110 11000011 10111100 01101000 01110010 01110101 01101110 01100111 00100000 01101001 01101110 00100000 01100100 01101001 01100101 00100000 01000100 01101001 01100111 01101001 01110100 01100001 01101100 01100101 00100000 01001101 01110101 01110011 01101001 01101011 01110111 01101001 01110011 01110011 01100101 01101110 01110011 01100011 01101000 01100001 01100110 01110100 11100010 10000000 10011100[^1](Willkommen zur zweiten Sitzung der Vorlesung „Einführung in die Digitale Musikwissenschaft“)

## Wiederholung: analog, digital, hybrid

- Der Begriff bedeutet...
- Ein Beispiel wäre...
- Der Unterschied zu ... ist ...

## Daten und Datenverarbeitung

> Grundlage der computergestützten Arbeit in den Geisteswissenschaften ist die Datenverarbeitung, d. h. das Prinzip, dass jedes Problem, das sich mathematisch beschreiben lässt, auch mit einer Maschine zu lösen ist.
>
> – Jannidis et al.: Digital Humanities, Stuttgart 2017, S. 35

Elektronische Datenverarbeitung (EDV)

### Bit und Byte
> Der Unterschied zwischen analog und digital hat durch die digitale Speicherung von Musik und den damit verbundenen Siegeszug von neuen Tonträgern und Musikformaten Eingang in den allgemeinen Sprachgebrauch gefunden (Schröter 2004[^2]). Speichert man Musik analog, bestimmt etwa im Fall einer Schallplatte der physische Schalldruck die Tiefe und Form der Markierung im Speichermaterial – mit unendlich vielen möglichen Zwischenstufen und Formen. Die digitale Speicherung auf einer CD-Rom dagegen beruht letztendlich auf einer langen Folge von vorhandenen (_pit_) oder fehlenden (_land_) Vertiefungen. Der Übergang von einer Vertiefung zum Fehlen einer Vertiefung (und umgekehrt) wird als 1 gelesen, bleibt der Zustand gleich, wird dies als 0 gelesen.
>
> – Jannidis et al.: Digital Humanities, Stuttgart 2017, S. 59

**bit**  steht für _binary digit_

Moderne Computer verarbeiten (32-Bit oder) 64-Bit gleichzeitig. Es handelt sich immer um ein von 2.

Wichtig(st)e Einheit ist das **Byte**, 1 Byte = 8 Bit. Mit einem Byte kann eine binäre Zahl dargestellt werden, die 256 verschiedene Werte annehmen kann. Bsp. Die Zahlen von 0 bis 255 lassen sich mit nur einem Byte codieren.

> Daten im Binärsystem (auch Dualsystem genannt) darzustellen, bedeutet, eine Folge von Nullen und Einsen zu erzeugen. Diese können – ähnlich wie im Dezimalsystem – mithilfe von Rechenregeln verarbeitet werden. Da Dezimalzahlen in Binärzahlen umgewandelt werden können, kann auf diese Weise gerechnet werden \[…\].
>
> – Jannidis et al.: Digital Humanities, Stuttgart 2017, S. 35


| Dezimalzahl   | Binäre Zahl   |
| :---- | :---- |
| 0  | 0    |
| 1  | 1    |
| 2  | 10   |
| 3  | 11   |
| 4  | 100  |
| 5  | 101  |
| 6  | 110  |
| 7  | 111  |
| 8  | 1000 |
| 9  | 1001 |
| 10 | 1010 |

Neben dem Binärsytem gibt es zahlreiche weitere Zahlensysteme. Ein bekanntes ist das [Hexadecimalsystem](https://www.w3schools.com/programming/prog_hexadecimal_numbers.php). (Zur Berechnung siehe Jannidis et al., S. 61)

> Der Vorteil ist, dass Binärzahlen, die technisch ›Spannung ein‹ (1) bzw. ›Spannung aus‹ (0) bedeuten können, beliebige Inhalte, wie Bilder oder Töne, repräsentieren können, die gespeichert und verarbeitet werden. Die Zweiwertigkeit liegt auch in Booleschen Variablen vor, die ebenfalls nur zwei Werte annehmen (wahr/falsch) und mithilfe der Booleschen Algebra verarbeitet werden können.
>
> – Jannidis et al.: Digital Humanities, Stuttgart 2017, S. 35

[^2]: Schröter, Jens: »Analog/Digital – Opposition oder Kontinuum?«. In: Ders./Alexander Böhnke (Hg.): Analog / Digital – Opposition oder Kontinuum? Zur Theorie und Geschichte einer Unterscheidung, Bielefeld 2004, 7–30.

### Exkurs: ENIAC und Dimensionen

Deutschlands größtes Computermuseum: Heinz-Noxdorf-MuseumsForum Paderborn ([Virtuelle Tour](https://www.hnf.de/dauerausstellung/virtuelle-rundtour-1.html))

[ENIAC – "Electronic Numerical Integrator and Computer"](https://www.hnf.de/dauerausstellung/ausstellungsbereiche/die-erfindung-des-computers/eniac-der-erste-roehrenrechner-im-massstab-11.html). Die Idee zum Bau kam 1943 auf. Der Rechner war bis 1955 im Betrieb. Der Computer basierte auf Röhren, die eine höhere Geschwindigkeit zuließen, als elektromechanische Rechnenmaschinen.

> Der Arbeitsspeicher dient der Ablage von Binärdaten, auf die das Steuerwerk zugreift. Häufig benötigte Daten werden üblicherweise in einem Cache gepuffert, um schnelleren Zugriff darauf zu haben. Im Arbeitsspeicher hat jede Speicherstelle eine eindeutige Adresse. Jedes Schaltelement entspricht 1 Bit, das auf 0 oder 1 geschaltet werden kann. Die Kapazität des Chips entspricht daher der Formel 2^n^ mit n der Anzahl an Schaltelementen. Diese liegen heute häufig bei 4GB, also 4 × 230 Byte = 4.294.967.296 Byte \[…\]. Beispiel: Der Homecomputer Commodore 64 besaß 64 KB Speicher, ein Apple iPhone 6S 2 GB.
>
> – Jannidis et al.: Digital Humanities, Stuttgart 2017, S. 38


## Zeichencodierung

> Computer kodieren Texte in der Form von abstrakten Zeichen, z. B. der Großbuchstabe ›D‹ des lateinischen Alphabets – gedacht noch ohne die Realisierung in einer bestimmten Ausprägung z. B. in einer Handschrift oder im Druck. Diese konkrete Ausprägung des Zeichens bezeichnet man als Glyphe; das gleiche Zeichen kann, etwa für die Ausgabe auf dem Bildschirm oder Drucker, in verschiedenen Glyphen wiedergegeben werden
>
> – Jannidis et al.: Digital Humanities, Stuttgart 2017, S. 61

Glyphe: Bild, das ein Zeichen oder ein Teil davon repräsentieren kann. Schriftart, -größe und Gestalt kann unterscheidlich sein.

Verhältnis von Glyphe zu Zeichen muss nicht eindeutig sein.

Zeichenfolge „ff“

1. „ff“ (zwei Glyphen)
2. „ﬀ“ (eine Glyphe, Ligatur)

Wichtig: „ê“ kann eine Glyphe sein oder aus „^“ und „e“ zusammengesetzt sein. Bei unterschiedlichen Schriftarten wird das ggf. unterschiedlich gehandhabt. D.h., dass ein oder mehrere Zeichen durch ein oder mehrere Glyphen repräsentiert werden kann!

Beispiel: Die Glyphe „A“ kann für das griechische Alpha und das lateineische große A stehen.

> Computer verwenden Zahlen zur internen Repräsentation von Zeichen. Jedem abstrakten Zeichen wird eine Zahl eindeutig zugeordnet, d. h. jeder Zeichencode gehört zu einem bestimmten Zeichen und jedes Zeichen hat einen ganz bestimmten Zeichencode. Aus diesen Zuordnungen ergibt sich insgesamt die Zeichenkodierung, z. B. 0 = A, 1 = B, 2 = C usw.
>
> – Jannidis et al.: Digital Humanities, Stuttgart 2017, S. 62

Die Zuordnung kann theoretisch willkürlich vorgenommen werden, daher sind Standards extrem wichtig!

### Standards

1963 Publikation von Version 1 des **ASCII**-Code
- _American Standard Code for Information Interchange_
- 128 Zeichen (2^7^ = 128, aus Kapazitätsgründen)
- ohne Umlaute, Akzente, Sonderzeichen, keine außereuropäischen Sprachen
- später 8 Bit (2^8^ = 256) = 1 Byte

> Erste Abhilfe wurde durch den Standard ISO 8859 (_International Organization for Standardization_) geschaffen, der eine Reihe von 8-Bit-Zeichensätzen definiert, z. B. 8859-1 (Latin-1, Westeuropäisch) oder 8859-5 (Kyrillisch).
>
> – Jannidis et al.: Digital Humanities, Stuttgart 2017, S. 63

Die Lösung: **[Unicode](https://home.unicode.org/)** (2006)

> Anfangs war Unicode ein 16-bit-Zeichensatz, womit 65.536 (216) Zeichen definiert werden können, doch erwies sich das bald als zu wenig. Heute ist Unicode ein Zeichensatz, der theoretisch über eine Millionen Zeichen enthalten kann. In der aktuellen Version 9.0 sind rund 128.000 verschiedene Zeichen enthalten. Der Standard umfasst Zeichensätze für europäische Alphabete wie das Kyrillische, Koptische und Georgische, für das Arabische und Hebräische, für mehrere indische Sprachen, chinesische und japanische Schriftzeichen sowie für alte Sprachen wie das Altgriechische, die Keilschrift, Linear B oder das Gotische. Nur der Antrag, auch das Klingonische in Unicode zu kodieren, wurde abschlägig beschieden. Jedes Jahr kommen ca. 1000 Zeichen hinzu. Für die Kodierung moderner deutschsprachiger Texte hat sich nicht viel geändert, da die ersten 256 Zeichen von Unicode identisch sind mit ISO 8859-1. Allerdings hat erst Unicode die Kodierung von mittelalterlichen Texten ohne eigene Zeichendefinitionen ermöglicht.
>
> – Jannidis et al.: Digital Humanities, Stuttgart 2017, S. 64

So funktioniert's: Jedes Zeiche hat einen **Codepoint** (Zeichencode)

| Unicode   | Zeichen   | Name (dt)  |
| :--------- | :--------- | :--------- |
| [0041](https://www.compart.com/de/unicode/U+0041) | A | Lateinischer Großbuchstabe A |
| [00DF](https://www.compart.com/de/unicode/U+00DF) | ß | Lateinischer Kleinbuchstabe Scharf-S |
| [1E9E](https://www.compart.com/de/unicode/U+1E9E) | ẞ | Lateinischer Großbuchstabe Scharf-S |
| [FB00](https://www.compart.com/de/unicode/U+FB00) | ﬀ | Lateinische kleine Ligatur Ff   |

 **Problem:** höherer Speicherbedarf, da ein Zeichen nun 4 Byte statt 1 Byte Speicherplatzbenötigt.

 **Lösung:** reduzierte Standards, wie **UTF-8** (_8-Bit Unicode Transformation Format_), i. e. Reduktion auf die ersten 256 Zeichen.

## Formate

> Was kennt ihr für Formate?

### Dateiformate

- Textformate https://www.sttmedia.de/unicode-dateiformate

  - txt (unformatiert, ASCII, UTF-8, hoch kompatibel, Stabilität über Jahrzehnte)
  - rtf (proprietär, 1987 von Microsoft eingeführt, Transportiert Inhalte, aber keine zuverlässigen Layout Informationen, enthält eingebettete Informationen zur Formatierung)

- Tabellenformate (xsl, [csv](https://data.europa.eu/apps/data-visualisation-guide/csv-files), [tsv](https://www.loc.gov/preservation/digital/formats/fdd/fdd000533.shtml))
- Bildformate (jpg vs. [png](http://www.libpng.org/pub/png/spec/1.2/PNG-Structure.html), tiff)

	- Sonderling: Vektorgrafiken (svg)

- AV-Formate (wav, mp3, mp4)
- PDF
- Auszeichnungssprachen (md, LaTeX, XML, HTML)

To talk about: **Leerzeichen** und **Umbrüche**, **Binärdateien**

## Literatur
- Jannidis, Fotis: Kapitel 5 „Zahlen und Zeichen“, in: Ders. et al. (Hg.): Digital Humanities. Eine Einführung, Stuttgart 2017, S. 59–67.
- Schröter, Jens: "Analog/Digital – Opposition oder Kontinuum?". In: Ders./Alexander Böhnke (Hg.): Analog / Digital – Opposition oder Kontinuum? Zur Theorie und Geschichte einer Unterscheidung. Bielefeld 2004, 7–30.
- The Unicode Consortium: "The Unicode Standard, Version 9.0", http://www.unicode.org.
- Heinz-Nixdorf-MuseumsForum, https://www.hnf.de/
- Unicode (Zeichenübersicht), https://www.compart.com/de/unicode/