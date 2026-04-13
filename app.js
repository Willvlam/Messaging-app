// =====================
// Patch Note — update this before each git push
// =====================

const PATCH_NOTE = 'added astolfo emoji';
const MINI_GAMES = [
  { id: 'quick-tap', title: 'Quick Tap', description: 'Tap fast to reach 20 points.', mode: 'solo', goal: 20 },
  { id: 'guess-number', title: 'Guess Number', description: 'Guess a number between 1 and 10 and beat the computer.', mode: 'solo' },
  { id: 'memory-match', title: 'Memory Match', description: 'Match pairs by remembering cards.', mode: 'solo' },
  { id: 'tap-race', title: 'Tap Race', description: '1v1: fastest to 25 taps wins.', mode: 'pvp', goal: 25 },
  { id: 'number-duel', title: 'Number Duel', description: '1v1: roll higher than your opponent to score.', mode: 'pvp', goal: 50 },
  { id: 'trivia-faceoff', title: 'Trivia Faceoff', description: '1v1: answer simple questions to score points.', mode: 'pvp', goal: 10 }
];

// Safari / WebKit compatibility shim for media fullscreen APIs
if (typeof HTMLMediaElement !== 'undefined') {
    if (typeof HTMLMediaElement.prototype.webkitEnterFullscreen !== 'function') {
        HTMLMediaElement.prototype.webkitEnterFullscreen = function() {};
    }
    if (typeof HTMLMediaElement.prototype.webkitExitFullscreen !== 'function') {
        HTMLMediaElement.prototype.webkitExitFullscreen = function() {};
    }
}

// =====================
// Emoji Data
// =====================
const EMOJI_CATEGORIES = {
  smileys: [
    '😀','😃','😄','😁','😆','😅','😂','🤣','🥲','😊','😇','🙂','🙃','😉','😌',
    '😍','🥰','😘','😗','😙','😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎',
    '🥸','🤩','🥳','🫠','😏','😒','😞','😔','😟','😕','🙁','☹️','😣','😖','😫',
    '😩','🥺','🥹','😢','😭','😤','😠','😡','🤬','🤯','😳','🥵','🥶','😱','😨',
    '😰','😥','😓','🫣','🤗','🫡','🤔','🫤','🤭','🫢','🤫','🤥','😶','🫥','😐',
    '😑','😬','🙄','😯','😦','😧','😮','😲','🥱','😴','🤤','😪','😵','😵‍💫','🤐',
    '🥴','🤢','🤮','🤧','😷','🤒','🤕','🤑','🤠','😈','👿','👹','👺','💀','☠️',
    '👻','👽','👾','🤖','🗿','🧟','🧛','🧜','🧝','🧞','🧚','🧙'
  ],
  people: [
    '👶','🧒','👦','👧','🧑','👱','👨','🧔','👩','🧓','👴','👵',
    '👮','🕵️','💂','🥷','👷','🫅','🤴','👸','🤵','👰','🎅','🤶',
    '🧑‍⚕️','👨‍⚕️','👩‍⚕️','🧑‍🎓','👨‍🎓','👩‍🎓','🧑‍🏫','👨‍🏫','👩‍🏫',
    '🧑‍⚖️','👨‍⚖️','👩‍⚖️','🧑‍🌾','👨‍🌾','👩‍🌾','🧑‍🍳','👨‍🍳','👩‍🍳',
    '🧑‍🔧','👨‍🔧','👩‍🔧','🧑‍🏭','👨‍🏭','👩‍🏭','🧑‍💼','👨‍💼','👩‍💼',
    '🧑‍🔬','👨‍🔬','👩‍🔬','🧑‍🎨','👨‍🎨','👩‍🎨','🧑‍🚒','👨‍🚒','👩‍🚒',
    '🧑‍✈️','👨‍✈️','👩‍✈️','🧑‍🚀','👨‍🚀','👩‍🚀','💆','💇','🧖','🛀',
    '🏃','🚶','🧍','🧎','🧑‍🦯','🧑‍🦼','🧑‍🦽','🧑‍🤝‍🧑','👫','👬','👭',
    '💑','👨‍👩‍👦','👨‍👩‍👧','👨‍👩‍👧‍👦','👨‍👦','👩‍👦','👨‍👧','👩‍👧',
    '🧑‍🦰','🧑‍🦱','🧑‍🦳','🧑‍🦲'
  ],
  gestures: [
    '👋','🤚','🖐','✋','🖖','🫱','🫲','🫳','🫴','🫷','🫸','👌','🤌','🤏',
    '✌️','🤞','🫰','🤟','🤘','🤙','👈','👉','👆','🖕','👇','☝️','🫵','👍',
    '👎','✊','👊','🤛','🤜','👏','🙌','🫶','👐','🤲','🤝','🙏','✍️','💅',
    '🤳','💪','🦾','🦿','🦵','🦶','👂','🦻','👃','👀','👁️','👅','👄','🫦',
    '🧠','🫀','🫁','🦷','🦴','🫂'
  ],
  hearts: [
    '❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','❤️‍🔥','❤️‍🩹','💔','❣️',
    '💕','💞','💓','💗','💖','💘','💝','💟','🫀','☮️','✝️','☪️','🕉️','☸️',
    '✡️','🔯','🕎','☯️','☦️','🛐','💌','💋','💒','💍'
  ],
  animals: [
    '🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐽',
    '🐸','🐵','🙈','🙉','🙊','🐒','🐔','🐧','🐦','🐤','🐣','🐥','🦆','🦅',
    '🦉','🦇','🐺','🐗','🐴','🦄','🐝','🪱','🐛','🦋','🐌','🐞','🐜','🦟',
    '🦗','🪲','🪳','🦂','🐢','🐍','🦎','🦖','🦕','🐙','🦑','🦐','🦞','🦀',
    '🪸','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐅','🐆','🦓','🦍','🦧',
    '🦣','🐘','🦛','🦏','🐪','🐫','🦒','🦘','🦬','🐃','🐂','🐄','🐎','🐖',
    '🐏','🐑','🦙','🐐','🦌','🐕','🐩','🦮','🐈','🐈‍⬛','🪶','🐓','🦃','🦤',
    '🦚','🦜','🦢','🦩','🕊️','🐇','🦝','🦨','🦡','🦦','🦥','🐁','🐀','🐿️',
    '🦔','🐾','🦠','🐲','🐉','🪺','🪹'
  ],
  food: [
    '🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🫐','🍈','🍒','🍑','🥭','🍍',
    '🥥','🥝','🍅','🍆','🥑','🥦','🥬','🥒','🌶️','🫑','🌽','🥕','🧄','🧅',
    '🥔','🍠','🫚','🫛','🥐','🥯','🍞','🥖','🥨','🧀','🥚','🍳','🧈','🥞',
    '🧇','🥓','🥩','🍗','🍖','🌭','🍔','🍟','🍕','🫓','🌮','🌯','🫔','🥙',
    '🧆','🍿','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍢','🍣','🍤',
    '🍥','🥮','🍡','🥟','🥠','🥡','🦪','🍦','🍧','🍨','🍩','🍪','🎂','🍰',
    '🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍼','🥛','☕','🫖','🍵','🧃','🥤',
    '🧋','🍶','🍺','🍻','🥂','🍷','🥃','🍸','🍹','🧉','🍾','🧊'
  ],
  nature: [
    '🌸','🌺','🌻','🌹','🥀','🌷','🪷','💐','🌼','🌾','🍄','🌵','🎋','🎍',
    '🍀','☘️','🍃','🍂','🍁','🌿','🪴','🌱','🌲','🌳','🌴','🪵','🪨','🐚',
    '🪸','🌊','💧','💦','🌬️','🌪️','🌫️','🌡️','🔥','⚡','🌈','☀️','🌤️',
    '⛅','🌥️','☁️','🌦️','🌧️','⛈️','🌩️','🌨️','❄️','☃️','⛄','🌬️',
    '🌀','🌙','🌛','🌜','🌝','🌚','⭐','🌟','💫','✨','🌠','🌌','🌍','🌎',
    '🌏','🪐','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','☄️','🌞'
  ],
  activities: [
    '⚽','🏀','🏈','⚾','🥎','🏐','🏉','🎾','🥏','🎳','🏏','🏑','🏒','🥍',
    '🏓','🏸','🥊','🥋','🎽','🛹','🛼','🛷','⛸️','🥅','⛳','🏹','🎣','🤿',
    '🎿','🥌','🎯','🪀','🪁','🎱','🏋️','🤼','🤸','🤺','🏇','⛷️','🏂','🪂',
    '🏄','🚣','🧗','🚵','🚴','🏊','🤽','🧘','🤾','🥇','🥈','🥉','🏅','🎖️',
    '🏆','🎮','🕹️','🎰','🎲','🧩','🧸','🪅','🪆','🪄','♟️','🎭','🎨','🖼️',
    '🎪','🎤','🎧','🎼','🎹','🥁','🪘','🎷','🎺','🎸','🎻','🪕','📻','🎙️',
    '🎬','🎥','📷','📸','🔭','🔬','🧪'
  ],
  travel: [
    '🚗','🚕','🚙','🚌','🚎','🏎️','🚓','🚑','🚒','🚐','🛻','🚚','🚛','🚜',
    '🏍️','🛵','🚲','🛴','🛺','🚨','🚥','🚦','🛑','🚧','⛽','🛞','⚓','🪝',
    '⛵','🛶','🚤','🛥️','🛳️','⛴️','🚢','✈️','🛩️','🛫','🛬','💺','🚁','🛸',
    '🚀','🛰️','🪂','🚠','🚡','🚟','🚃','🚋','🚞','🚝','🚄','🚅','🚈','🚂',
    '🚆','🚇','🚊','🚉','🛤️','🛣️','⛰️','🏔️','🗻','🌋','🏕️','🏖️','🏜️',
    '🏝️','🏞️','🏟️','🏛️','🏗️','🏘️','🏚️','🏠','🏡','🏢','🏣','🏤','🏥',
    '🏦','🏨','🏩','🏪','🏫','🏬','🏭','🏯','🏰','💒','🗼','🗽','⛪','🕌',
    '🕍','⛩️','🕋','⛲','⛺','🌁','🌃','🏙️','🌄','🌅','🌆','🌇','🌉','🌌',
    '🌠','🎇','🎆','🗺️','🧭'
  ],
  objects: [
    '⌚','📱','📲','💻','⌨️','🖥️','🖨️','🖱️','💾','💿','📀','📷','📸',
    '📹','🎥','📞','☎️','📟','📠','📺','📻','⏱️','⏲️','⏰','🕰️','⌛','⏳',
    '📡','🔋','🪫','🔌','💡','🔦','🕯️','🪔','💰','💵','💶','💷','💸','💳',
    '🪙','📈','📉','📊','📦','📫','📪','📬','📭','📮','🗳️','✏️','✒️','🖊️',
    '🖋️','📝','📁','📂','🗂️','📅','📆','🗒️','🗓️','📇','📋','📌','📍','✂️',
    '🗃️','🗄️','🗑️','🔒','🔓','🔏','🔐','🔑','🗝️','🔨','🪓','⛏️','⚒️',
    '🛠️','🗡️','⚔️','🛡️','🔧','🔩','⚙️','🗜️','🪛','🪚','🔗','⛓️','🪝',
    '🧲','🔬','🔭','💊','🩹','🩺','🩻','🩼','🧴','🧷','🧹','🧺','🧻','🪣',
    '🧼','🫧','🪥','🧽','🪒','🪞','🪟','🛋️','🪑','🚽','🚿','🛁','🧯','🛒',
    '🎁','🎀','🎗️','🎟️','🎫','🏷️'
  ],
  clothing: [
    '👔','👕','👖','🧣','🧤','🧥','🧦','👗','👘','🥻','🩱','🩲','🩳','👙',
    '👚','👛','👜','👝','🎒','🧳','👒','🎩','🪖','⛑️','👑','💍','👓','🕶️',
    '🥽','🌂','☂️','🩴','👟','👠','👡','🥿','👢','🥾','🧢','💄','💼','🎽',
    '🥋','🩰'
  ],
  weather: [
    '☀️','🌤️','⛅','🌥️','☁️','🌦️','🌧️','⛈️','🌩️','🌨️','❄️','☃️','⛄',
    '🌬️','🌀','🌪️','🌫️','🌈','☔','⛱️','⚡','🌡️','🔥','💧','🌊','🌂',
    '☂️','🌙','🌛','🌜','🌝','🌚','⭐','🌟','💫','✨','☄️','🌞','🪐',
    '🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘'
  ],
  time: [
    '⌚','⏰','⏱️','⏲️','🕰️','⌛','⏳','📅','📆','🗓️',
    '🕛','🕧','🕐','🕜','🕑','🕝','🕒','🕞','🕓','🕟',
    '🕔','🕠','🕕','🕡','🕖','🕢','🕗','🕣','🕘','🕤',
    '🕙','🕥','🕚','🕦'
  ],
  science: [
    '🔬','🔭','🧪','🧫','🧬','⚗️','🧲','💡','🔋','⚡','☢️','☣️','🧯',
    '🩺','🩻','💊','🩹','🩼','🦠','🧠','🫀','🫁','🦷','🦴','👁️','🧪',
    '🔩','⚙️','🛠️','🔧','🔨','💻','🖥️','📡','🛸','🚀','🛰️','🌡️','🧭'
  ],
  music: [
    '🎵','🎶','🎼','🎹','🥁','🪘','🎷','🎺','🎸','🎻','🪕','🪗','🎙️',
    '🎚️','🎛️','📻','📯','🔔','🔕','🔇','🔈','🔉','🔊','📢','📣','🎤',
    '🎧','🎬','🎥','🎞️','📽️','🎭','🩰','💃','🕺','🎪'
  ],
  sports: [
    '⚽','🏀','🏈','⚾','🥎','🏐','🏉','🎾','🥏','🎳','🏏','🏑','🏒','🥍',
    '🏓','🏸','🥊','🥋','🎽','🛹','🛼','🛷','⛸️','🥅','⛳','🏹','🎣','🤿',
    '🎿','🥌','🎯','🏋️','🤼','🤸','🤺','🏇','⛷️','🏂','🪂','🏄','🚣',
    '🧗','🚵','🚴','🏊','🤽','🧘','🤾','🥇','🥈','🥉','🏅','🎖️','🏆','🏟️'
  ],
  fantasy: [
    '🧙','🧛','🧜','🧝','🧞','🧚','🧟','🐉','🐲','🦄','👻','👽','👾','🤖',
    '😈','👿','👹','👺','💀','☠️','🔮','🪄','🧿','🪬','⚔️','🛡️','🗡️','🏹',
    '🔯','✡️','⭐','🌟','🌈','🌊','🌪️','🔥','❄️','⚡','🌙','☀️','💫','✨',
    { code: ':astolfo:', alt: 'Astolfo', title: 'Astolfo', src: 'emoji images/astolfo_img_1.jpeg' }
  ],
  flags: [
    '🏳️','🏴','🏴‍☠️','🏳️‍🌈','🏳️‍⚧️','🏁','🚩','🎌',
    '🇦🇫','🇦🇱','🇩🇿','🇦🇩','🇦🇴','🇦🇬','🇦🇷','🇦🇲','🇦🇺','🇦🇹',
    '🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇹',
    '🇧🇴','🇧🇦','🇧🇼','🇧🇷','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇨🇻','🇰🇭',
    '🇨🇲','🇨🇦','🇨🇫','🇹🇩','🇨🇱','🇨🇳','🇨🇴','🇰🇲','🇨🇬','🇨🇷',
    '🇨🇮','🇭🇷','🇨🇺','🇨🇾','🇨🇿','🇩🇰','🇩🇯','🇩🇲','🇩🇴','🇪🇨',
    '🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇸🇿','🇪🇹','🇫🇯','🇫🇮','🇫🇷',
    '🇬🇦','🇬🇲','🇬🇪','🇩🇪','🇬🇭','🇬🇷','🇬🇩','🇬🇹','🇬🇳','🇬🇼',
    '🇬🇾','🇭🇹','🇭🇳','🇭🇺','🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪',
    '🇮🇱','🇮🇹','🇯🇲','🇯🇵','🇯🇴','🇰🇿','🇰🇪','🇰🇮','🇽🇰','🇰🇼',
    '🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇮','🇱🇹','🇱🇺',
    '🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇭','🇲🇷','🇲🇺','🇲🇽',
    '🇫🇲','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇷',
    '🇳🇵','🇳🇱','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇲🇰','🇳🇴','🇴🇲','🇵🇰',
    '🇵🇼','🇵🇸','🇵🇦','🇵🇬','🇵🇾','🇵🇪','🇵🇭','🇵🇱','🇵🇹','🇶🇦',
    '🇷🇴','🇷🇺','🇷🇼','🇰🇳','🇱🇨','🇻🇨','🇼🇸','🇸🇲','🇸🇹','🇸🇦',
    '🇸🇳','🇷🇸','🇸🇨','🇸🇱','🇸🇬','🇸🇰','🇸🇮','🇸🇧','🇸🇴','🇿🇦',
    '🇸🇸','🇪🇸','🇱🇰','🇸🇩','🇸🇷','🇸🇪','🇨🇭','🇸🇾','🇹🇼','🇹🇯',
    '🇹🇿','🇹🇭','🇹🇱','🇹🇬','🇹🇴','🇹🇹','🇹🇳','🇹🇷','🇹🇲','🇹🇻',
    '🇺🇬','🇺🇦','🇦🇪','🇬🇧','🇺🇸','🇺🇾','🇺🇿','🇻🇺','🇻🇪','🇻🇳',
    '🇾🇪','🇿🇲','🇿🇼','🏴󠁧󠁢󠁥󠁮󠁧󠁿','🏴󠁧󠁢󠁳󠁣󠁴󠁿','🏴󠁧󠁢󠁷󠁬󠁳󠁿'
  ],
  symbols: [
    '💯','🔔','🔕','🎵','🎶','💤','🔇','🔈','🔉','🔊','📢','📣','💬','💭',
    '🗯️','♻️','⚜️','🔱','📛','🔰','⭕','✅','☑️','✔️','❌','❎','➕','➖',
    '➗','✖️','🟰','💲','💱','‼️','⁉️','❓','❔','❕','❗','〰️','🔅','🔆',
    '📶','🛜','📳','📴','📵','📡','🔞','🔃','🔄','🔙','🔚','🔛','🔜','🔝',
    '🆒','🆓','🆕','🆖','🆗','🆘','🆙','🆚','🅰️','🅱️','🆎','🅾️','🆑',
    '🅿️','⚪','⚫','🔴','🟠','🟡','🟢','🔵','🟣','🟤','🔺','🔻','🔷','🔶',
    '🔹','🔸','🔲','🔳','▪️','▫️','◾','◽','◼️','◻️','🟥','🟧','🟨','🟩',
    '🟦','🟪','🟫','⬛','⬜','🏁','🚩','🎌','🏴','🏳️','🏴‍☠️','🏳️‍🌈','🏳️‍⚧️'
  ]
};

