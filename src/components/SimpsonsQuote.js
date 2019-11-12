import React from 'react';
import axios from 'axios';

class SimpsonsQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            character: '',
            quote: ''
        };
    }

    handleChangeQuote = () => {
        axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
            .then((res) => {
                const characters = res.data;
                this.setState({
                    image: characters[0].image,
                    character: characters[0].character,
                    quote: characters[0].quote
                })
            })
          console.log('merge')  ;
    }

    render() {
        return(
            <div>
                <img src={this.state.image} />
                <p>{this.state.character}</p>
                <p>{this.state.quote}</p>
                <button onClick={this.handleChangeQuote}>Change</button>
            </div>
        );
    }
}

export default SimpsonsQuote;
