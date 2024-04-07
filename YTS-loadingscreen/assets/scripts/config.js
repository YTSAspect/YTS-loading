Config = {}; // Don't touch

Config.ServerIP = "cfx.re/join/pv4b9m";

// Social media buttons on the left side
Config.Socials = [
    {name: "discord", label: "Discord", description: "Klikni ovdje da bi kopirao link discorda!", icon: "assets/media/icons/discord.png", link: "https://discord.gg/GmtHUy9gyU"},
    //{name: "tiktok", label: "TikTok", description: "Ubrzo cete ovdje moci vidjeti i nas TikTok Account", icon: "assets/media/icons/tiktok.png", link: "#"},
    {name: "tebex", label: "Donacije", description: "Zelite podrzati server? Javite se @AspectYTS na Discord!", icon: "assets/media/icons/tebex.png", link: "https://paypal.me/sanchoofficial?country.x=DE&locale.x=de_DE"},
];

Config.HideoverlayKeybind = 112 // JS key code https://keycode.info
Config.CustomBindText = "F1"; // leave as "" if you don't want the bind text in html to be statically set

// Staff list
Config.Staff = [
    {name: "AspectYTS", description: "Vlasnik i skripter", color: "#ff0000", image: "https://cdn.discordapp.com/attachments/1193179070071062538/1209230605414572082/logohighquality.png?ex=65e62ac2&is=65d3b5c2&hm=e98e2e259c090f4c85b0a7aa089e03d3b991631e808d589c8d1199c30c08424b&"},
    {name: "Lazo", description: "Vlasnik", color: "#ff0000", image: "https://cdn.discordapp.com/attachments/1193179070071062538/1209230605414572082/logohighquality.png?ex=65e62ac2&is=65d3b5c2&hm=e98e2e259c090f4c85b0a7aa089e03d3b991631e808d589c8d1199c30c08424b&"},
    {name: "Martin", description: "HeadAdmin", color: "#ff0000", image: "https://cdn.discordapp.com/attachments/1193179070071062538/1209230605414572082/logohighquality.png?ex=65e62ac2&is=65d3b5c2&hm=e98e2e259c090f4c85b0a7aa089e03d3b991631e808d589c8d1199c30c08424b&"}//,
    //{name: "Owner #2", description: "Owner", color: "#ff0000", image: "https://cdn.discordapp.com/attachments/894588279591161926/997613293034287236/unnamed__1_-removebg-preview.png"},


];

// Categories
Config.Categories = [
    {label: "Social Media", default: true},
    {label: "Staff", default: false}
];

// Music
Config.Song = "song.mp3";