var { parseWisers } = require('./index.js')

var htmlText = `
    <html>
    <head>
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
    <body bgcolor=#FFFFFF>

    <font size="3" face="Arial, Helvetica, sans-serif">

    </font>
    <br><br>
    <b>Total number of document(s): 7 </b><br>
    <hr height="1" width="100%">
    <a name="TOC"></a><table width="100%" style="table-layout:fixed;">
    <tr>
    <td width="30px" valign="top"><a href="#body.201904150296340.1" name="toc.201904150296340.1"><font size="2">1. </font></a></td>
    <td><font size="3"><a href="#body.201904150296340.1"><font class="highlight">按揭</font>戰蔓延綠置居</font>&nbsp;

    <font size="2" face="Arial">[Oriental Daily News] 2019-04-15	B04	產經		</font>	</a></td>
    </tr>
    <tr>
    <td colspan="2">
    <table width="100%"></table>
    </td>
    </tr>
    </table><table width="100%" style="table-layout:fixed;">
    <tr>
    <td width="30px" valign="top"><a href="#body.201904150187376.2" name="toc.201904150187376.2"><font size="2">2. </font></a></td>
    <td><font size="3"><a href="#body.201904150187376.2">資金持續流入住宅市場 4 月<font class="highlight">成交</font>料創10 個月新高</font>&nbsp;

    <font size="2" face="Arial">[Hong Kong Commercial Daily] 2019-04-15	A05	產經新聞		</font>	</a></td>
    </tr>
    <tr>
    <td colspan="2">
    <table width="100%"></table>
    </td>
    </tr>
    </table><table width="100%" style="table-layout:fixed;">
    <tr>
    <td width="30px" valign="top"><a href="#body.201904150226952.3" name="toc.201904150226952.3"><font size="2">3. </font></a></td>
    <td><font size="3"><a href="#body.201904150226952.3">呼吸PLAN轉按成趨勢（下）</font>&nbsp;

    <font size="2" face="Arial">[Ta Kung Pao] 2019-04-15	A13	經濟	談樓說按	王美鳳</font>	</a></td>
    </tr>
    <tr>
    <td colspan="2">
    <table width="100%"></table>
    </td>
    </tr>
    </table><table width="100%" style="table-layout:fixed;">
    <tr>
    <td width="30px" valign="top"><a href="#body.201904150201229.4" name="toc.201904150201229.4"><font size="2">4. </font></a></td>
    <td><font size="3"><a href="#body.201904150201229.4"><font class="highlight">樓價</font>最貴是好是壞？</font>&nbsp;

    <font size="2" face="Arial">[am730] 2019-04-15	A02	NEWS	C觀點	施永青</font>	</a></td>
    </tr>
    <tr>
    <td colspan="2">
    <table width="100%"></table>
    </td>
    </tr>
    </table><table width="100%" style="table-layout:fixed;">
    <tr>
    <td width="30px" valign="top"><a href="#body.201904150283631.5" name="toc.201904150283631.5"><font size="2">5. </font></a></td>
    <td><font size="3"><a href="#body.201904150283631.5">比癌症更恐怖的高<font class="highlight">樓價</font>香港病</font>&nbsp;

    <font size="2" face="Arial">[Hong Kong Economic Journal] 2019-04-15	B04	港股分析	堅?離地城	林日彥</font>	</a></td>
    </tr>
    <tr>
    <td colspan="2">
    <table width="100%"></table>
    </td>
    </tr>
    </table><table width="100%" style="table-layout:fixed;">
    <tr>
    <td width="30px" valign="top"><a href="#body.201904150283165.6" name="toc.201904150283165.6"><font size="2">6. </font></a></td>
    <td><font size="3"><a href="#body.201904150283165.6"><font class="highlight">新盤</font>周末谷貨尾沽75伙</font>&nbsp;

    <font size="2" face="Arial">[Hong Kong Economic Journal] 2019-04-15	A12	地產		</font>	</a></td>
    </tr>
    <tr>
    <td colspan="2">
    <table width="100%"></table>
    </td>
    </tr>
    </table><table width="100%" style="table-layout:fixed;">
    <tr>
    <td width="30px" valign="top"><a href="#body.201904150216940.7" name="toc.201904150216940.7"><font size="2">7. </font></a></td>
    <td><font size="3"><a href="#body.201904150216940.7">滬深股通<font class="highlight">成交</font>創新高</font>&nbsp;

    <font size="2" face="Arial">[am730] 2019-04-15	A27	FINANCE	法證巴打	黃集恩</font>	</a></td>
    </tr>
    <tr>
    <td colspan="2">
    <table width="100%"></table>
    </td>
    </tr>
    </table>
    <a name="body.201904150296340.1"></a>
    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
    <td><font size="2"><nowrap>1 .Oriental Daily News | General Property in Hong Kong | Circulation / Reach: 300,000 | 2019-04-15
    <br>Newspaper | 
    B04 |產經</nowrap>
    <br>Word Count: 918 words | Image Size: 
    493.9cm<sup>2</sup> (25.2cm x 19.6cm) | Ad-Value: HKD97,302
    </font></td>
    </tr>
    <tr><td><font size="2">Keyword Matched: 中原,按揭,利嘉閣</font></td></tr>
    </table>
                
    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
    <td><hr></td>
    </tr>
    <tr> 
    <td><font size="5"><b><font class="highlight">按揭</font>戰蔓延綠置居</b></font>

    <br>

    </td>
    </tr>

    <tr><td><br></td></tr>















    <tr>
    <td>&nbsp</td>
    </tr>
    </table>

    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="5">

    <tr>
    <td>
    <p>綠置居麗翠苑在三月底進行揀樓，即令<font class="highlight">按揭</font>戰由居屋擴展至綠置居市場，銀行更將兵源分散，藉此同時應付兩條戰線。大型銀行及<font class="highlight">按揭</font>代理職員近日聚集在觀塘揀樓中心，提供媲美居屋<font class="highlight">按揭</font>優惠搶客，包括高額現金回贈等，當中以中國銀行（香港）（02388）態度較進取。<p>部分銀行設立臨時<font class="highlight">按揭</font>中心，供綠置居準買家申請。<p>香港房屋委員會推出的長沙灣麗翠苑提供2,545個單位，以市價四二折出售，單位售價介乎93萬至306萬元，而且均可敍做九成半<font class="highlight">按揭</font>，並有政府擔保，成為銀行必爭的低風險貸款市場。<p>據本報記者實地視察，中銀香港、滙豐銀行及恒生銀行（00011）均於觀塘建生廣場的揀樓中心門外部署<font class="highlight">按揭</font>部職員，待準買家步出中心，旋即上前推銷<font class="highlight">按揭</font>計劃，中銀香港及恒生更於建生廣場內，各自租借場地設立臨時<font class="highlight">按揭</font>中心，供準買家申請<font class="highlight">按揭</font>。<p>專家：水頭足亦宜借到盡<p>據悉，各大銀行為綠置居提供的<font class="highlight">按揭</font>條款看齊新居屋申請，實際<font class="highlight">按揭</font>利率為2.375厘，現金回贈由貸款額的2.08至2.1%，並額外提供2,000至2,300元現金回贈及家居保險等。中銀香港發言人回覆本報查詢時指，該行給予綠置居買家的現金回贈為貸款額2.1%加2,000元，客戶於六月底前申請可獲額外500元禮券。<p>市民敍做綠置居<font class="highlight">按揭</font>與私人物業有不少相異之處。<font class="highlight">利嘉閣</font><font class="highlight">按揭</font>代理董事總經理黃詠欣指，綠置居<font class="highlight">按揭</font>貸款的還款期可長達二十五年，且最多能借九成半，但僅能選擇最優惠利率（P）掛鈎<font class="highlight">按揭</font>計劃。<p>她又提醒，綠置居貸款轉按及加按設有限制，須先獲得房屋署同意方可進行，建議買家即使手頭資金充裕，敍做<font class="highlight">按揭</font>時宜「借到盡」，並將多出資金存入銀行贈送的高息存款戶口，使資金運用更加靈活。<p><font class="highlight">中原</font><font class="highlight">按揭</font>經紀董事總經理王美鳳稱，銀行審批綠置居貸款會較寬鬆，但仍有機會查閱申請人的信貸紀錄，借款人應作自我測試，每月還款佔入息比例低於四成或以下，在理財而言屬較理想的供款比例。<p>中銀擬增人手及開分行<p>該公司數據顯示，今年首季包括居屋、夾屋及租者置其屋的資助房屋<font class="highlight">按揭</font>登記宗數，按年跌近三成至1,979宗，期內恒生續以33%的市場佔有率稱冠，滙豐及中銀香港則緊隨其後。<p>事實上，今年來<font class="highlight">按揭</font>市場競爭激烈，銀行亦擬增兵。消息透露，中銀香港計劃增設分行網絡的<font class="highlight">按揭</font>中心，由現時只有7間，目標增至看齊擁有11間<font class="highlight">按揭</font>中心的滙豐，意味最少增設4間，以每間平均兩名<font class="highlight">按揭</font>職員計，計劃增兵約10人。<p>
    <br><br>
    </td>
    </tr>


    </table>



    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">



    <tr>
    <td><font size="2">DOCUMENT ID: 201904150296340 </font></td>
    </tr>
    <tr><td><a href="#toc.201904150296340.1">BACK TO MAIN MENU</a></td></tr>
    </table>

    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
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
    </table>
    <table width="100%" border="0" >
    <tr>
    <td align="center"><h4 >---------- 1 ----------</h4></td>
    </tr>
    </table>



    <a name="body.201904150187376.2"></a>
    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
    <td><font size="2"><nowrap>2 .Hong Kong Commercial Daily | General Property in Hong Kong | Circulation / Reach: 35,000 | 2019-04-15
    <br>Newspaper | 
    A05 |產經新聞</nowrap>
    <br>Word Count: 880 words | Image Size: 
    465.7cm<sup>2</sup> (23.4cm x 19.9cm) | Ad-Value: HKD30,128
    </font></td>
    </tr>
    <tr><td><font size="2">Keyword Matched: 發展商,買賣合約,物業,中原地產,車位,新盤,香港置業,成交</font></td></tr>
    </table>
                
    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
    <td><hr></td>
    </tr>
    <tr> 
    <td><font size="5"><b>資金持續流入住宅市場 4 月<font class="highlight">成交</font>料創10 個月新高</b></font>

    <br>

    </td>
    </tr>

    <tr><td><br></td></tr>















    <tr>
    <td>&nbsp</td>
    </tr>
    </table>

    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="5">

    <tr>
    <td>
    <p>【香港商報訊】記者鄭珊珊報道：樓市交投持續暢旺，<font class="highlight">中原地產</font>研究部高級聯席董事黃良昇預料，4 月整體<font class="highlight">買賣合約</font>登記(包括住宅、<font class="highlight">車位</font>及工商舖<font class="highlight">物業</font>)<font class="highlight">成交</font>宗數，有望繼2018 年6 月份9252 宗後，迫近9000 宗高水平，創10 個月新高；金額亦可望繼2018 年7 月份993.7 億元後，迫750 億元水平，創9 個月新高。個別藍籌屋苑呎價已率先升穿年度高位，熱門上車屋苑沙田第一城最近一宗<font class="highlight">成交</font>，實用呎價達20775 元，屬同類單位今年新高。<p>  截至4 月11 日，本月一手私人住宅暫錄得876 宗<font class="highlight">成交</font>，總值92.2 億元。<font class="highlight">中原地產</font>預測整月登記1800 宗及185 億元，將較3 月的1439 宗及150.6 億元，分別上升25.1%及22.8%，主因<font class="highlight">發展商</font>積極推售<font class="highlight">新盤</font>及貨尾單位。<p>  紅磡啟岸熱賣<p>  目前錄得最多登記的<font class="highlight">新盤</font>暫為紅磡啟岸，有196 宗登記，總值11.6 億元。排名第二為大埔雲滙1 期，暫錄109 宗總值11.6 億元。第三為將軍澳日出康城6 期LP6，暫錄80 宗總值8.1 億元。<p>  至於4 月樓宇整體<font class="highlight">買賣合約</font>登記(包括住宅、<font class="highlight">車位</font>及工商舖<font class="highlight">物業</font>)暫錄3321 宗，總值276.14 億元。全月登記預測達9000 宗及750 億元，較3 月份6428 宗及528.3 億元上升40%及42%。<p>  <font class="highlight">香港置業</font>行政總裁表示，近期樓市反彈上升，普遍準買家對後市抱正面心態，入市意欲高漲，反映剛需強勁，相信資金仍會持續流入樓市。他續說，與此同時，<font class="highlight">發展商</font>加大去貨力度，多個<font class="highlight">新盤</font>部署短期內推售，料次季一手市場將會是市場焦點所在，而二手價量緩升的勢頭亦會持續。<p>  第一城呎價重上2 萬<p>  黃良昇又指出，二手大型屋苑4 月份整體<font class="highlight">成交</font>暫錄1608 宗，涉資138.7 億元。預測到月底，登記宗數會達到4200 宗，金額達到360 億元，將較3 月的3469 宗及292 億元上升21.1%及23.3%。宗數創下2018 年6 月份後新高，當時<font class="highlight">成交</font>宗數為4324 宗，金額則創2018 年7 月362 億元後9 個月新高。<p>  據<font class="highlight">中原地產</font>沙田第一城分區營業經理侯惠良透露，最近<font class="highlight">成交</font>的沙田第一城單位為44 座高層B 單位，兩房間隔，建築面積395 平方呎，實用面積284 平方呎，以590 萬元易手。原業主於2014 年以363 萬元購入單位，持貨5 年獲利227 萬元，單位升值約62.5%。<p>  沙田第一城不僅在呎價方面表現突出，就連<font class="highlight">成交</font>宗數都打入本月前4 名，暫錄12 宗。本月其他表現活躍的大型屋苑還包括美孚新邨暫錄21 宗買賣登記、嘉湖山莊暫錄19 宗、太古城暫錄16 宗。<p>  ####<p>  新界熱門屋苑沙田第一城近日<font class="highlight">成交</font>價再次衝上2萬元大關。<p>  
    <br><br>
    </td>
    </tr>


    </table>



    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">



    <tr>
    <td><font size="2">DOCUMENT ID: 201904150187376 </font></td>
    </tr>
    <tr><td><a href="#toc.201904150187376.2">BACK TO MAIN MENU</a></td></tr>
    </table>

    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
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
    </table>
    <table width="100%" border="0" >
    <tr>
    <td align="center"><h4 >---------- 2 ----------</h4></td>
    </tr>
    </table>



    <a name="body.201904150226952.3"></a>
    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
    <td><font size="2"><nowrap>3 .Ta Kung Pao | General Property in Hong Kong | Circulation / Reach: 100,000 | 2019-04-15
    <br>Newspaper | 
    A13 |經濟 |談樓說按 |By 王美鳳</nowrap>
    <br>Word Count: 712 words | Image Size: 
    179.2cm<sup>2</sup> (11.2cm x 16.0cm) | Ad-Value: HKD19,486
    </font></td>
    </tr>
    <tr><td><font size="2">Keyword Matched: 中原,發展商,物業,新盤,按揭,樓價</font></td></tr>
    </table>
                
    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
    <td><hr></td>
    </tr>
    <tr> 
    <td><font size="5"><b>呼吸PLAN轉按成趨勢（下）</b></font>

    <br>

    </td>
    </tr>

    <tr><td><br></td></tr>















    <tr>
    <td>&nbsp</td>
    </tr>
    </table>

    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="5">

    <tr>
    <td>
    <p>上期提及<font class="highlight">發展商</font><font class="highlight">新盤</font>一按普遍設有初期低息優惠，但兩三年後息率將跳升，用家需準備轉按可行性。若果由<font class="highlight">發展商</font>八成一按轉按至銀行承造六成<font class="highlight">按揭</font>，原則上業主須補回<font class="highlight">樓價</font>兩成之首期差額方可轉按，但由於過去三年至今，<font class="highlight">樓價</font>大致處於升軌，因應<font class="highlight">物業</font>估值已累升達三至四成半，業主轉按時可承造之<font class="highlight">按揭</font>金額已提高，加上期內業主已償還部分<font class="highlight">按揭</font>本金，降低了轉按時所需補回之首期差額，甚至有部分<font class="highlight">新盤</font>一按用家無需補付首期差額便可成功轉按。<p>以一個<font class="highlight">新盤</font>作為例子，買家於2016年4月入市購買一個作價650萬元之單位，由於銀行<font class="highlight">按揭</font>僅高達六成，為了減輕兩成首期負擔，買家決定採用<font class="highlight">發展商</font>提供之八成一按即供上會，<font class="highlight">按揭</font>金額高達520萬元。有關八成一按之首兩年息率為2.3%，兩年期後息率跳升至P水平（P現為5.125%），目前<font class="highlight">按揭</font>餘額降至87萬元，有意轉按以免捱貴息。由於有關單位之<font class="highlight">樓價</font>已上升四成，估值已升至910萬元，以銀行<font class="highlight">按揭</font>成數上限計算，申請轉按可獲批之<font class="highlight">按揭</font>金額高達500萬元（<font class="highlight">按揭</font>成數為55%）。換句話說，隨着<font class="highlight">樓價</font>上升，買家無需補付首期差額便可將<font class="highlight">發展商</font>一按轉至銀行低息<font class="highlight">按揭</font>。成功轉按銀行後，買家之供樓按息降至2.375%，每月供款減少24%，利息支出減少約54%。<p>對於正在使用<font class="highlight">發展商</font>高成數一按或二按之供樓人士，當兩至三年之低息優惠期完結後，可根據銀行最新<font class="highlight">物業</font>估值計算可承造的<font class="highlight">按揭</font>金額上限。當<font class="highlight">樓價</font>累積一定升幅以及<font class="highlight">按揭</font>餘額逐步降低，轉按至銀行所需支付的首期差額便可減少，故此供樓人士可衡量自身個案是否具條件轉按。二按用家若資金較充裕，亦可選擇清還二按貸款而保留銀行一按。<p>留意銀行審批<font class="highlight">按揭</font>準則與<font class="highlight">發展商</font>不同，銀行需根據現行樓按措施評估轉按申請人的還款能力，並在通過壓力測試後，方可批出<font class="highlight">按揭</font>貸款。<p>（文接3月25日A13版）<p><font class="highlight">中原</font><font class="highlight">按揭</font>經紀董事總經理王美鳳<p>
    <br><br>
    </td>
    </tr>


    </table>



    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">



    <tr>
    <td><font size="2">DOCUMENT ID: 201904150226952 </font></td>
    </tr>
    <tr><td><a href="#toc.201904150226952.3">BACK TO MAIN MENU</a></td></tr>
    </table>

    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
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
    </table>
    <table width="100%" border="0" >
    <tr>
    <td align="center"><h4 >---------- 3 ----------</h4></td>
    </tr>
    </table>



    <a name="body.201904150201229.4"></a>
    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
    <td><font size="2"><nowrap>4 .am730 | General Property in Hong Kong | Circulation / Reach: 400,085 | 2019-04-15
    <br>Newspaper | 
    A02 |NEWS |C觀點 |By 施永青</nowrap>
    <br>Word Count: 1116 words | Image Size: 
    231.2cm<sup>2</sup> (27.2cm x 8.5cm) | Ad-Value: HKD75,773
    </font></td>
    </tr>
    <tr><td><font size="2">Keyword Matched: 買樓,店舖,樓價</font></td></tr>
    </table>
                
    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
    <td><hr></td>
    </tr>
    <tr> 
    <td><font size="5"><b><font class="highlight">樓價</font>最貴是好是壞？</b></font>

    <br>

    </td>
    </tr>

    <tr><td><br></td></tr>















    <tr>
    <td>&nbsp</td>
    </tr>
    </table>

    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="5">

    <tr>
    <td>
    <p>香港<font class="highlight">樓價</font>又被列為全球最貴。有學者擔心，這會影響香港的競爭力。這不但會阻嚇海外公司來港發展，亦會妨礙本地的初創公司的成長空間。而我則覺得，<font class="highlight">樓價</font>貴只會影響民生，對商業的影響不會太大。<p>本來，若純從居住的角度來考慮，買不起樓，可以選擇租樓。<font class="highlight">樓價</font>會受到投資前景的影響而升得脫離實際，但租金卻只能反映租客目前的負擔能力，不可能完全脫離實際。所以<font class="highlight">樓價</font>高的地方，租金回報率都會相對低一點。只是香港人大都偏好<font class="highlight">買樓</font>，而不想租樓，貪其可以升值，可以得到租樓不會提供的投資回報。這才導致香港人會把買不起樓也視作民生問題。在別處地方，<font class="highlight">樓價</font>過高只會被視作投資問題。在其他國際大城市中，在當地工作的人多會租樓，而樓宇的擁有者卻是另外的一批投資者。<p>香港有很強的投資吸引力，又是一個容許資金自由出入的自由港，政府要限制外來資金投資香港並不容易。近年政府試圖寓禁於徵，大幅提高了多種印花稅，但這些「辣招」卻收效甚微。我建議政府乾脆把市場切割成兩個部分：一邊是純粹照顧本地人生活所需的民生市場，不容許資金(包括本地資金)進來扭曲<font class="highlight">樓價</font>，令<font class="highlight">樓價</font>只能反映本地人的購買力。另一邊是全面開放的自由市場，由資金擁有者自行決定<font class="highlight">樓價</font>的升跌。<p>在這樣的分割下，政府就可以讓每一個香港人，一生中都有一次機會買一個首次上車盤，只要政府放棄徵收如自由市場一樣高的地價便可以了。至於那些想住得比上車盤的環境好一些的香港人，那就得憑自己的實力，與國際投資者一起在自由市場作競爭。<p>解決了民生問題之後，商業樓宇市場政府應盡量少管。一般而言，做生意的人大多選擇租樓，而不是<font class="highlight">買樓</font>，外國公司尤其如是。香港的寫字樓與<font class="highlight">店舖</font>的租金之所以會升得這麼高，可謂是商界自己搶高的。租金可不是業主想訂多高就可以訂多高的。香港的商業樓宇的租金水平能升到全球最高的水平，正好反映香港的營商環境比全球其他地方都好，否則跨國企業為何不選擇去其他租金便宜的地方做生意？<p>從這個角度來看，一個城市是不用擔心商業樓宇的租金太高的。若是企業沒法在當地賺到錢，他們是負擔不起這麼高的租金的，屆時，租金自然會下調至商人負擔得起的水平。<p>近期，香港的<font class="highlight">店舖</font>租金就接連大幅回落，原因並非業主大發慈悲，而是因為內地大力打貪，以及零售業備受互聯網電商影響所致。可見業主一樣要接受市場的制約。亞洲金融風暴之後，香港寫字樓的租金就試過連跌多年，但這對香港商界來說卻並沒有帶來多大的好處。因為租金回落的時候，往往就是生意難做的時候。因此，成熟的生意人都不想看到一個城市的整體租金回落。<p>香港的<font class="highlight">樓價</font>與租金又一次被列作全球最貴，這對大多數人來說，都不是一件好事；但從另一個角度來看，這亦可反映投資者對香港仍有偏好，而商人亦願意為在香港做生意而付出溢價。這顯示香港有其價值。<p>
    <br><br>
    </td>
    </tr>


    </table>



    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">



    <tr>
    <td><font size="2">DOCUMENT ID: 201904150201229 </font></td>
    </tr>
    <tr><td><a href="#toc.201904150201229.4">BACK TO MAIN MENU</a></td></tr>
    </table>

    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
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
    </table>
    <table width="100%" border="0" >
    <tr>
    <td align="center"><h4 >---------- 4 ----------</h4></td>
    </tr>
    </table>



    <a name="body.201904150283631.5"></a>
    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
    <td><font size="2"><nowrap>5 .Hong Kong Economic Journal | General Property in Hong Kong | Circulation / Reach: 83,000 | 2019-04-15
    <br>Newspaper | 
    B04 |港股分析 |堅?離地城 |By 林日彥</nowrap>
    <br>Word Count: 1064 words | Image Size: 
    412.0cm<sup>2</sup> (32.7cm x 12.6cm) | Ad-Value: HKD55,359
    </font></td>
    </tr>
    <tr><td><font size="2">Keyword Matched: 買樓,樓價</font></td></tr>
    </table>
                
    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
    <td><hr></td>
    </tr>
    <tr> 
    <td><font size="5"><b>比癌症更恐怖的高<font class="highlight">樓價</font>香港病</b></font>

    <br>

    </td>
    </tr>

    <tr><td><br></td></tr>















    <tr>
    <td>&nbsp</td>
    </tr>
    </table>

    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="5">

    <tr>
    <td>
    <p>世邦魏理仕上周五發表的《全球生活報告：城市指南》，指本港私人住宅<font class="highlight">樓價</font>繼續貴絕全球！香港<font class="highlight">樓價</font>瘋癲，早已經不是新聞，但也佔據了當天各大媒體的重要篇幅，無他，只因香港人仍然想知道，究竟香港<font class="highlight">樓價</font>可以癲到哪一水平！<p>  報告指香港的平均住宅<font class="highlight">樓價</font>相當於963萬港元，平均呎價高達16300港元，平均呎價較排在第二位的新加坡高出接近一倍。<p>  至於本港住宅租金則排行全球第三，每月租金要21799元，僅次於紐約及阿布扎比。今時今日，在香港中六合彩頭獎，萬一有幾注中，隨時中了頭獎也無法<font class="highlight">買樓</font>！<p>  為上車人性全面扭曲<p>  這些數字令我想到香港病了，而且更是一種獨有的「香港病」，而這個病毒根源，來自三個字：「高<font class="highlight">樓價</font>」！<p>  究竟這個「香港病」有何病徵？六親皆不認、有樓才有愛、結婚即分居、想生唔敢生、貧窮世襲制、社會怨氣增！這些通通都是因為「高<font class="highlight">樓價</font>」而為香港帶來獨有的「香港病」，而這種病的殺傷力，比癌細胞更恐怖、更深遠地遺害社會！<p>  「今日終於喺觀塘買人生第一層樓了，奮鬥3年，580萬一筆過，冇借銀行。我相信只要努力，你都可以！有時候唔逼一下父母，你永遠唔知道佢哋收埋幾多錢！」這是早前一位網友在其Facebook上寫出一段所謂上車血淚史！大家看完會否有一種「想笑卻笑不出」的感覺？我心想這名所謂奮鬥人士，是否奮鬥3年去逼迫父母掏出一生血汗錢才可以一筆過<font class="highlight">買樓</font>？<p>  我無法知道究竟這段網上帖文孰真孰假？還是只是一種樓盤推廣手法來吸引討論的宣傳策略。不過，社會上的確已經發生一些畸形現象，為了層樓六親不認，又或是「有錢有樓才有親情」的社會悲劇。讓我隨意列出一些荒謬的新聞標題：「父控子賣樓換鎖無情無義，兒子剖白：是爸爸貪婪」、「變賣祖屋講數失敗，姨甥女開槍殺長輩一死三傷」，這些新聞的確荒謬至一個極點！至於那些為層樓逼父母分家產的新聞，更是屢見不鮮。何以今天的香港會如此中毒？為了層樓可以六親不認、人性全面扭曲！<p>  中產再用功也無法安居<p>  然後大家又看見一些新婚夫婦，婚後繼續各自住在雙方父母家中的奇怪現象，而且面對那些愈賣愈細、卻愈賣愈貴的百呎納米樓，細得只能放下一張雙人床，試問在這種居住環境下，又或是新婚即要分居的環境下，香港的新婚夫婦，誰敢或誰能生育下一代！<p>  在這種扭曲奇怪的環境下，哪怕是再專業、再用功的中產人士，也無法上車安居，相反能夠「上車靠父幹」的新生代，卻變成了贏在起跑線的一群，當這個社會只靠炒賣維生，而不再是能者居之、能者上位的環境；當這個社會無論是富貴或貧窮，都變成了一種世襲制時，這個社會還有希望嗎？這種瘋狂的高<font class="highlight">樓價</font>，究竟是一種祝福還是一種咒詛？<p>  zoelamyy@gmail.com <p>  #林日彥 #港股分析 #堅離地城 - 比癌症更恐怖的高<font class="highlight">樓價</font>香港病 <p>  
    <br><br>
    </td>
    </tr>


    </table>



    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">



    <tr>
    <td><font size="2">DOCUMENT ID: 201904150283631 </font></td>
    </tr>
    <tr><td><a href="#toc.201904150283631.5">BACK TO MAIN MENU</a></td></tr>
    </table>

    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
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
    </table>
    <table width="100%" border="0" >
    <tr>
    <td align="center"><h4 >---------- 5 ----------</h4></td>
    </tr>
    </table>



    <a name="body.201904150283165.6"></a>
    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
    <td><font size="2"><nowrap>6 .Hong Kong Economic Journal | General Property in Hong Kong | Circulation / Reach: 83,000 | 2019-04-15
    <br>Newspaper | 
    A12 |地產</nowrap>
    <br>Word Count: 754 words | Image Size: 
    239.9cm<sup>2</sup> (8.3cm x 28.9cm) | Ad-Value: HKD32,229
    </font></td>
    </tr>
    <tr><td><font size="2">Keyword Matched: 發展商,新盤,樓價,成交</font></td></tr>
    </table>
                
    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
    <td><hr></td>
    </tr>
    <tr> 
    <td><font size="5"><b><font class="highlight">新盤</font>周末谷貨尾沽75伙</b></font>

    <br>

    </td>
    </tr>

    <tr><td><br></td></tr>















    <tr>
    <td>&nbsp</td>
    </tr>
    </table>

    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="5">

    <tr>
    <td>
    <p><font class="highlight">新盤</font>過去周末未有大規模推售，<font class="highlight">發展商</font>主力銷售貨尾單位，銷情仍然持續，總括市場消息指出，<font class="highlight">新盤</font>過去周末（13日及14日）共錄得約75宗<font class="highlight">成交</font>，較前周（6日及7日）約165宗大減90宗（約55%），月初至今約半個月，<font class="highlight">新盤</font><font class="highlight">成交</font>已直逼1000宗，金額突破100億元。另外，剛於上周締造亞洲分層戶<font class="highlight">成交</font>價新高的南區超級現樓豪宅深水灣徑8號，<font class="highlight">發展商</font>昨天（14日）加推一伙於本周四（18日）單日招標，招標時間僅一小時。<p>過去兩天未有大型<font class="highlight">新盤</font>應市，過去周六（13日）嘉華國際（00173）大埔白石角嘉熙招標發售16伙，兩天共沽8伙；恒地（00012）西環翰林峰昨天先到先得發售20戶，單日售出4伙。銷情最佳<font class="highlight">新盤</font>則為馬鞍山泓碧，周末兩天售出14伙，吸金約1.27億元。<p><font class="highlight">新盤</font>過去兩天不乏大額<font class="highlight">成交</font>，新世界（00017）西貢清水灣傲瀧昨日錄得本月首宗<font class="highlight">成交</font>，為9座地下D室花園戶，實用面積1700方呎，連424方呎花園，<font class="highlight">成交</font>價3931萬元，呎價23124元；同系北角柏蔚山以1607.8萬元售出3座22樓D室一房戶，實用面積548方呎，呎價29339元。<p>永泰地產（00369）沙田九肚澐灃，周六則以4915.6萬元售出H18號屋，洋房實用面積2084方呎，呎價23587元。<p>過去2天27個項目共沽75伙，本月一手市場暫售出約982伙，較3月同期約1062伙少約7.5%；金額則約105.73億元，較上月同期逾113億元僅低約6.4%。<p>深水灣徑8號周四再推一伙招標<p>南豐及豐資源發展的南區深水灣徑8號，上周以6.0544億元登上亞洲分層單位<font class="highlight">成交</font>價新高寶座，<font class="highlight">發展商</font>昨加推1座6樓B室本周四早上10至11時招標，單位實用面積3641方呎，4套房間隔。該單位對上一層的1座7樓B室，實用面積相同，今年2月以2.286548億元售出，呎價6.28萬元。<p>招標文件內容與前述破紀錄的分層單位大致相若，包括投標時須付上最少800萬元的本票或支票，金額須相當於投標價的5%，買家簽定正式合約時共繳付<font class="highlight">樓價</font>15%，餘款付款日期由買賣雙方協議定出，單位每月管理費為40020元，即每方呎11元。<p>#地產 - <font class="highlight">新盤</font>周末谷貨尾沽75伙 <p>
    <br><br>
    </td>
    </tr>


    </table>



    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">



    <tr>
    <td><font size="2">DOCUMENT ID: 201904150283165 </font></td>
    </tr>
    <tr><td><a href="#toc.201904150283165.6">BACK TO MAIN MENU</a></td></tr>
    </table>

    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
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
    </table>
    <table width="100%" border="0" >
    <tr>
    <td align="center"><h4 >---------- 6 ----------</h4></td>
    </tr>
    </table>



    <a name="body.201904150216940.7"></a>
    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
    <td><font size="2"><nowrap>7 .am730 | General Property in Hong Kong | Circulation / Reach: 400,085 | 2019-04-15
    <br>Newspaper | 
    A27 |FINANCE |法證巴打 |By 黃集恩</nowrap>
    <br>Word Count: 770 words | Image Size: 
    98.0cm<sup>2</sup> (13.8cm x 7.1cm) | Ad-Value: HKD32,112
    </font></td>
    </tr>
    <tr><td><font size="2">Keyword Matched: 成交</font></td></tr>
    </table>
                
    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
    <td><hr></td>
    </tr>
    <tr> 
    <td><font size="5"><b>滬深股通<font class="highlight">成交</font>創新高</b></font>

    <br>

    </td>
    </tr>

    <tr><td><br></td></tr>















    <tr>
    <td>&nbsp</td>
    </tr>
    </table>

    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="5">

    <tr>
    <td>
    <p><p>港交所(388)上周於社交平台宣布，經滬深股通北上買A股於4月8日創下單日<font class="highlight">成交</font>總額新高。買盤加賣盤共763億元人民幣。單日763億元人民幣，連同匯率計算即已超過800億港元。港交所一天<font class="highlight">成交</font>逾千億港元，是以單向(不分買入或賣出)計算，但800億元<font class="highlight">成交</font>仍是可觀。<p>於是再觀看經滬深股通北上買A股資金流，發現每天買入與賣出於今年2月才出現明顯增長，但並不一定是長期資金流入或流出，反映有市場參與者有目標地加強對A股買賣。作為交易所，資金流入流出並非重點，但<font class="highlight">成交</font>增加可令交易收入提升。<p>港交所2018年全年總收入142.5億元，當中63.3億元是交易費及交易系統使用費，其中23.8億元是聯交所及透過滬深港通買賣股本證券，此收入佔總收入約15%。今年首季港股<font class="highlight">成交</font>平均約一千億元，與2018年全年平均相若，但滬深港通增加應對收入有正面幫助。港交所將於5月8日公布今年第一季季績。<p>作者為法國巴黎銀行上市衍生產品部執行董事、金管局持牌人，以上純為個人意見。本資料由法國巴黎銀行香港分行刊發，其並不構成任何建議、邀請、要約或遊說買賣結構性產品。結構性產品並無抵押品，如發行人或擔保人無力償債或違約，投資者可能無法收回部分或全部款項。產品價格可急升或急跌，投資者或蒙受全盤損失。投資者購買時所依賴的是發行人及擔保人的信譽。有關資產過往表現並不反映將來表現。牛熊證備有強制贖回機制而可能被提早終止，屆時(i)N類牛熊證投資者將不獲發任何金額；而(ii)R類牛熊證之剩餘價值可能為零。投資者應仔細查閱基本上市文件(包括基本上市文件增編)及補充上市文件內有關結構性產品之相關風險及詳情，自行評估風險，並諮詢專業意見。法國巴黎證券(亞洲)有限公司為結構性產品之流通量提供者，亦可能是其唯一巿場參與者。法國巴黎證券(亞洲)有限公司、法國巴黎銀行香港分行及其聯屬公司均不對結構性產品: (i)能否於預定上市日上市及(ii)其上市後之流通量，作出任何聲明或保證。<p>
    <br><br>
    </td>
    </tr>


    </table>



    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">



    <tr>
    <td><font size="2">DOCUMENT ID: 201904150216940 </font></td>
    </tr>
    <tr><td><a href="#toc.201904150216940.7">BACK TO MAIN MENU</a></td></tr>
    </table>

    <table bgcolor="#FFFFFF" width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
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
    </table>
    <table width="100%" border="0" >
    <tr>
    <td align="center"><h4 >---------- 7 ----------</h4></td>
    </tr>
    </table>


    <hr height="1" width="100%">
    <font size="1">
    WiseNews Wisers Information Limited Enquiry: (852) 2948 3888 Email: info@wisers.com Web site: http://www.wisers.com<br>
    Copyright (c)2019Wisers Information Limited. All Rights Reserved.
    </font>

    </body>
    </html>`
