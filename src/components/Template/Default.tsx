import React from "react"
import {
    Route,
    Switch,
} from "react-router-dom"
import NotFound from "../../pages/erros/NotFound"
import Events from "../../pages/default/calendar"
import Event from "../../pages/default/event"
import Logout from "../../pages/security/Logout"
import Discovery from "../../pages/discovery"
import Navbar from "./Navbar"
import Club from "../../pages/club";


const DefaultTemplate: React.FC = () => {
    return (
        <div className="h-full overflow-hidden">
            <Navbar>
                <div id="main" className="overflow-y-auto bg-gray-100"
                    style={{height: "calc(100vh - 3rem)"}}>
                    <Switch>
                        {/* Add your route here */}
                        <Route path="/discovery" component={Discovery}/>
                        <Route path="/calendar" component={Events}/>
                        <Route path="/event/:id" component={Event}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </div>
            </Navbar>
        </div>
    )
}

export default DefaultTemplate