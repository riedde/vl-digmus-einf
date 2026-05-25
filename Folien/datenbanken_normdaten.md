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
tags:     datenbanken, normdaten
-->

# Datenbanken, Normdaten etc.



## Datenbanken

- Grundfragen für diesen Abschnitt:
  
  - Was ist eine Datenbank?
  - Welchen Zweck hat eine DB?
  - Was für Arten von DBs gibt es?

### (Meta-)Ziel
> Die Digital Humanities eint der Wille, den geisteswissenschaftlichen Fächern den Computer als Hilfsmittel der Erkenntnisgewinnung zur Verfügung zu stellen. Im Zentrum steht dabei die Datenverarbeitung. Um Daten zu verarbeiten, müssen diese jedoch zunächst erhoben, in einer Form abgelegt und schließlich abgerufen werden können. Gerade, wenn es sich um eine sehr große Datenmenge handelt, stehen deren strukturierte Speicherung und der effiziente Zugriff im Vordergrund.
> Daher kommen Datenbanksysteme zum Einsatz, die im Kontext einer spezifischen Anwendung dafür sorgen, dass der 'Rohstoff des 21. Jahrhunderts' verfügbar ist und bleibt.
>
> – Harald Klinke, *[Kap.] 8 Datenbanken*, in: *Digital Humanities*, hg. v. Jannidis et al.,  S. 109

### Begriffe
> **Datenverarbeitung:** Unter **Daten** werden hier Zeichen verstanden, die eine gewisse Syntax miteinander verbindet und die der Verarbeitung sowie der Ergebnisdarstellung dienen. Erst wenn Daten mit Bedeutung (Semantik) versehen werden, werden sie als ›Information‹ bezeichnet. Die Vernetzung von Informationen kann schließlich neue Erkenntnis generieren und Wissen erzeugen – das Ziel einer jeden Wissenschaft.
>
> – Harald Klinke, *[Kap.] 8 Datenbanken*, in: *Digital Humanities*, hg. v. Jannidis et al.,  S. 109

> Ein **Datenbanksystem** beinhaltet einerseits ein **Datenbankmanagementsystem** (DBMS) und andererseits die Datenbank mit den gespeicherten Daten selbst. Damit hilft das System diese Daten dauerhaft, effizient sowie widerspruchsfrei zu verwalten und zugreifbar zu halten. Des Weiteren stellt es der jeweiligen Anwendung eine Schnittstelle für die Abfrage, Auswertung, Veränderung und Verwaltung dieser Daten zur Verfügung.
>
> – Ebd.

> In Abgrenzung dazu ist das Datenbankmanagementsystem die Software, die das Datenbankmodell festlegt und die Funktionalität sowie die Performanz des Gesamtsystems bestimmt. Außerdem ermöglicht es den problemlosen Zugriff auf die Daten im Mehrbenutzerbetrieb. Der Begriff ›Datenbank‹ bezeichnet einen logisch zusammengehörigen Datenbestand, der auf physischen Speichern abgelegt ist.
>
> – Ebd.

### Arten von DBs

Relationale Datenbanken
---

> **Relationale Datenbank: Definition**
> 
> In einer relationalen Datenbank stehen Datenfelder und Tabellen miteinander in Beziehung und können mithilfe von Anweisungen ausgewertet werden. Das Modell der relationalen Datenbank bietet flexible Datenstrukturen und eine hohe Verarbeitungsgeschwindigkeit.
>
> – Harald Klinke, *[Kap.] 8 Datenbanken*, in: *Digital Humanities*, hg. v. Jannidis et al.,  S. 111

Graphdatenbanken
---
> Das **Graphdatenbankmodell** bietet extrem schnellen Zugriff auf vernetzte Daten. Diese liegen beispielsweise in Geoinformationen, Verkehrsbewegungen oder komplexen Beziehungsstrukturen vor, in denen Personen als **Knoten** (*nodes*) und deren Beziehung zueinander als **Kanten** (*edges*) dargestellt werden (s. Kap. 10.1).
>
> – Harald Klinke, *[Kap.] 8 Datenbanken*, in: *Digital Humanities*, hg. v. Jannidis et al.,  S. 126

XML-Datenbanken
---

