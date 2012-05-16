module.exports = {
    "meta": {
        "version": "0.8.1",
        "defaultTitle": "하루프레스 > Haroopress Official Site",
        "description": "하루프레스는 하루를 손쉽게 기록해 보자라는 뜻의 블로그 엔진으로, Node.js 와 EJS 템플릿 엔진으로 설계된 Github 에서 제공하는 정적 페이지 서비스를 위한 블로그 엔진입니다.",
        "siteUrl": "http://haroopress.github.com",
        "author": "Rhio Kim",
        "keywords": [
            "node.js",
            " haroopress",
            " ejs",
            " express.js",
            " blog"
        ]
    },
    "lang": "en",
    "contentLength": 6,
    "deployBranch": "gh-pages",
    "CNAME": "",
    "sourceDir": __dirname +"/source/data",
    "publicDir": __dirname +"/_public",
    "deployDir": __dirname +"/_deploy",
    "themeDir": __dirname +"/source/themes",
    "theme": {
        "name": "wood"
    },
    "plugins": {
        "github": {
            "display": true,
            "user": "haroopress",
            "repoCount": 10,
            "profileLink": true,
            "skipForks": true
        },
        "twitter": {
            "display": true,
            "user": "haroopress",
            "tweetCount": 10,
            "showReplies": false,
            "followerButton": true,
            "showFollowerCount": true,
            "tweetButton": true 
        },
        "google": {
            "display": true,
            "googleAnalyticsId": "UA-31231507-1",
            "googlePlus": true,
            "googlePlusSize": "medium",
            "gplus": {
                "display": false,
                "user": ""
            }
        },
        "disqus": {
            "display": true,
            "shortName": "haroopress",
            "showCommentCount": true
        },
        "facebook": {
            "display": true,
            "user": "haroopress",
            "showSiteLink": true,
            "showLikeButton": true 
        },
        "delicious": {},
        "contributors": {
            "display": true
        },
        "weather": {
            "display": true,
            "delay": 0,
            "zipcode": "KSXX0037"
        }
    }
}
