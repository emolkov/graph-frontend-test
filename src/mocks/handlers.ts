import { http, HttpResponse } from "msw";

import graphs from "./graphs";

export const handlers = [
    http.get("/api/graphs", _ =>
        HttpResponse.json(graphs.map((_, idx) => idx))
    ),
    http.get("/api/graphs/:id", ({ params }) => {
        const { id } = params;
        const graph = graphs.find((_, gid) => gid === parseInt(id as string));
        if (graph) {
            return HttpResponse.json(graph);
        } else {
            return new HttpResponse("Not found", { status: 404 });
        }
    }),
];
