const Telegraf = require('telegraf');

const bot = new Telegraf('5332223595:AAHbbRg34d_0_6_9dXnLqwDkuUSSBqaT2_E');




bot.use((ctx,next) => {
    if (ctx.updateSubTypes[0] == "text") {
        bot.telegram.sendMessage(-1001371382055, "@" + ctx.from.username + " said: " + ctx.update.message.text);
    } else {
        bot.telegram.sendMessage(-1001371382055, "@" + ctx.from.username + " sent: " + ctx.updateSubTypes[0]);
    }

    next();
 });


//  bot.use((ctx,next) => {
//     console.log(ctx.message.video);

//     next();
//  });



 
bot.command(['start','Start'],(ctx) => {
    bot.telegram.sendChatAction(ctx.chat.id, "typing");
    bot.telegram.sendPhoto(ctx.chat.id,"AgACAgQAAxkBAANzYm6L95KJwt01Q-7Uqjkn0A4cUB8AAvy5MRsS3XlTtPmlrCfZo_ABAAMCAAN5AAMkBA");
    bot.telegram.sendMessage(ctx.chat.id, `Hi!😘 Karibu Bongo Hook

Jukwaa pekee Afrika Mashariki ambapo unaweza kupata Huduma Binafsi haraka🍑😜 . 

Tunakusaidia kupata Huduma uipendayo kiurahisi zaidi Wakati wowote!. Baadhi ya Huduma utakazopata ni kama:-

✅ Body Massage, ✅Couples, ✅Escorts, 
✅Maids,✅Vixens, ✅Jaccuzi, ✅Relaxation, 
✅Waxing, ✅Shaving, ✅Training na Nyingine🔞 Nyingi. 

🇹🇿 Mikoa yote watoa huduma wetu wanapatikana na wanaweza kukufata popote Ulipo mda wowote 24Hrs. Nyumbani au Hotelini 🏘`,
{
    reply_markup: {
        inline_keyboard: [
            [
                { text: 'Chagua Mhudumu👙', callback_data: 'wahudumu' }
            ],
            [
                { text: 'Chagua Huduma💆', callback_data: 'huduma' }
            ],
            [
                { text: 'Jiunge Nasi👯‍♀', callback_data: 'jiunge' },
                { text: 'Omba Msaada📞', callback_data: 'msaada' }
            ],
            [
                { text: 'Fahamu Zaidi (Website)🌐', callback_data: 'zaidi' } 
            ]
        ]
    }
}
)
});

bot.action('wahudumu',(ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,"https://bongohook.com/wp-content/uploads/buddypress/groups/1/cover-image/625aab8aaed06-bp-cover-image.jpg");
    bot.telegram.sendMessage(ctx.chat.id, "Chagua Sehemu (Mkoa) ulipo sahivi tukupatie mhudumu aliye karibu na wewe😊👍",
                {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: 'Dar es Salaam👙', callback_data: 'dar' },
                                { text: 'Zanzibar💆', callback_data: 'zanzibar' }                                
                            ],
                            [
                                { text: 'Dodoma💆', callback_data: 'dodoma' },
                                { text: 'Arusha💆', callback_data: 'arusha' }
                            ],
                            [
                                { text: 'Mingine (Mikoa Yote)💆', callback_data: 'mikoa_yote' }
                            ]
                        ]
                    }
                }
    )

});

bot.action('huduma',(ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, "😊👍Chagua huduma yoyote unayohitaji kupatiwa😊👍",
                {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: '✅ Body Massage', callback_data: 'dar' },
                                { text: '✅Couples', callback_data: 'zanzibar' }                                
                            ],
                            [
                                { text: '✅Escorts', callback_data: 'dodoma' },
                                { text: '✅Maids', callback_data: 'arusha' }
                            ],
                            [
                                { text: '✅Vixens', callback_data: 'mikoa_yote' },
                                { text: '✅Jaccuzi', callback_data: 'arusha' }
                            ],
                            [
                                { text: '✅Relaxation', callback_data: 'dodoma' },
                                { text: '✅Waxing', callback_data: 'arusha' }
                            ],
                            [
                                { text: '✅Shaving', callback_data: 'mikoa_yote' },
                                { text: '✅Training', callback_data: 'arusha' }
                            ],
                            [
                                {text: '🔞Special Service🔞(Nyinginezo)', callback_data: 'arusha' }
                            ]
                        ]
                    }
                }
    )

});

bot.action('jiunge',(ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,"https://developmentandleadership.org/wp-content/uploads/2014/04/Member-Banner.0012.jpg");
    bot.telegram.sendMessage(ctx.chat.id, `Jisajili na Ujiunge nasi uweze kulipwa kwa kutoa Huduma kupitia Jukwaa Letu
    
    Unaweza kujisajili kupitia Website yetu, Tumia Link ifuatayo
    
    https://bongohook.com/subscribe/`)
});

