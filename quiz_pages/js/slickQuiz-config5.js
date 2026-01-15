/ Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "第五章 線上測驗",
        "main":    "<p>作業系統</p>",
        "results": "<h5>NDHU</h5><p>Reference_GitHub_SlickQuiz(https://github.com/jewlofthelotus/SlickQuiz)</p>",
        "level1":  "計算機概論 專家",
        "level2":  "計算機概論 業餘",
        "level3":  "計算機概論 入門",
        "level4":  "計算機概論 新手",
        "level5":  "請認真學習..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "我們常說的“多工”指的是作業系統?",
            "a": [
                {"option": "允許在同一個時間內執行一個以上的程式",      "correct": true},
                {"option": "允許在同一個時間內由一個以上的使用者來執行程式 ",     "correct": false},
                {"option": "允許同一個使用者在不同地點執行同一個程式",      "correct": false},
                {"option": "允許一個以上的使用者執行同一個程式B",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 允許在同一個時間內執行一個以上的程式.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 允許在同一個時間內執行一個以上的程式.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "下列何者不是作業系統的主要功能?",
            "a": [
                {"option": "儲存資料",      "correct": false},
                {"option": "提供執行應用軟體的環境",   "correct": true},
                {"option": "分配系統資源",    "correct": false},
                {"option": "提供使用者介面", "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 提供執行應用軟體的環境.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 提供執行應用軟體的環境.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "以下何者監管電腦系統各個部分的活動?",
            "a": [
                {"option": "作業系統",      "correct": true},
                {"option": "硬體系統",     "correct": false},
                {"option": "公用程式",      "correct": false},
                {"option": "應用程式",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 作業系統.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 作業系統.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Single True Answer
            "q": "下列何者不是作業系統的主要任務?",
            "a": [
                {"option": "分配系統當中所有的記憶體",      "correct": false},
                {"option": "與底層的硬體互動",     "correct": false},
                {"option": "協助程序間的溝通",      "correct": false},
                {"option": "將文字檔編譯成執行檔以利執行",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 將文字檔編譯成執行檔以利執行.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 將文字檔編譯成執行檔以利執行.</p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Single True Answer
            "q": "下列關於作業系統的敘述，何者錯誤?",
            "a": [
                {"option": "作業系統作為使用者與電腦硬體之間的媒介",      "correct": false},
                {"option": "作業系統是一個管理電腦硬體的程式",     "correct": false},
                {"option": "作業系統是一個控制程式，掌管使用者程式的執行，並避免使用者不正  當的使用電腦系統資源",      "correct": false},
                {"option": "作業系統可以解決使用者的所有問題",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 作業系統可以解決使用者的所有問題.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 作業系統可以解決使用者的所有問題.</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Single True Answer
            "q": "哪一種CPU中的工作排班方法可以得到最少的等候時間？",
            "a": [
                {"option": "先進先做排程法",      "correct": false},
                {"option": "最短工作優先排程法",     "correct": true},
                {"option": "優先等級排程法",      "correct": false},
                {"option": "巡迴排程法",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 最短工作優先排程法.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 最短工作優先排程法.</p>" // no comma here
        },
		{ // Question 7 - Multiple Choice, Single True Answer
            "q": "以下關於記憶體分頁（paging）的功能敘述何者錯誤？",
            "a": [
                {"option": "記憶體分頁技術所使用的頁轉換表上可以加上一些特別的旗標（flag），藉由這些旗標可以指定各個分頁的存取權限",      "correct": false},
                {"option": "記憶體分頁技術可以讓數個不同的程序共用同一塊記憶體，在某些情況下甚至可以公用程式區段及資料區段",     "correct": false},
                {"option": "記憶體分頁技術及記憶體分頁保護技術，可以用以設計寫入時複製（copy on write）以提高系統效能",      "correct": false},
                {"option": "通常越先進的處理器，所採用的分頁大小（page size）越小",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 通常越現金的處理器，所採用的分頁大小（page size）越小.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 通常越現金的處理器，所採用的分頁大小（page size）越小.</p>" // no comma here
        },
		{ // Question 8 - Multiple Choice, Single True Answer
            "q": "當記憶體管理採用分頁的機制時，需要硬體的支援，下列哪一項不屬於相關的硬體支援？",
            "a": [
                {"option": "分頁表",      "correct": false},
                {"option": "記憶體管理單元",     "correct": false},
                {"option": "位置轉換測查緩衝區",      "correct": false},
                {"option": "硬碟",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 硬碟.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 硬碟.</p>" // no comma here
        },
		{ // Question 9 - Multiple Choice, Single True Answer
            "q": "下列關於記憶體分頁的敘述何者錯誤",
            "a": [
                {"option": "目前大部分處理器所採用的記憶體管理單元採用記憶體分頁機制以管理實體記憶體 ",      "correct": false},
                {"option": "為了更有效率，已計提管理單元往往需要搭配轉換查考緩衝區，否則記憶體的存取速度將慢上好幾倍。作業系統往往必須管理轉換查考緩衝區內的資料以避免在本文切換後記憶體轉換錯誤 ",     "correct": false},
                {"option": "Intel的X86處理器的分頁大小可為4K大小或者4M大小",      "correct": false},
                {"option": "使用分頁技巧可以完全避免記憶體內部破碎的問題",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 使用分頁技巧可以完全避免記憶體內部破碎的問題.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 使用分頁技巧可以完全避免記憶體內部破碎的問題.</p>" // no comma here
        },
		{ // Question 10 - Multiple Choice, Single True Answer
            "q": "將磁碟讀寫頭移動到目標磁軌（track）所需的時間，其名稱為何?",
            "a": [
                {"option": "搜尋時間（seek time）",      "correct": true},
                {"option": "旋轉延遲（rotational delay）",     "correct": false},
                {"option": "查詢時間（lookup time）",      "correct": false},
                {"option": "傳輸時間（transfer time）",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 搜尋時間（seek time）.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 搜尋時間（seek time）.</p>" // no comma here
        },
		{ // Question 11 - Multiple Choice, Single True Answer
            "q": "=下列何者為磁片的基本儲存單位?",
            "a": [
                {"option": "磁區",      "correct": true},
                {"option": "磁頭",     "correct": false},
                {"option": "磁軌",      "correct": false},
                {"option": "磁柱",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 磁區.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 磁區.</p>" // no comma here
        },
		{ // Question 12 - Multiple Choice, Single True Answer
            "q": "以下何者是在磁碟中，可以一次存取的最小的儲存區域?",
            "a": [
                {"option": "磁頭",      "correct": false},
                {"option": "磁框",     "correct": false},
                {"option": "磁軌",      "correct": false},
                {"option": "磁區",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 磁區.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 磁區.</p>" // no comma here
        },
		{ // Question 13 - Multiple Choice, Single True Answer
            "q": "下列關於磁碟系統的敘述何者錯誤?",
            "a": [
                {"option": "在系統負載不大的時候先來先服務（first come，first served）演算法和最短尋找時間優先（shortest seek time first）的效率差不多",      "correct": false},
                {"option": "在任何情況下，最短尋找時間優先演算法的效率優於先到先做法",     "correct": false},
                {"option": "掃描演算法（scan）和循環掃描演算法（C-scan）的區別之一，在於後者往往可以讓所有的工作的等待時間較為均等",      "correct": false},
                {"option": "最短尋找時間優先演算法的執行效率雖然不錯，但是它可能讓某一些工作的等待時間變得過長，使得其效率比先來先服務演算法的效率差",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 最短尋找時間優先演算法的執行效率雖然不錯，但是它可能讓某一些工作的等待時間變得過長，使得其效率比先來先服務演算法的效率差.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 最短尋找時間優先演算法的執行效率雖然不錯，但是它可能讓某一些工作的等待時間變得過長，使得其效率比先來先服務演算法的效率差.</p>" // no comma here
        },
		{ // Question 14 - Multiple Choice, Single True Answer
            "q": "下列哪一種排程法通常會造成本文切換（context switch）的次數較多?",
            "a": [
                {"option": "巡迴型排程法",      "correct": true},
                {"option": "優先等級排程法",     "correct": false},
                {"option": "先進先做排程法",      "correct": false},
                {"option": "最短工作優先排程法",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 巡迴型排程法.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 巡迴型排程法.</p>" // no comma here
        },
		{ // Question 15 - Multiple Choice, Single True Answer
            "q": "當多元程式規劃的程度（degree of Multiprogramming）越高（即在記憶體中執行的程序（process）的數目越多），而CPU的使用率不增反降時，通常是發生了下列何種現象?",
            "a": [
                {"option": "振蕩現象",      "correct": true},
                {"option": "Belady’s 異常",     "correct": false},
                {"option": "需求分頁",      "correct": false},
                {"option": "分頁錯誤",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 振蕩現象.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 振蕩現象.</p>" // no comma here
        },
		{ // Question 16 - Multiple Choice, Single True Answer
            "q": "磁碟每一面都是由很多同心圓圈組成，這些圓圈稱為什麼?",
            "a": [
                {"option": "磁區",      "correct": false},
                {"option": "磁軌",     "correct": true},
                {"option": "磁頭",      "correct": false},
                {"option": "磁柱",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 磁軌.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 磁軌.</p>" // no comma here
        },
		{ // Question 17 - Multiple Choice, Single True Answer
            "q": "磁碟中設定地址最小的單位為何?",
            "a": [
                {"option": "磁軌",      "correct": false},
                {"option": "位元",     "correct": false},
                {"option": "位元組",      "correct": false},
                {"option": "磁集",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 磁集.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 磁集.</p>" // no comma here
        },
		{ // Question 18 - Multiple Choice, Single True Answer
            "q": "儲存在磁片中的作業系統稱為?",
            "a": [
                {"option": "OS",      "correct": false},
                {"option": "TOS",     "correct": false},
                {"option": "DOS",      "correct": true},
                {"option": "MOS",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> DOS.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : DOS.</p>" // no comma here
        },
		{ // Question 19 - Multiple Choice, Single True Answer
            "q": "由CPU到主記憶體或磁碟、磁鼓等I/O設備，讀或寫一筆資料所需要的時間，一般稱為?",
            "a": [
                {"option": "搜尋時間（search time）",      "correct": false},
                {"option": "迴轉時間（rotation time）",     "correct": false},
                {"option": "存取時間（access time）",      "correct": true},
                {"option": "轉換時間（transfer time）",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 存取時間（access time）.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 存取時間（access time）.</p>" // no comma here
        },
		{ // Question 20 - Multiple Choice, Single True Answer
            "q": "將讀寫頭定位到所有指定磁軌的時間，稱為?",
            "a": [
                {"option": "尋找時間",      "correct": false},
                {"option": "旋轉時間",     "correct": true},
                {"option": "安置時間",      "correct":false },
                {"option": "潛伏時間",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 旋轉時間.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 旋轉時間.</p>" // no comma here
        },
		{ // Question 21 - Multiple Choice, Single True Answer
            "q": "下列何者可用以辨識磁軌存放資料的起始位置?",
            "a": [
                {"option": "讀寫槽",      "correct": false},
                {"option": "轉軸孔",     "correct": false},
                {"option": "索引孔",      "correct": true},
                {"option": "防寫孔",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 索引孔.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 索引孔.</p>" // no comma here
        },
		{ // Question 22 - Multiple Choice, Single True Answer
            "q": "在磁碟組中，由一些不同平面上相同半徑的磁軌組合而成的區域，稱為?",
            "a": [
                {"option": "磁柱",      "correct": true},
                {"option": "磁區",     "correct": false},
                {"option": "磁面",      "correct": false},
                {"option": "磁集",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 磁柱.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 磁柱.</p>" // no comma here
        },
		{ // Question 23 - Multiple Choice, Single True Answer
            "q": "Windows 95/98/2000/xp屬於何種作業系統?",
            "a": [
                {"option": "單人單工",      "correct": false},
                {"option": "單人多工",     "correct": true},
                {"option": "人單工",      "correct": false},
                {"option": "多人多工",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 單人多工.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 單人多工.</p>" // no comma here
        },
        { // Question 24 - Multiple Choice, Single True Answer
            "q": "下列哪一種作業系統類型是不存在的 ?",
            "a": [
                {"option": "單人單工",      "correct": false},
                {"option": "單人多工",     "correct": false},
                {"option": "多人單工",      "correct": true},
                {"option": "多人多工",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 多人單工.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 多人單工.</p>" // no comma here
        },
		{ // Question 25 - Multiple Choice, Single True Answer
            "q": "現代電腦除了主記憶體外尚有快取記憶體，其主要的功能為?",
            "a": [
                {"option": "可以減少磁碟空間",      "correct": false},
                {"option": "可以降低主記憶體的成本",     "correct": false},
                {"option": "可以有效低增進程式的整體執行速度",      "correct": true},
                {"option": "可以減少程式偵錯的時間",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 可以有效低增進程式的整體執行速度.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 可以有效低增進程式的整體執行速度.</p>" // no comma here
        },
		{ // Question 26 - Multiple Choice, Single True Answer
            "q": "在作業系統中，一個程序從ready state 轉為running state的條件是?",
            "a": [
                {"option": "該程序已結束執行時",      "correct": false},
                {"option": "該程序要求I/O資料傳輸時",     "correct": false},
                {"option": "該程序被載入到記憶體時",      "correct": false},
                {"option": "改程序獲得CPU權限時",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 改程序獲得CPU權限時.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 改程序獲得CPU權限時.</p>" // no comma here
        },
		{ // Question 27 - Multiple Choice, Single True Answer
            "q": "假設新進三個行程依序為P1,P2,P3，其工作時間依序為3，7和5，請問SJF的等待時間為何?",
            "a": [
                {"option": "11",      "correct": false},
                {"option": "12",     "correct": false},
                {"option": "13",      "correct": false},
                {"option": "14",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 14.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 14.</p>" // no comma here
        },
		{ // Question 28 - Multiple Choice, Single True Answer
            "q": "目前的自由區塊依序分別是5K,12K,3K和14K，現在有一個8K的行程，請問依最先和最糟兩種方法，它分別會被配置到哪個區塊?",
            "a": [
                {"option": "12K和14K",      "correct": true},
                {"option": "12K和5K",     "correct": false},
                {"option": "3K和14K",      "correct": false},
                {"option": "都是14K",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 12K和14K.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 12K和14K.</p>" // no comma here
        },
		{ // Question 29 - Multiple Choice, Single True Answer
            "q": "請問下面的敘述，哪些是不正確的?",
            "a": [
                {"option": "虛擬記憶體可以讓電腦執行超過記憶體大小的程式",      "correct": false},
                {"option": "分段和分頁都會造成內部碎片",     "correct": true},
                {"option": "分頁技術是虛擬記憶體的基礎",      "correct": false},
                {"option": "分頁表也可以使用硬體製作，加快位址轉換的速度",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 分段和分頁都會造成內部碎片.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 分段和分頁都會造成內部碎片.</p>" // no comma here
        },
		{ // Question 30 - Multiple Choice, Single True Answer
            "q": "下列哪兩個為主要記憶體?",
            "a": [
                {"option": "暫存器和記憶體",      "correct": false},
                {"option": "暫存器和儲存體",     "correct": false},
                {"option": "記憶體和儲存體",      "correct": true},
                {"option": "儲存體和內部區塊",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 記憶體和儲存體.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 記憶體和儲存體.</p>" // no comma here
        }
    ]
	
};
