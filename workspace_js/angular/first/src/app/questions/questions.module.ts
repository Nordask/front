import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {QuestionsIndexComponent} from "../questions-index/questions-index.component";
import {QuestionsNewComponent} from "../questions-new/questions-new.component";
import {QuestionsViewComponent} from "../questions-view/questions-view.component";


@NgModule({
  declarations: [
    QuestionsIndexComponent,
    QuestionsNewComponent,
    QuestionsViewComponent
  ],
  exports: [
    QuestionsIndexComponent,
    QuestionsNewComponent,
    QuestionsViewComponent
  ],
  imports: [
    FormsModule
  ]
})
export class QuestionsModule { }
