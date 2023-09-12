import { Routes } from "@angular/router";

export const Backend_Routes : Routes =[
{
    path : 'auth',
    loadChildren:()=>import ('../auth/auth.module').then(m=>m.AuthModule)
}

]