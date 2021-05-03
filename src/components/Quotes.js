import React, { Component } from 'react'
import { quotes } from "../utils/_Data";
import Footer from "./Footer";

class Quotes extends Component {
    state = {
        qid : 1,
        content : quotes[1].content,
        author : quotes[1].author
    }
    handleNextQuote = () => {
        this.setState ((prevState) => {
            const newQuoteId = ((prevState.qid + 1) % Object.keys (quotes).length) + 1;
            return {
                qid : newQuoteId,
                content : quotes[newQuoteId].content,
                author : quotes[newQuoteId].author
            }
        })
    }
    render () {
        const { content, author } = this.state;
        return (
            <div className="quotes-container">
                <div className="quote-container">
                    <div className="quote-quotation-mark">
                        “
                    </div>

                    <div className="quote-content">
                        {content}
                    </div>

                    <div className="quote-author">
                        &mdash; {author}
                    </div>

                    <button className="quote-button-next contact-form-button" onClick={this.handleNextQuote}>
                        Show Next
                    </button>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Quotes;