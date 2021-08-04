import React, { useState, useEffect } from 'react'
import Article from "./Record";
import Airtable from 'airtable-node'

const airtable = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appaZPyyxt98aRiRU')
    .table('Media')

export default function TaskList(props) {

    const [activities, setActivities] = useState({});

    useEffect(() => {
        airtable.list({
            maxRecords: 999,
            pageSize: 100,
            view: 'Articles',
            cellFormat: 'json'
        })
        .then((data) => {
            setActivities(data.records);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    console.log(activities)

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    shuffleArray(activities)

    console.log("Testing " + props.cycle)

    return (
        <div className="gap-3 grid w-full grid-cols-3">
                {activities.length > 0 ? (
                    activities
                    .sort(function (a,b) {
                        return b.fields.SelectionWeight - a.fields.SelectionWeight
                    })
                    .slice(0, 3)
                    .map((record) => (
                        <Article
                            name={record.fields.Name}
                            excerpt={record.fields.Excerpt}
                            id={record.id}
                            reRun={props.reRun}
                            URL={record.fields.URL}
                            key={record.id}
                            reading={record.fields.Reading}
                        />
                    ))
                ) : (
                    <p>Fetching Data...</p>
                )}
        </div>
    );
}