> **XML-Datenbanken** empfehlen sich, wenn in einem Projekt XML-Daten zum Einsatz kommen. Mit XML können komplexe Objekte flexibel angelegt werden, da auch verschachtelte Strukturen möglich sind. Diese Dateien können jedoch sehr groß sein und benötigen mit wachsendem Umfang gegebenfalls einen schnellen Mehrbenutzerzugriff. Eine Konvertierung in eine relationale Datenbank, die dies leistet, würde die Struktur der Daten jedoch verändern und dadurch möglicherweise Fehler erzeugen. Bei der Verwendung einer XML-Datenbank kann der Vorteil der Dokumentenstruktur jedoch erhalten bleiben. Zudem können die Dokumente über eine Sprache, wie XPath, abgefragt und somit auch etwa über eine Schnittstelle mit dem Web verbunden werden.
>
> – Harald Klinke, *[Kap.] 8 Datenbanken*, in: *Digital Humanities*, hg. v. Jannidis et al.,  S. 127

## Normdaten

### Was ist das?

> Ein Normdatensatz beschreibt regelbasiert eine bestimmte Entität. In der GND gibt es Normdatensätze für verschiedene Entitäten: Personen, Körperschaften, Konferenzen, Geografika, Sachbegriffe und Werke, die in Bezug zu Kulturgütern sowie kulturellen und wissenschaftlichen Sammlungen unterschiedlichster Fachgebiete stehen. Je nach Entität enthält ein Normdatensatz außer der festgelegten Benennung weitere Informationen, die die Entität charakterisieren. Über Relationen zu anderen Normdatensätzen wird ein Beziehungsnetz hergestellt.
>
> – *Über die GND. 1. Was sind Normdaten*, https://gnd.network/Webs/gnd/DE/UeberGND/FAQ/_content/a1_wasSindNormdaten.html \[25.05.2026\]

Eine niederschwellige Einführung: https://digitale-wissenschaft.de/wissensblog/normdaten-was-sie-koennen-wo-du-sie-findest/

### Normdatenbanken

