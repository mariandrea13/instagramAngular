import { ProfileComponent } from './profile/profile.component';
import { PublishmentComponent } from './publishment/publishment.component';
import { RouterModule, Routes} from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
export const PagesRoutes: Routes=[
    {
        path:'',
        component: PublishmentComponent
    },
    {
        path: 'perfil',
        component: ProfileComponent
    },
    {
        path:'Editar-Perfil',
        component: EditProfileComponent 
    }
]

@NgModule({
    imports:[
        RouterModule.forChild([
            {
                path:'',
                component: PublishmentComponent
             },
             {
                path: 'perfil',
                component: ProfileComponent
            },
            {
                path:'Editar-Perfil',
                component: EditProfileComponent 
            }
        ])
    ]
})


export class PagesRootingModule{}