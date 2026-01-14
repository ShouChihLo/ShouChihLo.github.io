// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "第一章 線上測驗",
        "main":    "<p>數字系統</p>",
        "results": "<h5>NDHU</h5><p>Reference_GitHub_SlickQuiz(https://github.com/jewlofthelotus/SlickQuiz)</p>",
        "level1":  "計算機概論 專家",
        "level2":  "計算機概論 業餘",
        "level3":  "計算機概論 入門",
        "level4":  "計算機概論 新手",
        "level5":  "請認真學習..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "人類習慣使用哪一種數字系統計算事物?",
            "a": [
                {"option": "二進制",      "correct": false},
                {"option": "八進制",     "correct": false},
                {"option": "十六進制",      "correct": false},
                {"option": "十進制",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 十進制.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 十進制.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "十進制數438轉換為十六進制會等於?",
            "a": [
                {"option": "1b6",      "correct": true},
                {"option": "1a6",   "correct": false},
                {"option": "16b",    "correct": false},
                {"option": "16a", "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 1b6.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 1b6.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "電腦所使用的數字系統只能使用哪兩個數字來表示?",
            "a": [
                {"option": "01",      "correct": true},
                {"option": "02",     "correct": false},
                {"option": "12",      "correct": false},
                {"option": "1A",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 01.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 01.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Single True Answer
            "q": "中文字通常是以幾個BYTES來編碼?",
            "a": [
                {"option": "1",      "correct": false},
                {"option": "2",     "correct": true},
                {"option": "3",      "correct": false},
                {"option": "4",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 2.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 2.</p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Single True Answer
            "q": "浮點表示法中，單精倍是以幾個位元來表示?",
            "a": [
                {"option": "16",      "correct": false},
                {"option": "32",     "correct": false},
                {"option": "64",      "correct": false},
                {"option": "90",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 90.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 90.</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Single True Answer
            "q": "二進位010101111110 轉換為十六進位，其值為？",
            "a": [
                {"option": "56e",      "correct": false},
                {"option": "57e",     "correct": true},
                {"option": "57f",      "correct": false},
                {"option": "67e",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 57e.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 57e.</p>" // no comma here
        },
		{ // Question 7 - Multiple Choice, Single True Answer
            "q": "若X進制數110=十進制數72，請問X為何？",
            "a": [
                {"option": "6",      "correct": false},
                {"option": "7",     "correct": false},
                {"option": "8",      "correct": true},
                {"option": "9",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 8.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 8.</p>" // no comma here
        },
		{ // Question 8 - Multiple Choice, Single True Answer
            "q": "二進位1100101的2的補數為？",
            "a": [
                {"option": "0001010",      "correct": false},
                {"option": "0001011",     "correct": false},
                {"option": "0011011",      "correct": true},
                {"option": "0011010",     "correct": false } // no comma here
            ],
            "correct": "<p><span>答對!</span> 0011011.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 0011011.</p>" // no comma here
        },
		{ // Question 9 - Multiple Choice, Single True Answer
            "q": "電腦的硬碟空間有40GB，其容量為",
            "a": [
                {"option": "40*(2^20)bytes",      "correct": false},
                {"option": "40*(2^30)bytes",     "correct": true},
                {"option": "40*(2^20)bits",      "correct": false},
                {"option": "40*(2^30)bits",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 40*(2^30)bytes.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 40*(2^30)bytes.</p>" // no comma here
        },
		{ // Question 10 - Multiple Choice, Single True Answer
            "q": "主記憶體以K為單位，那麼16KB=?bytes",
            "a": [
                {"option": " 2^10",      "correct": false},
                {"option": "2^14",     "correct": true},
                {"option": "2^20",      "correct": false},
                {"option": "2^24",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 2^14.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 2^14.</p>" // no comma here
        },
		{ // Question 11 - Multiple Choice, Single True Answer
            "q": "電腦記憶體容量大小的單位通常用KB、TB、GB或MB表示，這四種單位由大到小的排列為?",
            "a": [
                {"option": "KB>TB>GB>MB",      "correct": false},
                {"option": "GB>TB>MB>KB",     "correct": false},
                {"option": "TB>GB>MB>KB",      "correct": true},
                {"option": "MB>KB>TB>GB",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> TB>GB>MB>KB.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : TB>GB>MB>KB.</p>" // no comma here
        },
		{ // Question 12 - Multiple Choice, Single True Answer
            "q": "於KB、MB、GB何者錯誤?",
            "a": [
                {"option": "1KB<1GB",      "correct": false},
                {"option": "1MB=1024KB",     "correct": false},
                {"option": "1GB=1024KB",      "correct": true},
                {"option": "1KB=1024B",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 1GB=1024KB.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 1GB=1024KB.</p>" // no comma here
        },
		{ // Question 13 - Multiple Choice, Single True Answer
            "q": "下列資料量的大小關係，何者錯誤?",
            "a": [
                {"option": "1M Bytes>1M bits",      "correct": false},
                {"option": "1G Bytes>1M Bytes",     "correct": false},
                {"option": "1K Bytes>1M Bytes",      "correct": true},
                {"option": "1G bits>1M Bytes",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 1K Bytes>1M Bytes.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 1K Bytes>1M Bytes.</p>" // no comma here
        },
		{ // Question 14 - Multiple Choice, Single True Answer
            "q": "1GB的記憶體容量可儲存2的多少次方個位元組的資料?",
            "a": [
                {"option": "10",      "correct": false},
                {"option": "20",     "correct": false},
                {"option": "30",      "correct": true},
                {"option": "40",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 30.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 30.</p>" // no comma here
        },
		{ // Question 15 - Multiple Choice, Single True Answer
            "q": " 十六進位數(2B) 的2’s補數是?",
            "a": [
                {"option": "11010100",      "correct": false},
                {"option": "11010101",     "correct": true},
                {"option": "00101100",      "correct": false},
                {"option": "00101011",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 11010101.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 11010101.</p>" // no comma here
        },
		{ // Question 16 - Multiple Choice, Single True Answer
            "q": "假如我們要在基底為r進位的數字系統下表示數字N，常見的數字系統表示法不包括?",
            "a": [
                {"option": "Nr",      "correct": false},
                {"option": "(N)r",     "correct": false},
                {"option": "N(r)",      "correct": false},
                {"option": "(N)(r)",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> (N)(r).</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : (N)(r).</p>" // no comma here
        },
		{ // Question 17 - Multiple Choice, Single True Answer
            "q": "若記憶體的容量為32MB，其意指?",
            "a": [
                {"option": "2^25 BITS",      "correct": false},
                {"option": "2^20 BITS",     "correct": false},
                {"option": "2^25 BYTES",      "correct": true},
                {"option": "2^20 BYTES",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 2^25 BYTES.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 2^25 BYTES.</p>" // no comma here
        },
		{ // Question 18 - Multiple Choice, Single True Answer
            "q": "我們說一部電腦是8位元的、16位元的或是32位元的等等，請問那是指什麼意思?",
            "a": [
                {"option": "電腦對於記憶體最小單元的設定",      "correct": false},
                {"option": "電腦對網路傳遞資料分割的最小單位",     "correct": false},
                {"option": "電腦一次到主記憶體抓去資料的量",      "correct": true},
                {"option": "電腦的傳輸速度",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 電腦一次到主記憶體抓去資料的量.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 電腦一次到主記憶體抓去資料的量.</p>" // no comma here
        },
		{ // Question 19 - Multiple Choice, Single True Answer
            "q": "1000KB和1MB何者表示較大的值?",
            "a": [
                {"option": "前者",      "correct": false},
                {"option": "後者",     "correct": true},
                {"option": "相等",      "correct": false},
                {"option": "無法比較",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 後者.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 後者.</p>" // no comma here
        },
		{ // Question 20 - Multiple Choice, Single True Answer
            "q": "若每個中文字可用16位元表示，現有台北市200萬人，每個人的名字最多有4個中文字，試問要使用多少記憶空間方能全部記錄所有人的名字?",
            "a": [
                {"option": "16M bytes",      "correct": true},
                {"option": "32M bytes",     "correct": false},
                {"option": "16G bytes",      "correct": false},
                {"option": "32G bytes",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 16M bytes.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 16M bytes.</p>" // no comma here
        },
		{ // Question 21 - Multiple Choice, Single True Answer
            "q": "在計算機表示二進位負數，目前最通用的方法是?",
            "a": [
                {"option": "1’s 補數法",      "correct": false},
                {"option": "2’s 補數法",     "correct": true},
                {"option": "符號—大小表示法",      "correct": false},
                {"option": "以上皆非",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 2’s 補數法.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 2’s 補數法.</p>" // no comma here
        },
		{ // Question 22 - Multiple Choice, Single True Answer
            "q": "下列有關數字系統之敘述，何者錯誤?",
            "a": [
                {"option": "二進位數（10010100）的2's補數是01101100",      "correct": false},
                {"option": "二進位數（10010100）的1's補數是01101100",     "correct": false},
                {"option": "若負數以2的補數法表示，則二進位數（10010100）=十進位數（-108）",      "correct": false},
                {"option": "二進位數（10010100）=八進位數（424）",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 二進位數（10010100）=八進位數（424）.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 二進位數（10010100）=八進位數（424）.</p>" // no comma here
        },
		{ // Question 23 - Multiple Choice, Single True Answer
            "q": "以八個位元表示一整數，若不考慮正負，則最大值為?",
            "a": [
                {"option": "127",      "correct": false},
                {"option": "128",     "correct": false},
                {"option": "255",      "correct": true},
                {"option": "256",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 255.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 255.</p>" // no comma here
        },{ // Question 24 - Multiple Choice, Single True Answer
            "q": "2進位數值11001101之1的補數為何者?",
            "a": [
                {"option": "11000010",      "correct": false},
                {"option": "00110010",     "correct": true},
                {"option": "00110011",      "correct": false},
                {"option": "00011001",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 00110010.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 00110010.</p>" // no comma here
        },
		{ // Question 25 - Multiple Choice, Single True Answer
            "q": "2進位數值11001101之2的補數為何?",
            "a": [
                {"option": "11001010",      "correct": false},
                {"option": "00111011",     "correct": false},
                {"option": "00110011",      "correct": true},
                {"option": "00111010",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 00110011.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 00110011.</p>" // no comma here
        },
		{ // Question 26 - Multiple Choice, Single True Answer
            "q": "試求二進位數10110110之1的補數和2的補數?",
            "a": [
                {"option": "01001001與01001010",      "correct": true},
                {"option": "01001010與01001001",     "correct": false},
                {"option": "01001001與10110110",      "correct": false},
                {"option": "10110111與10111010",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 01001001與01001010.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 01001001與01001010.</p>" // no comma here
        },
		{ // Question 27 - Multiple Choice, Single True Answer
            "q": "下列哪一個數字不是二進位數的表示法?",
            "a": [
                {"option": "101",      "correct": false},
                {"option": "1A",     "correct": false},
                {"option": "1",      "correct": false},
                {"option": "11001",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 11001.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 11001.</p>" // no comma here
        },
		{ // Question 28 - Multiple Choice, Single True Answer
            "q": "四個位元的二進位可代表幾種狀況?",
            "a": [
                {"option": "2",      "correct": false},
                {"option": "4",     "correct": false},
                {"option": "8",      "correct": false},
                {"option": "16",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 16.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 16.</p>" // no comma here
        },
		{ // Question 29 - Multiple Choice, Single True Answer
            "q": "八進制數字系統的最大數為?",
            "a": [
                {"option": "1",      "correct": false},
                {"option": "8",     "correct": false},
                {"option": "7",      "correct": true},
                {"option": "F",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 7.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 7.</p>" // no comma here
        },
		{ // Question 30 - Multiple Choice, Single True Answer
            "q": "下列何者在八進位或十進位數字系統之下，其基底不同但其值皆相同?",
            "a": [
                {"option": "7",      "correct": true},
                {"option": "10",     "correct": false},
                {"option": "13",      "correct": false},
                {"option": "16",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 7.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 7.</p>" // no comma here
        }
    ]
	
};
