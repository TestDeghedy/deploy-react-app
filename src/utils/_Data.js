import img2048 from '../img/2048.png';
import imgMyReadsReact from '../img/my-reads-react.png';
import imgNatoursLandingPage from '../img/natours-landing-page.png';
import imgWouldYouRather from '../img/would-you-rather.png';
import imgEvaluateNewsNlp from '../img/evaluate-news-nlp.png';

export let projects = {
    "1" : {
        name : "Would You Rather",
        description : ["A React app that lets a user play the “Would You Rather?” game.", "Users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.", "The state management is done using Redux."],
        img : imgWouldYouRather,
        github : "https://github.com/AbdelrahmanDeghedy/Would-You-Rather"
    },
    "2" : {
        name : "2048 Game",
        description : ["It's a game in which, we combine numbered tiles in order to gain a higher numbered tile.", "In this game you start with two tiles, the lowest possible number available is two. Then you will play by combining the tiles with the same number to have a tile with the sum of the number on the two tiles.", "I created it using HTML, SASS, vanilla Javascript."],
        img : img2048,
        github : "https://github.com/AbdelrahmanDeghedy/2048-Game",
    },
    "3" : {
        name : "My Reads React",
        description : ["It's an app that let's you manage books, by organizing them into different shelves, searching for a specific book, and many more.", "The state management is done using React."],
        img : imgMyReadsReact,
        github : "https://github.com/AbdelrahmanDeghedy/My-Reads-React",
    },
    "4" : {
        name : "Natours Landing Page",
        description : ["A landing page for a fictionous nature tours agency", "The website contains a ton of new CSS features and animation to make the website more modern."],
        img : imgNatoursLandingPage,
        github : "https://github.com/AbdelrahmanDeghedy/Natours-Landing-Page"
    },
    "5" : {
        name : "Evaluate News Articles",
        description : ["This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.", "When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from meaningcloud API, based on the contents of the article."],
        img : imgEvaluateNewsNlp,
        github : "https://github.com/AbdelrahmanDeghedy/Evaluate-News-Articles-NLP"
    }
}

export let quotes = {
    "1" : {
        content : "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
        author : "Buddha",
    },
    "2" : {
        content : "Quality of questions determines the quality of answers.",
        author : "Me",
    },
    "3" : {
        content : "Plans are fragile, short-lived, and imperfect, but without them, life became a complete mess.",
        author : "Me",
    },
    "4" : {
        content : "Resentment is like drinking poison and then hoping it will kill your enemies.",
        author : "Mandela",
    },
    "5" : {
        content : "Compare Yourself to Who You Were Yesterday, Not to Who Someone Else is Today.",
        author : "Jordan Peterson",
    },
}