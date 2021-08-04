import React , {Component} from "react";
import Airtable from 'airtable-node'
import { dom } from "@fortawesome/fontawesome-svg-core";
import Button from "./Button";

const Media = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appaZPyyxt98aRiRU')
    .table('Media')

const Ratings = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appaZPyyxt98aRiRU')
    .table('Ratings')

class Article extends Component {
    URL = this.props.URL
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
        
        Media.update(this.props.id, {"Reading": true}).then(resp => {
            console.log(resp)
            window.location(this.URL);

        })
    }
    
    render() {
        return (
        <div className="grid gap-2 rounded-lg p-4 text-left justify-left text-justify">
            <div className="mb-2 grid grid-cols-3 gap-2 h-6">
                <Button
                    href={"https://airtable.com/tblYG0PIvW9GELAvH/viwsdszRgNFdNL83F/" + this.props.id}
                    title="Airtable"
                />
                <Button
                    href={this.URL}
                    title="Safari"
                />

                <button onClick={() => this.markReading()} className={`rounded-lg px-0 py-0 border active:border-gray-500 text-center focus:outline-none place-content-center text-sm ${this.props.reading ? "border-green-500 text-gray-400" : "text-gray-200"}`} id="reading">
                    Reading
                </button>
            </div>
            
            <a href={this.URL}>
                <button onClick={() => this.open()} className="active:border-gray-500 group block rounded-lg hover:border-gray-200 text-left justify-left text-justify">
                    <div className="p-1 grid">
                        <div className="font-medium text-black text-xl pb-2">{this.props.name}</div>
                        <div className="leading-5 text-sm">{this.props.excerpt}</div>
                    </div>
                </button>
            </a>

            <div className="grid grid-cols-3 gap-2">
                <button onClick={() => this.rate(1)}
                        className= "rounded-lg px-1 py-1 border active:border-gray-500 text-center focus:outline-none place-content-center text-xs"
                >
                        0
                </button>
                <button 
                    className= "rounded-lg px-1 py-1 border active:border-gray-500 text-center focus:outline-none place-content-center text-xs"
                    onClick={() => this.rate(2)}
                >
                        +
                </button>
                <button 
                    className= "rounded-lg px-1 py-1 border active:border-gray-500 text-center focus:outline-none place-content-center text-xs"

                    onClick={() => this.rate(3)}
                >
                        ++
                </button>
            </div>
        </div>
        );
    }
}

export default Article