import React from "react";
import { Redirect } from "react-router-dom";
import Home from '../application/Home';
import Singers from "../application/Singers";
import Recommend from "../application/Recommend";
import Rank from "../application/Rank";

export default [
    {
        path: '/',
        component: Home,
        routes: [
            {
                path: '/',
                exact: true,
                render: () => (
                    <Redirect to={"/Recommend"} />
                )
            },
            {
                path: '/recommend',
                component: Recommend
            },
            {
                path: '/singers',
                component: Singers
            },
            {
                path: '/rank',
                component: Rank
            }
        ]
    }
];