bot.action('msaada',(ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,"https://i.imgur.com/cJ70cdt.jpg");
    bot.telegram.sendMessage(ctx.chat.id, `Je unahitaji msaada wa aina yeyote kutoka kwetu wasina na Admin moja kwa moja tumia link ifuatayo
    
    @bongo_hook
    @bongo_hook
    @bongo_hook`)
});

bot.action('zaidi',(ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,"https://i.imgur.com/MMZXeIl.jpg");
    bot.telegram.sendMessage(ctx.chat.id, `Tembelea Website yetu sasa kupata Orodha ya watoa huduma wote na maelekezo zaidi
    Tumia Link Ifuatayo:
    
    https://bongohook.com/`)
})



var namelist = `/101 ✅<a href="https://bongohook.com/members/a-new-day-spa1/">A new day Spa</a>
/102 ✅<a href="https://bongohook.com/members/aliya1/">Aliya</a>
/103 ✅<a href="https://bongohook.com/members/anitha1/">Anitha</a>
/104 ✅<a href="https://bongohook.com/members/apple1/">Apple</a>
/105 ✅<a href="https://bongohook.com/members/asha-zungu1/">Asha Zungu</a>
/106 ✅<a href="https://bongohook.com/members/bab-rah1/">BAB-RAH</a>
/107 ✅<a href="https://bongohook.com/members/bianca1/">Bianca</a>
/108 ✅<a href="https://bongohook.com/members/california-spa-and-massage-therapy1/">California Spa</a>
/109 ✅<a href="https://bongohook.com/members/calm-girl1/">calm girl</a>
/110 ✅<a href="https://bongohook.com/members/candy-pal1/">Candy Pal</a>
/111 ✅<a href="https://bongohook.com/members/careen-patrick1/">Careen Patrick</a>
/112 ✅<a href="https://bongohook.com/members/cathy1/">CATHY</a>
/113 ✅<a href="https://bongohook.com/members/chautamu1/">Chautamu</a>
/114 ✅<a href="https://bongohook.com/members/classic1/">Classic</a>
/115 ✅<a href="https://bongohook.com/members/advertize-morogoro1/">Connection Morogoro</a>
/116 ✅<a href="https://bongohook.com/members/daniella1/">Daniella</a>
/117 ✅<a href="https://bongohook.com/members/dee-queen1/">Dee Queen</a>
/118 ✅<a href="https://bongohook.com/members/diddy1/">Diddy</a>
/119 ✅<a href="https://bongohook.com/members/dijjah-mpemba1/">DIJJAH MPEMBA</a>
/120 ✅<a href="https://bongohook.com/members/eliza1/">Eliza</a>
/121 ✅<a href="https://bongohook.com/members/esta1/">Esta</a>
/122 ✅<a href="https://bongohook.com/members/eve-babe1/">Eve babe</a>
/123 ✅<a href="https://bongohook.com/members/fania1/">Fania</a>
/124 ✅<a href="https://bongohook.com/members/gee-cute1/">gee cute</a>
/125 ✅<a href="https://bongohook.com/members/happy1/">Happy</a>
/126 ✅<a href="https://bongohook.com/members/honeygirl1/">Honeygirl</a>
/127 ✅<a href="https://bongohook.com/members/hot-sarah1/">Hot Sarah</a>
/128 ✅<a href="https://bongohook.com/members/husna1/">Husna</a>
/129 ✅<a href="https://bongohook.com/members/irene-sexy1/">Irene sexy</a>
/130 ✅<a href="https://bongohook.com/members/isabelah1/">ISABELAH</a>
/131 ✅<a href="https://bongohook.com/members/jasmine1/">JASMINE</a>
/132 ✅<a href="https://bongohook.com/members/jennifer1/">jennifer</a>
/133 ✅<a href="https://bongohook.com/members/joana1/">Joana</a>
/134 ✅<a href="https://bongohook.com/members/judith1/">judith</a>
/135 ✅<a href="https://bongohook.com/members/juju1/">Juju</a>
/136 ✅<a href="https://bongohook.com/members/june-cute1/">June cute</a>
/137 ✅<a href="https://bongohook.com/members/kaddie-jah1/">KADDIE-JAH</a>
/138 ✅<a href="https://bongohook.com/members/kamila-video-calls1/">KAMILA (video calls)</a>
/139 ✅<a href="https://bongohook.com/members/kate-video-call-massage-dildo1/">Kate (video call)</a>
/140 ✅<a href="https://bongohook.com/members/katoto-black1/">KATOTO BLACK</a>
/141 ✅<a href="https://bongohook.com/members/ketty1/">Ketty</a>
/142 ✅<a href="https://bongohook.com/members/kyla1/">Kyla</a>
/143 ✅<a href="https://bongohook.com/members/ladiva1/">Ladiva</a>
/144 ✅<a href="https://bongohook.com/members/lady-in-black1/">Lady in Black</a>
/145 ✅<a href="https://bongohook.com/members/laycious1/">Laycious</a>
/146 ✅<a href="https://bongohook.com/members/maina1/">MAINA</a>
/147 ✅<a href="https://bongohook.com/members/marie1/">MARIE</a>
/148 ✅<a href="https://bongohook.com/members/mary1/">Mary</a>
/149 ✅<a href="https://bongohook.com/members/meghan1/">Meghan</a>
/150 ✅<a href="https://bongohook.com/members/michelle-new1/">Michelle NEW</a>
/151 ✅<a href="https://bongohook.com/members/mimah1/">Mimah</a>
/152 ✅<a href="https://bongohook.com/members/mimi-nudes-at-a-price1/">MIMI (Nudes)</a>
/153 ✅<a href="https://bongohook.com/members/miss-angie1/">Miss Angie</a>
/154 ✅<a href="https://bongohook.com/members/miss-given1/">miss given</a>
/155 ✅<a href="https://bongohook.com/members/miss-khloe1/">Miss Khloe</a>
/156 ✅<a href="https://bongohook.com/members/miss-lissa1/">MISS LISSA</a>
/157 ✅<a href="https://bongohook.com/members/momo1/">momo</a>
/158 ✅<a href="https://bongohook.com/members/munira1/">MUNIRA</a>
/159 ✅<a href="https://bongohook.com/members/naima-danstan1/">NAIMA DANSTAN</a>
/160 ✅<a href="https://bongohook.com/members/nande1/">NANDE</a>
/161 ✅<a href="https://bongohook.com/members/naomi1/">naomi</a>
/162 ✅<a href="https://bongohook.com/members/naomy1/">naomy</a>
/163 ✅<a href="https://bongohook.com/members/nina-siwema1/">NINA SIWEMA</a>
/164 ✅<a href="https://bongohook.com/members/nino1/">Nino</a>
/165 ✅<a href="https://bongohook.com/members/norleen1/">NORLEEN</a>
/166 ✅<a href="https://bongohook.com/members/presilla1/">Presilla</a>
/167 ✅<a href="https://bongohook.com/members/queen-vanny1/">queen vanny</a>
/168 ✅<a href="https://bongohook.com/members/rachel-mtamu1/">RACHEL MTAMU</a>
/169 ✅<a href="https://bongohook.com/members/rahma-video-nudes1/">Rahma ( Nudes)</a>
/170 ✅<a href="https://bongohook.com/members/reen1/">REEN</a>
/171 ✅<a href="https://bongohook.com/members/riyah1/">Riyah</a>
/172 ✅<a href="https://bongohook.com/members/roseyway-mobile-massage1/">ROSEYWAY MOBILE MASSAGE</a>
/173 ✅<a href="https://bongohook.com/members/roshy1/">Roshy</a>
/174 ✅<a href="https://bongohook.com/members/ruta-angie1/">RUTA ANGIE</a>
/175 ✅<a href="https://bongohook.com/members/sabrina-video-calls1/">Sabrina (Video calls)</a>
/176 ✅<a href="https://bongohook.com/members/samiah1/">SAMIAH</a>
/177 ✅<a href="https://bongohook.com/members/santina1/">santina</a>
/178 ✅<a href="https://bongohook.com/members/saraa1/">SARAA</a>
/179 ✅<a href="https://bongohook.com/members/scarlet1/">Scarlet</a>
/180 ✅<a href="https://bongohook.com/members/seno1/">seno</a>
/181 ✅<a href="https://bongohook.com/members/sesheye1/">SESHEYE</a>
/182 ✅<a href="https://bongohook.com/members/shammy1/">Shammy</a>
/183 ✅<a href="https://bongohook.com/members/shine1/">SHINE</a>
/184 ✅<a href="https://bongohook.com/members/tara1/">Tara</a>
/185 ✅<a href="https://bongohook.com/members/tayana1/">Tayana</a>
/186 ✅<a href="https://bongohook.com/members/teresa-video-call-1/">Teresa { video call }</a>
/187 ✅<a href="https://bongohook.com/members/tyra1/">Tyra</a>
/188 ✅<a href="https://bongohook.com/members/winny-professional-massage1/">winny (Professional Massage)</a>
/189 ✅<a href="https://bongohook.com/members/zayan1/">Zayan</a>`


