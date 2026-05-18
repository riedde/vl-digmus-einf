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

# Textcodierung

![Encoding of a Letter of Joachim Raff](../Bilder/raff-brief-encoding.png "Encoding of a Letter of Joachim Raff")

## Daten

Strukturierte Daten versus unstrukturierte Daten

### unstrukturiert
> „Penny veranstaltet eine Halloween-Party und lädt die vier Freunde dazu ein. Beim Kostüm-Check stellen sie fest, dass jeder sich als The Flash verkleidet hat und alle wechseln ihre Kostüme: Leonard geht als Frodo, Sheldon als Dopplereffekt, Howard als Robin Hood (alle halten ihn allerdings für Peter Pan) und Rajesh als Thor.“
>
> – In: https://de.wikipedia.org/wiki/The_Big_Bang_Theory/Staffel_1

### semistrukturiert
```xml
<text>
   <body>
      <p><persName>Penny</persName> veranstaltet eine <term>Halloween-Party</term>
        und lädt <rs>die vier Freunde</rs> dazu ein. Beim <term>Kostüm-Check</term>
        stellen sie fest, dass jeder sich als <roleName>The Flash</roleName>
        verkleidet hat und alle wechseln ihre Kostüme: <persName>Leonard</persName>
        geht als <roleName>Frodo</roleName>, <persName>Sheldon</persName> als
        <roleName>Dopplereffekt</roleName>, <persName>Howard</persName> als
        <roleName>Robin Hood</roleName> (alle halten ihn allerdings für
        <roleName>Peter Pan</roleName>) und <persName>Rajesh</persName> als
        <roleName>Thor</roleName>.“</p>
   </body>
</text>
```

### strukturiert

{{0}}
******************************************
Kostüm-Check
---
(Alle haben noch die gleichen Kostüme an.)

```xml
<event n="1">
  <head>Kostüm-Check</head>
  <desc>
      <listPlace>
        <place>
            <placeName>Wohnung</placeName>
        </place>
      </listPlace>
      <listPerson>
        <person>
            <persName>Sheldon</persName>
            <persona>
              <name type="role">The Flash</name>
            </persona>
        </person>
        <person>
            <persName>Lenoard</persName>
            <persona>
              <name type="role">The Flash</name>
            </persona>
        </person>
      </listPerson>
  </desc>
</event>
```

******************************************
{{1}}
******************************************
---

Erneuter Kostüm-Check
---
(Alle haben nun unterschiedliche Kostüme an.)

```xml
<event n="2">
  <head>Kostüm-Check</head>
  <desc>
      <listPlace>
        <place>
            <placeName>Wohnung</placeName>
        </place>
      </listPlace>
      <listPerson>
        <person>
            <persName>Sheldon</persName>
            <persona>
              <name type="role">Dopplereffekt</name>
            </persona>
        </person>
        <person>
            <persName>Lenoard</persName>
            <persona>
              <name type="role">Frodo</name>
            </persona>
        </person>
      </listPerson>
  </desc>
</event>
```
******************************************

## Mark-up and -down

> **Markup** heißt übersetzt soviel wie *Auszeichnung*. Mit einer **Markup-Sprache** können Texte ausgezeichnet werden. Hierbei werden Informationen in den Text eingearbeitet, sodass eine weitere Bedeutungsebene ensteht. Diese Form wird auch **semantisches Markup** genannt.

> **Markdown**: Da Markup-Sprachen sehr schnell in ihrer Komplexität steigen, wurde **Markdown** als Alternative geschaffen (2004). Ziel von Markdown ist es mit einem Minimal-Set von Befehlen Texte im Layout auszuzeichnen. Markdown war lange Zeit eine Randerscheinung, erfreut sich jedoch durch die Einfachheit und Erweiterbarkeit zunehmender Beliebtheit. Auch haben sich bereits zahlreiche sog. Flavours (i.e. Dialekte) herausgebildet.

> Einfach benutzbare Editoren, wie Obsidian fördern die Verwendung von Markdown.

Diese Folien sind in Markdown verfasst. Genauer gesagt in Markdown mit einem Lia-Script flavour.

``` md
# Textcodierung

![Encoding of a Letter of Joachim Raff](../Bilder/raff-brief-encoding.png "Encoding of a Letter of Joachim Raff")
## Mark-up and -down

> **Markup** heißt übersetzt soviel wie *Auszeichnung*. Mit einer **Markup-Sprache** können Texte ausgezeichnet werden. Hierbei werden Informationen in den Text eingearbeitet, sodass eine weitere Bedeutungsebene ensteht. Diese Form wird auch **semantisches Markup** genannt.

> **Markdown**: Da Markup-Sprachen sehr schnell in ihrer Komplexität steigen, wurde **Markdown** als Alternative geschaffen (2004). Ziel von Markdown ist es mit einem Minimal-Set von Befehlen Texte im Layout auszuzeichnen. Markdown war lange Zeit eine Randerscheinung, erfreut sich jedoch durch die Einfachheit und Erweiterbarkeit zunehmender Beliebtheit. Auch haben sich bereits zahlreiche sog. Flavours (i.e. Dialekte) herausgebildet.

> Einfach benutzbare Editoren, wie Obsidian fördern die Verwendung von Markdown.

Diese Folien sind in Markdown verfasst. Genauer gesagt in Markdown mit einem Lia-Script flavour.

[...]
```