var txtText = `
    文章总数: 5 篇
    ===========================================================================
    1. 凤凰新闻 APP -  (丁一凡：美国别弄错对象，你面对的是一个比你还大的市场) 2019-06-04 凤凰新闻-头条   观察者网


    
    -----------------------------------------------------------------------------





    文字快照：https://ishare.ifeng.com/c/s/7nDvag1yI6y




    【眼下，美国贸易关税、技术封锁“双管齐下”，企图吓阻中国。中国始终立场坚定，“不好战也不惧战”，且做好了打贸易持久战的准备。第十一轮中美经贸高级别磋商结束后，刘鹤在美国接受采访时表示，合作是双方唯一正确的选择，但合作是有原则的，在重大原则问题上中方决不让步；对中国而言，最重要的就是做好自己的事情。中国国内市场需求巨大，供给侧结构性改革将带来产品和企业竞争力的全面提升，财政和货币政策仍有充分空间，中国经济前景非常乐观。只要我们坚定信心，共同努力，任何困难都不怕，一定能保持经济持续健康发展的良好态势。

    那么，中国经贸、技术该如何打好这场持久战？对此，观察者网采访了国务院发展研究中心世界发展研究所前副所长丁一凡。以下为采访全文：】

    观察者网：丁老师您好，首先借用习总书记最近讲的一句话“最重要的还是做好我们自己的事情”，中国在面对这场贸易战时讲出“不挑战、但也不惧战”，做好打持久战的准备，那么中国经济的底气和信心在哪里？

    丁一凡：中国经济确实是一个庞然大物，贸易战对中国来说并没有那么大影响。过去整体贸易对中国经济增长的作用非常大，但近来已经没那么明显了，尤其对美贸易在中国整体贸易出口中的占比又变得更小，所以如果美国完全掐断中国进口，对中国影响也不会那么大。况且，美国对中国产品的依赖还很大，靠加征关税并不能禁止中国对美国的出口。

    2018年就是一个典型例子，虽然关税提高10%，但中国对美出口反而创了纪录：去年中国对美贸易顺差4000多亿美元，占美国商品贸易逆差的一半以上。这恰恰说明美国对中国产品的依赖非常大，即使美国挑起贸易战、要提高关税，美国企业仍需从中国进口，所以受损最严重的是美国企业而不是中国企业。美国进口企业的损害特别大，因为他们要支付这些关税，所以很不满。

    2018年中国经济增长速度，原本定的是6.5%，最终核算数据超出预测，达6.6%，也就是说对中国经济的实际影响非常小，甚至对出口都没什么影响，所以美国这些行为的意义并不大。我们甚至坚信这场所谓的“贸易战”只是美国人搞得一个对美国经济和美国企业都很不利的东西。

    华为鸿蒙系统，是华为开发的自有操作系统。图片来自ICPhoto

    观察者网：目前中国制造业发展趋势看起来不错，相比之下美国的制造业前景却显得衰弱，但另一方面中国也正处于制造业升级、经济结构转型的关键期，就我们自身来讲，是否存在一些“软肋”，尤其要在这场中美贸易摩擦中特别小心？

    丁一凡：有，但不一定和贸易战有关，比如美国现在搞技术封锁，让我们意识到问题所在。其实贸易战打下去，只会让美国体会到继续闹下去对自己企业在美投资非常不利。从2018年挑起贸易纠纷以来，美国的一些大型跨国公司在美国本土的实体投资，也就是制造业投资，下降40%。他们意识到如果要提高所有企业的零部件价格，在美国生产就不值得了，所以放弃在美投资，反而在中国增加投资。

    这说明外国企业看好的是中国市场，因为中国市场更稳定，中国政府政策更稳定，而相较之下美国政府不靠谱，美国投资环境的不确定性更大，所以他们宁可到中国投资，也不到美国投资。从贸易战角度来看，对美国不利，而不是对中国不利。

    但现在美国又怂恿企业“断供”华为。因为华为需要从国外进口大量零部件，是很多美企的大客户，所以现在美国政府就想通过这种手段来打垮华为。这种做法很不诚实，美国自诩是市场经济，市场经济要讲合同、讲信用，企业跟华为是一种供货关系，双方互有信用，结果美国政府插一杠子说，某某企业不能有例外，这就是美国政府在破坏美国企业的契约和信用。

    事实上，这是一个极其重大的事：将来中国还能不能相信美国企业？中国还能不能在生产过程中考虑跟美国企业合作？这对美国企业的破坏力相当巨大。当然也是给中国提了一个醒，未来整个全球化生产过程中，中国可能会越来越避开美国的供货渠道，而更多寻求与欧洲、日本或韩国企业合作，跟所有这些企业合作都比和美国企业合作保险，因为美国政府不靠谱，美国政府会破坏企业的信用。

    贸易战让美国企业付出巨大代价，技术战则是要彻底毁掉美国企业作为全球供应商的信誉。未来外界不敢轻易订购美国企业的产品，美国企业在世界市场的日子会十分难过，因为它们被贴上了“不可靠的合作伙伴”标签。现在特朗普政府是跟美国企业较上劲了，他做得这些事都是对美国企业极其不利的。

    短期内，中国企业可能会很痛，但特朗普也打到了美国企业，双方都不好受；但从中长期看，美国企业会更不好受，因为他们有可能会失去中国市场。现在美国企业违约不供货或是今后又出其他状况，那中国的相关企业就会发现自己的机会来了。原本中企生产的相关零部件可能不行或价格优势不大，但既然华为有需求，就会有很多中国企业冒出来做这些事，另外还有欧洲、日本、韩国企业也想进场替代美国企业，所以美国政府高估了美国企业和美国产品的不可替代性。再说，现在世界上已经没有什么了不起到无可替代的产品，美国政府这么干，只会让大家去寻找替代品，受损最大的就是美企。

    观察者网：回到中国科技企业或制造企业转型升级的问题，短期内美国打技术战可能会打乱我们的脚步，那从长时段来看，我们该如何化危为机，促进中国制造业升级和经济结构转型？

    丁一凡：短期内肯定会有点痛苦，中国企业必须沉下心来做技术研究。过去一段时期内，我们认为，既然是全球化，大家都在一个生产链内，你在这个方面有优势，我就不重复劳动转而做下一步。但特朗普政府强迫美国企业封掉操作软件、平台等做法给中国企业一击，今后中企就会慢慢去做一些基础性的或者自己没有的东西，过去认为只要别人提供就不需要自己做的事也会逐步做起来。其实这是一个机会，比如说我们电脑操作系统基本上用微软，很便宜，甚至还有中国人做盗版，最终导致国内的一些软件公司无法存活，几乎所有的操作软件都是别人的。

    目前的情况就提醒我们要自己研究，其实这些操作软件很多都是开源码，没有想象中那么困难。以前觉得既然能非常廉价或免费获取，就直接使用，久而久之成习惯，但现在也许就不会满足于现状。中国消费者因为担心说不定哪天突然被外国制裁或者某项外国产品突然停工，所以出于安全考虑，可能也会越来越多选择国产软件和操作系统。中国是一个十几亿人口的大市场，使用或更换这些产品就会是几亿人的市场，因此无论是新兴企业还是新兴技术，都比较容易存活。由此看来，贸易战或技术封锁，给我们提供了更好的机会来调整自己。

    此外，有些涉及经济结构或制造业升级的问题，早在贸易战开始前就已经进行，比如产业链延长的问题。中国企业已慢慢将部分产业链转移到周边国家，随着贸易战开始，转移趋势会越来越大。有人担心将生产转移出去后，会不会导致中国空心化？其实不完全如此。即便转移出去还是需要继续做产业升级，而且中企将投资和产业链更多延伸到其它国家后，整条产业链还是控制在自己手中，所以到目前为止应该还没有什么值得担心的。

    好处是，中企将产业链部分转移出去后，可以更好地享受国际市场上的各种比较优势，比如搬到柬埔寨、老挝等国后，土地等很多要素比中国便宜，降低生产成本，增加利润和发展空间。有些企业还因此规避了贸易争端，比如说我们向美欧市场出口的很多产品是有配额的，让中国企业很难受，但转移到其他地方后就没有配额问题了，企业的生产和销售都有大幅增长。而且无论从技术投资还是销售渠道来看，最终的产业链都实际控制在中国企业手里，并不像部分人所认为的“中国企业被掏空了”。

    另外，中国目前面临着劳工逐渐短缺的状况，沿海地区的一些加工企业现在要找到合适的劳动力比较困难。中国拼命发展这么多工业机器人之类的，某种程度也是为了替代劳动力，所以转移产业链并不会造成大量就业问题。

    不过，有些半导体加工企业可能会暂时遇到困难，这些工厂雇了很多工人，现在因为技术战、贸易战，工厂订货量急剧下降。但这类企业的最大问题还是技术程度太低或能够掌握的环节太少，所以需要培养中国企业的创造力，使生产出来的产品成为无法替代的东西，提升竞争力。比如，台积电曾将代工或加工品做到无与伦比，成本核算也控制得特别好，一旦出现什么问题，别人都离不开它。我们企业还需要做更多尝试，找到更多技术高地，让自己变得不可替代。

    观察者网：您刚提到企业外移的问题，现在国内外媒体也不时传出类似消息，比如有些外资企业准备撤离或裁员等，就您了解现在这种情况大致如何？会对我们的经济带来什么影响？

    丁一凡：这个情况并不是贸易战引起的，早就已经开始了。近年来中国国内生产成本上升，某些不复杂的加工企业开始外迁已有五六年了。国内的土地、劳动力等要素价格上升，有些加工企业只是从事简单劳动，像耐克球鞋之类的工厂早就开始搬迁，而且大概也回不来了；因为不可能让中国工人再接受更低的工资，或者地方政府减免土地出让费等，再说现在地方政府的财政也没那么宽裕。

    所以其实该发生的早就发生了，我们也不必恐慌，任何地方都发生过这样的事，我们要做的是发展替代性产业或工厂，广东当年“腾笼换鸟”不就是这个思路嘛。想办法开展培训，提高劳动力素质，生产附加值更高的产品，培养新兴产业，这样才能在劳动力成本上涨过程中依然保持制造业的能力。

    观察者网：一方面有些技术含量较低的企业出走是一个必然结果，但同时我们也希望引进更多外资企业或外资直接投资，那么今后在引进外资时有哪些是特别值得我们注重的？

    丁一凡：我们现在接受外国投资时，首先必须得符合国内环保标准、技术标准等，只要这些条件都符合的话，我们非常欢迎的。从2018年贸易战以来，中国的投资还是保持增长，当整个世界经济体系对外投资下降的情况下，中国表现非常亮眼；全球范围内真正外来直接投资增长的国家并不多，中国是非常明显的积极例子。这证明外资都看好中国未来发展前景，中国市场还会扩大，未来经济增长还会持续，所以外资愿意进来，这是信心问题。

    观察者网：此前国务院副总理刘鹤在美国受访时表示中国不需要担心，因为我们自己有一个非常巨大的内部消费市场。更有优势的是，从平均人口分布密度来讲，整个市场的分布率比较密集，那么问题是，该如何更好地盘活这一巨大空间优势，有哪些突破口？

    丁一凡：现在中国消费就很厉害，中国消费市场的增长也很强劲，最近两年的消费比例都超过了投资比例，所以是非常好的状态。我觉得，刘鹤总理的这些话主要是说给美国人听的，让美国人意识到他们之所以老来威胁我们，就是因为过去跟人家比美国都是最大的市场，所以美国特别得意，拿着自己国内的封闭市场去威胁对手让步——你要不让步，我就不开放美国市场，当年对日本、欧洲是这样，现在对中国也是如此。

    但美国没有意识到的是，现在它的谈判对象不是日本，也不是欧洲，而是中国——一个比它还大的市场。没有什么道理去威胁一个比自己国内市场还大的国家，如果中美双方封闭市场，美国的损失肯定要比中国的大，像福特、通用等美国企业在中国的盈利远远超过在美国本土的盈利。其实针对华为也是如此，美国根本不允许华为进去，但美国企业思科还在中国运营，有很多设备还是用的思科产品。所以如果要封闭市场，当然是美国惨了。

    刘鹤副总理在美国提这件事，主要是为了提醒美国人别弄错对象，要明白如今你面临的是一个比你还大的市场，如果相互封锁，你的损失要超过我。在中国这个大市场里面，我们的空间存量还是非常大的。

    观察者网：我们应如何更好地利用这个巨大的存量空间？

    丁一凡：政府手中有各种各样促进消费的政策，每次要拉动内需的时候，政府都会施行相关政策，比如鼓励更换汽车，以旧换新，或是给予一些补贴。不过现在中国的消费市场表现挺好，没有必要采取更激进的措施去刺激，毕竟说到底这些也都是政府的财政补贴，现在还没到真正需要使劲扩大消费的时候。

    观察者网：您刚讲到政府政策的问题，其实之前刘鹤也表示中国的政策工具比较充足。我们注意到今年以来央行三次降准，其中一次就是在本轮中美谈判前一天，再来财政部近日发布对芯片软件企业的减税优惠等，这些政策工具会带来实质效果吗？长远来看，会不会带来一些不想要的影响？

    丁一凡：并不是所有的政策工具都会那么有效，因为有些是结构性问题。如果结构不改革，只是拿政策来刺激，最终起不到该起的作用；况且政策是有限的，有时必须通过结构改革才能解决问题。政策总是暂时性的，结构才是比较长期的。

    另外，政策有时候会被一些人利用，导致原本希望达到的效果没有达成，反而产生其他负面效应，比如当年鼓励基础设施建设的一些钱就流到了房地产市场，所以经济政策需要各级政府的监督执行，不能政策一出就不管了。

    观察者网：前面您就中国内部改革谈了很多问题，那么针对开放呢？现在外界都在讨论中国进一步开放措施，去年纪念改开40周年也释出不少利好。最近有专家学者认为，自贸区、FTA、“三零”政策等都应该进行试验推广，FTA相当于中国的第二次入世，不能在入了WTO后却在新一轮FTA中出圈。您对此有何看法？在中美贸易摩擦下，中国如何继续推动开放？

    丁一凡：对外开放总体来讲对中国经济是有益的，但我们不能被人家把刀架在脖子上开放，而且现在美国人逼着中国开放是一种不对等的开放，他们强迫我们开放的领域，事实上他们自己也还没对我们开放。一方面对我们喊要对等，但另一方面他们自己在金融等领域的开放完全不对等。从这个角度来看，我们不能笼统地说开放就是好，一定要认真看清楚到底是什么样的开放，而且要按照实际能力开放，比如金融领域，我们始终按照自己的能力水平一步一步开放，但美国人想逼迫我们全面开放。当年美国逼着日本全面开放以后，就把日本经济搞乱了，日本出现泡沫经济以及破裂后“失去的十年”，都跟美日贸易谈判有关。

    不能简单地认为开放对中国有利、美国人逼我们开放是为我们好，尤其在贸易战的时候，绝对不能有这种想法。刀架在脖子上的开放怎么会好呢，这是极其不平等的，开放一定是件平等的事情。

    观察者网：如果从中国自身需要来讲，今后可能会着重在哪些方面进一步推动？

    丁一凡：外界最希望的就是开放服务业，因为他们有服务业优势。但我们一定要注意看这件事是否和贸易战联系在一起，如果你要和我打贸易战，那我肯定不对你开放，但我有可能向其他地方开放，这种开放方式是我决定的，比如说我可能对美国企业不开放，但对欧洲企业开放，因为欧洲不打贸易战，我就跟欧洲企业谈，对欧洲企业开放，这完全可行。

    开放本身不是目的，而是一种工具，一定是利用开放来促进经济发展的；要利用这个手段达到更好的目的，这才是根本所在。就像“三零”政策等，将来都是一个对等的问题。如果中国要对外实行“零关税、零壁垒、领补贴”，那么其他国家也得同样对待中国。凭中国企业现在的竞争力，不怕别人，是别人怕我们。如果他们能接受这个政策，我们也可以实行，我们不太在乎。

    观察者网：就像您刚举例的，现在有部分人对中美贸易战表现出恐惧、退让甚至唱衰中国经济，您对这种舆论风向有什么看法？

    丁一凡：首先一定要认清别人是舆论操纵专家，他们是故意制造舆论声势，但我们不太会、也不习惯做这些事。我们的媒体中有些人很愿意忽悠别人，民众中也有些人根本不信我们讲的话，是因为这些人本身对中国缺乏了解，对美国更是缺乏了解，不在乎美国如何也不在乎中国如何，脑子里想的全自己制造的概念，所以我们需要用事实来证明。贸易战一年半以来，美国有巨大损失，不仅美国企业，还有美国消费者、美国农民，如果这场贸易战继续打下去，美国经济可能会有巨大灾难。

    但对中国经济来说，没有太大影响。有很多人担心，但也只是担心而已，他们并没有看到真正发生的故事，就连那些对美国出口依赖极其严重的县市都没有受到太大冲击。如果他们跑到广东、跑到那些集中对美出口的县市去看一下，发现那里的经济、生产、出口都没有受到太大影响，他们就应该明白中国没有太大问题，多做点调研就能明白。总是心理恐慌的人就是因为自己不了解，也没去做调查。

    当然，我们也要防止在自媒体或社交媒体上有人散发恐慌信息。他们是在替别国说话，也有人可能拿了好处，也有人可能是出于立场问题等等。所以，对媒体来讲，需要做最基本最真实的报道。

    本文系观察者网独家稿件，未经授权，不得转载。





    原文连接：https://ishare.ifeng.com/c/s/7nDvag1yI6y

    免责声明：慧科和该网页的作者无关，不对其内容负责。该快照或内容仅为索引不代表被搜索网站的即时页面，需要查看完整资讯请点击链结。


    文章编号: [201906040419105]
    -----------------------------------------------------------------------------
    本内容经慧科的电子服务提供。以上内容、商标和标记属慧科、相关机构或版权拥有人所有，并保留一切权利。使用者提供的任何内容由使用者自行负责，慧科不会对该等内容、版权许可或由此引起的任何损害 / 损失承担责任。




    2. 大公报 -  (积极考虑并购湾区看好广深 领展拟回购6000万个基金单位) 2019-06-04 经济 A16 财经头条 


    
    -----------------------------------------------------------------------------









    领展（00823） 截至今年三月底止年度收益微增0.1% 至100.37亿元，以相同基准计升7.2%，每基金单位末期分派140.55 仙升9.57%。谈及中美贸易争端对集团的影响，行政总裁王国龙表示，贸易战对消费影响不明显，故对生意影响不大，惟担心对融资和利息等方面的影响。领展同时预告，今年预计回购约6000万个基金单位。

    大公报记者林静文

    王国龙认为，在贸易战影响下，内地其中一个应对方法便是推动内需，料利好内地物业租客。他认为，集团位于香港的商场集中民生及必需品，故社区商场业务相对稳定，受经济周期下调的影响较少。主席聂雅伦表示，旗下物业组合非高档零售，对零售租金前景仍有信心。

    领展去年香港物业组合平均每呎每月租金同比增长9%至68元。王国龙坦言，租金增幅有好成绩，租客营业额表现亦较优于同业，未来亦会将客户租金与营业额比例维持在适当水平。至于对租金管制建议的看法，聂雅伦回应称，尊重政府决定。

    王国龙：近期考察项目增多

    领展近年积极进军内地市场，截至三月底止，分别有86.8%和13.2%资产分布在香港及内地。王国龙对近年内地项目的租金增长感到满意，平均租金增长达30.2%，优于香港项目，其中上海项目租金有23.8%升幅。他表示，在大湾区中，更看好广州和深圳的发展机遇，但强调香港是主要投资地，未来会视乎具体情况，积极考虑在香港、内地及其他海外市场的并购机会，没有特定的收购比例。

    不过，贸易争端使个别公司融资出现问题，市场资产物业放售增加，王国龙称会密切留意市场发展，而近期考察的项目亦较过去多。

    股份回购方面，领展去年6月宣布年内回购最多8000万个基金单位，惟最终仅回购4210万个基金单位，公司额外分派每基金单位2.51港仙。王国龙解释，主要是由于年内屡次进行出售和收购资产引致的禁售期较长所致，同时计划今年回购约6000 万个基金单位。去年领展出售12项非核心香港物业，并收购北京和深圳两项物业。

    本港物业收益总额微跌

    至于今年的资产提升项目，领展计划斥资5.8亿元对旗下位于将军澳、慈云山及南昌等4个项目进行升级，预计2020年初完成。另有24个项目正在研究当中，涉及资本开支超过12亿元。

    另方面，领展昨日同时公布「2025愿景」。王国龙期望，至2025年期间，资产组合价值每年复合增长率达高单位数，每基金单位分派持续增加，同时维持稳健的信贷评级。

    业绩期内，领展香港物业收益总额跌1.4%至90.11亿元，内地物业收益总额增16.1% 至10.26 亿元， 相同基准计分别升7.2%和7.6%。年内，每基金单位资产净值同比增长7.7%至89.48元，投资物业组合估值为2184.96亿元增7.6%。可分派总额达57.23亿元，全年每基金单位分派升8.6%至271.17仙，其中包含酌情分派2.51仙的每基金单位末期分派140.55仙。

    管理层言论表

    谈贸易战影响

    ·贸易战对消费影响不明显，但关注对融资成本及债务造成的影响

    谈租金调整

    ·旗下商场租户生意较同业好，会将租金和营业额比例维持适当水平

    谈未来并购

    ·香港是主要投资地， 会继续物色香港、内地及其他海外城市的投资机会

    谈「2025愿景」

    ·目标至2025年，资产组合价值每年复合增长率达高单位数

    ####

    领展香港物业收益总额跌1.4%至90.11亿元

    王国龙表示，贸易战对消费影响不明显大公报记者麦润田摄

    


    文章编号: [201906040222224]
    -----------------------------------------------------------------------------
    本内容经慧科的电子服务提供。以上内容、商标和标记属慧科、相关机构或版权拥有人所有，并保留一切权利。使用者提供的任何内容由使用者自行负责，慧科不会对该等内容、版权许可或由此引起的任何损害 / 损失承担责任。




    3. 澳门日报 -  (巩固旅游业稳住经济基调) 2019-06-04 经济 A10 一家之言 春耕


    
    -----------------------------------------------------------------------------









    官方事先预告的GDP中止了升势，为外界做好管理预期。昨日公布数据一如早前所披露，主要因整体需求疲弱，尤以固定资产投资跌逾三成，直接拖低经济表现；且中美贸易战阴霾影响，服务出口现轻微收缩，基本在预期范围。

    固定资产投资伴随项目竣工而减少，若没有新一轮大型投资接力，短期固定资产投资下跌可以预期。不过，由于未来路凼、新填海区等将有不同工程开展，相信固定资产不会长期处于萎缩状态。反而，在阴晴不定的外围气氛下，对于澳门服务出口带来短暂的波动，抑或可能将有新一轮调整期出现，目前难以估计。

    由于中美贸易战影响全球经济前景走向的不确定性，而且短期内贸易战无法解决的预期正在升温，由此伴随的风险因素也在增加，满布忧虑的经济前景下，不仅是工商界，打工仔消费投资亦会受到约束。虽然第一季服务出口只是轻微下跌，但当时市场正憧憬中美贸易战有缓和迹象，投资市场亦走高。但自踏入五月，贸易战争拗升级，急转直下的投资气氛，可以预期，第二季的服务出口亦将受影响。

    澳门经济直接受外围影响，无法独善其身，只能采用措施主动应变。然而，澳门可用的政策毕竟有限，如扩大公共工程拉动经济虽可取，但由于要开展相关工程项目所耗程序时间，要市场受惠，恐怕需要一段较长时间。

    澳门一直以服务出口为支柱产业，要稳住经济基调，更应该加大投放资源，巩固旅游博彩业发展，并同步加快推动其他产业发展。

    今年以来，由于澳门旅客量可以保持升势，在经济不明朗下，却成为了稳定经济的动力之一。尤其提供餐饮、零售、服务业为主的中小企，他们更是重要客群。然而，面对旺丁不旺财的困局，如何转危为机，即将举行的“艺文荟澳”活动，强化澳门文化艺术气色的形象，有助开拓新客群。但是澳门更需要提升服务质素，才是留客的核心。

    春  耕

    


    文章编号: [201906040255762]
    -----------------------------------------------------------------------------
    本内容经慧科的电子服务提供。以上内容、商标和标记属慧科、相关机构或版权拥有人所有，并保留一切权利。使用者提供的任何内容由使用者自行负责，慧科不会对该等内容、版权许可或由此引起的任何损害 / 损失承担责任。




    4. 香港商报 -  (特朗普算盘打得响吗？) 2019-06-04 香江评论 A03 商界心声 李秀恒


    
    -----------------------------------------------------------------------------











    美国总统特朗普5 月主导一系列针对中国及中国企业的举动，再次向世人暴露其霸凌和反覆无常的本性。在美中第十一轮经贸谈判前夕，特朗普前一刻还在「放风」称谈判有望很快达成协议，后一刻却舞起关税大旗，向中国商品加征关税；在美中谈判陷入僵局后，特朗普这边释出有意与习近平主席在G20 峰会上会面的消息，但转头又颁布连串措施来封杀华为。

    惟在收到如微软等国内大企业反对和经济数据不佳的消息后，特朗普又马上向华为发出为期90 天的临时许可，推迟对华为及其附属公司在美所实施的交易禁令，狡黠嘴脸，表露无遗。反观华为创办人任正非在遭受一连串不公平打压后，依然处之泰然，还呼吁国内民众不要把华为事件民粹化，不要杯葛美国商品，其胸襟与特朗普一比较，高下立见。

    特朗普VS任正非

    特朗普常以成功商人、「做刁」（Deal）专家自豪，还在上世纪80 年代「请枪」出版着作《The Artof The Deal》（交易的艺术），总结11 条「特式」谈判心法，这也许可以解释为何特朗普出任总统后，常常喜欢用不按国际常规出牌的伎俩，来为自己争取更多的利益。只可惜国际关系并非商业谈判，特朗普的「非常规」手段和视国际规矩如儿戏的做法，已引起越来越多国家的不满。这也解释了为何越来越多国家会像意大利般，不顾美国反对，主动加入由中国倡导的「一带一路」建设，也令4 月下旬在北京举行的第二届「一带一路」国际合作高峰论坛取得颇丰硕的成果。

    与特朗普的狡黠相比，任正非的表现显得更具远见。遭受美国政府封杀后，任正非在接受采访时表示， 「华为产品只是商品，如果喜欢就用，不喜欢就不用，不要和政治挂钩，也千万不能煽起民粹主义的风。」同时，他很自信地表示： 「华为没有美国也能生存，度过磨合期后，华为会更强大。」他用登坡来形容华为与美国的竞争，当彼此分别在南坡和北坡登上山顶的时候， 「我们不会和美国拚刺刀，而是会去拥抱」，目的是为改善人类生活而共同努力。

    笔者早前曾在本栏撰文提过，早在去年8 月，那个时候还未发生「孟晚舟事件」，中国国防大学金一南教授在分析中美贸战时，便已提到了任正非的名字，认为中国应对贸易战最大的本钱，并非外汇储备、美国国债或贸易盈余，而是像任正非那样的民众。那时，任正非为了华为的发展，经常出入阿富汗、利比亚和伊拉克等战乱地区，探望当地的员工。一位企业家何故如此不畏危险而频扑于第一线？任正非的回应是： 「除了胜利，我们已经无路可走。」这两句话，放在今天依然掷地有声。

    美经济数据呈下滑

    至于特朗普，成为商业大亨后，美国人说他30 年来都没有接受过任何教育和培训，所以其思想认知和思维，还停留在过去的年代，仍未懂得全球化经济发展到今天，很多产业链已形成我中有你，你中有我的格局，所以才会拿过去那一套来处理现代的问题，令到很多美国企业提心吊胆。

    事实上，已有经济学家分析，特朗普提高中国商品关税的做法，尽管会为中国企业带来麻烦，但亦会令美国企业增加成本，并可能转嫁给消费者。微软等多间美国科技企业去信美国商务部，表达对华为被封杀的关注，称禁令将令美国在国际研究合作中孤立，最终影响美国利益。反观中国，有庞大的内需市场支撑，亦有「一带一路」沿线市场开拓，美国关税影响有限。高盛一份研究报告亦指出，去年美国对中国进口商品征收关税的成本，已完全由美国企业和家庭承担，中国出口商品没有明显降价。

    另一方面，中美贸易战持续对美国经济增长所造成的损害，已经逐渐显现。近期美国国债十年期债息跌至19 个月低位、国债孳息率倒挂幅度扩大至金融海啸后最大、非国防飞机订单在4 月大跌25.1%，以及5 月制造业活动指数触及近十年低点等，种种数据都显示，美国经济已呈下滑迹象。

    欲以贸战操弄选情

    特朗普对这些情况没可能不知情，否则他不会在增加关税后「善意」地提醒美国企业， 「只要在美国国内生产，就能够轻易避开关税」；不会在向中国强势施压的同时仍不「翻脸」，还表示愿意继续商讨；在看到美国4 月经济数据下跌后，立即给予华为临时许可，以及在5 月28 日没把中国列为汇率操纵国。

    那特朗普究竟有何图谋？从最近他不断提醒中国，「不要等待明年大选选出民主党总统再谈判」，以及「在他第二个任期时，对中国的协议条款只会更差」等言论可以窥见，面对只剩下一年多的任期，特朗普现时所做的一切，都是为了竞选连任而铺路。利用中美贸战来牵动选情，无疑是条妙计，但这算盘打得响吗？

    世事如棋，中国不乏弈棋高手。2018 年中国对美国出口商品只占中国GDP 的3.6%，即贸易战对中国所造成的伤害是可控的，反观美国的消费者、农民现在已经开始因商品价格上升大吐苦水。特朗普或期望利用贸易战操弄选情，但选民可能等不了那么久，未来事态发展如何，大家不妨放眼量。

    香港经贸商会会长李秀恒

    ####

    近日，中美贸易战有升级迹象。




    文章编号: [201906040183317]
    -----------------------------------------------------------------------------
    本内容经慧科的电子服务提供。以上内容、商标和标记属慧科、相关机构或版权拥有人所有，并保留一切权利。使用者提供的任何内容由使用者自行负责，慧科不会对该等内容、版权许可或由此引起的任何损害 / 损失承担责任。




    5. 香港商报 -  (经济挑战重重谨防楼市风险) 2019-06-04 商报头条 A01 社评 赵燕玲


    
    -----------------------------------------------------------------------------









    受累于中美贸易战及外围市场动荡，香港经济已面临很大下行压力，GDP 增速大幅放缓，惟本港楼市在整体经济环境都较疲弱之时却反而「升得劲」，自今年1 月至4 月香港楼价已连升4 个月，4 月整体楼价较去年底已反弹9%。虽然楼市「向好」受新盘推出、买家需求等多种因素带动，但亦绝不能忽视整体宏观经济环境，在经济放缓疲软之时，楼价很大可能出现调整转向，港府必须谨慎提防楼市泡沫加剧；投资者亦须看到风险因素，小心入市。

    现时，环球经济增长都受挫，外围市场需求不断减少，拖累香港经济放缓，早前港府统计处公布第一季度GDP 降至0.5%，录得十年以来最差经济表现；香港外贸出口更受冲击，从去年底以来进出口持续下跌6 个月。不止外贸行业，香港各行各业亦都受到不同程度冲击，昨日财政司司长陈茂波出席立法会财委会就分析简报了香港经济最新情况：外部需求欠缺动力拖累本港内部需求亦减弱，零售业销货值在今年首四个月按年下跌了2%，整体投资开支亦下跌7.1%，而香港股市在5 月跌幅已累积达到约9%，是去年10 月环球股市大幅调整以来最大跌幅。

    可见，如今香港内外市场都面临很大下行风险，投资者切勿对经济走向和楼市走向盲目乐观。过去几月，香港楼市似乎逆势而上，在经济放缓之时却升得「疯癫」，楼价升到快破顶，1 至4 月的月成交宗数亦较去年第四季急升82%，不过这样的升势料很难持续维持。首先，年初以来楼价上升受惠于美联储释放鸽派信号，减慢加息步伐，纾缓了不少投资者对本港加息和借贷成本上升的担忧，但是中美贸易战持续美国经济是否能达到预期增长目标充满不确定性，因此美联储未来货币政策走向亦充满不确定性；同时，过去几月香港新盘数量亦增加，推盘速度加快，导致楼市交投量活跃，然而转入下半年之后，发展商推盘步伐逐渐放缓，楼市亦很难维持如此炙热交投量。

    应该说，香港投资情绪在过去几月上涨，很大程度上是因为中美贸易谈判频频传出利好消息，令市场看好贸易战或很快结束，再加上内地推出系列刺激经济政策，带动本港股市反弹，为不少投资者带来财富效应，大家对经济前景亦充满信心。不过随着中美谈判破裂停滞，双方关税大战再度燃起，且贸易战出现长期持续态势，这都令市场整体情绪转为悲观，投资变得消极审慎，这从5 月份港股跌幅就可明显看出。所以，中美贸易战料很难短期内结束，香港经济和市场亦将继续承受很大下跌压力，这势必会拖累楼市，近日香港各大地产股纷纷下跌，普遍认为地产股一般较楼市领先3 至6 个月，所以地产股转跌或预示着香港楼市在下半年亦将出现转向调整，投资者不得不小心留意。

    总之，整体经济面临重重困难挑战，香港楼市不可能脱离经济形势，亦会随之有下行风险，过去几月楼价升势难以延续，投资者必须谨慎评估香港楼价走向，切勿盲目借贷入市，防止出现负资产或难以承担供楼压力。

    香港商报评论员赵燕玲

    


    文章编号: [201906040183327]
    -----------------------------------------------------------------------------
    本内容经慧科的电子服务提供。以上内容、商标和标记属慧科、相关机构或版权拥有人所有，并保留一切权利。使用者提供的任何内容由使用者自行负责，慧科不会对该等内容、版权许可或由此引起的任何损害 / 损失承担责任。


    =============================================================================
    慧科讯业有限公司 查询请电: (852) 2948 3888 电邮速递: sales@wisers.com 网址: http://www.wisers.com
    慧科讯业有限公司（2019）。版权所有，翻印必究。`
