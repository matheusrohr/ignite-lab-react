import { Hearder } from "../components/Header";
import { Siderbar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event(){
    return(
        <div className="flex flex-col min-h-screen">
            <Hearder />
            <main className="flex flex-1">
                <Video />
                <Siderbar />
            </main>
        </div>
    )
}