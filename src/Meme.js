import React from "react"

class Meme extends React.Component {
    constructor(){
        super()
        this.state = {
            meme: []
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://api.imgflip.com/get_memes")            
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    meme: data.data.memes
                })
            })
    }
    
        render() {
            return (
                <div>
                    {this.state.meme.length > 0 ?
                    <div>
                        <img src={this.state.meme[this.props.randomNum].url} />
                        <h3>{this.state.meme[this.props.randomNum].name}</h3>
                    </div>   
                    : null 
                }
                </div>
            )
        }
    }

export default Meme

