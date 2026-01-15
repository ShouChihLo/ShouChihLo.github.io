// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "第十章 線上測驗",
        "main":    "<p>資料庫系統</p>",
        "results": "<h5>NDHU</h5><p>Reference_GitHub_SlickQuiz(https://github.com/jewlofthelotus/SlickQuiz)</p>",
        "level1":  "計算機概論 專家",
        "level2":  "計算機概論 業餘",
        "level3":  "計算機概論 入門",
        "level4":  "計算機概論 新手",
        "level5":  "請認真學習..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "以下何者是資料庫的定義?",
            "a": [
                {"option": "編製格式整齊文件的方法",      "correct": false},
                {"option": "讓電腦執行複雜數學計算的方法",     "correct": false},
                {"option": "可供資料檢索的檔案集合",      "correct": true},
                {"option": "讓資料在電話線上傳輸的方法",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 可供資料檢索的檔案集合.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 可供資料檢索的檔案集合.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "以下哪個詞句是用來表示相同資料出現在數個檔案中的意思?",
            "a": [
                {"option": "資料不整",      "correct": false},
                {"option": "資料相依",   "correct": false},
                {"option": "資料重複",    "correct": true},
                {"option": "資料安全", "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 資料重複.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 資料重複.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "以下何種資料庫只能由上而下，依序檢索資料?",
            "a": [
                {"option": "階層式資料庫",      "correct": false},
                {"option": "網狀資料庫",     "correct": false},
                {"option": "關聯式資料庫",      "correct": true},
                {"option": "物件導向資料庫",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 關聯式資料庫.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 關聯式資料庫.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Single True Answer
            "q": "資料庫無法直接解決以下哪個問題?",
            "a": [
                {"option": "資料重複",      "correct": false},
                {"option": "資料不一致",     "correct": false},
                {"option": "資料加密",      "correct": false},
                {"option": "資料共享",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 資料共享.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 資料共享.</p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Single True Answer
            "q": "在何種情況下，不該使用資料庫系統?",
            "a": [
                {"option": "要達到資料分享 ",      "correct": true},
                {"option": "需要迫切的即時需求",     "correct": false},
                {"option": "資料獨立",      "correct": false},
                {"option": "資料量大而且隨時需要改變，如更新、加入、刪除等",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 要達到資料分享.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 要達到資料分享.</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Single True Answer
            "q": "假設銀行的資料庫中，每位客戶至少有一個以上的帳戶且一個帳戶可以屬於多個客戶，客戶與帳戶之間的關係為下列哪一種？",
            "a": [
                {"option": "多對多關係",      "correct": true},
                {"option": "多對一關係",     "correct": false},
                {"option": "一對一關係",      "correct": false},
                {"option": "一對多關係",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 多對多關係.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 多對多關係.</p>" // no comma here
        },
		{ // Question 7 - Multiple Choice, Single True Answer
            "q": "下表為課程資料表，試問下列哪些欄位是具有函數依存（functional dependency）關係？？",
            "a": [
                {"option": "學生姓名、課程代號",      "correct": false},
                {"option": "學生姓名、課名",     "correct": false},
                {"option": "課程代號、課名 ",      "correct": true},
                {"option": "學號、課名",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 課程代號、課名.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 課程代號、課名.</p>" // no comma here
        },
		{ // Question 8 - Multiple Choice, Single True Answer
            "q": "DBMS是指？",
            "a": [
                {"option": "資料庫管理系統",      "correct": true},
                {"option": "資料庫",     "correct": false},
                {"option": "資料庫管理師",      "correct": false},
                {"option": "管理資訊系統",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 資料庫管理系統.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 資料庫管理系統.</p>" // no comma here
        },
		{ // Question 9 - Multiple Choice, Single True Answer
            "q": "在三年甲班50名學生的個人資料表中，儲存每人的學好、姓名、性別、生日、地址和電話等資料，以關聯式資料庫而言，對於每一名學生的所有資料，我們稱之為",
            "a": [
                {"option": "欄位",      "correct": false},
                {"option": "記錄",     "correct": false},
                {"option": "表格",      "correct": true},
                {"option": "位元組",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 表格.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 表格.</p>" // no comma here
        },
		{ // Question 10 - Multiple Choice, Single True Answer
            "q": "在資料庫系統中，當檔案的資料結構改變時，處理此檔案的程式通常無須變動，這是資料庫系統的什麼特性?",
            "a": [
                {"option": "完整性",      "correct": false},
                {"option": "獨立性",     "correct": true},
                {"option": "分散性",      "correct": false},
                {"option": "安全性",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 獨立性.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 獨立性.</p>" // no comma here
        },
		{ // Question 11 - Multiple Choice, Single True Answer
            "q": "公司的員工人事資料庫中，最適合作為主鍵（primary key）的個人資料為?",
            "a": [
                {"option": "薪水",      "correct": false},
                {"option": "生日",     "correct": false},
                {"option": "電話",      "correct": false},
                {"option": "身份證字號",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 身份證字號.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 身份證字號.</p>" // no comma here
        },
		{ // Question 12 - Multiple Choice, Single True Answer
            "q": "關聯式資料庫管理系統的英文簡稱是?",
            "a": [
                {"option": "DSS",      "correct": false},
                {"option": "SQL",     "correct": false},
                {"option": "MIS",      "correct": false},
                {"option": "RDBMS",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> RDBMS.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : RDBMS.</p>" // no comma here
        },
		{ // Question 13 - Multiple Choice, Single True Answer
            "q": "下列哪一種欄位不必具有唯一性?",
            "a": [
                {"option": "主鍵",      "correct": false},
                {"option": "次要鍵",     "correct": false},
                {"option": "外來鍵",      "correct": false},
                {"option": "以上皆非",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 以上皆非.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 以上皆非.</p>" // no comma here
        },
		{ // Question 14 - Multiple Choice, Single True Answer
            "q": "下列哪種資料庫模式適合存放一對多關係的資料?",
            "a": [
                {"option": "網狀式",      "correct": false},
                {"option": "關聯式",     "correct": true},
                {"option": "物件導向式",      "correct": false},
                {"option": "階層式",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 關聯式.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 關聯式.</p>" // no comma here
        },
		{ // Question 15 - Multiple Choice, Single True Answer
            "q": "關聯式資料庫的查詢語言叫做什麼?",
            "a": [
                {"option": "OQL",      "correct": false},
                {"option": "SQL",     "correct": true},
                {"option": "RQL",      "correct": false},
                {"option": "MySQL",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> SQL.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : SQL.</p>" // no comma here
        },
		{ // Question 16 - Multiple Choice, Single True Answer
            "q": "下列何者不是資料庫的資料結構之一?",
            "a": [
                {"option": "關聯式",      "correct": false},
                {"option": "階層式",     "correct": false},
                {"option": "網狀式",      "correct": false},
                {"option": "形狀式",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 形狀式.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 形狀式.</p>" // no comma here
        },
		{ // Question 17 - Multiple Choice, Single True Answer
            "q": "下列何者不屬於資料庫的優點?",
            "a": [
                {"option": "減少資料重複儲存",      "correct": false},
                {"option": "容易輸入資料",     "correct": true},
                {"option": "資源共享",      "correct": false},
                {"option": "節省儲存空間",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 容易輸入資料.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 容易輸入資料.</p>" // no comma here
        },
		{ // Question 18 - Multiple Choice, Single True Answer
            "q": "下列何者不是資料庫管理系統的目的",
            "a": [
                {"option": "可保持資料的重複性",      "correct": true},
                {"option": "可確保資料的安全性",     "correct": false},
                {"option": "可保持資料的一致性",      "correct": false},
                {"option": "可提升資料處理的速度",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 可保持資料的重複性.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 可保持資料的重複性.</p>" // no comma here
        },
		{ // Question 19 - Multiple Choice, Single True Answer
            "q": "一個資料庫系統可視為由哪兩個部分所組成?",
            "a": [
                {"option": "資料庫和資料庫管理系統",      "correct": true},
                {"option": "資料庫和資料庫存儲系統",     "correct": false},
                {"option": "資料管理系統和資料處理系統",      "correct": false},
                {"option": "資料處理系統和資料表",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 資料庫和資料庫管理系統.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 資料庫和資料庫管理系統.</p>" // no comma here
        },
		{ // Question 20 - Multiple Choice, Single True Answer
            "q": "資料庫系統中最重要的元件為何?",
            "a": [
                {"option": "資料",      "correct": true},
                {"option": "軟體",     "correct": false},
                {"option": "硬體",      "correct": false},
                {"option": "使用者",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 資料.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 資料.</p>" // no comma here
        },
		{ // Question 21 - Multiple Choice, Single True Answer
            "q": "在關聯式資料庫中，我們會將資料儲存在表格，而這些表格稱為?",
            "a": [
                {"option": "關聯表",      "correct": true},
                {"option": "對照表",     "correct": false},
                {"option": "資料表",      "correct": false},
                {"option": "屬性表",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 關聯表.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 關聯表.</p>" // no comma here
        },
		{ // Question 22 - Multiple Choice, Single True Answer
            "q": "當資料與日俱增時，資料的管理就會面臨一些問題，下列何者不是資料的管理所要面臨的問題?",
            "a": [
                {"option": "資料重複儲存與不一致的問題",      "correct": false},
                {"option": "資料同時存取時所發生的錯誤問題",     "correct": false},
                {"option": "資料使用權限控管的問題",      "correct": false},
                {"option": "資料太易存取的問題",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 資料太易存取的問題.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 資料太易存取的問題.</p>" // no comma here
        },
		{ // Question 23 - Multiple Choice, Single True Answer
            "q": "資料庫接收SQL指令，會回傳什麼給使用者?",
            "a": [
                {"option": "資料集",      "correct": false},
                {"option": "結果集",     "correct": false},
                {"option": "rowset",      "correct": false},
                {"option": "以上皆是",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 以上皆是.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 以上皆是.</p>" // no comma here
        },
        { // Question 24 - Multiple Choice, Single True Answer
            "q": "資料表的一筆員工資料，我們通常稱為?",
            "a": [
                {"option": "欄",      "correct": false},
                {"option": "列 ",     "correct": true},
                {"option": "組合",      "correct": false},
                {"option": "集合",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 列.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 列.</p>" // no comma here
        },
		{ // Question 25 - Multiple Choice, Single True Answer
            "q": "下列何種不是SQL的查詢句子?",
            "a": [
                {"option": "select",      "correct": false},
                {"option": "from",     "correct": false},
                {"option": "where",      "correct": false},
                {"option": "if",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> if.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : if.</p>" // no comma here
        },
		{ // Question 26 - Multiple Choice, Single True Answer
            "q": "在建構資料模型時，常常會利用何種圖?",
            "a": [
                {"option": "實體關聯圖",      "correct": true},
                {"option": "卡諾圖",     "correct": false},
                {"option": "文氏圖",      "correct": false},
                {"option": "流程圖",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 實體關聯圖.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 實體關聯圖.</p>" // no comma here
        },
		{ // Question 27 - Multiple Choice, Single True Answer
            "q": "由一個或一個以上的屬性所組成，其值組具有唯一性，是指?",
            "a": [
                {"option": "主鍵",      "correct": false},
                {"option": "次要鍵",     "correct": false},
                {"option": "外來鍵",      "correct": false},
                {"option": "以上皆是",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 以上皆是.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 以上皆是.</p>" // no comma here
        },
		{ // Question 28 - Multiple Choice, Single True Answer
            "q": "SELECT子句的目的為何?",
            "a": [
                {"option": "說明查詢條件",      "correct": false},
                {"option": "列出處理時會參考到的表格名稱",     "correct": false},
                {"option": "說明要顯示的屬性",      "correct": true},
                {"option": "說明查詢的出處",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 說明要顯示的屬性.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 說明要顯示的屬性.</p>" // no comma here
        },
		{ // Question 29 - Multiple Choice, Single True Answer
            "q": "FROM子句的目的為何",
            "a": [
                {"option": "說明查詢條件",      "correct": false},
                {"option": "列出處理時會參考到的表格名稱",     "correct": true},
                {"option": "說明要顯示的屬性",      "correct": false},
                {"option": "說明查詢的出處",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 列出處理時會參考到的表格名稱.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 列出處理時會參考到的表格名稱.</p>" // no comma here
        },
		{ // Question 30 - Multiple Choice, Single True Answer
            "q": "WHERE子句的目的為何?",
            "a": [
                {"option": "描述查詢條件",      "correct": true},
                {"option": "列出處理時會參考到的表格名稱",     "correct": false},
                {"option": "說明要顯示的屬性",      "correct": false},
                {"option": "說明查詢的出處",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 描述查詢條件.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 描述查詢條件.</p>" // no comma here
        }
    ]
	
};