var docText = `<p>Total number of document(s) : 4 </p><p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ #1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p><p>| 2019-04-15 | Oriental Daily News | B04 |產經 |</p><p>General Property in Hong Kong | Newspaper | Word Count: 918words | Circulation / Reach: 300,000</p><p>Image Size: 493.9cm-sq (25.2cm x 19.6cm) | Ad-Value: HKD97,302</p><p>Keyword Matched: 中原,按揭,利嘉閣</p><p><strong>按揭</strong>戰蔓延綠置居 </p><p>綠置居麗翠苑在三月底進行揀樓，即令<strong>按揭</strong>戰由居屋擴展至綠置居市場，銀行更將兵源分散，藉此同時應付兩條戰線。大型銀行及<strong>按揭</strong>代理職員近日聚集在觀塘揀樓中心，提供媲美居屋<strong>按揭</strong>優惠搶客，包括高額現金回贈等，當中以中國銀行（香港）（02388）態度較進取。</p><p>部分銀行設立臨時<strong>按揭</strong>中心，供綠置居準買家申請。</p><p>香港房屋委員會推出的長沙灣麗翠苑提供2,545個單位，以市價四二折出售，單位售價介乎93萬至306萬元，而且均可做九成半<strong>按揭</strong>，並有政府擔保，成為銀行必爭的低風險貸款市場。</p><p>據本報記者實地視察，中銀香港、豐銀行及恒生銀行（00011）均於觀塘建生廣場的揀樓中心門外部署<strong>按揭</strong>部職員，待準買家步出中心，旋即上前推銷<strong>按揭</strong>計劃，中銀香港及恒生更於建生廣場內，各自租借場地設立臨時<strong>按揭</strong>中心，供準買家申請<strong>按揭</strong>。</p><p>專家：水頭足亦宜借到盡</p><p>據悉，各大銀行為綠置居提供的<strong>按揭</strong>條款看齊新居屋申請，實際<strong>按揭</strong>利率為2.375厘，現金回贈由貸款額的2.08至2.1%，並額外提供2,000至2,300元現金回贈及家居保險等。中銀香港發言人回覆本報查詢時指，該行給予綠置居買家的現金回贈為貸款額2.1%加2,000元，客戶於六月底前申請可獲額外500元禮券。</p><p>市民做綠置居<strong>按揭</strong>與私人物業有不少相異之處。<strong>利嘉閣按揭</strong>代理董事總經理黃詠欣指，綠置居<strong>按揭</strong>貸款的還款期可長達二十五年，且最多能借九成半，但僅能選擇最優惠利率（P）掛<strong>按揭</strong>計劃。</p><p>她又提醒，綠置居貸款轉按及加按設有限制，須先獲得房屋署同意方可進行，建議買家即使手頭資金充裕，做<strong>按揭</strong>時宜「借到盡」，並將多出資金存入銀行贈送的高息存款戶口，使資金運用更加靈活。</p><p><strong>中原按揭</strong>經紀董事總經理王美鳳稱，銀行審批綠置居貸款會較寬鬆，但仍有機會查閱申請人的信貸紀錄，借款人應作自我測試，每月還款佔入息比例低於四成或以下，在理財而言屬較理想的供款比例。</p><p>中銀擬增人手及開分行</p><p>該公司數據顯示，今年首季包括居屋、夾屋及租者置其屋的資助房屋<strong>按揭</strong>登記宗數，按年跌近三成至1,979宗，期內恒生續以33%的市場佔有率稱冠，豐及中銀香港則緊隨其後。</p><p>事實上，今年來<strong>按揭</strong>市場競爭激烈，銀行亦擬增兵。消息透露，中銀香港計劃增設分行網絡的<strong>按揭</strong>中心，由現時只有7間，目標增至看齊擁有11間<strong>按揭</strong>中心的豐，意味最少增設4間，以每間平均兩名<strong>按揭</strong>職員計，計劃增兵約10人。</p><p>DOCUMENT ID: 201904150296340 </p><p>Source: Wisers electronic service. This content, the trademarks and logos belong to Wisers, the relevant organizations or copyright owners. All rights reserved. Any content provided by user is the responsibility of the user and Wisers is not responsible for such content, copyright clearance or any damage/loss suffered as a result.  </p><p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ #2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p><p>| 2019-04-15 | Hong Kong Commercial Daily | A05 |產經新聞 |</p><p>General Property in Hong Kong | Newspaper | Word Count: 880words | Circulation / Reach: 35,000</p><p>Image Size: 465.7cm-sq (23.4cm x 19.9cm) | Ad-Value: HKD30,128</p><p>Keyword Matched: 發展商,買賣合約,物業,中原地產,車位,新盤,香港置業,成交</p><p>資金持續流入住宅市場 4 月<strong>成交</strong>料創10 個月新高 </p><p>【香港商報訊】記者鄭珊珊報道：樓市交投持續暢旺，<strong>中原地產</strong>研究部高級聯席董事黃良昇預料，4 月整體<strong>買賣合約</strong>登記(包括住宅、<strong>車位</strong>及工商舖<strong>物業</strong>)<strong>成交</strong>宗數，有望繼2018 年6 月份9252 宗後，迫近9000 宗高水平，創10 個月新高；金額亦可望繼2018 年7 月份993.7 億元後，迫750 億元水平，創9 個月新高。個別藍籌屋苑呎價已率先升穿年度高位，熱門上車屋苑沙田第一城最近一宗<strong>成交</strong>，實用呎價達20775 元，屬同類單位今年新高。</p><p>  截至4 月11 日，本月一手私人住宅暫錄得876 宗<strong>成交</strong>，總值92.2 億元。<strong>中原地產</strong>預測整月登記1800 宗及185 億元，將較3 月的1439 宗及150.6 億元，分別上升25.1%及22.8%，主因<strong>發展商</strong>積極推售<strong>新盤</strong>及貨尾單位。</p><p>  紅磡啟岸熱賣</p><p>  目前錄得最多登記的<strong>新盤</strong>暫為紅磡啟岸，有196 宗登記，總值11.6 億元。排名第二為大埔雲1 期，暫錄109 宗總值11.6 億元。第三為將軍澳日出康城6 期LP6，暫錄80 宗總值8.1 億元。</p><p>  至於4 月樓宇整體<strong>買賣合約</strong>登記(包括住宅、<strong>車位</strong>及工商舖<strong>物業</strong>)暫錄3321 宗，總值276.14 億元。全月登記預測達9000 宗及750 億元，較3 月份6428 宗及528.3 億元上升40%及42%。</p><p>  <strong>香港置業</strong>行政總裁表示，近期樓市反彈上升，普遍準買家對後市抱正面心態，入市意欲高漲，反映剛需強勁，相信資金仍會持續流入樓市。他續說，與此同時，<strong>發展商</strong>加大去貨力度，多個<strong>新盤</strong>部署短期內推售，料次季一手市場將會是市場焦點所在，而二手價量緩升的勢頭亦會持續。</p><p>  第一城呎價重上2 萬</p><p>  黃良昇又指出，二手大型屋苑4 月份整體<strong>成交</strong>暫錄1608 宗，涉資138.7 億元。預測到月底，登記宗數會達到4200 宗，金額達到360 億元，將較3 月的3469 宗及292 億元上升21.1%及23.3%。宗數創下2018 年6 月份後新高，當時<strong>成交</strong>宗數為4324 宗，金額則創2018 年7 月362 億元後9 個月新高。</p><p>  據<strong>中原地產</strong>沙田第一城分區營業經理侯惠良透露，最近<strong>成交</strong>的沙田第一城單位為44 座高層B 單位，兩房間隔，建築面積395 平方呎，實用面積284 平方呎，以590 萬元易手。原業主於2014 年以363 萬元購入單位，持貨5 年獲利227 萬元，單位升值約62.5%。</p><p>  沙田第一城不僅在呎價方面表現突出，就連<strong>成交</strong>宗數都打入本月前4 名，暫錄12 宗。本月其他表現活躍的大型屋苑還包括美孚新暫錄21 宗買賣登記、嘉湖山莊暫錄19 宗、太古城暫錄16 宗。</p><p>  ####</p><p>  新界熱門屋苑沙田第一城近日<strong>成交</strong>價再次衝上2萬元大關。</p><p>DOCUMENT ID: 201904150187376 </p><p>Source: Wisers electronic service. This content, the trademarks and logos belong to Wisers, the relevant organizations or copyright owners. All rights reserved. Any content provided by user is the responsibility of the user and Wisers is not responsible for such content, copyright clearance or any damage/loss suffered as a result.  </p><p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ #3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p><p>| 2019-04-15 | Ta Kung Pao | A13 |經濟 |談樓說按 |By 王美鳳 |</p><p>General Property in Hong Kong | Newspaper | Word Count: 712words | Circulation / Reach: 100,000</p><p>Image Size: 179.2cm-sq (11.2cm x 16.0cm) | Ad-Value: HKD19,486</p><p>Keyword Matched: 中原,發展商,物業,新盤,按揭,樓價</p><p>呼吸PLAN轉按成趨勢（下） </p><p>上期提及<strong>發展商新盤</strong>一按普遍設有初期低息優惠，但兩三年後息率將跳升，用家需準備轉按可行性。若果由<strong>發展商</strong>八成一按轉按至銀行承造六成<strong>按揭</strong>，原則上業主須補回<strong>樓價</strong>兩成之首期差額方可轉按，但由於過去三年至今，<strong>樓價</strong>大致處於升軌，因應<strong>物業</strong>估值已累升達三至四成半，業主轉按時可承造之<strong>按揭</strong>金額已提高，加上期內業主已償還部分<strong>按揭</strong>本金，降低了轉按時所需補回之首期差額，甚至有部分<strong>新盤</strong>一按用家無需補付首期差額便可成功轉按。</p><p>以一個<strong>新盤</strong>作為例子，買家於2016年4月入市購買一個作價650萬元之單位，由於銀行<strong>按揭</strong>僅高達六成，為了減輕兩成首期負擔，買家決定採用<strong>發展商</strong>提供之八成一按即供上會，<strong>按揭</strong>金額高達520萬元。有關八成一按之首兩年息率為2.3%，兩年期後息率跳升至P水平（P現為5.125%），目前<strong>按揭</strong>餘額降至87萬元，有意轉按以免捱貴息。由於有關單位之<strong>樓價</strong>已上升四成，估值已升至910萬元，以銀行<strong>按揭</strong>成數上限計算，申請轉按可獲批之<strong>按揭</strong>金額高達500萬元（<strong>按揭</strong>成數為55%）。換句話說，隨<strong>樓價</strong>上升，買家無需補付首期差額便可將<strong>發展商</strong>一按轉至銀行低息<strong>按揭</strong>。成功轉按銀行後，買家之供樓按息降至2.375%，每月供款減少24%，利息支出減少約54%。</p><p>對於正在使用<strong>發展商</strong>高成數一按或二按之供樓人士，當兩至三年之低息優惠期完結後，可根據銀行最新<strong>物業</strong>估值計算可承造的<strong>按揭</strong>金額上限。當<strong>樓價</strong>累積一定升幅以及<strong>按揭</strong>餘額逐步降低，轉按至銀行所需支付的首期差額便可減少，故此供樓人士可衡量自身個案是否具條件轉按。二按用家若資金較充裕，亦可選擇清還二按貸款而保留銀行一按。</p><p>留意銀行審批<strong>按揭</strong>準則與<strong>發展商</strong>不同，銀行需根據現行樓按措施評估轉按申請人的還款能力，並在通過壓力測試後，方可批出<strong>按揭</strong>貸款。</p><p>（文接3月25日A13版）</p><p><strong>中原按揭</strong>經紀董事總經理王美鳳</p><p>DOCUMENT ID: 201904150226952 </p><p>Source: Wisers electronic service. This content, the trademarks and logos belong to Wisers, the relevant organizations or copyright owners. All rights reserved. Any content provided by user is the responsibility of the user and Wisers is not responsible for such content, copyright clearance or any damage/loss suffered as a result.  </p><p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ #4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p><p>| 2019-04-15 | am730 | A02 |NEWS |C觀點 |By 施永青 |</p><p>General Property in Hong Kong | Newspaper | Word Count: 1116words | Circulation / Reach: 400,085</p><p>Image Size: 231.2cm-sq (27.2cm x 8.5cm) | Ad-Value: HKD75,773</p><p>Keyword Matched: 買樓,店舖,樓價</p><p><strong>樓價</strong>最貴是好是壞？ </p><p>香港<strong>樓價</strong>又被列為全球最貴。有學者擔心，這會影響香港的競爭力。這不但會阻嚇海外公司來港發展，亦會妨礙本地的初創公司的成長空間。而我則覺得，<strong>樓價</strong>貴只會影響民生，對商業的影響不會太大。</p><p>本來，若純從居住的角度來考慮，買不起樓，可以選擇租樓。<strong>樓價</strong>會受到投資前景的影響而升得脫離實際，但租金卻只能反映租客目前的負擔能力，不可能完全脫離實際。所以<strong>樓價</strong>高的地方，租金回報率都會相對低一點。只是香港人大都偏好<strong>買樓</strong>，而不想租樓，貪其可以升值，可以得到租樓不會提供的投資回報。這才導致香港人會把買不起樓也視作民生問題。在別處地方，<strong>樓價</strong>過高只會被視作投資問題。在其他國際大城市中，在當地工作的人多會租樓，而樓宇的擁有者卻是另外的一批投資者。</p><p>香港有很強的投資吸引力，又是一個容許資金自由出入的自由港，政府要限制外來資金投資香港並不容易。近年政府試圖寓禁於徵，大幅提高了多種印花稅，但這些「辣招」卻收效甚微。我建議政府乾脆把市場切割成兩個部分：一邊是純粹照顧本地人生活所需的民生市場，不容許資金(包括本地資金)進來扭曲<strong>樓價</strong>，令<strong>樓價</strong>只能反映本地人的購買力。另一邊是全面開放的自由市場，由資金擁有者自行決定<strong>樓價</strong>的升跌。</p><p>在這樣的分割下，政府就可以讓每一個香港人，一生中都有一次機會買一個首次上車盤，只要政府放棄徵收如自由市場一樣高的地價便可以了。至於那些想住得比上車盤的環境好一些的香港人，那就得憑自己的實力，與國際投資者一起在自由市場作競爭。</p><p>解決了民生問題之後，商業樓宇市場政府應盡量少管。一般而言，做生意的人大多選擇租樓，而不是<strong>買樓</strong>，外國公司尤其如是。香港的寫字樓與<strong>店舖</strong>的租金之所以會升得這麼高，可謂是商界自己搶高的。租金可不是業主想訂多高就可以訂多高的。香港的商業樓宇的租金水平能升到全球最高的水平，正好反映香港的營商環境比全球其他地方都好，否則跨國企業為何不選擇去其他租金便宜的地方做生意？</p><p>從這個角度來看，一個城市是不用擔心商業樓宇的租金太高的。若是企業沒法在當地賺到錢，他們是負擔不起這麼高的租金的，屆時，租金自然會下調至商人負擔得起的水平。</p><p>近期，香港的<strong>店舖</strong>租金就接連大幅回落，原因並非業主大發慈悲，而是因為內地大力打貪，以及零售業備受互聯網電商影響所致。可見業主一樣要接受市場的制約。亞洲金融風暴之後，香港寫字樓的租金就試過連跌多年，但這對香港商界來說卻並沒有帶來多大的好處。因為租金回落的時候，往往就是生意難做的時候。因此，成熟的生意人都不想看到一個城市的整體租金回落。</p><p>香港的<strong>樓價</strong>與租金又一次被列作全球最貴，這對大多數人來說，都不是一件好事；但從另一個角度來看，這亦可反映投資者對香港仍有偏好，而商人亦願意為在香港做生意而付出溢價。這顯示香港有其價值。</p><p>DOCUMENT ID: 201904150201229 </p><p>Source: Wisers electronic service. This content, the trademarks and logos belong to Wisers, the relevant organizations or copyright owners. All rights reserved. Any content provided by user is the responsibility of the user and Wisers is not responsible for such content, copyright clearance or any damage/loss suffered as a result.  </p><p>WiseNews Wisers Information Limited Enquiry: (852) 2948 3888 Email: info@wisers.com Web site: http://www.wisers.com </p><p>Copyright (c)2019Wisers Information Limited. All Rights Reserved. </p>`

var result = parseWisers({ text: htmlText, type: 'HTML1' })
