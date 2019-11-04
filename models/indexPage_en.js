var phone = '+371 27 897 489',
    email = 'speakeasy2020@restorators.lv',
	lang = 'en'
;

var options = {
	lang: lang,
	pageTitle: 'Speakeasy 2020',
	pageClass: `__${lang}`,

	h1: 'New Year Speakeasy 2020',

	headText1: 'For one night only – let the brilliance of Broadway and chic of the Fifth Avenue shine! ',
	headText2: 'For one night only – let the borders between us and them disappear!',
	headText3: 'For one night only – we will meet in New York 100 years ago!',

	descriptionBlock1: [
		'Exactly 100 years ago, all the United States and their inhabitants were shocked by an unexpected news – the prohibition was announced. What seemed a tragedy in the beginning, created one of the most mysterious traditions of retro era – the culture of SPEAKEASY. Intimacy. Charm of the forbidden. Tempting impunity. Complete entertainment. People regardless of their race, position, and income level met on narrow streets, in secret bars and celebrated their passion for revelry – true life from the bottom of their hearts!',
		'Jazz experienced its golden times exactly 100 years ago. Art Deco flourished exactly 100 years ago. Exactly 100 years ago, Americans understood – if we want something really bad, there are no limits!',
		'Let’s meet in the evening of 31 December at the grand SPEKEASY 2020 New Year’s party at Jaunā Teika where the entertainment complex will be opened for the first time and where the metropolis of the world – the legendary and bright New York of 1920 – will be opened for one night.',
		'All evening long, the guests will enjoy an endless programme of surprises! This New York will surprise you with a marvellous celebratory menu with five courses and large selection of beverages, secret bars, unprecedented decorations and attractive hosts, who will address guests in three languages. We will enjoy a unique show, programme, actor sketches, quests together, as well as popular music and jazz, competitions, fireworks and other surprises in the unforgettable and magic atmosphere of the streets of New York. Children will be entertained by attractive animators with an exciting entertainment programme and special children’s menu. Are you ready to go through the fridge door to enter a completely new world?',
	],

	descriptionTexts: [
		'Say “yes” and let’s meet on December 31!',
		'The group of restaurants “Resto-Rātors” and their team of experienced professionals, highly recognised in Latvia and abroad, will take care of the event and guests. Menu, decoration ideas and scenario – all created by the restaurant expert, Viktors Ravdive.',
		'Follow the news! You cannot miss this event!'
	],

    timetableHeader: 'Evening programme:',
	timetableList: [
		{time: '8:00 P.M. – 9:00 P.M.', descr: 'Welcoming guests'},
		{time: '9:00 P.M. – 11:30 P.M', descr: 'Dinner'},
		{time: '00:00 P.M.', descr: 'Fireworks'},
		{time: '00:10 A.M.', descr: 'Afterparty until the morning with DJ'},
	],

	pricesList: [
		{
			descr: 'TICKET PRICE FOR ADULTS –',
			longDescr: 'The price includes the evening show and dinner, as well as welcome drink in the beginning of the event and a glass of Prosecco at midnight. ',
			price: 'EUR 200,00'
		},
		{
			descr: 'TICKET PRICE FOR CHILDREN – ',
			longDescr: 'The price includes a special children entertainment programme with animators, who will look after children all evening, and a special children menu at children’s table. Children will have a separate area where professional baby-sitters will look after them.',
			price: 'EUR 70,00'
		},
		{
			descr: 'VIP TICKET PRICE – ',
			longDescr: 'The price includes an opportunity to choose an individual table based on the number of guests, evening show and dinner, welcome drink at the arrival and Prosecco at midnight during fireworks with a wonderful view at a special place on the roof that will give you unforgettable emotions enjoying the fireworks at the eye level.',
			price: 'EUR 290,00'
		}
	],

	infoList: [
		{head: 'DRESS CODE', body: 'Smart Casual. We invite you to arrive dressed in the retro of 1920s.'},
		{head: 'TICKETS', body: `Book via phone ${phone}' or e-mail ${email}`},
	],

	contentEndingText: 'New York, New York, here we come!',
	phoneNumber: phone,
	email: email
};


module.exports = options;