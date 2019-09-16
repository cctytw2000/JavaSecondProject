let allAddressText = ""
var CITY = [ "--縣/市--", "臺北市", "基隆市", "新北市", "宜蘭縣", "新竹市", "新竹縣", "桃園縣", "苗栗縣",
		"臺中市", "彰化縣", "南投縣", "嘉義市", "嘉義縣", "雲林縣", "臺南市", "高雄市", "澎湖縣", "屏東縣",
		"臺東縣", "花蓮縣", "金門縣", "連江縣", "南海諸島" ];
var SUB_AREA = [
		[ "--鄉鎮市區--" ],
		[ "--鄉鎮市區--", "中正區100", "大同區103", "中山區104", "松山區105", "大安區106",
				"萬華區108", "信義區110", "士林區111", "北投區112", "內湖區114", "南港區115",
				"文山區116" ],
		[ "--鄉鎮市區--", "仁愛區200", "信義區201", "中正區202", "中山區203", "安樂區204",
				"暖暖區205", "七堵區206" ],
		[ "--鄉鎮市區--", "萬里區207", "金山區208", "板橋區220", "汐止區221", "深坑區222",
				"石碇區223", "瑞芳區224", "平溪區226", "雙溪區227", "貢寮區228", "新店區231",
				"坪林區232", "烏來區233", "永和區234", "中和區235", "土城區236", "三峽區237",
				"樹林區238", "鶯歌區239", "三重區241", "新莊區242", "泰山區243", "林口區244",
				"蘆洲區247", "五股區248", "八里區249", "淡水區251", "三芝區252", "石門區253" ],
		[ "--鄉鎮市區--", "宜蘭市260", "頭城鎮261", "礁溪鄉262", "壯圍鄉263", "員山鄉264",
				"羅東鎮265", "三星鄉266", "大同鄉267", "五結鄉268", "冬山鄉269", "蘇澳鎮270",
				"南澳鄉272", "釣魚台列嶼290" ],
		[ "--鄉鎮市區--", "東區300", "北區300", "香山區300" ],
		[ "--鄉鎮市區--", "竹北市302", "湖口鄉303", "新豐鄉304", "新埔鎮305", "關西鎮306",
				"芎林鄉307", "寶山鄉308", "竹東鎮310", "五峰鄉311", "橫山鄉312", "尖石鄉313",
				"北埔鄉314", "峨嵋鄉315" ],
		[ "--鄉鎮市區--", "中壢市320", "平鎮市324", "龍潭鄉325", "楊梅鎮326", "新屋鄉327",
				"觀音鄉328", "桃園市330", "龜山鄉333", "八德市334", "大溪鎮335", "復興鄉336",
				"大園鄉337", "蘆竹鄉338" ],
		[ "--鄉鎮市區--", "竹南鎮350", "頭份鎮351", "三灣鄉352", "南庄鄉353", "獅潭鄉354",
				"後龍鎮356", "通霄鎮357", "苑裡鎮358", "苗栗市360", "造橋鄉361", "頭屋鄉362",
				"公館鄉363", "大湖鄉364", "泰安鄉365", "銅鑼鄉366", "三義鄉367", "西湖鄉368",
				"卓蘭鎮369" ],
		[ "--鄉鎮市區--", "中區400", "東區401", "南區402", "西區403", "北區404", "北屯區406",
				"西屯區407", "南屯區408", "太平區411", "大里區412", "霧峰區413", "烏日區414",
				"豐原區420", "后里區421", "石岡區422", "東勢區423", "和平區424", "新社區426",
				"潭子區427", "大雅區428", "神岡區429", "大肚區432", "沙鹿區433", "龍井區434",
				"梧棲區435", "清水區436", "大甲區437", "外埔區438", "大安區439" ],
		[ "--鄉鎮市區--", "彰化市500", "芬園鄉502", "花壇鄉503", "秀水鄉504", "鹿港鎮505",
				"福興鄉506", "線西鄉507", "和美鎮508", "伸港鄉509", "員林鎮510", "社頭鄉511",
				"永靖鄉512", "埔心鄉513", "溪湖鎮514", "大村鄉515", "埔鹽鄉516", "田中鎮520",
				"北斗鎮521", "田尾鄉522", "埤頭鄉523", "溪州鄉524", "竹塘鄉525", "二林鎮526",
				"大城鄉527", "芳苑鄉528", "二水鄉530" ],
		[ "--鄉鎮市區--", "南投市540", "中寮鄉541", "草屯鎮542", "國姓鄉544", "埔里鎮545",
				"仁愛鄉546", "名間鄉551", "集集鎮552", "水里鄉553", "魚池鄉555", "信義鄉556",
				"竹山鎮557", "鹿谷鄉558" ],
		[ "--鄉鎮市區--", "嘉義市600" ],
		[ "--鄉鎮市區--", "番路鄉602", "梅山鄉603", "竹崎鄉604", "阿里山605", "中埔鄉606",
				"大埔鄉607", "水上鄉608", "鹿草鄉611", "太保市612", "朴子市613", "東石鄉614",
				"六腳鄉615", "新港鄉616", "民雄鄉621", "大林鎮622", "溪口鄉623", "義竹鄉624",
				"布袋鎮625" ],
		[ "--鄉鎮市區--", "斗南鎮630", "大埤鄉631", "虎尾鎮632", "土庫鎮633", "褒忠鄉634",
				"東勢鄉635", "臺西鄉636", "崙背鄉637", "麥寮鄉638", "斗六市640", "林內鄉643",
				"古坑鄉646", "莿桐鄉647", "西螺鎮648", "二崙鄉649", "北港鎮651", "水林鄉652",
				"口湖鄉653", "四湖鄉654", "元長鄉655" ],
		[ "--鄉鎮市區--", "中西區700", "東區701", "南區702", "北區704", "安平區708", "安南區709",
				"永康區710", "歸仁區711", "新化區712", "左鎮區713", "玉井區714", "楠西區715",
				"南化區716", "仁德區717", "關廟區718", "龍崎區719", "官田區720", "麻豆區721",
				"佳里區722", "西港區723", "七股區724", "將軍區725", "學甲區726", "北門區727",
				"新營區730", "後壁區731", "白河區732", "東山區733", "六甲區734", "下營區735",
				"柳營區736", "鹽水區737", "善化區741", "大內區742", "山上區743", "新市區744",
				"安定區745" ],
		[ "--鄉鎮市區--", "新興區800", "前金區801", "苓雅區802", "鹽埕區803", "鼓山區804",
				"旗津區805", "前鎮區806", "三民區807", "楠梓區811", "小港區812", "左營區813",
				"仁武區814", "大社區815", "岡山區820", "路竹區821", "阿蓮區822", "田寮區823",
				"燕巢區824", "橋頭區825", "梓官區826", "彌陀區827", "永安區828", "湖內區829",
				"鳳山區830", "大寮區831", "林園區832", "鳥松區833", "大樹區840", "旗山區842",
				"美濃區843", "六龜區844", "內門區845", "杉林區846", "甲仙區847", "桃源區848",
				"那瑪夏區849", "茂林區851", "茄萣區852" ],
		[ "--鄉鎮市區--", "馬公市880", "西嶼鄉881", "望安鄉882", "七美鄉883", "白沙鄉884",
				"湖西鄉885" ],
		[ "--鄉鎮市區--", "屏東市900", "三地門901", "霧臺鄉902", "瑪家鄉903", "九如鄉904",
				"里港鄉905", "高樹鄉906", "鹽埔鄉907", "長治鄉908", "麟洛鄉909", "竹田鄉911",
				"內埔鄉912", "萬丹鄉913", "潮州鎮920", "泰武鄉921", "來義鄉922", "萬巒鄉923",
				"崁頂鄉924", "新埤鄉925", "南州鄉926", "林邊鄉927", "東港鎮928", "琉球鄉929",
				"佳冬鄉931", "新園鄉932", "枋寮鄉940", "枋山鄉941", "春日鄉942", "獅子鄉943",
				"車城鄉944", "牡丹鄉945", "恆春鎮946", "滿州鄉947" ],
		[ "--鄉鎮市區--", "臺東市950", "綠島鄉951", "蘭嶼鄉952", "延平鄉953", "卑南鄉954",
				"鹿野鄉955", "關山鎮956", "海端鄉957", "池上鄉958", "東河鄉959", "成功鎮961",
				"長濱鄉962", "太麻里鄉963", "金峰鄉964", "大武鄉965", "達仁鄉966" ],
		[ "--鄉鎮市區--", "花蓮市970", "新城鄉971", "秀林鄉972", "吉安鄉973", "壽豐鄉974",
				"鳳林鎮975", "光復鄉976", "豐濱鄉977", "瑞穗鄉978", "萬榮鄉979", "玉里鎮981",
				"卓溪鄉982", "富里鄉983" ],
		[ "--鄉鎮市區--", "金沙鎮890", "金湖鎮891", "金寧鄉892", "金城鎮893", "烈嶼鄉894",
				"烏坵鄉896" ],
		[ "--鄉鎮市區--", "南竿鄉209", "北竿鄉210", "莒光鄉211", "東引212" ],
		[ "--鄉鎮市區--", "東沙817", "南沙819" ] ];
