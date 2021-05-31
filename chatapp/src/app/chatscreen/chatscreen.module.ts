import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { ChatdisplayComponent } from './chatdisplay/chatdisplay.component';
import { ProfileComponent } from './profile/profile.component';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    ChatlistComponent,
    ChatdisplayComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule
  ],
  exports:[
    ChatlistComponent,
    ChatdisplayComponent,
    ProfileComponent
  ]
})
export class ChatscreenModule { }
