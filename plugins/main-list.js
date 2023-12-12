let handler = async (m, { conn, usedPrefix, command}) => {
      let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
      if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`;
    
      let pp = './Assets/Gurulogo.jpg'
      let more = String.fromCharCode(8206);
      let readMore = more.repeat(850); 
    
      let lkr;
      switch (command) {
        case 'list':
lkr = "💝𝗤𝗨𝜩𝜩𝗡│𝜟𝗟𝗘𝗫𝗔│𝗠𝗗💝\n\n" +
"*❶*" + usedPrefix + "💞*𝘉𝘖𝘛𝘔𝘌𝘕𝘜*💞\n\n" +
"*❷*" + usedPrefix + "🌟*𝘖𝘞𝘕𝘌𝘙𝘔𝘌𝘕𝘜*🌟\n\n" +
"*❸*" + usedPrefix + "🛡️*𝘎𝘙𝘖𝘜𝘗𝘔𝘌𝘕𝘜*🛡️\n\n" +
"*❹*" + usedPrefix + "📥*𝘋𝘓𝘔𝘌𝘕𝘜*📥\n\n" +
"*❺*" + usedPrefix + "🛠️*𝘚𝘛𝘐𝘊𝘒𝘌𝘙𝘔𝘌𝘕𝘜*🛠️\n\n" +

break;

          
        
        

        case 'botmenu':
          lkr = `
    ┄──•••───╮
     *𝘉𝘖𝘛 𝘔𝘌𝘕𝘜*  
   ╰───•••──┄      
  ┏━━━━━━━━━━
   ⎪➚ _${usedPrefix}ping_
   ⎪➚ _${usedPrefix}uptime_
   ⎪➚ _${usedPrefix}script_
   ⎪➚ _${usedPrefix}runtime_
  ┗━━━━━━━━━━`; // Your bot menu message here
          break;
        case 'ownermenu':
          lkr = `
      ┄──•••───╮
      *𝘖𝘞𝘕𝘌𝘙 𝘔𝘌𝘕𝘜* 
     ╰───•••──┄      
    ┏━━━━━━━━━
     ⎪➚ _${usedPrefix}banchat_
     ⎪➚ _${usedPrefix}unbanchat_
     ⎪➚ _${usedPrefix}banuser_
     ⎪➚ _${usedPrefix}join_
    ┗━━━━━━━━━`; // 
          break;
          case 'groupmenu':
          lkr = `
     ┄──•••───╮
     *𝘎𝘙𝘖𝘜𝘗 𝘔𝘌𝘕𝘜* 
    ╰───•••──┄      
   ┏━━━━━━━━━━━
    ⎪➚_${usedPrefix}kick *<@tag>*_
    ⎪➚_${usedPrefix}promote *<@tag>*_
    ⎪➚ _${usedPrefix}demote *<@tag>*_
    ⎪➚ _${usedPrefix}infogroup_
    ⎪➚ _${usedPrefix}resetlink_
    ⎪➚ _${usedPrefix}link_
    ⎪➚ _${usedPrefix}setpp *<image>*_
    ⎪➚ _${usedPrefix}setname *<text>*_
    ⎪➚ _${usedPrefix}setdesc *<text>*_
    ⎪➚ _${usedPrefix}warn *<@tag>*_
    ⎪➚ _${usedPrefix}unwarn *<@tag>*_
    ⎪➚ _${usedPrefix}group *<open/close>*_
   ┗━━━━━━━━━━━`; // 
          break;
          case 'downloadermenu':
            case 'dlmenu' :
          lkr = `
    ┄──•••───╮
     *𝘋𝘓 𝘔𝘌𝘕𝘜* 
   ╰───•••──┄      
  ┏━━━━━━━━━━━
   ⎪➚_${usedPrefix}play_
   ⎪➚_${usedPrefix}song_
   ⎪➚ _${usedPrefix}yta <link>_
   ⎪➚ _${usedPrefix}ytv <link>_
   ⎪➚ _${usedPrefix}ytmp3 <link>_
   ⎪➚ _${usedPrefix}ytmp4 <link>_
   ⎪➚ _${usedPrefix}gimage_
   ⎪➚ _${usedPrefix}pinterest_
   ⎪➚ _${usedPrefix}mediafire <link>_
   ⎪➚ _${usedPrefix}gdrive <link>_
   ⎪➚ _${usedPrefix}gitclone <link>_
   ⎪➚ _${usedPrefix}twitter <link>_
   ⎪➚ _${usedPrefix}tiktok <link>_
   ⎪➚ _${usedPrefix}tiktokstalk_
   ⎪➚ _${usedPrefix}instagram <link>_
   ⎪➚ _${usedPrefix}spotify_
   ⎪➚ _${usedPrefix}facebook <link>_
  ┗━━━━━━━━━━━━`; // 
          break;
          case 'stickermenu':
          lkr = `
      ┄──•••───╮
      *𝘚𝘛𝘐𝘊𝘒𝘌𝘙 𝘔𝘌𝘕𝘜*
     ╰───•••──┄      
    ┏━━━━━━━━━━━
     ⎪➚ _${usedPrefix}sticker_
     ⎪➚ _${usedPrefix}take_
     ⎪➚ _${usedPrefix}scircle_
     ⎪➚ _${usedPrefix}smaker_
     ⎪➚ _${usedPrefix}sremovebg_
     ⎪➚ _${usedPrefix}getsticker_
     ⎪➚ _${usedPrefix}emojimix_
     ⎪➚ _${usedPrefix}toimg_
     ⎪➚ _${usedPrefix}tovid_
     ⎪➚ _${usedPrefix}ttp_
     ⎪➚ _${usedPrefix}telesticker_
     ⎪➚ _${usedPrefix}attp_
     ⎪➚ _${usedPrefix}attp2_
     ⎪➚ _${usedPrefix}attp3_
    ┗━━━━━━━━━━━━`; 
          break;
          case 'nsfwmenu':
          lkr = `*coming soon*💝𝗤𝗨𝜩𝜩𝗡│𝜟𝗟𝗘𝗫𝗔│𝗠𝗗💝${usedPrefix}nsfw`; // 
          break;
          case 'logomenu':
          lkr = `*coming soon*${usedPrefix}💝𝗤𝗨𝜩𝜩𝗡│𝜟𝗟𝗘𝗫𝗔│𝗠𝗗💝`; // 
          break;
        default:
          lkr = `💝𝗤𝗨𝜩𝜩𝗡│𝜟𝗟𝗘𝗫𝗔│𝗠𝗗💝 ${usedPrefix}┌─❊
│ *💝𝗤𝗨𝜩𝜩𝗡│𝜟𝗟𝗘𝗫𝗔│𝗠𝗗💝*
└┬❊ 
┌┤❊  *Thanks for all*
│└────────────❊     
│©2023 *QUEEN ALEXA MD*
│
│*𝘉𝘰𝘵 𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉y Ashen Induwara*
└────────────────❊

 *💝𝘞𝘏𝘈𝘛𝘚𝘈𝘈𝘗𝘗 𝘎𝘙𝘖𝘜𝘗 :* *https://chat.whatsapp.com/C4mcek6i7aE2P1iDcJpmoo*`;
      }
    
      conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] });
    
      let done = '💝';
      m.react(done);
    };
    
    handler.help = ['list', 'botmenu', 'ownermenu', 'groupmenu', 'dlmenu', 'downloadermenu', 'economymenu', 'funmenu', 'gamemenu', 'stickermenu', 'nsfwmenu', 'logomenu', 'toolmenu'];
    handler.tags = ['main'];
    handler.command = ['list', 'botmenu', 'ownermenu', 'groupmenu', 'dlmenu', 'downloadermenu', 'economymenu', 'funmenu', 'gamemenu', 'stickermenu', 'toolmenu'];
    
    export default handler
    