## XML

> XML steht für **eXtensible Markup Language** und bezeichnet ein Verfahren, um **Texte auszuzeichnen** und **Informationen zu kodieren**. Es ist entwickelt worden, um die Strukturen eines Dokuments kenntlich und damit für den Computer verarbeitbar zu machen, in em Kodierungen (›Auszeichnungen‹) in einen laufenden Text eingefügt werden.
>
> – Jannidis et al., Digital Humanities, S. 128.

Die Spezifikation XML 1.0 wurde 1998 definiert.

### Was ist XML?

* e**X**tensible **M**arkup **L**anguage
* Auszeichnungssprache zur Strukturierung von Daten
  
  * Semantische Ebene

* Hierarchische Baumstruktur
* Menschen- und maschinenlesbar
* Textformat
  
  * non-proprietär, nicht plattformgebunden
  * langzeitarchivierbar
  * Versionsverwaltung möglich (git, svn)

### Beispiel eines XML-Dokuments

```xml
<?xml version="1.0" encoding="UTF-8"?>
<person xmlns="http://www.uni-halle.de/2026/digMus">
    <name>
        <vorname>Dennis</vorname>
        <nachname>Ried</nachname>
    </name>
    <alter>36</alter>
    <beruf status="aktiv">Musikwissenschaftler</beruf>
</person>
```

                 {{1}}
************************************************
---

```xml
<person xmlns="http://www.uni-halle.de/2026/digMus">
    <name>
        <vorname>Carl</vorname>
        <vorname typ="verwendet">Ludwig</vorname>
        <nachname>Baumann</nachname>
    </name>
</person>
```
************************************************
                 {{2}}
************************************************
---

```xml
<person xmlns="http://www.uni-halle.de/2026/digMus">
    <name>
        <vorname n="1">Francesca</vorname>
        <vorname n="2">Gaetana</vorname>
        <vorname n="3" typ="benutzt">Cosima</vorname>
        <nachname typ="geburt">Liszt</nachname>
        <nachname typ="ehe">Wagner</nachname>
    </name>
</person>
```
************************************************

### XML-Grundelemente

Die wichtigsten Aspekte zum Thema XML:

{{3}}
****************
* XML-Deklaration: `<?xml version="1.0" encoding="UTF-8"?>`
* Schema (xsd, rng, TEI-ODD)
*****************
{{1}}
****************
* Elemente: `<beruf/>` bzw. `<beruf>Musikwissenschaftler</beruf>`

  * Elementname: "beruf"
  * Elementinhalt: "Musikwissenschaftler"
  * Tags:
    
    * öffnend: `<beruf>`
    * schließend: `</beruf>`
    * leer: `<beruf/>`
  
  * Namespaces: `xmlns="http://www.uni-halle.de/2026/digMus"`
* Attribute: `<beruf status="aktiv">` (`@status`)

  * Attributname: "status"
  * Attributwert: "aktiv"
****************
{{2}}
****************

