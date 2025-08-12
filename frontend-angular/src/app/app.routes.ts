import { Routes } from '@angular/router';
import {FrontpageComponent} from "./frontpage/frontpage.component";
import {MtgInputComponent} from "./mtg-input/mtg-input.component";
import {MtgAnalysisComponent} from "./mtg-analysis/mtg-analysis.component";

export const routes: Routes = [
    { path: '', component: FrontpageComponent },
    { path: 'mtgInput', component: MtgInputComponent },
    { path: 'mtgAnalysis', component: MtgAnalysisComponent }
];
