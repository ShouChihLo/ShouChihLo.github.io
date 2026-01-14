// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "第九章 線上測驗",
        "main":    "<p>演算法</p>",
        "results": "<h5>NDHU</h5><p>Reference_GitHub_SlickQuiz(https://github.com/jewlofthelotus/SlickQuiz)</p>",
        "level1":  "計算機概論 專家",
        "level2":  "計算機概論 業餘",
        "level3":  "計算機概論 入門",
        "level4":  "計算機概論 新手",
        "level5":  "請認真學習..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "程式設計師為解決問題，會先一步一步以一些類似程序語言的虛擬碼（pseudo code）敘述描述解決問題的步驟，稱為",
            "a": [
                {"option": "程式步驟",      "correct": false},
                {"option": "演算法",     "correct": false},
                {"option": "流程圖",      "correct": true},
                {"option": "結構圖",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 流程圖.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 流程圖.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "以下敘述何者正確?",
            "a": [
                {"option": "演算法必須在有限步驟內結束執行動作",      "correct": false},
                {"option": "程式必須在有限步驟內結束執行動作",   "correct": true},
                {"option": "程式在有限步驟會結束其執行動而演算法則可能不會 ",    "correct": false},
                {"option": "演算法與程式均可能在有限步驟內無法結束其執行動作", "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 程式必須在有限步驟內結束執行動作.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 程式必須在有限步驟內結束執行動作.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "有關演算法的描述，下列何者錯誤?",
            "a": [
                {"option": "可以有無限多個步驟",      "correct": true},
                {"option": "每個步驟都必須明確",     "correct": false},
                {"option": "可以不需要輸入資料",      "correct": false},
                {"option": "至少有一個輸出結果",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 可以有無限多個步驟.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 可以有無限多個步驟.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Single True Answer
            "q": "若f(n)=15logn+7n+9，則下列何者正確?",
            "a": [
                {"option": "f(n)=O(nlogn) ",      "correct": false},
                {"option": "f(n)=O(n)",     "correct": true},
                {"option": "f(n)=O(logn)",      "correct": false},
                {"option": "f(n)=O(n^2)",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> f(n)=O(n).</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : f(n)=O(n).</p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Single True Answer
            "q": "下列的複雜度表示式，一般而言何者最大?",
            "a": [
                {"option": "O(2^n)",      "correct": false},
                {"option": "O(n!)",     "correct": true},
                {"option": "O(n^2)",      "correct": false},
                {"option": "O(logn^2)",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> O(n!).</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : O(n!).</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Single True Answer
            "q": "下列哪一種函數隨n之數值變大，其函數值成長速率最快？",
            "a": [
                {"option": "n^2",      "correct": false},
                {"option": "logn",     "correct": false},
                {"option": "2^n",      "correct": true},
                {"option": "nlogn",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 2^n.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 2^n.</p>" // no comma here
        },
		{ // Question 7 - Multiple Choice, Single True Answer
            "q": "在計算時間複雜度時，常用BIG O來表示，如f(n)=n+2時，其複雜度為O(n)；試問：f(n)=3n2 logn+100 n2+10之BIG O函數為何？",
            "a": [
                {"option": "O(n^2)",      "correct": false},
                {"option": "O(nlogn+1)",     "correct": false},
                {"option": "O((n^2)logn)",      "correct": true},
                {"option": "O(n+logn)",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> O((n^2)logn).</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : O((n^2)logn).</p>" // no comma here
        },
		{ // Question 8 - Multiple Choice, Single True Answer
            "q": "下列哪種不是演算法常見的表示法？",
            "a": [
                {"option": "步驟描述法",      "correct": false},
                {"option": "流程圖",     "correct": false},
                {"option": "虛擬碼表示法",      "correct": false},
                {"option": "文氏圖",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 文氏圖.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 文氏圖.</p>" // no comma here
        },
		{ // Question 9 - Multiple Choice, Single True Answer
            "q": "選擇排序法的時間複雜度為",
            "a": [
                {"option": "O(n^2)",      "correct": true},
                {"option": "O(n)",     "correct": false},
                {"option": "O(n+logn)",      "correct": false},
                {"option": "O(nlogn+1) ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> O(n^2).</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : O(n^2).</p>" // no comma here
        },
		{ // Question 10 - Multiple Choice, Single True Answer
            "q": "“找出所有的可能，然後選擇最好的那一個”，這句是在描述下列哪一種策略?",
            "a": [
                {"option": "貪婪法",      "correct": true},
                {"option": "暴力法",     "correct": false},
                {"option": "動態規劃",      "correct": false},
                {"option": "分而治之",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 貪婪法.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 貪婪法.</p>" // no comma here
        },
		{ // Question 11 - Multiple Choice, Single True Answer
            "q": "與貪婪法最接近的排序演算法是?",
            "a": [
                {"option": "氣泡排序法",      "correct": false},
                {"option": "快速排序法",     "correct": true},
                {"option": "合併排序法",      "correct": false},
                {"option": "選擇排序法",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 快速排序法.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 快速排序法.</p>" // no comma here
        },
		{ // Question 12 - Multiple Choice, Single True Answer
            "q": "暴力法又稱?",
            "a": [
                {"option": "選擇排序法",      "correct": false},
                {"option": "氣泡排序法",     "correct": false},
                {"option": "合併排序法",      "correct": true},
                {"option": "快速排序法",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 合併排序法.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 合併排序法.</p>" // no comma here
        },
		{ // Question 13 - Multiple Choice, Single True Answer
            "q": "下列何者為BIG O表示法的定義?",
            "a": [
                {"option": "若存在一個常數c和一個負整數n0，使得當n>= n0時，f(n)<=cg(n),則函數f(n)屬於O(g(n))",      "correct": false},
                {"option": "若存在一個常數c和一個正整數n0，使得當n>= n0時，f(n)<=cg(n),則函數f(n)屬於O(g(n))",     "correct": true},
                {"option": "若存在一個常數c和一個正整數n0，使得當n>= n0時，f(n)>=cg(n),則函數f(n)屬於O(g(n))",      "correct": false},
                {"option": "以上皆非",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 若存在一個常數c和一個正整數n0，使得當n>= n0時，f(n)<=cg(n),則函數f(n)屬於O(g(n)).</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 若存在一個常數c和一個正整數n0，使得當n>= n0時，f(n)<=cg(n),則函數f(n)屬於O(g(n)).</p>" // no comma here
        },
		{ // Question 14 - Multiple Choice, Single True Answer
            "q": "函數：n+2nlogn+100，用BIG O表示法表示為?",
            "a": [
                {"option": "O(n)",      "correct": false},
                {"option": "O(n^2)",     "correct": false},
                {"option": "O(nlogn)",      "correct": true},
                {"option": "O(n^3)",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> O(nlogn).</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : O(nlogn).</p>" // no comma here
        },
		{ // Question 15 - Multiple Choice, Single True Answer
            "q": "快速排序法可用下列何種策略來解題?",
            "a": [
                {"option": "分而治之",      "correct": false},
                {"option": "動態規劃",     "correct": false},
                {"option": "貪婪法",      "correct": true},
                {"option": "暴力法",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 貪婪法.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 貪婪法.</p>" // no comma here
        },
		{ // Question 16 - Multiple Choice, Single True Answer
            "q": "插入排序發的時間複雜度為?",
            "a": [
                {"option": "O(n)",      "correct": false},
                {"option": "O(n^2)",     "correct": true},
                {"option": "O(n^3)",      "correct": false},
                {"option": "O(1)",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> O(n^2).</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : O(n^2).</p>" // no comma here
        },
		{ // Question 17 - Multiple Choice, Single True Answer
            "q": "完整的演算法描述包含?",
            "a": [
                {"option": "輸入、輸出和方法",      "correct": true},
                {"option": "輸入、計算和輸出",     "correct": false},
                {"option": "計算、方法和輸出",      "correct": false},
                {"option": "以上皆非",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 輸入、輸出和方法.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 輸入、輸出和方法.</p>" // no comma here
        },
		{ // Question 18 - Multiple Choice, Single True Answer
            "q": "將問題分割成小問題，再各個擊破，是什麼方法?",
            "a": [
                {"option": "暴力法",      "correct": false},
                {"option": "貪婪法",     "correct": true},
                {"option": "動態規劃",      "correct": false},
                {"option": "分而治之",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 貪婪法.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 貪婪法.</p>" // no comma here
        },
		{ // Question 19 - Multiple Choice, Single True Answer
            "q": "演算法的時間複雜度通常是指?",
            "a": [
                {"option": "在最糟的情況下所需要花費的時間",      "correct": false},
                {"option": "在最好的情況下所需要花費的時間",     "correct": false},
                {"option": "平均而言所需要花費的時間",      "correct": true},
                {"option": "最糟的情況下所花費的時間減去最好的情況下所需要花費的時間",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 平均而言所需要花費的時間.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 平均而言所需要花費的時間.</p>" // no comma here
        },
		{ // Question 20 - Multiple Choice, Single True Answer
            "q": "演算法必須具有的五項特性是?",
            "a": [
                {"option": "輸入、輸出、有限性、明確性和有效性",      "correct": true},
                {"option": "輸入、輸出、延展性、明確性和有限性",     "correct": false},
                {"option": "輸入、輸出、有限性、明確性和關聯性",      "correct": false},
                {"option": "有限性、明確性、關聯性、有效性和延展性",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 輸入、輸出、有限性、明確性和有效性.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 輸入、輸出、有限性、明確性和有效性.</p>" // no comma here
        }
		
    ]
};
