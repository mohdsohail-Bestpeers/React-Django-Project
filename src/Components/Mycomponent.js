import React, { Component } from 'react'
import axios from 'axios'
export default class Mycomponent extends Component {
    state = {
        details : [],
        user: "",
        quote: "",
    }

    componentDidMount(){
        let data;

        axios.get('http://127.0.0.1:8000/wel/')
        .then(res => {
            data = res.data
            console.log(data)
            this.setState({
                details : data
                
            })
        })  
    }


    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log()
    };
  
    handleSubmit = (e) => {
        e.preventDefault();
  
        axios
            .post("http://localhost:8000/wel/", {
                Name: this.state.user,
                Detail: this.state.quote,
            })
            .then((res) => {
                this.setState({
                    user: "",
                    quote: "",
                });
            })
            .catch((err) => {});
    };
        
    
    render() {
        return (
                <div className="container jumbotron ">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <div>
                                <span className="input-group-text"> Author </span>
                            </div>
                            <input type="text" className="form-control" 
                                placeholder="Name of the Poet/Author"
                                value={this.state.user} name="user"
                                onChange={this.handleInput} />
                        </div>
  
                        <div>
                            <div>
                                <span className="input-group-text">Your Quote </span>
                            </div>
                            <textarea className="form-control " 
                                    placeholder="Tell us what you think of ....." 
                                    value={this.state.quote} name="quote" 
                                    onChange={this.handleInput}>
                            </textarea>
                        </div>
  
                        <button type="submit"> Submit </button>
                    </form>
                    <hr         
                    />

                    <h1>Quote is going to be written here</h1>
                            <footer>--- by
                            <cite title="Source Title"> 
                                written by meeeee 
                            </cite>
                            </footer><br/><br/>
                    {this.state.details.map( (details, id) => (
                    <div key={id}>
                        <div>
                            <div>
                            <cite title="Source Title">Name : {details.Name}</cite> 
                            <h1>Detail : {details.Detail} </h1>
                            </div>
                        </div>
                    </div>
                    )
                    )}
                </div>
            )
        }
    }