document.addEventListener("DOMContentLoaded", function() {
	var cityOption = "";
	document.getElementById("city").addEventListener("input", changeTownship);
	document.getElementById("Township").addEventListener("change",
			insertAllAddress);
	for (let i = 0; i < CITY.length; i++) {
		cityOption += "<option id='" + i + "' value='" + CITY[i] + "'>"
				+ CITY[i] + "</option>"
	}
	document.getElementById("city").innerHTML = cityOption;

});
function insertAllAddress() {

	let Township = document.getElementById("Township").value;
	allAddressText += Township ;
	let address=document.getElementById("alladdress");
	address.value = allAddressText
}
function changeTownship() {
	let city = document.getElementById("city").value;
	allAddressText = city +" "
	let address=document.getElementById("alladdress");
	address.value = allAddressText

	var TownshipOption = "";
	document.getElementById("Township").innerHTML = "";
	for (let i = 0; i < SUB_AREA[CITY.indexOf(city)].length; i++) {
		TownshipOption += "<option value='"
				+ SUB_AREA[CITY.indexOf(document.getElementById("city").value)][i]
				+ "'>"
				+ SUB_AREA[CITY.indexOf(document.getElementById("city").value)][i]
				+ "</option>"

	}
	document.getElementById("Township").innerHTML = TownshipOption;
}