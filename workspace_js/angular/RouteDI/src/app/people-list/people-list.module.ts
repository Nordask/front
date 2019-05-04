import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from '@angular/core';
import { PeopleListComponent } from './people-list.component';
import { PeopleListService } from './people-list.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [PeopleListComponent],
    exports: [PeopleListComponent]
})
export class PeopleListModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PeopleListModule,
            providers: [PeopleListService]
        };
    }
}
