import { Routes } from "@angular/router";

export const Default_Routes : Routes =[
{
    path : '',
    loadChildren:()=>import ('../cms/cms.module').then(m=>m.CmsModule)
}
]