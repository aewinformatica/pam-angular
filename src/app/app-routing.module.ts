import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NaoAutorizadoComponent } from "./core/nao-autorizado.component";
import { PaginaNaoEncontradaComponent } from "./core/pagina-nao-encontrada.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent},
  { path: "users", loadChildren: () => import ('./users/users.module').then( m => m.UsersModule)},
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "nao-autorizado", component: NaoAutorizadoComponent },
  { path: "pagina-nao-encontrada", component: PaginaNaoEncontradaComponent },
  { path: "**", redirectTo: "pagina-nao-encontrada" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
