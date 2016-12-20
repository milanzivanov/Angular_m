(function(){
	var dataService = function(){
		var wines = []; // niz vina (lokalan u okviru dataService, odnosno ne možemo mu pristupiti direktno od spolja)

		var init = function(){
			var data = {
				"wines":[
				{"id":"CHATEAU_DE_SAINT_COSME","name":"CHATEAU DE SAINT COSME","year":2009,"grapes":"Grenache / Syrah","country":"France","region":"Southern Rhone / Gigondas","description":"The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.","picture":"saint_cosme.jpg"},
				{"id":"LAN_RIOJA_CRIANZA","name":"LAN RIOJA CRIANZA","year":2006,"grapes":"Tempranillo","country":"Spain","region":"Rioja","description":"A resurgence of interest in boutique vineyards has opened the door for this excellent foray into the dessert wine market. Light and bouncy, with a hint of black truffle, this wine will not fail to tickle the taste buds.","picture":"lan_rioja.jpg"},
				{"id":"MARGERUM_SYBARITE","name":"MARGERUM SYBARITE","year":2010,"grapes":"Sauvignon Blanc","country":"USA","region":"California Central Cosat","description":"The cache of a fine Cabernet in ones wine cellar can now be replaced with a childishly playful wine bubbling over with tempting tastes of\\nblack cherry and licorice. This is a taste sure to transport you back in time.","picture":"margerum.jpg"},
				{"id":"OWEN_ROE_EX_UMBRIS","name":"OWEN ROE \"EX UMBRIS\"","year":2009,"grapes":"Syrah","country":"USA","region":"Washington","description":"A one-two punch of black pepper and jalapeno will send your senses reeling, as the orange essence snaps you back to reality. Don't miss\\nthis award-winning taste sensation.","picture":"ex_umbris.jpg"},
				{"id":"REX_HILL","name":"REX HILL","year":2009,"grapes":"Pinot Noir","country":"USA","region":"Oregon","description":"One cannot doubt that this will be the wine served at the Hollywood award shows, because it has undeniable star power. Be the first to catch\\nthe debut that everyone will be talking about tomorrow.","picture":"rex_hill.jpg"},
				{"id":"ITICCIO_CLASSICO_RISERVA","name":"VITICCIO CLASSICO RISERVA","year":2007,"grapes":"Sangiovese Merlot","country":"Italy","region":"Tuscany","description":"Though soft and rounded in texture, the body of this wine is full and rich and oh-so-appealing. This delivery is even more impressive when one takes note of the tender tannins that leave the taste buds wholly satisfied.","picture":"viticcio.jpg"},
				{"id":"CHATEAU_LE_DOYENNE","name":"CHATEAU LE DOYENNE","year":2005,"grapes":"Merlot","country":"France","region":"Bordeaux","description":"Though dense and chewy, this wine does not overpower with its finely balanced depth and structure. It is a truly luxurious experience for the\\nsenses.","picture":"le_doyenne.jpg"},
				{"id":"DOMAINE_DU_BOUSCAT","name":"DOMAINE DU BOUSCAT","year":2009,"grapes":"Merlot","country":"France","region":"Bordeaux","description":"The light golden color of this wine belies the bright flavor it holds. A true summer wine, it begs for a picnic lunch in a sun-soaked vineyard.","picture":"bouscat.jpg"},
				{"id":"BLOCK_NINE","name":"BLOCK NINE","year":2009,"grapes":"Pinot Noir","country":"USA","region":"California","description":"With hints of ginger and spice, this wine makes an excellent complement to light appetizer and dessert fare for a holiday gathering.","picture":"block_nine.jpg"},
				{"id":"DOMAINE_SERENE","name":"DOMAINE SERENE","year":2007,"grapes":"Pinot Noir","country":"USA","region":"Oregon","description":"Though subtle in its complexities, this wine is sure to please a wide range of enthusiasts. Notes of pomegranate will delight as the nutty finish completes the picture of a fine sipping experience.","picture":"domaine_serene.jpg"},
				{"id":"BODEGA_LURTON","name":"BODEGA LURTON","year":2011,"grapes":"Pinot Gris","country":"Argentina","region":"Mendoza","description":"Solid notes of black currant blended with a light citrus make this wine an easy pour for varied palates.","picture":"bodega_lurton.jpg"},
				{"id":"LES_MORIZOTTES","name":"LES MORIZOTTES","year":2009,"grapes":"Chardonnay","country":"France","region":"Burgundy","description":"Breaking the mold of the classics, this offering will surprise and undoubtedly get tongues wagging with the hints of coffee and tobacco in\\nperfect alignment with more traditional notes. Breaking the mold of the classics, this offering will surprise and\\nundoubtedly get tongues wagging with the hints of coffee and tobacco in\\nperfect alignment with more traditional notes. Sure to please the late-night crowd with the slight jolt of adrenaline it brings.","picture":"morizottes.jpg"}
				]
			};
			wines = data.wines;
		};
		init();	// funkcija se poziva prilikom kreiranja servisa i puni wines niz

		// vraća sva vina
		var getWines = function(){
			return wines;
		}

		// dodaje novo vino u wines niz
		var addWine = function(newWine){
			wines.push(newWine);
		}

		// reveraling module šablon: od spolja (npr. iz konrtolera gde smo injektovali dataService) možemo pozivatu samo funkcije getWines i addWine. Funkciju init i wines niz ne vidimo od spolja. Wines nizu možemo pristupiti samo kroz funkcije addWine i getWines.
		return {
			getWines : getWines, // pod imenom getWines će biti dostupna funkcija definisana u varijabli getWines
			addWine : addWine
		};
	};

	var module = angular.module("wineModule");
	module.factory("dataService", dataService);
})();