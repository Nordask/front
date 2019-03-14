import { NgModule } from '@angular/core';
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
  ]
})
export class QuestionsModule { }
