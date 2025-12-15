// data.js - เก็บข้อมูล JSON และ Configuration

const lotteryJson = {
    "type": "bubble", "size": "giga",
    "header": { "type": "box", "layout": "vertical", "contents": [{ "type": "image", "size": "full", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_background/Headband_3_black.png", "aspectMode": "fit", "aspectRatio": "5:1" }] },
    "hero": { "type": "video", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_video/250801_Prize_chudyai.mp4", "previewUrl": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_vdo_cover/250801_Prize_chudyai_Cover.png", "aspectRatio": "16:9" },
    "body": { "type": "box", "layout": "vertical", "contents": [{ "type": "box", "layout": "vertical", "contents": [
        { "type": "box", "layout": "horizontal", "contents": [{ "type": "box", "layout": "vertical", "contents": [{ "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_button/purchase_lottery_flex1.png" }] }, { "type": "box", "layout": "vertical", "contents": [{ "type": "text", "text": "ซื้อลอตเตอรี่" }, { "type": "text", "text": "กี่ใบก็มีลุ้น! โอกาสมีอยู่ทุกใบ" }] }] },
        { "type": "separator" },
        { "type": "box", "layout": "horizontal", "contents": [{ "type": "box", "layout": "vertical", "contents": [{ "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_button/purchase_jidrid_flex1.png" }] }, { "type": "box", "layout": "vertical", "contents": [{ "type": "text", "text": "จิ๊ดริดหยิบโชค" }, { "type": "text", "text": "ไม่มีเลขในใจ ใช้จิ๊ดริดหยิบให้เลย" }] }] },
        { "type": "separator" },
        { "type": "box", "layout": "horizontal", "contents": [{ "type": "box", "layout": "vertical", "contents": [{ "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_button/purchase_goldentime_flex1.png" }] }, { "type": "box", "layout": "vertical", "contents": [{ "type": "text", "text": "นาทีทอง" }, { "type": "text", "text": "นาทีนี้ใครไว ใครได้" }] }] }
    ] }] },
    "footer": { "type": "box", "layout": "vertical", "contents": [], "backgroundColor": "#ff0200ff" }
};

const lotteryJson2 = {
    "type": "carousel",
    "contents": [
        { "type": "bubble", "hero": { "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/ltp_flex2_cards/count_01.jpg", "size": "full", "aspectMode": "cover", "aspectRatio": "3:3.2", "action": { "type": "uri", "label": "ซื้อลอตเตอรี่ที่นี่", "uri": "https://lin.ee/oV69qGV" } } },
        { "type": "bubble", "hero": { "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/ltp_flex2_cards/count_02.jpg", "size": "full", "aspectMode": "cover", "aspectRatio": "3:3.2", "action": { "type": "uri", "label": "ซื้อลอตเตอรี่ที่นี่", "uri": "https://lin.ee/IcgKyUm" } } },
        { "type": "bubble", "hero": { "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/ltp_flex2_cards/count_03.jpg", "aspectRatio": "3:3.2", "aspectMode": "cover", "size": "full", "action": { "type": "uri", "label": "ซื้อลอตเตอรี่ที่นี่", "uri": "https://lin.ee/pwTuVaa" } } },
        { "type": "bubble", "hero": { "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/ltp_flex2_cards/count_05.jpg", "aspectRatio": "3:3.2", "aspectMode": "cover", "size": "full", "action": { "type": "uri", "label": "ซื้อลอตเตอรี่ที่นี่", "uri": "https://lin.ee/Nxyg8FL" } } },
        { "type": "bubble", "hero": { "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/ltp_flex2_cards/count_10.jpg", "aspectRatio": "3:3.2", "aspectMode": "cover", "size": "full", "action": { "type": "uri", "label": "ซื้อลอตเตอรี่ที่นี่", "uri": "https://lin.ee/SeDO4Ud" } } }
    ]
};

const lotteryJson3 = {
    "type": "carousel",
    "contents": [
        {
            "type": "bubble", "size": "mega",
            "hero": { "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_logolotteryplus/logo_lotteryplus_horizontal_red.png", "size": "200px", "aspectRatio": "5:1", "aspectMode": "fit", "action": { "type": "uri", "label": "รวมเลขเด็ดเลขดัง", "uri": "https://lin.ee/18vidat", "altUri": { "desktop": "https://lin.ee/18vidat" } }, "margin": "sm" },
            "body": {
                "type": "box", "layout": "vertical", "spacing": "none",
                "contents": [
                    { "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_background/lakdung_BC_flex3.png", "position": "absolute", "size": "380px", "gravity": "center", "align": "center", "margin": "none", "offsetTop": "-120px", "offsetStart": "0px", "aspectRatio": "1:2", "offsetEnd": "0px", "aspectMode": "fit", "offsetBottom": "-120px", "action": { "type": "uri", "label": "รวมเลขเด็ดเลขดัง", "uri": "https://lin.ee/18vidat", "altUri": { "desktop": "https://lin.ee/18vidat" } } },
                    { "type": "box", "layout": "vertical", "contents": [], "position": "absolute", "offsetTop": "0%", "offsetBottom": "0%", "offsetStart": "0%", "offsetEnd": "0%", "action": { "type": "uri", "label": "รวมเลขเด็ดเลขดัง", "uri": "https://lin.ee/18vidat", "altUri": { "desktop": "https://lin.ee/18vidat" } } },
                    { "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_coolnumber/ruamlakdetlakdang.png", "position": "relative", "aspectMode": "fit", "offsetTop": "-110px", "offsetStart": "0px", "margin": "lg", "size": "full", "action": { "type": "uri", "label": "รวมเลขเด็ดเลขดัง", "uri": "https://lin.ee/18vidat", "altUri": { "desktop": "https://lin.ee/18vidat" } } },
                    { "type": "text", "text": "ประจำวันที่ 2 ตุลาคม 2568", "size": "lg", "align": "center", "color": "#ffffff", "contents": [{ "type": "span", "text": "ประจำงวดวันที่ 16 พฤศจิกายน 2568", "weight": "bold", "style": "normal", "decoration": "none", "size": "xs" }], "weight": "bold", "decoration": "none", "position": "absolute", "gravity": "center", "scaling": true, "wrap": true, "adjustMode": "shrink-to-fit", "maxLines": 1, "offsetStart": "53px", "offsetTop": "80px", "action": { "type": "uri", "label": "รวมเลขเด็ดเลขดัง", "uri": "https://lin.ee/18vidat", "altUri": { "desktop": "https://lin.ee/18vidat" } } },
                    { "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_jidrid/Jidrid_122.png", "size": "3xl", "align": "center", "gravity": "center", "position": "absolute", "offsetStart": "65px", "offsetTop": "130px", "action": { "type": "uri", "label": "รวมเลขเด็ดเลขดัง", "uri": "https://lin.ee/18vidat", "altUri": { "desktop": "https://lin.ee/18vidat" } } }
                ],
                "background": { "type": "linearGradient", "angle": "0deg", "startColor": "#93291E", "endColor": "#ED213A", "centerColor": "#DC281E" }, "flex": 1
            }
        },
        {
            "type": "bubble", "size": "mega",
            "body": {
                "type": "box", "layout": "vertical",
                "contents": [
                    {
                        "type": "box", "layout": "vertical", "backgroundColor": "#ffffff", "cornerRadius": "xl", "paddingAll": "xs",
                        "contents": [
                            { "type": "box", "layout": "horizontal", "cornerRadius": "xl", "paddingAll": "md", "contents": [{ "type": "box", "layout": "vertical", "contents": [{ "type": "box", "layout": "horizontal", "spacing": "sm", "contents": [{ "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_logo_program/logo2_lakpeehian.png", "aspectMode": "cover", "size": "full", "gravity": "center", "align": "center", "offsetTop": "10%", "aspectRatio": "3.5:1" }] }, { "type": "text", "text": " ", "color": "#fbfa10", "style": "normal", "weight": "regular", "align": "end", "size": "xxs", "margin": "md" }] }], "background": { "type": "linearGradient", "angle": "170deg", "startColor": "#00000020", "endColor": "#000000", "centerColor": "#000000" }, "margin": "xxl", "borderColor": "#FFFFFF", "borderWidth": "light" },
                            { "type": "box", "layout": "horizontal", "spacing": "md", "margin": "lg", "justifyContent": "space-around", "contents": [{ "type": "box", "layout": "horizontal", "alignItems": "center", "contents": [{ "type": "text", "text": "283", "weight": "bold", "size": "lg", "align": "center", "offsetStart": "30px" }, { "type": "text", "text": "20", "weight": "bold", "size": "lg", "align": "center", "offsetEnd": "30px" }], "flex": 3 }] },
                            { "type": "box", "layout": "vertical", "contents": [{ "type": "text", "text": "เลขปลดล็อก", "size": "lg", "align": "center", "margin": "10px" }], "margin": "5px" }
                        ], "spacing": "none", "offsetTop": "-20px", "margin": "xl"
                    },
                    { "type": "text", "text": "**เป็นความเชื่อส่วนบุคคล", "margin": "lg", "position": "absolute", "size": "xxl", "align": "end", "offsetStart": "170px", "offsetTop": "400px" }
                ], "cornerRadius": "xl", "paddingAll": "md", "height": "420px"
            }
        },
        {
            "type": "bubble", "size": "mega",
            "body": {
                "type": "box", "layout": "vertical",
                "contents": [
                    {
                        "type": "box", "layout": "vertical", "contents": [
                            {
                                "type": "box", "layout": "vertical", "backgroundColor": "#ffffff", "cornerRadius": "xl", "paddingAll": "xs",
                                "contents": [
                                    { "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_logo_program/logo4_chinesecalendar.png", "aspectMode": "fit", "aspectRatio": "2:1", "size": "full", "offsetTop": "-10px" },
                                    { "type": "text", "text": " ", "size": "xxs", "margin": "md", "color": "#000000", "weight": "regular", "align": "end", "style": "normal", "offsetTop": "-40px" },
                                    { "type": "box", "layout": "horizontal", "spacing": "md", "margin": "lg", "justifyContent": "space-around", "contents": [{ "type": "box", "layout": "horizontal", "alignItems": "center", "contents": [{ "type": "text", "text": "2", "weight": "bold", "size": "lg", "align": "center", "offsetStart": "20px" }, { "type": "text", "text": "6", "weight": "bold", "size": "lg", "align": "center", "offsetStart": "10px" }, { "type": "text", "text": "3", "weight": "bold", "size": "lg", "align": "center", "offsetEnd": "10px" }, { "type": "text", "text": "5", "size": "lg", "weight": "bold", "align": "center", "offsetEnd": "20px" }], "justifyContent": "center" }] },
                                    { "type": "box", "layout": "vertical", "contents": [{ "type": "text", "text": "ปฏิทินจีน", "size": "lg", "align": "center", "margin": "10px" }], "margin": "5px", "offsetTop": "-45px" }
                                ], "spacing": "none", "offsetTop": "-40px", "paddingBottom": "xxl", "margin": "10px"
                            },
                            { "type": "text", "text": "**เป็นความเชื่อส่วนบุคคล", "position": "absolute", "margin": "lg", "size": "xxl", "align": "end", "offsetStart": "170px", "offsetTop": "400px" }
                        ]
                    }
                ]
            }
        },
        {
            "type": "bubble", "size": "mega",
            "body": {
                "type": "box", "layout": "vertical",
                "contents": [
                    {
                        "type": "box", "layout": "vertical", "contents": [
                            {
                                "type": "box", "layout": "vertical", "backgroundColor": "#ffffff", "cornerRadius": "xl", "paddingAll": "xs",
                                "contents": [
                                    { "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_logo_program/logo1_maetuktaa.png", "aspectMode": "fit", "aspectRatio": "2:1", "size": "5xl" },
                                    { "type": "box", "layout": "horizontal", "spacing": "md", "margin": "lg", "justifyContent": "space-around", "contents": [{ "type": "box", "layout": "horizontal", "alignItems": "center", "contents": [{ "type": "text", "text": "2", "weight": "bold", "size": "lg", "align": "center" }, { "type": "text", "text": "9", "weight": "bold", "size": "lg", "align": "center" }, { "type": "text", "text": "4", "weight": "bold", "size": "lg", "align": "center" }, { "type": "text", "text": "7", "size": "lg", "weight": "bold", "align": "center" }, { "type": "text", "text": "0", "size": "lg", "weight": "bold", "align": "center" }], "justifyContent": "center" }] },
                                    { "type": "box", "layout": "vertical", "contents": [{ "type": "text", "text": "แม่ตุ๊กตา", "size": "lg", "align": "center", "margin": "10px" }], "margin": "5px" }
                                ], "spacing": "none", "offsetTop": "-40px", "paddingBottom": "xxl", "margin": "10px"
                            },
                            { "type": "text", "text": "**เป็นความเชื่อส่วนบุคคล", "position": "absolute", "margin": "lg", "size": "xxl", "align": "end", "offsetStart": "170px", "offsetTop": "400px" }
                        ]
                    }
                ]
            }
        }
    ]
};

const lotteryJson4 = {
    "type": "bubble", "size": "mega",
    "header": { "type": "box", "layout": "vertical", "contents": [{ "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_logolotteryplus/logo_lotteryplus_horizontal_white.png", "align": "start", "aspectMode": "fit", "gravity": "center", "size": "5xl", "animated": true, "aspectRatio": "6:1" }], "paddingAll": "20px", "spacing": "none", "height": "65px", "paddingTop": "22px", "background": { "type": "linearGradient", "angle": "330deg", "startColor": "#b31217", "endColor": "#ff0000", "centerColor": "#D31027" }, "justifyContent": "center" },
    "hero": { "type": "video", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_video/250716_Sell_Night.mp4", "previewUrl": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_video/250716_Sell_Night.mp4", "altContent": { "type": "image", "size": "full", "aspectRatio": "16:9", "aspectMode": "cover", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_vdo_cover/250716_Sell_Night_Cover.png" }, "aspectRatio": "16:9" },
    "body": {
        "type": "box", "layout": "vertical",
        "contents": [
            { "type": "text", "text": "วิธีสมัครสมาชิก", "color": "#b7b7b7", "size": "xs", "style": "italic", "decoration": "underline", "margin": "md" },
            { "type": "box", "layout": "horizontal", "contents": [{ "type": "text", "text": "Step 1", "size": "xs", "gravity": "center", "color": "#EF454D", "weight": "bold", "flex": 1, "align": "end" }, { "type": "box", "layout": "vertical", "contents": [{ "type": "box", "layout": "vertical", "contents": [], "cornerRadius": "30px", "height": "12px", "width": "12px", "borderColor": "#B7B7B7", "borderWidth": "2px" }], "width": "24px", "alignItems": "center", "justifyContent": "center" }, { "type": "text", "text": "เลือกเมนู 'สมาชิก'", "gravity": "center", "flex": 4, "size": "sm", "weight": "bold", "margin": "sm" }], "spacing": "sm", "margin": "xl", "alignItems": "center" },
            { "type": "box", "layout": "horizontal", "contents": [{ "type": "filler", "flex": 1 }, { "type": "box", "layout": "vertical", "contents": [{ "type": "box", "layout": "vertical", "contents": [], "width": "2px", "backgroundColor": "#B7B7B7", "height": "40px" }], "width": "24px", "alignItems": "center" }, { "type": "box", "layout": "vertical", "contents": [{ "type": "text", "text": "กด 'ตกลง' ระะบบจะไปที่ LINE", "color": "#8c8c8c", "size": "xs", "gravity": "center", "wrap": true }, { "type": "text", "text": "กด 'อนุญาต'", "color": "#8c8c8c", "size": "xs", "gravity": "center", "wrap": true }], "flex": 4, "justifyContent": "center", "margin": "sm" }], "spacing": "sm" },
            { "type": "box", "layout": "horizontal", "contents": [{ "type": "text", "text": "Step 2", "gravity": "center", "size": "xs", "weight": "bold", "color": "#EF454D", "flex": 1, "align": "end" }, { "type": "box", "layout": "vertical", "contents": [{ "type": "box", "layout": "vertical", "contents": [], "cornerRadius": "30px", "width": "12px", "height": "12px", "borderColor": "#EF454D", "borderWidth": "2px" }], "width": "24px", "alignItems": "center", "justifyContent": "center" }, { "type": "text", "text": "เพิ่มเพื่อน LINE Official", "gravity": "center", "flex": 4, "size": "sm", "weight": "bold", "margin": "sm" }], "spacing": "sm", "alignItems": "center" },
            { "type": "box", "layout": "horizontal", "contents": [{ "type": "filler", "flex": 1 }, { "type": "box", "layout": "vertical", "contents": [{ "type": "box", "layout": "vertical", "contents": [], "width": "2px", "backgroundColor": "#EF454D", "background": { "type": "linearGradient", "angle": "0deg", "startColor": "#b31217", "endColor": "#ff0000", "centerColor": "#D31027" }, "height": "30px" }], "width": "24px", "alignItems": "center" }, { "type": "text", "text": "กรอกข้อมูลส่วนตัวให้ครบถ้วน", "gravity": "center", "flex": 4, "size": "xs", "color": "#8c8c8c", "margin": "sm" }], "spacing": "sm", "alignItems": "center" },
            { "type": "box", "layout": "horizontal", "contents": [{ "type": "text", "text": "Step 3", "gravity": "center", "size": "xs", "color": "#EF454D", "weight": "bold", "flex": 1, "align": "end" }, { "type": "box", "layout": "vertical", "contents": [{ "type": "box", "layout": "vertical", "contents": [], "cornerRadius": "30px", "width": "12px", "height": "12px", "borderColor": "#EF454D", "borderWidth": "2px", "backgroundColor": "#EF454D" }], "width": "24px", "alignItems": "center", "justifyContent": "center" }, { "type": "text", "text": "กด 'ลงทะเบียน'", "gravity": "center", "flex": 4, "size": "sm", "weight": "bold", "margin": "sm" }], "spacing": "sm", "alignItems": "center" }
        ], "margin": "lg"
    },
    "footer": { "type": "box", "layout": "vertical", "contents": [{ "type": "filler" }, { "type": "box", "layout": "vertical", "contents": [{ "type": "text", "text": "สมัครเลย", "weight": "bold", "color": "#ffffff", "offsetBottom": "1px" }], "backgroundColor": "#ff0000cc", "cornerRadius": "10px", "justifyContent": "center", "alignItems": "center", "width": "250px", "height": "45px", "background": { "type": "linearGradient", "angle": "330deg", "startColor": "#b31217cc", "endColor": "#ff0000cc", "centerColor": "#D31027cc" }, "action": { "type": "uri", "label": "action", "uri": "https://liff.line.me/1660835514-6pJ95rZ1" } }, { "type": "filler" }], "alignItems": "center" }
};

const lotteryJson5 = {
    "type": "bubble", "size": "mega",
    "hero": { "type": "video", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_video/250701_Sell_lekkhaotookchuamong.mp4", "altContent": { "type": "image", "size": "full", "aspectRatio": "16:9", "aspectMode": "cover", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_vdo_cover/250701_Sell_lekkhaotookchuamong_Cover.png" }, "action": { "type": "uri", "label": "กดซื้อ รางวัลที่ 1", "uri": "https://liff.line.me/1660835514-xVBgVpKd" }, "aspectRatio": "16:9", "previewUrl": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_video/250701_Sell_lekkhaotookchuamong.mp4" },
    "body": {
        "type": "box", "layout": "vertical", "contents": [
            { "type": "box", "layout": "vertical", "contents": [{ "type": "box", "layout": "vertical", "contents": [], "backgroundColor": "#c0c0c080", "width": "200px", "height": "3px", "justifyContent": "center", "alignItems": "center", "offsetTop": "34px", "background": { "type": "linearGradient", "angle": "90deg", "startColor": "#EAEAEA", "endColor": "#ff0000", "centerColor": "#c0c0c0" } }, { "type": "box", "layout": "horizontal", "contents": [{ "type": "filler", "flex": 1 }, { "type": "box", "layout": "vertical", "contents": [{ "type": "box", "layout": "vertical", "contents": [{ "type": "image", "url": "https://lotterypluscdn.blob.core.windows.net/lotteryplus-icon/190.png", "size": "20px", "aspectRatio": "1:1", "aspectMode": "cover", "align": "center", "gravity": "center" }], "backgroundColor": "#ffffff", "width": "40px", "height": "40px", "cornerRadius": "100px", "alignItems": "center", "justifyContent": "center", "borderWidth": "1.5px", "borderColor": "#ffffff" }, { "type": "text", "text": "Step 1", "size": "10px", "contents": [{ "type": "span", "text": "กดเลือกเลข ใส่ตะกร้า" }], "wrap": true, "align": "center", "offsetTop": "15px" }], "alignItems": "center", "cornerRadius": "100px", "flex": 2, "width": "60px", "height": "100px" }, { "type": "filler" }, { "type": "box", "layout": "vertical", "contents": [{ "type": "box", "layout": "vertical", "contents": [{ "type": "image", "url": "https://lotterypluscdn.blob.core.windows.net/lotteryplus-icon/190.png", "size": "20px", "aspectRatio": "1:1", "aspectMode": "cover", "align": "center", "gravity": "center" }], "backgroundColor": "#ffffff", "width": "40px", "height": "40px", "cornerRadius": "100px", "alignItems": "center", "justifyContent": "center", "borderColor": "#ADA996", "borderWidth": "1.5px" }, { "type": "text", "text": "Step 1", "size": "10px", "contents": [{ "type": "span", "text": "เลือกช่องทาง การชำระเงิน" }], "wrap": true, "align": "center", "offsetTop": "15px" }], "alignItems": "center", "cornerRadius": "100px", "flex": 2, "width": "60px", "height": "100px" }, { "type": "filler" }, { "type": "box", "layout": "vertical", "contents": [{ "type": "box", "layout": "vertical", "contents": [{ "type": "image", "url": "https://lotterypluscdn.blob.core.windows.net/lotteryplus-icon/190.png", "size": "20px", "aspectRatio": "1:1", "aspectMode": "cover", "align": "center", "gravity": "center" }], "backgroundColor": "#ff0000", "width": "38px", "height": "38px", "cornerRadius": "100px", "alignItems": "center", "justifyContent": "center" }, { "type": "text", "text": "Step 1", "size": "10px", "contents": [{ "type": "span", "text": "คำสั่งซื้อ สำเร็จ" }], "wrap": true, "align": "center", "offsetTop": "15px" }], "alignItems": "center", "cornerRadius": "100px", "flex": 2, "width": "60px", "height": "100px", "justifyContent": "center", "alignItems": "center", "offsetTop": "10px", "borderWidth": "1.5px", "borderColor": "#ff0000" }, { "type": "filler" }] }], "alignItems": "center" }], "backgroundColor": "#f9f5f2"
    }
};

const lotteryJson6 = {
    "type": "carousel",
    "contents": [
        { "type": "bubble", "size": "deca", "hero": { "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_prize_person/jidrid/Jidrid-001.png", "aspectRatio": "1:2", "size": "300px" }, "action": { "type": "uri", "label": "action", "uri": "https://lin.ee/lSM8jEB" }, "styles": { "footer": { "separator": false } } },
        { "type": "bubble", "size": "deca", "hero": { "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_prize_person/jidrid/Jidrid-002.png", "aspectRatio": "1:2", "size": "300px" }, "action": { "type": "uri", "label": "action", "uri": "https://lin.ee/lSM8jEB" }, "styles": { "footer": { "separator": false } } },
        { "type": "bubble", "size": "deca", "hero": { "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_prize_person/jidrid/Jidrid-003.png", "aspectRatio": "1:2", "size": "300px" }, "action": { "type": "uri", "label": "action", "uri": "https://lin.ee/lSM8jEB" }, "styles": { "footer": { "separator": false } } },
        { "type": "bubble", "size": "deca", "hero": { "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_prize_person/jidrid/Jidrid-004.png", "aspectRatio": "1:2", "size": "300px" }, "action": { "type": "uri", "label": "action", "uri": "https://lin.ee/lSM8jEB" }, "styles": { "footer": { "separator": false } } },
        { "type": "bubble", "size": "deca", "hero": { "type": "image", "url": "https://img-flex.xn--m3ca1athe9asc7b2b6iqe.com/line_flex_message/flex_raw_material/source/ltp_prize_person/jidrid/Jidrid-005.png", "aspectRatio": "1:2", "size": "300px" }, "action": { "type": "uri", "label": "action", "uri": "https://lin.ee/lSM8jEB" }, "styles": { "footer": { "separator": false } } }
    ]
};

const flexItems = [
    { id: 1, title: "Lottery Plus Campaign", type: "Video", color: "bg-red-500", icon: "ticket", desc: "การเลือกใช้วิดีโอรีวิวสินค้าและปุ่มที่นำไปสู่สินค้าต่างๆ เพื่อเพิ่มความน่าสนใจ และช่วยกระตุ้นการอยากซื้อให้กับลูกค้ามากขึ้น", jsonCode: lotteryJson, renderer: 'type1' },
    { id: 4, title: "Register Steps", type: "Vertical Timeline", color: "bg-red-500", icon: "list", desc: "เป็นช่องทางที่รวบรวมสินค้าแนะนำ เพื่อให้ลูกค้าสามารถเข้าถึงสินค้าที่ต้องการได้อย่างรวดเร็ว โดยจะมีการอัปเดตสินค้าอย่างสม่ำเสมอ เพื่อไม่ให้พลาดโอกาสสำคัญ", jsonCode: lotteryJson4, renderer: 'type4' },
    { id: 6, title: "Jidrid Collection", type: "Portrait Carousel", color: "bg-blue-500", icon: "image", desc: "Carousel แบบแนวตั้ง (1:2 Aspect Ratio) สำหรับโชว์คอลเลคชั่นรูปภาพเต็มจอ", jsonCode: lotteryJson6, renderer: 'type6' },
    { id: 2, title: "Lottery Plus Carousel", type: "Carousel", color: "bg-green-500", icon: "layers", desc: "แนะนำสินค้า การที่ได้เจอสินค้าที่ตรงใจ จะช่วยให้ลูกค้าสามารถเลือกซื้อสินค้าที่ต้องการได้อย่างสะดวก เพิ่มโอกาสในการซื้อได้มากขึ้น", jsonCode: lotteryJson2, renderer: 'type2' },
    { id: 3, title: "Lucky Numbers", type: "Carousel", color: "bg-purple-600", icon: "star", desc: "ดีไซน์ใหม่ 2025: 1 การ์ดรวมผลรางวัล 2 เจ้า จัดวางแบบ Stack พร้อม Gradient Background", jsonCode: lotteryJson3, renderer: 'type3' },
    { id: 5, title: "Buying Process", type: "Horizontal Timeline", color: "bg-orange-500", icon: "activity", desc: "Process Flow แนวนอน แสดงสถานะการสั่งซื้อพร้อมเส้น Progress ไล่เฉดสี", jsonCode: lotteryJson5, renderer: 'type5' },
];
