async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("No hay una conversacion abierta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Dime, so palgo
Dame con algo o me salgo
Dime, so palgo
Dame con algo o me salgo

No, te va' a hacer
A ti yo te he visto ante'
Hoy te ves bien
Normal, si tú siempre parte'

Dime, so palgo, dame contacto
Dame con algo o me salgo
Si tú siempre parte'
Dime, so palgo, dame contacto
Dame con algo o me salgo

Gistro fuera del jean, ella sabe que es una fashion killa
To' los día' en el gym, ese booty cada vez más bigger
Mhm, ese booty cada vez más bigger
Ajá, mhm

Y yo que tengo ganas, tú me has visto antes
Esto es sencillo, yo quiero darte colmillo
Sé que estás bellaca, no sé si tú aguantes
Que te dé rastrillo, que te quedes conmigo

Yo que tengo gana', tú me has visto ante'
Esto es sencillo, ma, quiero darte colmillo
Sé que estás bellaca, no sé si tú aguantes
Que te dé rastrillo, que tú te quedes conmigo

Gistro fuera del jean, ella sabe que es una fashion killa
To' los día' en el gym, ese booty cada vez más bigger
Mhm, ese booty cada vez más bigger
Ajá, mhm

Yo que tengo gana', tú-tú me has visto ante'
Esto es sencillo, ma, quiero darte colmillo
Sé-Sé que estás bellaca, no sé si tú aguantes
Que te dé rastrillo, que te quedes conmigo

Dame con algo o me salgo
Salgo, salgo, salgo, salgo
Salgo, salgo, salgo, sa-sa-sa-sa—

Dime, so palgo, dame contacto
Dame con algo o me salgo
Dime, so palgo, dame contacto
Dame con algo o me salgo

Sube temperatura, dice que quiere contacto
Quiere que la azote, ese es el punto, mami, exacto
Yo nunca me retracto, nena, ¿what the fuck?
Quiere que le dé impacto, yo cometo el acto bellaco

Y qué chimba, tú me chinga'
Hágale pues, trépate como chiringa
Y si te pasa', tú va' pa' casa
Y te lo doy, te lo doy, no te me rinda', baby girl

Dime, so palgo, dame contacto
Dame con algo o me salgo
Dime, so palgo, dame contacto
Dame con algo o me salgo
Yeah, ¿qué?, yeah, yeah

Mic check, guatauba
En un Ferrari negro carbón por Aruba
Perreando en el Triángulo de Bermuda'
Quiero que la' que estén soltera' copa' y botella' suban

Que estamo' más chillin' que un Buda
Bien bellaco y yo con trago', y tú en los taco'
Usa' combi de Victoria y del Versace me lo saco
Desenmoño, lo destapo, panty al suelo, esto es un atraco

Te-Te voy a partir como el intro de Los Capo'
Reggaeton de Carola, super nota en la consola
Siempre volando bajito, mezclo whiskey con la rola
En el jet ski a dosciento', se moja sola

Cuando abre las pierna' se ve la supernova
Esto es desde hace tiempo, esto no es por moda
Fuck the police, OG, que se joda
Ella no es boba, estudia mientra' enrola
Yo no la amo, pero el culo me enamora (Jowell)

Si sigue' voy a meterte, eh, la noche huele a sexo
Chingarte a ti
Comerte, eh, sin darte ni un beso
Mojarte ahí

Meterte, eh, la noche huele a sexo
Chingarte a ti
Comerte, eh, sin darte ni un beso
Mojarte ahí

Ah, quedan invitada'
Esta es la iglesia del perreo, no es ningún cuento de hada'
Ah-ah, si quiere' entonce' pon la cara de mala
Pa' arrastrarte del cuarto a la sala

Tan rico que te ves 'esnúa
Me gusta tu piquete y tu flow de frontúa', ay
No importa que ella sea guillúa'?
Me gustan chiquitita', y que sean nalgúa', oh

Vírate, señora
Deje de llamar, que pa' su hija no hay hora
Si va' descarrilá', te la voy a parquear
No va a virar pa'trá', la voy a dejar juqueá'

Jajajaja
Yo, Tainy
Más perreo, más perreo
`).then(e => console.log(`Codigo finalizado ${e} mensajes enviados`)).catch(console.error)