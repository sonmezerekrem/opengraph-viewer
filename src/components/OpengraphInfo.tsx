import React from "react";
import type {OgObject} from "open-graph-scraper/dist/lib/types";

export default function OpengraphInfo({data}: { data: OgObject }) {
    return (
        <div className={"flex flex-col gap-3"}>
            {data.ogImage &&
                <img src={data.ogImage[0].url}
                     alt={"og-image"}
                     className={"w-full rounded-md"}
                />}
            {data.ogSiteName &&
                <p>
                    <span className={"font-bold mr-1"}>Site Name:</span>
                    {data.ogSiteName}
                </p>
            }
            {data.ogTitle &&
                <p>
                    <span className={"font-bold mr-1"}>Title:</span>
                    {data.ogTitle}
                </p>
            }
            {data.ogDescription &&
                <p>
                    <span className={"font-bold mr-1"}>Description:</span>
                    {data.ogDescription}
                </p>
            }
            {data.ogType &&
                <p>
                    <span className={"font-bold mr-1"}>Type:</span>
                    {data.ogType}
                </p>
            }
            {data.ogVideo &&
                <iframe width="100%" height="400"
                        className={"rounded-md"}
                        src={data.ogVideo[0].url}>
                </iframe>
            }
        </div>

    );
}
