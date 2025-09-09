import React from "react";
import "./aside.css";
import logo from "../../assets/logo22.png";
import {House, Compass,Star,Heart} from 'lucide-react';

export default function Aside(){
    return(
        <aside>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="page-element">
                <div className="element-flex">
                <House/>
                <span>Dashboard</span>

                </div>
                <div className="element-flex">
                <Compass />
                <span>Explore</span>
                </div>
                <div className="element-flex">
                <Star />
                <span>Reviews</span>
                </div>
                <div className="element-flex">
                <Heart />
                <span>Favourites</span>
                </div>
                <div className="element-flex">
                    
                </div>
            </div>
            <div>

            </div>
        </aside>
    )
}