import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XTableComponent } from './x-table/x-table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [XTableComponent],
  exports:[XTableComponent]
})
export class RockModuleModule {}
