var phone = '+371 27 897 489',
    email = 'speakeasy2020@restorators.lv',
	lang = 'lv';
;

var options = {
	lang: lang,
	pageTitle: 'Speakeasy 2020',
	pageClass: `__${lang}`,

	h1: 'New Year Speakeasy 2020',

	headText1: 'Uz vienu vienīgu nakti – lai uzmirdz Brodvejas spožums un Piektās avēnijas šiks!',
	headText2: 'Uz vienu vienīgu nakti – lai pazūd robežas starp savējiem un svešiem!',
	headText3: 'Uz vienu vienīgu nakti – mēs tiksimies Ņujorkā pirms 100 gadiem!',

	descriptionBlock1: [
		'Tieši pirms 100 gadiem visas Savienotās valstis un to iedzīvotājus satricināja negaidīta ziņa – tika pasludināts “sausais likums”! Kas sākumā šķita traģēdija, kļuva par pamatu vienai no retro laikmeta noslēpumainākajām tradīcijām – SPEAKEASY kultūrai. Intimitāte. Aizliegtā šarms. Vilinoša visatļautība. Pilnasinīga izklaide. Šaurās ieliņās, no cilvēku acīm paslēptajos bāros, neatkarīgi no rases, amata, ienākumu līmeņa satikās cilvēki, kurus vienoja mīlestība pret uzdzīvi – īstu dzīvi no visas sirds!',
		'Tieši pirms 100 gadiem sākās džeza zelta laiki. Tieši pirms 100 gadiem uzplauka Art Deco laikmets. Tieši pirms 100 gadiem amerikāņi saprata – ja kaut ko ļoti vēlamies, robežas nepastāv!',
		'31.decembra vakarā tiekamies grandiozajā SPEAKEASY 2020 Jaungada ballītē Jaunajā Teikā, kas pirmo reizi vērs vaļā sava viesību kompleksa durvis apmeklētājiem un uz vienu vienīgu nakti pārtaps par pasaules metropoli - 1920. gada Ņujorku visā šīs leģendārās pilsētas un šī neparastā laikmeta spožumā!',
		'Visa vakara garumā viesus gaida bezgalīga pārsteigumu programma! Fantastiska svētku 5 kārtu ēdienkarte un bagātīga dzērienu izlase, slepeni bāri, neredzētas greznas dekorācijas un atraktīvi vakara vadītāji, kas uzrunās viesus trīs valodās. Kopā baudīsim unikālu “show” programmu, aktieru saspēles, kvestus, populārās mūzikas un džeza ritmus, konkursus, apburošo salūtu un vairākus citus pārsteigumus neaizmirstamajā, maģiskajā Ņujorkas ielu atmosfērā. Par mazākajiem pasākuma viesiem parūpēsies atraktīvi animatori ar aizraujošu izklaides programmu un īpaši bērniem sagatavotu svētku ēdienkarti. Vai esat gatavi iziet pa ledusskapja durvīm, lai nonāktu pavisam citā pasaulē?',
	],

	descriptionTexts: [
		'Sakiet “jā!” un tiekamies 31. decembrī!',
		'Par pasākumu un tā viesiem parūpēsies Latvijā un ārvalstīs atzinību guvusī restorānu grupa “Resto-Rātors” un tās pieredzējušo profesionāļu komanda. Ēdienkarti, dekorāciju idejas un scenāriju ir veidojis restorātors Viktors Ravdive!',
		'Sekojiet līdzi jaunumiem! Šo pasākumu noteikti nedrīkst palaist garām!!'
	],

    timetableHeader: 'Vakara programma:',
	timetableList: [
		{time: '20:00 - 21:00', descr: 'viesu sagaidīšana'},
		{time: '21:00 - 23:30', descr: 'vakariņu baudīšana'},
		{time: '00:00', descr: 'svētku uguņošana'},
		{time: '00:10', descr: 'afterparty līdz rītam kopā ar DJ'},
	],

	pricesList: [
		{
			descr: 'BIĻEŠU CENA PIEAUGUŠAJIEM – ',
			longDescr: 'Cenā ietilpst vakara šovs un vakariņas, kā arī welcome drink pasākuma sākumā un Prosecco glāze, pienākot pusnaktij!',
			price: 'EUR 200,00'
		},
		{
			descr: 'BIĻEŠU CENA BĒRNIEM – ',
			longDescr: 'Cenā ietilps īpaša bērnu izklaides programma kopā ar animatoriem, kas pieskatīs un izklaidēs bērnus visa vakara garumā, kā arī īpaši veidota ēdienkarte pie bērnu galda. Bērniem būs pieejama atsevišķa zona, kur tos uzraudzīs profesionālas auklītes.',
			price: 'EUR 70,00'
		},
		{
			descr: 'VIP BIĻEŠU CENA – ',
			longDescr: 'Cenā ietilps individuālā galdiņa izvēle atbilstoši viesu kompānijas lielumam, vakara šovs un vakariņas, welcome drink ierašanās brīdī un Prosecco pusnaktī kopā ar svētku uguņošanas vērošanu ar lielisku skatu īpaši tam paredzētā vietā uz jumta, kas uzdāvinās neaizmirstamas emocijas baudot salūtu acu līmenī!',
			price: 'EUR 290,00'
		}
	],

	infoList: [
		{head: 'DRESS CODE', body: 'Smart Casual. Aicinām svētku viesus ierasties 1920-to gadu retro stila apģērbā.'},
		{head: 'BIĻEŠU REZERVĀCIJA', body: 'Pa tālruni '+ phone +' vai elektroniski speakeasy2020@restorators.lv'},
	],

	contentEndingText: 'New York, New York, here we come!',
	phoneNumber: phone,
	email: email
};


module.exports = options;