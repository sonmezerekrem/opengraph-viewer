"use client"

import React, {useEffect, useState} from "react";
import type {OgObject} from "open-graph-scraper/dist/lib/types";
import ErrorMessage from "@/components/ErrorMessage";
import Input from "@/components/Input";
import OpengraphDetails from "@/components/OpengraphDetails";
import OpengraphInfo from "@/components/OpengraphInfo";
import Heading from "@/components/Heading";

type ApiResult = {
    Success: boolean;
    Data: OgObject;
}

export default function Card() {
    const [url, setURL] = useState("");
    const [opengraph, setOpenGraph] = useState<ApiResult>({Success: false, Data: {}});
    const [error, setError] = useState("");

    useEffect(() => {
        if (url) {
            fetch('/api', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({url})
            }).then(res => res.json())
                .then(data => {
                    if (data.success) {
                        setError("")
                        console.log(data.result)
                        setOpenGraph({Success: data.success, Data: data.result})
                    } else {
                        setError("Invalid URL")
                        setOpenGraph({Success: false, Data: {}})
                    }
                }).catch(e => {
                setError("Invalid URL")
                setOpenGraph({Success: false, Data: {}})
            })
        }
    }, [url])

    return (
        <div
            className="flex flex-col w-full max-w-2xl min-h-[30rem] overflow-y-auto border shadow rounded-md p-5 gap-5 mt-auto">

            <Heading>Open Graph Metadata</Heading>

            <Input value={url} setValue={setURL}/>

            {error && <ErrorMessage message={error}/>}

            {opengraph.Success &&
                <div className={"flex flex-col gap-7"}>
                    <OpengraphInfo data={opengraph.Data}/>
                    <OpengraphDetails data={opengraph.Data}/>
                </div>
            }
        </div>

    );
}
