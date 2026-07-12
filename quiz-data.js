// Dati condivisi del quiz "La Macchina degli Appuntamenti" - Cosaporto
// Usato sia da host.html che da player.html

var PLAYERS = ["Marco","Francesca","Tommaso","Margherita","Federica","Stefano","Daniele","Domitilla","Carola","Andrea","Giorgia"];
var LABELS  = ["A","B","C","D"];

var PROFILES = [
  {min:9, label:"Il Closer Sistematico"},
  {min:7, label:"Il Cacciatore con Metodo"},
  {min:5, label:"Il Venditore in Transizione"},
  {min:0, label:"Il Talento Grezzo"}
];

var QUESTIONS = [
  {
    q:"Qual è il pilastro fondamentale di un sistema di acquisizione clienti efficace?",
    opts:["Il talento personale del venditore","Un sistema prevedibile e replicabile","Il numero di email inviate ogni giorno","Il budget pubblicitario"],
    ans:1,
    exp:"Un sistema strutturato e prevedibile batte il talento del singolo. L'obiettivo è costruire una macchina che funzioni indipendentemente dall'umore o dalla giornata del venditore."
  },
  {
    q:"Quanti venditori B2B si arrendono dopo il primo mancato riscontro dal prospect?",
    opts:["Il 20%","Il 35%","Il 44%","Il 60%"],
    ans:2,
    exp:"Il 44% abbandona dopo il primo silenzio. Eppure l'80% delle vendite avviene dopo il quinto contatto. Chi si ferma prima sta lasciando opportunità sul tavolo."
  },
  {
    q:"In una cold email efficace, a quale domanda deve rispondere ogni frase del corpo?",
    opts:["Cosa vendo io?","Cosa ci guadagna chi legge?","Quando possiamo incontrarci?","Perché sono il migliore?"],
    ans:1,
    exp:"Il testo deve essere costruito dal punto di vista del prospect. Ogni frase deve rispondere alla domanda implicita: è a me cosa cambia? Se non dà valore al lettore, non serve."
  },
  {
    q:"Come si costruisce un database di prospect secondo il metodo?",
    opts:["Comprando liste sui marketplace","Raccogliendo biglietti da visita alle fiere","Filtrando su segnali concreti: tecnologie, crescita, assunzioni","Solo LinkedIn Sales Navigator"],
    ans:2,
    exp:"Un Database 2.0 non è una lista comprata. Si costruisce identificando segnali che indicano un bisogno reale: tecnologie adottate, fase di crescita, assunzioni recenti, finanziamenti."
  },
  {
    q:"Qual è l'errore più comune nella CTA di una prima email a freddo?",
    opts:["Essere troppo cortesi","Chiedere troppo subito (es. call di 45 minuti)","Non firmare l'email","Usare il nome del prospect nell'oggetto"],
    ans:1,
    exp:"Chiedere una call lunga al primo contatto è come chiedere di sposarsi al primo appuntamento. La CTA giusta chiede un micro-impegno: 15 minuti martedì o giovedì?"
  },
  {
    q:"Qual è il mindset vincente nel follow-up?",
    opts:["Mandare più email possibili","Offro valore reale e il timing cambierà","Usare sempre il telefono al posto dell'email","Avere un CRM migliore degli altri"],
    ans:1,
    exp:"Pensare 'se fossero interessati avrebbero risposto' porta ad abbandonare presto. Il timing cambia: la persistenza intelligente con valore vince sempre."
  },
  {
    q:"Cos'è lo show-up rate e perché è importante?",
    opts:["Il tasso di apertura delle email","La percentuale di appuntamenti fissati che avvengono davvero","Il numero di risposte positive alle cold email","Il tasso di conversione da lead a cliente"],
    ans:1,
    exp:"Fissare l'appuntamento è solo metà del lavoro. Lo show-up rate misura quanti si tengono effettivamente. Un sistema efficace lavora anche su questa fase con reminder e micro-impegni."
  },
  {
    q:"Cosa descrive meglio la filosofia del follow-up multicanale?",
    opts:["Bastano le email, gli altri canali distraggono","Dopo 2 email senza risposta è meglio smettere","Integrare LinkedIn o una call moltiplica le possibilità senza saturare","Chiamare subito al telefono è sempre meglio"],
    ans:2,
    exp:"La prospezione multicanale nel B2B funziona. Se l'email non riceve risposta, un contatto su LinkedIn o una breve chiamata cambia canale senza aumentare la pressione."
  },
  {
    q:"Quanto conta la qualità del database rispetto al testo dell'email?",
    opts:["Il testo conta l'80%, il database il 20%","Database e testo contano al 50% ciascuno","L'80% del tempo va ai dati: la lista è la regola più importante","Il database non conta se hai un ottimo copywriter"],
    ans:2,
    exp:"La lista è più importante del testo. Con i dati giusti sai a chi scrivi, puoi personalizzare e capire i pain point. Un testo brillante alla lista sbagliata non converte."
  },
  {
    q:"Come si definisce la persistenza professionale nel metodo?",
    opts:["Mandare la stessa email ogni 3 giorni","Cambiare solo l'orario di invio nei follow-up","Cambiare angolo ad ogni touchpoint aggiungendo valore reale","Aumentare la frequenza finché non rispondono"],
    ans:2,
    exp:"Ogni follow-up deve cambiare angolazione: un case study, una notizia rilevante, una domanda diversa. Si rimane nella memoria del prospect senza diventare fastidiosi."
  }
];
