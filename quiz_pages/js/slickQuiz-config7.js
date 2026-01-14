// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "第七章 線上測驗",
        "main":    "<p>程式語言與軟體工程</p>",
        "results": "<h5>NDHU</h5><p>Reference_GitHub_SlickQuiz(https://github.com/jewlofthelotus/SlickQuiz)</p>",
        "level1":  "計算機概論 專家",
        "level2":  "計算機概論 業餘",
        "level3":  "計算機概論 入門",
        "level4":  "計算機概論 新手",
        "level5":  "請認真學習..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "下列何者不是使用流程圖的好處?",
            "a": [
                {"option": "利於除錯",      "correct": false},
                {"option": "有助於程式設計者與使用者的溝通",     "correct": false},
                {"option": "可減少程式錯誤的機會",      "correct": false},
                {"option": "可控制程式撰寫時間",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 可控制程式撰寫時間.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 可控制程式撰寫時間.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "下列何者不是結構化程式的優點?",
            "a": [
                {"option": "容易瞭解",      "correct": false},
                {"option": "容易維護",   "correct": false},
                {"option": "容易書寫、測試、除錯",    "correct": false},
                {"option": "減少CPU的執行時間", "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 減少CPU的執行時間.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 減少CPU的執行時間.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "結構化程式觀念中，從上到下依序執行的結構是?",
            "a": [
                {"option": "循序結構",      "correct": true},
                {"option": "選擇結構",     "correct": false},
                {"option": "重複結構",      "correct": false},
                {"option": "互動結構",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 循序結構.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 循序結構.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Single True Answer
            "q": "結構化程式設計的三種基本結構為循序、選擇以及?",
            "a": [
                {"option": "直接",      "correct": false},
                {"option": "隨機",     "correct": false},
                {"option": "重複",      "correct": true},
                {"option": "相關",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 重複.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 重複.</p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Single True Answer
            "q": "下列有關BASIC語言的敘述，何者正確?",
            "a": [
                {"option": "BASIC語言是由美國史丹佛大學的教授所發展出來的",      "correct": false},
                {"option": "BASIC語言是一種高階語言",     "correct": true},
                {"option": "BASIC語言只能被直譯，不能被編譯",      "correct": false},
                {"option": "BASIC語言不能用來撰寫視窗程式",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> BASIC語言是一種高階語言.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : BASIC語言是一種高階語言.</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Single True Answer
            "q": "“–>”流程圖符號是？",
            "a": [
                {"option": "流向符號",      "correct": true},
                {"option": "決策符號",     "correct": false},
                {"option": "迴圈符號",      "correct": false},
                {"option": "處理符號",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 流向符號.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 流向符號.</p>" // no comma here
        },
		{ // Question 7 - Multiple Choice, Single True Answer
            "q": "下列何種語言是由0-9，A-F組成之十六進位數字系統來表示？",
            "a": [
                {"option": "自然語言",      "correct": false},
                {"option": "組合語言",     "correct": true},
                {"option": "高階語言",      "correct": false},
                {"option": "機器語言",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 組合語言.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 組合語言.</p>" // no comma here
        },
		{ // Question 8 - Multiple Choice, Single True Answer
            "q": "下列何者為高階語言所具有的特性？",
            "a": [
                {"option": "易讀、易懂、易寫",      "correct": true},
                {"option": "隨機種而改變",     "correct": false},
                {"option": "不需經過翻譯便可執行",      "correct": false},
                {"option": "執行時間最短",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 易讀、易懂、易寫.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 易讀、易懂、易寫.</p>" // no comma here
        },
		{ // Question 9 - Multiple Choice, Single True Answer
            "q": "在物件導向的觀念中，下列何者表示某類別之屬性",
            "a": [
                {"option": "電視在播映DVD影片",      "correct": false},
                {"option": "電腦在編譯VB程式",     "correct": false},
                {"option": "電鍋使用110V伏特電壓",      "correct": true},
                {"option": "電子雞在唱KTV",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 電鍋使用110V伏特電壓.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 電鍋使用110V伏特電壓.</p>" // no comma here
        },
		{ // Question 10 - Multiple Choice, Single True Answer
            "q": "當程式設計以物件導向方式開發一個“校務行政課程管理系統”時，下列何者通常不會以類別（class）來表示?",
            "a": [
                {"option": "學生",      "correct": false},
                {"option": "教師",     "correct": false},
                {"option": "課程",      "correct": false},
                {"option": "姓名",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 姓名.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 姓名.</p>" // no comma here
        },
		{ // Question 11 - Multiple Choice, Single True Answer
            "q": "下列語言何者不具物件導向的特性?",
            "a": [
                {"option": "cobol",      "correct": true},
                {"option": "java",     "correct": false},
                {"option": "c++",      "correct": false},
                {"option": "visual basic",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> cobol.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : cobol.</p>" // no comma here
        },
		{ // Question 12 - Multiple Choice, Single True Answer
            "q": "下列何種為物件導向式語言?",
            "a": [
                {"option": "C++",      "correct": false},
                {"option": "fortran",     "correct": false},
                {"option": "pascal",      "correct": true},
                {"option": "cobol",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> pascal.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : pascal.</p>" // no comma here
        },
		{ // Question 13 - Multiple Choice, Single True Answer
            "q": "BASIC語言是屬於哪一類的程式語言?",
            "a": [
                {"option": "機器語言",      "correct": false},
                {"option": "低階語言",     "correct": false},
                {"option": "高階語言",      "correct": true},
                {"option": "自然語言",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 高階語言.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 高階語言.</p>" // no comma here
        },
		{ // Question 14 - Multiple Choice, Single True Answer
            "q": "下列語言，何者為最低階語言?",
            "a": [
                {"option": "機器語言",      "correct": true},
                {"option": "組合語言",     "correct": false},
                {"option": "自然語言",      "correct": false},
                {"option": "C語言",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 機器語言.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 機器語言.</p>" // no comma here
        },
		{ // Question 15 - Multiple Choice, Single True Answer
            "q": "CPU可直接執行的程式语言是下列何者",
            "a": [
                {"option": "機器語言",      "correct": true},
                {"option": "組合語言",     "correct": false},
                {"option": "高階語言",      "correct": false},
                {"option": "低階語言",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 機器語言.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 機器語言.</p>" // no comma here
        },
		{ // Question 16 - Multiple Choice, Single True Answer
            "q": "程式設計師通常不使用機器語言來撰寫程式，其原因是?",
            "a": [
                {"option": "機器語言可讀性差",      "correct": true},
                {"option": "機器語言須經過編譯才能執行",     "correct": false},
                {"option": "機器語言執行速度慢",      "correct": false},
                {"option": "機器語言指令功能少",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 機器語言可讀性差.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 機器語言可讀性差.</p>" // no comma here
        },
		{ // Question 17 - Multiple Choice, Single True Answer
            "q": "下列有關程式語言的敘述，何者有誤?",
            "a": [
                {"option": "機器語言的指令是有0與1組成",      "correct": false},
                {"option": "组合语言不需翻譯，電腦即可執行",     "correct": true},
                {"option": "機器語言屬於低階語言",      "correct": false},
                {"option": "高階語言的語法較接近人類語言",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 组合语言不需翻譯，電腦即可執行.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 组合语言不需翻譯，電腦即可執行.</p>" // no comma here
        },
		{ // Question 18 - Multiple Choice, Single True Answer
            "q": "一個高階語言程式的發展過程為下列何者?",
            "a": [
                {"option": "編輯，編譯，執行，連結/載入",      "correct": false},
                {"option": "編譯，編輯，執行，連結/載入",     "correct": false},
                {"option": "編輯，編譯，連結/載入，執行",      "correct": true},
                {"option": "編輯，連結/載入，編譯，執行",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 編輯，編譯，連結/載入，執行.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 編輯，編譯，連結/載入，執行.</p>" // no comma here
        },
		{ // Question 19 - Multiple Choice, Single True Answer
            "q": "下列何種電腦語言和人類的語言最相近，且廣為大眾所使用 ?",
            "a": [
                {"option": "中階語言",      "correct": false},
                {"option": "組合語言",     "correct": false},
                {"option": "高階語言",      "correct": true},
                {"option": "機器語言",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 高階語言.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 高階語言.</p>" // no comma here
        },
		{ // Question 20 - Multiple Choice, Single True Answer
            "q": "在電腦程式語言的演進過程中，機器語言屬於第一代語言，組合語言屬於第二代語言，下列關於機器語言及組合語言在不同電腦中使用的敘述，何者正確?",
            "a": [
                {"option": "需使用相同的機器語言和相同的組合語言",      "correct": false},
                {"option": "需使用相同的機器語言和不同的組合語言",     "correct": false},
                {"option": "需使用不同的機器語言和相同的組合語言",      "correct": false},
                {"option": "需使用不同的機器語言和不同的組合語言",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 需使用不同的機器語言和不同的組合語言.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 需使用不同的機器語言和不同的組合語言.</p>" // no comma here
        },
		{ // Question 21 - Multiple Choice, Single True Answer
            "q": "機器語言及組合語言又稱為?",
            "a": [
                {"option": "低階語言",      "correct": true},
                {"option": "人工智慧語言",     "correct": false},
                {"option": "套裝軟體語言",      "correct": false},
                {"option": "高階語言",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 低階語言.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 低階語言.</p>" // no comma here
        },
		{ // Question 22 - Multiple Choice, Single True Answer
            "q": "稱為符號語言或易記碼的是?",
            "a": [
                {"option": "機器語言",      "correct": false},
                {"option": "組合語言",     "correct": true},
                {"option": "C語言",      "correct": false},
                {"option": "商用程式語言",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 組合語言.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 組合語言.</p>" // no comma here
        },
		{ // Question 23 - Multiple Choice, Single True Answer
            "q": "對C語言的描述，下列何者有誤?",
            "a": [
                {"option": "兼具高階語言與低階語言之特性",      "correct": false},
                {"option": "執行速度較一般高階語言快",     "correct": false},
                {"option": "最適合作商業性資料處理之語言",      "correct": true},
                {"option": "語法較接近Pascal語言",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 最適合作商業性資料處理之語言.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 最適合作商業性資料處理之語言.</p>" // no comma here
        },
        { // Question 24 - Multiple Choice, Single True Answer
            "q": "JAVA是屬於何種語言?",
            "a": [
                {"option": "組合語言",      "correct": false},
                {"option": "機器語言",     "correct": false},
                {"option": "低階語言",      "correct": false},
                {"option": "高階語言",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 高階語言.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 高階語言.</p>" // no comma here
        },
		{ // Question 25 - Multiple Choice, Single True Answer
            "q": "下列何者不是C或C++的迴圈指令?",
            "a": [
                {"option": "While迴圈",      "correct": false},
                {"option": "For迴圈",     "correct": false },
                {"option": "Loop迴圈",      "correct": true},
                {"option": "Do while 迴圈",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> Loop迴圈.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : Loop迴圈.</p>" // no comma here
        },
		{ // Question 26 - Multiple Choice, Single True Answer
            "q": "下列何者可能為機器語言之指令?",
            "a": [
                {"option": "a=b+c",      "correct": false},
                {"option": "1000110010100000",     "correct": true},
                {"option": "add $t0, $s1, $s2",      "correct": false},
                {"option": "11=10+12",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 1000110010100000.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 1000110010100000.</p>" // no comma here
        },
		{ // Question 27 - Multiple Choice, Single True Answer
            "q": "下列選項中為有關C與C++程式語言之比較，何者正確?",
            "a": [
                {"option": "C之歷史較C++長久，並且C具有支援物件導向程式設計之功能",      "correct": false},
                {"option": "C與C++支援之資料形態相同，並使用相同之運算符號",     "correct": false},
                {"option": "C是C++發展之基礎，故二者之語法規則相似",      "correct": true},
                {"option": "C語言編寫之程式使用編譯器處理，C++語言編寫之程式使用直譯器處理",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> C是C++發展之基礎，故二者之語法規則相似.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : C是C++發展之基礎，故二者之語法規則相似.</p>" // no comma here
        },
		{ // Question 28 - Multiple Choice, Single True Answer
            "q": "下列選項中為有關C與C++程式語言之比較，何者正確?",
            "a": [
                {"option": "C與C++程式語言皆規定了具有特定意義之關鍵字，且C程式語言規定之關鍵字數量多於C++",      "correct": true},
                {"option": "C與C++程式語言中，if/else及switch/case等敘述之語法規則皆相同",     "correct": false},
                {"option": "C與C++程式語言中，宣告資料變數等敘述之語法規則皆相同",      "correct": false},
                {"option": "C與C++程式語言中，定義一函式之語法規則皆相同",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> C與C++程式語言皆規定了具有特定意義之關鍵字，且C程式語言規定之關鍵字數量多於C++.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : C與C++程式語言皆規定了具有特定意義之關鍵字，且C程式語言規定之關鍵字數量多於C++.</p>" // no comma here
        },
		{ // Question 29 - Multiple Choice, Single True Answer
            "q": "以下程式片段執行完畢後，陣列b中各元素的值分別為多少?\nint a[5], b[5];\nfor(i = 0; i<=4; i++){\na[i]=i;\nb[4-i] = a[i]*2;\n}",
			   
            "a": [
                {"option": "0，2，4，6，8",      "correct": false},
                {"option": "0，1，2，3，4",     "correct": false},
                {"option": "4，3，2，1，0",      "correct": false},
                {"option": "8，6，4，2，0",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 8，6，4，2，0.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 8，6，4，2，0.</p>" // no comma here
        },
		{ // Question 30 - Multiple Choice, Single True Answer
            "q": "請問“電影院門前多位售票員在售票”，這一工作模式對應的費林分類的計算架構為?",
            "a": [
                {"option": "int k, sum=0; for(k=1; k<=99; k++){if(k%2==0) sum+=k;}",      "correct": false},
                {"option": "int k, sum=0;while(k<=99){k+=2;sum+=k;}",     "correct": false},
                {"option": "int k=1, sum=0;while(k<=99){sum+=k;k+=2;}",      "correct": true},
                {"option": "int k=2, sum=0;while(k<=99){sum++;k+=2;}",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> int k=1, sum=0;while(k<=99){sum+=k;k+=2;}.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : int k=1, sum=0;while(k<=99){sum+=k;k+=2;}.</p>" // no comma here
        }
    ]
	
};
