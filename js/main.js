let datas = [
	{
		name: 'John Bradley',
		avatar: './images/user-1.jpg',
		status: 'online',
		messenges:[
			{
				pos: "right",
				type: "simple",
				msg:'Merci !'
			},
			{
				pos: "left",
				type: "simple",
				msg:'Tu fais quoi là-bas ?'
			},
			{
				pos: "right",
				type: "simple",
				msg:'Rien du tout !'
			},
			{
				pos: "left",
				type: "simple",
				msg:'Carrément rien ???'
			},
			{
				pos: "right",
				type: "simple",
				msg:'Rien du genre pas grand chose !'
			},
			{
				pos: "left",
				type: "simple",
				msg:'Vas-tu y passer les vacances ?'
			},
			{
				pos: "right",
				type: "simple",
				msg:'Non !'
			},
			{
				pos: "left",
				type: "simple",
				msg:'Tu fuis la maison ?'
			},
			{
				pos: "right",
				type: "simple",
				msg:"Je compte rentrer d'ici la fin du mois"
			},
			{
				pos: "left",
				type: "simple",
				msg:"Ok !"
			},
			{
				pos: "right",
				type: "simple",
				msg:"Les vacances, ça roule comme tu le veux ?"
			},
			{
				pos: "left",
				type: "simple",
				msg:"Je ne fais rein d'important"
			},
			{
				pos: "right",
				type: "simple",
				msg:"Ok !"
			}
		]
	},
	{
		name: 'William Taylor',
		avatar: './images/user-2.jpg',
		status: 'online',
		messenges:[
			{
				pos: "left",
				type: "simple",
				msg:'Bonjour !'
			},
			{
				pos: "left",
				type: "simple",
				msg:'Comment vas-tu ?'
			},
			{
				pos: "right",
				type: "simple",
				msg:'Bonjour !'
			},
			{
				pos: "right",
				type: "simple",
				msg:'Je vais bien ! Et toi ?'
			},
			{
				pos: "left",
				type: "simple",
				msg:'Pareil !'
			}
		]
	},
	{
		name: 'Alice Ross',
		avatar: './images/user-3.jpg',
		status: 'online',
		messenges:[
			
		]
	},
	{
		name: 'James Brand',
		avatar: './images/user-4.jpg',
		status: 'offline',
		messenges:[
			{
				pos: "left",
				type: "simple",
				msg:'Bonjour !'
			},
			{
				pos: "left",
				type: "simple",
				msg:'Comment vas-tu ?'
			},
			{
				pos: "right",
				type: "simple",
				msg:'Bonjour !'
			},
			{
				pos: "right",
				type: "simple",
				msg:'Je vais bien ! Et toi ?'
			},
			{
				pos: "left",
				type: "simple",
				msg:'Pareil !'
			}
		]
	},
	{
		name: 'Anna Brown',
		avatar: './images/user-5.jpg',
		status: 'online',
		messenges:[
			{
				pos: "left",
				type: "simple",
				msg:'Bonjour !'
			},
			{
				pos: "right",
				type: "simple",
				msg:'Bonjour !'
			}
		]
	},
	{
		name: 'Alice Jonathan',
		avatar: './images/user-6.jpg',
		status: 'offline',
		messenges:[
			
		]
	},
	{
		name: 'Joe Brayan',
		avatar: './images/user-7.jpg',
		status: 'offline',
		messenges:[
			{
				pos: "left",
				type: "simple",
				msg:'Bonjour !'
			},
			{
				pos: "left",
				type: "simple",
				msg:'Comment vas-tu ?'
			},
			{
				pos: "right",
				type: "simple",
				msg:'Bonjour !'
			},
			{
				pos: "right",
				type: "simple",
				msg:'Je vais bien ! Et toi ?'
			},
			{
				pos: "left",
				type: "simple",
				msg:'Pareil !'
			}
		]
	},
	{
		name: 'Kevin Miller',
		avatar: './images/user-1.jpg',
		status: 'online',
		messenges:[
			{
				pos: "left",
				type: "simple",
				msg:'Bonjour !'
			},
			{
				pos: "left",
				type: "simple",
				msg:'Comment vas-tu ?'
			},
			{
				pos: "right",
				type: "simple",
				msg:'Bonjour !'
			},
			{
				pos: "right",
				type: "simple",
				msg:'Je vais bien ! Et toi ?'
			},
			{
				pos: "left",
				type: "simple",
				msg:'Pareil !'
			}
		]
	}
];

let messengerPart = document.querySelector('.messenger'),
messageContainer = document.querySelector('.msg-container'),
userList = document.querySelector('.users-list-container'),
messengerBody = messengerPart.querySelector('.body'),
messengerIsOpen = false;

messengerPart.querySelector('#go-back').onclick = (e)=>{
	messengerPart.style.animation = 'out 1s forwards';
};

for(let don of datas){
	let lastMessage = '<i>Aucun message</i>';
	if (don.messenges.length > 0) {
		lastMessage = don.messenges[don.messenges.length - 1].msg;
	}
	let userRowToPush = `<div class="user-row">
                <img src="${don.avatar}" alt="avatar" class="avatar"/>
                <div class="retails">
                  <h2>${don.name}</h2>
                  <h4>${lastMessage}</h4>
                </div>
                <div class="${don.status} status"></div>
              </div>`;
    userList.innerHTML += userRowToPush;
}

function msgSetter(name) {
	for(let user of datas){
		if (user.name === name) {
			if (user.messenges.length > 0) {
				for(let sms of user.messenges){
						if (sms.type === "simple") {
							let msg =  `<div class="row ${sms.pos}-row">
						                <p>${sms.msg}</p>
						                <img class="share" src="./svg/share.svg">
						            </div>`;
							messageContainer.innerHTML += msg;		
						}
				}
			}else{
				messageContainer.innerHTML += `<div class='no-message'>Aucun message en commun<br>Dites Bonjour à <i><b>${user.name}</b></i></div>`;		
			}
		}
	}
}

let usersRow = document.querySelectorAll('.user-row');

for(let user of usersRow){
	user.onclick = (e)=>{
		messageContainer.innerHTML = '';
		messengerPart.style.animation = "in .7s forwards";
		let name = user.querySelector('.retails h2').innerText,
		status = user.querySelector('.status').classList.value,
		avatar = user.querySelector('.avatar').src,
		uName = messengerPart.querySelector('header .users-infos h4'),
		uOnline = messengerPart.querySelector('header .users-infos h5'),
		uAvatar = messengerPart.querySelector('header #avatar');
		uAvatar.src = avatar;
		uName.innerText = name;

		for(let user of datas){
			if (user.name === name) {
				msgSetter(name);
			}
		}
	};
}

window.onkeydown = (e)=>{
	console.log(datas);
};

