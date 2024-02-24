"use client"

import React, {useState} from "react";
import type {OgObject} from "open-graph-scraper/dist/lib/types";


export default function OpengraphDetails({data}: { data: OgObject }) {
    const [seeFullDetail, setSeeFullDetail] = useState(false);


    return (
        <div className={""}>
            <button
                onClick={() => {
                    setSeeFullDetail(!seeFullDetail)
                }}
                className={"bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mb-2"}>See Full
                Detail
            </button>
            {seeFullDetail &&
                <pre className={"text-sm overflow-x-auto"}>
                    {JSON.stringify(data, null, 2)}
                </pre>
            }
        </div>


    );
}
