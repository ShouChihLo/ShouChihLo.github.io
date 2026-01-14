// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "第一章 線上測驗",
        "main":    "<p>電腦簡介</p>",
        "results": "<h5>NDHU</h5><p>Reference_GitHub_SlickQuiz(https://github.com/jewlofthelotus/SlickQuiz)</p>",
        "level1":  "計算機概論 專家",
        "level2":  "計算機概論 業餘",
        "level3":  "計算機概論 入門",
        "level4":  "計算機概論 新手",
        "level5":  "請認真學習..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "電腦儲存資料的基本單位為?",
            "a": [
                {"option": "Byte",      "correct": true},
                {"option": "KB",     "correct": false},
                {"option": "MB",      "correct": false},
                {"option": "GB",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 電腦儲存資料的基本單位為 [Byte].</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 電腦儲存資料的基本單位為 [Byte].</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "假設有一個硬碟容量是40GB等於?",
            "a": [
                {"option": "40x1TB",      "correct": false},
                {"option": "40x1024MB",   "correct": true},
                {"option": "40x210TB",    "correct": false},
                {"option": "40x220Bytes", "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 40GB等於[40x1024MB].</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 40GB等於[40x1024MB].</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "下列何者不是電腦的特色?",
            "a": [
                {"option": "處理資料速度快",      "correct": false},
                {"option": "儲存容量大",     "correct": false},
                {"option": "資料容易傳輸",      "correct": false},
                {"option": "準確性低",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 準確性低.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 準確性低.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Single True Answer
            "q": "請問真空管電腦的缺點不包括?",
            "a": [
                {"option": "壽命短",      "correct": false},
                {"option": "易故障",     "correct": false},
                {"option": "不易散熱",      "correct": false},
                {"option": "體積小",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 體積小.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 體積小.</p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Single True Answer
            "q": "將電腦區分為輸入、輸出、記憶、控制等單元，這種架構是誰提出?",
            "a": [
                {"option": "愛因斯坦",      "correct": false},
                {"option": "范紐曼",     "correct": true},
                {"option": "牛頓",      "correct": false},
                {"option": "圖靈",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 范紐曼.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 范紐曼.</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Single True Answer
            "q": "作業系統的操作方式有哪兩種？",
            "a": [
                {"option": "文字介面和操作介面",      "correct": false},
                {"option": "圖形介面和操作介面",     "correct": true},
                {"option": "操作介面和執行介面",      "correct": false},
                {"option": "文字介面和圖形介面",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 圖形介面和操作介面.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 圖形介面和操作介面.</p>" // no comma here
        },
		{ // Question 7 - Multiple Choice, Single True Answer
            "q": "將電腦分成第一代、第二代、第三代、第四代等等，劃分的依據為？",
            "a": [
                {"option": "用途",      "correct": false},
                {"option": "使用之電子元件",     "correct": false},
                {"option": "功能與速度",      "correct": false},
                {"option": "發展的年代",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 發展的年代.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 發展的年代.</p>" // no comma here
        },
		{ // Question 8 - Multiple Choice, Single True Answer
            "q": "最早發明之第一代電腦，其主要元件為？",
            "a": [
                {"option": "積體電路",      "correct": false},
                {"option": "電晶體",     "correct": false},
                {"option": "機械",      "correct": false},
                {"option": "真空管",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 真空管.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 真空管.</p>" // no comma here
        },
		{ // Question 9 - Multiple Choice, Single True Answer
            "q": "下列何者是目前電腦硬體發展的主要技術",
            "a": [
                {"option": "真空管",      "correct": false},
                {"option": "電晶體",     "correct": false},
                {"option": "微處理器",      "correct": false},
                {"option": "超大型積體電路",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 超大型積體電路.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 超大型積體電路.</p>" // no comma here
        },
		{ // Question 10 - Multiple Choice, Single True Answer
            "q": "世界第一部通用型電子計算機所採用的基本元件為何?",
            "a": [
                {"option": "超大型積體電路",      "correct": false},
                {"option": "積體電路",     "correct": false},
                {"option": "電晶體",      "correct": false},
                {"option": "真空管",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 真空管.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 真空管.</p>" // no comma here
        },
		{ // Question 11 - Multiple Choice, Single True Answer
            "q": "被尊稱為微電腦之父的人是誰?",
            "a": [
                {"option": "巴貝基",      "correct": true},
                {"option": "范紐曼",     "correct": false},
                {"option": "艾可特",      "correct": false},
                {"option": "巴斯卡",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 巴貝基.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 巴貝基.</p>" // no comma here
        },
		{ // Question 12 - Multiple Choice, Single True Answer
            "q": "下列關於電腦演進的敘述，何者正確?",
            "a": [
                {"option": "第四代電腦只能執行第四代電腦語言",      "correct": true},
                {"option": "第四代電腦比第三代電腦更耗電",     "correct": false},
                {"option": "美國品過電腦公司的APPLE II屬於第二代電腦",      "correct": false},
                {"option": "直到第四代電腦才開始使用微處理器",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 第四代電腦只能執行第四代電腦語言.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 第四代電腦只能執行第四代電腦語言.</p>" // no comma here
        },
		{ // Question 13 - Multiple Choice, Single True Answer
            "q": "電腦最重要的系統軟體為何?",
            "a": [
                {"option": "使用者介面",      "correct": false},
                {"option": "作業系統",     "correct": true},
                {"option": "應用軟體",      "correct": false},
                {"option": "命令列",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 作業系統.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 作業系統.</p>" // no comma here
        },
		{ // Question 14 - Multiple Choice, Single True Answer
            "q": "電腦的發展可分為四個時期：a.積體電路時期 b.微電腦時期 c.電晶體時期 d.真空管時期 ；其發展順序依序為何?",
            "a": [
                {"option": "abcd",      "correct": false},
                {"option": "badc",     "correct": false},
                {"option": "bdca",      "correct": false},
                {"option": "dcab",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> dcab.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : dcab.</p>" // no comma here
        },
		{ // Question 15 - Multiple Choice, Single True Answer
            "q": "80386的PC是幾位元CPU?",
            "a": [
                {"option": "32位元",      "correct": true},
                {"option": "64位元",     "correct": false},
                {"option": "8位元",      "correct": false},
                {"option": "16位元",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 32位元.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 32位元.</p>" // no comma here
        },
		{ // Question 16 - Multiple Choice, Single True Answer
            "q": "范紐曼提出何種觀念使資料或程式可以儲存在電腦的記憶體內?",
            "a": [
                {"option": "半導體記憶",      "correct": false},
                {"option": "內儲程式",     "correct": true},
                {"option": "系統程式",      "correct": false},
                {"option": "程式編碼",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 內儲程式.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 內儲程式.</p>" // no comma here
        },
		{ // Question 17 - Multiple Choice, Single True Answer
            "q": "我們常說的”PC”是屬於哪一類型的電腦?",
            "a": [
                {"option": "超級電腦",      "correct": false},
                {"option": "大型電腦",     "correct": false},
                {"option": "微電腦",      "correct": true},
                {"option": "嵌入式電腦",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 微電腦.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 微電腦.</p>" // no comma here
        },
		{ // Question 18 - Multiple Choice, Single True Answer
            "q": "interl 80486 是幾位元微處理機?",
            "a": [
                {"option": "32位元",      "correct": true},
                {"option": "64位元",     "correct": false},
                {"option": "8位元",      "correct": false},
                {"option": "16位元",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 32位元.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 32位元.</p>" // no comma here
        },
		{ // Question 19 - Multiple Choice, Single True Answer
            "q": "對於ENIAC 的敘述下列何者錯誤?",
            "a": [
                {"option": "美國賓州大學製造完成",      "correct": false},
                {"option": "屬於第一代電腦",     "correct": false},
                {"option": "使用積體電路為零件",      "correct": true},
                {"option": "耗電量大",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 使用積體電路為零件.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 使用積體電路為零件.</p>" // no comma here
        },
		{ // Question 20 - Multiple Choice, Single True Answer
            "q": "人類最早使用，有中國人所發明的正式計算工具為?",
            "a": [
                {"option": "加法器",      "correct": false},
                {"option": "計算器",     "correct": false},
                {"option": "算盤",      "correct": true},
                {"option": "減法器",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 算盤.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 算盤.</p>" // no comma here
        },
		{ // Question 21 - Multiple Choice, Single True Answer
            "q": "下列何者是目前電腦硬體發展的主要技術?",
            "a": [
                {"option": "真空管",      "correct": false},
                {"option": "電晶體",     "correct": false},
                {"option": "微處理器",      "correct": false},
                {"option": "超大型積體電路",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 超大型積體電路.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 超大型積體電路.</p>" // no comma here
        },
		{ // Question 22 - Multiple Choice, Single True Answer
            "q": "所謂的“麥金塔”指的是哪一類型的電腦?",
            "a": [
                {"option": "超級電腦",      "correct": false},
                {"option": "大型電腦",     "correct": false},
                {"option": "微電腦",      "correct": true},
                {"option": "嵌入式電腦",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 微電腦.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 微電腦.</p>" // no comma here
        },
		{ // Question 23 - Multiple Choice, Single True Answer
            "q": "下列哪一項是正確的?",
            "a": [
                {"option": "電腦可以提升人們的工作效率",      "correct": false},
                {"option": "電腦可以幫助儲存資料卻無法篩選偶用資訊",     "correct": false},
                {"option": "電腦的資料來源僅從光碟片來取得",      "correct": false},
                {"option": "當電腦輸出錯誤的資料代表電腦已經故障該換一台新的了",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 當電腦輸出錯誤的資料代表電腦已經故障該換一台新的了.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 當電腦輸出錯誤的資料代表電腦已經故障該換一台新的了.</p>" // no comma here
        },{ // Question 24 - Multiple Choice, Single True Answer
            "q": "筆記型電腦屬於哪一種電腦類型?",
            "a": [
                {"option": "嵌入式電腦",      "correct": false},
                {"option": "大型電腦",     "correct": false},
                {"option": "超級電腦",      "correct": false},
                {"option": "微電腦",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 微電腦.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 微電腦.</p>" // no comma here
        },
		{ // Question 25 - Multiple Choice, Single True Answer
            "q": "下列敘述何者錯誤?",
            "a": [
                {"option": "電腦運算速度快，適合執行複雜繁瑣的工作",      "correct": false},
                {"option": "電腦的用途僅供娛樂",     "correct": true},
                {"option": "電腦的儲存媒介包含記憶體、硬碟、磁碟以及光碟",      "correct": false},
                {"option": "電腦產生錯誤的原因大部分來自人為因素",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 電腦的用途僅供娛樂.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 電腦的用途僅供娛樂.</p>" // no comma here
        },
		{ // Question 26 - Multiple Choice, Single True Answer
            "q": "下列何者不是電腦特性之一?",
            "a": [
                {"option": "可以處理中文",      "correct": true},
                {"option": "快速運算能力",     "correct": false},
                {"option": "記憶容量大",      "correct": false},
                {"option": "正確性高",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 可以處理中文.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 可以處理中文.</p>" // no comma here
        },
		{ // Question 27 - Multiple Choice, Single True Answer
            "q": "在電腦演進中，哪一代電腦使用人工智慧的觀念，讓電腦具有自我學習與思考判斷的能力?",
            "a": [
                {"option": "第一代",      "correct": false},
                {"option": "第三代",     "correct": false},
                {"option": "第四代",      "correct": false},
                {"option": "第五代",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 第五代.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 第五代.</p>" // no comma here
        },
		{ // Question 28 - Multiple Choice, Single True Answer
            "q": "下列對於電腦未來發展的敘述何者錯誤?",
            "a": [
                {"option": "體積越來越小",      "correct": false},
                {"option": "速度越來越快",     "correct": false},
                {"option": "重量越來越輕",      "correct": false},
                {"option": "耗電量越來越大",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 下列對於電腦未來發展的敘述何者錯誤.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 下列對於電腦未來發展的敘述何者錯誤.</p>" // no comma here
        },
		{ // Question 29 - Multiple Choice, Single True Answer
            "q": "奈米（ns）為10的幾次方米?",
            "a": [
                {"option": "-3",      "correct": false},
                {"option": "-6",     "correct": false},
                {"option": "-9",      "correct": true},
                {"option": "-12",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> -9.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : -9.</p>" // no comma here
        },
		{ // Question 30 - Multiple Choice, Single True Answer
            "q": "請問“電影院門前多位售票員在售票”，這一工作模式對應的費林分類的計算架構為?",
            "a": [
                {"option": "SISD",      "correct": false},
                {"option": "SIMD",     "correct": false},
                {"option": "MISD",      "correct": false},
                {"option": "MIMD",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> MIMD.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : MIMD.</p>" // no comma here
        }
    ]
	
};
