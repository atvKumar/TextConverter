function Bamini_To_Unicode (text) {
    //return text + " Bamini_To_Unicode";

    text = text.replace(/sp/g, "ளி");
    text = text.replace(/hp/g, "ரி");
    text = text.replace(/hP/g, "ரீ");
    text = text.replace(/uP/g, "ரீ");
    text = text.replace(/u\;/g, "ர்");
    text = text.replace(/h\;/g, "ர்");
    text = text.replace(/H/g, "ர்");
    text = text.replace(/\+/g, "10");

    text = text.replace(/nfs/g, "கௌ");
    text = text.replace(/Nfh/g, "கோ");
    text = text.replace(/nfh/g, "கொ");
    text = text.replace(/fh/g, "கா");
    text = text.replace(/fp/g, "கி");
    text = text.replace(/fP/g, "கீ");
    text = text.replace(/F/g, "கு");
    text = text.replace(/\$/g, "கூ");
    text = text.replace(/nf/g, "கெ");
    text = text.replace(/Nf/g, "கே");
    text = text.replace(/if/g, "கை");
    text = text.replace(/f\;/g, "க்");
    text = text.replace(/f/g, "க");

    text = text.replace(/nqs/g, "ஙௌ");
    text = text.replace(/Nqh/g, "ஙோ");
    text = text.replace(/nqh/g, "ஙொ");
    text = text.replace(/qh/g, "ஙா");
    text = text.replace(/qp/g, "ஙி");
    text = text.replace(/qP/g, "ஙீ");
    text = text.replace(/nq/g, "ஙெ");
    text = text.replace(/Nq/g, "ஙே");
    text = text.replace(/iq/g, "ஙை");
    text = text.replace(/q\;/g, "ங்");
    text = text.replace(/q/g, "ங");

    text = text.replace(/nrs/g, "சௌ");
    text = text.replace(/Nrh/g, "சோ");
    text = text.replace(/nrh/g, "சொ");
    text = text.replace(/rh/g, "சா");
    text = text.replace(/rp/g, "சி");
    text = text.replace(/rP/g, "சீ");
    text = text.replace(/R/g, "சு");
    text = text.replace(/\#/g, "சூ");
    text = text.replace(/nr/g, "செ");
    text = text.replace(/Nr/g, "சே");
    text = text.replace(/ir/g, "சை");
    text = text.replace(/r\;/g, "ச்");
    text = text.replace(/r/g, "ச");

    text = text.replace(/n\[s/g, "ஜௌ");
    text = text.replace(/N\[h/g, "ஜோ");
    text = text.replace(/n\[h/g, "ஜொ");
    text = text.replace(/\[h/g, "ஜா");
    text = text.replace(/\[p/g, "ஜி");
    text = text.replace(/\[P/g, "ஜீ");
    text = text.replace(/\[{/g, "ஜு");
    text = text.replace(/\[_/g, "ஜூ");

    text = text.replace(/n\[/g, "ஜெ");
    text = text.replace(/N\[/g, "ஜே");
    text = text.replace(/i\[/g, "ஜை");
    text = text.replace(/\[\;/g, "ஜ்");
    text = text.replace(/\[/g, "ஜ");

    text = text.replace(/nQs/g, "ஞௌ");
    text = text.replace(/NQh/g, "ஞோ");
    text = text.replace(/nQh/g, "ஞொ");
    text = text.replace(/Qh/g, "ஞா");
    text = text.replace(/Qp/g, "ஞி");
    text = text.replace(/QP/g, "ஞீ");
    text = text.replace(/nQ/g, "ஞெ");
    text = text.replace(/NQ/g, "ஞே");
    text = text.replace(/iQ/g, "ஞை");
    text = text.replace(/Q\;/g, "ஞ்");
    text = text.replace(/Q/g, "ஞ");

    text = text.replace(/nls/g, "டௌ");
    text = text.replace(/Nlh/g, "டோ");
    text = text.replace(/nlh/g, "டொ");
    text = text.replace(/lp/g, "டி");
    text = text.replace(/lP/g, "டீ");
    text = text.replace(/lh/g, "டா");
    text = text.replace(/b/g, "டி");
    text = text.replace(/B/g, "டீ");
    text = text.replace(/L/g, "டு");
    text = text.replace(/\^/g, "டூ");
    text = text.replace(/nl/g, "டெ");
    text = text.replace(/Nl/g, "டே");
    text = text.replace(/il/g, "டை");
    text = text.replace(/l\;/g, "ட்");
    text = text.replace(/l/g, "ட");

    text = text.replace(/nzs/g, "ணௌ");
    text = text.replace(/Nzh/g, "ணோ");
    text = text.replace(/nzh/g, "ணொ");
    text = text.replace(/zh/g, "ணா");
    text = text.replace(/zp/g, "ணி");
    text = text.replace(/zP/g, "ணீ");

    text = text.replace(/Zh/g, "ணூ");
    text = text.replace(/Z\}/g, "ணூ");

    text = text.replace(/nz/g, "ணெ");
    text = text.replace(/Nz/g, "ணே");
    text = text.replace(/iz/g, "ணை");

    text = text.replace(/z\;/g, "ண்");
    text = text.replace(/Z/g, "ணு");
    text = text.replace(/z/g, "ண");

    text = text.replace(/njs/g, "தௌ");
    text = text.replace(/Njh/g, "தோ");
    text = text.replace(/njh/g, "தொ");
    text = text.replace(/jh/g, "தா");
    text = text.replace(/jp/g, "தி");
    text = text.replace(/jP/g, "தீ");
    text = text.replace(/Jh/g, "தூ");
    text = text.replace(/Jh/g, "தூ");
    text = text.replace(/J\}/g, "தூ");
    text = text.replace(/J/g, "து");
    text = text.replace(/nj/g, "தெ");
    text = text.replace(/Nj/g, "தே");
    text = text.replace(/ij/g, "தை");
    text = text.replace(/j\;/g, "த்");
    text = text.replace(/j/g, "த");

    text = text.replace(/nes/g, "நௌ");
    text = text.replace(/Neh/g, "நோ");
    text = text.replace(/neh/g, "நொ");
    text = text.replace(/eh/g, "நா");
    text = text.replace(/ep/g, "நி");
    text = text.replace(/eP/g, "நீ");
    text = text.replace(/E\}/g, "நூ");
    text = text.replace(/Eh/g, "நூ");
    text = text.replace(/E/g, "நு");
    text = text.replace(/ne/g, "நெ");
    text = text.replace(/Ne/g, "நே");
    text = text.replace(/ie/g, "நை");
    text = text.replace(/e\;/g, "ந்");
    text = text.replace(/e/g, "ந");

    text = text.replace(/nds/g, "னௌ");
    text = text.replace(/Ndh/g, "னோ");
    text = text.replace(/ndh/g, "னொ");
    text = text.replace(/dh/g, "னா");
    text = text.replace(/dp/g, "னி");
    text = text.replace(/dP/g, "னீ");
    text = text.replace(/D\}/g, "னூ");

    text = text.replace(/Dh/g, "னூ");
    text = text.replace(/D/g, "னு");
    text = text.replace(/nd/g, "னெ");
    text = text.replace(/Nd/g, "னே");
    text = text.replace(/id/g, "னை");
    text = text.replace(/d\;/g, "ன்");
    text = text.replace(/d/g, "ன");

    text = text.replace(/ngs/g, "பௌ");
    text = text.replace(/Ngh/g, "போ");
    text = text.replace(/ngh/g, "பொ");
    text = text.replace(/gh/g, "பா");
    text = text.replace(/gp/g, "பி");
    text = text.replace(/gP/g, "பீ");

    text = text.replace(/G/g, "பு");
    text = text.replace(/ng/g, "பெ");
    text = text.replace(/Ng/g, "பே");
    text = text.replace(/ig/g, "பை");
    text = text.replace(/g\;/g, "ப்");
    text = text.replace(/g/g, "ப");

    text = text.replace(/nks/g, "மௌ");
    text = text.replace(/Nkh/g, "மோ");
    text = text.replace(/nkh/g, "மொ");
    text = text.replace(/kh/g, "மா");
    text = text.replace(/kp/g, "மி");
    text = text.replace(/kP/g, "மீ");
    text = text.replace(/K/g, "மு");
    text = text.replace(/\%/g, "மூ");
    text = text.replace(/nk/g, "மெ");
    text = text.replace(/Nk/g, "மே");
    text = text.replace(/ik/g, "மை");
    text = text.replace(/k;/g, "ம்");
    text = text.replace(/k/g, "ம");

    text = text.replace(/nas/g, "யௌ");
    text = text.replace(/Nah/g, "யோ");
    text = text.replace(/nah/g, "யொ");
    text = text.replace(/ah/g, "யா");
    text = text.replace(/ap/g, "யி");
    text = text.replace(/aP/g, "யீ");
    text = text.replace(/A/g, "யு");
    text = text.replace(/A\+/g, "யூ");
    text = text.replace(/na/g, "யெ");
    text = text.replace(/Na/g, "யே");
    text = text.replace(/ia/g, "யை");
    text = text.replace(/a\;/g, "ய்");
    text = text.replace(/a/g, "ய");

    text = text.replace(/nus/g, "ரௌ");
    text = text.replace(/Nuh/g, "ரோ");
    text = text.replace(/nuh/g, "ரொ");
    text = text.replace(/uh/g, "ரா");
    text = text.replace(/up/g, "ரி");

    text = text.replace(/U/g, "ரு");
    text = text.replace(/&/g, "ரூ");
    text = text.replace(/nu/g, "ரெ");
    text = text.replace(/Nu/g, "ரே");
    text = text.replace(/iu/g, "ரை");

    text = text.replace(/u/g, "ர");

    text = text.replace(/nys/g, "லௌ");
    text = text.replace(/Nyh/g, "லோ");
    text = text.replace(/nyh/g, "லொ");
    text = text.replace(/yh/g, "லா");
    text = text.replace(/yp/g, "லி");
    text = text.replace(/yP/g, "லீ");
    text = text.replace(/Yh/g, "லூ");
    text = text.replace(/Y\}/g, "லூ");
    text = text.replace(/Y/g, "லு");
    text = text.replace(/ny/g, "லெ");
    text = text.replace(/Ny/g, "லே");
    text = text.replace(/iy/g, "லை");
    text = text.replace(/y\;/g, "ல்");
    text = text.replace(/y/g, "ல");

    text = text.replace(/nss/g, "ளௌ");
    text = text.replace(/Nsh/g, "ளோ");
    text = text.replace(/nsh/g, "ளொ");
    text = text.replace(/sh/g, "ளா");

    text = text.replace(/sP/g, "ளீ");
    text = text.replace(/Sh/g, "ளூ");
    text = text.replace(/S/g, "ளு");
    text = text.replace(/ns/g, "ளெ");
    text = text.replace(/Ns/g, "ளே");
    text = text.replace(/is/g, "ளை");
    text = text.replace(/s\;/g, "ள்");
    text = text.replace(/s/g, "ள");

    
    text = text.replace(/Nth/g, "வோ");
    text = text.replace(/nth/g, "வொ");
    text = text.replace(/th/g, "வா");
    text = text.replace(/tp/g, "வி");
    text = text.replace(/tP/g, "வீ");

    text = text.replace(/nt/g, "வெ");
    text = text.replace(/Nt/g, "வே");
    text = text.replace(/it/g, "வை");

    text = text.replace(/t\;/g, "வ்");
    text = text.replace(/ntt/g, "வௌ");
    text = text.replace(/t/g, "வ");
    text = text.replace(/noo/g, "ழௌ");
    text = text.replace(/Noh/g, "ழோ");
    text = text.replace(/noh/g, "ழொ");
    text = text.replace(/oh/g, "ழா");
    text = text.replace(/op/g, "ழி");
    text = text.replace(/oP/g, "ழீ");
    text = text.replace(/\*/g, "ழூ");
    text = text.replace(/O/g, "ழு");
    text = text.replace(/no/g, "ழெ");
    text = text.replace(/No/g, "ழே");
    text = text.replace(/io/g, "ழை");
    text = text.replace(/o\;/g, "ழ்");
    text = text.replace(/o/g, "ழ");

    text = text.replace(/nws/g, "றௌ");
    text = text.replace(/Nwh/g, "றோ");
    text = text.replace(/nwh/g, "றொ");
    text = text.replace(/wh/g, "றா");
    text = text.replace(/wp/g, "றி");
    text = text.replace(/wP/g, "றீ");
    text = text.replace(/Wh/g, "றூ");
    text = text.replace(/W}/g, "றூ");

    text = text.replace(/W/g, "று");
    text = text.replace(/nw/g, "றெ");
    text = text.replace(/Nw/g, "றே");
    text = text.replace(/iw/g, "றை");
    text = text.replace(/w\;/g, "ற்");
    text = text.replace(/w/g, "ற");

    text = text.replace(/n``/g, "ஹௌ");
    text = text.replace(/N`h/g, "ஹோ");
    text = text.replace(/n`h/g, "ஹொ");
    text = text.replace(/`h/g, "ஹா");
    text = text.replace(/`p/g, "ஹி");
    text = text.replace(/`P/g, "ஹீ");

    text = text.replace(/n`/g, "ஹெ");
    text = text.replace(/N`/g, "ஹே");
    text = text.replace(/i`/g, "ஹை");
    text = text.replace(/`\;/g, "ஹ்");
    text = text.replace(/`/g, "ஹ");

    text = text.replace(/n\\s/g, "ஷௌ");
    text = text.replace(/N\\h/g, "ஷோ");
    text = text.replace(/n\\h/g, "ஷொ");
    text = text.replace(/\\h/g, "ஷா");
    text = text.replace(/\\p/g, "ஷி");
    text = text.replace(/\\P/g, "ஷீ");

    text = text.replace(/n\\/g, "ஷெ");
    text = text.replace(/N\\/g, "ஷே");
    text = text.replace(/i\\/g, "ஷை");
    text = text.replace(/\\;/g, "ஷ்");
    text = text.replace(/\\/g, "ஷ");

    text = text.replace(/n\]s/g, "ஸௌ");
    text = text.replace(/N\]h/g, "ஸோ");
    text = text.replace(/n\]h/g, "ஸொ");
    text = text.replace(/\]h/g, "ஸா");
    text = text.replace(/\]p/g, "ஸி");
    text = text.replace(/\]P/g, "ஸீ");

    text = text.replace(/n\]/g, "ஸெ");
    text = text.replace(/N\]/g, "ஸே");
    text = text.replace(/i\]/g, "ஸை");
    text = text.replace(/\];/g, "ஸ்");
    text = text.replace(/\]/g, "ஸ");

   text = text.replace(/m/g, "அ");
   text = text.replace(/M/g, "ஆ");
   text = text.replace(/\</g, "ஈ");
   text = text.replace(/c/g, "உ");
   text = text.replace(/C/g, "ஊ");
   text = text.replace(/v/g, "எ");
   text = text.replace(/V/g, "ஏ");
   text = text.replace(/I/g, "ஐ");
   text = text.replace(/x/g, "ஒ");
   text = text.replace(/X/g, "ஓ");
   text = text.replace(/xs/g, "ஔ");

    text = text.replace("/", "ஃ");

    text = text.replace(/\=/g, "ஸ்ரீ");

    text = text.replace(/T/g, "வு");

    text = text.replace(/வு10/g, "வூ");
    text = text.replace(/G\+/g, "பூ");
    text = text.replace(/பு10/g, "பூ");
    text = text.replace(/A\+/g, "யூ");
    text = text.replace(/யு10/g, "யூ");
    text = text.replace(/\–/g, "-");

    text = text.replace(/\,/g, "இ");

   text = text.replace(/\>/g, ",");
   text = text.replace(".கூ", "."); // Bug fix sentence end.
   return text;
};