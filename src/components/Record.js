import React , {Component} from "react";
import Airtable from 'airtable-node'
import { dom } from "@fortawesome/fontawesome-svg-core";

const Media = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appaZPyyxt98aRiRU')
    .table('Media')

const Ratings = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appaZPyyxt98aRiRU')
    .table('Ratings')

class Todo extends Component {
    rate = (rating) => {
        console.log("Rating " + this.props.name + " with a " + rating)

        Media.update(this.props.id, {"Reading": false}).then(resp => {
            console.log(resp)
        })
        
        Ratings.create(
            {"fields": {
                "Record": [this.props.id],
                "Rating": rating.toString()
            }}
        ).then(resp => {
            console.log(resp)
            this.props.reRun()
        })
    }

    markReading = () => {
        Media.update(this.props.id, {"Reading": true}).then(resp => {
            console.log(resp);
        })

        var element = document.getElementById("reading");
        element.style.borderColor = "green";
    }

    open = () => {
        console.log("Marking " + this.props.name + " as reading")

        var windowReference = window.open;
        
        Media.update(this.props.id, {"Reading": true}).then(resp => {
            console.log(resp)
            window.open(this.URL);

        })
    }
    
    render() {
        return (
        <div>
            <div className="pb-2 grid grid-cols-3">
                <a
                        className= "rounded-lg px-2 py-2 border active:border-gray-500 m-2 text-center focus:outline-none shadow hover:shadow-md active:shadow-sm place-content-center"

                        href={"https://airtable.com/tblYG0PIvW9GELAvH/viwsdszRgNFdNL83F/" + this.props.id}
                    >
                            Airtable
                </a>

                <a 
                        className= "rounded-lg px-2 py-2 border active:border-gray-500 m-2 text-center focus:outline-none shadow hover:shadow-md active:shadow-sm place-content-center"

                        href={this.props.URL}
                    >
                            Open in Safari
                </a>

                <button onClick={() => this.markReading()} className={`rounded-lg px-2 py-2 border active:border-gray-500 m-2 text-center focus:outline-none shadow hover:shadow-md active:shadow-sm place-content-center ${this.props.reading ? "border-green-500" : ""}`} id="reading">
                    Reading
                </button>
            </div>
            
            <a href={this.props.URL}>
                <button onClick={() => this.open()} className="shadow-md hover:shadow-lg active:border-gray-500 group block rounded-lg p-4 border hover:border-gray-200 m-2 text-left justify-left text-justify">
                    <div className="p-3 grid">
                        <div className="font-medium text-black text-xl pb-2">{this.props.name}</div>
                        <div className="leading-5 text-sm">{this.props.excerpt}</div>
                    </div>
                </button>
            </a>

            <div className="grid">
                <button onClick={() => this.rate(1)}
                        className= "rounded-lg px-2 py-1 border active:border-gray-500 m-2 text-center focus:outline-none shadow hover:shadow-md active:shadow-sm"
                    >
                        Next
                </button>
            </div>

            <div className="grid grid-rows-1 grid-cols-2">
                <button 
                    className= "rounded-lg px-2 py-1 border active:border-gray-500 m-2 text-center focus:outline-none shadow hover:shadow-md active:shadow-sm"
                    onClick={() => this.rate(2)}
                >
                        Cultivate
                </button>
                <button 
                    className= "rounded-lg px-2 py-1 border active:border-gray-500 m-2 text-center focus:outline-none shadow hover:shadow-md active:shadow-sm"

                    onClick={() => this.rate(3)}
                >
                        Curate
                </button>
            </div>
        </div>
        );
    }
}

export default Todo