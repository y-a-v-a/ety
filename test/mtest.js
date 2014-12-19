var s = require('../lib/etystore.js');

s.storeTerm({ term:"ziekte", results:[{ term: "ziekte (het ziek-zijn)", link: "ziekte"}]}, function() {
    console.log(arguments);
})

var r = { word: 'ziekte',
  title: 'ziekte (het ziek-zijn)',
  sources: 
   [ { source: 'M. Philippa e.a. (2003-2009) Etymologisch Woordenboek van het Nederlands',
       lemma: '<p><b>ziek</b> <abbr title="bijvoeglijk naamwoord (adjectief)">bn.</abbr> ‘niet gezond’<br><abbr title="Oudnederlands (voor 1200)">Onl.</abbr> <i>siek</i> ‘niet gezond’ in <i>thie geknisedon ande thie siechon lichamon</i> ‘de gekneusde en zieke lichamen’ [<abbr title="circa">ca.</abbr> 1100; Will.]; <abbr title="Middelnederlands (1200–1500)">mnl.</abbr> <i>siec</i> in <i>din mvoter is uil siec</i> ‘je moeder is heel ziek’ [1201-25; VMNW].<br><abbr title="Oudsaksisch (voor 1100)">Os.</abbr> <i>siok</i> (<abbr title="Middelnederduits (1100–1500)">mnd.</abbr> <i>sēk</i>); <abbr title="Oudhoogduits (voor 1100)">ohd.</abbr> <i>sioh</i> (<abbr title="Nieuwhoogduits (na 1600)">nhd.</abbr> <i>siech</i>); <abbr title="Oudfries (voor 1550)">ofri.</abbr> <i>siāk</i> (<abbr title="Nieuwfries (na 1550)">nfri.</abbr> <i>siik</i>); <abbr title="Oudengels (voor 1100)">oe.</abbr> <i>sēok</i> (<abbr title="Nieuwengels (na 1700)">ne.</abbr> <i>sick</i>); <abbr title="Oudnoords (voor 1500) ">on.</abbr> <i>sjúkr</i> (<abbr title="Nieuwzweeds (na 1500)">nzw.</abbr> <i>sjuk</i>); <abbr title="Gotisch">got.</abbr> <i>siuks</i>; alle ‘ziek, zwak’, &lt; <abbr title="Proto-Germaans">pgm.</abbr> <i>*seuka-</i>. Hierbij hoort een sterk werkwoord <i>*seukan-</i> ‘ziek zijn’, dat echter alleen is geattesteerd als <abbr title="Gotisch">got.</abbr> <i>siukan</i>. In andere talen is een zwak werkwoord ‘ziek zijn/worden’ van het <abbr title="bijvoeglijk naamwoord (adjectief)">bn.</abbr> afgeleid: <abbr title="Middelnederlands (1200–1500)">mnl.</abbr> <i>sieken</i> (zie onder); <abbr title="Oudhoogduits (voor 1100)">ohd.</abbr> <i>siohhēn</i>; <abbr title="Oudnoords (voor 1500) ">on.</abbr> <i>sjúkna</i>, <i>sokna</i>.<br>Verdere herkomst onbekend.<br>♦ <b>ziekte</b> <abbr title="zelfstandig naamwoord (substantief)">zn.</abbr> ‘het ziek zijn, kwaal, specifieke vorm van ziek zijn’. <abbr title="Middelnederlands (1200–1500)">Mnl.</abbr> <i>siecte</i> ‘het ziek zijn’ in <i>Meester P., die over him ghinc in siere ziecte</i> ‘dokter P., die hem behandelde toen hij ziek was’ [1343-44; MNW], ‘kwaal, specifieke vorm van ziek zijn’ in <i>Nyet allene die lijflike siecten, mer ooc mede die suucten der seden</i> [begin 15<sup>e</sup> eeuw; MNW]. Afleiding van <i>ziek</i> met het achtervoegsel → <b>-te</b>. In de concrete betekenis ‘kwaal, specifieke vorm van ziek zijn’ is in het Middelnederlands het verwante woord <i>sucht</i> gebruikelijker, zie → <b>zucht</b>. ♦ <b>zieken</b> <abbr title="werkwoord (verbum)">ww.</abbr> ‘zeuren, de sfeer bederven’. <abbr title="Middelnederlands (1200–1500)">Mnl.</abbr> <i>sieken</i> ‘ziek zijn, ziek worden’ [1240; Bern.], in <i>Soo wanneer een broeder begint te ziekene</i> [<abbr title="circa">ca.</abbr> 1450; MNW]; <abbr title="Vroegnieuwnederlands (1500–1700)">vnnl.</abbr> in <i>sieckende soldaten</i> [1645; iWNT]; <abbr title="Nieuwnederlands (na 1700)">nnl.</abbr> <i>zieken</i> overdrachtelijk ‘zich ergerlijk gedragen, vervelende opmerkingen maken’ [1984; Van Dale]. Afleiding van <i>ziek</i>. De letterlijke betekenis is verouderd.</p>' },
     { source: 'N. van der Sijs (2001), Chronologisch Woordenboek',
       lemma: '<p><b>ziekte*</b> het ziek-zijn 1343-1344 [MNW]</p>' },
     { source: 'P.A.F. van Veen en N. van der Sĳs (1997), Van Dale Etymologisch woordenboek',
       lemma: '<p><b>ziekte</b><abbr class="erfwoord">*</abbr> [het ziek-zijn] {<i>siecte</i> 1343-1344} <b>middelnederduits</b> <i>seikte</i>, <b>oudfries</b> <i>siukte</i>; afgeleid van <b><i>ziek.</i></b></p>' },
     { source: 'J. van Donselaar (1989), Woordenboek van het Surinaams-Nederlands',
       lemma: '<p><b>ziek’te</b>: <b>de ziekte</b>, (veroud.) lepra. <i>Wat deert u, Mathilde? vroeg de oude doktor. - Ik heb de ziekte! was het antwoord</i> (van Schaick 1866: 215; enige vindpl.). - Etym.: Vgl. de naam in S: takroe-siki (takroe = slecht; siki = ziekte). - Syn. boasie*, kokobe*. Zie ook: ex-Hansenpatiënt*.</p>' },
     { source: 'J. de Vries (1971), Nederlands Etymologisch Woordenboek',
       lemma: '<p><b>ziekte</b> znw. v., mnl. <i>siecte</i> (met <i>ie</i> onder invloed van <i>siec</i>) en <i>suucte</i>, mnd. <i>seikte</i>, <i>sūkte</i> ofri. <i>siūkte</i>, met verscherping van de dentaal van het suffix naast mnl. <i>sûkede</i>, mnd. <i>sēkede</i>, <i>sūkede</i>, mhd. <i>siuchede</i> &lt; germ. <i>*siukiþō</i>. — Een ander abstractum is germ. <i>*siukīn</i>, vgl. oostmnl. mnd. <i>sūke</i>, ohd. <i>siuhhi</i> (nhd. <i>seuche</i>), ofri. <i>siūke</i>, got. <i>siukei</i>. — Afl. van <b><i>ziek</i></b>.</p>' },
     { source: 'N. van Wijk (1936 [1912]), Franck\'s Etymologisch woordenboek der Nederlandsche taal',
       lemma: '<p><b>ziekte</b> znw., mnl. <i>siecte</i> (met <i>ie</i> naar <i>siec</i>) en <i>suucte</i> v. = mnd. <i>seikte</i>, <i>sûkte</i> v. “ziekte”. De verhouding tot mnl. <i>sûkede</i>, mnd. <i>sêkede</i>, <i>sûkede</i>, mhd. <i>siuchede</i> v. “id.” is als bij <i><b>lengte</b></i>. Een ouder abstractum is ohd. <i>siuhhî</i> (nhd. <i>seuche</i>), mnd. oostmnl. <i>sûke</i>, got. <i>siukei</i> v. “id.”. Mnl. <i>siecheit</i> (<i>d</i>) v. “id.” is een ook reeds ohd. mnd. woord.</p>' },
     { source: 'C.B. van Haeringen (1936), Etymologisch woordenboek der Nederlandsche taal, Supplement',
       lemma: '<p><b>ziekte</b>. Ook ofri. <i>siûkte</i> v. ‘id.’. Bij ohd. <i>siuhhî</i> enz. adde: ofri. <i>siûke</i> v. ‘id. ‘.</p>' },
     { source: 'Woordenboek der Nederlandsche taal (WNT) & Middelnederlandsch woordenboek (MNW) & Vroegmiddelnederlands woordenboek (VMNW) & Oudnederlands woordenboek (ONW) – alle onderdeel van de Geïntegreerde Taalbank (GTB)',
       lemma: '<p>Zoek dit woord op in het <a href="http://gtb.inl.nl/iWDB/search?actie=results&amp;wdb=wnt%2Cvmnw%2Conw%2Cmnw&amp;uitvoer=HTML&amp;lemmodern=&quot;ziekte&quot;" target="_blank">WNT, MNW, VMNW, ONW</a>.</p>' } ] };

s.storeWord(r, function() {
    console.log(arguments);
})


s.findTerm('ziekte', function() {
    console.log(arguments);
});

s.findWord('ziekte', function() {
    console.log(arguments);
});

