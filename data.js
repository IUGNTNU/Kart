			const COLOR1='#5555AA';
            const COLOR2='#009933';
            const COLOR3='#c9d428';

var data = {
				label: 'Oversikt',
				amount: 70,
                imgSrc:'tellus.jpg',
                nodeDesc:"Her ser du de forskjellige avdelingene ved IUG NTNU. Du kan klikke deg gjennom organisasjonen. Du kan klikke på de blå bobblene for å bli redirektert til nettsider som inneholder mer spesifikk informasjon.",
                color:COLOR2,  // color for root node, will be inherited by children
				children: [
					{ 
                        label: 'Styret', 
                        amount:55, 
                        imgSrc:"styret.jpg",
                        nodeDesc:"Styret ved IUG NTNU består av en leder for Gløshaugen og Kalvskinnet, en nestleder, samt lederne for alle arbeidsgruppene ved IUG. Styret er også knyttet til økonomigruppa. Hovedmålet til styret er å knytte de forskjellige arbeidsgruppene sammen. <br><br> Styret har også oppgaver som å rapportere avdelingens aktivitet, og skal også overføre erfaringer til det neste styret. Leder og nestleder er også ansvarlig for økonomien til avdelingen.", 
                        children: [
						{
                            label: '<b>Kompetanseleder</b><br>Har ansvaret for kompetansegruppa.', 
                            amount: 30, 
                            color:COLOR3
                        }, 
						{
                            label:'<b>Leder</b><br>Lederen har ansvaret for at styret fungerer som det skal.', 
                            amount:30, 
                            color: COLOR3
                        },
                        {
                            label: '<b>Profileringsleder</b><br>Profileringslederen sørger for at profileringsgruppa fungerer optimalt.', 
                            amount: 30, 
                            color:COLOR3
                        }, 
						{
                            label:'<b>Nestleder</b><br>Nestleder skal hjelpe lederen i å styre styret.', 
                            amount:30, 
                            color:COLOR3
                        },
                        {
                            label: '<b>Arrangementleder</b><br>Arrangementleder skal sørge for at arrangementer blir gjennomført.', 
                            amount: 30, 
                            color:COLOR3
                        }, 
						{
                            label:'<b>HR-ansvarlig</b><br>HR-Ansvarlig sørger for at alle har det godt innad IUG.', 
                            amount:30, 
                            color: COLOR3
                        },
                        {
                            label: '<b>Leder-Kalvskinnet</b>Lederen for Kalvskinnes sørger for at arbeidsgruppene ved Kalvskinnet funker optimalt.', amount: 30, 
                            color:COLOR3
                        }, 
                        ]
					},
					
                    {
                        label: 'Profilering', 
                        amount: 35,
                        imgSrc:'profilering.jpg', 
                        nodeDesc:'Profileringsgruppen ved Ingeniører Uten Grenser avdelingen ved NTNU er ansvarlig for å markedsføre hele IUG Norge.</br></br> Dette gjøres ved blandt annet å skape grafikk og arrangere stands til oppkommende arrangementer. Vi har også ansvaret for nettstedet til IUG, og profilering på sosiale medier. <br><br>Det er altså profileringsgruppens jobb å få folk til å vite om oss.', 
                        children: [
						{
                            label: '<b>Nettsiden</b><br>Du har nok vært innom nettsiden vår, et nytt prosjekt siden 2016', 
                            amount:25, 
                            gotLink:1, 
                            link:'https://www.iug.no', 
                            color:COLOR1
                        },
						{
                            label: '<b>Oppkommende arrangementer</b><br>Profilering sørger for både grafikk og formidling av arrangementer.', gotLink:1, 
                            link:'https://www.iug.no/norge/allearrangementer', 
                            color:COLOR1, 
                            amount:25
                        },
                        {
                            label: '<b>Facebook side</b><br>Sjekk ut vår facebook side for å holde deg oppdatert på hva som skjer i IUG.', gotLink:1, 
                            link:'https://www.facebook.com/iugntnu/?fref=ts', 
                            color:COLOR1, 
                            amount:25
                        }
						]
					},
					{ 
                        label: 'Kompetanse', 
                        amount: 35, 
                        imgSrc:"kompetanse.jpg", 
                        nodeDesc:'Kompetansegruppen ved Ingeniører Uten Grensers avdeling ved NTNU er ansvarlige for alt det faglige innenfor ingeniørmessig bistand. <br><br>Hovedoppgaven til gruppen er å jobbe med Master med Mening (MmM) som er et tilbud vi i IUG tilbyr som er en masteroppgave knyttet opp mot bistand. Når man skriver en MmM har man mulighet til å skrive en faglig rettet masteroppgave, mulighet for feltreise og påvirke andre menneskers liv med oppgaven sin. <br><br>Andre faglige aktiviteter kompetansegruppen driver med er intern og ekstern kursing, bistandsrelaterte workshoper, Mapathons, Waterworld - En Eksperter i Team-landsby, nettverksbygging og bistandsprosjekter fra eksterne aktører. <br><br>Klikk på bobblene til venstre for å utforske prosjekter.', 
                        children: [
						{
                            label: '<b>Missing Maps</b><br>Bli med å kartlegge utsatte områder i utviklingsland.', 
                            amount:20,
                            gotLink:1,
                            color:COLOR1, 
                            link:'http://www.missingmaps.org/'
                        },
						{
                            label: '<b>Intern Kursing</b><br>Lær mer om', 
                            amount: 20,
                            gotLink:1,
                            color:COLOR1, 
                            link:'http://www.iug.no/kurs'
                        },
						{
                            label: '<b>Humanitært nettverk</b><br>', 
                            amount:20,
                            gotLink:1,
                            color:COLOR1, 
                            link:'http://www.iug.no/ntnu/humanitaertnettverk'
                        },
						{
                            label: '<b>Bachelor og master med mening</b><br>Skriv en Bachelor eller Masteroppgave som hjelper de som trenger det.',
                            amount:20,
                            gotLink:1,
                            color:COLOR1, 
                            link:'http://www.iug.no/ntnu/vilduskrive'
                        }
						]
					},
					{ 
                        label: 'Hyggekomité', 
                        amount:35, 
                        imgSrc:'hyggekomite.jpg',
                        nodeDesc:'Hyggekomitèen sørger for at alle har det fint innad IUG. Den består av HR-ansvarlig, og èn representant fra hver arbeidsgruppe. Blant de store oppgavene til hyggekomiteen er arrangering av jule-, og sommeravsluttning, samt arrangering av hytteturer. Dette sikrer en bedre kjemi i organisasjonen, noe som både fører til økt samarbeid og økt trivsel. <br><br> Hyggekomiteen arrangerer også fester etter forskjellige arrangementer, noe som gir motivasjon til å gjøre arrangementene så gode som mulig. I tillegg blir det arrangert andre sosiale aktiviteter, som curling og shuffleboarding.', 
                        children: [
                        {
                            label: '<b>Opptak</b><br>Søk IUG og bli med på morroa, vel!', 
                            amount:30, 
                            gotLink:1, 
                            color:COLOR1, 
                            link:'http://www.iug.no/ntnu/omopptak'
                        },
                        {
                            label: '<b>Hyttetur</b><br>Hytteturen arrangeres hver vår og høst, og hjelper IUG å bli kjent med hverandre', 
                            amount:30, 
                            color:COLOR3
                        },
                        {
                            label: '<b>Juleavsluttning</b><br>Mot slutten av høstsemesteret blir det arrangert en juleavsluttning', 
                            amount:30, 
                            color:COLOR3
                        },
                        {
                            label: '<b>Sommeravsluttning</b><br>Mot slutten av vårsemesteret blir det arrangert en sommeravsluttning', 
                            amount:30, 
                            color:COLOR3
                        }
						] 
					},
					{
                        label: 'Arrangement', 
                        amount: 35, 
                        imgSrc:'arrangement.jpg', 
                        nodeDesc:'Arrangementgruppa driver med arrangering av workshops. Workshoppene tilbyr en interaktiv og spennende måte å lære mer om bistand på. Blandt de store arrangementene som blir arrangert er Borderless, Create&Make, og Hverdagshelter.', children: [
							{
                                label:'<b>Borderless:</b></br>En festival som viser idealet om den globale ingeniør', 
                                amount:20, 
                                color:COLOR3
                            },
							{
                                label:'<b>Hverdagshelter:</b></br>Inspirerer deg til å skape en bedre verden.', 
                                amount:20, 
                                color:COLOR3
                            },
							{
                                label:'<b>Create and Make:</b></br>Lar deg hoppe inn i rollen som en ingeniør i feltarbeid.', 
                                amount:20, 
                                color:COLOR3
                            }
					
					]
                    }
				]
			}
