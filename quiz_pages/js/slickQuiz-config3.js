// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "第三章 線上測驗",
        "main":    "<p>資料的表示與處理</p>",
        "results": "<h5>NDHU</h5><p>Reference_GitHub_SlickQuiz(https://github.com/jewlofthelotus/SlickQuiz)</p>",
        "level1":  "計算機概論 專家",
        "level2":  "計算機概論 業餘",
        "level3":  "計算機概論 入門",
        "level4":  "計算機概論 新手",
        "level5":  "請認真學習..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "已知A的ASCII碼16進位表示為41，請問Z的ASCII二進位表示為?",
            "a": [
                {"option": "01000001",      "correct": false},
                {"option": "01011010",     "correct": false},
                {"option": "01000010",      "correct": true},
                {"option": "01100001",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 01000010.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 01000010.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "以2bytes來編碼，最多可以表示多少個不同的符號?",
            "a": [
                {"option": "2",      "correct": false},
                {"option": "128",   "correct": false},
                {"option": "32768",    "correct": false},
                {"option": "65536", "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 65536.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 65536.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "以ASCII碼來儲存“windows”需要多少個位元組?",
            "a": [
                {"option": "9",      "correct": false},
                {"option": "7",     "correct": true},
                {"option": "6",      "correct": false},
                {"option": "5",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 7.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 7.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Single True Answer
            "q": "美國國家標準局制定的工業標準碼，稱為“美國資訊交換標準碼”，它的英文簡寫是？ ?",
            "a": [
                {"option": "ASCII",      "correct": true},
                {"option": "BCD",     "correct": false},
                {"option": "EBCDIC",      "correct": false},
                {"option": "TCA",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> ASCII.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : ASCII.</p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Single True Answer
            "q": "ASCII碼是利用多少個位元表示出一個碼?",
            "a": [
                {"option": "4",      "correct": false},
                {"option": "5",     "correct": false},
                {"option": "6",      "correct": false},
                {"option": "7",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 7.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 7.</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Single True Answer
            "q": "下列哪一個語音格式未經壓縮？",
            "a": [
                {"option": "MPEG",      "correct": false},
                {"option": "CDA",     "correct": true},
                {"option": "MP3",      "correct": false},
                {"option": "MIDI",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> CDA.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : CDA.</p>" // no comma here
        },
		{ // Question 7 - Multiple Choice, Single True Answer
            "q": "在windows內的媒體播放程式（windows media player），無法播放下列哪一種格式的檔案？",
            "a": [
                {"option": "音樂CD",      "correct": false},
                {"option": "AVI",     "correct": false},
                {"option": "JPG",      "correct": true},
                {"option": "WAVE音效",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> JPG.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : JPG.</p>" // no comma here
        },
		{ // Question 8 - Multiple Choice, Single True Answer
            "q": "Windows中音效檔的標準格式是？",
            "a": [
                {"option": "MIDI",      "correct": true},
                {"option": "EXE",     "correct": false},
                {"option": "BMP",      "correct": false},
                {"option": "WAV",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> MIDI.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : MIDI.</p>" // no comma here
        },
		{ // Question 9 - Multiple Choice, Single True Answer
            "q": "在RGB彩色模式中，將紅、綠、藍三色以色彩強度(255,255,255)混合，所得顏色為何",
            "a": [
                {"option": "白",      "correct": true},
                {"option": "黑",     "correct": false},
                {"option": "黃",      "correct": false},
                {"option": "紫",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 白.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 白.</p>" // no comma here
        },
		{ // Question 10 - Multiple Choice, Single True Answer
            "q": "下列哪一種圖形檔格式可以將圖片設成透明色?",
            "a": [
                {"option": "GIF",      "correct": true},
                {"option": "JPEG",     "correct": false},
                {"option": "BMP",      "correct": false},
                {"option": "TIFF",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> GIF.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : GIF.</p>" // no comma here
        },
		{ // Question 11 - Multiple Choice, Single True Answer
            "q": "下列哪一個圖形格式經常被用在網頁設計上?",
            "a": [
                {"option": "BMP",      "correct": false},
                {"option": "TIFF",     "correct": false},
                {"option": "GIF",      "correct": true},
                {"option": "PCX",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> GIF.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : GIF.</p>" // no comma here
        },
		{ // Question 12 - Multiple Choice, Single True Answer
            "q": "各電腦系統所使用的中文內碼不盡相同，為使不同系統的中文資料可以互相交流溝通而制定的編碼為?",
            "a": [
                {"option": "外碼",      "correct": false},
                {"option": "BIG-5",     "correct": false},
                {"option": "交換碼",      "correct": true},
                {"option": "電信碼",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 交換碼.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 交換碼.</p>" // no comma here
        },
		{ // Question 13 - Multiple Choice, Single True Answer
            "q": "Unicode可容納65536個字元符號，包括128個ASCII字元、英文、中文、日文及非英語系國家常用文字，其是利用多少位元來表示?",
            "a": [
                {"option": "1",      "correct": false},
                {"option": "2 ",     "correct": true},
                {"option": "3",      "correct": false},
                {"option": "4",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 2.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 2.</p>" // no comma here
        },
		{ // Question 14 - Multiple Choice, Single True Answer
            "q": "將1秒的聲波做20000次的取樣和10000次取樣，做出的數位語音何者為佳?",
            "a": [
                {"option": "20000",      "correct": true},
                {"option": "10000",     "correct": false},
                {"option": "一樣",      "correct": false},
                {"option": "不能比較",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 20000.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 20000.</p>" // no comma here
        },
		{ // Question 15 - Multiple Choice, Single True Answer
            "q": "各種不同的檔案類型其副檔名皆不同，請問*.mp3應是何種類型檔案?",
            "a": [
                {"option": "圖片壓縮檔",      "correct": false},
                {"option": "影像壓縮檔",     "correct": false},
                {"option": "聲音壓縮檔",      "correct": true},
                {"option": "文字壓縮檔",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 聲音壓縮檔.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 聲音壓縮檔.</p>" // no comma here
        },
		{ // Question 16 - Multiple Choice, Single True Answer
            "q": "下列有關多媒體檔案格式的敘述，何者不正確?",
            "a": [
                {"option": "JPG是影像資料的格式",      "correct": false},
                {"option": "WAV是圖形資料的格式",     "correct": true},
                {"option": "MIDI是聲音資料的格式",      "correct": false},
                {"option": "MPEG式視訊資料的格式",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> WAV是圖形資料的格式.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : WAV是圖形資料的格式.</p>" // no comma here
        },
		{ // Question 17 - Multiple Choice, Single True Answer
            "q": "下列哪一種影像或視訊格式的失真程度最低?",
            "a": [
                {"option": "BMP",      "correct": true},
                {"option": "GIF",     "correct": false},
                {"option": "MPEG-1",      "correct": false},
                {"option": "MPEG-2",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> BMP.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : BMP.</p>" // no comma here
        },
		{ // Question 18 - Multiple Choice, Single True Answer
            "q": "下列有關無失真資料壓縮與失真資料壓縮的敘述，何者正確?",
            "a": [
                {"option": "MPEG所使用的是失真資料壓縮",      "correct": false},
                {"option": "ZIP所使用的是無失真資料壓縮",     "correct": false},
                {"option": "經無失真資料壓縮的檔案，解壓縮後可完全還原",      "correct": false},
                {"option": "以上皆正確",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 以上皆正確.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 以上皆正確.</p>" // no comma here
        },
		{ // Question 19 - Multiple Choice, Single True Answer
            "q": "如果將顯示器的色彩設定為24位元的全彩，以RGB值來代表紅綠藍三種不同的顏色，則每種顏色各有多少種不同程度的變化?",
            "a": [
                {"option": "8",      "correct": false},
                {"option": "16",     "correct": false},
                {"option": "256 ",      "correct": true},
                {"option": "1024",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 256.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 256.</p>" // no comma here
        },
		{ // Question 20 - Multiple Choice, Single True Answer
            "q": "由一連串的靜態圖片快速撥放所構成的為下列哪一種媒體?",
            "a": [
                {"option": "文字",      "correct": false},
                {"option": "視訊",     "correct": false},
                {"option": "影像",      "correct": false},
                {"option": "動畫",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 動畫.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 動畫.</p>" // no comma here
        },
		{ // Question 21 - Multiple Choice, Single True Answer
            "q": "下列哪一種文字媒體格式，包含了描述資料(例如文字顏色或字型描述)?",
            "a": [
                {"option": "HTML",      "correct": false},
                {"option": "RTF",     "correct": false},
                {"option": "WORD(DOC)",      "correct": false},
                {"option": "以上皆是",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 以上皆是.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 以上皆是.</p>" // no comma here
        },
		{ // Question 22 - Multiple Choice, Single True Answer
            "q": "表示一個像素所需佔用的位元數，稱為?",
            "a": [
                {"option": "像素",      "correct": true},
                {"option": "影像大小",     "correct": false},
                {"option": "解析度",      "correct": false},
                {"option": "深度",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 像素.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 像素.</p>" // no comma here
        },
		{ // Question 23 - Multiple Choice, Single True Answer
            "q": "大五碼(Big-5)是?",
            "a": [
                {"option": "英文的編碼方式",      "correct": false},
                {"option": "網頁所用的編碼方式",     "correct": false},
                {"option": "一種中文的編碼方式",      "correct": true},
                {"option": "Internet通訊的編碼方式",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 一種中文的編碼方式.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 一種中文的編碼方式.</p>" // no comma here
        },
        { // Question 24 - Multiple Choice, Single True Answer
            "q": "下列何者為電腦最常使用的資訊交換碼?",
            "a": [
                {"option": "BCD",      "correct": false},
                {"option": "ASCII",     "correct": true},
                {"option": "CRC",      "correct": false},
                {"option": "Hamming Code",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> ASCII.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : ASCII.</p>" // no comma here
        },
		{ // Question 25 - Multiple Choice, Single True Answer
            "q": "電腦對於一個圖素若使用一個位元表達，只能顯示黑或白兩色，若使用6個位元，則能顯示幾種顏色?",
            "a": [
                {"option": "8",      "correct": false},
                {"option": "16",     "correct": false},
                {"option": "32",      "correct": false},
                {"option": "64",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 64.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 64.</p>" // no comma here
        },
		{ // Question 26 - Multiple Choice, Single True Answer
            "q": "下列桌上型電腦螢幕解析度，請選出螢幕解析度最高者?",
            "a": [
                {"option": "1280*800",      "correct": false},
                {"option": "1280*960",     "correct": false},
                {"option": "1280*1024",      "correct": false},
                {"option": "1600*1024",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> 1600*1024.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 1600*1024.</p>" // no comma here
        },
		{ // Question 27 - Multiple Choice, Single True Answer
            "q": "某些繪圖系統將紅綠藍三原色各自分為256個獨立等級，在此類系統中可混合產生多少種不同色彩?",
            "a": [
                {"option": "256",      "correct": false},
                {"option": "1024",     "correct": true},
                {"option": "65536",      "correct": false},
                {"option": "16777216",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 1024.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 1024.</p>" // no comma here
        },
		{ // Question 28 - Multiple Choice, Single True Answer
            "q": "下列何者可以用來描述檔案的大小或硬碟的容量?",
            "a": [
                {"option": "bps",      "correct": false},
                {"option": "PPM",     "correct": false},
                {"option": "KHz",      "correct": false},
                {"option": "GB",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> GB.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : GB.</p>" // no comma here
        },
		{ // Question 29 - Multiple Choice, Single True Answer
            "q": "下列何者是文字檔格式?",
            "a": [
                {"option": "AVI",      "correct": false},
                {"option": "MPEG",     "correct": false},
                {"option": "BMP",      "correct": false},
                {"option": "TXT",     "correct": true} // no comma here
            ],
            "correct": "<p><span>答對!</span> TXT.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : TXT.</p>" // no comma here
        },
		{ // Question 30 - Multiple Choice, Single True Answer
            "q": "下列何者指的是每個像素所能顯示的色彩數?",
            "a": [
                {"option": "圖形尺寸",      "correct": false},
                {"option": "解析度",     "correct": true},
                {"option": "列印尺寸",      "correct": false},
                {"option": "色彩深度",     "correct": false} // no comma here
            ],
            "correct": "<p><span>答對!</span> 解析度.</p>",
            "incorrect": "<p><span>答錯.</span> 正確答案 : 解析度.</p>" // no comma here
        }
    ]
	
};