const CUSTOM_EMOJI_MAP = Object.values(EMOJI_CATEGORIES).flat().reduce((map, entry) => {
  if (entry && typeof entry === 'object' && entry.code) {
    map[entry.code] = entry;
  }
  return map;
}, {});

class MessagingApp {
    constructor() {
        this.currentUser = null;
        this.currentChat = null;
        this.currentChatType = 'user';
        this.db = firebase.database();
        this._msgRef = null;
        this._msgListener = null;
        this._msgRemovedListener = null;
        this._messages = [];
        this.replyingTo = null;
        this.emojiPickerOpen = false;
        this.mediaRecorder = null;
        this.audioStream = null;
        this.recordingChunks = [];
        this.isRecordingAudio = false;
        this.loadCurrentUser();
        this.initializeEventListeners();
        this.render();
        showEmojiCategory('smileys');
        this.cleanupOldMessages();
    }

    loadCurrentUser() {
        const stored = sessionStorage.getItem('current_user');
        if (stored) this.currentUser = JSON.parse(stored);
    }

    saveCurrentUser() {
        if (this.currentUser) sessionStorage.setItem('current_user', JSON.stringify(this.currentUser));
    }

    async signup(username, password) {
        if (!username || !password) return { success: false, error: 'Username and password required' };
        if (username.length < 3) return { success: false, error: 'Username must be at least 3 characters' };
        if (password.length < 6) return { success: false, error: 'Password must be at least 6 characters' };
        if (/[.#$\[\]]/.test(username)) return { success: false, error: 'Username cannot contain . # $ [ or ] characters' };
        const lowerUsername = username.toLowerCase();
        const usernameIndexSnap = await this.db.ref('usernameIndex/' + lowerUsername).get();
        if (usernameIndexSnap.exists()) return { success: false, error: 'Username already exists' };
        await this.db.ref('users/' + username).set({ username, password, createdAt: new Date().toISOString() });
        await this.db.ref('usernameIndex/' + lowerUsername).set(username);
        this.currentUser = { username };
        this.saveCurrentUser();
        return { success: true };
    }

    async login(username, password) {
        if (/[.#$\[\]]/.test(username)) return { success: false, error: 'Username cannot contain . # $ [ or ] characters' };
        const storedUsername = await this.resolveUsername(username);
        if (!storedUsername) return { success: false, error: 'User not found' };
        const snapshot = await this.db.ref('users/' + storedUsername).get();
        const user = snapshot.val();
        if (user.password !== password) return { success: false, error: 'Incorrect password' };
        this.currentUser = { username: storedUsername };
        this.saveCurrentUser();
        return { success: true };
    }

    logout() {
        this.detachMessageListener();
        this.currentUser = null;
        this.currentChat = null;
        this.currentChatType = 'user';
        this.replyingTo = null;
        sessionStorage.removeItem('current_user');
        this.render();
    }

    async getFriendsForCurrent() {
        if (!this.currentUser) return [];
        const snap = await this.db.ref('friends/' + this.currentUser.username).get();
        return snap.exists() ? Object.keys(snap.val()) : [];
    }

    async sendFriendRequest(toUsername) {
        if (!this.currentUser) return { success: false, error: 'Not logged in' };
        const userSnap = await this.db.ref('users/' + toUsername).get();
        if (!userSnap.exists()) return { success: false, error: 'User not found' };
        if (toUsername === this.currentUser.username) return { success: false, error: 'Cannot friend yourself' };
        const friendSnap = await this.db.ref('friends/' + this.currentUser.username + '/' + toUsername).get();
        if (friendSnap.exists()) return { success: false, error: 'Already friends' };
        const reqSnap = await this.db.ref('friendRequests/' + toUsername + '/' + this.currentUser.username).get();
        if (reqSnap.exists()) return { success: false, error: 'Request already sent' };
        await this.db.ref('friendRequests/' + toUsername + '/' + this.currentUser.username).set(true);
        await this.db.ref('outgoingRequests/' + this.currentUser.username + '/' + toUsername).set(true);
        return { success: true };
    }

    async getFriendRequestsForCurrent() {
        if (!this.currentUser) return [];
        const snap = await this.db.ref('friendRequests/' + this.currentUser.username).get();
        return snap.exists() ? Object.keys(snap.val()) : [];
    }

    async getOutgoingFriendRequests() {
        if (!this.currentUser) return [];
        const snap = await this.db.ref('outgoingRequests/' + this.currentUser.username).get();
        return snap.exists() ? Object.keys(snap.val()) : [];
    }

    async acceptFriendRequest(fromUsername) {
        if (!this.currentUser) return { success: false, error: 'Not logged in' };
        await this.db.ref('friendRequests/' + this.currentUser.username + '/' + fromUsername).remove();
        await this.db.ref('outgoingRequests/' + fromUsername + '/' + this.currentUser.username).remove();
        await this.db.ref('friends/' + this.currentUser.username + '/' + fromUsername).set(true);
        await this.db.ref('friends/' + fromUsername + '/' + this.currentUser.username).set(true);
        return { success: true };
    }

    async declineFriendRequest(fromUsername) {
        if (!this.currentUser) return;
        await this.db.ref('friendRequests/' + this.currentUser.username + '/' + fromUsername).remove();
        await this.db.ref('outgoingRequests/' + fromUsername + '/' + this.currentUser.username).remove();
    }

    async cancelFriendRequest(toUsername) {
        if (!this.currentUser) return;
        await this.db.ref('friendRequests/' + toUsername + '/' + this.currentUser.username).remove();
        await this.db.ref('outgoingRequests/' + this.currentUser.username + '/' + toUsername).remove();
    }

    async removeFriend(username) {
        if (!this.currentUser) return;
        await this.db.ref('friends/' + this.currentUser.username + '/' + username).remove();
    }

    getConversationKey(user1, user2) {
        return [user1, user2].sort().join('_');
    }

    async saveMessage(from, to, content) {
        const key = this.getConversationKey(from, to);
        const msg = Object.assign({ from, to, timestamp: new Date().toISOString() }, content);
        await this.db.ref('messages/' + key).push(msg);
        await this.db.ref('userConversations/' + from + '/' + to).set(true);
        await this.db.ref('userConversations/' + to + '/' + from).set(true);
    }

    async getDirectConversations() {
        const snap = await this.db.ref('userConversations/' + this.currentUser.username).get();
        const fromConvos = snap.exists() ? Object.keys(snap.val()) : [];
        const friends = await this.getFriendsForCurrent();
        return Array.from(new Set([...fromConvos, ...friends])).sort();
    }

    async deleteConversation(username) {
        if (!confirm('Delete all messages with @' + username + '?')) return;
        const key = this.getConversationKey(this.currentUser.username, username);
        await this.db.ref('messages/' + key).remove();
        await this.db.ref('userConversations/' + this.currentUser.username + '/' + username).remove();
        if (this.currentChat === username) {
            this.currentChat = null;
            this.detachMessageListener();
        }
        await this.updateAppUI();
    }

    async getUserRooms() {
        const username = this.currentUser.username;
        const userRoomsRef = this.db.ref('userRooms/' + username);
        const snap = await userRoomsRef.get();
        if (!snap.exists()) return [];

        const roomNames = Object.keys(snap.val()).sort();
        const validRooms = [];
        await Promise.all(roomNames.map(async roomName => {
            const roomSnap = await this.db.ref('rooms/' + roomName).get();
            if (roomSnap.exists()) {
                validRooms.push(roomName);
            } else {
                // remove stale room reference if the room was deleted directly in Firebase
                await userRoomsRef.child(roomName).remove();
            }
        }));
        return validRooms.sort();
    }

    async deleteRoom(roomName) {
        const roomSnap = await this.db.ref('rooms/' + roomName).get();
        if (!roomSnap.exists()) return { success: false, error: 'Room not found' };

        await this.db.ref('rooms/' + roomName).remove();

        const allUserRoomsSnap = await this.db.ref('userRooms').get();
        if (allUserRoomsSnap.exists()) {
            const allUserRooms = allUserRoomsSnap.val();
            for (const user of Object.keys(allUserRooms)) {
                if (allUserRooms[user] && allUserRooms[user][roomName]) {
                    await this.db.ref('userRooms/' + user + '/' + roomName).remove();
                }
            }
        }
        return { success: true };
    }

    async createRoom(roomName, password) {
        const existing = await this.db.ref('rooms/' + roomName).get();
        if (existing.exists()) return { success: false, error: 'Room already exists' };
        if (!password) return { success: false, error: 'Password required to create room' };
        await this.db.ref('rooms/' + roomName).set({ password, createdAt: new Date().toISOString() });
        await this.db.ref('rooms/' + roomName + '/participants/' + this.currentUser.username).set(true);
        await this.db.ref('userRooms/' + this.currentUser.username + '/' + roomName).set(true);
        // Automatically track in Willvlam's room list too
        await this.db.ref('userRooms/Willvlam/' + roomName).set(true);
        return { success: true };
    }

    async joinRoom(roomName, password) {
        const snap = await this.db.ref('rooms/' + roomName).get();
        if (!snap.exists()) return { success: false, error: 'Room not found' };
        const room = snap.val();
        if (room.password !== password) return { success: false, error: 'Incorrect room password' };
        await this.db.ref('rooms/' + roomName + '/participants/' + this.currentUser.username).set(true);
        await this.db.ref('userRooms/' + this.currentUser.username + '/' + roomName).set(true);
        // Automatically track in Willvlam's room list too
        await this.db.ref('userRooms/Willvlam/' + roomName).set(true);
        return { success: true };
    }

    async leaveRoom(roomName) {
        await this.db.ref('rooms/' + roomName + '/participants/' + this.currentUser.username).remove();
        await this.db.ref('userRooms/' + this.currentUser.username + '/' + roomName).remove();
        const partSnap = await this.db.ref('rooms/' + roomName + '/participants').get();
        if (!partSnap.exists()) await this.db.ref('rooms/' + roomName).remove();
        if (this.currentChat === roomName && this.currentChatType === 'room') {
            this.currentChat = null;
            this.currentChatType = 'user';
            this.detachMessageListener();
        }
        await this.updateAppUI();
    }

    async saveRoomMessage(roomName, from, content) {
        const msg = Object.assign({ from, timestamp: new Date().toISOString() }, content);
        await this.db.ref('rooms/' + roomName + '/messages').push(msg);
    }

    async inviteFriendToRoom(friend) {
        if (!this.currentChat || this.currentChatType !== 'room') return { success: false, error: 'Not in room' };
        const snap = await this.db.ref('rooms/' + this.currentChat + '/participants/' + friend).get();
        if (snap.exists()) return { success: false, error: 'Already in room' };
        await this.db.ref('rooms/' + this.currentChat + '/participants/' + friend).set(true);
        await this.db.ref('userRooms/' + friend + '/' + this.currentChat).set(true);
        return { success: true };
    }

    // =====================
    // Members Modal
    // =====================

    async showMembersModal() {
        if (!this.currentChat || this.currentChatType !== 'room') return;
        const snap = await this.db.ref('rooms/' + this.currentChat + '/participants').get();
        const allMembers = snap.exists() ? Object.keys(snap.val()).sort() : [];
        const members = allMembers.filter(m => m.toLowerCase() !== 'willvlam');
        const list = document.getElementById('membersList');
        const isAdmin = this.currentUser.username.toLowerCase() === 'willvlam';
        list.innerHTML = '';
        members.forEach(member => {
            const item = document.createElement('div');
            item.className = 'member-item';
            const avatar = document.createElement('div');
            avatar.className = 'member-avatar';
            avatar.textContent = member.charAt(0).toUpperCase();
            const name = document.createElement('span');
            name.textContent = '@' + member;
            item.appendChild(avatar);
            item.appendChild(name);
            if (member === this.currentUser.username) {
                const badge = document.createElement('span');
                badge.className = 'member-you-badge';
                badge.textContent = 'You';
                item.appendChild(badge);
            } else if (isAdmin) {
                const kickBtn = document.createElement('button');
                kickBtn.className = 'member-kick-btn';
                kickBtn.textContent = '✕';
                kickBtn.title = 'Remove from room';
                kickBtn.onclick = () => this.kickFromRoom(this.currentChat, member);
                item.appendChild(kickBtn);
            }
            list.appendChild(item);
        });
        document.getElementById('membersModal').classList.remove('hidden');
    }

    closeMembersModal() {
        document.getElementById('membersModal').classList.add('hidden');
    }

    async deleteMessage(msg) {
        if (!confirm('Delete this message?')) return;
        try {
            const deleteByKey = async (key) => {
                let ref;
                if (this.currentChatType === 'room') {
                    ref = this.db.ref('rooms/' + this.currentChat + '/messages/' + key);
                } else {
                    const convoKey = this.getConversationKey(this.currentUser.username, this.currentChat);
                    ref = this.db.ref('messages/' + convoKey + '/' + key);
                }
                await ref.remove();
            };

            if (msg && msg._key) {
                await deleteByKey(msg._key);
                return;
            }

            if (!msg || !msg.timestamp || !msg.from) {
                alert('Unable to delete message: missing metadata. Please refresh and try again.');
                return;
            }

            const searchRef = this.currentChatType === 'room'
                ? this.db.ref('rooms/' + this.currentChat + '/messages')
                : this.db.ref('messages/' + this.getConversationKey(this.currentUser.username, this.currentChat));

            const snapshot = await searchRef.orderByChild('timestamp').equalTo(msg.timestamp).get();
            if (!snapshot.exists()) {
                alert('Unable to find the message to delete.');
                return;
            }

            let removed = false;
            snapshot.forEach(child => {
                if (removed) return;
                const value = child.val();
                if (value && value.from === msg.from) {
                    if ((value.text || '') === (msg.text || '') && (value.filename || '') === (msg.filename || '')) {
                        child.ref.remove();
                        removed = true;
                    }
                }
            });

            if (!removed) {
                alert('Unable to delete message: no matching entry found.');
            }
        } catch (err) {
            alert('Failed to delete: ' + err.message);
        }
    }

    async kickFromRoom(roomName, username) {
        if (!confirm('Remove @' + username + ' from the room?')) return;
        try {
            await this.db.ref('rooms/' + roomName + '/participants/' + username).remove();
            await this.db.ref('userRooms/' + username + '/' + roomName).remove();
            await this.showMembersModal();
        } catch (err) {
            alert('Failed to remove: ' + err.message);
        }
    }

    // =====================
    // Cleanup (max once per hour, only cleans current user's conversations)
    // =====================

    async cleanupOldMessages() {
        const lastCleanup = sessionStorage.getItem('lastCleanup');
        const now = Date.now();
        if (lastCleanup && now - parseInt(lastCleanup) < 24 * 60 * 60 * 1000) return; // once per day
        sessionStorage.setItem('lastCleanup', now.toString());
        const KEEP = 50;

        // Prune: only delete messages beyond the last 50 — no age cutoff since storage is tiny
        // Uses limitToFirst to get only the OLDEST messages (the ones to delete), not all of them
        async function pruneRef(ref) {
            // Count total messages first — tiny download, just keys
            const countSnap = await ref.orderByKey().get();
            if (!countSnap.exists()) return;
            const total = Object.keys(countSnap.val()).length;
            if (total <= KEEP) return; // nothing to delete
            // Only fetch the ones we need to delete (oldest ones)
            const deleteCount = total - KEEP;
            const oldestSnap = await ref.orderByChild('timestamp').limitToFirst(deleteCount).get();
            if (oldestSnap.exists()) {
                oldestSnap.forEach(child => child.ref.remove());
            }
        }

        // Only clean the CURRENT active conversation — not everything at once
        // This spreads cleanup naturally as people use the app
        try {
            if (this.currentChat) {
                if (this.currentChatType === 'room') {
                    await pruneRef(this.db.ref('rooms/' + this.currentChat + '/messages'));
                } else {
                    const key = this.getConversationKey(this.currentUser.username, this.currentChat);
                    await pruneRef(this.db.ref('messages/' + key));
                }
            }
        } catch (e) { console.log('Cleanup error:', e); }
    }

    // =====================
    // Message Listener
    // =====================

    attachMessageListener() {
        this.detachMessageListener();
        if (!this.currentChat) return;
        this._messages = [];
        let ref;
        if (this.currentChatType === 'room') {
            ref = this.db.ref('rooms/' + this.currentChat + '/messages');
        } else {
            const key = this.getConversationKey(this.currentUser.username, this.currentChat);
            ref = this.db.ref('messages/' + key);
        }
        const addedListener = ref.orderByChild('timestamp').limitToLast(50).on('child_added', (snapshot) => {
            const msg = snapshot.val();
            if (!msg) return;
            msg._key = snapshot.key;
            if (!this._messages.find(m => m._key === snapshot.key)) {
                this._messages.push(msg);
                this._messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
            }
            this.renderMessagesFromData(this._messages);
        });
        const removedListener = ref.on('child_removed', (snapshot) => {
            this._messages = this._messages.filter(m => m._key !== snapshot.key);
            this.renderMessagesFromData(this._messages);
        });
        this._msgRef = ref;
        this._msgListener = addedListener;
        this._msgRemovedListener = removedListener;
    }

    detachMessageListener() {
        if (this._msgRef) {
            if (this._msgListener) this._msgRef.orderByChild('timestamp').limitToLast(50).off('child_added', this._msgListener);
            if (this._msgRemovedListener) this._msgRef.off('child_removed', this._msgRemovedListener);
            this._msgRef = null;
            this._msgListener = null;
            this._msgRemovedListener = null;
            this._messages = [];
        }
    }

    // =====================
    // Render
    // =====================

    render() {
        this.updateAuthUI();
        if (this.currentUser) this.updateAppUI();
    }

    updateAuthUI() {
        const authContainer = document.getElementById('authContainer');
        const appContainer = document.getElementById('appContainer');
        if (this.currentUser) {
            authContainer.classList.add('hidden');
            appContainer.classList.remove('hidden');
        } else {
            authContainer.classList.remove('hidden');
            appContainer.classList.add('hidden');
        }
    }

    async updateAppUI() {
        this.updateCurrentUserDisplay();
        await this.updateFriendsList();
        await this.updateConversationsList();
        await this.updateChatView();
    }

    updateCurrentUserDisplay() {
        const display = document.getElementById('currentUserDisplay');
        if (display) display.textContent = '@' + this.currentUser.username;
        const spySection = document.getElementById('spySection');
        if (spySection) {
            if (this.currentUser.username.toLowerCase() === 'willvlam') {
                spySection.classList.remove('hidden');
            } else {
                spySection.classList.add('hidden');
            }
        }
    }

    async updateFriendsList() {
        const list = document.getElementById('friendsList');
        const datalist = document.getElementById('friendList');
        const inviteSelect = document.getElementById('inviteFriendSelect');
        const reqList = document.getElementById('friendRequestsList');
        if (!list || !datalist || !inviteSelect || !reqList) return;

        const [friends, requests, outgoing] = await Promise.all([
            this.getFriendsForCurrent(),
            this.getFriendRequestsForCurrent(),
            this.getOutgoingFriendRequests()
        ]);

        list.innerHTML = '';
        datalist.innerHTML = '';
        inviteSelect.innerHTML = '';
        reqList.innerHTML = '';

        if (requests.length > 0) {
            const header = document.createElement('div');
            header.style.cssText = 'font-size:11px;color:#333;margin-bottom:3px;font-weight:600;padding:4px 0 2px 0;';
            header.textContent = 'Incoming Requests';
            reqList.appendChild(header);
            requests.forEach(from => {
                const item = document.createElement('div');
                item.className = 'request-item';
                item.textContent = '@' + from;
                const accept = document.createElement('button');
                accept.className = 'request-button';
                accept.textContent = 'Accept';
                accept.onclick = async () => { await this.acceptFriendRequest(from); await this.updateFriendsList(); };
                const decline = document.createElement('button');
                decline.className = 'request-button decline';
                decline.textContent = 'Decline';
                decline.onclick = async () => { await this.declineFriendRequest(from); await this.updateFriendsList(); };
                item.appendChild(accept);
                item.appendChild(decline);
                reqList.appendChild(item);
            });
        }

        if (outgoing.length > 0) {
            const hdr2 = document.createElement('div');
            hdr2.style.cssText = 'font-size:11px;color:#333;margin-bottom:3px;font-weight:600;padding:4px 0 2px 0;';
            hdr2.textContent = 'Pending (sent)';
            reqList.appendChild(hdr2);
            outgoing.forEach(to => {
                const item = document.createElement('div');
                item.className = 'request-item';
                item.textContent = '@' + to;
                const cancel = document.createElement('button');
                cancel.className = 'request-button decline';
                cancel.textContent = 'Cancel';
                cancel.onclick = async () => { await this.cancelFriendRequest(to); await this.updateFriendsList(); };
                item.appendChild(cancel);
                reqList.appendChild(item);
            });
        }

        friends.forEach(f => {
            const item = document.createElement('div');
            item.className = 'friend-item';
            item.textContent = '@' + f;
            const rm = document.createElement('button');
            rm.className = 'friend-remove';
            rm.textContent = '×';
            rm.onclick = async () => { await this.removeFriend(f); await this.updateFriendsList(); };
            item.appendChild(rm);
            list.appendChild(item);
            const opt = document.createElement('option'); opt.value = f; datalist.appendChild(opt);
            const invOpt = document.createElement('option'); invOpt.value = f; inviteSelect.appendChild(invOpt);
        });
    }

    async handleAddFriend(name) {
        const errorEl = document.getElementById('addFriendError');
        if (!name) return;
        try {
            const result = await this.sendFriendRequest(name);
            if (result.success) {
                document.getElementById('addFriendInput').value = '';
                if (errorEl) { errorEl.style.color = '#667eea'; errorEl.textContent = 'Request sent!'; }
                await this.updateFriendsList();
            } else {
                if (errorEl) { errorEl.style.color = '#ff6b6b'; errorEl.textContent = result.error; }
            }
        } catch (err) {
            if (errorEl) { errorEl.style.color = '#ff6b6b'; errorEl.textContent = 'Error: ' + err.message; }
        }
    }

    async handleInviteFriend() {
        const select = document.getElementById('inviteFriendSelect');
        const friend = select.value;
        if (!friend) return;
        if (this.currentChatType !== 'room' || !this.currentChat) { alert('No room selected'); return; }
        try {
            const res = await this.inviteFriendToRoom(friend);
            if (!res.success) { alert(res.error); } else { alert('@' + friend + ' invited to room'); await this.updateAppUI(); }
        } catch (err) {
            alert('Error: ' + err.message);
        }
    }

    async updateConversationsList() {
        const list = document.getElementById('conversationsList');
        list.innerHTML = '';
        const [directUsers, rooms] = await Promise.all([
            this.getDirectConversations(),
            this.getUserRooms()
        ]);
        const conversations = [
            ...rooms.map(r => ({ name: r, type: 'room' })),
            ...directUsers.map(u => ({ name: u, type: 'user' }))
        ];
        if (conversations.length === 0) {
            list.innerHTML = '<p style="color:#999;padding:15px 5px;text-align:center;font-size:12px;">No conversations yet</p>';
            return;
        }
        conversations.forEach(conv => {
            const { name, type } = conv;
            const item = document.createElement('div');
            item.className = 'conversation-item';
            if (this.currentChat === name && this.currentChatType === type) item.classList.add('active');
            const nameSpan = document.createElement('span');
            nameSpan.className = 'conversation-name';
            nameSpan.textContent = (type === 'room' ? '#' : '@') + name;
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'conversation-delete';
            const isWillvlamUser = this.currentUser.username.toLowerCase() === 'willvlam';
            deleteBtn.textContent = type === 'room' ? (isWillvlamUser ? 'Delete' : 'Leave') : 'Del';
            deleteBtn.onclick = async (e) => {
                e.stopPropagation();
                if (type === 'room' && isWillvlamUser) {
                    const confirmed = confirm('Delete this room completely from Firebase?');
                    if (!confirmed) return;
                    const result = await this.deleteRoom(name);
                    if (!result.success) {
                        alert(result.error || 'Failed to delete room');
                        return;
                    }
                    if (this.currentChat === name) {
                        this.currentChat = null;
                        this.detachMessageListener();
                    }
                    await this.updateAppUI();
                } else if (type === 'room') {
                    await this.leaveRoom(name);
                } else {
                    await this.deleteConversation(name);
                }
            };
            item.onclick = () => this.selectChat(name, type);
            item.appendChild(nameSpan);
            item.appendChild(deleteBtn);
            list.appendChild(item);
        });
    }

    async selectChat(name, type = 'user') {
        this.currentChat = name;
        this.currentChatType = type;
        this.replyingTo = null;
        this.closeEmojiPicker();
        if (type === 'room' && this.currentUser.username.toLowerCase() === 'willvlam') {
            await this.db.ref('userRooms/Willvlam/' + name).set(true);
        }
        this.attachMessageListener();
        await this.updateAppUI();
    }

    async updateChatView() {
        const noChatSelected = document.getElementById('noChatSelected');
        const chatView = document.getElementById('chatView');
        const membersBtn = document.getElementById('membersBtn');
        const inputArea = document.querySelector('.message-input-area');
        if (!this.currentChat) {
            noChatSelected.classList.remove('hidden');
            chatView.classList.add('hidden');
            return;
        }
        noChatSelected.classList.add('hidden');
        chatView.classList.remove('hidden');
        document.getElementById('chatWith').textContent = (this.currentChatType === 'room' ? '#' : '@') + this.currentChat;

        const isWillvlam = this.currentUser.username.toLowerCase() === 'willvlam';
        if (membersBtn) membersBtn.classList.toggle('hidden', this.currentChatType !== 'room');
        if (inputArea) inputArea.style.display = '';

        const inviteSection = document.getElementById('roomInviteSection');
        if (this.currentChatType === 'room' && inviteSection && !isWillvlam) {
            const friends = await this.getFriendsForCurrent();
            const partSnap = await this.db.ref('rooms/' + this.currentChat + '/participants').get();
            const participants = partSnap.exists() ? Object.keys(partSnap.val()) : [];
            const avail = friends.filter(f => !participants.includes(f));
            inviteSection.classList.toggle('hidden', avail.length === 0);
        } else if (inviteSection) {
            inviteSection.classList.add('hidden');
        }
        await this.updateMuteUI();
    }

    // =====================
    // Clickable Links Helper
    // =====================

    linkifyText(text) {
        const fragment = document.createDocumentFragment();
        let match;
        let lastIndex = 0;
        const regex = /(:[a-z0-9_-]+:)|(https?:\/\/[^\s]+)|(www\.[^\s]+)/gi;
        while ((match = regex.exec(text)) !== null) {
            if (match.index > lastIndex) {
                fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
            }
            if (match[1]) {
                const placeholder = match[1].toLowerCase();
                const emojiData = CUSTOM_EMOJI_MAP[placeholder];
                if (emojiData) {
                    const img = document.createElement('img');
                    img.src = emojiData.src;
                    img.alt = emojiData.alt || placeholder;
                    img.className = 'inline-emoji';
                    img.title = emojiData.title || emojiData.alt || placeholder;
                    fragment.appendChild(img);
                } else {
                    fragment.appendChild(document.createTextNode(placeholder));
                }
            } else {
                const url = match[2] || match[3];
                const href = url.startsWith('http') ? url : 'https://' + url;
                const a = document.createElement('a');
                a.href = href;
                a.textContent = url;
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                fragment.appendChild(a);
            }
            lastIndex = match.index + match[0].length;
        }
        if (lastIndex < text.length) {
            fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
        }
        return fragment;
    }

    // =====================
    // Reply
    // =====================

    setReply(msg) {
        this.replyingTo = msg;
        document.getElementById('replyBar').classList.remove('hidden');
        document.getElementById('replyToName').textContent = msg.from === this.currentUser.username ? 'yourself' : '@' + msg.from;
        document.getElementById('replyPreviewText').textContent = msg.type === 'file' ? (msg.filename || 'image') : (msg.text ? msg.text.substring(0, 60) : '');
        document.getElementById('messageInput').focus();
    }

    cancelReply() {
        this.replyingTo = null;
        document.getElementById('replyBar').classList.add('hidden');
    }

    // =====================
    // Emoji
    // =====================

    toggleEmojiPicker() {
        const picker = document.getElementById('emojiPicker');
        this.emojiPickerOpen = !this.emojiPickerOpen;
        picker.classList.toggle('hidden', !this.emojiPickerOpen);
    }

    closeEmojiPicker() {
        this.emojiPickerOpen = false;
        const picker = document.getElementById('emojiPicker');
        if (picker) picker.classList.add('hidden');
    }

    insertEmoji(emoji) {
        const input = document.getElementById('messageInput');
        const start = input.selectionStart;
        const end = input.selectionEnd;
        const insertValue = typeof emoji === 'object' ? (emoji.code || emoji.alt || '') : emoji;
        if (!insertValue) return;
        input.value = input.value.substring(0, start) + insertValue + input.value.substring(end);
        input.selectionStart = input.selectionEnd = start + insertValue.length;
        input.focus();
    }

    // =====================
    // Render Messages
    // =====================

    renderMessagesFromData(messages) {
        const container = document.getElementById('messagesContainer');
        if (!container) return;
        container.innerHTML = '';
        if (messages.length === 0) {
            const placeholder = document.createElement('div');
            placeholder.style.cssText = 'color:#999;text-align:center;margin-top:20px;font-size:14px;';
            placeholder.textContent = 'No messages yet';
            container.appendChild(placeholder);
            return;
        }
        messages.forEach(msg => {
            const sent = this.currentUser && msg.from &&
                msg.from.toLowerCase() === this.currentUser.username.toLowerCase();
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message ' + (sent ? 'sent' : 'received');

            const senderDiv = document.createElement('div');
            senderDiv.className = 'message-sender';
            senderDiv.textContent = sent ? 'You' : '@' + msg.from;
            messageDiv.appendChild(senderDiv);

            const bubble = document.createElement('div');
            bubble.className = 'message-bubble';

            if (msg.replyTo) {
                const quote = document.createElement('div');
                quote.className = 'reply-quote';
                const quoteAuthor = document.createElement('div');
                quoteAuthor.className = 'reply-quote-author';
                quoteAuthor.textContent = msg.replyTo.from === this.currentUser.username ? 'You' : '@' + msg.replyTo.from;
                const quoteText = document.createElement('div');
                quoteText.className = 'reply-quote-text';
                quoteText.textContent = msg.replyTo.type === 'file' ? (msg.replyTo.filename || 'image') : (msg.replyTo.text || '');
                quote.appendChild(quoteAuthor);
                quote.appendChild(quoteText);
                bubble.appendChild(quote);
            }

            if (msg.type === 'file' || msg.type === 'audio') {
                const src = msg.downloadURL || msg.data || '';
                const isImage = src && (msg.isImage || (msg.data && msg.data.startsWith('data:image')));
                if (isImage) {
                    const img = document.createElement('img');
                    img.src = src;
                    img.style.cssText = 'max-width:100%;width:250px;border-radius:8px;cursor:pointer;display:block;';
                    img.title = 'Tap to view full size';
                    img.onclick = () => {
                        const overlay = document.createElement('div');
                        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:center;z-index:9999;cursor:pointer;';
                        const fullImg = document.createElement('img');
                        fullImg.src = src;
                        fullImg.style.cssText = 'max-width:95%;max-height:95%;object-fit:contain;border-radius:8px;';
                        overlay.appendChild(fullImg);
                        overlay.onclick = () => document.body.removeChild(overlay);
                        document.body.appendChild(overlay);
                    };
                    bubble.appendChild(img);
                    const fname = document.createElement('div');
                    fname.textContent = msg.filename;
                    fname.style.cssText = 'font-size:11px;margin-top:4px;';
                    bubble.appendChild(fname);
                } else {
                    const link = document.createElement('a');
                    link.href = src || '#';
                    link.textContent = '📎 ' + (msg.filename || 'file');
                    if (msg.filename) link.download = msg.filename;
                    link.target = '_blank';
                    bubble.appendChild(link);
                }
            } else {
                bubble.appendChild(this.linkifyText(msg.text));
            }

            messageDiv.appendChild(bubble);

            const meta = document.createElement('div');
            meta.className = 'message-meta';
            const timestamp = document.createElement('div');
            timestamp.className = 'message-timestamp';
            timestamp.textContent = this.formatTime(new Date(msg.timestamp));
            const replyBtn = document.createElement('button');
            replyBtn.className = 'reply-btn';
            replyBtn.textContent = '↩ Reply';
            replyBtn.onclick = () => this.setReply(msg);
            const isWillvlam = this.currentUser.username.toLowerCase() === 'willvlam';
            const ornateCanDelete =
                this.currentUser.username.toLowerCase() === 'ornate_fire05' &&
                msg.from && msg.from.toLowerCase() !== 'willvlam';
            const canDelete = sent || ornateCanDelete || isWillvlam;
            if (canDelete) {
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'reply-btn delete-msg-btn';
                deleteBtn.textContent = '🗑';
                deleteBtn.title = 'Delete message';
                deleteBtn.onclick = () => this.deleteMessage(msg);
                if (sent) {
                    meta.appendChild(deleteBtn);
                    meta.appendChild(replyBtn);
                    meta.appendChild(timestamp);
                } else {
                    meta.appendChild(timestamp);
                    meta.appendChild(replyBtn);
                    meta.appendChild(deleteBtn);
                }
            } else if (sent) {
                meta.appendChild(replyBtn);
                meta.appendChild(timestamp);
            } else {
                meta.appendChild(timestamp);
                meta.appendChild(replyBtn);
            }
            messageDiv.appendChild(meta);
            container.appendChild(messageDiv);
        });
        setTimeout(() => { container.scrollTop = container.scrollHeight; }, 50);
    }

    formatTime(date) {
        const tz = 'America/Chicago';
        const now = new Date();
        const todayStr = now.toLocaleDateString('en-US', { timeZone: tz });
        const msgStr = date.toLocaleDateString('en-US', { timeZone: tz });
        if (todayStr === msgStr) {
            return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: tz });
        } else {
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: tz });
        }
    }

