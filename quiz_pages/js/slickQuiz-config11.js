// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "第十一章 線上測驗",
        "main":    "<p>計算理論</p>",
        "results": "<h5>NDHU</h5><p>Reference_GitHub_SlickQuiz(https://github.com/jewlofthelotus/SlickQuiz)</p>",
        "level1":  "計算機概論 專家",
        "level2":  "計算機概論 業餘",
        "level3":  "計算機概論 入門",
        "level4":  "計算機概論 新手",
        "level5":  "請認真學習..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "一般來說，問題可以分成哪兩類?",
            "a": [
                {"option": "最佳化問題和決策問題",      "correct": true},
                {"option": "最佳化問題和不可能問題",     "correct": false},
                {"option": "可決定問題和不可決定問題",      "correct": false},
                {"option": "以上皆非",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 最佳化問題和決策問題.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 最佳化問題和決策問題.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "所謂的決策問題，答案會有幾種",
            "a": [
                {"option": "1",      "correct": false},
                {"option": "2",   "correct": true},
                {"option": "3",    "correct": false},
                {"option": "4", "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 2.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 2.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "問題：輸入N個數字，輸出最小的數字，這個問題屬於何種問題?",
            "a": [
                {"option": "最佳化問題",      "correct": true},
                {"option": "決策問題",     "correct": false},
                {"option": "不可能問題",      "correct": false},
                {"option": "不知道問題",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 最佳化問題.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 最佳化問題.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Single True Answer
            "q": "下列何者不屬於最佳化的問題?",
            "a": [
                {"option": "輸入N個數字，輸出其中的偶數",      "correct": false},
                {"option": "輸入N個數字，輸出最小值",     "correct": false},
                {"option": "輸入一台小客車載重量為K，N個物品，每個物品有其重量，輸出小客車可以承載下全部物品的總重量",      "correct": false},
                {"option": "輸入一個數K和N個數字，輸出這N個數字裏，是否存在一個數字>=K",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 輸入一個數K和N個數字，輸出這N個數字裏，是否存在一個數字>=K.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 輸入一個數K和N個數字，輸出這N個數字裏，是否存在一個數字>=K.</p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Single True Answer
            "q": "停止（halting）問題是一個什麼問題?",
            "a": [
                {"option": "最佳化問題",      "correct": false},
                {"option": "決策問題",     "correct": false},
                {"option": "不能被決定的問題",      "correct": true},
                {"option": "可以決定的問題",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 不能被決定的問題.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 不能被決定的問題.</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Single True Answer
            "q": "誰被稱為計算機之父？",
            "a": [
                {"option": "范紐曼",      "correct": false},
                {"option": "比爾蓋茨",     "correct": false},
                {"option": "圖靈",      "correct": true},
                {"option": "牛頓",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 圖靈.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 圖靈.</p>" // no comma here
        },
		{ // Question 7 - Multiple Choice, Single True Answer
            "q": "下列何種演算法允許不確定的步驟（用猜的或隨機），但整體必須在多項式時間內完成？",
            "a": [
                {"option": "NP-演算法",      "correct": true},
                {"option": "OP-演算法",     "correct": false},
                {"option": "AP-演算法",      "correct": false},
                {"option": "NO-演算法",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> NP-演算法.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : NP-演算法.</p>" // no comma here
        },
		{ // Question 8 - Multiple Choice, Single True Answer
            "q": "下列何者為圖靈論點？",
            "a": [
                {"option": "演算法的能力和圖靈機的能力相等",      "correct": true},
                {"option": "演算法的能力優於圖靈機的能力",     "correct": false},
                {"option": "圖靈機的能力優於演算法的能力",      "correct": false},
                {"option": "演算法的能力與圖靈機的能力不能比較",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 演算法的能力和圖靈機的能力相等.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 演算法的能力和圖靈機的能力相等.</p>" // no comma here
        },
		{ // Question 9 - Multiple Choice, Single True Answer
            "q": "P=NP？這個問題被誰解決了",
            "a": [
                {"option": "圖靈",      "correct": false},
                {"option": "美國克雷數學研究所",     "correct": false},
                {"option": "布林",      "correct": false},
                {"option": "至今仍然未解",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 至今仍然未解.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 至今仍然未解.</p>" // no comma here
        },
		{ // Question 10 - Multiple Choice, Single True Answer
            "q": "關於NP演算法的問題，下列何者為大部分人選擇相信的?",
            "a": [
                {"option": "P<NP",      "correct": false},
                {"option": "P≠NP",     "correct": true},
                {"option": "P>NP",      "correct": false},
                {"option": "P=NP",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> P≠NP.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : P≠NP.</p>" // no comma here
        }
		
    ]
};