* Entitäten:

  * `&` = `&amp;`
  * `<` = `&lt;`
  * `>` = `&gt;`
  * `"`= `&quot;`
  * `'`= `&apos;`
  * [weitere...](https://wiki.selfhtml.org/wiki/Zeichenreferenz)
****************

                 {{3}}
************************************************

* [mehr zum Thema XML-Grundlagen](https://www.data2type.de/xml-xslt-xslfo/xml/xml-in-a-nutshell/xml-grundlagen)

************************************************
### Wohlgeformtheit

Ein XML-Dokument ist wohlgeformt wenn...

{{1}}
* es genau ein Wurzelelement (root) hat

{{2}}
* alle Elemente korrekt geschlossen sind (`<a></a>` oder `<a/>`)

{{3}}
*********************************
* Elemente ineinander geschachtelt und nicht verschränkt (!) sind
  
  * `<a><b></b></a>` ✅
  * `<a><b></a></b>` ❌
*********************************

{{4}}
*********************************
Wohlgeformtes XML

```xml
<a>
   <b>
      <c/>
   </b>
</a>
```
* ✅ nur ein Root-Element (`<a>`)
* ✅ wohlgeformt (keine Verschränkung bzw. "was auf geht, geht auch zu")


*********************************

{{5}}
*********************************
Zu Beachten:

* Was auf geht, muss auch zu gehn!
* Groß-/Kleinschreibung!
*********************************

## Text Encoding Initiative (TEI)
Eine für Texte etablierte Auszeichnungssprache ist die sogenannte **Text Encoding Initiative (TEI)**, auch TEI-XML genannt.

### Geschichte der TEI
Zur Geschichte siehe https://tei-c.org/about/history/

* 1987	Konstituierendes Treffen im Vassar College, Poughkeepsie, NY;
  
  * “At this meeting the intellectual foundation for the Text Encoding Initiative was articulated.”

* 1988	Beginn der Arbeit der TEI als internationales, mehrsprachiges Projekt zur Entwicklung von 	Richtlinien für elektronische Texte in der Wissenschaft
* 1990 	Veröffentlichung der ersten Vorschläge der Richtlinien (Draft Guidelines, P1)
* 1992 	P2 als bloße Zwischenversion
* 1994 	Veröffentlichung der Guidelines for Electronic Text Encoding and Interchange in der ersten	‘richtigen’ Version P3
* 1996 	erstmals eine Version von “TEI Lite”
* 2000/01 TEI Consortium und Board gegründet/eingesetzt
* 2001 	Veröffentlichung der Version P4 (Umstellung von SGML auf XML)
* 2007 	im Nov. erstmalige Veröffentlichung der noch heute aktuellen Version P5

* Liste an Projekten, die mit TEI arbeiten https://tei-c.org/activities/Projects/

### Wer? Wie ? Wo ? Was?

* **Institution**

  * die TEI Community (TEI Consortium)

* Initiative der Wissenschaft für die Wissenschaft!

  * Diverse SIGs (**S**pecial **I**nterest **G**roups): Briefe, Manuskriptbeschreibung, Ontologien, genetische Textkritik, Linguistik, Text und Grafik, Graph-Technologien, spezifische Sprachen (Ostasien, Japan), TEI in Libraries etc.

* **Codierungsschema** 

  * die Markup-language TEI bzw. die durch TEI definierte Menge von (XML-)Elementen und Attributen

* **Customization**
  
  * die (individuelle) Anpassung des Standards an bestimmte Bedürfnisse
  * siehe auch https://tei-c.org/guidelines/customization/

* **Guidelines**
  
  *	die Dokumentation des Datenschemas / des Standards
  * siehe https://tei-c.org/release/doc/tei-p5-doc/en/html/index.html

<iframe style="width:100%; min-height: 750px;" src="https://tei-c.org/" title="TEI-Website"></iframe>

### Warum?

* formale Beschreibung beliebiger Textmerkmale 
* deckt alle denkbaren Textsorten ab
* erlaubt benutzerdefinierte Erweiterungen 
* erlaubt unterschiedliche Auszeichnungen des gleichen Textes, aber auch Varianten der Auszeichnung der gleichen Sache
* offen (Spezifikation, Dokumentation, Tools, …) 
* plattformunabhängig 
* für Langzeitarchivierung geeignet
* ideal für Datenaustausch
* → “FAIR”: gewährleistet findability, accessibility, interoperability, reusability

### Starting with TEI

Unser eigenes Datenmodell:
```xml
<person xmlns="http://www.uni-halle.de/2026/digMus">
    <name>
        <vorname n="1">Francesca</vorname>
        <vorname n="2">Gaetana</vorname>
        <vorname n="3" typ="benutzt">Cosima</vorname>
        <nachname typ="geburt">Liszt</nachname>
        <nachname typ="ehe">Wagner</nachname>
    </name>
</person>
```

In TEI codiert:
```xml
<person xmlns="http://www.tei-c.org/ns/1.0">
    <persName>
        <forename n="1">Francesca</forename>
        <forename n="2">Gaetana</forename>
        <forename n="3" type="used">Cosima</forename>
        <surname type="birth">Liszt</surname>
        <surname type="married">Wagner</surname>
    </persName>
</person>
```

Minimale TEI-Datei:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-model href="http://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_all.rng" type="application/xml" schematypens="http://relaxng.org/ns/structure/1.0"?>
<?xml-model href="http://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_all.rng" type="application/xml"
	schematypens="http://purl.oclc.org/dsdl/schematron"?>
<TEI xmlns="http://www.tei-c.org/ns/1.0">
  <teiHeader>
      <fileDesc>
         <titleStmt>
            <title>Title</title>
         </titleStmt>
         <publicationStmt>
            <p>Publication Information</p>
         </publicationStmt>
         <sourceDesc>
            <p>Information about the source</p>
         </sourceDesc>
      </fileDesc>
  </teiHeader>
  <text>
      <body>
         <p>Some text here.</p>
      </body>
  </text>
</TEI>

```

### TEI Header

```xml
<teiHeader>
      <fileDesc>
         <titleStmt>
            <title>Titel der Datei</title>
         </titleStmt>
         <publicationStmt>
            <p>Für den Unterricht auf Github publiziert (2026)</p>
         </publicationStmt>
         <sourceDesc>
            <p>Born digital</p>
         </sourceDesc>
      </fileDesc>
  </teiHeader>
```

### TEI Body

```xml
<text>
  <front>
    <!-- front matter -->
    <titlePage/>
  </front>
  <body>
    <!-- main/body matter -->
    <p><!-- Der Text der Tragödie --></p>
  </body>
  <back>
    <!-- back matter -->
    <p>Register</p>
  </back>
</text>
```

#### Briefe

```xml
<text type="letter">
  <body>
    <div>
      <fw rend="center" type="letterhead">
        <hi rend="capital">La Leprara<lb/>00047 Marino (Roma)</hi>
      </fw>
      <opener>
        <dateline rend="right">
          <date when="1971-08-12">12. 8. 71</date>
        </dateline>
        <lb/>
        <salute><space unit="chars" quantity="3"/>lieber <persName key="A00094F9">Paul</persName>,</salute>
      </opener>
      <p>nur eine kleine anfrage:</p>
      <p>ist das honorar, das Du bisher für
        <lb/>das <rs type="work" key="A02006AF">violinkonzert</rs> hast überweisen lassen, alles,
        <lb/>oder kommt noch etwas nach?</p>
      <p>ich frage im sinne meines <rs type="postal" key="A0420020">derzeitigen telegramms</rs>
        <lb/>in welchem ich die beendigung des werkes
        <lb/>ankündigte.</p>
      <closer>
        <space unit="indent" quantity="3"/>herzliche grüsse<lb/>
        <space unit="indent" quantity="4"/>Dein<lb/>
        <signed>
          <space unit="indent" quantity="6"/><persName key="A001000A">hans werner</persName>
        </signed>
      </closer>
    </div>
  </body>
</text>
```

{{1}}
*************************
<iframe style="width:100%; height: 100%;" src="https://henze-digital.zenmem.de/de/A001000A/Briefe/A042C68B.html" title="Brief (mit Umschlag) von H. W. Henze an P. Sacher, 13. August 1971, in: Hans Werner Henzes künstlerisches Netzwerk. Digitale Briefedition, https://henze-digital.zenmem.de/A042C68B (Version 6.1.0 vom 30. November 2024)"></iframe> 
*************************

#### Dramen & Lyrik

```xml
<!-- G. F. Händel: Hercules HWV 60 -->
<div1 type="act" n="1" xml:id="div_a-1">
  <head>Act I.</head>
  <div2 type="scene" n="1" xml:id="div_a-1_s-01">
    <head>Scene I.</head>
    <stage type="location">Scene, A Royal Apartment.</stage>
    <lb/>
    <stage type="setting"><name>Dejanira</name> and <name>Trachinians</name>.</stage>
    <sp who="#c_Trachinians">
      <speaker>I Trachinian.</speaker>
      <lg type="recitative">
          <l>SEE, with what ſad Dejection in her<lb/>Looks,</l>
          <l>Indulging Grief, the mournful Princeſs<lb/>ſits!</l>
          <l>She weeps from Morning’s Dawn to Shades of<lb/>Night,</l>
          <l>From Gloom of Night to red’ning Bluſh of Morn.</l>
          <l>Uncertain of <name>Alcides’</name> Destiny,</l>
          <l>Disconſolate, his Abſence ſhe laments.</l>
      </lg>
    </sp>
  </div2>
</div1>
```

# Literatur & Links
  
* XML: https://www.w3schools.com/xml/
* TEI-Guidelines: http://www.tei-c.org/release/doc/tei-p5-doc/en/html/
    
  * dort auch: “A Gentle introduction to XML” http://www.tei-c.org/support/learn/
* TEI by example: https://teibyexample.org/exist/TBE.htm

* TEI-Mailingliste: https://tei-c.org/support/#tei-l
* Lou Burnard: “What is the Text Encoding Initiative? How to add intelligent markup to digital resources”, OpenEdition Press, 2014 (https://books.openedition.org/oep/679) (DOI: https://doi.org/10.4000/books.oep.426)
* “Learn the TEI”-Seite: http://www.tei-c.org/support/learn/
* Lou Burnard: “The Evolution of the Text Encoding Initiative: From Research Project to Research Infrastructure”, jTei 5 (Juni 2013), https://journals.openedition.org/jtei/811 (DOI: https://doi.org/10.4000/jtei.811)
* “Digitale Textedition mit TEI” (als DARIAH-Tutorial), https://de.dariah.eu/tei-tutorial (konzipiert für die Lehre, aber auch zum Selbststudium) (Redaktion: Christof Schöch)
* TEI Support (inkl. Mailinglist-Link): https://tei-c.org/support/ 