//#region CITIES BOT ACTION 💎💎💎🔓🔓🔓🔓

bot.action('dar',(ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, namelist, {parse_mode: 'html'})
})

bot.action('arusha',(ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, namelist, {parse_mode: 'html'})
})

bot.action('dodoma',(ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, namelist, {parse_mode: 'html'})
})


bot.help((ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,"https://bongohook.com/wp-content/uploads/avatars/15/1650046911-bpfull.jpg", {caption: "Yesy"}, {parse_mode: 'html'});
 
})

//#endregion 


// bot.command('101', (ctx) => {
//     bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/15/1650046911-bpfull.jpg', {caption: `Name:A new day Spa
// Location:Dar es salaam, tabata`});
// })



//#region MEMBERS COMMANDS💎💎💎🔓🔓🔓🔓⬇

bot.command('101', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/15/1650046911-bpfull.jpg', {caption: `Name: 🍑A new day Spa
Location: 📍Dar es salaam, tabata`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑A new day Spa
Location: 📍Dar es salaam, tabata
<a href="https://bongohook.com/members/a-new-day-spa1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('102', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/33/1650045907-bpfull.jpg', {caption: `Name: 🍑Aliya
Location: 📍Arusha, Arusha Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Aliya
Location: 📍Arusha, Arusha Town
<a href="https://bongohook.com/members/aliya1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('103', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/80/1650046289-bpfull.jpg', {caption: `Name: 🍑Anitha
Location: 📍Dar es salaam, Dar es salaam Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Anitha
Location: 📍Dar es salaam, Dar es salaam Town
<a href="https://bongohook.com/members/anitha1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('104', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/62/1650046492-bpfull.jpg', {caption: `Name: 🍑Apple
Location: 📍Dodoma, Dodoma Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Apple
Location: 📍Dodoma, Dodoma Town
<a href="https://bongohook.com/members/apple1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('105', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/82/1650047933-bpfull.jpg', {caption: `Name: 🍑Asha Zungu
Location: 📍Dar es salaam, Sinza`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Asha Zungu
Location: 📍Dar es salaam, Sinza
<a href="https://bongohook.com/members/asha-zungu1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('106', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/26/1650048720-bpfull.jpg', {caption: `Name: 🍑BAB-RAH
Location: 📍Zanzibar, Zanzibar Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑BAB-RAH
Location: 📍Zanzibar, Zanzibar Town
<a href="https://bongohook.com/members/bab-rah1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('107', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/36/1650049198-bpfull.jpg', {caption: `Name: 🍑Bianca
Location: 📍Arusha, Arusha Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Bianca
Location: 📍Arusha, Arusha Town
<a href="https://bongohook.com/members/bianca1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('108', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/9/1650049528-bpfull.jpg', {caption: `Name: 🍑California spa and Massage Therapy
Location: 📍Dar es salaam, Sinza`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑California spa and Massage Therapy
Location: 📍Dar es salaam, Sinza
<a href="https://bongohook.com/members/california-spa-and-massage-therapy1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('109', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/90/1650050166-bpfull.jpg', {caption: `Name: 🍑calm girl
Location: 📍Dodoma, Dodoma Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑calm girl
Location: 📍Dodoma, Dodoma Town
<a href="https://bongohook.com/members/calm-girl1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('110', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/69/1650050487-bpfull.jpg', {caption: `Name: 🍑Candy Pal
Location: 📍Dar es salaam, Sinza`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Candy Pal
Location: 📍Dar es salaam, Sinza
<a href="https://bongohook.com/members/candy-pal1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('111', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/28/1650050648-bpfull.jpg', {caption: `Name: 🍑Careen Patrick
Location: 📍Dar es salaam, mwenge`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Careen Patrick
Location: 📍Dar es salaam, mwenge
<a href="https://bongohook.com/members/careen-patrick1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('112', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/18/1650050843-bpfull.jpg', {caption: `Name: 🍑CATHY
Location: 📍Dar es salaam, kimara mwisho`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑CATHY
Location: 📍Dar es salaam, kimara mwisho
<a href="https://bongohook.com/members/cathy1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('113', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/47/1650051112-bpfull.jpg', {caption: `Name: 🍑Chautamu
Location: 📍Dar es salaam, Sinza`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Chautamu
Location: 📍Dar es salaam, Sinza
<a href="https://bongohook.com/members/chautamu1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('114', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/53/1650051493-bpfull.jpg', {caption: `Name: 🍑Classic
Location: 📍Morogoro, Morogoro Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Classic
Location: 📍Morogoro, Morogoro Town
<a href="https://bongohook.com/members/classic1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('115', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/92/1650020277-bpfull.jpg', {caption: `Name: 🍑Connection Morogoro
Location: 📍Morogoro, Morogoro Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Connection Morogoro
Location: 📍Morogoro, Morogoro Town
<a href="https://bongohook.com/members/advertize-morogoro1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('116', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/78/1650052983-bpfull.jpg', {caption: `Name: 🍑Daniella
Location: 📍Dodoma, Dodoma Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Daniella
Location: 📍Dodoma, Dodoma Town
<a href="https://bongohook.com/members/daniella1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('117', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/71/1650053206-bpfull.jpg', {caption: `Name: 🍑Dee Queen
Location: 📍Mwanza, Mwanza Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Dee Queen
Location: 📍Mwanza, Mwanza Town
<a href="https://bongohook.com/members/dee-queen1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('118', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/7/1650053498-bpfull.jpg', {caption: `Name: 🍑Diddy
Location: 📍Dar es salaam, Dar es salaam Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Diddy
Location: 📍Dar es salaam, Dar es salaam Town
<a href="https://bongohook.com/members/diddy1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('119', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/8/1650053702-bpfull.jpg', {caption: `Name: 🍑DIJJAH MPEMBA
Location: 📍Iringa, Iringa Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑DIJJAH MPEMBA
Location: 📍Iringa, Iringa Town
<a href="https://bongohook.com/members/dijjah-mpemba1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('120', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/5/1650054184-bpfull.jpg', {caption: `Name: 🍑Eliza
Location: 📍Dodoma, Dodoma Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Eliza
Location: 📍Dodoma, Dodoma Town
<a href="https://bongohook.com/members/eliza1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('121', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/31/1650055587-bpfull.jpg', {caption: `Name: 🍑Esta
Location: 📍Arusha, Arusha Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Esta
Location: 📍Arusha, Arusha Town
<a href="https://bongohook.com/members/esta1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('122', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/39/1650056715-bpfull.jpg', {caption: `Name: 🍑Eve babe
Location: 📍Dar es salaam, Kijitonyama`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Eve babe
Location: 📍Dar es salaam, Kijitonyama
<a href="https://bongohook.com/members/eve-babe1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('123', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/51/1650080080-bpfull.jpg', {caption: `Name: 🍑Fania
Location: 📍Dar es salaam, Sinza`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Fania
Location: 📍Dar es salaam, Sinza
<a href="https://bongohook.com/members/fania1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('124', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/23/1650180626-bpfull.jpg', {caption: `Name: 🍑gee cute
Location: 📍Dodoma, Dodoma Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑gee cute
Location: 📍Dodoma, Dodoma Town
<a href="https://bongohook.com/members/gee-cute1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('125', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/27/1650180977-bpfull.jpg', {caption: `Name: 🍑Happy
Location: 📍Dodoma, Dodoma Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Happy
Location: 📍Dodoma, Dodoma Town
<a href="https://bongohook.com/members/happy1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('126', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/76/1650178878-bpfull.jpg', {caption: `Name: 🍑Honeygirl
Location: 📍Dodoma, Dodoma Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Honeygirl
Location: 📍Dodoma, Dodoma Town
<a href="https://bongohook.com/members/honeygirl1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('127', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/67/1650181303-bpfull.jpg', {caption: `Name: 🍑Hot Sarah
Location: 📍,`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Hot Sarah
Location: 📍,
<a href="https://bongohook.com/members/hot-sarah1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('128', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/57/1650176618-bpfull.jpg', {caption: `Name: 🍑Husna
Location: 📍Dar es salaam, Dar es salaam Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Husna
Location: 📍Dar es salaam, Dar es salaam Town
<a href="https://bongohook.com/members/husna1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('129', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/37/1650176618-bpfull.jpg', {caption: `Name: 🍑Irene sexy
Location: 📍Dar es salaam, tabata`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Irene sexy
Location: 📍Dar es salaam, tabata
<a href="https://bongohook.com/members/irene-sexy1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('130', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/41/1650176618-bpfull.jpg', {caption: `Name: 🍑ISABELAH
Location: 📍Arusha, Arusha Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑ISABELAH
Location: 📍Arusha, Arusha Town
<a href="https://bongohook.com/members/isabelah1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('131', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/4/1650181716-bpfull.jpg', {caption: `Name: 🍑JASMINE
Location: 📍Dodoma, Dodoma Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑JASMINE
Location: 📍Dodoma, Dodoma Town
<a href="https://bongohook.com/members/jasmine1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('132', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/22/1650176619-bpfull.jpg', {caption: `Name: 🍑jennifer
Location: 📍Dar es salaam, Dar es salaam Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑jennifer
Location: 📍Dar es salaam, Dar es salaam Town
<a href="https://bongohook.com/members/jennifer1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('133', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/48/1650176620-bpfull.jpg', {caption: `Name: 🍑Joana
Location: 📍Arusha, Arusha Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Joana
Location: 📍Arusha, Arusha Town
<a href="https://bongohook.com/members/joana1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('134', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/73/1650176620-bpfull.jpg', {caption: `Name: 🍑judith
Location: 📍Arusha, Arusha Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑judith
Location: 📍Arusha, Arusha Town
<a href="https://bongohook.com/members/judith1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('135', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/74/1650176620-bpfull.jpg', {caption: `Name: 🍑Juju
Location: 📍Dodoma, Dodoma Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Juju
Location: 📍Dodoma, Dodoma Town
<a href="https://bongohook.com/members/juju1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('136', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/56/1650176620-bpfull.jpg', {caption: `Name: 🍑June cute
Location: 📍Arusha, makao mapya`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑June cute
Location: 📍Arusha, makao mapya
<a href="https://bongohook.com/members/june-cute1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('137', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/79/1650176620-bpfull.jpg', {caption: `Name: 🍑KADDIE-JAH
Location: 📍Dar es salaam, Sinza`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑KADDIE-JAH
Location: 📍Dar es salaam, Sinza
<a href="https://bongohook.com/members/kaddie-jah1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('138', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/59/1650176620-bpfull.jpg', {caption: `Name: 🍑KAMILA (video calls)
Location: 📍Dar es salaam, Dar es salaam Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑KAMILA (video calls)
Location: 📍Dar es salaam, Dar es salaam Town
<a href="https://bongohook.com/members/kamila-video-calls1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('139', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/20/1650182069-bpfull.jpg', {caption: `Name: 🍑Kate (video call & massage & Dildo)
Location: 📍Dar es salaam, Dar es salaam Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Kate (video call & massage & Dildo)
Location: 📍Dar es salaam, Dar es salaam Town
<a href="https://bongohook.com/members/kate-video-call-massage-dildo1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('140', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/21/1650176621-bpfull.jpg', {caption: `Name: 🍑KATOTO BLACK
Location: 📍Dar es salaam, Kigamboni`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑KATOTO BLACK
Location: 📍Dar es salaam, Kigamboni
<a href="https://bongohook.com/members/katoto-black1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('141', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/32/1650176621-bpfull.jpg', {caption: `Name: 🍑Ketty
Location: 📍Dodoma, Dodoma Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Ketty
Location: 📍Dodoma, Dodoma Town
<a href="https://bongohook.com/members/ketty1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('142', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/87/1650176621-bpfull.jpg', {caption: `Name: 🍑Kyla
Location: 📍Dar es salaam, Dar es salaam Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Kyla
Location: 📍Dar es salaam, Dar es salaam Town
<a href="https://bongohook.com/members/kyla1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('143', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/91/1650176621-bpfull.jpg', {caption: `Name: 🍑Ladiva
Location: 📍Mwanza, Mwanza Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Ladiva
Location: 📍Mwanza, Mwanza Town
<a href="https://bongohook.com/members/ladiva1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('144', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/72/1650176621-bpfull.jpg', {caption: `Name: 🍑Lady in Black
Location: 📍Moshi, Moshi Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Lady in Black
Location: 📍Moshi, Moshi Town
<a href="https://bongohook.com/members/lady-in-black1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('145', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/54/1650176621-bpfull.jpg', {caption: `Name: 🍑Laycious
Location: 📍Morogoro, Morogoro Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Laycious
Location: 📍Morogoro, Morogoro Town
<a href="https://bongohook.com/members/laycious1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('146', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/40/1650176622-bpfull.jpg', {caption: `Name: 🍑MAINA
Location: 📍Arusha, Arusha Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑MAINA
Location: 📍Arusha, Arusha Town
<a href="https://bongohook.com/members/maina1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('147', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/10/1650176622-bpfull.jpg', {caption: `Name: 🍑MARIE
Location: 📍Dar es salaam, Masaki`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑MARIE
Location: 📍Dar es salaam, Masaki
<a href="https://bongohook.com/members/marie1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('148', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/75/1650176622-bpfull.jpg', {caption: `Name: 🍑Mary
Location: 📍Arusha, Arusha Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Mary
Location: 📍Arusha, Arusha Town
<a href="https://bongohook.com/members/mary1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('149', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/50/1650176622-bpfull.jpg', {caption: `Name: 🍑Meghan
Location: 📍Dar es salaam, Kinondoni`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Meghan
Location: 📍Dar es salaam, Kinondoni
<a href="https://bongohook.com/members/meghan1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('150', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/55/1650176622-bpfull.jpg', {caption: `Name: 🍑Michelle NEW
Location: 📍Dar es salaam, Dar es salaam Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Michelle NEW
Location: 📍Dar es salaam, Dar es salaam Town
<a href="https://bongohook.com/members/michelle-new1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('151', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/88/1650176622-bpfull.jpg', {caption: `Name: 🍑Mimah
Location: 📍Arusha, Arusha Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Mimah
Location: 📍Arusha, Arusha Town
<a href="https://bongohook.com/members/mimah1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('152', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/6/1650176623-bpfull.jpg', {caption: `Name: 🍑MIMI (Nudes at a Price)
Location: 📍Zanzibar, Zanzibar Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑MIMI (Nudes at a Price)
Location: 📍Zanzibar, Zanzibar Town
<a href="https://bongohook.com/members/mimi-nudes-at-a-price1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('153', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/81/1650176623-bpfull.jpg', {caption: `Name: 🍑Miss Angie
Location: 📍Dar es salaam, Mikocheni`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Miss Angie
Location: 📍Dar es salaam, Mikocheni
<a href="https://bongohook.com/members/miss-angie1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('154', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/46/1650176623-bpfull.jpg', {caption: `Name: 🍑miss given
Location: 📍Mbeya, Mbeya district`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑miss given
Location: 📍Mbeya, Mbeya district
<a href="https://bongohook.com/members/miss-given1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('155', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/16/1650176623-bpfull.jpg', {caption: `Name: 🍑Miss Khloe
Location: 📍Moshi, Moshi Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Miss Khloe
Location: 📍Moshi, Moshi Town
<a href="https://bongohook.com/members/miss-khloe1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('156', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/17/1650176623-bpfull.jpg', {caption: `Name: 🍑MISS LISSA
Location: 📍Dar es salaam, Dar es salaam Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑MISS LISSA
Location: 📍Dar es salaam, Dar es salaam Town
<a href="https://bongohook.com/members/miss-lissa1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('157', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/29/1650176623-bpfull.jpg', {caption: `Name: 🍑momo
Location: 📍Dar es salaam, Mikocheni`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑momo
Location: 📍Dar es salaam, Mikocheni
<a href="https://bongohook.com/members/momo1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('158', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/13/1650176624-bpfull.jpg', {caption: `Name: 🍑MUNIRA
Location: 📍Dar es salaam, Ubungo`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑MUNIRA
Location: 📍Dar es salaam, Ubungo
<a href="https://bongohook.com/members/munira1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('159', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/45/1650176624-bpfull.jpg', {caption: `Name: 🍑NAIMA DANSTAN
Location: 📍Dar es salaam, Ilala`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑NAIMA DANSTAN
Location: 📍Dar es salaam, Ilala
<a href="https://bongohook.com/members/naima-danstan1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('160', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/65/1650176624-bpfull.jpg', {caption: `Name: 🍑NANDE
Location: 📍Dar es salaam, Kinondoni`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑NANDE
Location: 📍Dar es salaam, Kinondoni
<a href="https://bongohook.com/members/nande1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('161', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/35/1650176624-bpfull.jpg', {caption: `Name: 🍑naomi
Location: 📍Zanzibar, Zanzibar Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑naomi
Location: 📍Zanzibar, Zanzibar Town
<a href="https://bongohook.com/members/naomi1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('162', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/64/1650176624-bpfull.jpg', {caption: `Name: 🍑naomy
Location: 📍Dar es salaam, Msasani`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑naomy
Location: 📍Dar es salaam, Msasani
<a href="https://bongohook.com/members/naomy1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('163', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/61/1650176624-bpfull.jpg', {caption: `Name: 🍑NINA SIWEMA
Location: 📍Mwanza, Mwanza Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑NINA SIWEMA
Location: 📍Mwanza, Mwanza Town
<a href="https://bongohook.com/members/nina-siwema1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('164', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/58/1650176625-bpfull.jpg', {caption: `Name: 🍑Nino
Location: 📍Dar es salaam, Kariakoo`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Nino
Location: 📍Dar es salaam, Kariakoo
<a href="https://bongohook.com/members/nino1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('165', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/19/1650176625-bpfull.jpg', {caption: `Name: 🍑NORLEEN
Location: 📍Dodoma, Dodoma Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑NORLEEN
Location: 📍Dodoma, Dodoma Town
<a href="https://bongohook.com/members/norleen1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('166', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/30/1650176625-bpfull.jpg', {caption: `Name: 🍑Presilla
Location: 📍Dodoma, Dodoma Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Presilla
Location: 📍Dodoma, Dodoma Town
<a href="https://bongohook.com/members/presilla1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('167', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/12/1650176625-bpfull.jpg', {caption: `Name: 🍑queen vanny
Location: 📍Mwanza, Mwanza Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑queen vanny
Location: 📍Mwanza, Mwanza Town
<a href="https://bongohook.com/members/queen-vanny1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('168', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/77/1650176625-bpfull.jpg', {caption: `Name: 🍑RACHEL MTAMU
Location: 📍Dar es salaam, kimara`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑RACHEL MTAMU
Location: 📍Dar es salaam, kimara
<a href="https://bongohook.com/members/rachel-mtamu1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('169', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/85/1650182195-bpfull.jpg', {caption: `Name: 🍑Rahma (Video & Nudes)
Location: 📍Dar es salaam, Dar es salaam Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Rahma (Video & Nudes)
Location: 📍Dar es salaam, Dar es salaam Town
<a href="https://bongohook.com/members/rahma-video-nudes1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('170', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/66/1650176625-bpfull.jpg', {caption: `Name: 🍑REEN
Location: 📍Arusha, Arusha Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑REEN
Location: 📍Arusha, Arusha Town
<a href="https://bongohook.com/members/reen1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('171', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/84/1650176626-bpfull.jpg', {caption: `Name: 🍑Riyah
Location: 📍Dar es salaam, Dar es salaam Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Riyah
Location: 📍Dar es salaam, Dar es salaam Town
<a href="https://bongohook.com/members/riyah1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('172', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/44/1650176626-bpfull.jpg', {caption: `Name: 🍑ROSEYWAY MOBILE MASSAGE
Location: 📍Dar es salaam, Dar es salaam Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑ROSEYWAY MOBILE MASSAGE
Location: 📍Dar es salaam, Dar es salaam Town
<a href="https://bongohook.com/members/roseyway-mobile-massage1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('173', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/63/1650176626-bpfull.jpg', {caption: `Name: 🍑Roshy
Location: 📍Dar es salaam, mbezi beach`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Roshy
Location: 📍Dar es salaam, mbezi beach
<a href="https://bongohook.com/members/roshy1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('174', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/86/1650176626-bpfull.jpg', {caption: `Name: 🍑RUTA ANGIE
Location: 📍Dar es salaam, Sinza`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑RUTA ANGIE
Location: 📍Dar es salaam, Sinza
<a href="https://bongohook.com/members/ruta-angie1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('175', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/52/1650176626-bpfull.jpg', {caption: `Name: 🍑Sabrina (Video calls)
Location: 📍Arusha, Arusha Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Sabrina (Video calls)
Location: 📍Arusha, Arusha Town
<a href="https://bongohook.com/members/sabrina-video-calls1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('176', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/43/1650182455-bpfull.jpg', {caption: `Name: 🍑SAMIAH
Location: 📍Dar es salaam, mwenge`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑SAMIAH
Location: 📍Dar es salaam, mwenge
<a href="https://bongohook.com/members/samiah1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('177', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/34/1650176627-bpfull.jpg', {caption: `Name: 🍑santina
Location: 📍Dodoma, Dodoma Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑santina
Location: 📍Dodoma, Dodoma Town
<a href="https://bongohook.com/members/santina1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('178', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/68/1650176627-bpfull.jpg', {caption: `Name: 🍑SARAA
Location: 📍Mwanza, Mwanza Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑SARAA
Location: 📍Mwanza, Mwanza Town
<a href="https://bongohook.com/members/saraa1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('179', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/49/1650176627-bpfull.jpg', {caption: `Name: 🍑Scarlet
Location: 📍Dar es salaam, Dar es salaam Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Scarlet
Location: 📍Dar es salaam, Dar es salaam Town
<a href="https://bongohook.com/members/scarlet1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('180', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/60/1650176628-bpfull.jpg', {caption: `Name: 🍑seno
Location: 📍Dar es salaam, tabata`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑seno
Location: 📍Dar es salaam, tabata
<a href="https://bongohook.com/members/seno1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('181', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/25/1650176628-bpfull.jpg', {caption: `Name: 🍑SESHEYE
Location: 📍Dodoma, Dodoma Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑SESHEYE
Location: 📍Dodoma, Dodoma Town
<a href="https://bongohook.com/members/sesheye1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('182', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/38/1650176628-bpfull.jpg', {caption: `Name: 🍑Shammy
Location: 📍Dodoma, Area C`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Shammy
Location: 📍Dodoma, Area C
<a href="https://bongohook.com/members/shammy1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('183', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/89/1650176628-bpfull.jpg', {caption: `Name: 🍑SHINE
Location: 📍Morogoro, Morogoro Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑SHINE
Location: 📍Morogoro, Morogoro Town
<a href="https://bongohook.com/members/shine1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('184', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/11/1650176628-bpfull.jpg', {caption: `Name: 🍑Tara
Location: 📍,`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Tara
Location: 📍,
<a href="https://bongohook.com/members/tara1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('185', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/24/1650176628-bpfull.jpg', {caption: `Name: 🍑Tayana
Location: 📍Arusha, Arusha Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Tayana
Location: 📍Arusha, Arusha Town
<a href="https://bongohook.com/members/tayana1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('186', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/70/1650176629-bpfull.jpg', {caption: `Name: 🍑Teresa { video call }
Location: 📍Dar es salaam, Dar es salaam Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Teresa { video call }
Location: 📍Dar es salaam, Dar es salaam Town
<a href="https://bongohook.com/members/teresa-video-call-1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('187', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/42/1650176629-bpfull.jpg', {caption: `Name: 🍑Tyra
Location: 📍Dar es salaam, Oysterbay`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Tyra
Location: 📍Dar es salaam, Oysterbay
<a href="https://bongohook.com/members/tyra1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('188', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/14/1650176629-bpfull.jpg', {caption: `Name: 🍑winny (Professional Massage)
Location: 📍Dodoma, Dodoma Town`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑winny (Professional Massage)
Location: 📍Dodoma, Dodoma Town
<a href="https://bongohook.com/members/winny-professional-massage1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})
bot.command('189', (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id,'https://bongohook.com/wp-content/uploads/avatars/83/1650176629-bpfull.jpg', {caption: `Name: 🍑Zayan
Location: 📍Dar es salaam, Mikocheni`});
    bot.telegram.sendMessage(ctx.chat.id, `Name: 🍑Zayan
Location: 📍Dar es salaam, Mikocheni
<a href="https://bongohook.com/members/zayan1/">Phone Number/WhatsApp</a>`, {parse_mode: 'html'});
})


//#endregion


//SLEEP FUNCTION
// function sleep(milliseconds) {
//     const start = Date.now();
//     while (Date.now() - start < milliseconds);
//   }

bot.launch();