- GND

  - Lobid-gnd https://lobid.org/gnd
    
    - Georg Philipp Friedrich von Hardenberg ([118588893](https://lobid.org/gnd/118588893))
    - Konstantinopel ([4073697-0](https://lobid.org/gnd/4073697-0))
    - Deutschland (DDR [4011890-3](https://lobid.org/gnd/4011890-3) -> *Benutzungshinweise!*)
    - Friedrichs-Universität ([2024276-1](https://lobid.org/gnd/2024276-1))

  - Lobid-api https://lobid.org/gnd/api

- VIAF

  - Dennis Ried https://viaf.org/de/viaf/18157038080566862515
  - Johann Baptist Benz https://viaf.org/de/viaf/52434340


- Orte

  - [geonames](https://www.geonames.org/)
  - [Geo-Browser](https://de.dariah.eu/geobrowser) von DARIAH-DE[^1]
  - [Getty Thesaurus of Geographic Names® Online](https://www.getty.edu/research/tools/vocabularies/tgn/index.html)

[^1]: DARIAH steht für *Digital Research Infrastructure for the Arts and Humanities*
  
  [**DARIAH-DE**](https://de.dariah.eu/) war der deutsche Ableger des europäischen Großprojektes [**DARIAH-EU**](https://www.dariah.eu/) (2011–2019).

  Parallel dazu gab es ein Infrastrukturprojekte namens [**CLARIN-D**](https://clarin-d.net/de/index.html) *Common Language Resources and Technology Infrastructure*.
  
  **CLARIN-D** und **DARIAH-DE** wurden 2019 zusammengeführt zu  [**CLARIAH-DE**](https://digitalhumanities.de/projekt/clariah-de/) (2019–2021).

  Die Infrastrukturidee wird seit 2021 im Rahmen der *Nationalen Forschungsdaten Infrastruktur* ([NFDI](https://www.nfdi.de/)) weitergeführt.

### Kontrollierte Vokabulare

- Kontrollierte Vokabulare (MARC relator List, GND)
  
  - Ludwig Baumann (1866–1944), "Musikdirektor" (GND: [117758817](https://lobid.org/gnd/117758817))

    - Sachbegriff: [*Musikdirektor*](https://d-nb.info/gnd/7628980-1)

  - [MARC Code List for Relators](https://www.loc.gov/marc/relators/relaterm.html)

## Praxisbeispiel

### Weber-GA

Carl Maria von Weber-Gesamtausgabe (WeGA)
---

https://weber-gesamtausgabe.de/

---

Die WeGA verfügt über diverse Register[^2]. Jedes diese Register verzeichnet bestimmte Entitäten (z. B. Personen), die im Rahmen der Weber-Gesamtausgabe relevant sind. Jeder Datensatz ist über seine ID eindeutig identifizierbar.

---

Im Folgenden sehen Sie den Datensatz zu **Carl Maria von Weber** mit der ID **A002068**

---

```xml
<person xmlns="http://www.tei-c.org/ns/1.0" xml:id="A002068" source="WeGA" status="approved">
  <idno type="gnd">118629662</idno>
  <persName type="reg"><surname>Weber</surname>, <forename>Carl</forename> <forename>Maria</forename> <nameLink>von</nameLink></persName>
  <persName type="full"><surname>Weber</surname>, <forename>Carl</forename> <forename>Maria</forename> <forename>Friedrich</forename> <forename>Ernst</forename> <nameLink>von</nameLink></persName>
  <persName type="pseud">Melos</persName>
  <persName type="pseud">Knaster, Simon</persName>
  <persName type="pseud">Niemand</persName>
  <persName type="alt"><addName type="nick">Krautsalat</addName></persName>
  <birth>
    <date type="baptism" when="1786-11-20"/>
    <settlement key="A130030">Eutin</settlement>
  </birth>
  <death>
    <date when="1826-06-05"/>
    <placeName>
      <settlement key="A130011">London</settlement>
    </placeName>
  </death>
  <sex>m</sex>
  <occupation>Komponist</occupation>
  <occupation>Pianist</occupation>
  <occupation>Kapellmeister</occupation>
  <occupation>Musikschriftsteller</occupation>
  <residence>
    <settlement key="A130013">Breslau</settlement>
  </residence>
  <residence>
    <settlement key="A130006">Prag</settlement>
  </residence>
  <residence>
    <settlement key="A130003">Dresden</settlement>
  </residence>
  <!-- […] -->
</person>
```
Quelle: https://weber-gesamtausgabe.de/de/A002068.

---

Zusätzlich zu der projektinternen ID, ist die ID der Gemeinamen Normdatei ([GND](https://www.dnb.de/DE/Professionell/Standardisierung/GND/gnd_node.html)) angegeben, um den Inhalt des Datensatzes auch außherhalb der WeGA identifizierbar zu machen.

`<idno type="gnd">118629662</idno>`

---

Die WeGA geht hier jedoch noch einen Schritt weiter und bindet die Informationen, welche die GND anbietet direkt in ihre Weboberfläche mit ein.

<iframe style="width:100%; min-height: 750px;" src="https://weber-gesamtausgabe.de/de/A002068.html" title="WeGA-Personendatensatz zu von C. M. v. Weber"></iframe>

[^2]: Register: [Briefe](https://weber-gesamtausgabe.de/de/Register/Briefe), [Dokumente](https://weber-gesamtausgabe.de/de/Register/Dokumente), [Orte](https://weber-gesamtausgabe.de/de/Register/Orte), [Personen](https://weber-gesamtausgabe.de/de/Register/Personen), [Schriften](https://weber-gesamtausgabe.de/de/Register/Schriften), [Tagebücher](https://weber-gesamtausgabe.de/de/Register/Tageb%C3%BCcher), [Themenkommentare](https://weber-gesamtausgabe.de/de/Register/Themenkommentare), [Werke](https://weber-gesamtausgabe.de/de/Register/Werke) 

### Henze-Digital

Hans Werner Henzes künstlersiches Netzwerk (Henze-Digital)
---

https://henze-digital.zenmem.de/

---

Im Datensatz zu Fernsehoper [*La Cubana oder Ein Leben für die Kunst*](https://henze-digital.zenmem.de/de/A001000A/Werke/A02000DA.html) sind die Verantwortlichkeiten (Libretto, Musik, Inszenierung, Kostüme etc.) durch die [MARC Code List for Relators](https://www.loc.gov/marc/relators/relaterm.html) ausgedrückt:

---

```xml
<!-- A02000DA -->
<history xmlns="http://www.music-encoding.org/ns/mei">
	<eventList>
		<event type="us">
			<date isodate="1974-03-04"/>
			<settlement>Channel 13 (New York, WNET Opera Theatre)</settlement>
			<persName role="cnd" codedval="A001000A">Hans Werner Henze</persName>
			<persName role="ard" codedval="A0010E78">Kirk Browning</persName>
			<persName role="cst" codedval="A00102A7">Rouben Ter-Arutunian</persName>
			<persName role="std" codedval="A00102A7">Rouben Ter-Arutunian</persName>
		</event>
		<event type="ua-szen">
			<date isodate="1975-05-28"/>
			<settlement>München, Staatstheater am Gärtnerplatz</settlement>
			<persName role="cnd">Peter Falk</persName>
			<persName role="ard">Imo Moszkovicz</persName>
			<persName role="cst" codedval="A00049B9">Jürgen Henze</persName>
			<persName role="std" codedval="A00049B9">Jürgen Henze</persName>
		</event>
	</eventList>
</history>
```

---

<iframe style="width:100%; min-height: 750px;" src="https://henze-digital.zenmem.de/de/A001000A/Werke/A02000DA.html" title="HenDi-Werkdatensatz zur Oper La Cubana"></iframe>