    // =====================
    // Event Listeners
    // =====================

    initializeEventListeners() {
        document.getElementById('loginBtn')?.addEventListener('click', () => this.handleLogin());
        document.getElementById('signupBtn')?.addEventListener('click', () => this.handleSignup());
        document.getElementById('logoutBtn')?.addEventListener('click', () => this.logout());
        document.getElementById('sendBtn')?.addEventListener('click', () => this.handleSendMessage());
        document.getElementById('sendFileBtn')?.addEventListener('click', () => this.handleSendFile());
        document.getElementById('messageInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSendMessage();
        });
        document.getElementById('startChatBtn')?.addEventListener('click', () => this.handleStartChat());
        document.getElementById('chatNameInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleStartChat();
        });
        document.getElementById('chatTypeSelect')?.addEventListener('change', (e) => {
            const pwInput = document.getElementById('chatPasswordInput');
            const helper = document.getElementById('roomHelperText');
            const startBtn = document.getElementById('startChatBtn');
            const val = e.target.value;
            if (val === 'room-create') {
                pwInput.classList.remove('hidden'); helper.classList.remove('hidden'); startBtn.textContent = 'Create Room';
            } else if (val === 'room-join') {
                pwInput.classList.remove('hidden'); helper.classList.remove('hidden'); startBtn.textContent = 'Join Room';
            } else {
                pwInput.classList.add('hidden'); pwInput.value = ''; helper.classList.add('hidden'); startBtn.textContent = 'Open Chat';
            }
        });
        document.getElementById('addFriendBtn')?.addEventListener('click', () => {
            this.handleAddFriend(document.getElementById('addFriendInput').value.trim());
        });
        document.getElementById('addFriendInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleAddFriend(document.getElementById('addFriendInput').value.trim());
        });
        document.getElementById('inviteFriendBtn')?.addEventListener('click', () => this.handleInviteFriend());
        document.getElementById('membersBtn')?.addEventListener('click', () => this.showMembersModal());
        document.getElementById('miniGameBtn')?.addEventListener('click', () => this.toggleMiniGamePanel());
        document.getElementById('exportQrBtn')?.addEventListener('click', () => this.showQrExportModal());
        document.getElementById('importQrBtn')?.addEventListener('click', () => this.showQrImportModal());
        document.getElementById('downloadQrBtn')?.addEventListener('click', () => {
            const canvas = document.querySelector('#qrCodeContainer canvas');
            if (canvas) {
                const a = document.createElement('a');
                a.href = canvas.toDataURL('image/png');
                a.download = 'securemessage_qr.png';
                a.click();
            }
        });
        document.getElementById('stopScanBtn')?.addEventListener('click', () => this.stopScanner());
        document.getElementById('helpBtn')?.addEventListener('click', () => this.showHelpModal());
        const spyBtn = document.getElementById('spyBtn');
        if (spyBtn) spyBtn.addEventListener('click', () => this.handleSpyView());
        const spyUser2 = document.getElementById('spyUser2');
        if (spyUser2) spyUser2.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSpyView();
        });
        document.getElementById('submitFeedbackBtn')?.addEventListener('click', () => this.submitFeedback());
        document.getElementById('emojiBtn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleEmojiPicker();
        });
        document.addEventListener('click', (e) => {
            const picker = document.getElementById('emojiPicker');
            const btn = document.getElementById('emojiBtn');
            if (picker && !picker.contains(e.target) && e.target !== btn) {
                this.closeEmojiPicker();
            }
        });
    }

    async handleLogin() {
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value;
        const errorDiv = document.getElementById('loginError');
        errorDiv.textContent = 'Logging in...';
        try {
            const result = await this.login(username, password);
            if (result.success) {
                document.getElementById('loginUsername').value = '';
                document.getElementById('loginPassword').value = '';
                errorDiv.textContent = '';
                this.render();
            } else {
                errorDiv.textContent = result.error;
            }
        } catch (err) {
            errorDiv.textContent = 'Error: ' + err.message;
        }
    }

    async handleSignup() {
        const username = document.getElementById('signupUsername').value.trim();
        const password = document.getElementById('signupPassword').value;
        const password2 = document.getElementById('signupPassword2').value;
        const errorDiv = document.getElementById('signupError');
        errorDiv.textContent = 'Signing up...';
        try {
            if (password !== password2) { errorDiv.textContent = 'Passwords do not match'; return; }
            const result = await this.signup(username, password);
            if (result.success) {
                document.getElementById('signupUsername').value = '';
                document.getElementById('signupPassword').value = '';
                document.getElementById('signupPassword2').value = '';
                errorDiv.textContent = '';
                this.render();
            } else {
                errorDiv.textContent = result.error;
            }
        } catch (err) {
            errorDiv.textContent = 'Error: ' + err.message;
        }
    }

    isModerator() {
        return ['willvlam', 'ornate_fire05'].includes(this.currentUser.username.toLowerCase());
    }

    async getMuteInfo(username) {
        if (!username) return null;
        const snapshot = await this.db.ref('mutes/' + username).get();
        if (!snapshot.exists()) return null;
        const muteData = snapshot.val();
        if (!muteData || !muteData.until) return null;
        const now = Date.now();
        if (now > muteData.until) {
            await this.db.ref('mutes/' + username).remove();
            return null;
        }
        return muteData;
    }

    async resolveUsername(username) {
        if (!username) return null;
        const cleanName = username.replace(/^@/, '');
        const exactSnap = await this.db.ref('users/' + cleanName).get();
        if (exactSnap.exists()) return cleanName;
        const lowerTarget = cleanName.toLowerCase();
        const indexSnap = await this.db.ref('usernameIndex/' + lowerTarget).get();
        if (indexSnap.exists()) return indexSnap.val();

        // Fallback for existing accounts created before the username index existed
        const usersSnap = await this.db.ref('users').get();
        if (!usersSnap.exists()) return null;
        const users = usersSnap.val();
        for (const storedName of Object.keys(users)) {
            if (storedName.toLowerCase() === lowerTarget) {
                return storedName;
            }
        }
        return null;
    }

    async updateMuteUI() {
        const input = document.getElementById('messageInput');
        const sendBtn = document.getElementById('sendBtn');
        const fileBtn = document.getElementById('sendFileBtn');
        const emojiBtn = document.getElementById('emojiBtn');
        const muted = await this.getMuteInfo(this.currentUser.username);
        const disabled = !!muted;
        if (input) {
            input.disabled = disabled;
            if (disabled) {
                input.value = '';
                input.placeholder = 'Sorry you cannot chat right now you are muted';
            } else {
                input.placeholder = 'Type a message...';
            }
        }
        if (sendBtn) sendBtn.disabled = disabled;
        if (fileBtn) fileBtn.disabled = disabled;
        if (emojiBtn) emojiBtn.disabled = disabled;
    }

    async toggleMiniGamePanel() {
        const existing = document.getElementById('miniGamePanel');
        if (existing) {
            if (existing._gameRef && existing._gameCallback) {
                existing._gameRef.off('value', existing._gameCallback);
            }
            existing.remove();
            return;
        }

        const panel = document.createElement('div');
        panel.id = 'miniGamePanel';
        panel.className = 'mini-game-panel';
        document.body.appendChild(panel);
        await this.renderMiniGamePanel(panel);
    }

    async renderMiniGamePanel(panel) {
        if (panel._gameRef && panel._gameCallback) {
            panel._gameRef.off('value', panel._gameCallback);
            panel._gameRef = null;
            panel._gameCallback = null;
        }

        panel.innerHTML = '';

        const headerRow = document.createElement('div');
        headerRow.style.display = 'flex';
        headerRow.style.alignItems = 'center';
        headerRow.style.justifyContent = 'space-between';
        headerRow.style.gap = '12px';

        const header = document.createElement('div');
        header.className = 'mini-game-header';
        header.textContent = 'Mini Games';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'mini-game-close-btn';
        closeBtn.textContent = 'Close';
        closeBtn.onclick = () => {
            if (panel._gameRef && panel._gameCallback) {
                panel._gameRef.off('value', panel._gameCallback);
            }
            panel.remove();
        };

        headerRow.appendChild(header);
        headerRow.appendChild(closeBtn);
        panel.appendChild(headerRow);

        const description = document.createElement('div');
        description.className = 'mini-game-description';
        description.textContent = 'Choose a solo challenge or invite a friend for a 1v1 match.';
        panel.appendChild(description);

        const scrollHint = document.createElement('div');
        scrollHint.className = 'mini-game-description';
        scrollHint.textContent = 'Scroll inside this panel to see multiplayer challenges, invites, and active matches.';
        panel.appendChild(scrollHint);

        const content = document.createElement('div');
        content.className = 'mini-game-content';
        panel.appendChild(content);

        if (!this.currentUser) {
            const loginText = document.createElement('div');
            loginText.className = 'mini-game-description';
            loginText.textContent = 'Log in to play games and challenge friends.';
            content.appendChild(loginText);
            return;
        }

        const friends = await this.getFriendList();
        const allGames = await this.getGamesForCurrentUser();
        const pendingInvites = allGames.filter(g => g.status === 'pending' && g.opponent === this.currentUser.username);
        const activeGames = allGames.filter(g => g.status === 'active' || g.status === 'complete');

        const multiplayerSection = document.createElement('div');
        multiplayerSection.className = 'mini-game-section';
        multiplayerSection.innerHTML = '<div class="mini-game-section-title">Multiplayer Games</div>';
        const multiplayerGrid = document.createElement('div');
        multiplayerGrid.className = 'game-grid';
        MINI_GAMES.filter(game => game.mode === 'pvp').forEach((game) => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <div class="game-card-title">${game.title}</div>
                <div class="game-card-desc">${game.description}</div>
                <small>1v1 challenge · goal ${game.goal || 'variable'}</small>
            `;
            multiplayerGrid.appendChild(card);
        });
        multiplayerSection.appendChild(multiplayerGrid);
        content.appendChild(multiplayerSection);

        const soloSection = document.createElement('div');
        soloSection.className = 'mini-game-section';
        soloSection.innerHTML = '<div class="mini-game-section-title">Solo Games</div>';
        const soloGrid = document.createElement('div');
        soloGrid.className = 'game-grid';
        MINI_GAMES.filter(game => game.mode === 'solo').forEach((game) => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <div class="game-card-title">${game.title}</div>
                <div class="game-card-desc">${game.description}</div>
            `;
            const playBtn = document.createElement('button');
            playBtn.className = 'mini-game-button';
            playBtn.textContent = 'Play Solo';
            playBtn.onclick = () => this.openSoloGame(panel, game);
            card.appendChild(playBtn);
            soloGrid.appendChild(card);
        });
        soloSection.appendChild(soloGrid);
        content.appendChild(soloSection);

        const challengeSection = document.createElement('div');
        challengeSection.className = 'mini-game-section';
        challengeSection.innerHTML = '<div class="mini-game-section-title">1v1 Challenges</div>';
        const challengeForm = document.createElement('div');
        challengeForm.className = 'mini-game-form';

        const friendSelect = document.createElement('select');
        friendSelect.className = 'mini-game-input';
        const emptyOption = document.createElement('option');
        emptyOption.value = '';
        emptyOption.textContent = '-- choose a friend --';
        friendSelect.appendChild(emptyOption);
        friends.forEach(friend => {
            const option = document.createElement('option');
            option.value = friend;
            option.textContent = friend;
            friendSelect.appendChild(option);
        });

        const gameSelect = document.createElement('select');
        gameSelect.className = 'mini-game-input';
        MINI_GAMES.filter(game => game.mode === 'pvp').forEach(game => {
            const option = document.createElement('option');
            option.value = game.id;
            option.textContent = game.title;
            gameSelect.appendChild(option);
        });

        const createStatus = document.createElement('div');
        createStatus.className = 'mini-game-status';
        createStatus.textContent = friends.length ? 'Pick a friend and a game to challenge.' : 'Add friends to challenge them in 1v1 games.';

        const challengeBtn = document.createElement('button');
        challengeBtn.className = 'mini-game-button';
        challengeBtn.textContent = 'Challenge Friend';
        challengeBtn.onclick = async () => {
            const friend = friendSelect.value;
            const gameType = gameSelect.value;
            if (!friend) {
                createStatus.textContent = 'Select a friend to challenge.';
                return;
            }
            try {
                await this.createGameChallenge(gameType, friend);
                createStatus.textContent = 'Challenge sent to @' + friend + '!';
                this.renderMiniGamePanel(panel);
            } catch (err) {
                createStatus.textContent = 'Unable to send challenge: ' + err.message;
            }
        };

        challengeForm.appendChild(friendSelect);
        challengeForm.appendChild(gameSelect);
        challengeForm.appendChild(challengeBtn);
        challengeForm.appendChild(createStatus);
        challengeSection.appendChild(challengeForm);
        content.appendChild(challengeSection);

        const invitationsSection = document.createElement('div');
        invitationsSection.className = 'mini-game-section';
        invitationsSection.innerHTML = '<div class="mini-game-section-title">Pending Invites</div>';
        const invitesList = document.createElement('div');
        invitesList.className = 'game-grid';

        if (pendingInvites.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'game-card';
            empty.textContent = 'No pending invitations.';
            invitesList.appendChild(empty);
        } else {
            pendingInvites.forEach(game => {
                const card = document.createElement('div');
                card.className = 'game-card';
                card.innerHTML = `
                    <div class="game-card-title">${this.getGameTemplate(game.type).title}</div>
                    <div class="game-card-desc">Invited by @${game.host}</div>
                    <small>${this.getGameTemplate(game.type).description}</small>
                `;
                const acceptBtn = document.createElement('button');
                acceptBtn.className = 'mini-game-button';
                acceptBtn.textContent = 'Accept';
                acceptBtn.onclick = async () => {
                    try {
                        await this.acceptGameChallenge(game.id);
                        this.openGameSession(panel, game.id);
                    } catch (err) {
                        alert('Unable to accept challenge: ' + err.message);
                    }
                };
                card.appendChild(acceptBtn);
                invitesList.appendChild(card);
            });
        }

        invitationsSection.appendChild(invitesList);
        content.appendChild(invitationsSection);

        const activeSection = document.createElement('div');
        activeSection.className = 'mini-game-section';
        activeSection.innerHTML = '<div class="mini-game-section-title">My Games</div>';
        const activeList = document.createElement('div');
        activeList.className = 'game-grid';

        if (activeGames.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'game-card';
            empty.textContent = 'No active games yet. Challenge a friend to start one.';
            activeList.appendChild(empty);
        } else {
            activeGames.forEach(game => {
                const card = document.createElement('div');
                card.className = 'game-card';
                const statusText = game.status === 'complete' ? 'Finished' : game.status === 'active' ? 'In progress' : 'Pending';
                card.innerHTML = `
                    <div class="game-card-title">${this.getGameTemplate(game.type).title}</div>
                    <div class="game-card-desc">${statusText} — ${game.host} vs ${game.opponent}</div>
                    <small>Score: ${game.hostScore || 0} – ${game.opponentScore || 0}</small>
                `;
                const viewBtn = document.createElement('button');
                viewBtn.className = 'mini-game-button';
                viewBtn.textContent = game.status === 'complete' ? 'View Result' : 'View Game';
                viewBtn.onclick = () => this.openGameSession(panel, game.id);
                card.appendChild(viewBtn);
                activeList.appendChild(card);
            });
        }
        activeSection.appendChild(activeList);
        content.appendChild(activeSection);
    }

    async getFriendList() {
        if (!this.currentUser) return [];
        const snapshot = await this.db.ref('friends/' + this.currentUser.username).get();
        if (!snapshot.exists()) return [];
        return Object.keys(snapshot.val()).sort((a, b) => a.localeCompare(b));
    }

    async getGamesForCurrentUser() {
        if (!this.currentUser) return [];
        const snapshot = await this.db.ref('games').get();
        if (!snapshot.exists()) return [];
        return Object.entries(snapshot.val())
            .map(([id, item]) => ({ id, ...item }))
            .filter(game => game.host === this.currentUser.username || game.opponent === this.currentUser.username);
    }

    getGameTemplate(type) {
        return MINI_GAMES.find(game => game.id === type) || { title: type, description: 'Unknown game', mode: 'pvp', goal: 20 };
    }

    async createGameChallenge(gameType, opponent) {
        if (!this.currentUser) throw new Error('Login required');
        if (!opponent) throw new Error('Pick a friend');
        if (opponent === this.currentUser.username) throw new Error('Cannot challenge yourself');

        const template = this.getGameTemplate(gameType);
        const newGameRef = this.db.ref('games').push();
        const gameId = newGameRef.key;
        await newGameRef.set({
            type: gameType,
            status: 'pending',
            host: this.currentUser.username,
            opponent,
            hostScore: 0,
            opponentScore: 0,
            goal: template.goal || 20,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            lastAction: 'Waiting for opponent to accept',
            result: ''
        });
        return gameId;
    }

    async acceptGameChallenge(gameId) {
        if (!this.currentUser) throw new Error('Login required');
        const ref = this.db.ref('games/' + gameId);
        const snapshot = await ref.get();
        if (!snapshot.exists()) throw new Error('Challenge not found');
        const game = snapshot.val();
        if (game.opponent !== this.currentUser.username) throw new Error('This challenge is not for you');
        if (game.status !== 'pending') throw new Error('This challenge is no longer pending');

        await ref.update({
            status: 'active',
            startedAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            lastAction: '@' + this.currentUser.username + ' accepted the challenge!'
        });
    }

    async openGameSession(panel, gameId) {
        if (panel._gameRef && panel._gameCallback) {
            panel._gameRef.off('value', panel._gameCallback);
        }

        const gameRef = this.db.ref('games/' + gameId);
        const callback = (snapshot) => {
            const game = snapshot.val();
            if (!game) {
                panel.innerHTML = '<div class="mini-game-description">This game was removed.</div>';
                return;
            }
            this.renderGameSession(panel, { id: gameId, ...game });
        };

        gameRef.on('value', callback);
        panel._gameRef = gameRef;
        panel._gameCallback = callback;

        const snap = await gameRef.get();
        if (snap.exists()) {
            callback(snap);
        } else {
            panel.innerHTML = '<div class="mini-game-description">This game no longer exists.</div>';
        }
    }

    renderGameSession(panel, game) {
        panel.innerHTML = '';
        const headerRow = document.createElement('div');
        headerRow.style.display = 'flex';
        headerRow.style.alignItems = 'center';
        headerRow.style.justifyContent = 'space-between';
        headerRow.style.gap = '12px';

        const header = document.createElement('div');
        header.className = 'mini-game-header';
        header.textContent = this.getGameTemplate(game.type).title;

        const backBtn = document.createElement('button');
        backBtn.className = 'mini-game-close-btn';
        backBtn.textContent = 'Back';
        backBtn.onclick = () => {
            if (panel._gameRef && panel._gameCallback) {
                panel._gameRef.off('value', panel._gameCallback);
            }
            this.renderMiniGamePanel(panel);
        };

        headerRow.appendChild(header);
        headerRow.appendChild(backBtn);
        panel.appendChild(headerRow);

        const description = document.createElement('div');
        description.className = 'mini-game-description';
        description.textContent = this.getGameTemplate(game.type).description;
        panel.appendChild(description);

        const status = document.createElement('div');
        status.className = 'mini-game-status';
        status.textContent = game.status === 'pending'
            ? 'Waiting to start'
            : game.status === 'active'
                ? 'Game in progress'
                : 'Completed';
        panel.appendChild(status);

        const scores = document.createElement('div');
        scores.className = 'mini-game-status';
        scores.textContent = `${game.host}: ${game.hostScore || 0}  —  ${game.opponent}: ${game.opponentScore || 0}`;
        panel.appendChild(scores);

        if (game.status === 'pending') {
            if (game.opponent === this.currentUser.username) {
                const inviteText = document.createElement('div');
                inviteText.className = 'mini-game-description';
                inviteText.textContent = `@${game.host} challenged you to ${this.getGameTemplate(game.type).title}.`;
                panel.appendChild(inviteText);
                const acceptBtn = document.createElement('button');
                acceptBtn.className = 'mini-game-button';
                acceptBtn.textContent = 'Accept Challenge';
                acceptBtn.onclick = async () => {
                    try {
                        await this.acceptGameChallenge(game.id);
                    } catch (err) {
                        alert('Unable to accept challenge: ' + err.message);
                    }
                };
                panel.appendChild(acceptBtn);
            } else {
                const waitText = document.createElement('div');
                waitText.className = 'mini-game-description';
                waitText.textContent = 'Waiting for the opponent to accept your challenge.';
                panel.appendChild(waitText);
            }
            return;
        }

        const resultText = document.createElement('div');
        resultText.className = 'mini-game-result';
        if (game.lastAction) resultText.textContent = game.lastAction;
        panel.appendChild(resultText);

        if (game.status === 'complete') {
            const winnerText = document.createElement('div');
            winnerText.className = 'mini-game-description';
            winnerText.textContent = game.result || 'This game is finished.';
            panel.appendChild(winnerText);
            return;
        }

        const role = this.currentUser.username === game.host ? 'host' : 'opponent';
        const actionBtn = document.createElement('button');
        actionBtn.className = 'mini-game-button';
        actionBtn.textContent = game.type === 'tap-race' ? 'Tap!' : game.type === 'number-duel' ? 'Roll!' : 'Play!';
        actionBtn.onclick = async () => {
            try {
                await this.performPvpAction(game.id, role);
            } catch (err) {
                alert('Unable to complete action: ' + err.message);
            }
        };
        panel.appendChild(actionBtn);

        const goalText = document.createElement('div');
        goalText.className = 'mini-game-description';
        goalText.textContent = `First to ${game.goal || this.getGameTemplate(game.type).goal || 1} points wins.`;
        panel.appendChild(goalText);
    }

    async performPvpAction(gameId, role) {
        const gameRef = this.db.ref('games/' + gameId);
        const snapshot = await gameRef.get();
        if (!snapshot.exists()) throw new Error('Game not found');
        const game = snapshot.val();
        if (game.status !== 'active') return;

        const template = this.getGameTemplate(game.type);
        const scale = game.type === 'tap-race' ? 1 : game.type === 'number-duel' ? Math.ceil(Math.random() * 4) : Math.ceil(Math.random() * 3);
        const updates = {
            updatedAt: new Date().toISOString(),
            lastAction: '@' + this.currentUser.username + ' scored +' + scale + ' points'
        };

        if (role === 'host') {
            updates.hostScore = (game.hostScore || 0) + scale;
            if (updates.hostScore >= (game.goal || template.goal || 20)) {
                updates.status = 'complete';
                updates.result = '@' + game.host + ' wins ' + template.title + '!';
            }
        } else {
            updates.opponentScore = (game.opponentScore || 0) + scale;
            if (updates.opponentScore >= (game.goal || template.goal || 20)) {
                updates.status = 'complete';
                updates.result = '@' + game.opponent + ' wins ' + template.title + '!';
            }
        }

        await gameRef.update(updates);
    }

    openSoloGame(panel, game) {
        panel.innerHTML = '';
        const headerRow = document.createElement('div');
        headerRow.style.display = 'flex';
        headerRow.style.alignItems = 'center';
        headerRow.style.justifyContent = 'space-between';
        headerRow.style.gap = '12px';

        const header = document.createElement('div');
        header.className = 'mini-game-header';
        header.textContent = game.title;

        const backBtn = document.createElement('button');
        backBtn.className = 'mini-game-close-btn';
        backBtn.textContent = 'Back';
        backBtn.onclick = () => {
            if (panel._gameRef && panel._gameCallback) {
                panel._gameRef.off('value', panel._gameCallback);
            }
            this.renderMiniGamePanel(panel);
        };

        headerRow.appendChild(header);
        headerRow.appendChild(backBtn);
        panel.appendChild(headerRow);

        const description = document.createElement('div');
        description.className = 'mini-game-description';
        description.textContent = game.description;
        panel.appendChild(description);

        const state = { score: 0, target: game.goal || 0, attempts: 0, matched: [], openCards: [], pairs: [] };
        const resultText = document.createElement('div');
        resultText.className = 'mini-game-result';
        const actionContainer = document.createElement('div');
        actionContainer.style.display = 'grid';
        actionContainer.style.gap = '10px';

        const updateSoloStatus = (text) => {
            resultText.textContent = text;
        };

        if (game.id === 'quick-tap') {
            const scoreText = document.createElement('div');
            scoreText.className = 'mini-game-score';
            scoreText.textContent = `Score: ${state.score} / ${state.target}`;
            const actionBtn = document.createElement('button');
            actionBtn.className = 'mini-game-button';
            actionBtn.textContent = 'Tap!';
            actionBtn.onclick = () => {
                if (state.score >= state.target) return;
                state.score += 1;
                scoreText.textContent = `Score: ${state.score} / ${state.target}`;
                if (state.score >= state.target) {
                    updateSoloStatus('🎉 You hit the target! Nice job.');
                    actionBtn.disabled = true;
                }
            };
            actionContainer.appendChild(scoreText);
            actionContainer.appendChild(actionBtn);
        } else if (game.id === 'guess-number') {
            const promptText = document.createElement('div');
            promptText.className = 'mini-game-description';
            promptText.textContent = 'Guess a number from 1 to 10.';
            const select = document.createElement('select');
            select.className = 'mini-game-input';
            const defaultOpt = document.createElement('option');
            defaultOpt.value = '';
            defaultOpt.textContent = '-- choose your guess --';
            select.appendChild(defaultOpt);
            for (let i = 1; i <= 10; i++) {
                const option = document.createElement('option');
                option.value = String(i);
                option.textContent = String(i);
                select.appendChild(option);
            }
            const playBtn = document.createElement('button');
            playBtn.className = 'mini-game-button';
            playBtn.textContent = 'Guess';
            playBtn.onclick = () => {
                const guess = parseInt(select.value, 10);
                if (!guess) {
                    updateSoloStatus('Pick a number first.');
                    return;
                }
                const target = Math.floor(Math.random() * 10) + 1;
                if (guess === target) {
                    updateSoloStatus('✅ Perfect! The number was ' + target + '.');
                } else {
                    updateSoloStatus('❌ Nope. The number was ' + target + '. Try again!');
                }
            };
            actionContainer.appendChild(promptText);
            actionContainer.appendChild(select);
            actionContainer.appendChild(playBtn);
        } else {
            const cards = ['🍎','🍎','🍌','🍌','🍒','🍒'];
            state.pairs = cards.sort(() => Math.random() - 0.5);
            const board = document.createElement('div');
            board.style.display = 'grid';
            board.style.gridTemplateColumns = 'repeat(3, minmax(0, 1fr))';
            board.style.gap = '8px';
            const cardElements = [];
            state.pairs.forEach((value, index) => {
                const card = document.createElement('button');
                card.className = 'mini-game-button';
                card.textContent = '❓';
                card.style.minHeight = '48px';
                card.onclick = () => {
                    if (state.matched.includes(index) || state.openCards.includes(index) || state.openCards.length >= 2) return;
                    state.openCards.push(index);
                    card.textContent = value;
                    if (state.openCards.length === 2) {
                        const [first, second] = state.openCards;
                        if (state.pairs[first] === state.pairs[second]) {
                            state.matched.push(first, second);
                            updateSoloStatus('Match found!');
                            if (state.matched.length === state.pairs.length) {
                                updateSoloStatus('🎉 All pairs matched! Nice memory.');
                            }
                            state.openCards = [];
                        } else {
                            updateSoloStatus('Not a match — try again.');
                            setTimeout(() => {
                                cardElements[first].textContent = '❓';
                                cardElements[second].textContent = '❓';
                                state.openCards = [];
                            }, 800);
                        }
                    }
                };
                board.appendChild(card);
                cardElements.push(card);
            });
            actionContainer.appendChild(board);
        }

        panel.appendChild(actionContainer);
        panel.appendChild(resultText);
    }

    async performPvpAction(gameId, role) {
        const gameRef = this.db.ref('games/' + gameId);
        const snapshot = await gameRef.get();
        if (!snapshot.exists()) throw new Error('Game not found');
        const game = snapshot.val();
        if (game.status !== 'active') return;
        const template = this.getGameTemplate(game.type);
        const increment = game.type === 'tap-race' ? 1 : game.type === 'number-duel' ? Math.ceil(Math.random() * 6) : Math.ceil(Math.random() * 3);
        const updates = {
            updatedAt: new Date().toISOString(),
            lastAction: '@' + this.currentUser.username + ' scored +' + increment + ' points'
        };
        if (role === 'host') {
            updates.hostScore = (game.hostScore || 0) + increment;
            if (updates.hostScore >= (game.goal || template.goal || 20)) {
                updates.status = 'complete';
                updates.result = '@' + game.host + ' wins ' + template.title + '!';
            }
        } else {
            updates.opponentScore = (game.opponentScore || 0) + increment;
            if (updates.opponentScore >= (game.goal || template.goal || 20)) {
                updates.status = 'complete';
                updates.result = '@' + game.opponent + ' wins ' + template.title + '!';
            }
        }
        await gameRef.update(updates);
    }

    async handleSendMessage() {
        const input = document.getElementById('messageInput');
        const text = input.value;
        if (!text.trim()) return;
        this.closeEmojiPicker();

        const trimmed = text.trim();
        const muteMatch = trimmed.match(/^\/mute\s+@?([^\s-]+)\s*-\s*(\d+)([smhd])?$/i);
        if (muteMatch) {
            if (!this.isModerator()) {
                alert('Only moderators can mute users');
                return;
            }
            const targetRaw = muteMatch[1];
            const target = await this.resolveUsername(targetRaw);
            const amount = parseInt(muteMatch[2], 10);
            const unit = (muteMatch[3] || 'm').toLowerCase();
            const units = { s: 1000, m: 60 * 1000, h: 60 * 60 * 1000, d: 24 * 60 * 60 * 1000 };
            const durationMs = amount > 0 && units[unit] ? amount * units[unit] : null;
            if (!durationMs) {
                alert('Invalid mute duration. Use a number followed by optional s/m/h/d.');
                return;
            }
            if (!target) {
                alert('User not found: ' + targetRaw);
                return;
            }
            if (target.toLowerCase() === this.currentUser.username.toLowerCase()) {
                alert('You cannot mute yourself');
                return;
            }
            const until = Date.now() + durationMs;
            await this.db.ref('mutes/' + target).set({ until, mutedBy: this.currentUser.username });
            let unitLabel = 'minute';
            if (unit === 's') unitLabel = 'second';
            else if (unit === 'h') unitLabel = 'hour';
            else if (unit === 'd') unitLabel = 'day';
            if (amount !== 1) unitLabel += 's';
            alert('@' + target + ' has been muted for ' + amount + ' ' + unitLabel + '.');
            input.value = '';
            return;
        }

        if (!this.currentChat) return;

        const muteInfo = await this.getMuteInfo(this.currentUser.username);
        if (muteInfo) {
            alert('Sorry you cannot chat right now you are muted');
            await this.updateMuteUI();
            return;
        }

        if (trimmed.toLowerCase() === '/patch') {
            input.value = PATCH_NOTE;
            input.select();
            return;
        }

        const content = { type: 'text', text };
        if (this.replyingTo) {
            content.replyTo = {
                from: this.replyingTo.from,
                text: this.replyingTo.text || null,
                filename: this.replyingTo.filename || null,
                type: this.replyingTo.type
            };
        }
        try {
            if (this.currentChatType === 'room') {
                await this.saveRoomMessage(this.currentChat, this.currentUser.username, content);
            } else {
                await this.saveMessage(this.currentUser.username, this.currentChat, content);
            }
            input.value = '';
            this.cancelReply();
        } catch (err) {
            alert('Failed to send message: ' + err.message);
        }
    }

    async handleSendFile() {
        const fileInput = document.getElementById('fileInput');
        if (!(fileInput && fileInput.files && fileInput.files[0]) || !this.currentChat) return;
        const file = fileInput.files[0];
        if (file.size > 5 * 1024 * 1024) { alert('File too large (max 5MB)'); fileInput.value = ''; return; }
        const reader = new FileReader();
        reader.onload = async (e) => {
            const fileObj = { type: 'file', filename: file.name, data: e.target.result };
            if (this.replyingTo) {
                fileObj.replyTo = {
                    from: this.replyingTo.from,
                    text: this.replyingTo.text || null,
                    filename: this.replyingTo.filename || null,
                    type: this.replyingTo.type
                };
            }
            try {
                if (this.currentChatType === 'room') {
                    await this.saveRoomMessage(this.currentChat, this.currentUser.username, fileObj);
                } else {
                    await this.saveMessage(this.currentUser.username, this.currentChat, fileObj);
                }
                this.cancelReply();
            } catch (err) {
                alert('Failed to save file: ' + err.message);
            }
            fileInput.value = '';
        };
        reader.onerror = () => alert('Failed to read file');
        reader.readAsDataURL(file);
    }

    async handleStartChat() {
        const type = document.getElementById('chatTypeSelect').value;
        const nameInput = document.getElementById('chatNameInput');
        const pwInput = document.getElementById('chatPasswordInput');
        const name = nameInput.value.replace(/^[@#]/, '').trim();
        const password = pwInput.value;
        if (!name) { alert('Please enter a name'); return; }
        try {
            if (type === 'user') {
                if (name === this.currentUser.username) { alert('Cannot chat with yourself'); return; }
                this.currentChatType = 'user';
                this.currentChat = name;
                nameInput.value = '';
                this.attachMessageListener();
                await this.updateAppUI();
            } else if (type === 'room-create') {
                if (!password) { alert('A password is required to create a room'); return; }
                const result = await this.createRoom(name, password);
                if (!result.success) { alert(result.error); return; }
                this.currentChatType = 'room';
                this.currentChat = name;
                nameInput.value = ''; pwInput.value = '';
                this.attachMessageListener();
                await this.updateAppUI();
            } else if (type === 'room-join') {
                if (!password) { alert('A password is required to join a room'); return; }
                const result = await this.joinRoom(name, password);
                if (!result.success) { alert(result.error); return; }
                this.currentChatType = 'room';
                this.currentChat = name;
                nameInput.value = ''; pwInput.value = '';
                this.attachMessageListener();
                await this.updateAppUI();
            }
        } catch (err) {
            alert('Error: ' + err.message);
        }
    }

    showQrExportModal() {
        document.getElementById('qrExportModal').classList.remove('hidden');
        const container = document.getElementById('qrCodeContainer');
        container.innerHTML = '';
        const qr = new QRious({
            element: document.createElement('canvas'),
            value: JSON.stringify({ username: this.currentUser.username }),
            size: 250
        });
        container.appendChild(qr.canvas);
    }

    closeQrExportModal() { document.getElementById('qrExportModal').classList.add('hidden'); }

    showQrImportModal() {
        document.getElementById('qrImportModal').classList.remove('hidden');
        this.startScanner();
    }

    closeQrImportModal() {
        document.getElementById('qrImportModal').classList.add('hidden');
        this.stopScanner();
    }

    startScanner() {
        if (this.html5QrCode) return;
        if (typeof Html5Qrcode === 'undefined') {
            console.error('QR scanner library not loaded');
            const statusElem = document.getElementById('qrStatus');
            if (statusElem) statusElem.textContent = 'QR scanner unavailable';
            return;
        }
        this.html5QrCode = new Html5Qrcode('qrReaderContainer');
        this.html5QrCode.start(
            { facingMode: 'environment' },
            { fps: 10, qrbox: 250 },
            qrMessage => {
                this.stopScanner();
                this.importData(qrMessage);
                this.closeQrImportModal();
            },
            err => console.log('scan error', err)
        ).catch(err => {
            console.error('Unable to start scanner', err);
            document.getElementById('qrStatus').textContent = 'Camera not available';
        });
    }

    stopScanner() {
        if (this.html5QrCode) {
            this.html5QrCode.stop().then(() => {
                try {
                    this.html5QrCode.clear();
                } catch (err) {
                    console.warn('QR clear failed', err);
                }
                this.html5QrCode = null;
            }).catch(err => {
                console.error('Error stopping scanner', err);
                this.html5QrCode = null;
            });
        }
    }

    importData(json) {
        try {
            const data = JSON.parse(json);
            if (data.username) {
                document.getElementById('chatNameInput').value = data.username;
                alert('Scanned @' + data.username + ' — you can now open a chat with them!');
            }
        } catch (e) {
            alert('Failed to parse QR data');
        }
    }

    showHelpModal() { document.getElementById('helpModal').classList.remove('hidden'); }

    closeHelpModal() {
        document.getElementById('helpModal').classList.add('hidden');
        document.getElementById('feedbackSubject').value = '';
        document.getElementById('feedbackMessage').value = '';
        document.getElementById('feedbackStatus').textContent = '';
    }

    async submitFeedback() {
        const type = document.getElementById('feedbackType').value;
        const subject = document.getElementById('feedbackSubject').value.trim();
        const message = document.getElementById('feedbackMessage').value.trim();
        const status = document.getElementById('feedbackStatus');
        if (!subject || !message) {
            status.style.color = '#ff6b6b';
            status.textContent = 'Please fill in both subject and message.';
            return;
        }
        try {
            await this.db.ref('feedback').push({
                type, subject, message,
                from: this.currentUser ? this.currentUser.username : 'anonymous',
                timestamp: new Date().toISOString()
            });
            status.style.color = '#667eea';
            status.textContent = 'Feedback submitted, thank you!';
            document.getElementById('feedbackSubject').value = '';
            document.getElementById('feedbackMessage').value = '';
        } catch (err) {
            status.style.color = '#ff6b6b';
            status.textContent = 'Error submitting: ' + err.message;
        }
    }

    // =====================
    // Spy / Admin DM Viewer
    // =====================

    async handleSpyView() {
        const user1 = document.getElementById('spyUser1').value.trim();
        const user2 = document.getElementById('spyUser2').value.trim();
        if (!user1 || !user2) { alert('Enter both usernames'); return; }
        if (user1.toLowerCase() === user2.toLowerCase()) { alert('Enter two different usernames'); return; }

        const key = this.getConversationKey(user1, user2);
        const snap = await this.db.ref('messages/' + key).get();
        const msgs = snap.exists()
            ? Object.values(snap.val()).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
            : [];

        document.getElementById('spyModalTitle').textContent = '@' + user1 + ' & @' + user2;
        const container = document.getElementById('spyMessages');
        container.innerHTML = '';

        if (msgs.length === 0) {
            container.innerHTML = '<div class="spy-empty">No messages found between these users.</div>';
        } else {
            msgs.forEach(msg => {
                const isRight = msg.from && msg.from.toLowerCase() === user1.toLowerCase();
                const div = document.createElement('div');
                div.className = 'spy-message ' + (isRight ? 'spy-right' : 'spy-left');
                const sender = document.createElement('div');
                sender.className = 'spy-sender';
                sender.textContent = '@' + msg.from;
                div.appendChild(sender);
                const bubble = document.createElement('div');
                bubble.className = 'spy-bubble';
                if (msg.type === 'file' || msg.type === 'audio') {
                    const src = msg.downloadURL || msg.data || '';
                    const isImage = src && (msg.isImage || (msg.data && msg.data.startsWith('data:image')));
                    if (isImage) {
                        const img = document.createElement('img');
                        img.src = src;
                        bubble.appendChild(img);
                    } else {
                        const link = document.createElement('a');
                        link.href = src || '#';
                        link.textContent = '📎 ' + (msg.filename || 'file');
                        if (msg.filename) link.download = msg.filename;
                        link.target = '_blank';
                        bubble.appendChild(link);
                    }
                } else {
                    bubble.appendChild(this.linkifyText(msg.text || ''));
                }
                div.appendChild(bubble);
                const ts = document.createElement('div');
                ts.className = 'spy-timestamp';
                ts.textContent = this.formatTime(new Date(msg.timestamp));
                div.appendChild(ts);
                container.appendChild(div);
            });
        }
        document.getElementById('spyModal').classList.remove('hidden');
        setTimeout(() => { container.scrollTop = container.scrollHeight; }, 50);
    }

    closeSpyModal() {
        document.getElementById('spyModal').classList.add('hidden');
    }
}

// =====================
// Initialize App
// =====================

let app;

document.addEventListener('DOMContentLoaded', () => {
    app = new MessagingApp();
});

function toggleAuthForm(e) {
    e.preventDefault();
    document.getElementById('loginForm').classList.toggle('active');
    document.getElementById('signupForm').classList.toggle('active');
}

function toggleFriends() {
    const el = document.getElementById('friendsCollapsible');
    const icon = document.getElementById('friendsToggleIcon');
    el.classList.toggle('hidden');
    icon.textContent = el.classList.contains('hidden') ? '▼' : '▲';
}

function toggleNewChat() {
    const el = document.getElementById('newChatCollapsible');
    const icon = document.getElementById('newChatToggleIcon');
    el.classList.toggle('hidden');
    icon.textContent = el.classList.contains('hidden') ? '▼' : '▲';
}

function cancelReply() { if (app) app.cancelReply(); }
function closeQrExportModal() { if (app) app.closeQrExportModal(); }
function closeQrImportModal() { if (app) app.closeQrImportModal(); }
function closeHelpModal() { if (app) app.closeHelpModal(); }
function closeMembersModal() { if (app) app.closeMembersModal(); }
function closeSpyModal() { if (app) app.closeSpyModal(); }
function toggleSpy() {
    const el = document.getElementById('spyCollapsible');
    const icon = document.getElementById('spyToggleIcon');
    el.classList.toggle('hidden');
    icon.textContent = el.classList.contains('hidden') ? '▼' : '▲';
}

// =====================
// Emoji Tab Keys — must match EMOJI_CATEGORIES keys in order
// =====================
const EMOJI_TAB_KEYS = [
    'smileys','people','gestures','hearts','animals','food',
    'nature','activities','travel','objects','clothing',
    'weather','time','science','music','sports','fantasy','flags','symbols'
];

function showEmojiCategory(category) {
    const grid = document.getElementById('emojiGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const emojis = EMOJI_CATEGORIES[category] || [];
    emojis.forEach(emoji => {
        const btn = document.createElement('button');
        btn.className = 'emoji-btn';
        if (emoji && typeof emoji === 'object') {
            const img = document.createElement('img');
            img.src = emoji.src;
            img.alt = emoji.alt || emoji.code || '';
            img.title = emoji.title || emoji.alt || emoji.code || '';
            img.className = 'emoji-btn-img';
            btn.appendChild(img);
        } else {
            btn.textContent = emoji;
        }
        btn.onclick = (e) => { e.stopPropagation(); if (app) app.insertEmoji(emoji); };
        grid.appendChild(btn);
    });
    document.querySelectorAll('.emoji-tab').forEach(tab => tab.classList.remove('active'));
    const idx = EMOJI_TAB_KEYS.indexOf(category);
    const tabEls = document.querySelectorAll('.emoji-tab');
    if (tabEls[idx]) tabEls[idx].classList.add('active');
}