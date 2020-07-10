function Unicode_To_Anufonts (text) {
    //return text + " Unicode_To_Anufonts";
	text = text.replace(/ளோ/g, "¼eV");
	text = text.replace(/ளொ/g, "ØeV");
	text = text.replace(/ளா/g, "eV");
	text = text.replace(/ளி/g, "¹");
	text = text.replace(/ளீ/g, "C");
	text = text.replace(/ஙொ/g, "ØôV");
	text = text.replace(/ஙௌ/g, "Øôe");
	text = text.replace(/னொ/g, "ØªV");
	text = text.replace(/தொ/g, "Ø>V");
	text = text.replace(/னௌ/g, "Øªe");
	text = text.replace(/தௌ/g, "Ø>e");
	text = text.replace(/கொ/g, "ØïV");
	text = text.replace(/கௌ/g, "Øïe");
	text = text.replace(/றொ/g, "ØÅV");
	text = text.replace(/றௌ/g, "ØÅe");
	text = text.replace(/க்ஷொ/g, "Ø³V");
	text = text.replace(/ணொ/g, "ØðV");
	text = text.replace(/க்ஷௌ/g, "Ø³e");
	text = text.replace(/ணௌ/g, "Øðe");
	text = text.replace(/ஹொ/g, "ØÇV");
	text = text.replace(/ளௌ/g, "Øee");
	text = text.replace(/ஹௌ/g, "ØÇe");
	text = text.replace(/டொ/g, "Ø¦V");
	text = text.replace(/டௌ/g, "Ø¦e");
	text = text.replace(/ஸொ/g, "ØvV");
	text = text.replace(/ஸௌ/g, "Øve");
	text = text.replace(/ழொ/g, "ØwV");
	text = text.replace(/ழௌ/g, "Øwe");
	text = text.replace(/ஞொ/g, "ØQV");
	text = text.replace(/ஞௌ/g, "ØQe");
	text = text.replace(/ஷொ/g, "Ø≠V");
	text = text.replace(/வொ/g, "ØkV");
	text = text.replace(/ஜொ/g, "ØÛV");
	text = text.replace(/ஷௌ/g, "Øre");
	text = text.replace(/வௌ/g, "Øke");
	text = text.replace(/ஜௌ/g, "ØÛe");
	text = text.replace(/ரொ/g, "Ø«V");
	text = text.replace(/ரௌ/g, "Ø«e");
	text = text.replace(/மொ/g, "Ø\\V");
	text = text.replace(/மௌ/g, "Ø\\e");
	text = text.replace(/பொ/g, "ØÃV");
	text = text.replace(/பௌ/g, "ØÃe");
	text = text.replace(/லொ/g, "ØéV");
	text = text.replace(/லௌ/g, "Øée");
	text = text.replace(/யொ/g, "ØBV");
	text = text.replace(/யௌ/g, "ØBe");
	text = text.replace(/நொ/g, "ØåV");
	text = text.replace(/நௌ/g, "Øåe");
	text = text.replace(/சொ/g, "ØÄV");
	text = text.replace(/சௌ/g, "ÿƒe");
	text = text.replace(/ஙோ/g, "¼ôV");
	text = text.replace(/னோ/g, "¼ªV");
	text = text.replace(/தோ/g, "¼>V");
	text = text.replace(/கோ/g, "¼ïV");
	text = text.replace(/றோ/g, "¼ÅV");
	text = text.replace(/க்ஷோ/g, "¼³V");
	text = text.replace(/ணோ/g, "¼ðV");
	text = text.replace(/ஹோ/g, "¼ÇV");
	text = text.replace(/டோ/g, "¼¦V");
	text = text.replace(/ஸோ/g, "¼vV");
	text = text.replace(/ழோ/g, "¼wV");
	text = text.replace(/ஞோ/g, "¼QV");
	text = text.replace(/ஷோ/g, "¼rV");
	text = text.replace(/வோ/g, "¼kV");
	text = text.replace(/ஜோ/g, "¼ÛV");
	text = text.replace(/ரோ/g, "¼«V");
	text = text.replace(/மோ/g, "¼\\V");
	text = text.replace(/போ/g, "¼ÃV");
	text = text.replace(/லோ/g, "¼éV");
	text = text.replace(/யோ/g, "¼BV");
	text = text.replace(/நோ/g, "¼åV");
	text = text.replace(/சோ/g, "¼ÄV");
	text = text.replace(/ஙா/g, "ôV");
	text = text.replace(/னா/g, "ªV");
	text = text.replace(/தா/g, ">V");
	text = text.replace(/கா/g, "ïV");
	text = text.replace(/ஙை/g, "çô");
	text = text.replace(/ஙெ/g, "Øô");
	text = text.replace(/னை/g, "çª");
	text = text.replace(/தை/g, "ç>");
	text = text.replace(/னெ/g, "Øª");
	text = text.replace(/தெ/g, "Ø>");
	text = text.replace(/கை/g, "çï");
	text = text.replace(/கெ/g, "Øï");
	text = text.replace(/றை/g, "çÅ");
	text = text.replace(/றெ/g, "ØÅ");
	text = text.replace(/றா/g, "ÅV");
	text = text.replace(/க்ஷை/g, "ç³");
	text = text.replace(/ணை/g, "çð");
	text = text.replace(/க்ஷெ/g, "Ø³");
	text = text.replace(/ணெ/g, "Øð");
	text = text.replace(/ளை/g, "çe");
	text = text.replace(/ஹை/g, "çÇ");
	text = text.replace(/ளெ/g, "Øe");
	text = text.replace(/ஹெ/g, "ØÇ");
	text = text.replace(/டை/g, "ç¦");
	text = text.replace(/டெ/g, "Ø¦");
	text = text.replace(/ஸை/g, "çv");
	text = text.replace(/ஸெ/g, "Øv");
	text = text.replace(/ழை/g, "çw");
	text = text.replace(/ழெ/g, "Øw");
	text = text.replace(/ஞை/g, "çQ");
	text = text.replace(/ஞெ/g, "ØQ");
	text = text.replace(/ஷை/g, "çr");
	text = text.replace(/வை/g, "çk");
	text = text.replace(/ஜை/g, "çÛ");
	text = text.replace(/ஷெ/g, "Ør");
	text = text.replace(/வெ/g, "Øk");
	text = text.replace(/ஜெ/g, "ØÛ");
	text = text.replace(/ரை/g, "ç«");
	text = text.replace(/ரெ/g, "Ø«");
	text = text.replace(/மை/g, "ç\\");
	text = text.replace(/மெ/g, "Ø\\");
	text = text.replace(/பை/g, "çÃ");
	text = text.replace(/பெ/g, "ØÃ");
	text = text.replace(/லை/g, "çé");
	text = text.replace(/லெ/g, "Øé");
	text = text.replace(/யை/g, "çB");
	text = text.replace(/யெ/g, "ØB");
	text = text.replace(/நை/g, "çå");
	text = text.replace(/நெ/g, "Øå");
	text = text.replace(/சை/g, "çÄ");
	text = text.replace(/செ/g, "ØÄ");
	text = text.replace(/க்ஷூ/g, "f");
	text = text.replace(/க்ஷு/g, "Y");
	text = text.replace(/க்ஷா/g, "³V");
	text = text.replace(/ணா/g, "ðV");
	text = text.replace(/ஔ/g, "Îe");
	text = text.replace(/ஹூ/g, "");  //Deleted
	text = text.replace(/ஹு/g, "");  //Deleted
	text = text.replace(/ஹா/g, "ÇV");
	text = text.replace(/டா/g, "¦V");
	text = text.replace(/ஸூ/g, "`");
	text = text.replace(/ஸு/g, "q");
	text = text.replace(/ஸா/g, "vV");
	text = text.replace(/ழா/g, "wV");
	text = text.replace(/ஞா/g, "QV");
	text = text.replace(/ஷூ/g, "£");
	text = text.replace(/ஷு/g, "×");
	text = text.replace(/ஜூ/g, "É");
	text = text.replace(/ஜு/g, "h");
	text = text.replace(/ஷா/g, "rV");
	text = text.replace(/வா/g, "kV");
	text = text.replace(/ஜா/g, "ÛV");
	text = text.replace(/ரா/g, "«V");
	text = text.replace(/மா/g, "\\V");
	text = text.replace(/பா/g, "ÃV");
	text = text.replace(/ஙே/g, "¼ô");
	text = text.replace(/னே/g, "¼ª");
	text = text.replace(/தே/g, "¼>");
	text = text.replace(/கே/g, "¼ï");
	text = text.replace(/றே/g, "¼Å");
	text = text.replace(/க்ஷே/g, "¼³");
	text = text.replace(/ணே/g, "¼ð");
	text = text.replace(/ளே/g, "¼e");
	text = text.replace(/ஹே/g, "¼Ç");
	text = text.replace(/டே/g, "¼¦");
	text = text.replace(/ஸே/g, "¼v");
	text = text.replace(/ழே/g, "¼w");
	text = text.replace(/ஞே/g, "¼Q");
	text = text.replace(/ஷே/g, "¼≠");
	text = text.replace(/வே/g, "¼k");
	text = text.replace(/ஜே/g, "¼Û");
	text = text.replace(/ரே/g, "¼«");
	text = text.replace(/மே/g, "¼\\");
	text = text.replace(/பே/g, "¼Ã");
	text = text.replace(/லே/g, "¼é");
	text = text.replace(/யே/g, "¼B");
	text = text.replace(/நே/g, "¼å");
	text = text.replace(/சே/g, "¼Ä");
	text = text.replace(/லா/g, "éV");
	text = text.replace(/யா/g, "BV");
	text = text.replace(/நா/g, "åV");
	text = text.replace(/சா/g, "ÄV");
	text = text.replace(/“/g, "\"\"");
	text = text.replace(/”/g, "\'\'");
	text = text.replace(/ங்/g, "º");
	text = text.replace(/த்/g, "Ý");
	text = text.replace(/ஙூ/g, "");  //Deleted
	text = text.replace(/ஸ்ரீ/g, "p");
	text = text.replace(/ரி/g, "ö");
	text = text.replace(/ரீ/g, "Z");
	text = text.replace(/னு/g, "Ð");
	text = text.replace(/ஙு/g, "");  //Deleted
	text = text.replace(/தூ/g, "#");
	text = text.replace(/ஙீ/g, "");  //Deleted
	text = text.replace(/து/g, "m");
	text = text.replace(/ஙி/g, "");  //Deleted
	text = text.replace(/தீ/g, "y");
	text = text.replace(/ங/g, "ô");
	text = text.replace(/தி/g, "]");
	text = text.replace(/ன்/g, "[");
	text = text.replace(/னீ/g, "Ì");
	text = text.replace(/னி/g, "M");
	text = text.replace(/ன/g, "ª");
	text = text.replace(/த/g, ">");
	text = text.replace(/க்/g, "Â");
	text = text.replace(/னூ/g, "û");
	text = text.replace(/கூ/g, "í");
	text = text.replace(/ண்/g, "õ");
	text = text.replace(/கு/g, "z");
	text = text.replace(/கீ/g, "ÿ");
	text = text.replace(/ணூ/g, "dd");
	text = text.replace(/கி/g, "þ");
	text = text.replace(/ணு/g, "b");
	text = text.replace(/க/g, "ï");
	text = text.replace(/ணீ/g, "§");
	text = text.replace(/ற்/g, "u");
	text = text.replace(/றீ/g, "S");
	text = text.replace(/று/g, "®");
	text = text.replace(/க்ஷ்/g, "Õ");
	text = text.replace(/றி/g, "¤");
	text = text.replace(/ள்/g, "^");
	text = text.replace(/க்ஷி/g, "H");
	text = text.replace(/ற/g, "Å");
	text = text.replace(/க்ஷீ/g, "È");
	text = text.replace(/ர்/g, "ì");
	text = text.replace(/ணி/g, "è");
	text = text.replace(/க்ஷ/g, "³");
	text = text.replace(/ளு/g, "Ó");
	text = text.replace(/ளூ/g, "j");
	text = text.replace(/ண/g, "ð");
	text = text.replace(/ட்/g, "â");
	text = text.replace(/ஃ/g, "à");
	text = text.replace(/டூ/g, "ù");
	text = text.replace(/ஓ/g, "{");
	text = text.replace(/டு/g, "|");
	text = text.replace(/ஒ/g, "Î");
	text = text.replace(/ௐ/g, "{D");
	text = text.replace(/டீ/g, "Ï");
	text = text.replace(/ஹீ/g, "ê");
	text = text.replace(/ஹி/g, "N");
	text = text.replace(/ழ்/g, "µ");
	text = text.replace(/ஸ்/g, "ü");
	text = text.replace(/ள/g, "e");
	text = text.replace(/ஹ/g, "Ç");
	text = text.replace(/ஐ/g, "n");
	text = text.replace(/டி/g, "½");
	text = text.replace(/ஏ/g, "°");
	text = text.replace(/ட/g, "¦");
	text = text.replace(/எ/g, "¨");
	text = text.replace(/ஞ்/g, "Þ");
	text = text.replace(/ஊ/g, "»");
	text = text.replace(/ஞூ/g, "");  //Deleted
	text = text.replace(/ஸீ/g, "¢");
	text = text.replace(/ழூ/g, "ñ");
	text = text.replace(/ஸி/g, "L");
	text = text.replace(/ழு/g, "¿");
	text = text.replace(/ஷ்/g, "i");
	text = text.replace(/ழி/g, "a");
	text = text.replace(/ஸ/g, "v");
	text = text.replace(/ழீ/g, "Ñ");
	text = text.replace(/உ/g, "c");
	text = text.replace(/ஞு/g, "");  //Deleted
	text = text.replace(/ஹ்/g, "ã");
	text = text.replace(/ஈ/g, "~");
	text = text.replace(/ஞீ/g, "");  //Deleted
	text = text.replace(/ழ/g, "w");
	text = text.replace(/ஷீ/g, "U");
	text = text.replace(/இ/g, "Ö");
	text = text.replace(/ஞி/g, "");  //Deleted
	text = text.replace(/ஆ/g, "g");
	text = text.replace(/ஞ/g, "Q");
	text = text.replace(/வ்/g, "Ë");
	text = text.replace(/ஷி/g, "´");
	text = text.replace(/ஷ/g, "r");
	text = text.replace(/வூ/g, "Æ");
	text = text.replace(/வீ/g, "T");
	text = text.replace(/ஜீ/g, "ý");
	text = text.replace(/ஜ்/g, "ë");
	text = text.replace(/வு/g, "¡");
	text = text.replace(/வி/g, "s");
	text = text.replace(/ஜி/g, "÷");
	text = text.replace(/ல்/g, "_");
	text = text.replace(/வ/g, "k");
	text = text.replace(/ஜ/g, "Û");
	text = text.replace(/மி/g, "t");
	text = text.replace(/அ/g, "¶");
	text = text.replace(/ச்/g, "ß");
	text = text.replace(/யூ/g, "R");
	text = text.replace(/யு/g, "¥");
	text = text.replace(/ரு/g, "ò");
	text = text.replace(/ரூ/g, "Ô");
	text = text.replace(/லு/g, "K");
	text = text.replace(/லீ/g, "Ü");
	text = text.replace(/லி/g, "o");
	text = text.replace(/மூ/g, "J");
	text = text.replace(/மு/g, "x");
	text = text.replace(/ர/g, "«");
	text = text.replace(/யி/g, "l");
	text = text.replace(/ம்/g, "D");
	text = text.replace(/ம/g, "\\");
	text = text.replace(/ப்/g, "©");
	text = text.replace(/பு/g, "A");
	text = text.replace(/பூ/g, "¯");
	text = text.replace(/பீ/g, "¬");
	text = text.replace(/பி/g, "¸");
	text = text.replace(/ப/g, "Ã");
	text = text.replace(/ந்/g, "Í");
	text = text.replace(/றூ/g, "G");
	text = text.replace(/ல/g, "é");
	text = text.replace(/மீ/g, "*");
	text = text.replace(/யீ/g, "X");
	text = text.replace(/\=/g, "=");
	text = text.replace(/\+/g, "+");
	text = text.replace(/லூ/g, "Ù");
	text = text.replace(/ய்/g, "F");
	text = text.replace(/ய/g, "B");
	text = text.replace(/நி/g, "W");
	text = text.replace(/நூ/g, "±");
	text = text.replace(/நு/g, "O");
	text = text.replace(/நீ/g, "À");
	text = text.replace(/ந/g, "å");
	text = text.replace(/சூ/g, "ó");
	text = text.replace(/சு/g, "·");
	text = text.replace(/சீ/g, "æ");
	text = text.replace(/சி/g, "E");
	text = text.replace(/ச/g, "Ä");
return text;
};