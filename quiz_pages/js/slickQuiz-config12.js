// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "第十二章 線上測驗",
        "main":    "<p>巨量資料與雲端計算</p>",
        "results": "<h5>NDHU</h5><p>Reference_GitHub_SlickQuiz(https://github.com/jewlofthelotus/SlickQuiz)</p>",
        "level1":  "計算機概論 專家",
        "level2":  "計算機概論 業餘",
        "level3":  "計算機概論 入門",
        "level4":  "計算機概論 新手",
        "level5":  "請認真學習..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "下列關於雲端運算的敘述何者錯誤?",
            "a": [
                {"option": "使用者無須知道服務提供的細節",      "correct": true},
                {"option": "雲端運算沒有資安危害的顧慮",     "correct": false},
                {"option": "企業善用雲端運算可節省成本",      "correct": false},
                {"option": "雲端運算是client-server的延伸",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 使用者無須知道服務提供的細節.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 使用者無須知道服務提供的細節.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "雲端運算架構下的作業系統，哪一種的功能設計最簡單?",
            "a": [
                {"option": "客戶端的作業系統",      "correct": true},
                {"option": "私有雲計算中心的作業系統",   "correct": false},
                {"option": "公有雲計算中心的作業系統",    "correct": false},
                {"option": "一樣簡單", "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 客戶端的作業系統.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 客戶端的作業系統.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "Google app engine 屬於雲端運算架構中，哪一種層次的服務?",
            "a": [
                {"option": "IaaS",      "correct": false},
                {"option": "PaaS",     "correct": true},
                {"option": "SaaS",      "correct": false},
                {"option": "以上皆非",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> PaaS.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : PaaS.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Single True Answer
            "q": "下列關於雲端計算之描述，何者不正確?",
            "a": [
                {"option": "使用者要瞭解雲端中基礎設施的細節",      "correct": false},
                {"option": "透過網際網路",     "correct": false},
                {"option": "按需求提供使用資源",      "correct": true},
                {"option": "使用者可方便參與小",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 按需求提供使用資源.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 按需求提供使用資源.</p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Single True Answer
            "q": "下列何者不是巨量資料具有的主要特性?",
            "a": [
                {"option": "資料量非常大",      "correct": false},
                {"option": "資料增加的速度非常快",     "correct": false},
                {"option": "資料形式的多樣性",      "correct": false},
                {"option": "資料處理的方式非常多",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 資料處理的方式非常多.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 資料處理的方式非常多.</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Single True Answer
            "q": "能夠同時處理分散在各處的資料的運算我們稱之為？",
            "a": [
                {"option": "平行運算",      "correct": true},
                {"option": "四則運算",     "correct": false},
                {"option": "邏輯運算",      "correct": false},
                {"option": "高斯運算",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 平行運算.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 平行運算.</p>" // no comma here
        },
		{ // Question 7 - Multiple Choice, Single True Answer
            "q": "一組由電腦群或運算群所組成，彼此之間透過計算機網路相互連結與通訊後所形成的系統為何？",
            "a": [
                {"option": "資料系統",      "correct": false},
                {"option": "運算系統",     "correct": false},
                {"option": "分散式系統",      "correct": true},
                {"option": "捷運系統",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 分散式系統.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 分散式系統.</p>" // no comma here
        },
		{ // Question 8 - Multiple Choice, Single True Answer
            "q": "何者選項是發揮分散式系統的最大力量？",
            "a": [
                {"option": "合作之前必須要先溝通與協調",      "correct": false},
                {"option": "解決不同電腦的差異性",     "correct": false},
                {"option": "有效的分配工作與系統資源",      "correct": false},
                {"option": "以上皆是",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 以上皆是.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 以上皆是.</p>" // no comma here
        },
		{ // Question 9 - Multiple Choice, Single True Answer
            "q": "巨量資料來源裡的資料沒有固定的格式這樣的資料被稱作為",
            "a": [
                {"option": "非結構資料",      "correct": true} ,
                {"option": "結構資料",     "correct": false},
                {"option": "探勘資料",      "correct": false},
                {"option": "格式化資料",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 非結構資料.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 非結構資料.</p>" // no comma here
        },
		{ // Question 10 - Multiple Choice, Single True Answer
            "q": "何謂「資料探勘」（data mining）?",
            "a": [
                {"option": "蒐集大量資料，建構成資料庫",      "correct": false},
                {"option": "從大量資料中挖掘出有效的和有用的資訊之過程，以提供決策參考",     "correct": true},
                {"option": "由資料庫中檢索某一主題的資訊",      "correct": false},
                {"option": "由工具書中找到參考問題的答案",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 從大量資料中挖掘出有效的和有用的資訊之過程，以提供決策參考.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 從大量資料中挖掘出有效的和有用的資訊之過程，以提供決策參考.</p>" // no comma here
        },
		{ // Question 11 - Multiple Choice, Single True Answer
            "q": "下列那一項圖書館業務最適宜採用資料探勘的技術?",
            "a": [
                {"option": "館藏分析",      "correct": false},
                {"option": "主題分析",     "correct": false},
                {"option": "圖書盤點",      "correct": false},
                {"option": "圖書借閱記錄分析",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 圖書借閱記錄分析.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 圖書借閱記錄分析.</p>" // no comma here
        },
		{ // Question 12 - Multiple Choice, Single True Answer
            "q": "下列哪一項不是資料探勘(Data Mining)的特性?",
            "a": [
                {"option": "根據分析對象之過去屬性觀察值來預測該屬性之未來值",      "correct": false},
                {"option": "可按照分析對象的屬性分門別類建立類組",     "correct": false},
                {"option": "可使用了許多統計分析方法尋找資料中有用的特徵及關連性",      "correct": false},
                {"option": "可協助公司找到遺失的歷史資料",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 可協助公司找到遺失的歷史資料.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 可協助公司找到遺失的歷史資料.</p>" // no comma here
        },
		{ // Question 13 - Multiple Choice, Single True Answer
            "q": "資料探勘又可被稱為?",
            "a": [
                {"option": "KDD",      "correct": true},
                {"option": "NDD",     "correct": false},
                {"option": "KDK",      "correct": false},
                {"option": "KND",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> KDD.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : KDD.</p>" // no comma here
        },
		{ // Question 14 - Multiple Choice, Single True Answer
            "q": "下列何者不是知識發現的步驟之一?",
            "a": [
                {"option": "資料清理及整合",      "correct": false},
                {"option": "資料選擇與轉換",     "correct": false},
                {"option": "資料截取",      "correct": true},
                {"option": "資料探勘",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 資料截取.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 資料截取.</p>" // no comma here
        },
		{ // Question 15 - Multiple Choice, Single True Answer
            "q": "下列何者不是資料探勘的技術?",
            "a": [
                {"option": "資料關聯分析",      "correct": false},
                {"option": "資料分類",     "correct": false},
                {"option": "資料分群",      "correct": false},
                {"option": "資料整合",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 資料整合.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 資料整合.</p>" // no comma here
        },
		{ // Question 16 - Multiple Choice, Single True Answer
            "q": "在最初建立分類模型時會將現有資料分成哪兩組?",
            "a": [
                {"option": "訓練樣本和測試樣本",      "correct": true},
                {"option": "訓練樣本和實際樣本",     "correct": false},
                {"option": "普通樣本和特殊樣本",      "correct": false},
                {"option": "測試樣本和結果樣本",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 訓練樣本和測試樣本.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 訓練樣本和測試樣本.</p>" // no comma here
        },
		{ // Question 17 - Multiple Choice, Single True Answer
            "q": "資料分類又稱為?",
            "a": [
                {"option": "監督式學習法",      "correct": true},
                {"option": "非監督式學習法",     "correct": false},
                {"option": "群集分析法",      "correct": false},
                {"option": "以上皆非",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 監督式學習法.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 監督式學習法.</p>" // no comma here
        },
		{ // Question 18 - Multiple Choice, Single True Answer
            "q": "資料分群又稱為?",
            "a": [
                {"option": "監督式學習法",      "correct": false},
                {"option": "非監督式學習法",     "correct": true},
                {"option": "相似度學習法",      "correct": false},
                {"option": "非相似度學習法",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 非監督式學習法.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 非監督式學習法.</p>" // no comma here
        },
		{ // Question 19 - Multiple Choice, Single True Answer
            "q": "資料關聯分析的目的為何?",
            "a": [
                {"option": "根據已知資料的相關屬性及該資料所屬之類別來建立資料的分類模型",      "correct": false},
                {"option": "分析資料彼此間的相似度",     "correct": false},
                {"option": "找出項目與項目間的關聯性件",      "correct": true},
                {"option": "找出項目的隱藏屬性",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 找出項目與項目間的關聯性件.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 找出項目與項目間的關聯性件.</p>" // no comma here
        },
		{ // Question 20 - Multiple Choice, Single True Answer
            "q": "關聯規則探勘中的最小支持度及最小信心度值是由誰給定的?",
            "a": [
                {"option": "使用者",      "correct": true},
                {"option": "程式編輯者",     "correct": false},
                {"option": "系統",      "correct": false},
                {"option": "料分類員",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 使用者.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 使用者.</p>" // no comma here
        },
		{ // Question 21 - Multiple Choice, Single True Answer
            "q": "以下表為例，何者是我們要預測的值？?",
            "a": [
                {"option": "姓名",      "correct": false},
                {"option": "職位",     "correct": false},
                {"option": "年資",      "correct": true},
                {"option": "終身職",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 年資.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 年資.</p>" // no comma here
        },
		{ // Question 22 - Multiple Choice, Single True Answer
            "q": "軟體即服務（SaaS）是何種模式?",
            "a": [
                {"option": "是一種租用應用軟體程式的商業模式",      "correct": true},
                {"option": "是一種租用計算平臺的商業模式",     "correct": false},
                {"option": "是一種租用雲端設備的商業模式",      "correct": false},
                {"option": "是一種租用資料庫的商業模式",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 是一種租用應用軟體程式的商業模式.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 是一種租用應用軟體程式的商業模式.</p>" // no comma here
        },
		{ // Question 23 - Multiple Choice, Single True Answer
            "q": "下列何者不是雲端計算的服務類型?",
            "a": [
                {"option": "SaaS",      "correct": false},
                {"option": "PaaS",     "correct": false},
                {"option": "IaaS",      "correct": false},
                {"option": "NaaS",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> NaaS.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : NaaS.</p>" // no comma here
        },{ // Question 24 - Multiple Choice, Single True Answer
            "q": "中華電信有提供下列何種租用服務?",
            "a": [
                {"option": "SaaS",      "correct": false},
                {"option": "PaaS",     "correct": false},
                {"option": "IaaS",      "correct": true},
                {"option": "NaaS",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> IaaS.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : IaaS.</p>" // no comma here
        },
		{ // Question 25 - Multiple Choice, Single True Answer
            "q": "25.	何種不是雲端計算的服務類型?",
            "a": [
                {"option": "軟體即服務",      "correct": false},
                {"option": "平台即服務",     "correct": false},
                {"option": "硬體即服務",      "correct": true},
                {"option": "基礎設施即服務",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 硬體即服務.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 硬體即服務.</p>" // no comma here
        },
		{ // Question 26 - Multiple Choice, Single True Answer
            "q": "構建雲端計算服務的方式可依據使用的限定區分，分哪兩種?",
            "a": [
                {"option": "私有雲、限定雲",      "correct": false},
                {"option": "公眾雲、虛擬雲",     "correct": false},
                {"option": "私有雲、公眾雲",      "correct": true},
                {"option": "限定雲、虛擬雲",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 私有雲、公眾雲.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 私有雲、公眾雲.</p>" // no comma here
        },
		{ // Question 27 - Multiple Choice, Single True Answer
            "q": "請問方便攜帶又能夠提供資料處理能力的設備，稱為甚麼?",
            "a": [
                {"option": "（A）.	 資料設備",      "correct": false},
                {"option": "無人駕駛汽車",     "correct": false},
                {"option": "藍芽APP",      "correct": false},
                {"option": "穿戴式計算",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 穿戴式計算.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 穿戴式計算.</p>" // no comma here
        },
		{ // Question 28 - Multiple Choice, Single True Answer
            "q": "甚麼技術可以讓手機可以讀取晶片卡或是將手機視為晶片卡般進行感應?",
            "a": [
                {"option": "手機晶片",      "correct": false},
                {"option": "近距離通訊",     "correct": true},
                {"option": "感應晶片",      "correct": false},
                {"option": "感應器晶片",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 近距離通訊.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 近距離通訊.</p>" // no comma here
        },
		{ // Question 29 - Multiple Choice, Single True Answer
            "q": "智慧型手機內建有甚麼系統可以隨時掌握目前位置?",
            "a": [
                {"option": "衛星定位系統",      "correct": true},
                {"option": "衛星系統",     "correct": false},
                {"option": "方向系統",      "correct": false},
                {"option": "導遊系統",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 衛星定位系統.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 衛星定位系統.</p>" // no comma here
        },
		{ // Question 30 - Multiple Choice, Single True Answer
            "q": "布置形成一個智慧空間，像是遠端控制家中物品…等等，讓物品間可以交換訊息和嵌入感測器，這樣的形成稱之為甚麼?",
            "a": [
                {"option": "空間網",      "correct": false},
                {"option": "五度空間",     "correct": false},
                {"option": "物聯網",      "correct": true},
                {"option": "互聯網",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 物聯網.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 物聯網.</p>" // no comma here
        }
    ]
	
};
