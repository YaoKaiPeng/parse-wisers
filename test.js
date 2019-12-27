// var { parseWisers } = require("./index.js");
var { parseWisers } = require("./src/index.js");

var htmlText = `
<html><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<style type="text/css">
<!--
.highlight {
	color: #ff0000;
	background: #ffff00;
	font-style: italic;
	font-weight: bold;
}

A:link, A:visited, A:active, A:hover {
  color:blue;
  text-decoration:none;
}
.square {
  font-family:Arial; 
  font-size:9px;
  position:relative;
  color:#585858;
  top:-3px;
}
//-->
</style>
<title>WiseNews</title>
<style>
h4 {font-size: 10pt; font-family: "Arial, Helvetica, sans-serif"; }
</style>
</head>
<body bgcolor="#FFFFFF">

<font size="3" face="Arial, Helvetica, sans-serif">

</font>
<br><br>
<b>Total number of document(s): 7 </b><br>
<hr height="1" width="100%">
<a name="TOC"></a><table width="100%" style="table-layout:fixed;">
<tbody><tr>
<td width="30px" valign="top"><a href="#body.201904150296340.1" name="toc.201904150296340.1"><font size="2">1. </font></a></td>
<td><font size="3"><a href="#body.201904150296340.1"><font class="highlight">按揭</font>戰蔓延綠置居</a></font><a href="#body.201904150296340.1">&nbsp;

<font size="2" face="Arial">[Oriental Daily News] 2019-04-15	B04	產經		</font>	</a></td>
</tr>
<tr>
<td colspan="2">
<table width="100%"></table>
</td>
</tr>
</tbody></table><table width="100%" style="table-layout:fixed;">
<tbody><tr>
<td width="30px" valign="top"><a href="#body.201904150187376.2" name="toc.201904150187376.2"><font size="2">2. </font></a></td>
<td><font size="3"><a href="#body.201904150187376.2">資金持續流入住宅市場 4 月<font class="highlight">成交</font>料創10 個月新高</a></font><a href="#body.201904150187376.2">&nbsp;

<font size="2" face="Arial">[Hong Kong Commercial Daily] 2019-04-15	A05	產經新聞		</font>	</a></td>
</tr>
<tr>
<td colspan="2">
<table width="100%"></table>
</td>
</tr>
</tbody></table><table width="100%" style="table-layout:fixed;">
<tbody><tr>
<td width="30px" valign="top"><a href="#body.201904150226952.3" name="toc.201904150226952.3"><font size="2">3. </font></a></td>
<td><font size="3"><a href="#body.201904150226952.3">呼吸PLAN轉按成趨勢（下）</a></font><a href="#body.201904150226952.3">&nbsp;

<font size="2" face="Arial">[Ta Kung Pao] 2019-04-15	A13	經濟	談樓說按	王美鳳</font>	</a></td>
</tr>
<tr>
<td colspan="2">
<table width="100%"></table>
</td>
</tr>
</tbody></table><table width="100%" style="table-layout:fixed;">
<tbody><tr>
<td width="30px" valign="top"><a href="#body.201904150201229.4" name="toc.201904150201229.4"><font size="2">4. </font></a></td>
<td><font size="3"><a href="#body.201904150201229.4"><font class="highlight">樓價</font>最貴是好是壞？</a></font><a href="#body.201904150201229.4">&nbsp;

<font size="2" face="Arial">[am730] 2019-04-15	A02	NEWS	C觀點	施永青</font>	</a></td>
</tr>
<tr>
<td colspan="2">
<table width="100%"></table>
</td>
</tr>
</tbody></table><table width="100%" style="table-layout:fixed;">
<tbody><tr>
<td width="30px" valign="top"><a href="#body.201904150283631.5" name="toc.201904150283631.5"><font size="2">5. </font></a></td>
<td><font size="3"><a href="#body.201904150283631.5">比癌症更恐怖的高<font class="highlight">樓價</font>香港病</a></font><a href="#body.201904150283631.5">&nbsp;

<font size="2" face="Arial">[Hong Kong Economic Journal] 2019-04-15	B04	港股分析	堅?離地城	林日彥</font>	</a></td>
</tr>
<tr>
<td colspan="2">
<table width="100%"></table>
</td>
</tr>
</tbody></table><table width="100%" style="table-layout:fixed;">
<tbody><tr>
<td width="30px" valign="top"><a href="#body.201904150283165.6" name="toc.201904150283165.6"><font size="2">6. </font></a></td>
<td><font size="3"><a href="#body.201904150283165.6"><font class="highlight">新盤</font>周末谷貨尾沽75伙</a></font><a href="#body.201904150283165.6">&nbsp;

<font size="2" face="Arial">[Hong Kong Economic Journal] 2019-04-15	A12	地產		</font>	</a></td>
</tr>
<tr>
<td colspan="2">
<table width="100%"></table>
</td>
</tr>
</tbody></table><table width="100%" style="table-layout:fixed;">
<tbody><tr>
<td width="30px" valign="top"><a href="#body.201904150216940.7" name="toc.201904150216940.7"><font size="2">7. </font></a></td>
<td><font size="3"><a href="#body.201904150216940.7">滬深股通<font class="highlight">成交</font>創新高</a></font><a href="#body.201904150216940.7">&nbsp;

<font size="2" face="Arial">[am730] 2019-04-15	A27	FINANCE	法證巴打	黃集恩</font>	</a></td>
</tr>
<tr>
<td colspan="2">
<table width="100%"></table>
</td>
</tr>
</tbody></table>
<a name="body.201904150296340.1"></a>
<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><font size="2"><nowrap>1 .Oriental Daily News | General Property in Hong Kong | Circulation / Reach: 300,000 | 2019-04-15
<br>Newspaper | 
B04 |產經</nowrap>
<br>Word Count: 918 words | Image Size: 
493.9cm<sup>2</sup> (25.2cm x 19.6cm) | Ad-Value: HKD97,302
</font></td>
</tr>
<tr><td><font size="2">Keyword Matched: 中原,按揭,利嘉閣</font></td></tr>
</tbody></table>
			
<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><hr></td>
</tr>
<tr> 
<td><font size="5"><b><font class="highlight">按揭</font>戰蔓延綠置居</b></font>

<br>

</td>
</tr>

<tr><td><br></td></tr>















<tr>
<td>&nbsp;</td>
</tr>
</tbody></table>

<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="5">

<tbody><tr>
<td>
<p>綠置居麗翠苑在三月底進行揀樓，即令<font class="highlight">按揭</font>戰由居屋擴展至綠置居市場，銀行更將兵源分散，藉此同時應付兩條戰線。大型銀行及<font class="highlight">按揭</font>代理職員近日聚集在觀塘揀樓中心，提供媲美居屋<font class="highlight">按揭</font>優惠搶客，包括高額現金回贈等，當中以中國銀行（香港）（02388）態度較進取。</p><p>部分銀行設立臨時<font class="highlight">按揭</font>中心，供綠置居準買家申請。</p><p>香港房屋委員會推出的長沙灣麗翠苑提供2,545個單位，以市價四二折出售，單位售價介乎93萬至306萬元，而且均可敍做九成半<font class="highlight">按揭</font>，並有政府擔保，成為銀行必爭的低風險貸款市場。</p><p>據本報記者實地視察，中銀香港、滙豐銀行及恒生銀行（00011）均於觀塘建生廣場的揀樓中心門外部署<font class="highlight">按揭</font>部職員，待準買家步出中心，旋即上前推銷<font class="highlight">按揭</font>計劃，中銀香港及恒生更於建生廣場內，各自租借場地設立臨時<font class="highlight">按揭</font>中心，供準買家申請<font class="highlight">按揭</font>。</p><p>專家：水頭足亦宜借到盡</p><p>據悉，各大銀行為綠置居提供的<font class="highlight">按揭</font>條款看齊新居屋申請，實際<font class="highlight">按揭</font>利率為2.375厘，現金回贈由貸款額的2.08至2.1%，並額外提供2,000至2,300元現金回贈及家居保險等。中銀香港發言人回覆本報查詢時指，該行給予綠置居買家的現金回贈為貸款額2.1%加2,000元，客戶於六月底前申請可獲額外500元禮券。</p><p>市民敍做綠置居<font class="highlight">按揭</font>與私人物業有不少相異之處。<font class="highlight">利嘉閣</font><font class="highlight">按揭</font>代理董事總經理黃詠欣指，綠置居<font class="highlight">按揭</font>貸款的還款期可長達二十五年，且最多能借九成半，但僅能選擇最優惠利率（P）掛鈎<font class="highlight">按揭</font>計劃。</p><p>她又提醒，綠置居貸款轉按及加按設有限制，須先獲得房屋署同意方可進行，建議買家即使手頭資金充裕，敍做<font class="highlight">按揭</font>時宜「借到盡」，並將多出資金存入銀行贈送的高息存款戶口，使資金運用更加靈活。</p><p><font class="highlight">中原</font><font class="highlight">按揭</font>經紀董事總經理王美鳳稱，銀行審批綠置居貸款會較寬鬆，但仍有機會查閱申請人的信貸紀錄，借款人應作自我測試，每月還款佔入息比例低於四成或以下，在理財而言屬較理想的供款比例。</p><p>中銀擬增人手及開分行</p><p>該公司數據顯示，今年首季包括居屋、夾屋及租者置其屋的資助房屋<font class="highlight">按揭</font>登記宗數，按年跌近三成至1,979宗，期內恒生續以33%的市場佔有率稱冠，滙豐及中銀香港則緊隨其後。</p><p>事實上，今年來<font class="highlight">按揭</font>市場競爭激烈，銀行亦擬增兵。消息透露，中銀香港計劃增設分行網絡的<font class="highlight">按揭</font>中心，由現時只有7間，目標增至看齊擁有11間<font class="highlight">按揭</font>中心的滙豐，意味最少增設4間，以每間平均兩名<font class="highlight">按揭</font>職員計，計劃增兵約10人。</p><p>
<br><br>
</p></td>
</tr>


</tbody></table>



<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">



<tbody><tr>
<td><font size="2">DOCUMENT ID: 201904150296340 </font></td>
</tr>
<tr><td><a href="#toc.201904150296340.1">BACK TO MAIN MENU</a></td></tr>
</tbody></table>

<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><hr></td>
</tr>
<tr>
<td><font size="1" face="Arial, Helvetica, sans-serif">
Source: Wisers electronic service. This content, the trademarks and logos belong to Wisers, the relevant organizations or copyright owners. All rights reserved. Any content provided by user is the responsibility of the user and Wisers is not responsible for such content, copyright clearance or any damage/loss suffered as a result. 
</font></td>
</tr>
<tr>
<td><hr></td>
</tr>
</tbody></table>
<table width="100%" border="0">
<tbody><tr>
<td align="center"><h4>---------- 1 ----------</h4></td>
</tr>
</tbody></table>



<a name="body.201904150187376.2"></a>
<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><font size="2"><nowrap>2 .Hong Kong Commercial Daily | General Property in Hong Kong | Circulation / Reach: 35,000 | 2019-04-15
<br>Newspaper | 
A05 |產經新聞</nowrap>
<br>Word Count: 880 words | Image Size: 
465.7cm<sup>2</sup> (23.4cm x 19.9cm) | Ad-Value: HKD30,128
</font></td>
</tr>
<tr><td><font size="2">Keyword Matched: 發展商,買賣合約,物業,中原地產,車位,新盤,香港置業,成交</font></td></tr>
</tbody></table>
			
<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><hr></td>
</tr>
<tr> 
<td><font size="5"><b>資金持續流入住宅市場 4 月<font class="highlight">成交</font>料創10 個月新高</b></font>

<br>

</td>
</tr>

<tr><td><br></td></tr>















<tr>
<td>&nbsp;</td>
</tr>
</tbody></table>

<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="5">

<tbody><tr>
<td>
<p>【香港商報訊】記者鄭珊珊報道：樓市交投持續暢旺，<font class="highlight">中原地產</font>研究部高級聯席董事黃良昇預料，4 月整體<font class="highlight">買賣合約</font>登記(包括住宅、<font class="highlight">車位</font>及工商舖<font class="highlight">物業</font>)<font class="highlight">成交</font>宗數，有望繼2018 年6 月份9252 宗後，迫近9000 宗高水平，創10 個月新高；金額亦可望繼2018 年7 月份993.7 億元後，迫750 億元水平，創9 個月新高。個別藍籌屋苑呎價已率先升穿年度高位，熱門上車屋苑沙田第一城最近一宗<font class="highlight">成交</font>，實用呎價達20775 元，屬同類單位今年新高。</p><p>  截至4 月11 日，本月一手私人住宅暫錄得876 宗<font class="highlight">成交</font>，總值92.2 億元。<font class="highlight">中原地產</font>預測整月登記1800 宗及185 億元，將較3 月的1439 宗及150.6 億元，分別上升25.1%及22.8%，主因<font class="highlight">發展商</font>積極推售<font class="highlight">新盤</font>及貨尾單位。</p><p>  紅磡啟岸熱賣</p><p>  目前錄得最多登記的<font class="highlight">新盤</font>暫為紅磡啟岸，有196 宗登記，總值11.6 億元。排名第二為大埔雲滙1 期，暫錄109 宗總值11.6 億元。第三為將軍澳日出康城6 期LP6，暫錄80 宗總值8.1 億元。</p><p>  至於4 月樓宇整體<font class="highlight">買賣合約</font>登記(包括住宅、<font class="highlight">車位</font>及工商舖<font class="highlight">物業</font>)暫錄3321 宗，總值276.14 億元。全月登記預測達9000 宗及750 億元，較3 月份6428 宗及528.3 億元上升40%及42%。</p><p>  <font class="highlight">香港置業</font>行政總裁表示，近期樓市反彈上升，普遍準買家對後市抱正面心態，入市意欲高漲，反映剛需強勁，相信資金仍會持續流入樓市。他續說，與此同時，<font class="highlight">發展商</font>加大去貨力度，多個<font class="highlight">新盤</font>部署短期內推售，料次季一手市場將會是市場焦點所在，而二手價量緩升的勢頭亦會持續。</p><p>  第一城呎價重上2 萬</p><p>  黃良昇又指出，二手大型屋苑4 月份整體<font class="highlight">成交</font>暫錄1608 宗，涉資138.7 億元。預測到月底，登記宗數會達到4200 宗，金額達到360 億元，將較3 月的3469 宗及292 億元上升21.1%及23.3%。宗數創下2018 年6 月份後新高，當時<font class="highlight">成交</font>宗數為4324 宗，金額則創2018 年7 月362 億元後9 個月新高。</p><p>  據<font class="highlight">中原地產</font>沙田第一城分區營業經理侯惠良透露，最近<font class="highlight">成交</font>的沙田第一城單位為44 座高層B 單位，兩房間隔，建築面積395 平方呎，實用面積284 平方呎，以590 萬元易手。原業主於2014 年以363 萬元購入單位，持貨5 年獲利227 萬元，單位升值約62.5%。</p><p>  沙田第一城不僅在呎價方面表現突出，就連<font class="highlight">成交</font>宗數都打入本月前4 名，暫錄12 宗。本月其他表現活躍的大型屋苑還包括美孚新邨暫錄21 宗買賣登記、嘉湖山莊暫錄19 宗、太古城暫錄16 宗。</p><p>  ####</p><p>  新界熱門屋苑沙田第一城近日<font class="highlight">成交</font>價再次衝上2萬元大關。</p><p>  
<br><br>
</p></td>
</tr>


</tbody></table>



<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">



<tbody><tr>
<td><font size="2">DOCUMENT ID: 201904150187376 </font></td>
</tr>
<tr><td><a href="#toc.201904150187376.2">BACK TO MAIN MENU</a></td></tr>
</tbody></table>

<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><hr></td>
</tr>
<tr>
<td><font size="1" face="Arial, Helvetica, sans-serif">
Source: Wisers electronic service. This content, the trademarks and logos belong to Wisers, the relevant organizations or copyright owners. All rights reserved. Any content provided by user is the responsibility of the user and Wisers is not responsible for such content, copyright clearance or any damage/loss suffered as a result. 
</font></td>
</tr>
<tr>
<td><hr></td>
</tr>
</tbody></table>
<table width="100%" border="0">
<tbody><tr>
<td align="center"><h4>---------- 2 ----------</h4></td>
</tr>
</tbody></table>



<a name="body.201904150226952.3"></a>
<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><font size="2"><nowrap>3 .Ta Kung Pao | General Property in Hong Kong | Circulation / Reach: 100,000 | 2019-04-15
<br>Newspaper | 
A13 |經濟 |談樓說按 |By 王美鳳</nowrap>
<br>Word Count: 712 words | Image Size: 
179.2cm<sup>2</sup> (11.2cm x 16.0cm) | Ad-Value: HKD19,486
</font></td>
</tr>
<tr><td><font size="2">Keyword Matched: 中原,發展商,物業,新盤,按揭,樓價</font></td></tr>
</tbody></table>
			
<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><hr></td>
</tr>
<tr> 
<td><font size="5"><b>呼吸PLAN轉按成趨勢（下）</b></font>

<br>

</td>
</tr>

<tr><td><br></td></tr>















<tr>
<td>&nbsp;</td>
</tr>
</tbody></table>

<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="5">

<tbody><tr>
<td>
<p>上期提及<font class="highlight">發展商</font><font class="highlight">新盤</font>一按普遍設有初期低息優惠，但兩三年後息率將跳升，用家需準備轉按可行性。若果由<font class="highlight">發展商</font>八成一按轉按至銀行承造六成<font class="highlight">按揭</font>，原則上業主須補回<font class="highlight">樓價</font>兩成之首期差額方可轉按，但由於過去三年至今，<font class="highlight">樓價</font>大致處於升軌，因應<font class="highlight">物業</font>估值已累升達三至四成半，業主轉按時可承造之<font class="highlight">按揭</font>金額已提高，加上期內業主已償還部分<font class="highlight">按揭</font>本金，降低了轉按時所需補回之首期差額，甚至有部分<font class="highlight">新盤</font>一按用家無需補付首期差額便可成功轉按。</p><p>以一個<font class="highlight">新盤</font>作為例子，買家於2016年4月入市購買一個作價650萬元之單位，由於銀行<font class="highlight">按揭</font>僅高達六成，為了減輕兩成首期負擔，買家決定採用<font class="highlight">發展商</font>提供之八成一按即供上會，<font class="highlight">按揭</font>金額高達520萬元。有關八成一按之首兩年息率為2.3%，兩年期後息率跳升至P水平（P現為5.125%），目前<font class="highlight">按揭</font>餘額降至87萬元，有意轉按以免捱貴息。由於有關單位之<font class="highlight">樓價</font>已上升四成，估值已升至910萬元，以銀行<font class="highlight">按揭</font>成數上限計算，申請轉按可獲批之<font class="highlight">按揭</font>金額高達500萬元（<font class="highlight">按揭</font>成數為55%）。換句話說，隨着<font class="highlight">樓價</font>上升，買家無需補付首期差額便可將<font class="highlight">發展商</font>一按轉至銀行低息<font class="highlight">按揭</font>。成功轉按銀行後，買家之供樓按息降至2.375%，每月供款減少24%，利息支出減少約54%。</p><p>對於正在使用<font class="highlight">發展商</font>高成數一按或二按之供樓人士，當兩至三年之低息優惠期完結後，可根據銀行最新<font class="highlight">物業</font>估值計算可承造的<font class="highlight">按揭</font>金額上限。當<font class="highlight">樓價</font>累積一定升幅以及<font class="highlight">按揭</font>餘額逐步降低，轉按至銀行所需支付的首期差額便可減少，故此供樓人士可衡量自身個案是否具條件轉按。二按用家若資金較充裕，亦可選擇清還二按貸款而保留銀行一按。</p><p>留意銀行審批<font class="highlight">按揭</font>準則與<font class="highlight">發展商</font>不同，銀行需根據現行樓按措施評估轉按申請人的還款能力，並在通過壓力測試後，方可批出<font class="highlight">按揭</font>貸款。</p><p>（文接3月25日A13版）</p><p><font class="highlight">中原</font><font class="highlight">按揭</font>經紀董事總經理王美鳳</p><p>
<br><br>
</p></td>
</tr>


</tbody></table>



<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">



<tbody><tr>
<td><font size="2">DOCUMENT ID: 201904150226952 </font></td>
</tr>
<tr><td><a href="#toc.201904150226952.3">BACK TO MAIN MENU</a></td></tr>
</tbody></table>

<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><hr></td>
</tr>
<tr>
<td><font size="1" face="Arial, Helvetica, sans-serif">
Source: Wisers electronic service. This content, the trademarks and logos belong to Wisers, the relevant organizations or copyright owners. All rights reserved. Any content provided by user is the responsibility of the user and Wisers is not responsible for such content, copyright clearance or any damage/loss suffered as a result. 
</font></td>
</tr>
<tr>
<td><hr></td>
</tr>
</tbody></table>
<table width="100%" border="0">
<tbody><tr>
<td align="center"><h4>---------- 3 ----------</h4></td>
</tr>
</tbody></table>



<a name="body.201904150201229.4"></a>
<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><font size="2"><nowrap>4 .am730 | General Property in Hong Kong | Circulation / Reach: 400,085 | 2019-04-15
<br>Newspaper | 
A02 |NEWS |C觀點 |By 施永青</nowrap>
<br>Word Count: 1116 words | Image Size: 
231.2cm<sup>2</sup> (27.2cm x 8.5cm) | Ad-Value: HKD75,773
</font></td>
</tr>
<tr><td><font size="2">Keyword Matched: 買樓,店舖,樓價</font></td></tr>
</tbody></table>
			
<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><hr></td>
</tr>
<tr> 
<td><font size="5"><b><font class="highlight">樓價</font>最貴是好是壞？</b></font>

<br>

</td>
</tr>

<tr><td><br></td></tr>















<tr>
<td>&nbsp;</td>
</tr>
</tbody></table>

<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="5">

<tbody><tr>
<td>
<p>香港<font class="highlight">樓價</font>又被列為全球最貴。有學者擔心，這會影響香港的競爭力。這不但會阻嚇海外公司來港發展，亦會妨礙本地的初創公司的成長空間。而我則覺得，<font class="highlight">樓價</font>貴只會影響民生，對商業的影響不會太大。</p><p>本來，若純從居住的角度來考慮，買不起樓，可以選擇租樓。<font class="highlight">樓價</font>會受到投資前景的影響而升得脫離實際，但租金卻只能反映租客目前的負擔能力，不可能完全脫離實際。所以<font class="highlight">樓價</font>高的地方，租金回報率都會相對低一點。只是香港人大都偏好<font class="highlight">買樓</font>，而不想租樓，貪其可以升值，可以得到租樓不會提供的投資回報。這才導致香港人會把買不起樓也視作民生問題。在別處地方，<font class="highlight">樓價</font>過高只會被視作投資問題。在其他國際大城市中，在當地工作的人多會租樓，而樓宇的擁有者卻是另外的一批投資者。</p><p>香港有很強的投資吸引力，又是一個容許資金自由出入的自由港，政府要限制外來資金投資香港並不容易。近年政府試圖寓禁於徵，大幅提高了多種印花稅，但這些「辣招」卻收效甚微。我建議政府乾脆把市場切割成兩個部分：一邊是純粹照顧本地人生活所需的民生市場，不容許資金(包括本地資金)進來扭曲<font class="highlight">樓價</font>，令<font class="highlight">樓價</font>只能反映本地人的購買力。另一邊是全面開放的自由市場，由資金擁有者自行決定<font class="highlight">樓價</font>的升跌。</p><p>在這樣的分割下，政府就可以讓每一個香港人，一生中都有一次機會買一個首次上車盤，只要政府放棄徵收如自由市場一樣高的地價便可以了。至於那些想住得比上車盤的環境好一些的香港人，那就得憑自己的實力，與國際投資者一起在自由市場作競爭。</p><p>解決了民生問題之後，商業樓宇市場政府應盡量少管。一般而言，做生意的人大多選擇租樓，而不是<font class="highlight">買樓</font>，外國公司尤其如是。香港的寫字樓與<font class="highlight">店舖</font>的租金之所以會升得這麼高，可謂是商界自己搶高的。租金可不是業主想訂多高就可以訂多高的。香港的商業樓宇的租金水平能升到全球最高的水平，正好反映香港的營商環境比全球其他地方都好，否則跨國企業為何不選擇去其他租金便宜的地方做生意？</p><p>從這個角度來看，一個城市是不用擔心商業樓宇的租金太高的。若是企業沒法在當地賺到錢，他們是負擔不起這麼高的租金的，屆時，租金自然會下調至商人負擔得起的水平。</p><p>近期，香港的<font class="highlight">店舖</font>租金就接連大幅回落，原因並非業主大發慈悲，而是因為內地大力打貪，以及零售業備受互聯網電商影響所致。可見業主一樣要接受市場的制約。亞洲金融風暴之後，香港寫字樓的租金就試過連跌多年，但這對香港商界來說卻並沒有帶來多大的好處。因為租金回落的時候，往往就是生意難做的時候。因此，成熟的生意人都不想看到一個城市的整體租金回落。</p><p>香港的<font class="highlight">樓價</font>與租金又一次被列作全球最貴，這對大多數人來說，都不是一件好事；但從另一個角度來看，這亦可反映投資者對香港仍有偏好，而商人亦願意為在香港做生意而付出溢價。這顯示香港有其價值。</p><p>
<br><br>
</p></td>
</tr>


</tbody></table>



<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">



<tbody><tr>
<td><font size="2">DOCUMENT ID: 201904150201229 </font></td>
</tr>
<tr><td><a href="#toc.201904150201229.4">BACK TO MAIN MENU</a></td></tr>
</tbody></table>

<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><hr></td>
</tr>
<tr>
<td><font size="1" face="Arial, Helvetica, sans-serif">
Source: Wisers electronic service. This content, the trademarks and logos belong to Wisers, the relevant organizations or copyright owners. All rights reserved. Any content provided by user is the responsibility of the user and Wisers is not responsible for such content, copyright clearance or any damage/loss suffered as a result. 
</font></td>
</tr>
<tr>
<td><hr></td>
</tr>
</tbody></table>
<table width="100%" border="0">
<tbody><tr>
<td align="center"><h4>---------- 4 ----------</h4></td>
</tr>
</tbody></table>



<a name="body.201904150283631.5"></a>
<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><font size="2"><nowrap>5 .Hong Kong Economic Journal | General Property in Hong Kong | Circulation / Reach: 83,000 | 2019-04-15
<br>Newspaper | 
B04 |港股分析 |堅?離地城 |By 林日彥</nowrap>
<br>Word Count: 1064 words | Image Size: 
412.0cm<sup>2</sup> (32.7cm x 12.6cm) | Ad-Value: HKD55,359
</font></td>
</tr>
<tr><td><font size="2">Keyword Matched: 買樓,樓價</font></td></tr>
</tbody></table>
			
<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><hr></td>
</tr>
<tr> 
<td><font size="5"><b>比癌症更恐怖的高<font class="highlight">樓價</font>香港病</b></font>

<br>

</td>
</tr>

<tr><td><br></td></tr>















<tr>
<td>&nbsp;</td>
</tr>
</tbody></table>

<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="5">

<tbody><tr>
<td>
<p>世邦魏理仕上周五發表的《全球生活報告：城市指南》，指本港私人住宅<font class="highlight">樓價</font>繼續貴絕全球！香港<font class="highlight">樓價</font>瘋癲，早已經不是新聞，但也佔據了當天各大媒體的重要篇幅，無他，只因香港人仍然想知道，究竟香港<font class="highlight">樓價</font>可以癲到哪一水平！</p><p>  報告指香港的平均住宅<font class="highlight">樓價</font>相當於963萬港元，平均呎價高達16300港元，平均呎價較排在第二位的新加坡高出接近一倍。</p><p>  至於本港住宅租金則排行全球第三，每月租金要21799元，僅次於紐約及阿布扎比。今時今日，在香港中六合彩頭獎，萬一有幾注中，隨時中了頭獎也無法<font class="highlight">買樓</font>！</p><p>  為上車人性全面扭曲</p><p>  這些數字令我想到香港病了，而且更是一種獨有的「香港病」，而這個病毒根源，來自三個字：「高<font class="highlight">樓價</font>」！</p><p>  究竟這個「香港病」有何病徵？六親皆不認、有樓才有愛、結婚即分居、想生唔敢生、貧窮世襲制、社會怨氣增！這些通通都是因為「高<font class="highlight">樓價</font>」而為香港帶來獨有的「香港病」，而這種病的殺傷力，比癌細胞更恐怖、更深遠地遺害社會！</p><p>  「今日終於喺觀塘買人生第一層樓了，奮鬥3年，580萬一筆過，冇借銀行。我相信只要努力，你都可以！有時候唔逼一下父母，你永遠唔知道佢哋收埋幾多錢！」這是早前一位網友在其Facebook上寫出一段所謂上車血淚史！大家看完會否有一種「想笑卻笑不出」的感覺？我心想這名所謂奮鬥人士，是否奮鬥3年去逼迫父母掏出一生血汗錢才可以一筆過<font class="highlight">買樓</font>？</p><p>  我無法知道究竟這段網上帖文孰真孰假？還是只是一種樓盤推廣手法來吸引討論的宣傳策略。不過，社會上的確已經發生一些畸形現象，為了層樓六親不認，又或是「有錢有樓才有親情」的社會悲劇。讓我隨意列出一些荒謬的新聞標題：「父控子賣樓換鎖無情無義，兒子剖白：是爸爸貪婪」、「變賣祖屋講數失敗，姨甥女開槍殺長輩一死三傷」，這些新聞的確荒謬至一個極點！至於那些為層樓逼父母分家產的新聞，更是屢見不鮮。何以今天的香港會如此中毒？為了層樓可以六親不認、人性全面扭曲！</p><p>  中產再用功也無法安居</p><p>  然後大家又看見一些新婚夫婦，婚後繼續各自住在雙方父母家中的奇怪現象，而且面對那些愈賣愈細、卻愈賣愈貴的百呎納米樓，細得只能放下一張雙人床，試問在這種居住環境下，又或是新婚即要分居的環境下，香港的新婚夫婦，誰敢或誰能生育下一代！</p><p>  在這種扭曲奇怪的環境下，哪怕是再專業、再用功的中產人士，也無法上車安居，相反能夠「上車靠父幹」的新生代，卻變成了贏在起跑線的一群，當這個社會只靠炒賣維生，而不再是能者居之、能者上位的環境；當這個社會無論是富貴或貧窮，都變成了一種世襲制時，這個社會還有希望嗎？這種瘋狂的高<font class="highlight">樓價</font>，究竟是一種祝福還是一種咒詛？</p><p>  zoelamyy@gmail.com </p><p>  #林日彥 #港股分析 #堅離地城 - 比癌症更恐怖的高<font class="highlight">樓價</font>香港病 </p><p>  
<br><br>
</p></td>
</tr>


</tbody></table>



<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">



<tbody><tr>
<td><font size="2">DOCUMENT ID: 201904150283631 </font></td>
</tr>
<tr><td><a href="#toc.201904150283631.5">BACK TO MAIN MENU</a></td></tr>
</tbody></table>

<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><hr></td>
</tr>
<tr>
<td><font size="1" face="Arial, Helvetica, sans-serif">
Source: Wisers electronic service. This content, the trademarks and logos belong to Wisers, the relevant organizations or copyright owners. All rights reserved. Any content provided by user is the responsibility of the user and Wisers is not responsible for such content, copyright clearance or any damage/loss suffered as a result. 
</font></td>
</tr>
<tr>
<td><hr></td>
</tr>
</tbody></table>
<table width="100%" border="0">
<tbody><tr>
<td align="center"><h4>---------- 5 ----------</h4></td>
</tr>
</tbody></table>



<a name="body.201904150283165.6"></a>
<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><font size="2"><nowrap>6 .Hong Kong Economic Journal | General Property in Hong Kong | Circulation / Reach: 83,000 | 2019-04-15
<br>Newspaper | 
A12 |地產</nowrap>
<br>Word Count: 754 words | Image Size: 
239.9cm<sup>2</sup> (8.3cm x 28.9cm) | Ad-Value: HKD32,229
</font></td>
</tr>
<tr><td><font size="2">Keyword Matched: 發展商,新盤,樓價,成交</font></td></tr>
</tbody></table>
			
<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><hr></td>
</tr>
<tr> 
<td><font size="5"><b><font class="highlight">新盤</font>周末谷貨尾沽75伙</b></font>

<br>

</td>
</tr>

<tr><td><br></td></tr>















<tr>
<td>&nbsp;</td>
</tr>
</tbody></table>

<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="5">

<tbody><tr>
<td>
<p><font class="highlight">新盤</font>過去周末未有大規模推售，<font class="highlight">發展商</font>主力銷售貨尾單位，銷情仍然持續，總括市場消息指出，<font class="highlight">新盤</font>過去周末（13日及14日）共錄得約75宗<font class="highlight">成交</font>，較前周（6日及7日）約165宗大減90宗（約55%），月初至今約半個月，<font class="highlight">新盤</font><font class="highlight">成交</font>已直逼1000宗，金額突破100億元。另外，剛於上周締造亞洲分層戶<font class="highlight">成交</font>價新高的南區超級現樓豪宅深水灣徑8號，<font class="highlight">發展商</font>昨天（14日）加推一伙於本周四（18日）單日招標，招標時間僅一小時。</p><p>過去兩天未有大型<font class="highlight">新盤</font>應市，過去周六（13日）嘉華國際（00173）大埔白石角嘉熙招標發售16伙，兩天共沽8伙；恒地（00012）西環翰林峰昨天先到先得發售20戶，單日售出4伙。銷情最佳<font class="highlight">新盤</font>則為馬鞍山泓碧，周末兩天售出14伙，吸金約1.27億元。</p><p><font class="highlight">新盤</font>過去兩天不乏大額<font class="highlight">成交</font>，新世界（00017）西貢清水灣傲瀧昨日錄得本月首宗<font class="highlight">成交</font>，為9座地下D室花園戶，實用面積1700方呎，連424方呎花園，<font class="highlight">成交</font>價3931萬元，呎價23124元；同系北角柏蔚山以1607.8萬元售出3座22樓D室一房戶，實用面積548方呎，呎價29339元。</p><p>永泰地產（00369）沙田九肚澐灃，周六則以4915.6萬元售出H18號屋，洋房實用面積2084方呎，呎價23587元。</p><p>過去2天27個項目共沽75伙，本月一手市場暫售出約982伙，較3月同期約1062伙少約7.5%；金額則約105.73億元，較上月同期逾113億元僅低約6.4%。</p><p>深水灣徑8號周四再推一伙招標</p><p>南豐及豐資源發展的南區深水灣徑8號，上周以6.0544億元登上亞洲分層單位<font class="highlight">成交</font>價新高寶座，<font class="highlight">發展商</font>昨加推1座6樓B室本周四早上10至11時招標，單位實用面積3641方呎，4套房間隔。該單位對上一層的1座7樓B室，實用面積相同，今年2月以2.286548億元售出，呎價6.28萬元。</p><p>招標文件內容與前述破紀錄的分層單位大致相若，包括投標時須付上最少800萬元的本票或支票，金額須相當於投標價的5%，買家簽定正式合約時共繳付<font class="highlight">樓價</font>15%，餘款付款日期由買賣雙方協議定出，單位每月管理費為40020元，即每方呎11元。</p><p>#地產 - <font class="highlight">新盤</font>周末谷貨尾沽75伙 </p><p>
<br><br>
</p></td>
</tr>


</tbody></table>



<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">



<tbody><tr>
<td><font size="2">DOCUMENT ID: 201904150283165 </font></td>
</tr>
<tr><td><a href="#toc.201904150283165.6">BACK TO MAIN MENU</a></td></tr>
</tbody></table>

<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><hr></td>
</tr>
<tr>
<td><font size="1" face="Arial, Helvetica, sans-serif">
Source: Wisers electronic service. This content, the trademarks and logos belong to Wisers, the relevant organizations or copyright owners. All rights reserved. Any content provided by user is the responsibility of the user and Wisers is not responsible for such content, copyright clearance or any damage/loss suffered as a result. 
</font></td>
</tr>
<tr>
<td><hr></td>
</tr>
</tbody></table>
<table width="100%" border="0">
<tbody><tr>
<td align="center"><h4>---------- 6 ----------</h4></td>
</tr>
</tbody></table>



<a name="body.201904150216940.7"></a>
<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><font size="2"><nowrap>7 .am730 | General Property in Hong Kong | Circulation / Reach: 400,085 | 2019-04-15
<br>Newspaper | 
A27 |FINANCE |法證巴打 |By 黃集恩</nowrap>
<br>Word Count: 770 words | Image Size: 
98.0cm<sup>2</sup> (13.8cm x 7.1cm) | Ad-Value: HKD32,112
</font></td>
</tr>
<tr><td><font size="2">Keyword Matched: 成交</font></td></tr>
</tbody></table>
			
<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><hr></td>
</tr>
<tr> 
<td><font size="5"><b>滬深股通<font class="highlight">成交</font>創新高</b></font>

<br>

</td>
</tr>

<tr><td><br></td></tr>















<tr>
<td>&nbsp;</td>
</tr>
</tbody></table>

<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="5">

<tbody><tr>
<td>
<p></p><p>港交所(388)上周於社交平台宣布，經滬深股通北上買A股於4月8日創下單日<font class="highlight">成交</font>總額新高。買盤加賣盤共763億元人民幣。單日763億元人民幣，連同匯率計算即已超過800億港元。港交所一天<font class="highlight">成交</font>逾千億港元，是以單向(不分買入或賣出)計算，但800億元<font class="highlight">成交</font>仍是可觀。</p><p>於是再觀看經滬深股通北上買A股資金流，發現每天買入與賣出於今年2月才出現明顯增長，但並不一定是長期資金流入或流出，反映有市場參與者有目標地加強對A股買賣。作為交易所，資金流入流出並非重點，但<font class="highlight">成交</font>增加可令交易收入提升。</p><p>港交所2018年全年總收入142.5億元，當中63.3億元是交易費及交易系統使用費，其中23.8億元是聯交所及透過滬深港通買賣股本證券，此收入佔總收入約15%。今年首季港股<font class="highlight">成交</font>平均約一千億元，與2018年全年平均相若，但滬深港通增加應對收入有正面幫助。港交所將於5月8日公布今年第一季季績。</p><p>作者為法國巴黎銀行上市衍生產品部執行董事、金管局持牌人，以上純為個人意見。本資料由法國巴黎銀行香港分行刊發，其並不構成任何建議、邀請、要約或遊說買賣結構性產品。結構性產品並無抵押品，如發行人或擔保人無力償債或違約，投資者可能無法收回部分或全部款項。產品價格可急升或急跌，投資者或蒙受全盤損失。投資者購買時所依賴的是發行人及擔保人的信譽。有關資產過往表現並不反映將來表現。牛熊證備有強制贖回機制而可能被提早終止，屆時(i)N類牛熊證投資者將不獲發任何金額；而(ii)R類牛熊證之剩餘價值可能為零。投資者應仔細查閱基本上市文件(包括基本上市文件增編)及補充上市文件內有關結構性產品之相關風險及詳情，自行評估風險，並諮詢專業意見。法國巴黎證券(亞洲)有限公司為結構性產品之流通量提供者，亦可能是其唯一巿場參與者。法國巴黎證券(亞洲)有限公司、法國巴黎銀行香港分行及其聯屬公司均不對結構性產品: (i)能否於預定上市日上市及(ii)其上市後之流通量，作出任何聲明或保證。</p><p>
<br><br>
</p></td>
</tr>


</tbody></table>



<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">



<tbody><tr>
<td><font size="2">DOCUMENT ID: 201904150216940 </font></td>
</tr>
<tr><td><a href="#toc.201904150216940.7">BACK TO MAIN MENU</a></td></tr>
</tbody></table>

<table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
<tbody><tr>
<td><hr></td>
</tr>
<tr>
<td><font size="1" face="Arial, Helvetica, sans-serif">
Source: Wisers electronic service. This content, the trademarks and logos belong to Wisers, the relevant organizations or copyright owners. All rights reserved. Any content provided by user is the responsibility of the user and Wisers is not responsible for such content, copyright clearance or any damage/loss suffered as a result. 
</font></td>
</tr>
<tr>
<td><hr></td>
</tr>
</tbody></table>
<table width="100%" border="0">
<tbody><tr>
<td align="center"><h4>---------- 7 ----------</h4></td>
</tr>
</tbody></table>


<hr height="1" width="100%">
<font size="1">
WiseNews Wisers Information Limited Enquiry: (852) 2948 3888 Email: info@wisers.com Web site: http://www.wisers.com<br>
Copyright (c)2019Wisers Information Limited. All Rights Reserved.
</font>



</body></html>`;

global.die = function(message) {
  console.log(message);
  process.exit();
};

var result = parseWisers({ text: htmlText, type: "HTML" });
console.log(result);
