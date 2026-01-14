// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "第四章 線上測驗",
        "main":    "<p>計算機組織與數位邏輯設計</p>",
        "results": "<h5>NDHU</h5><p>Reference_GitHub_SlickQuiz(https://github.com/jewlofthelotus/SlickQuiz)</p>",
        "level1":  "計算機概論 專家",
        "level2":  "計算機概論 業餘",
        "level3":  "計算機概論 入門",
        "level4":  "計算機概論 新手",
        "level5":  "請認真學習..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "AND、NOT、OR等指令的執行是電腦中哪一個單元的工作?",
            "a": [
                {"option": "記憶單元",      "correct": false},
                {"option": "輸出單元",      "correct": false},
                {"option": "控制單元",      "correct": false},
                {"option": "算數及運算單元",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 算數及運算單元.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 算數及運算單元.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "負責整個電腦系統各單元間資料傳送是電腦中哪一個單元的工作?",
            "a": [
                {"option": "記憶單元",      "correct": false},
                {"option": "輸出單元",   "correct": false},
                {"option": "控制單元",    "correct": true},
                {"option": "算術及運算單元", "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 控制單元.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 控制單元.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "暫存器是在電腦的哪一個單元中?",
            "a": [
                {"option": "輸入單元",      "correct": false},
                {"option": "中央處理單元",     "correct": true},
                {"option": "記憶單元",      "correct": false},
                {"option": "輸出單元",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 中央處理單元.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 中央處理單元.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Single True Answer
            "q": "電腦中所有邏輯判斷的工作都是由哪一個單元來負責",
            "a": [
                {"option": "算術及運算單元",      "correct": true},
                {"option": "儲存單元",     "correct": false},
                {"option": "輸入單元",      "correct": false},
                {"option": "輸出單元",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 算術及運算單元.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 算術及運算單元.</p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Single True Answer
            "q": "下列哪個對RAM的敘述是錯誤的?",
            "a": [
                {"option": "儲存的資料能被讀出",      "correct": false},
                {"option": "電源關掉內容都消失",     "correct": false},
                {"option": "能寫入資料",      "correct": false},
                {"option": "與ROM的主要差別在於記憶體大小",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 與ROM的主要差別在於記憶體大小.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 與ROM的主要差別在於記憶體大小.</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Single True Answer
            "q": "下列有關ROM的敘述何者正確？",
            "a": [
                {"option": "具揮發性",      "correct": false},
                {"option": "PROM可多次選入",     "correct": false},
                {"option": "EPROM可用電壓清除",      "correct": false},
                {"option": "主要儲存系統資料",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 主要儲存系統資料.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 主要儲存系統資料.</p>" // no comma here
        },
		{ // Question 7 - Multiple Choice, Single True Answer
            "q": "負責處理計算機的所有作業順序以及其他單元之間動作的協調的單元是？",
            "a": [
                {"option": "記憶單元",      "correct": false},
                {"option": "算術及邏輯運算單元",     "correct": false},
                {"option": "控制單元",      "correct": true},
                {"option": "輸入單元",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 控制單元.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 控制單元.</p>" // no comma here
        },
		{ // Question 8 - Multiple Choice, Single True Answer
            "q": "所謂軟體的安裝，就是將此軟體安裝在電腦的？",
            "a": [
                {"option": "中央處理單元（CPU）",      "correct": false},
                {"option": "光碟（CD-R）",     "correct": false},
                {"option": "唯獨記憶體（ROM）",      "correct": false},
                {"option": "硬碟（hard disk）",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 硬碟（hard disk）.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 硬碟（hard disk）.</p>" // no comma here
        },
		{ // Question 9 - Multiple Choice, Single True Answer
            "q": "我們向電腦廠商購買個人電腦時，指定記憶體要1GB，請問1GB是指以下的哪一項",
            "a": [
                {"option": "（A）.	磁碟",      "correct": false},
                {"option": "ROM",     "correct": false},
                {"option": "RAM",      "correct": true},
                {"option": "Cache Memory",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> RAM.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : RAM.</p>" // no comma here
        },
		{ // Question 10 - Multiple Choice, Single True Answer
            "q": "中央處理器裏不包括哪一個元件?",
            "a": [
                {"option": "算術邏輯元件",      "correct": false},
                {"option": "控制元件",     "correct": false},
                {"option": "暫存器",      "correct": false},
                {"option": "通訊元件",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 通訊元件.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 通訊元件.</p>" // no comma here
        },
		{ // Question 11 - Multiple Choice, Single True Answer
            "q": "用來將圖形或影像資料傳入電腦的周邊設備為?",
            "a": [
                {"option": "掃描器",      "correct": true},
                {"option": "繪圖機",     "correct": false},
                {"option": "數據機",      "correct": false},
                {"option": "條碼閱讀機",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 掃描器.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 掃描器.</p>" // no comma here
        },
		{ // Question 12 - Multiple Choice, Single True Answer
            "q": "12.	我們可以使用下列何種設備將圖片資料輸入電腦?",
            "a": [
                {"option": "列表機",      "correct": false},
                {"option": "繪圖機",     "correct": false},
                {"option": "顯示器",      "correct": false},
                {"option": "掃描器",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 掃描器.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 掃描器.</p>" // no comma here
        },
		{ // Question 13 - Multiple Choice, Single True Answer
            "q": "鐳射印表機是一種?",
            "a": [
                {"option": "撞擊式表機",      "correct": false},
                {"option": "利用打擊色帶印字機器",     "correct": false},
                {"option": "輸入裝置",      "correct": false},
                {"option": "輸出裝置",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 輸出裝置.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 輸出裝置.</p>" // no comma here
        },
		{ // Question 14 - Multiple Choice, Single True Answer
            "q": "透過列印針裝機色帶，然後在紙上打出細密的點，是屬於哪一種印表機?",
            "a": [
                {"option": "噴墨印表機",      "correct": false},
                {"option": "點陣印表機",     "correct": true},
                {"option": "鐳射印表機",      "correct": false},
                {"option": "快照印表機",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 點陣印表機.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 點陣印表機.</p>" // no comma here
        },
		{ // Question 15 - Multiple Choice, Single True Answer
            "q": "下列何者兼具輸入與輸出功能?",
            "a": [
                {"option": "鍵盤",      "correct": false },
                {"option": "印表機",     "correct": false},
                {"option": "觸控式螢幕",      "correct": true},
                {"option": "滑鼠",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 觸控式螢幕.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 觸控式螢幕.</p>" // no comma here
        },
		{ // Question 16 - Multiple Choice, Single True Answer
            "q": "整個電腦系統的心臟是?",
            "a": [
                {"option": "算術邏輯單元",      "correct": false},
                {"option": "控制單元",     "correct": false},
                {"option": "記憶單元",      "correct": false},
                {"option": "中央處理單元",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 中央處理單元.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 中央處理單元.</p>" // no comma here
        },
		{ // Question 17 - Multiple Choice, Single True Answer
            "q": "用來計算解碼、指令及指示各部門執行工作的設備是?",
            "a": [
                {"option": "ALU",      "correct": false},
                {"option": "記憶單元",     "correct": false},
                {"option": "控制單元",      "correct": true},
                {"option": "I/O",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 控制單元.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 控制單元.</p>" // no comma here
        },
		{ // Question 18 - Multiple Choice, Single True Answer
            "q": "CPU到記憶體中取出指令至執行完成所花的時間稱為?",
            "a": [
                {"option": "指令週期",      "correct": false},
                {"option": "機器週期",     "correct": true},
                {"option": "找尋週期",      "correct": false},
                {"option": "資料傳輸週期",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 機器週期.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 機器週期.</p>" // no comma here
        },
		{ // Question 19 - Multiple Choice, Single True Answer
            "q": "下列何者並非真值表的使用目的?",
            "a": [
                {"option": "邏輯式子的另一種表示法",      "correct": false},
                {"option": "說明邏輯電路的輸出入關係 ",     "correct": false},
                {"option": "定義邏輯電路實際連接方式 ",      "correct": true},
                {"option": "顯示布林函數的意義",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 定義邏輯電路實際連接方式.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 定義邏輯電路實際連接方式.</p>" // no comma here
        },
		{ // Question 20 - Multiple Choice, Single True Answer
            "q": "種最基本的邏輯運算子符號是?",
            "a": [
                {"option": "OT. NOR, NAND",      "correct": false},
                {"option": "OR. NOR, XOR",     "correct": false},
                {"option": "NOT, NAND, XOR",      "correct": false},
                {"option": "OT, AND, OR",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> OT, AND, OR.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : OT, AND, OR.</p>" // no comma here
        },
		{ // Question 21 - Multiple Choice, Single True Answer
            "q": "下列何者為CPU執行程式的正確順序?",
            "a": [
                {"option": "取資料、執行、解碼",      "correct": false},
                {"option": "解碼、取指令、執行",     "correct": false},
                {"option": "執行、取資料、解碼",      "correct": false},
                {"option": "取指令、解碼、執行",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 取指令、解碼、執行.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 取指令、解碼、執行.</p>" // no comma here
        },
		{ // Question 22 - Multiple Choice, Single True Answer
            "q": "動態隨機存取記憶體適合作為下列哪一種記憶體?",
            "a": [
                {"option": "快取記憶體",      "correct": false},
                {"option": "隨身碟記憶體",     "correct": false},
                {"option": "主記憶體",      "correct": true},
                {"option": "主機板上的BIOS記憶體",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 主記憶體.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 主記憶體.</p>" // no comma here
        },
		{ // Question 23 - Multiple Choice, Single True Answer
            "q": "關於靜態隨機存取記憶體(SRAM)與動態隨機存取記憶體(DRAM)的比較，下列何者正確?",
            "a": [
                {"option": "SRAM只適合存取不會變動的靜態資料",      "correct": false},
                {"option": "SRAM的存取速度較快",     "correct": true},
                {"option": "DRAM所需的積體電路元件較多",      "correct": false},
                {"option": "DRAM是利用電阻來儲存資料",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> SRAM的存取速度較快.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : SRAM的存取速度較快.</p>" // no comma here
        },{ // Question 24 - Multiple Choice, Single True Answer
            "q": "電腦數字系統中，1的補數相當於哪一個邏輯閘?",
            "a": [
                {"option": "NAND",      "correct": false},
                {"option": "NOR",     "correct": false},
                {"option": "NOT",      "correct": true},
                {"option": "XOR",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> NOT.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : NOT.</p>" // no comma here
        },
		{ // Question 25 - Multiple Choice, Single True Answer
            "q": "數目0101與1110執行AND運算之後，其結果為?",
            "a": [
                {"option": "0100",      "correct": true},
                {"option": "1110",     "correct": false},
                {"option": "1111",      "correct": false},
                {"option": "0101",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 0100.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 0100.</p>" // no comma here
        },
		{ // Question 26 - Multiple Choice, Single True Answer
            "q": "數目0100與1110執行OR運算之後，其結果為?",
            "a": [
                {"option": "100",      "correct": true},
                {"option": "1111",     "correct": false},
                {"option": "1110",      "correct": false},
                {"option": "0001",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 100.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 100.</p>" // no comma here
        },
        
		{ // Question 28 - Multiple Choice, Single True Answer
            "q": "一個全加器可以用下列何種元件組合而成?",
            "a": [
                {"option": "二個半加器及一個AND閘",      "correct": false},
                {"option": "二個半加器及一個OR閘",     "correct": true},
                {"option": "一個半加器及二個OR閘",      "correct": false},
                {"option": "一個半加器及二個AND閘",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 二個半加器及一個OR閘.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 二個半加器及一個OR閘.</p>" // no comma here
        },
		{ // Question 29 - Multiple Choice, Single True Answer
            "q": "至少要幾個NAND邏輯閘才能組成一個OR邏輯閘?",
            "a": [
                {"option": "2",      "correct": false},
                {"option": "3",     "correct": true},
                {"option": "4",      "correct": false},
                {"option": "5",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 3.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 3.</p>" // no comma here
        },
		{ // Question 30 - Multiple Choice, Single True Answer
            "q": "以下哪一個二進位的運算結果為1010?",
            "a": [
                {"option": "0101與0000進行AND運算",      "correct": false},
                {"option": "0101與1111進行OR運算",     "correct": false},
                {"option": "0101與0000進行XOR運算",      "correct": false},
                {"option": "0101與1111進行XOR運算",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 0101與1111進行XOR運算.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 0101與1111進行XOR運算.</p>" // no comma here
        }
    ]
	
};
