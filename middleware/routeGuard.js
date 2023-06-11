import { NextResponse } from "next/server";

export default function routeGuard(req) {

    let verify = req.cookies.get("loggedIn");

    let url = req.url;

    if (url.includes('/auth/login')) {
        if (verify) {
            return NextResponse.redirect("/");
        } else {
            return NextResponse.next();
        }
    }

    if (!verify) {
        return NextResponse.redirect("/login");
    }

}